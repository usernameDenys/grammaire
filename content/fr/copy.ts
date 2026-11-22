// Page copy that depends on the target language (French), per native language.
// Generic interface strings live in lib/i18n/ui.ts.

import type { MapCopy } from "@/content";

export const copyUk: MapCopy = {
  badge: "Французька граматика · 30 тем · 5 етапів",
  titleHtml: "Карта французької <em>граматики</em>.",
  glossSub: "частини мови, особи, ролі в реченні, дієслівні терміни · українською та французькою",
  mapHint:
    "Читай карту зверху вниз: рядок — це етап. Усередині рядка йди за номерами на станціях, вони стрибають між колонками. Колонку до кінця проходити не треба. Пунктир між станціями означає, що нижня тема використовує знання з верхньої: наприклад, Conditionnel бере закінчення з Imparfait. Натисни на станцію, щоб підсвітити її зв'язки й прочитати пояснення в панелі. Червона та бірюзова лінії (орфографія і речення) найважливіші для письма.",
  weekItemsHtml: [
    "<b>2 × 30 хв</b> — нова тема з карти.",
    "<b>1 × 20 хв</b> — диктант (dictée) на рівні B1–B2.",
    "<b>1 × 45 хв</b> — письмове завдання етапу, потім самоперевірка.",
    "<b>щодня 5 хв</b> — повторення списку власних помилок.",
  ],
  practiceTitle: "Джерела для практики",
  practice: [
    { name: "TV5Monde Apprendre", url: "https://apprendre.tv5monde.com/fr", desc: "вправи та диктанти за рівнями" },
    { name: "Projet Voltaire", url: "https://www.projet-voltaire.fr/", desc: "тренажер орфографії" },
    { name: "Bescherelle", url: "https://bescherelle.com/", desc: "дієвідмінювання" },
    { name: "Le point du FLE", url: "https://www.lepointdufle.net/", desc: "вправи за темами" },
  ],
};

export const copyFr: MapCopy = {
  badge: "Grammaire française · 30 thèmes · 5 étapes",
  titleHtml: "Carte de la <em>grammaire</em> française.",
  glossSub: "parties du discours, personnes, fonctions dans la phrase, termes verbaux",
  mapHint:
    "Lis la carte de haut en bas : une rangée est une étape. Dans une rangée, suis les numéros des stations : ils sautent d'une colonne à l'autre. Inutile de finir une colonne. Les pointillés entre deux stations signifient que le thème du bas utilise celui du haut : par exemple, le conditionnel reprend les terminaisons de l'imparfait. Touche une station pour mettre ses liens en évidence et lire l'explication dans le panneau. Les lignes rouge et turquoise (orthographe et phrase) comptent le plus pour l'écrit.",
  weekItemsHtml: [
    "<b>2 × 30 min</b> — un nouveau thème de la carte.",
    "<b>1 × 20 min</b> — une dictée de niveau B1–B2.",
    "<b>1 × 45 min</b> — la tâche écrite de l'étape, puis autocorrection.",
    "<b>5 min par jour</b> — relire ta liste d'erreurs.",
  ],
  practiceTitle: "Ressources pour pratiquer",
  practice: [
    { name: "TV5Monde Apprendre", url: "https://apprendre.tv5monde.com/fr", desc: "exercices et dictées par niveau" },
    { name: "Projet Voltaire", url: "https://www.projet-voltaire.fr/", desc: "entraînement à l'orthographe" },
    { name: "Bescherelle", url: "https://bescherelle.com/", desc: "conjugaison" },
    { name: "Le point du FLE", url: "https://www.lepointdufle.net/", desc: "exercices par thème" },
  ],
};

export const copyEn: MapCopy = {
  badge: "French grammar · 30 topics · 5 stages",
  titleHtml: "French grammar <em>map</em>.",
  glossSub: "parts of speech, persons, sentence roles, verb terms · in English and French",
  mapHint:
    "Read the map top to bottom: a row is a stage. Within a row, follow the numbers on the stations — they jump between columns. You don't need to finish a column. A dashed line between stations means the lower topic uses knowledge from the upper one: for example, Conditionnel takes its endings from Imparfait. Tap a station to highlight its links and read the explanation in the panel. The red and teal lines (spelling and sentence) matter most for writing.",
  weekItemsHtml: [
    "<b>2 × 30 min</b> — a new topic from the map.",
    "<b>1 × 20 min</b> — a dictation (dictée) at B1–B2 level.",
    "<b>1 × 45 min</b> — the stage writing task, then self-check.",
    "<b>5 min daily</b> — review your own list of mistakes.",
  ],
  practiceTitle: "Practice resources",
  practice: [
    { name: "TV5Monde Apprendre", url: "https://apprendre.tv5monde.com/", desc: "exercises and dictations by level" },
    { name: "Projet Voltaire", url: "https://www.projet-voltaire.fr/", desc: "spelling trainer (in French)" },
    { name: "Bescherelle", url: "https://bescherelle.com/", desc: "verb conjugation" },
    { name: "Le point du FLE", url: "https://www.lepointdufle.net/", desc: "exercises by topic" },
  ],
};
