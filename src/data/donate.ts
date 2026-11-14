// "Support Us" (/support): Phase 1, static. Donors give through their own
// GCash / Maya / bank / PayPal app; this site takes no payments and no card data.
//
// This repository is PUBLIC. Put here ONLY the details the choir wants on the
// website (they will be public anyway once the page shows them).
//
// To publish a method: replace its [ bracketed ] placeholders with the real
// details and set `enabled: true`. A method with `enabled: false` is not shown.
// The "Give a gift" section appears only when at least one method is enabled
// (fail closed); the rest of /support is always published. Vercel PREVIEW builds
// show every method with its placeholders so the owner can review the layout.
//
// QR codes: save the PNG/JPG in src/assets/images/support/, import it here, e.g.
//   import gcashQr from '../assets/images/support/gcash-qr.png';
// and set `qr: gcashQr`. Without one, a 'QR code coming soon' box is shown.
import type { ImageMetadata } from 'astro';

export interface Detail { label: string; value: string; }
export interface GivingMethod {
  id: string;
  name: string;
  enabled: boolean;
  /** true = show a QR code (or its 'coming soon' box). */
  hasQr?: boolean;
  qr?: ImageMetadata;
  details: Detail[];
  /** External link (PayPal). Shown as a button only when it starts with https://. */
  link?: { label: string; href: string; placeholder: string };
  note?: string;
}

export const GIVING_METHODS: GivingMethod[] = [
  {
    id: 'gcash', name: 'GCash', enabled: false, hasQr: true,
    details: [
      { label: 'Account name', value: '[ GCash account name ]' },
      { label: 'Number', value: '[ GCash number ]' },
    ],
  },
  {
    id: 'maya', name: 'Maya', enabled: false, hasQr: true,
    details: [
      { label: 'Account name', value: '[ Maya account name ]' },
      { label: 'Number', value: '[ Maya number ]' },
    ],
  },
  {
    id: 'bank', name: 'Bank transfer', enabled: false,
    details: [
      { label: 'Bank', value: '[ Bank name ]' },
      { label: 'Account name', value: '[ Account name ]' },
      { label: 'Account number', value: '[ Account number ]' },
    ],
  },
  {
    id: 'paypal', name: 'PayPal', enabled: false,
    details: [],
    link: { label: 'Give with PayPal', href: '', placeholder: '[ PayPal.me link ]' },
    note: 'For donors abroad.',
  },
];

// "Sponsor something specific" cards (owner-approved structure; edit freely).
export const SPONSOR_ITEMS = [
  { title: 'A new Mass setting', text: 'Scores for a new Mass setting or motets for the feasts of the year.' },
  { title: 'Choir vestments', text: 'Vestments so the choir is fittingly vested for the liturgy.' },
  { title: 'Travel to a parish', text: 'Transport for the choir to sing at a parish that could not otherwise invite us.' },
];

// "In-kind help" list.
export const IN_KIND = ['Sheet music', 'A rehearsal venue', 'Transport', 'Sound equipment'];

/** Preview builds (or DONATE_DEMO=1 locally) show every method with placeholders. */
const SHOW_ALL =
  (import.meta.env?.VERCEL_ENV ?? process.env.VERCEL_ENV) === 'preview' || process.env.DONATE_DEMO === '1';

// Guard: an enabled method must not publish placeholders. Outside preview builds,
// the build fails if an enabled method still has a [ bracketed ] value or a
// link without an https:// address.
if (!SHOW_ALL) {
  for (const m of GIVING_METHODS.filter(m => m.enabled)) {
    const bad = m.details.filter(d => d.value.includes('[')).map(d => d.label);
    if (m.link && !m.link.href.startsWith('https://')) bad.push('link');
    if (bad.length) throw new Error(`donate.ts: ${m.name} is enabled but still has placeholders (${bad.join(', ')}). Fill them in or set enabled: false.`);
  }
}

/** Methods shown under 'Give a gift'; empty = the section is not rendered. */
export const VISIBLE_METHODS = GIVING_METHODS.filter(m => m.enabled || SHOW_ALL);
