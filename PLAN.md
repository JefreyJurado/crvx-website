# Crvx et Cithara Website: Development Plan

*Ad Maiorem Dei Gloriam*

| | |
|---|---|
| **Status** | **Final, locked on 2026-11-13.** Further changes only on the owner's request. Nothing has been built yet. **Amended once by the owner on 2026-11-13** to adopt content from the choir's old site (see §12). |
| **Date** | 2026-11-11 |
| **Source brief** | `Crvx_et_Cithara_Website_Starter.docx` (in this folder) |
| **Prepared by** | Maricel (technical writer), for god and the owner |

---

## 1. Project summary

Crvx et Cithara (*The Cross and the Lyre*) is a Catholic choir that sings at both the Traditional Latin Mass and the Novus Ordo. It describes itself as **"The Philippines' Only Independent Choir Wholly Devoted to Sacred Music & Liturgy"**. It sings in two formations: an SATB mixed choir and a TTBB all-male ensemble. This project builds its first proper website. The choir's earlier site was a website-builder preview that is likely to expire.

According to the brief, the site has three jobs:

1. **Who we are.** Introduce the choir and the people behind the music.
2. **What we do and believe.** Its liturgical ministry and its view of sacred music as prayer.
3. **Our mission.** To preserve and promote sacred music through God-given talents.

The brief's guiding principle shapes every decision below:

> Make sacred music the central theme of the website, rather than making it look like an ordinary choir or events page. The website should feel like an online representation of devotion to the liturgy and the musical heritage of the Church.

The first version (v1) has **five sections**: Home, About Us, Our Ministry, Gallery and Contact. Our Music, recordings and other features come in later phases.

---

## 2. Locked decisions

These were decided by the owner on 2026-11-11 and are not reopened in this plan.

