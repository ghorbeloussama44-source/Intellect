// Globe WebGL (sans dépendance) : continents en points, arcs d'étudiants vers l'Allemagne et la Russie.
// Données : js/globe-data.js (window.GLOBE_LAND, lat/lon en dixièmes de degré).
(() => {
  const cv = document.getElementById("globeGL");
  const land = window.GLOBE_LAND;
  if (!cv || !land) return;
  const gl = cv.getContext("webgl", { antialias: true, alpha: true, premultipliedAlpha: false });
  if (!gl) { cv.parentNode.classList.add("no-gl"); cv.remove(); return; }
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const RAD = Math.PI / 180;
  const vec = (lat, lon, r = 1) => [r * Math.cos(lat * RAD) * Math.sin(lon * RAD), r * Math.sin(lat * RAD), r * Math.cos(lat * RAD) * Math.cos(lon * RAD)];

  const CITIES = { berlin: [52.52, 13.4], moscow: [55.75, 37.62] };
  const FEEDERS = [ // villes d'origine possibles : arcs décoratifs, sans étiquette
    [33.57, -7.59, "berlin"], [36.8, 10.18, "berlin"], [36.75, 3.06, "moscow"], [14.7, -17.45, "berlin"],
    [30.04, 31.24, "moscow"], [33.89, 35.5, "berlin"], [6.5, 3.4, "moscow"], [4.05, 9.7, "berlin"], [48.85, 2.35, "moscow"], [41.0, 28.98, "berlin"]
  ];

  const VS_PT = `attribute vec3 aPos;uniform mat3 uRot;uniform vec2 uScale;uniform float uSize,uDpr,uK;varying float vZ;
  void main(){vec3 p=uRot*aPos;float w=3.6/(3.6-p.z);gl_Position=vec4(p.xy*w*uScale,0.,1.);vZ=p.z;gl_PointSize=uSize*uDpr*uK*w*(.6+.4*max(p.z,0.));}`;
  const FS_PT = `precision mediump float;uniform float uMode,uT,uAlpha;varying float vZ;
  void main(){vec2 c=gl_PointCoord-.5;float d=length(c);if(d>.5)discard;
    float face=smoothstep(-.35,.65,vZ);
    if(uMode<.5){float a=smoothstep(.5,.15,d)*(.1+.9*face)*uAlpha;vec3 col=mix(vec3(.12,.45,.8),vec3(.55,.88,1.),face);gl_FragColor=vec4(col,a);}
    else{float ring=smoothstep(.04,0.,abs(d-(.18+.3*fract(uT*.6))))*(1.-fract(uT*.6));float core=smoothstep(.12,.05,d);
      float a=(ring+core)*step(-.15,vZ);gl_FragColor=vec4(mix(vec3(1.,.54,0.),vec3(1.),core*.6),a);}}`;
  const VS_LN = `attribute vec3 aPos;attribute float aT;uniform mat3 uRot;uniform vec2 uScale;varying float vT,vZ;
  void main(){vec3 p=uRot*aPos;float w=3.6/(3.6-p.z);gl_Position=vec4(p.xy*w*uScale,0.,1.);vT=aT;vZ=p.z;}`;
  const FS_LN = `precision mediump float;uniform float uT,uOff,uSpeed,uBase;uniform vec3 uCol;varying float vT,vZ;
  void main(){float d=mod(fract(uT*uSpeed+uOff)-vT+1.,1.);float trail=exp(-d*9.)*step(d,.45);
    float a=(uBase+trail*1.1)*smoothstep(-.25,.35,vZ)*smoothstep(0.,.06,vT)*smoothstep(1.,.94,vT);
    gl_FragColor=vec4(mix(uCol,vec3(1.),trail*.5),a);}`;
  const VS_HALO = `attribute vec2 aP;uniform vec2 uScale;varying vec2 vUV;void main(){vUV=aP/uScale;gl_Position=vec4(aP,0.,1.);}`;
  const FS_HALO = `precision mediump float;varying vec2 vUV;uniform float uT;
  void main(){float r=length(vUV);
    float body=smoothstep(1.,.97,r);
    vec3 lit=mix(vec3(0.,.1,.22),vec3(0.,.3,.55),smoothstep(1.2,-.4,length(vUV-vec2(-.35,.45))));
    float rim=exp(-abs(r-1.)*14.)*.85;float halo=exp(-(r-1.)*5.)*step(1.,r)*.55;
    vec3 col=lit*body+vec3(.18,.72,.95)*(rim+halo)+vec3(1.,.54,0.)*exp(-length(vUV-vec2(.8,.7))*3.)*.18*step(.001,r);
    gl_FragColor=vec4(col,clamp(body*.9+rim+halo,0.,1.));}`;

  function prog(vs, fs) {
    const mk = (t, s) => { const o = gl.createShader(t); gl.shaderSource(o, s); gl.compileShader(o); return o; };
    const p = gl.createProgram(); gl.attachShader(p, mk(gl.VERTEX_SHADER, vs)); gl.attachShader(p, mk(gl.FRAGMENT_SHADER, fs)); gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
    p.u = n => gl.getUniformLocation(p, n); p.a = n => gl.getAttribLocation(p, n); return p;
  }
  let PT, LN, HALO;
  try { PT = prog(VS_PT, FS_PT); LN = prog(VS_LN, FS_LN); HALO = prog(VS_HALO, FS_HALO); }
  catch (e) { cv.parentNode.classList.add("no-gl"); cv.remove(); return; }

  const buf = data => { const b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW); return b; };
  // terres
  const lp = []; for (let i = 0; i < land.length; i += 2) lp.push(...vec(land[i] / 10, land[i + 1] / 10));
  const landBuf = buf(lp), landN = lp.length / 3;
  // marqueurs
  const mkBuf = buf([...vec(...CITIES.berlin, 1.004), ...vec(...CITIES.moscow, 1.004)]);
  // arcs
  const slerp = (a, b, t) => { const o = Math.acos(Math.min(1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2])), s = Math.sin(o); if (s < 1e-5) return a;
    const k1 = Math.sin((1 - t) * o) / s, k2 = Math.sin(t * o) / s; return [0, 1, 2].map(i => a[i] * k1 + b[i] * k2); };
  function arc(from, to, lift) {
    const a = vec(...from), b = vec(...to), ang = Math.acos(Math.min(1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2])), out = [], N = 72;
    for (let i = 0; i <= N; i++) { const t = i / N, p = slerp(a, b, t), l = Math.hypot(...p), h = 1.004 + Math.sin(Math.PI * t) * lift * ang; out.push(p[0] / l * h, p[1] / l * h, p[2] / l * h, t); }
    return { buf: buf(out), n: N + 1 };
  }
  const arcs = FEEDERS.map(([la, lo, to], i) => ({ ...arc([la, lo], CITIES[to], .2), orange: false, off: i * .37, speed: .16 + (i % 3) * .03 }));
  arcs.push({ ...arc(CITIES.berlin, CITIES.moscow, .34), orange: true, off: 0, speed: .22 }, { ...arc(CITIES.moscow, CITIES.berlin, .42), orange: true, off: .5, speed: .22 });
  const quad = buf([-1, -1, 3, -1, -1, 3]);

  // rotation : amène (lat0, lon0) face caméra, puis balancement
  const rot = (a, b) => { const ca = Math.cos(a), sa = Math.sin(a), cb = Math.cos(b), sb = Math.sin(b);
    return [ca, sb * sa, -cb * sa, 0, cb, sb, sa, -sb * ca, cb * ca]; };
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  const hero = cv.closest(".hero");
  if (!reduced && hero) hero.addEventListener("pointermove", e => { mouse.tx = e.clientX / innerWidth - .5; mouse.ty = e.clientY / innerHeight - .5; }, { passive: true });

  const labels = [...document.querySelectorAll(".globe-label")].map(el => ({ el, c: CITIES[el.dataset.city] }));
  let W = 1, H = 1, dpr = 1, R = 1;
  function size() {
    dpr = Math.min(devicePixelRatio || 1, 2); W = cv.clientWidth; H = cv.clientHeight;
    cv.width = Math.max(2, W * dpr | 0); cv.height = Math.max(2, H * dpr | 0); gl.viewport(0, 0, cv.width, cv.height);
    R = Math.min(W, H) * .44;
  }
  gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  let t0 = performance.now(), raf = 0, visible = true;
  function frame(now) {
    const t = reduced ? 2.2 : (now - t0) / 1000;
    mouse.x += (mouse.tx - mouse.x) * .05; mouse.y += (mouse.ty - mouse.y) * .05;
    const intro = Math.min(1, t / 1.6), ease = 1 - Math.pow(1 - intro, 3);
    const yaw = (-40 - 10 * Math.sin(t * .16) + mouse.x * 14 + Math.min(scrollY, 1400) * .045) * RAD, pitch = (32 - mouse.y * 10 - Math.min(scrollY, 1400) * .006) * RAD;
    const M = new Float32Array(rot(yaw, pitch));
    const sc = [R / (W / 2) * (.8 + .2 * ease), R / (H / 2) * (.8 + .2 * ease)];

    gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
    // halo + corps
    gl.useProgram(HALO); gl.bindBuffer(gl.ARRAY_BUFFER, quad);
    let l = HALO.a("aP"); gl.enableVertexAttribArray(l); gl.vertexAttribPointer(l, 2, gl.FLOAT, false, 0, 0);
    gl.uniform2f(HALO.u("uScale"), ...sc); gl.uniform1f(HALO.u("uT"), t); gl.drawArrays(gl.TRIANGLES, 0, 3);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    // terres
    gl.useProgram(PT); gl.uniformMatrix3fv(PT.u("uRot"), false, M); gl.uniform2f(PT.u("uScale"), ...sc);
    gl.uniform1f(PT.u("uDpr"), dpr); gl.uniform1f(PT.u("uK"), R / 260); gl.uniform1f(PT.u("uT"), t); gl.uniform1f(PT.u("uAlpha"), ease);
    l = PT.a("aPos"); gl.bindBuffer(gl.ARRAY_BUFFER, landBuf); gl.enableVertexAttribArray(l); gl.vertexAttribPointer(l, 3, gl.FLOAT, false, 0, 0);
    gl.uniform1f(PT.u("uMode"), 0); gl.uniform1f(PT.u("uSize"), 2.6); gl.drawArrays(gl.POINTS, 0, landN);
    // arcs
    gl.useProgram(LN); gl.uniformMatrix3fv(LN.u("uRot"), false, M); gl.uniform2f(LN.u("uScale"), ...sc); gl.uniform1f(LN.u("uT"), t);
    const la = LN.a("aPos"), lt = LN.a("aT");
    for (const a of arcs) {
      gl.bindBuffer(gl.ARRAY_BUFFER, a.buf); gl.enableVertexAttribArray(la); gl.enableVertexAttribArray(lt);
      gl.vertexAttribPointer(la, 3, gl.FLOAT, false, 16, 0); gl.vertexAttribPointer(lt, 1, gl.FLOAT, false, 16, 12);
      gl.uniform1f(LN.u("uOff"), a.off); gl.uniform1f(LN.u("uSpeed"), a.speed); gl.uniform1f(LN.u("uBase"), (a.orange ? .5 : .16) * ease);
      gl.uniform3f(LN.u("uCol"), ...(a.orange ? [1, .54, 0] : [.18, .72, .95])); gl.drawArrays(gl.LINE_STRIP, 0, a.n);
    }
    // repères
    gl.useProgram(PT); l = PT.a("aPos"); gl.bindBuffer(gl.ARRAY_BUFFER, mkBuf); gl.vertexAttribPointer(l, 3, gl.FLOAT, false, 0, 0);
    gl.uniform1f(PT.u("uMode"), 1); gl.uniform1f(PT.u("uSize"), 46); gl.drawArrays(gl.POINTS, 0, 2);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    // étiquettes HTML projetées
    for (const { el, c } of labels) {
      const v = vec(...c, 1.004), [m0, m1, m2, m3, m4, m5, m6, m7, m8] = M;
      const x = m0 * v[0] + m3 * v[1] + m6 * v[2], y = m1 * v[0] + m4 * v[1] + m7 * v[2], z = m2 * v[0] + m5 * v[1] + m8 * v[2], w = 3.6 / (3.6 - z);
      el.style.transform = `translate(${W / 2 + x * w * sc[0] * W / 2}px,${H / 2 - y * w * sc[1] * H / 2}px)`;
      el.style.opacity = z > .05 ? Math.min(1, (z - .05) * 4) * ease : 0;
    }
    raf = !reduced && visible && !document.hidden ? requestAnimationFrame(frame) : 0;
  }
  const kick = () => { if (!raf) raf = requestAnimationFrame(frame); };
  addEventListener("resize", () => { size(); kick(); });
  document.addEventListener("visibilitychange", kick);
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; kick(); }).observe(cv);
  size(); kick();
})();
