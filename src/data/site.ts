// Everything the choir will change lives here, so an update is one edit
// (PLAN.md §8: the floor is the webmaster). Bracketed values are placeholders
// for facts the owner still has to send (PLAN.md §9). Never fill them with
// invented facts.

export const SITE = {
  name: 'Crvx et Cithara',
  wordmark: 'CRVX ET CITHARA',
  subtitle: 'The Cross and the Lyre',
  motto: 'Ad Maiorem Dei Gloriam', // PLAN §11 Q8: Maiorem until the owner chooses
  positioning: "The Philippines' Only Independent Choir Wholly Devoted to Sacred Music & Liturgy",
  headline: 'United in Faith. Devoted to Sacred Music.',
  subline: 'A choir united by faith, devoted to sacred music, and committed to serving the liturgy.',
  description:
    "Crvx et Cithara (The Cross and the Lyre): the Philippines' only independent choir wholly devoted to sacred music and liturgy, singing at the Traditional Latin Mass and the Novus Ordo.",
  // TODO(owner, PLAN §9): the choir's own address. No Gmail exists yet.
  email: '[ choir email address ]',
  // TODO(owner, PLAN §9): social links, if any. Leave href empty until then.
  social: [
    { label: 'Facebook', href: '', placeholder: '[ Facebook page link ]' },
    { label: 'YouTube', href: '', placeholder: '[ YouTube channel link ]' },
  ],
};

// TODO(owner, PLAN §11 Q1): create the Formspree form on the choir's email
// and put its id here (https://formspree.io/f/<id>). Until then the form
// cannot deliver; it shows a notice instead of pretending to send.
export const FORM_ENDPOINT = 'https://formspree.io/f/TODO_FORM_ID';
export const FORM_READY = !FORM_ENDPOINT.includes('TODO');

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/members', label: 'Members' },
  { href: '/ministry', label: 'Our Ministry' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact#invite', label: 'Contact' },
];

// Our Ministry → "Occasions we sing for" (PLAN §4, old site, amendment 2026-11-13).
// The invitation form's occasion dropdown uses the same list.
export const OCCASIONS = [
  'Ordinations',
  'Professions of Vows',
  'Presbyteral & Episcopal Anniversaries',
  'Nuptial Masses',
  'Feast Days & Dedications',
  'Concerts & Recitals',
  'Non-liturgical events in keeping with our values',
];

// "Where we sing next" (PLAN §4 Home). TODO(owner): 2–3 real engagements.
export const ENGAGEMENTS = [
  { day: '[DAY]', month: '[MON]', occasion: '[Occasion, e.g. Sunday TLM]', venue: '[Parish, City]' },
  { day: '[DAY]', month: '[MON]', occasion: '[Occasion, e.g. Novus Ordo Mass]', venue: '[Parish, City]' },
  { day: '[DAY]', month: '[MON]', occasion: '[Occasion, e.g. Feast day]', venue: '[Parish, City]' },
];

// "Featured activities" (PLAN §4 Home). TODO(owner): 3 recent or upcoming
// services, each with a photo.
export const FEATURED = [
  { name: '[Event name]', when: '[Month Year]' },
  { name: '[Event name]', when: '[Month Year]' },
  { name: '[Event name]', when: '[Month Year]' },
];

export const MISSION =
  'To serve the Church through sacred music, utilizing our God-given talents to enrich the liturgy, inspire prayer, and promote the musical heritage of Catholic tradition.';
export const VISION =
  'To become a community of devoted musicians who contribute to the preservation and flourishing of sacred music, fostering a deeper appreciation of its spiritual and liturgical significance.';

// Brief §4, "About Us": used as is (✅ in PLAN §4).
export const ABOUT_PARAGRAPHS = [
  'Crvx et Cithara is a group of individuals united by a shared passion and love for sacred music. Bound by faith and a common devotion to the Church, we seek to use our God-given talents in service of the sacred liturgy.',
  "Our choir serves in both the Traditional Latin Mass and the Novus Ordo, embracing the richness of the Church's musical heritage and the beauty of its liturgical traditions.",
  'We believe that sacred music is more than an artistic expression. It is a form of prayer, an offering of praise, and a means of elevating the hearts and minds of the faithful toward God.',
  'Through our voices and dedication, we aspire to preserve, promote, and share the beauty of sacred music, giving glory to God in every service.',
];

export const FORMATIONS = [
  {
    name: 'SATB Choir',
    voices: 'SOPRANO · ALTO · TENOR · BASS',
    short: 'Our full mixed ensemble, drawing on the whole range of voices for polyphonic sacred repertoire, ideal for ordinations, nuptial Masses, and major feasts.',
  },
  {
    name: 'TTBB Choir',
    voices: 'TENOR I & II · BARITONE · BASS',
    short: 'An all-male formation for rites and traditions that call for a solemn, austere register, from professions of vows to episcopal anniversaries.',
  },
];
