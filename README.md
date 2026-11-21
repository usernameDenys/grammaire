# Grammar Maps

Interactive grammar maps for language learners. The user picks their **native language**
(the whole interface switches to it) and the **language whose grammar they want to learn**.

Supported languages: Ukrainian (`uk`), English (`en`), French (`fr`).
Grammar content is written for a specific native language, so maps exist per language pair.
Working maps: Ukrainian → French (`/uk/fr`) and French → French (`/fr/fr`). Every other pair shows a
"coming soon" page (`AVAILABLE_PAIRS` in `lib/i18n/config.ts`, content in `content/index.ts`).
Code, comments and docs are in English.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Routing

- `/{native}/{target}` — e.g. `/uk/fr` (Ukrainian interface, French grammar), `/en/fr`, `/fr/en`.
  All 9 pairs are statically generated; unknown languages return 404.
- `/` — redirected by `proxy.ts`. The native (interface) language follows the system language
  (`Accept-Language`, ordered by quality); unsupported systems fall back to English.
  It is stored (cookie `gm-native`) only when the user explicitly picks a language in the menu;
  "Same as system" clears that choice. Opening a link like `/uk/fr` does not override the system language.
  The last opened map is remembered in cookie `gm-target` (default French).
- Switching languages uses plain links (full page load), so the map script starts fresh.

## Structure

- `app/[native]/layout.tsx` — root layout per interface language (`<html lang>`), fonts, theme script
- `app/[native]/[target]/layout.tsx` — site header, footer, language cookie sync
- `app/[native]/[target]/page.tsx` — grammar map, or "coming soon" when the pair has no map yet
- `app/globals.css` — all styles. Design language "Cahier & encre": a French school notebook (Seyès grid,
  red margin line), ink blue as the main colour, the teacher's red pen for mistakes, green for correct.
  Literata for headings and French examples, Golos Text for body text (both cover Cyrillic), JetBrains Mono
  for numbers only. Every map has its own ink colour via `data-map` (fr blue, en plum, uk amber).
  Light and dark ("ink at night") themes.
- `lib/i18n/config.ts` — languages, available pairs, cookies, locales, system-language matching
- `lib/i18n/ui.ts` — interface strings for every native language (UI only, no grammar content)
- `components/SiteHeader.tsx` — sticky header: in-page navigation, study timer (shell only; driven by
  `lib/grammar-app.js`), language switch (`UK → FR`), light/dark theme switch (saved in `localStorage` as `frmap-theme`)
- `components/SiteFooter.tsx` — footer with author info and links to denys-holenko.com
- `components/GrammarMap.tsx` + `components/markup.ts` — map page markup built from the dictionary
- `components/ComingSoon.tsx` — placeholder for maps without content
- `lib/grammar-app.js` — map engine (SVG map, topic drawer, exercises, plan, timer). It receives UI strings
  from the dictionary and the map content for the current pair. Progress is stored in `localStorage`
  via the `Store` object (shared by all interface languages of the same map); accounts and a database
  are planned, so there is no manual export/import of progress.
- `content/index.ts` — map content per language pair (`getMap(native, target)`)
- `content/fr/uk.js`, `content/fr/glossary.uk.ts` — French grammar for Ukrainian speakers
- `content/fr/fr.js`, `content/fr/glossary.fr.ts` — French grammar for French speakers (same topics,
  answers and examples; explanations written for native speakers)

## Content status

The French map exists for Ukrainian and French speakers. Content files share one structure
(`MapContent`): sections (`DOM`), stages (`PHASES`), topics (`T`), extra exercises (`EX`),
explanations (`LONG`, small markup) and prerequisite notes (`WHY`). The grammar content will be reworked.