| # | Decision | What it means in practice |
|---|---|---|
| 1 | **Visual style: Traditional meets Modern** | Traditional Catholic imagery and serif lettering, laid out cleanly with lots of space. See §5. |
| 2 | **Static site, hosted on Vercel** | No database, no login and no admin panel. Pages are built once and served as plain files, which is fast, cheap (Vercel's free tier is enough) and very secure. |
| 3 | **Built by this floor** | The DevLabs agents design, build, review and deploy the site. The owner supplies content and approves each phase. |
| 4 | **V1 = 5 sections** | Home, About Us, Our Ministry, Gallery, Contact. |
| 5 | **Videos: occasional, embedded by hand** | Videos are added now and then by embedding a chosen YouTube or Facebook video (privacy-enhanced mode, never autoplay). Automatically pulling the latest uploads from a channel feed was considered and rejected. |
| 6 | **Free to run** | The choir has very little money. Every phase stays on free tiers, and nothing that costs money is added unless the owner approves that cost first. See §7. |
| 7 | **Analytics: Vercel Web Analytics (free tier)** | Shows visitor numbers without cookies, so no cookie banner is needed. Approved by the owner on 2026-11-13. |

---

## 3. Recommended stack

### Options compared

| | **A. Plain HTML, CSS and JavaScript** | **B. Astro, a light static-site framework** *(recommended)* |
|---|---|---|
| What gets published | Hand-written `.html` files | Plain `.html`/`.css` files, generated at build time |
| JavaScript sent to visitors | Whatever we write | None by default. It's added only where a page needs it, e.g. the gallery lightbox. |
| Shared header, footer and navigation | Copied into every page; each change has to be made 5+ times | Written once as a layout and reused on every page |
| Gallery photos | Every photo resized and compressed by hand into several sizes | Astro's image tool makes the sizes and modern formats (WebP/AVIF) automatically when the site is built |
| Adding Our Music and Media later | More copy-pasted pages | New pages reuse the same layout and components |
| Editing text | Find the right spot in the HTML | Page text can live in simple Markdown files |
| Vercel support | Yes | Yes, detected automatically with zero configuration |
| Learning curve for a future maintainer | Lowest | Low: it's still mostly HTML and CSS |

### Recommendation: Astro (static output)

- **The gallery is the deciding factor.** The site's value depends on photographs: the hero image, church interiors and liturgies. Unoptimised photos are the main thing that makes small sites slow, especially on phones and mobile data. Astro handles resizing and formats automatically. With plain HTML, someone has to do it by hand for every photo, every time.
- **It grows without a rewrite.** Our Music, Media and recordings (§10) slot into the same layout.
- **The result is still a plain static site.** The output is ordinary HTML and CSS with almost no JavaScript, so decision 2 holds fully: nothing runs on a server and there's nothing to patch.

Supporting choices:

- **Styling:** plain CSS with design tokens (CSS variables for the palette and type scale, §5). Tailwind isn't needed for a 5-page site, and plain CSS keeps the code readable.
- **Fonts:** self-hosted through Fontsource, not loaded from Google Fonts at runtime. This is faster, has no third-party tracking, and works on networks that block Google.
- **Gallery lightbox:** one small, accessible script, the only interactive JavaScript in v1.
- **Videos:** embedded from YouTube (privacy-enhanced mode) or Facebook, not hosted on the site. Video files are large and Vercel's free tier isn't meant to serve them.
- **Contact form:** a static site can't send email by itself. See §11, open question 1. The recommendation is a hosted form service with a free tier, such as Formspree or Web3Forms, plus a plain email link as a fallback.

---

## 4. Site map and content inventory

### Site map (v1)

```
/                Home
/about           About Us
/ministry        Our Ministry
/gallery         Gallery
/contact         Contact
```

On every page:

- **Header:** the choir's crest (lyre, dove over cross, two sacred hearts), the wordmark "Crvx et Cithara" with the subtitle *The Cross and the Lyre*, and the five menu items. On phones the menu collapses into a button. *(amendment 2026-11-13)*
- **Footer:** the motto *Ad Maiorem Dei Gloriam*, contact email, social links (if any) and © year.
- **Social link preview:** Open Graph tags with a choir photo, the choir's name and the tagline. When someone shares any page on Facebook (the choir's main channel), it shows a proper preview card instead of a bare link.

The brief's full navigation also lists **Our Music** and **Media**. Both are left out of v1 (§10). The v1 menu shows only the five live pages, so there are no "coming soon" dead ends.

### Page-by-page content

Status key:

- **✅ Ready:** the copy is in the brief and can be used as is.
- **✍️ Draft:** the floor writes it from the brief, and the owner approves it.
- **📷 Owner:** the owner must supply it (see §9).

#### Home (`/`)

| Section | Content | Source | Status |
|---|---|---|---|
| Hero | Choir name; headline **"United in Faith. Devoted to Sacred Music."**; subline "A choir united by faith, devoted to sacred music, and committed to serving the liturgy." Full-width photo of the choir or a church interior. | Brief §1, §3 | ✅ text · 📷 photo |
| Introduction | The positioning line "The Philippines' Only Independent Choir Wholly Devoted to Sacred Music & Liturgy", then a short welcome (2–3 sentences) taken from the About Us copy, with a "Read our story" link | Brief §4; old site *(amendment 2026-11-13)* | ✍️ |
| Our two formations | Two short cards: **SATB mixed choir** (polyphonic repertoire for ordinations, nuptial Masses and major feasts) and **TTBB all-male ensemble** (for solemn, austere rites) | Old site *(amendment 2026-11-13)* | ✅ |
| Mission & Vision | Both statements in full, side by side | Brief §5 | ✅ |
| Our Ministry teaser | Traditional Latin Mass · Novus Ordo · Special celebrations, with a link to /ministry | Brief §3 (04) | ✍️ |
| Our Repertoire strip | One line naming the traditions: Gregorian chant, sacred polyphony, traditional hymns. There is no separate page in v1. | Brief §3 (05) | ✍️ (open question 6) |
| Where we sing next | 2–3 upcoming engagements, one line each (date, parish, occasion). Updated by sending the details to the floor (§8). | Owner decision 2026-11-13 | 📷 |
| Featured activities | 3 recent or upcoming services or events, each with a photo | Brief §7 | 📷 |
| Gallery preview | 4–6 photos, with a link to /gallery | Brief §3 (06) | 📷 |
| Contact call-to-action | "Invite us to sing at your liturgy", with a link to /contact | Brief §3 (07) | ✍️ |

