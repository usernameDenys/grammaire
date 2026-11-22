// Page copy that depends on the target language (English), per native language.
// Generic interface strings live in lib/i18n/ui.ts.

import type { MapCopy } from "@/content";

export const copyUk: MapCopy = {
  badge: "Англійська граматика · 30 тем · 5 етапів · до B2",
  titleHtml: "Карта англійської <em>граматики</em>.",
  glossSub: "частини мови, ролі в реченні, дієслівні терміни, скорочення · українською та англійською",
  mapHint:
    "Читай карту зверху вниз: рядок — це етап. Усередині рядка йди за номерами на станціях, вони стрибають між колонками. Колонку до кінця проходити не треба. Пунктир між станціями означає, що нижня тема використовує знання з верхньої: наприклад, Third conditional спирається на Past perfect. Натисни на станцію, щоб підсвітити її зв'язки й прочитати пояснення в панелі. Червона лінія (питання й непряма мова) найважливіша для розмови, бірюзова (речення і текст) — для письма.",
  weekItemsHtml: [
    "<b>2 × 30 хв</b> — нова тема з карти.",
    "<b>1 × 20 хв</b> — розмова або монолог: запиши себе на 2–3 хвилини і переслухай.",
    "<b>1 × 45 хв</b> — письмове завдання етапу, потім самоперевірка.",
    "<b>щодня 5 хв</b> — повторення списку власних помилок.",
  ],
  practiceTitle: "Джерела для практики",
  practice: [
    { name: "BBC Learning English", url: "https://www.bbc.co.uk/learningenglish/", desc: "аудіо, відео й уроки за рівнями" },
    { name: "Write & Improve", url: "https://writeandimprove.com/", desc: "безкоштовна перевірка твоїх текстів від Cambridge" },
    { name: "Cambridge Dictionary", url: "https://dictionary.cambridge.org/grammar/british-grammar/", desc: "довідник граматики з прикладами" },
    { name: "YouGlish", url: "https://youglish.com/", desc: "як слово чи фразу вимовляють у реальних відео" },
  ],
};

export const copyFr: MapCopy = {
  badge: "Grammaire anglaise · 30 thèmes · 5 étapes · jusqu'au B2",
  titleHtml: "Carte de la <em>grammaire</em> anglaise.",
  glossSub: "parties du discours, fonctions dans la phrase, termes verbaux, abréviations · en français et en anglais",
  mapHint:
    "Lis la carte de haut en bas : une rangée est une étape. Dans une rangée, suis les numéros des stations : ils sautent d'une colonne à l'autre. Inutile de finir une colonne. Les pointillés entre deux stations signifient que le thème du bas utilise celui du haut : par exemple, le third conditional repose sur le past perfect. Touche une station pour mettre ses liens en évidence et lire l'explication dans le panneau. La ligne rouge (questions et discours rapporté) compte le plus pour l'oral, la turquoise (phrase et texte) pour l'écrit.",
  weekItemsHtml: [
    "<b>2 × 30 min</b> — un nouveau thème de la carte.",
    "<b>1 × 20 min</b> — une conversation ou un monologue : enregistre-toi 2 à 3 minutes et réécoute.",
    "<b>1 × 45 min</b> — la tâche écrite de l'étape, puis autocorrection.",
    "<b>5 min par jour</b> — relire ta liste d'erreurs.",
  ],
  practiceTitle: "Ressources pour pratiquer",
  practice: [
    { name: "BBC Learning English", url: "https://www.bbc.co.uk/learningenglish/", desc: "audio, vidéos et leçons par niveau" },
    { name: "Write & Improve", url: "https://writeandimprove.com/", desc: "correction gratuite de tes textes par Cambridge" },
    { name: "Cambridge Dictionary", url: "https://dictionary.cambridge.org/grammar/british-grammar/", desc: "grammaire de référence avec exemples" },
    { name: "YouGlish", url: "https://youglish.com/", desc: "la prononciation d'un mot dans de vraies vidéos" },
  ],
};
