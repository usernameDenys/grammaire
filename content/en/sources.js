/* eslint-disable */
// Further reading for each topic of the English map, keyed by topic id: [title, url].
// Shared by every native language: the sources themselves are in English.
// Cambridge Dictionary "English Grammar Today" as the reference, Perfect English Grammar
// for short explanations with exercises.

const C = "https://dictionary.cambridge.org/grammar/british-grammar/";
const G = "https://www.perfect-english-grammar.com/";

export const SOURCES = {
  V1: [
    ["Present simple or present continuous?", C + "present-simple-or-present-continuous"],
    ["Present simple or present continuous? (exercises)", G + "present-simple-or-present-continuous.html"],
    ["Stative verbs", G + "stative-verbs.html"],
  ],
  V2: [
    ["Past simple (I worked)", C + "past-simple-i-worked"],
    ["Used to", C + "used-to"],
    ["Irregular verbs", G + "irregular-verbs.html"],
  ],
  V3: [
    ["Past simple or present perfect?", C + "past-simple-or-present-perfect"],
    ["Present perfect: typical errors", C + "present-perfect-typical-errors"],
    ["Present perfect or past simple? (exercises)", G + "present-perfect-or-past-simple.html"],
  ],
  V4: [
    ["Past continuous or past simple?", C + "past-continuous-or-past-simple"],
    ["Past perfect simple or past simple?", C + "past-perfect-simple-or-past-simple"],
    ["Past perfect: use", G + "past-perfect-use.html"],
  ],
  V5: [
    ["Present perfect simple or present perfect continuous?", C + "present-perfect-simple-or-present-perfect-continuous"],
    ["Future perfect simple (I will have worked)", C + "future-perfect-simple-i-will-have-worked-eight-hours"],
    ["Future continuous: use", G + "future-progressive-tense-use.html"],
  ],
  M1: [
    ["Must", C + "must"],
    ["Should", C + "should"],
    ["Modal verbs of obligation", G + "modal-verbs-of-obligation.html"],
  ],
  M2: [
    ["Future: will and shall", C + "future-will-and-shall"],
    ["Future: be going to", C + "future-be-going-to-i-am-going-to-work"],
    ["Will or be going to?", G + "will-or-be-going-to.html"],
  ],
  M3: [
    ["Conditionals", C + "conditionals"],
    ["Unless, as long as and other expressions", C + "conditionals-other-expressions-unless-should-as-long-as"],
    ["Second conditional", G + "second-conditional.html"],
  ],
  M4: [
    ["Conditionals and wishes", C + "conditionals-and-wishes"],
    ["Wish", C + "wish"],
    ["Third conditional", G + "third-conditional.html"],
  ],
  M5: [
    ["Modality: meanings and uses", C + "modality-meanings-and-uses"],
    ["Modal verbs of probability", G + "modal-verbs-of-probability.html"],
    ["Past modals", G + "past-modals.html"],
  ],
  N1: [
    ["A/an and the", C + "a-an-and-the"],
    ["Articles with bed, home, work and town", G + "bed-home-work-town.html"],
  ],
  N2: [
    ["Nouns: countable and uncountable", C + "nouns-countable-and-uncountable"],
    ["Much, many, a lot of, lots of", C + "much-many-a-lot-of-lots-of-quantifiers"],
    ["A little, little, a few, few", G + "a-little-a-few.html"],
  ],
  N3: [
    ["Adjectives: order", C + "adjectives-order"],
    ["Bored or boring?", C + "word-choice-bored-or-boring"],
    ["Such or so?", C + "such-or-so"],
  ],
  N4: [
    ["Comparison: adjectives", C + "comparison-adjectives-bigger-biggest-more-interesting"],
    ["Comparisons of equality (as tall as)", C + "comparison-comparisons-of-equality-as-tall-as-his-father"],
    ["Comparative and superlative adjectives", G + "adjectives-comparative-and-superlative.html"],
  ],
  N5: [
    ["Compound nouns", C + "nouns-compound-nouns"],
    ["Possession ('s, of)", C + "possession-john-s-car-a-friend-of-mine"],
    ["Suffixes", C + "suffixes"],
  ],
  P1: [
    ["At, on and in (time)", C + "at-on-and-in-time"],
    ["At, on and in (place)", C + "at-on-and-in-place"],
    ["Prepositions of time", G + "prepositions-of-time.html"],
  ],
  P2: [
    ["Verb patterns: verb + infinitive or verb + -ing", C + "verb-patterns-verb-infinitive-or-verb-ing"],
    ["Stop: -ing form or to-infinitive", C + "stop-ing-form-or-to-infinitive"],
    ["Gerunds and infinitives", G + "gerunds-and-infinitives.html"],
  ],
  P3: [
    ["Phrasal verbs and multi-word verbs", C + "phrasal-verbs-and-multi-word-verbs"],
    ["Phrasal verbs", G + "phrasal-verbs-1.html"],
  ],
  P4: [
    ["Passive: forms", C + "passive-forms"],
    ["Have something done", C + "have-something-done"],
    ["The passive", G + "passive.html"],
  ],
  P5: [
    ["Do or make?", C + "collocation-do-or-make"],
    ["Verbs and prepositions", G + "verbs-and-prepositions.html"],
    ["Adjectives and prepositions", G + "adjectives-and-prepositions.html"],
  ],
  Q1: [
    ["Questions", C + "questions"],
    ["Questions: typical errors", C + "questions-typical-errors"],
    ["Subject questions", G + "subject-questions.html"],
  ],
  Q2: [
    ["Tags", C + "tags"],
    ["Neither, neither … nor and not … either", C + "neither-neither-nor-and-not-either"],
    ["Tag questions", G + "tag-questions.html"],
  ],
  Q3: [
    ["Indirect questions", G + "indirect-questions.html"],
    ["Reported speech: indirect speech", C + "reported-speech-indirect-speech"],
  ],
  Q4: [
    ["Reported speech: indirect speech", C + "reported-speech-indirect-speech"],
    ["Reported speech", G + "reported-speech.html"],
    ["Say and tell", G + "say-and-tell.html"],
  ],
  Q5: [
    ["Reporting verbs", G + "reporting-verbs.html"],
    ["Verb patterns: verb + that-clause", C + "verb-patterns-verb-that-clause"],
  ],
  S1: [
    ["Word order", C + "word-order"],
    ["Adverbs and adverb phrases: position", C + "adverbs-and-adverb-phrases-position"],
    ["Adverbs of frequency", G + "adverbs-of-frequency.html"],
  ],
  S2: [
    ["Punctuation", C + "punctuation"],
    ["Apostrophe", C + "apostrophe"],
    ["It's or its?", C + "it-s-or-its"],
  ],
  S3: [
    ["Relative clauses: defining and non-defining", C + "relative-clauses-defining-and-non-defining"],
    ["Whose", C + "whose"],
    ["Relative clauses", G + "relative-clauses.html"],
  ],
  S4: [
    ["Conjunctions: contrasting", C + "conjunctions-contrasting"],
    ["In spite of and despite", C + "in-spite-of-and-despite"],
    ["Conjunctions: causes, reasons, results and purpose", C + "conjunctions-causes-reasons-results-and-purpose"],
  ],
  S5: [
    ["Cleft sentences", C + "cleft-sentences-it-was-in-june-we-got-married"],
    ["Inversion", C + "inversion"],
    ["Formal and informal language", C + "formal-and-informal-language"],
  ],
};