#### About Us (`/about`)

| Section | Content | Source | Status |
|---|---|---|---|
| Our Story | When and where the choir began, who leads it, and its home parish. **The brief has none of these facts.** | Owner | 📷 needs owner input |
| Our Identity | The four About Us paragraphs, closing with *Soli Deo Gloria* | Brief §4 | ✅ |
| Our Mission | Mission and Vision statements | Brief §5 | ✅ |
| Our formations | The SATB mixed choir and the TTBB all-male ensemble, each with what it sings and when (as on Home, in more depth) | Old site *(amendment 2026-11-13)* | ✍️ |
| The people | Group photo; Choir Master **Br. Angelo Lorenzo Salvacion**. Individual members are named only on the Phase 2 "The Voices" page, with consent. | Old site *(amendment 2026-11-13)* | 📷 |

#### Our Ministry (`/ministry`)

| Section | Content | Source | Status |
|---|---|---|---|
| Introduction | Sacred music as prayer and service to the liturgy | Brief §4 | ✍️ |
| Traditional Latin Mass | What the choir sings: chant propers, polyphonic Ordinary; where and how often | Brief §3, §7 | ✍️ + owner facts |
| Novus Ordo | Same structure | Brief §3, §7 | ✍️ + owner facts |
| Occasions we sing for | Ordinations; professions of vows; presbyteral and episcopal anniversaries; nuptial Masses; feast days and dedications; concerts and recitals; and non-liturgical events in keeping with the choir's values | Old site *(amendment 2026-11-13)* | ✅ |
| Invitation | "Request the choir for your liturgy", with a link to /contact | Brief §3 (07) | ✍️ |

#### Gallery (`/gallery`)

| Section | Content | Source | Status |
|---|---|---|---|
| Photo grid | Grouped by occasion (e.g. "Christmas 2025, Midnight Mass"), with a caption and alt text for each photo. Opens in a lightbox. | Brief §3 (06) | 📷 |
| Videos | A few embedded YouTube/Facebook videos, if any exist | Brief §3 (06) | 📷 optional |

#### Contact (`/contact`): "Invite us to sing"

| Section | Content | Source | Status |
|---|---|---|---|
| Who should write | Parishes, priests, event organisers, prospective members | Brief §3 (07) | ✅ |
| Invitation form | Name and email, then: date of the liturgy, parish or venue, occasion (from the Occasions list on Our Ministry), Traditional Latin Mass or Novus Ordo, and a free-text message. Includes spam protection. | Owner decision 2026-11-13 | build |
| Other enquiries | A short line for people who'd like to join the choir or have a general question, using the same form or the email address | Brief §3 (07) | ✍️ |
| Direct contact | Email address; optional social links | Owner | 📷 |

---

## 5. Design system

### Traditional meets Modern: how we read it

| Traditional (the content and ornament) | Modern (the structure) |
|---|---|
| Serif capitals in the style of Roman inscriptions (Cinzel) | Generous white space and a clear grid |
| Gold rules, small cross and fleuron dividers | Large photography, few elements per screen |
| Faint chant-manuscript textures (neumes on a four-line staff) | Fast, clean, readable on phones first |
| Latin inscriptions as section eyebrows (e.g. *Cantate Domino*) | Plain-English navigation and buttons |
| Candlelit, warm photography | No clutter: no sliders, pop-ups or autoplaying sound |

