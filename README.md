# Grammar Maps

Interactive grammar maps for language learners. The user picks their **native language**
(the whole interface switches to it) and the **language whose grammar they want to learn**.

Supported languages: Ukrainian (`uk`), English (`en`), French (`fr`).
Grammar content is written for a specific native language, so maps exist per language pair.
Published maps (`AVAILABLE_PAIRS` in `lib/i18n/config.ts`, content in `content/index.ts`):
French for Ukrainian and English speakers (`/uk/fr`, `/en/fr`), English for Ukrainian and French speakers
(`/uk/en`, `/fr/en`), Ukrainian for English and French speakers (`/en/uk`, `/fr/uk`). Only maps of another
language are published; any other pair (e.g. `/fr/fr`) redirects to an existing map.
Code, comments and docs are in English.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Routing

- `/{native}/{target}` — e.g. `/uk/fr` (Ukrainian interface, French grammar), `/en/fr`, `/fr/en`.
  Only published pairs are statically generated; other pairs redirect (`next.config.ts`), unknown languages return 404.
- `/` — redirected by `proxy.ts`. The native (interface) language follows the system language
  (`Accept-Language`, ordered by quality); unsupported systems fall back to English.
  It is stored (cookie `gm-native`) only when the user explicitly picks a language in the menu;
  "Same as system" clears that choice. Opening a link like `/uk/fr` does not override the system language.
  The last opened map is remembered in cookie `gm-target` (default French).
- Switching languages uses plain links (full page load), so the map script starts fresh.

## Structure

- `app/[native]/layout.tsx` — root layout per interface language (`<html lang>`), fonts, theme script
- `app/[native]/[target]/layout.tsx` — site header, footer, language cookie sync
- `app/[native]/[target]/page.tsx` — grammar map
- `app/globals.css` — all styles. Design language "Cahier & encre": a French school notebook (Seyès grid,
  red margin line), ink blue as the main colour, the teacher's red pen for mistakes, green for correct.
  Literata for headings and French examples, Golos Text for body text (both cover Cyrillic), JetBrains Mono
  for numbers only. Every map has its own ink colour via `data-map` (fr blue, en plum, uk amber).
  Light and dark ("ink at night") themes.
- `lib/i18n/config.ts` — languages, available pairs, cookies, locales, system-language matching
- `lib/i18n/ui.ts` — interface strings for every native language (UI only, no grammar content)
- `components/SiteHeader.tsx` — sticky header: in-page navigation, study timer (shell only; driven by
  `lib/grammar-app.js`), account button (`components/AccountMenu.tsx`), language switch (`UK → FR`),
  light/dark theme switch (saved in `localStorage` as `frmap-theme`)
- `components/SiteFooter.tsx` — footer with author info and links to denys-holenko.com
- `components/GrammarMap.tsx` + `components/markup.ts` — map page markup built from the dictionary
- `lib/grammar-app.js` — map engine (SVG map, topic drawer, exercises, plan, timer). It receives UI strings
  from the dictionary and the map content for the current pair. Progress is stored in `localStorage`
  via the `Store` object (shared by all interface languages of the same map). Exercises answered wrong
  go to a mistakes list (`<prefix>mistakes-v1`, keys like `V1:q3` / `V1:c0`); "Review mistakes" in the
  Practice section opens them all in the drawer, and a right answer removes an exercise from the list.
- `lib/sync.ts` — optional accounts (see below)
- `content/index.ts` — map content per language pair (`getMap(native, target)`)
- `content/<target>/<native>.js`, `content/<target>/glossary.<native>.ts`, `content/<target>/copy.ts` —
  grammar of `<target>` written for `<native>` speakers (e.g. `content/fr/uk.js`: French for Ukrainian speakers)

## Accounts and sync (optional)

Sign-in by email link through Supabase. Without the two `NEXT_PUBLIC_SUPABASE_*` variables the account
button is hidden and everything stays in the browser, as before.

1. Create a Supabase project. In the SQL Editor run `supabase/migrations/20261122000000_progress.sql`
   (a `progress` table with row level security: each user sees only their own rows).
2. Authentication → URL Configuration: set the Site URL to the production domain and add
   `https://<domain>/**` (plus `http://localhost:3000/**` for development) to the redirect URLs.
3. Copy the Project URL and the publishable (or anon) key into `.env.local` (see `.env.example`) and into
   the Vercel project's environment variables, then redeploy (the values are inlined at build time).

How sync works (`lib/sync.ts`): every `Store` write of a progress key (`done`, `score`, `time`, `mistakes`,
`settings`) is pushed to the `progress` table shortly after. Before the map starts, a signed-in user's
progress is pulled: the first time on a device local and cloud progress are merged (union of done topics and
mistakes, the larger study time); after that the cloud wins, except for changes that never reached the server.
Signing out removes the synced progress from that browser; it stays in the account.

## Content status

Content files share one structure
(`MapContent`): sections (`DOM`), stages (`PHASES`), topics (`T`), extra exercises (`EX`),
explanations (`LONG`, small markup) and prerequisite notes (`WHY`). The grammar content will be reworked.
