(() => {
  const T = {
    fr: {}, // le français est le contenu HTML d'origine
    en: {
      tagline:"Your future, our commitment", agency:"Student support agency",
      nav_home:"Home", nav_courses:"Our courses", nav_med:"Medicine in Germany", nav_ru:"Study in Russia", nav_about:"About", nav_contact:"Contact",
      cta_advice:"Get advice", cta_start:"Start now",
      h1a:"Learn", h1b:"German,", h1c:"pursue your studies and your future in Europe",
      hero_lead:"Intellect supports you on your path to Germany and Russia, with tailored courses and personal follow-up.",
      pt1:"German courses from A1 to B1 and C1", pt2:"Medicine preparation in Germany", pt3:"Support in Russia and Germany",
      script_hero:"Germany<br>Russia<br>Your success,<br>our mission",
      svc_eyebrow:"Our services", svc_title:"Complete solutions for every step of your project",
      svc_text:"From learning the language to settling into your study country, we support you at every step to make your dream a reality.",
      c1_t:"German courses", c1_a:"Intensive and flexible classes", c1_b:"Exam preparation (Goethe, telc, etc.)", c1_c:"Personalised academic follow-up",
      c2_t:"Medicine preparation", c2_s:"in Germany", c2_a:"Advice and guidance", c2_b:"University application and enrolment", c2_c:"Admission exam preparation",
      c3_t:"Study in Russia", c3_a:"University enrolment", c3_b:"Housing (dorms / apartments)", c3_c:"On-site support", c3_d:"Help with administrative procedures",
      c4_t:"Full support", c4_a:"Personalised advice", c4_b:"Follow-up before and after arrival", c4_c:"Visa and document assistance", c4_d:"Integration and student life",
      more:"Learn more",
      why_eyebrow:"Why choose Intellect?", why_title:"A dedicated team by your side",
      w1:"Personalised support", w2:"University partnerships", w3:"Presence in Russia and Germany", w4:"High success rate",
      script_why:"More than an agency,<br>a partner for life",
      ct_eyebrow:"Contact", ct_title:"Ask for free advice", ct_text:"Tell us where you stand and we will reply quickly with a tailored action plan.",
      f_name:"Full name", f_email:"Email", f_phone:"Phone / WhatsApp", f_topic:"I am interested in", f_msg:"Message",
      o1:"German courses (A1–C1)", o2:"Medicine in Germany", o3:"Studying in Russia", o4:"Full support",
      f_send:"Send", backtop:"Back to top",
      ok:"Thank you! We will contact you shortly.", err:"Please fill in your name and a valid email."
    },
    de: {
      tagline:"Ihre Zukunft, unser Versprechen", agency:"Agentur für Studienbegleitung",
      nav_home:"Startseite", nav_courses:"Unsere Kurse", nav_med:"Medizin in Deutschland", nav_ru:"Studieren in Russland", nav_about:"Über uns", nav_contact:"Kontakt",
      cta_advice:"Beratung anfragen", cta_start:"Jetzt starten",
      h1a:"Lernen Sie", h1b:"Deutsch,", h1c:"verwirklichen Sie Ihr Studium und Ihre Zukunft in Europa",
      hero_lead:"Intellect begleitet Sie auf Ihrem Weg nach Deutschland und Russland – mit passenden Kursen und persönlicher Betreuung.",
      pt1:"Deutschkurse von A1 bis B1 und C1", pt2:"Medizin-Vorbereitung in Deutschland", pt3:"Begleitung in Russland und Deutschland",
      script_hero:"Deutschland<br>Russland<br>Ihr Erfolg,<br>unsere Mission",
      svc_eyebrow:"Unsere Leistungen", svc_title:"Komplette Lösungen für jeden Schritt Ihres Projekts",
      svc_text:"Vom Sprachenlernen bis zur Integration im Studienland begleiten wir Sie bei jedem Schritt, damit Ihr Traum Wirklichkeit wird.",
      c1_t:"Deutschkurse", c1_a:"Intensive und flexible Kurse", c1_b:"Prüfungsvorbereitung (Goethe, telc usw.)", c1_c:"Persönliche Lernbegleitung",
      c2_t:"Medizin-Vorbereitung", c2_s:"in Deutschland", c2_a:"Beratung und Orientierung", c2_b:"Bewerbung und Einschreibung an der Uni", c2_c:"Vorbereitung auf Aufnahmeprüfungen",
      c3_t:"Studieren in Russland", c3_a:"Universitätseinschreibung", c3_b:"Unterkunft (Wohnheim / Wohnung)", c3_c:"Betreuung vor Ort", c3_d:"Hilfe bei Behördengängen",
      c4_t:"Rundum-Begleitung", c4_a:"Persönliche Beratung", c4_b:"Betreuung vor und nach der Ankunft", c4_c:"Hilfe bei Visum und Dokumenten", c4_d:"Integration und Studentenleben",
      more:"Mehr erfahren",
      why_eyebrow:"Warum Intellect?", why_title:"Ein engagiertes Team an Ihrer Seite",
      w1:"Persönliche Begleitung", w2:"Universitätspartnerschaften", w3:"Präsenz in Russland und Deutschland", w4:"Hohe Erfolgsquote",
      script_why:"Mehr als eine Agentur,<br>ein Partner fürs Leben",
      ct_eyebrow:"Kontakt", ct_title:"Kostenlose Beratung anfragen", ct_text:"Erzählen Sie uns, wo Sie stehen – wir melden uns schnell mit einem passenden Plan.",
      f_name:"Vollständiger Name", f_email:"E-Mail", f_phone:"Telefon / WhatsApp", f_topic:"Ich interessiere mich für", f_msg:"Nachricht",
      o1:"Deutschkurse (A1–C1)", o2:"Medizin in Deutschland", o3:"Studium in Russland", o4:"Rundum-Begleitung",
      f_send:"Senden", backtop:"Nach oben",
      ok:"Danke! Wir melden uns in Kürze.", err:"Bitte Namen und gültige E-Mail angeben."
    }
  };
  T.fr = { ok:"Merci ! Nous vous contactons très bientôt.", err:"Merci d’indiquer votre nom et un e-mail valide." };

  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const FLAGS = { fr:"🇫🇷", en:"🇬🇧", de:"🇩🇪" };
  // mémorise les textes français d'origine
  $$("[data-i18n]").forEach(e => e.dataset.fr = e.textContent);
  $$("[data-i18n-html]").forEach(e => e.dataset.fr = e.innerHTML);

  let lang = "fr";
  function setLang(l) {
    lang = l; const d = T[l];
    $$("[data-i18n]").forEach(e => { e.textContent = l === "fr" ? e.dataset.fr : (d[e.dataset.i18n] ?? e.dataset.fr); });
    $$("[data-i18n-html]").forEach(e => { e.innerHTML = l === "fr" ? e.dataset.fr : (d[e.dataset.i18nHtml] ?? e.dataset.fr); });
    document.documentElement.lang = l;
    $("#langFlag").textContent = FLAGS[l];
    $$(".lang-list li").forEach(li => li.setAttribute("aria-selected", li.dataset.lang === l));
    try { localStorage.setItem("lang", l); } catch {}
  }

  // menu mobile
  const burger = $("#burger"), menu = $("#menu");
  burger.addEventListener("click", () => {
    const o = menu.classList.toggle("open"); burger.setAttribute("aria-expanded", o);
  });
  menu.addEventListener("click", e => { if (e.target.closest("a")) { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); } });

  // langue
  const lg = $("#lang"), lb = $("#langBtn");
  lb.addEventListener("click", () => lb.setAttribute("aria-expanded", lg.classList.toggle("open")));
  $(".lang-list").addEventListener("click", e => { const li = e.target.closest("li"); if (li) { setLang(li.dataset.lang); lg.classList.remove("open"); lb.setAttribute("aria-expanded", false); } });
  document.addEventListener("click", e => { if (!lg.contains(e.target)) lg.classList.remove("open"); });

  // lien actif au scroll
  const links = $$(".menu a"), secs = links.map(a => $(a.getAttribute("href")));
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) { const i = secs.indexOf(en.target); if (i > -1) links.forEach((a, k) => a.classList.toggle("active", k === i)); }
  }), { rootMargin: "-40% 0px -55% 0px" });
  secs.forEach(s => s && io.observe(s));
  // "Accueil" = haut de page
  secs[0] = $(".hero"); io.observe(secs[0]);

  // formulaire (démo : à relier à un back-end / Formspree / WhatsApp)
  $("#form").addEventListener("submit", e => {
    e.preventDefault();
    const f = e.target, n = f.name, m = f.email, note = $("#formNote");
    const ok = n.value.trim() && /^\S+@\S+\.\S+$/.test(m.value);
    n.classList.toggle("bad", !n.value.trim()); m.classList.toggle("bad", !/^\S+@\S+\.\S+$/.test(m.value));
    note.style.color = ok ? "" : "#d33"; note.textContent = ok ? T[lang].ok : T[lang].err;
    if (ok) f.reset();
  });

  // photo hero optionnelle : sans assets/hero.jpg, on garde l'illustration
  const hp = $(".hero-photo img");
  if (hp) { const drop = () => hp.remove(); hp.complete && !hp.naturalWidth ? drop() : hp.addEventListener("error", drop); }

  $("#year").textContent = new Date().getFullYear();
  let saved; try { saved = localStorage.getItem("lang"); } catch {}
  if (saved && T[saved] && saved !== "fr") setLang(saved);
})();