Rule of thumb: **ornament frames the content and never competes with it.** Each screen gets at most one decorative motif.

### Palette

The brief gives four colours. A fifth, **Deep Gold**, is added for text on light backgrounds, because the brief's Antique Gold is too faint there to read (contrast measured against WCAG 2.1 AA, which needs 4.5:1 for body text).

| Token | Hex | Role |
|---|---|---|
| Deep Forest | `#202723` | Dark sections, header and footer backgrounds, headings on light |
| Antique Gold | `#B49A68` | Accents, rules, icons; **text only on dark backgrounds** |
| Parchment | `#E9E1D2` | Main page background |
| Charcoal | `#292929` | Body text on light backgrounds |
| Deep Gold *(new)* | `#735E34` | Gold-toned links and labels on Parchment or white |

Measured contrast:

| Text colour / background | Ratio | Use |
|---|---|---|
| Charcoal on Parchment | 11.2 : 1 | ✅ body text |
| Deep Forest on Parchment | 11.75 : 1 | ✅ headings |
| Parchment on Deep Forest | 11.75 : 1 | ✅ text in dark sections |
| Antique Gold on Deep Forest | 5.64 : 1 | ✅ gold headings and links in dark sections |
| Deep Gold on Parchment | 4.78 : 1 | ✅ gold links on light |
| Antique Gold on Parchment | 2.08 : 1 | ❌ **never for text**, decorative lines only |
| Deep Forest vs Charcoal | 1.05 : 1 | ❌ never place one on the other |

### Derived shades *(amendment 2026-11-13b)*

The mockup and the build need a few tints and shades that the palette table doesn't list. They are documented here so the palette stays the single source of truth. **Only the five palette colours above and the derived shades listed below may appear on the site. Any new hue needs an owner-logged amendment (§12).**

| Token | Hex | Use | Contrast |
|---|---|---|---|
| Card Parchment | `#F2ECDF` | Card and panel backgrounds on Parchment (parchment family) | Charcoal on it 12.36 : 1 ✅ |
| Border (light) | `#D6CBB4` | Hairline borders and dividers on light backgrounds (parchment family) | Non-text |
| Border (strong) | `#C4B694` | Stronger borders, e.g. form fields, on light backgrounds (parchment family) | Non-text |
| Muted text on Forest | `#CFC8B6` | Secondary text in dark sections (parchment family) | On Deep Forest 9.15 : 1 ✅ |
| Muted text on Parchment | `#5A5347` | Secondary text on light backgrounds (charcoal family) | On Parchment 5.85 : 1 ✅ |
| Darkest Forest | `#181D19` | Footer background (deep forest family) | Antique Gold on it 6.32 : 1 ✅ |
| Caption gray (light) | `#8A8171` | Captions on light backgrounds (charcoal family) | On Parchment 2.96 : 1 ❌ for body-size text; see note |
| Caption gray (dark) | `#8D9489` | Captions in dark sections (deep forest family) | On Deep Forest 4.89 : 1 ✅ |

- **Borders on dark backgrounds** are Antique Gold `#B49A68` at 25–40% opacity, never a new colour.
- **Caption gray (light) note:** `#8A8171` doesn't meet the WCAG AA target in §5 for normal-size text on Parchment (2.96 : 1; on Card Parchment 3.27 : 1). Use it only for non-essential or large text (24px+, or 19px+ bold) on Card Parchment. Captions people need to read use Muted text on Parchment (`#5A5347`) instead.

### Typography

| Use | Font | Notes |
|---|---|---|
| Headings, wordmark, menu | **Cinzel** | All capitals by design, so short headings only |
| Accent text: quotes, Latin mottos, Mission statement | **Cormorant Garamond** (italic) | The brief's "traditional serif" for accents |
| Body text | **Lato** | Lato is chosen over Montserrat because it's lighter and easier to read in long paragraphs |

