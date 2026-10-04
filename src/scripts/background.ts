/**
 * Fonds WebGL du hero et de la section « Pourquoi Intellect » (<canvas data-gl="hero|why">).
 * Réagit à la souris et au scroll ; pause hors écran ; image fixe si mouvement réduit.
 */
const VS = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
const FS = `precision mediump float;
uniform vec2 uRes;uniform float uT,uScroll,uPal;uniform vec2 uM;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
  return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n(p);p=p*2.02+vec2(1.7,9.2);a*=.5;}return v;}
void main(){
  vec2 uv=gl_FragCoord.xy/uRes;
  vec2 q=uv*vec2(uRes.x/uRes.y,1.)*1.6+vec2(0.,uScroll*.45);
  float t=uT*.07;
  vec2 w=vec2(fbm(q+vec2(t,0.)+uM*.25),fbm(q+vec2(5.2,1.3)-t));
  float f=fbm(q+2.2*w+vec2(0.,t));
  vec3 deep=vec3(0.,.157,.29),blue=vec3(0.,.22,.396),sky=vec3(.184,.718,.953),org=vec3(1.,.541,0.);
  vec3 col=mix(deep,blue,smoothstep(.15,.7,f));
  col=mix(col,sky,smoothstep(.55,.95,f)*mix(.55*(1.-uv.x*.6),.5,uPal));
  vec2 g=mix(vec2(.92,.12),vec2(.08,.9),uPal);
  col+=org*smoothstep(.4,0.,distance(uv,g+uM*.05))*.24;
  col+=sky*pow(max(0.,sin((uv.y*7.+f*3.-uScroll*1.2)*3.14159)),24.)*.05*uPal;
  gl_FragColor=vec4(col,1.);
}`;

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
if (!reduced) addEventListener('pointermove', (e) => { mouse.tx = e.clientX / innerWidth - 0.5; mouse.ty = 0.5 - e.clientY / innerHeight; }, { passive: true });

function init(cv: HTMLCanvasElement): void {
  const gl = cv.getContext('webgl', { antialias: false, alpha: true, powerPreference: 'low-power' });
  if (!gl) return cv.remove();
  const sh = (type: number, src: string): WebGLShader | null => {
    const s = gl.createShader(type); if (!s) return null;
    gl.shaderSource(s, src); gl.compileShader(s);
    return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
  };
  const v = sh(gl.VERTEX_SHADER, VS), f = sh(gl.FRAGMENT_SHADER, FS);
  const pr = gl.createProgram();
  if (!v || !f || !pr) return cv.remove();
  gl.attachShader(pr, v); gl.attachShader(pr, f); gl.linkProgram(pr);
  if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) return cv.remove();
  gl.useProgram(pr);
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const U = (n: string): WebGLUniformLocation | null => gl.getUniformLocation(pr, n);
  const uRes = U('uRes'), uT = U('uT'), uM = U('uM'), uS = U('uScroll');
  gl.uniform1f(U('uPal'), cv.dataset.gl === 'why' ? 1 : 0);

  const size = (): void => {
    const s = Math.min(devicePixelRatio || 1, 1.5) * 0.6; // fond flou : basse résolution suffisante
    cv.width = Math.max(2, (cv.clientWidth * s) | 0); cv.height = Math.max(2, (cv.clientHeight * s) | 0);
    gl.viewport(0, 0, cv.width, cv.height); gl.uniform2f(uRes, cv.width, cv.height);
  };
  const t0 = performance.now();
  let raf = 0, visible = true;
  const frame = (now: number): void => {
    mouse.x += (mouse.tx - mouse.x) * 0.05; mouse.y += (mouse.ty - mouse.y) * 0.05;
    gl.uniform1f(uT, (now - t0) / 1000); gl.uniform2f(uM, mouse.x, mouse.y); gl.uniform1f(uS, -cv.getBoundingClientRect().top / innerHeight);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    raf = !reduced && visible && !document.hidden ? requestAnimationFrame(frame) : 0;
  };
  const kick = (): void => { if (!raf) raf = requestAnimationFrame(frame); };
  addEventListener('resize', () => { size(); kick(); });
  if (!reduced) {
    document.addEventListener('visibilitychange', kick);
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; kick(); }).observe(cv);
  }
  size(); kick();
}

export function initBackgrounds(): void {
  document.querySelectorAll<HTMLCanvasElement>('canvas[data-gl]').forEach(init);
}
