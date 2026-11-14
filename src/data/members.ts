// Members shown on /members, grouped by voice part.
//
// CONSENT FIRST. This repository is PUBLIC: anything written here is visible
// on GitHub even if the page does not show it. Add a person only AFTER they
// have agreed to appear on the website, and then set `consented: true`.
// Entries with `consented: false` are filtered out at build time and never
// reach the HTML, but they would still be readable in this file, so avoid them.
//
// To add someone (photo optional; without one, their initials are shown):
//   1. Put the photo in src/assets/images/members/ (square or 4:3, at least 600px).
//   2. Import it at the top of this file:
//        import mariaPhoto from '../assets/images/members/maria.jpg';
//   3. Add an entry to MEMBERS:
//        { name: 'Maria Santos', voice: 'Soprano', role: 'Section leader',
//          bio: 'Has sung with the choir since 2019.', photo: mariaPhoto, consented: true },
import type { ImageMetadata } from 'astro';

export type Voice = 'Soprano' | 'Alto' | 'Tenor' | 'Bass';

export interface Member {
  name: string;
  voice: Voice;
  role?: string;
  /** One line. */
  bio?: string;
  photo?: ImageMetadata;
  consented: boolean;
}

export const VOICES: Voice[] = ['Soprano', 'Alto', 'Tenor', 'Bass'];

/** Already public on About Us (PLAN §9, owner-confirmed). */
export const CHOIR_MASTER = { name: 'Br. Angelo Lorenzo Salvacion', role: 'Choir Master' };

export const MEMBERS: Member[] = [];

// Fake entries so the owner can see filled cards on PREVIEW deployments only.
// They never render on production (see src/pages/members.astro).
export const DEMO_MEMBERS: Member[] = [
  { name: 'Sample Soprano', voice: 'Soprano', role: 'Section leader', bio: 'A one-line introduction goes here.', consented: true },
  { name: 'Sample Soprano Two', voice: 'Soprano', consented: true },
  { name: 'Sample Soprano Three', voice: 'Soprano', bio: 'Another short line about this singer.', consented: true },
  { name: 'Sample Alto', voice: 'Alto', role: 'Section leader', consented: true },
  { name: 'Sample Alto Two', voice: 'Alto', bio: 'A one-line introduction goes here.', consented: true },
  { name: 'Sample Tenor', voice: 'Tenor', bio: 'A one-line introduction goes here.', consented: true },
  { name: 'Sample Bass', voice: 'Bass', role: 'Section leader', consented: true },
  { name: 'Sample Bass Two', voice: 'Bass', consented: true },
  { name: 'Sample Bass Three', voice: 'Bass', consented: true },
  { name: 'Sample Bass Four', voice: 'Bass', bio: 'A one-line introduction goes here.', consented: true },
  { name: 'Sample Hidden', voice: 'Tenor', bio: 'Not consented: must never appear.', consented: false },
];