Body size is 18px on desktop and 17px on phones, with comfortable line spacing. Fonts are limited to 2–3 weights per family to keep the site fast.

### Visual elements (from the brief)

- **Gregorian chant manuscripts:** faint background texture or section dividers. This works best with a photo of a real manuscript page.
- **Gothic and Romanesque architecture:** hero and section photography, and arched image frames as an accent.
- **Crucifixes and sacred imagery:** used with reverence, in photographs and not as clip-art.
- **Candlelight and warm gold accents:** photo choice and the gold token.
- **Subtle Latin inscriptions:** small Cinzel eyebrows above sections, e.g. *Soli Deo Gloria* in the footer.

### Accessibility and quality targets

- WCAG 2.1 AA: the contrast pairs above, alt text on every photo, keyboard-usable menu and lightbox, visible focus outlines.
- Lighthouse scores of 90+ for Performance, Accessibility, Best Practices and SEO on a phone.
- No autoplaying audio or video.

---

## 6. Build phases and pipeline

### Phases

Effort is in floor working days and assumes the owner's content (§9) arrives on time. **Missing photos are the most likely cause of delay.**

| Phase | Scope | Effort | Done when |
|---|---|---|---|
| **0. Setup** | GitHub repo, Astro project, design tokens, fonts, base layout (header/footer/nav), Vercel project with preview deploys | ~0.5 day | An empty styled shell is live at a `*.vercel.app` preview URL |
| **1. V1: the five sections** | Home, About Us, Our Ministry, Gallery (with lightbox), Contact (with form) as in §4; mobile layout; SEO basics (titles, descriptions); social link previews (Open Graph tags and share image on every page); "Where we sing next" strip; accessibility pass | ~4–6 days | Owner approves every page on the preview URL; Lighthouse targets met |
| **1b. Launch** | Connect the custom domain, HTTPS (automatic on Vercel), test the contact form end to end, turn on Vercel Web Analytics. Search presence: generate a sitemap (Astro's sitemap integration) and register the site with Google Search Console. | ~0.5 day | Site live on the owner's domain |
| **2. Our Music + The Voices** | Repertoire page: Gregorian chant, sacred polyphony, liturgical repertoire. **"The Voices" members page:** the Choir Master and members (12 on the old site's roster), shown only with each member's written consent *(amendment 2026-11-13)* | ~1–2 days | Later, after owner sign-off |
| **3. Media and recordings** | Video and audio page, recordings player. Videos stay as hand-picked embeds (decision 5), not a channel feed. | ~2 days | Later |
| **4. Extras** | To be decided: event and Mass schedule, news, Filipino/Latin text, etc. | TBD | Later |

Inside Phase 1, the work order is: Home → About Us → Our Ministry → Contact → Gallery. The Gallery goes last because it depends most on owner photos.

### Repository, GitHub and Vercel

1. **Repository:** a new GitHub repo (name to confirm, e.g. `crvx-et-cithara-website`) under the account the owner chooses. The `main` branch is what's live.
2. **Workflow:** the same as the floor's other projects. Each change is made in its own branch and pull request, and a second agent reviews it before merging. Nobody pushes directly to `main`.
3. **Checks on every pull request (GitHub Actions):** build the site, check for broken links, run an accessibility check (axe), and run Lighthouse with the targets above.
4. **Vercel:**
   - Every pull request gets its own **preview URL**, which the owner can open on a phone to review before anything goes live.
   - A merge to `main` deploys to production automatically.
   - Any earlier version can be restored in one click.
5. **Domain:** the owner buys or points the domain (§9). Vercel issues the HTTPS certificate automatically.
6. **Secrets:** only the form service key, if one is needed, kept in Vercel environment variables and never in the repo.

---

## 7. Running costs

The choir has very little money, so the site is designed to cost almost nothing to run (locked decision 6).

| Service | What it does | Price |
|---|---|---|
| Astro | Builds the site | Free (open source) |
| GitHub | Stores the site's files and history; runs the checks | Free |
| Vercel (Hobby tier) | Hosts the site, HTTPS, preview links | Free; suitable for a non-commercial choir site |
| Fontsource | The site's fonts, served from the site itself | Free (open source) |
| YouTube / Facebook embeds | Videos | Free |
| Vercel Web Analytics (free tier) | Visitor numbers, cookieless (decision 7) | Free |
| Formspree (free tier) | Delivers contact-form messages by email | Free up to 50 messages a month, far more than a choir needs. Web3Forms is a free alternative. |
| **Domain name** (e.g. a `.org` or `.com`) | The choir's own web address | **About US$10–15 (≈ ₱600–900) a year**, the only recurring cost, and optional |

- **Cash needed to launch: ₱0.** Vercel gives a free `*.vercel.app` address, so the choir can launch on that and add its own domain later.
- **With a custom domain: under ₱1,000 a year.**
- If the site ever outgrows a free tier, the fix is to choose a paid tier at that point, with the owner's approval. Nothing is paid for in advance.

Prices are as of November 2026, and free-tier limits can change. The floor will check them again before launch.

---

## 8. Who updates the website

- **There is no admin panel.** A static site has no login or editing screen. Its content (text, photos, video links) lives in the project files, and every change goes live automatically once it is approved.
- **At launch, the floor is the webmaster.** The owner sends new photos, video links or text changes, and the floor publishes them. A change is usually live within minutes of being made, and it costs the choir nothing.
- **Photos and videos are handled differently.** Photos go into the site itself and are optimised automatically. Videos stay on YouTube: the choir uploads them to its own channel and sends the link, and the site embeds that video (locked decision 5).
- **Self-service editing later, only if needed.** If the choir later wants to edit the site itself, **Decap CMS** can be added as a later phase with the owner's approval. It is free and stores changes in the same GitHub files, so it keeps the free-to-run rule (decision 6). But it adds moving parts (logins and an editing screen to maintain), so it is worth adding only when the choir genuinely needs it.

---

## 9. What the owner needs to provide

### Needed for Phase 1

- [ ] **Photos:**
  - 1 strong hero photo, landscape, of the choir or a church interior
  - 10–30 gallery photos grouped by occasion, with a one-line caption each
  - 3 "featured activity" photos

  Please send the original full-size files, not ones re-sent through Messenger or WhatsApp, which are compressed.
- [ ] **Photo permission:** confirmation that everyone recognisable in the photos agrees to appear on a public website. Parental consent is needed for any minors.
- [ ] **Original logo file (urgent):** the crest exists. Get the original file (SVG or a large PNG) from whoever made the old site **before the preview at crvxetcithara.vibepreview.com expires**. A screenshot from the site is not good enough for print or sharp screens. *(amendment 2026-11-13)*
- [ ] **Choir facts for "Our Story":** year founded, and home parish and location. The Choir Master's name comes from the old site; please confirm it.
- [ ] **Ministry facts:** where and how often the choir sings each form of the Mass, and which special occasions it accepts (weddings, funerals, feast days…).
- [ ] **Contact email** that should receive enquiries. A dedicated choir address is recommended over a personal one.
- [ ] **Domain name:** the preferred name (e.g. `crvxetcithara.org`) and who will own and pay for it. A domain costs roughly US$10–15 (about ₱600–900) a year and is optional at launch (see §7).
- [ ] **Social media links,** if any (Facebook, YouTube, Instagram).
- [ ] **Upcoming engagements** for "Where we sing next": date, parish and occasion, sent whenever they change.
- [ ] **Approval** of the floor's drafted text (✍️ items in §4).

### Needed later (Phase 2–3)

- [ ] Repertoire list for Our Music.
- [ ] Recordings (audio files or YouTube links) and video links.
- [ ] **Written consent from each member** before their name or photo appears on "The Voices" page. The old site's roster of 12 is the starting list. *(amendment 2026-11-13)*

---

## 10. Out of scope for v1

- **Our Music** page (repertoire: Gregorian chant, sacred polyphony, liturgical repertoire) and **The Voices** members page. Phase 2.
- **Media** page, video library and **audio recordings** / music player. Phase 3.
- Full event calendar, Mass schedule, news or blog. The short "Where we sing next" strip on Home is in v1.
- Content-management (CMS) admin panel. Changes go through the floor (see §8).
- Building or hosting a custom email server.

**Considered and rejected** to keep the site simple: email newsletters, member logins (and with them rehearsal schedules and a sheet-music library), online donations or payments, and multilingual versions. The site is in English; Latin appears only as decorative inscriptions.

---

## 11. Open questions

| # | Question | Why it matters | Floor's suggestion |
|---|---|---|---|
| 1 | **How should the contact form deliver messages?** | A static site can't send email by itself. | A hosted form service (Formspree or Web3Forms, free tier) that emails the choir's address, with a plain `mailto:` link as a fallback. |
| 2 | **Domain name, and who owns it?** | Needed for launch (Phase 1b). | Register under the choir's or owner's own account, not the floor's. |
| 3 | **Which GitHub and Vercel account hosts it?** | Decides who controls the site long-term. | Owner's account, with the floor added as collaborators. |
| 4 | Is there a logo or crest? *(answered)* | **Answered 2026-11-13:** yes, a crest (lyre, dove over cross, two sacred hearts). | Use it in the header and social previews; get the original file (§9). |
| 5 | English only, or also Filipino and/or Latin? *(answered)* | **Answered 2026-11-13:** multilingual was rejected (§10). | English only; Latin as decorative inscriptions. |
| 6 | **Keep a short "Our Repertoire" strip on Home in v1?** | The brief lists it as homepage section 05, but defers the full Music page. | Yes, as one line with no link until Phase 2. |
| 7 | **Spelling and styling of the name** | "Crvx" uses the classical V for U. Should it always appear as "Crvx et Cithara" (lowercase *et*), or in capitals as on the brief's cover? | "Crvx et Cithara" in text, CRVX ET CITHARA in the Cinzel wordmark. |
| 8 | **"Ad Maiorem" or "Ad Majorem" Dei Gloriam?** | The brief spells it *Maiorem*; the old site spells it *Majorem*. Both are correct Latin. | Keep *Maiorem* (the brief's spelling) until the owner chooses. *(amendment 2026-11-13)* |

---

## 12. Amendment log

**Owner amendment, 2026-11-13.** The owner reviewed the choir's old site (crvxetcithara.vibepreview.com, a builder preview likely to expire) and approved adopting its content into this locked plan:

1. **Identity:** the name means *The Cross and the Lyre*, which becomes the site's subtitle. The positioning line is "The Philippines' Only Independent Choir Wholly Devoted to Sacred Music & Liturgy". The crest exists (open question 4 answered), and the original file must be obtained before the preview expires.
2. **Two formations:** the SATB mixed choir and the TTBB all-male ensemble, added to Home and About Us.
3. **Occasions:** the old site's list of occasions replaces the generic special-celebrations copy on Our Ministry.
4. **"The Voices" members page:** approved for Phase 2, with written consent from each member. The source is the old site's roster (12 members; Choir Master Br. Angelo Lorenzo Salvacion).
5. **Spelling:** *Ad Maiorem* stays the default. *Ad Majorem* (the old site's spelling) is open question 8.

**Owner amendment, 2026-11-13b.** A "Derived shades" table was added to §5 (card parchment, two parchment-family borders, muted text on forest and on parchment, darkest forest, two caption grays), plus the rule that borders on dark backgrounds are Antique Gold at 25–40% opacity. Principle: only the five palette colours and their listed derivatives may appear on the site, and any new hue needs an owner-logged amendment.

---

*Soli Deo Gloria.*
