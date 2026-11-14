// Members shown on /members, grouped by voice part.
//
// CONSENT FIRST. This repository is PUBLIC: anything written here is visible
// on GitHub even if the page does not show it. Add a person only AFTER they
// have agreed to appear on the website, and then set `consented: true`.
// Entries with `consented: false` are filtered out at build time and never
// reach the HTML, but they would still be readable in this file, so avoid them.
//
// To add someone (photo optional; without one, their initials are shown):
//   1. Put the photo in src/assets/images/members/.
//      Photos: half-body (waist up), portrait, at least 1000px tall, plain or church background.
//      They are shown in a 4:5 arched frame at object-position 50% 22%, so a tall photo is
//      cropped mostly from the bottom and the head stays under the arch.
//   2. Import it at the top of this file:
//        import mariaPhoto from '../assets/images/members/maria.jpg';
//   3. Add an entry to MEMBERS:
//        { name: 'Maria Santos', voice: 'Soprano', photo: mariaPhoto, consented: true },
//   An organist uses voice: 'Organist' (more than one is fine).
import type { ImageMetadata } from 'astro';

export type Voice = 'Soprano' | 'Alto' | 'Tenor' | 'Bass';
/** 'Organist' entries appear under Music Direction, beside the Choir Master, not in a voice section. */
export type Part = Voice | 'Organist';

export interface Member {
  name: string;
  voice: Part;
  photo?: ImageMetadata;
  consented: boolean;
}

export const VOICES: Voice[] = ['Soprano', 'Alto', 'Tenor', 'Bass'];

/** Already public on About Us (PLAN §9, owner-confirmed). */
export const CHOIR_MASTER = { name: 'Br. Angelo Lorenzo Salvacion' };

export const MEMBERS: Member[] = [];

/** One group photo, shown on /members and About Us.
 *  It needs permission from EVERYONE pictured before `consented: true`.
 *  e.g. import groupImg from '../assets/images/members/group.jpg';
 *       export const GROUP_PHOTO: GroupPhoto | null =
 *         { image: groupImg, alt: 'The choir in choir dress before the altar', consented: true }; */
export interface GroupPhoto { image: ImageMetadata; alt: string; consented: boolean; }
export const GROUP_PHOTO: GroupPhoto | null = null;

/** Demo cards and the sample group photo show only on Vercel PREVIEW builds, or with
 *  MEMBERS_DEMO=1 locally. Fails closed: production, or a build with VERCEL_ENV unset, never shows them. */
export const SHOW_DEMO =
  (import.meta.env.VERCEL_ENV ?? process.env.VERCEL_ENV) === 'preview' || process.env.MEMBERS_DEMO === '1';

// Fake entries so the owner can see filled cards on PREVIEW deployments only.
// They never render on production (see src/pages/members.astro).
export const DEMO_MEMBERS: Member[] = [
  { name: 'Sample Soprano', voice: 'Soprano', consented: true },
  { name: 'Sample Soprano Two', voice: 'Soprano', consented: true },
  { name: 'Sample Soprano Three', voice: 'Soprano', consented: true },
  { name: 'Sample Alto', voice: 'Alto', consented: true },
  { name: 'Sample Alto Two', voice: 'Alto', consented: true },
  { name: 'Sample Tenor', voice: 'Tenor', consented: true },
  { name: 'Sample Bass', voice: 'Bass', consented: true },
  { name: 'Sample Bass Two', voice: 'Bass', consented: true },
  { name: 'Sample Bass Three', voice: 'Bass', consented: true },
  { name: 'Sample Bass Four', voice: 'Bass', consented: true },
  { name: 'Sample Organist', voice: 'Organist', consented: true },
  { name: 'Sample Hidden', voice: 'Tenor', consented: false },
];
