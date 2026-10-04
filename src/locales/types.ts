export interface Ui {
  agency: string;
  tagline: string;
  skip: string;
  menu: string;
  language: string;
  ctaAdvice: string;
  ctaStart: string;
  more: string;
  breadcrumbHome: string;
  breadcrumbLabel: string;
  updatedOn: string;
  toc: string;
  related: string;
  faqTitle: string;
  ctaBand: { title: string; text: string; button: string };
  heroAlt: string;
  logoAlt: string;
  globeLabel: string;
  globe: { germany: string; russia: string };
  marquee: string[];
  footer: { slogan: string; learn: string; study: string; about: string; languages: string; rights: string; note: string };
  form: {
    name: string; email: string; phone: string; topic: string; message: string; send: string;
    options: { de: string; med: string; ru: string; all: string };
    ok: string; err: string; notConnected: string; sending: string; failed: string;
  };
  notFound: { title: string; text: string; back: string };
}
