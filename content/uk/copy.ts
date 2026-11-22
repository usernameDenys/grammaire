// Page copy that depends on the target language (Ukrainian), per native language.
// Generic interface strings live in lib/i18n/ui.ts.

import type { MapCopy } from "@/content";

export const copyEn: MapCopy = {
  badge: "Ukrainian grammar · 30 topics · 5 stages · A1 → B1",
  audienceHtml:
    'Who it\'s for: you need to read Cyrillic and know a few basic words. If you can\'t read it yet, start with the <a href="https://www.ukrainianlessons.com/ukrainian-alphabet/" target="_blank" rel="noopener">Ukrainian alphabet guide</a> from Ukrainian Lessons.',
  titleHtml: "Ukrainian grammar <em>map</em>.",
  glossSub: "cases, aspect, parts of speech, verb terms · in English and Ukrainian",
  mapHint:
    "Read the map top to bottom: a row is a stage. Within a row, follow the numbers on the stations — they jump between columns. You don't need to finish a column. A dashed line between stations means the lower topic uses knowledge from the upper one: for example, prefixed motion verbs build on aspect. Tap a station to highlight its links and read the explanation in the panel. The green line (cases) is the backbone of Ukrainian; the purple one (motion and moods) matters most for speaking.",
  weekItemsHtml: [
    "<b>2 × 30 min</b> — a new topic from the map.",
    "<b>1 × 20 min</b> — listening: a podcast or video in Ukrainian, then retell it in 5 sentences.",
    "<b>1 × 45 min</b> — the stage writing task, then self-check.",
    "<b>5 min daily</b> — review your own list of mistakes.",
  ],
  practiceTitle: "Practice resources",
  practice: [
    { name: "Ukrainian Lessons", url: "https://www.ukrainianlessons.com/", desc: "grammar lessons and a podcast in English" },
    { name: "Горох", url: "https://goroh.pp.ua/", desc: "dictionary with stress and every word form" },
    { name: "Український правопис 2019", url: "https://2019.pravopys.net/", desc: "the official spelling rules" },
    { name: "Online Corrector", url: "https://onlinecorrector.com.ua/", desc: "spell check and notes on calques (in Ukrainian)" },
  ],
};

export const copyFr: MapCopy = {
  badge: "Grammaire ukrainienne · 30 thèmes · 5 étapes · A1 → B1",
  audienceHtml:
    'Pour qui : il faut savoir lire le cyrillique et connaître quelques mots de base. Sinon, commence par le <a href="https://www.ukrainianlessons.com/ukrainian-alphabet/" target="_blank" rel="noopener">guide de l\'alphabet ukrainien</a> d\'Ukrainian Lessons (en anglais).',
  titleHtml: "Carte de la <em>grammaire</em> ukrainienne.",
  glossSub: "cas, aspect, parties du discours, termes verbaux · en français et en ukrainien",
  mapHint:
    "Lis la carte de haut en bas : une rangée est une étape. Dans une rangée, suis les numéros des stations : ils sautent d'une colonne à l'autre. Inutile de finir une colonne. Les pointillés entre deux stations signifient que le thème du bas utilise celui du haut : par exemple, les verbes de mouvement à préfixe reposent sur l'aspect. Touche une station pour mettre ses liens en évidence et lire l'explication dans le panneau. La ligne verte (les cas) est la colonne vertébrale de l'ukrainien ; la violette (mouvement et modes) compte le plus pour l'oral.",
  weekItemsHtml: [
    "<b>2 × 30 min</b> — un nouveau thème de la carte.",
    "<b>1 × 20 min</b> — écoute : un podcast ou une vidéo en ukrainien, puis résume-le en 5 phrases.",
    "<b>1 × 45 min</b> — la tâche écrite de l'étape, puis autocorrection.",
    "<b>5 min par jour</b> — relire ta liste d'erreurs.",
  ],
  practiceTitle: "Ressources pour pratiquer",
  practice: [
    { name: "Ukrainian Lessons", url: "https://www.ukrainianlessons.com/", desc: "leçons de grammaire et podcast (en anglais)" },
    { name: "Горох", url: "https://goroh.pp.ua/", desc: "dictionnaire avec accent et toutes les formes" },
    { name: "Український правопис 2019", url: "https://2019.pravopys.net/", desc: "les règles officielles d'orthographe" },
    { name: "Online Corrector", url: "https://onlinecorrector.com.ua/", desc: "correcteur et notes sur les calques (en ukrainien)" },
  ],
};
