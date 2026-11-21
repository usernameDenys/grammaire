/* eslint-disable */
// French grammar map content written for French speakers (native "fr", target "fr").
// Translated from uk.js (same structure, answers and examples); edit this file directly.
// Field "gloss" is the short name of a section/topic in the reader's language.
// Explanations (LONG) use a tiny markup: "## heading", "| table |" (1st row = header),
// "- list item", "! note", anything else = paragraph.

export const content = {
  DOM: {
    V: {
      fr: "Indicatif",
      gloss: "présent et passés",
      c: "--l-v"
    },
    M: {
      fr: "Futur & modes",
      gloss: "futur et modes",
      c: "--l-m"
    },
    N: {
      fr: "Groupe nominal",
      gloss: "groupe nominal",
      c: "--l-n"
    },
    P: {
      fr: "Pronoms",
      gloss: "pronoms",
      c: "--l-p"
    },
    O: {
      fr: "Orthographe",
      gloss: "orthographe grammaticale",
      c: "--l-o"
    },
    S: {
      fr: "Phrase",
      gloss: "phrase et ponctuation",
      c: "--l-s"
    }
  },
  PHASES: [
    {
      n: 1,
      name: "Fondations",
      goal: "Des phrases simples sans fautes : terminaisons du présent, articles, pronoms compléments et premiers homophones.",
      task: "Décris ta journée habituelle en 10 à 12 phrases (présent). Souligne ensuite chaque a/à, et/est, son/sont et vérifie-les par le test de substitution."
    },
    {
      n: 2,
      name: "Récit",
      goal: "Raconter le passé et l'avenir : passé composé, futur, y/en, ponctuation française.",
      task: "Une lettre à un ami sur le week-end dernier et les projets du prochain (150 mots). Espaces avant : ; ! ? et guillemets « »."
    },
    {
      n: 3,
      name: "Description et cohérence",
      goal: "Des phrases plus longues : imparfait ou passé composé, qui/que/où/dont, connecteurs, le son [e] à l'écrit.",
      task: "Un souvenir d'enfance (200 mots) : l'imparfait pour le décor, le passé composé pour les événements, au moins deux dont et trois connecteurs logiques."
    },
    {
      n: 4,
      name: "Nuances",
      goal: "Subjonctif, phrases conditionnelles avec si, accord du participe avec avoir, doubles pronoms.",
      task: "Une lettre officielle de demande (200 mots) : conditionnel de politesse, 3 phrases avec il faut que / pour que / bien que, une phrase avec si."
    },
    {
      n: 5,
      name: "Style",
      goal: "La langue écrite : discours indirect, auquel/duquel, nominalisation, gérondif, accords difficiles.",
      task: "Un essai argumentatif de 300 mots + une courte conversation rapportée au discours indirect. Vérifie chaque participe passé."
    }
  ],
  T: [
    {
      id: "V1",
      d: "V",
      p: 1,
      fr: "Présent",
      gloss: "le temps de base",
      t: "Le présent de l'indicatif",
      s: "La base de tout l'écrit. Les formes se prononcent pareil mais s'écrivent différemment : c'est là que naissent le plus de fautes sur le papier.",
      r: ["1er groupe (-er) : <b>-e, -es, -e, -ons, -ez, -ent</b>. La terminaison -ent de ils/elles ne se prononce pas, mais s'écrit toujours.", "2e groupe (finir) : <b>-is, -is, -it, -issons, -issez, -issent</b>.", "3e groupe : surtout <b>-s, -s, -t</b>. Les verbes en -dre gardent le d : il prend, il répond.", "pouvoir, vouloir, valoir: <b>-x, -x, -t</b> (je peux, tu veux, il veut)."],
      e: [
        ["Ils parlent trop vite.", "ils + -ent : terminaison muette, mais obligatoire."],
        ["Elle finit son travail à six heures.", "2e groupe : elle finit (-it), ils finissent (-iss-)."],
        ["Nous commençons, nous mangeons.", "Le ç et le e devant -ons conservent la prononciation."]
      ],
      x: ["Il prends le train.", "Il prend le train.", "3e personne du singulier : -t ou -d, jamais -s."],
      q: [
        [
          "Tu ___ (vouloir) venir ?",
          ["veux", "veut", "veus"],
          0,
          "vouloir et pouvoir se terminent par -x avec je/tu."
        ],
        [
          "Ils ___ (finir) tard.",
          ["finent", "finissent", "finisent"],
          1,
          "Le 2e groupe prend le suffixe -iss- au pluriel."
        ]
      ],
      pre: []
    },
    {
      id: "V2",
      d: "V",
      p: 2,
      fr: "Passé composé",
      gloss: "le passé du récit",
      t: "Le passé composé",
      s: "Le temps principal du récit. Deux difficultés à l'écrit : choisir avoir ou être, et la bonne forme du participe passé.",
      r: ["La plupart des verbes avec <b>avoir</b> : j'ai mangé, elle a pris.", "Avec <b>être</b> : les verbes de mouvement et de changement d'état (aller, venir, arriver, partir, entrer, sortir, monter, descendre, naître, mourir, rester, tomber, devenir, revenir…) et tous les verbes pronominaux (se lever).", "Avec être, le participe s'accorde avec le sujet : elle est partie, ils sont venus.", "Participe : -er → -é, -ir → -i ; le 3e groupe s'apprend : pris, mis, fait, dit, écrit, vu, lu, su, pu, eu, été."],
      e: [
        ["Elle est arrivée hier soir.", "arriver se conjugue avec être : accord avec elle (-e)."],
        ["Nous avons pris le train de 8 h.", "prendre → pris, avec avoir."],
        ["Ils se sont levés tôt.", "Verbe pronominal : être, et accord avec ils (-s)."]
      ],
      x: ["J'ai allé au cinéma.", "Je suis allé(e) au cinéma.", "aller est un verbe de mouvement : il se conjugue avec être."],
      q: [
        [
          "Elles ___ en retard.",
          ["ont arrivé", "sont arrivées", "sont arrivé"],
          1,
          "arriver se conjugue avec être, donc le participe s'accorde : féminin pluriel."
        ],
        [
          "J'ai ___ une lettre.",
          ["écris", "écrit", "écrite"],
          1,
          "Le participe d'écrire est écrit. Le COD est placé après le verbe : pas d'accord."
        ]
      ],
      pre: ["V1"]
    },
    {
      id: "V3",
      d: "V",
      p: 3,
      fr: "Imparfait",
      gloss: "décor ou événement",
      t: "Imparfait ou passé composé ?",
      s: "L'imparfait, c'est le décor, la description, l'habitude. Le passé composé, c'est l'événement qui a eu lieu. À l'écrit, il y a aussi les terminaisons : -ais, -ais, -ait, -ions, -iez, -aient.",
      r: ["Formation : radical de nous au présent (nous finiss-ons) + <b>-ais, -ais, -ait, -ions, -iez, -aient</b>. Exception : être → j'étais.", "Imparfait : description (il faisait beau), état, habitude dans le passé (chaque été, nous allions…), action en cours.", "Passé composé : événement précis et terminé, souvent avec soudain, un jour, hier, trois fois.", "Ensemble : <i>Je lisais quand le téléphone a sonné.</i>"],
      e: [
        ["Quand j'étais petit, je jouais au foot tous les jours.", "Habitude dans le passé (tous les jours) : imparfait."],
        ["Il pleuvait, alors nous sommes restés à la maison.", "Il pleuvait : le décor ; nous sommes restés : ce qui s'est passé."]
      ],
      x: ["Hier, il a fait beau et je me promenais trois heures.", "Hier, il faisait beau et je me suis promené trois heures.", "La météo est le décor (imparfait) ; une promenade à la durée précise est un événement (passé composé)."],
      q: [
        [
          "Je ___ la télé quand tu as appelé.",
          ["ai regardé", "regardais", "regardait"],
          1,
          "Action en cours interrompue : imparfait ; je → -ais."
        ],
        [
          "Ils ___ souvent à la mer.",
          ["sont allés", "allaient", "allait"],
          1,
          "souvent = habitude, donc imparfait ; ils → -aient."
        ]
      ],
      pre: ["V2"]
    },
    {
      id: "V4",
      d: "V",
      p: 4,
      fr: "Plus-que-parfait",
      gloss: "le passé du passé",
      t: "Le plus-que-parfait",
      s: "Le passé dans le passé : une action antérieure à une autre action passée. Sans lui, un récit écrit paraît plat et confus.",
      r: ["avoir ou être à l'imparfait + participe : j'avais fini, elle était partie.", "Mêmes règles que le passé composé pour le choix avoir/être et l'accord.", "Indices fréquents : déjà, parce que, quand…, ce jour-là."],
      e: [
        ["Quand je suis arrivé, le film avait déjà commencé.", "Le film a commencé avant mon arrivée : plus-que-parfait."],
        ["Elle m'a dit qu'elle était déjà venue.", "Discours indirect : « je suis venue » devient « elle était venue »."]
      ],
      x: ["Quand je suis arrivé, ils sont déjà partis.", "Quand je suis arrivé, ils étaient déjà partis.", "Ils sont partis avant mon arrivée : plus-que-parfait."],
      q: [
        [
          "Il a réussi parce qu'il ___ beaucoup.",
          ["a travaillé", "avait travaillé", "travaillait"],
          1,
          "Le travail a précédé la réussite."
        ],
        [
          "Elle était fatiguée : elle ___ toute la nuit.",
          ["avait dansé", "était dansée", "a dansée"],
          0,
          "danser se conjugue avec avoir, sans COD : pas d'accord."
        ]
      ],
      pre: ["V3"]
    },
    {
      id: "V5",
      d: "V",
      p: 5,
      fr: "Passé simple",
      gloss: "le temps littéraire",
      t: "Le passé simple",
      s: "Le temps de la littérature et des textes historiques. Pas besoin de l'écrire soi-même, mais il faut savoir le lire et le reconnaître.",
      r: ["-er: <b>-ai, -as, -a, -âmes, -âtes, -èrent</b> (il parla).", "-ir / -re: <b>-is, -is, -it, -îmes, -îtes, -irent</b> (il finit, il prit).", "Beaucoup d'autres en -us : il fut, il eut, il put, il voulut ; venir → il vint.", "Piège : il finit est à la fois présent et passé simple ; c'est le contexte qui tranche."],
      e: [
        ["Il ouvrit la porte et sortit.", "ouvrir → il ouvrit, sortir → il sortit : terminaison -it."],
        ["Ils furent très surpris.", "être → ils furent : passé simple en -u."]
      ],
      x: ["Hier, je mangeai une pizza avec Paul.", "Hier, j'ai mangé une pizza avec Paul.", "Dans une lettre ou un message : passé composé. Le passé simple, seulement dans un récit littéraire."],
      q: [
        [
          "« Ils vinrent », c'est :",
          ["venir, passé simple", "voir, passé simple", "vendre, présent"],
          0,
          "venir → je vins, il vint, ils vinrent."
        ],
        [
          "Passé simple d'aller (il) :",
          ["il alla", "il allait", "il allat"],
          0,
          "aller se comporte comme un verbe en -er : il alla."
        ]
      ],
      pre: ["V4"]
    },
    {
      id: "M1",
      d: "M",
      p: 1,
      fr: "Impératif",
      gloss: "ordres et conseils",
      t: "L'impératif",
      s: "Ordres, conseils, consignes. Le piège principal à l'écrit : le -s disparaît dans les verbes en -er.",
      r: ["Trois formes sans pronom : Parle ! Parlons ! Parlez !", "Les verbes en -er (ainsi qu'aller, ouvrir, offrir) à la forme tu : <b>sans -s</b> : Mange ! Va !", "Mais le -s revient devant y et en : Vas-y ! Manges-en !", "Formes irrégulières : sois/soyez, aie/ayez, sache/sachez, veuillez."],
      e: [
        ["Ferme la porte, s'il te plaît.", "fermer, verbe en -er : Ferme, sans -s."],
        ["Ne t'inquiète pas !", "Verbe pronominal à la forme négative : le pronom reste devant le verbe."],
        ["Veuillez trouver ci-joint mon CV.", "Formule de lettre officielle : veuillez + infinitif."]
      ],
      x: ["Regardes ce film !", "Regarde ce film !", "Verbe en -er : pas de -s à l'impératif avec tu."],
      q: [
        [
          "___ au lit ! (aller, tu)",
          ["Vas", "Va", "Allez"],
          1,
          "aller à l'impératif : Va !"
        ],
        [
          "Quelle forme est correcte ?",
          ["Parle-en", "Parles-en"],
          1,
          "Devant en et y, on ajoute un -s pour l'euphonie."
        ]
      ],
      pre: ["V1"]
    },
    {
      id: "M2",
      d: "M",
      p: 2,
      fr: "Futur",
      gloss: "l'avenir",
      t: "Futur simple et futur proche",
      s: "Deux formes du futur. Le futur simple se construit sur l'infinitif : l'essentiel est d'apprendre les radicaux irréguliers.",
      r: ["Futur proche : aller + infinitif (je vais partir), familier et proche dans le temps.", "Futur simple : infinitif + <b>-ai, -as, -a, -ons, -ez, -ont</b>. Les verbes en -re perdent le e : prendre → je prendrai.", "Radicaux irréguliers : ser-, aur-, ir-, fer-, pourr-, voudr-, devr-, viendr-, verr-, saur-, faudr-.", "Après quand au sens futur, on emploie aussi le futur : <i>Quand je serai à Paris, je t'appellerai.</i>"],
      e: [
        ["Demain, il fera beau.", "faire → radical irrégulier fer- : il fera."],
        ["Quand tu auras le temps, tu m'écriras.", "Après quand au sens futur : futur (tu auras), pas le présent."]
      ],
      x: ["Quand j'arrive à Paris, je t'appellerai.", "Quand j'arriverai à Paris, je t'appellerai.", "À l'oral, on dit souvent « quand j'arrive » ; à l'écrit, après quand au sens futur, on met le futur."],
      q: [
        [
          "Nous ___ (voir) demain.",
          ["voirons", "verrons", "verons"],
          1,
          "Radical irrégulier verr-."
        ],
        [
          "Quelle orthographe est correcte ?",
          ["J'appellerai", "J'appelerai"],
          0,
          "appeler double le l : j'appelle → j'appellerai."
        ]
      ],
      pre: ["V1"]
    },
    {
      id: "M3",
      d: "M",
      p: 3,
      fr: "Conditionnel",
      gloss: "politesse et hypothèse",
      t: "Le conditionnel présent",
      s: "Politesse, souhait, hypothèse. À l'écrit, il ne faut surtout pas le confondre avec le futur : -rai et -rais se prononcent presque pareil.",
      r: ["Radical du futur + terminaisons de l'imparfait : <b>-ais, -ais, -ait, -ions, -iez, -aient</b>.", "Politesse : Je voudrais…, Pourriez-vous… ?", "Conseil : Tu devrais dormir plus.", "Test pour je : remplace par nous. nous ferons (futur) → je ferai ; nous ferions (cond.) → je ferais."],
      e: [
        ["J'aimerais vous rencontrer.", "Souhait poli : conditionnel, j'aimerais avec -s."],
        ["Pourriez-vous m'envoyer le document ?", "Demande polie : conditionnel avec inversion et trait d'union."]
      ],
      x: ["Je voudrai un café, s'il vous plaît.", "Je voudrais un café, s'il vous plaît.", "Demande polie : conditionnel, avec -s."],
      q: [
        [
          "Si j'avais le temps, je ___ plus.",
          ["lirai", "lirais", "lisais"],
          1,
          "si + imparfait → conditionnel."
        ],
        [
          "Demain je te ___ sans faute.",
          ["téléphonerai", "téléphonerais"],
          0,
          "Action certaine dans l'avenir : futur. Test : nous téléphonerons."
        ]
      ],
      pre: ["M2", "V3"]
    },
    {
      id: "M4",
      d: "M",
      p: 4,
      fr: "Subjonctif",
      gloss: "souhait et doute",
      t: "Le subjonctif présent",
      s: "Le mode du souhait, de la nécessité, de l'émotion et du doute. Il revient sans cesse à l'écrit.",
      r: ["Radical de ils au présent (ils finiss-ent) + <b>-e, -es, -e, -ions, -iez, -ent</b>.", "Déclencheurs : il faut que, vouloir que, pour que, bien que, avant que, à moins que, être content que, douter que.", "Irréguliers : être (que je sois), avoir (que j'aie), aller (que j'aille), faire (que je fasse), pouvoir (que je puisse), savoir (que je sache).", "Pas après espérer que, penser que (à la forme affirmative) ni après que : on y met l'indicatif."],
      e: [
        ["Il faut que tu viennes.", "Nécessité (il faut que) → subjonctif : venir → que tu viennes."],
        ["Bien qu'il soit tard, je continue.", "bien que → toujours le subjonctif : qu'il soit."],
        ["Je veux qu'elle fasse attention.", "Volonté avec deux sujets différents → subjonctif : qu'elle fasse."]
      ],
      x: ["Il faut que je vais à la banque.", "Il faut que j'aille à la banque.", "Après il faut que : subjonctif."],
      q: [
        [
          "Je suis content que tu ___ là.",
          ["es", "sois", "soit"],
          1,
          "Émotion → subjonctif ; tu → sois."
        ],
        [
          "J'espère qu'il ___ beau demain.",
          ["fasse", "fera"],
          1,
          "espérer que demande l'indicatif."
        ]
      ],
      pre: ["M3", "V1"]
    },
    {
      id: "M5",
      d: "M",
      p: 5,
      fr: "Concordance",
      gloss: "rapporter des paroles",
      t: "Concordance des temps et discours indirect",
      s: "Comment rapporter les paroles de quelqu'un au passé. Indispensable dans les lettres, les rapports et les essais.",
      r: ["Si le verbe introducteur est au passé (il a dit que…), les temps reculent :", "présent → imparfait; passé composé → plus-que-parfait; futur → conditionnel.", "Les indicateurs de temps aussi : demain → le lendemain, hier → la veille, ici → là.", "Questions : Est-ce que tu viens ? → Il m'a demandé <b>si</b> je venais. Qu'est-ce que → <b>ce que</b>."],
      e: [
        ["Elle a dit : « Je suis fatiguée. » → Elle a dit qu'elle était fatiguée.", "Discours direct → indirect : le présent devient imparfait."],
        ["Il m'a demandé ce que je ferais le lendemain.", "Futur → conditionnel ; demain → le lendemain."]
      ],
      x: ["Il m'a demandé qu'est-ce que je voulais.", "Il m'a demandé ce que je voulais.", "Dans une question indirecte, qu'est-ce que devient ce que."],
      q: [
        [
          "« Je viendrai. » → Il a dit qu'il ___.",
          ["viendra", "viendrait", "venait"],
          1,
          "futur → conditionnel."
        ],
        [
          "« Tu as fini ? » → Elle m'a demandé ___ j'avais fini.",
          ["si", "que", "est-ce que"],
          0,
          "Une question fermée s'introduit par si."
        ]
      ],
      pre: ["M4", "V4"]
    },
    {
      id: "N1",
      d: "N",
      p: 1,
      fr: "Articles",
      gloss: "défini, indéfini, partitif",
      t: "Les articles : le, un, du",
      s: "Défini, indéfini, partitif : chaque article a son usage. À l'écrit, une erreur d'article se voit tout de suite.",
      r: ["Défini le/la/l'/les : ce qui est connu ou général (J'aime le café).", "Indéfini un/une/des : un parmi d'autres.", "Partitif du/de la/de l' : une quantité indéterminée (Je bois du café).", "Après une négation ou une quantité : <b>de</b> : pas de café, beaucoup de gens. Contractions : à + le = au, de + les = des."],
      e: [
        ["Je mange du pain, mais je n'aime pas le pain blanc.", "du pain : une quantité ; le pain blanc : le pain en général, après aimer."],
        ["Il n'a pas d'enfants.", "Négation : des devient de (d' devant une voyelle)."],
        ["Beaucoup de gens parlent anglais.", "Après beaucoup : de, sans article."]
      ],
      x: ["Je n'ai pas des amis ici.", "Je n'ai pas d'amis ici.", "Après pas, l'article indéfini et le partitif deviennent de."],
      q: [
        [
          "Elle ne boit jamais ___ alcool.",
          ["de l'", "d'", "du"],
          1,
          "Négation → de (d' devant une voyelle)."
        ],
        [
          "Je vais ___ marché.",
          ["à le", "au", "du"],
          1,
          "à + le = au."
        ]
      ],
      pre: []
    },
    {
      id: "N2",
      d: "N",
      p: 2,
      fr: "Genre & pluriel",
      gloss: "genre et nombre",
      t: "Genre et pluriel des noms",
      s: "Le genre et le pluriel. La plupart des marques du pluriel ne s'entendent pas : à l'écrit, on les oublie facilement.",
      r: ["Pluriel : +s ; -eau/-eu → <b>-x</b> (bateaux, jeux) ; -al → <b>-aux</b> (journal → journaux), mais bals, festivals.", "-ail → -ails, sauf travail → travaux.", "Genre selon la terminaison : -tion, -té, -ure, -ence sont en général féminins ; -ment, -age, -isme masculins.", "Pièges : le problème, le système, le musée (masc.) ; la plage, l'image (fém.)."],
      e: [
        ["Les chevaux et les animaux du village.", "-al → -aux : cheval → chevaux, animal → animaux."],
        ["C'est un nouveau problème.", "problème est masculin, malgré sa terminaison en -e."]
      ],
      x: ["les journals locals", "les journaux locaux", "-al → -aux, pour les noms comme pour les adjectifs."],
      q: [
        [
          "Pluriel d'« un travail » :",
          ["des travails", "des travaux"],
          1,
          "travail est une exception : travaux."
        ],
        [
          "Quel mot est féminin ?",
          ["fromage", "liberté", "message"],
          1,
          "-té → féminin."
        ]
      ],
      pre: ["N1"]
    },
    {
      id: "N3",
      d: "N",
      p: 3,
      fr: "Adjectifs",
      gloss: "l'accord",
      t: "Accord et place de l'adjectif",
      s: "L'adjectif s'accorde en genre et en nombre avec le nom. La plupart se placent après le nom.",
      r: ["Féminin : +e ; -if → -ive, -eux → -euse, -er → -ère, -el → -elle, -en → -enne.", "Devant le nom, les adjectifs courts et fréquents (BAGS) : beauté (beau, joli), âge (jeune, vieux), bonté (bon, mauvais), taille (grand, petit).", "beau, nouveau, vieux devant une voyelle : un bel homme, un vieil ami.", "Le sens peut changer : un grand homme (illustre) / un homme grand (de haute taille)."],
      e: [
        ["une voiture neuve et chère", "neuf → neuve, cher → chère : accord au féminin."],
        ["de vieilles maisons blanches", "de devant un adjectif au pluriel ; vieilles, blanches : féminin pluriel."]
      ],
      x: ["Elles sont content.", "Elles sont contentes.", "Accord : féminin + pluriel."],
      q: [
        [
          "une ___ idée (bon)",
          ["bon", "bonne", "bonnes"],
          1,
          "-on → -onne."
        ],
        [
          "un ___ arbre (vieux)",
          ["vieux", "vieil", "vieille"],
          1,
          "Devant une voyelle au masculin : vieil."
        ]
      ],
      pre: ["N2"]
    },
    {
      id: "N4",
      d: "N",
      p: 4,
      fr: "Comparaison",
      gloss: "comparer",
      t: "Comparatif et superlatif",
      s: "Le comparatif et le superlatif. Le piège principal : meilleur ou mieux.",
      r: ["plus / moins / aussi + adj. + que : plus grand que.", "Superlatif : le/la/les plus + adj. ; après le nom, l'article se répète : la ville la plus belle.", "bon → <b>meilleur</b> (adjectif), bien → <b>mieux</b> (adverbe).", "Quantité : plus de / autant de / moins de + nom."],
      e: [
        ["C'est le meilleur restaurant du quartier.", "bon → le meilleur ; superlatif + du (de + le)."],
        ["Elle parle mieux que moi.", "bien → mieux : comparatif de l'adverbe."]
      ],
      x: ["Il chante plus bien que moi.", "Il chante mieux que moi.", "bien → mieux, et non plus bien."],
      q: [
        [
          "Ce gâteau est ___ que l'autre.",
          ["mieux", "meilleur", "plus bon"],
          1,
          "Qualifie un nom (gâteau) → l'adjectif meilleur."
        ],
        [
          "Elle travaille ___ heures que lui.",
          ["autant d'", "aussi d'"],
          0,
          "Avec un nom : autant de."
        ]
      ],
      pre: ["N3"]
    },
    {
      id: "N5",
      d: "N",
      p: 5,
      fr: "Nominalisation",
      gloss: "le style écrit",
      t: "La nominalisation",
      s: "Transformer verbes et adjectifs en noms : la marque d'une écriture mûre dans les lettres, rapports et essais.",
      r: ["Verbe → nom : augmenter → l'augmentation, choisir → le choix, partir → le départ.", "Adjectif → nom : rapide → la rapidité, fort → la force.", "Permet de condenser : Parce que les prix ont augmenté → En raison de l'augmentation des prix.", "Sans excès : une ou deux nominalisations par phrase."],
      e: [
        ["Après la publication du rapport, …", "publier → la publication."],
        ["La réduction des coûts est prioritaire.", "réduire → la réduction : le nom devient sujet de la phrase."]
      ],
      x: ["l'augmentement des prix", "l'augmentation des prix", "Les suffixes ne se devinent pas : vérifie dans le dictionnaire."],
      q: [
        [
          "choisir → ___",
          ["le choisissement", "le choix", "la choisie"],
          1,
          "choisir → le choix."
        ],
        [
          "Parce qu'il est parti → ___",
          ["En raison de son départ", "En raison de son partir"],
          0,
          "partir → le départ."
        ]
      ],
      pre: ["N4", "S3"]
    },
    {
      id: "P1",
      d: "P",
      p: 1,
      fr: "le · lui",
      gloss: "direct et indirect",
      t: "Pronoms COD et COI",
      s: "le/la/les remplacent le complément direct, lui/leur le complément indirect (avec à). Le choix dépend de la construction du verbe.",
      r: ["COD (sans préposition) : voir qqn → je <b>le</b> vois.", "COI (à + personne) : parler à qqn → je <b>lui</b> parle ; de même téléphoner à, demander à, répondre à.", "Place : devant le verbe (je le vois), au passé composé devant l'auxiliaire (je l'ai vu).", "Avec un infinitif : devant l'infinitif : Je vais le voir."],
      e: [["Tu connais Marie ? — Oui, je la connais.", "connaître qqn → COD : la."], ["J'écris à mes parents → Je leur écris.", "écrire à qqn → COI pluriel : leur."]],
      x: ["Je le téléphone ce soir.", "Je lui téléphone ce soir.", "téléphoner À qqn → complément indirect."],
      q: [
        [
          "Tu aides ta sœur ? — Oui, je ___ aide.",
          ["l'", "lui"],
          0,
          "aider qqn : complément direct, donc l'."
        ],
        [
          "Il répond à ses clients → Il ___ répond.",
          ["les", "leur", "leurs"],
          1,
          "COI au pluriel : leur, sans -s."
        ]
      ],
      pre: ["V1"]
    },
    {
      id: "P2",
      d: "P",
      p: 2,
      fr: "y · en",
      gloss: "y et en",
      t: "Les pronoms y et en",
      s: "Deux petits pronoms qu'on évite souvent à l'écrit. Sans eux, les phrases deviennent lourdes et répétitives.",
      r: ["<b>en</b> remplace de + quelque chose : J'en veux (du café), J'en viens (de Paris), J'en parle (de ce problème).", "en avec une quantité : J'en ai trois. Il y en a beaucoup.", "<b>y</b> remplace à + chose ou lieu : J'y vais. J'y pense (à ce projet).", "Pour les personnes : à → lui/leur ; de → de lui / d'elle. Je pense à elle."],
      e: [
        ["Tu as des frères ? — Oui, j'en ai deux.", "en reprend « des frères », le nombre reste dans la phrase."],
        ["Tu vas à Lyon ? — Oui, j'y vais demain.", "y remplace un lieu introduit par à."]
      ],
      x: ["Des frères ? J'ai deux.", "Des frères ? J'en ai deux.", "Après un nombre sans nom, en est obligatoire."],
      q: [
        [
          "Tu t'occupes du dossier ? — Oui, je m'___ occupe.",
          ["y", "en"],
          1,
          "s'occuper DE → en."
        ],
        [
          "Tu as réfléchi à ma proposition ? — Oui, j'___ ai réfléchi.",
          ["y", "en", "lui"],
          0,
          "réfléchir À + chose → y."
        ]
      ],
      pre: ["P1", "N1"]
    },
    {
      id: "P3",
      d: "P",
      p: 3,
      fr: "qui · que · dont",
      gloss: "les relatifs",
      t: "Pronoms relatifs simples",
      s: "Les pronoms relatifs relient des phrases courtes en phrases longues. dont est le piège le plus fréquent à l'écrit.",
      r: ["<b>qui</b> : sujet : L'homme qui parle.", "<b>que</b> (qu') : complément direct : Le livre que je lis.", "<b>où</b> : lieu et temps : la ville où j'habite, le jour où il est parti.", "<b>dont</b> remplace de + … : le livre dont je parle (parler de), la fille dont le père est médecin."],
      e: [["C'est le film dont tout le monde parle.", "parler de → dont."], ["Le jour où je suis arrivé, il pleuvait.", "Pour le temps : où, et non quand."]],
      x: ["C'est la chose que j'ai besoin.", "C'est la chose dont j'ai besoin.", "avoir besoin DE → dont."],
      q: [
        [
          "La maison ___ je rêve.",
          ["que", "dont", "où"],
          1,
          "rêver DE → dont."
        ],
        [
          "L'année ___ nous nous sommes rencontrés.",
          ["où", "quand", "que"],
          0,
          "Pour le temps : où, et non quand."
        ]
      ],
      pre: ["P2", "S1"]
    },
    {
      id: "P4",
      d: "P",
      p: 4,
      fr: "Ordre",
      gloss: "deux pronoms",
      t: "Double pronoms : l'ordre",
      s: "Quand une phrase contient deux pronoms, leur ordre est fixe. À l'impératif affirmatif, il change.",
      r: ["Ordre : me/te/se/nous/vous → le/la/les → lui/leur → y → en.", "Il me le donne. Je le lui donne. Je leur en parle. Il y en a.", "Impératif affirmatif : verbe-le-moi/lui-y-en : Donne-le-moi ! Donne-m'en !", "Impératif négatif : ordre habituel : Ne me le donne pas."],
      e: [
        ["Tu as montré les photos à Paul ? — Oui, je les lui ai montrées.", "les avant lui ; COD placé avant avoir → montrées s'accorde."],
        ["Envoie-la-moi.", "Impératif affirmatif : COD puis moi, avec des traits d'union."]
      ],
      x: ["Je lui le donne.", "Je le lui donne.", "le/la/les toujours avant lui/leur."],
      q: [
        [
          "Il ___ envoie. (le paquet, à moi)",
          ["me le", "le me"],
          0,
          "me avant le."
        ],
        [
          "Donne-___ ! (du pain, à moi)",
          ["m'en", "moi-en", "en-moi"],
          0,
          "moi + en → m'en."
        ]
      ],
      pre: ["P2", "M1"]
    },
    {
      id: "P5",
      d: "P",
      p: 5,
      fr: "lequel",
      gloss: "auquel, duquel",
      t: "Pronoms relatifs composés",
      s: "Les relatifs après une préposition : auquel, duquel, sur lequel, pour laquelle. Une marque typique de la langue écrite.",
      r: ["Préposition + lequel / laquelle / lesquels / lesquelles pour les choses : la table sur laquelle…", "à + lequel = <b>auquel</b>, auxquels, auxquelles; à laquelle.", "de + lequel = <b>duquel</b> après une préposition composée : près duquel, à côté de laquelle.", "Pour les personnes, on emploie plutôt qui : la personne à qui je parle."],
      e: [
        ["Le projet auquel je travaille est urgent.", "travailler à + projet (masc.) → auquel."],
        ["La raison pour laquelle je vous écris…", "pour + raison (fém.) → pour laquelle."]
      ],
      x: ["La raison pour qu'il est parti…", "La raison pour laquelle il est parti…", "Après une préposition, pour une chose : lequel/laquelle."],
      q: [
        [
          "Les questions ___ tu as répondu.",
          ["auxquelles", "auquel", "lesquelles"],
          0,
          "répondre À + questions (fém. plur.) → auxquelles."
        ],
        [
          "Le parc près ___ j'habite.",
          ["duquel", "dont", "lequel"],
          0,
          "Après la préposition composée près de : duquel, et non dont."
        ]
      ],
      pre: ["P3"]
    },
    {
      id: "O1",
      d: "O",
      p: 1,
      fr: "a/à · et/est",
      gloss: "homophones I",
      t: "Homophones grammaticaux (1)",
      s: "Des mots qui se prononcent pareil mais s'écrivent différemment : les fautes les plus courantes, même chez les francophones. Chacun a son test de substitution.",
      r: ["<b>a</b> (avoir) / <b>à</b> (préposition) : remplace par avait. Il a faim → il avait faim ✓.", "<b>et</b> (coordination) / <b>est</b> (être) : remplace par était.", "<b>son</b> (possessif) / <b>sont</b> (être) : remplace par étaient.", "<b>on</b> / <b>ont</b> (avoir) : remplace par avaient. <b>ou</b> (choix) / <b>où</b> (lieu) : remplace par ou bien."],
      e: [
        ["Il est à Paris et il a froid.", "est → était ; à : préposition ; et : coordination ; a → avait."],
        ["Ils ont dit qu'on partait.", "ont → avaient ; on : pronom sujet."],
        ["Où vas-tu, à Lyon ou à Nice ?", "Où : lieu ; ou → ou bien."]
      ],
      x: ["Il à un chien et sa maison et grande.", "Il a un chien et sa maison est grande.", "Tests : il avait un chien ; sa maison était grande."],
      q: [
        [
          "Ils ___ partis avec ___ frère.",
          ["son / sont", "sont / son", "sont / sont"],
          1,
          "Ils étaient partis → sont ; « son frère » → possessif son."
        ],
        [
          "Tu viens ___ pas ?",
          ["ou", "où"],
          0,
          "« ou pas » → ou (ou bien)."
        ]
      ],
      pre: ["V1"]
    },
    {
      id: "O2",
      d: "O",
      p: 2,
      fr: "ces/ses/c'est",
      gloss: "homophones II",
      t: "Homophones grammaticaux (2)",
      s: "La deuxième vague d'homophones : ces/ses/c'est/s'est/sait, ce/se, la/là/l'a, peu/peut, quel/qu'elle.",
      r: ["<b>ces</b> (démonstratif) / <b>ses</b> (possessif pluriel) / <b>c'est</b> (cela est) / <b>s'est</b> (verbe pronominal au PC) / <b>sait</b> (savoir).", "<b>ce</b> + nom ou ce que ; <b>se</b> devant un verbe (se laver).", "<b>la</b> (article) / <b>là</b> (lieu) / <b>l'a</b> (→ l'avait).", "<b>peu</b> (petite quantité) / <b>peut</b> (→ pouvait). <b>quel(le)</b> + nom / <b>qu'elle</b> (que + elle)."],
      e: [
        ["C'est Marie qui s'est trompée.", "C'est → c'était ; s'est : se tromper au passé composé."],
        ["Il sait que ses amis sont là.", "sait → savait ; ses → mes (possessif)."]
      ],
      x: ["Ses une bonne idée, mais il ses trompé.", "C'est une bonne idée, mais il s'est trompé.", "« cela est » → c'est ; se tromper au PC → s'est."],
      q: [
        [
          "Elle ___ levée tôt.",
          ["c'est", "s'est", "sait"],
          1,
          "se lever → elle s'est levée."
        ],
        [
          "Je crois ___ viendra.",
          ["quelle", "qu'elle"],
          1,
          "que + elle ; test : qu'il viendra."
        ]
      ],
      pre: ["O1", "P1"]
    },
    {
      id: "O3",
      d: "O",
      p: 3,
      fr: "-é / -er / -ez",
      gloss: "le son [e] à l'écrit",
      t: "é, er, ez, ais, ait ?",
      s: "Le son [e] à la fin d'un verbe s'écrit de cinq façons. La faute d'écrit la plus fréquente.",
      r: ["Après un autre verbe ou une préposition : infinitif <b>-er</b> : je vais manger, pour parler.", "Après avoir/être : participe <b>-é(e)(s)</b> : j'ai mangé.", "Test : remplace par un verbe du 3e groupe (vendre / vendu). Je vais vendre → -er ; j'ai vendu → -é.", "<b>-ez</b> — vous: vous parlez. <b>-ais / -ait</b> — imparfait: je parlais, il parlait."],
      e: [
        ["Il faut acheter du pain ; j'ai oublié d'en acheter hier.", "Il faut + infinitif (acheter) ; j'ai + participe (oublié) ; d'en + infinitif."],
        ["Vous allez aimer ce film.", "aller + infinitif : aimer (test : vous allez vendre)."]
      ],
      x: ["Je vais te téléphoné demain.", "Je vais te téléphoner demain.", "Test : je vais te vendre → infinitif."],
      q: [
        [
          "Il a ___ toute la journée.",
          ["travaillé", "travailler", "travaillez"],
          0,
          "Après avoir : participe ; test : il a vendu."
        ],
        [
          "Elle veut ___ à Paris.",
          ["habité", "habiter", "habitait"],
          1,
          "Après vouloir : infinitif ; test : elle veut vendre."
        ]
      ],
      pre: ["V2"]
    },
    {
      id: "O4",
      d: "O",
      p: 4,
      fr: "Accord du PP",
      gloss: "avoir + COD",
      t: "Accord du participe passé avec avoir",
      s: "La règle qui trahit le niveau d'orthographe : le participe avec avoir s'accorde avec le COD seulement s'il est placé AVANT le verbe.",
      r: ["COD après le verbe : pas d'accord : J'ai acheté des pommes.", "COD avant le verbe (le/la/les, que, combien de, quel…) : accord : Je les ai achetées. Les pommes que j'ai achetées.", "Avec en : pas d'accord : Des pommes ? J'en ai acheté.", "Méthode : pose la question « quoi ? » après le verbe et regarde où se trouve la réponse."],
      e: [
        ["La lettre que tu m'as écrite.", "que = la lettre (fém.), placé avant → écrite."],
        ["Quelles villes as-tu visitées ?", "Quelles villes (fém. plur.) placé avant → visitées."]
      ],
      x: ["Les photos que j'ai pris sont belles.", "Les photos que j'ai prises sont belles.", "que = les photos (fém. plur.), placé avant le verbe."],
      q: [
        [
          "Ta robe ? Je l'ai ___ hier.",
          ["vu", "vue", "vus"],
          1,
          "l' = la robe, placé avant le verbe → vue."
        ],
        [
          "J'ai ___ les clés.",
          ["perdu", "perdues"],
          0,
          "COD après le verbe → pas d'accord."
        ]
      ],
      pre: ["O3", "P1"]
    },
    {
      id: "O5",
      d: "O",
      p: 5,
      fr: "se · tout · leur",
      gloss: "accords difficiles",
      t: "Pronominaux, tout, leur",
      s: "Les accords les plus difficiles : les verbes pronominaux au passé composé et les mots caméléons tout et leur.",
      r: ["se + PC : accorde si se est COD : Elle s'est lavée. S'il y a un COD après le verbe ou si se est COI, pas d'accord : Elle s'est lavé les mains ; Ils se sont parlé.", "<b>leur</b> devant un verbe : pronom, invariable : je leur parle. Devant un nom : possessif : leur maison, leurs enfants.", "tout / toute / tous / toutes s'accordent avec le nom. tout adverbe (« tout à fait ») est invariable, sauf devant un adjectif féminin commençant par une consonne : elle est toute petite."],
      e: [
        ["Elles se sont téléphoné.", "téléphoner À qqn : se est COI, pas d'accord."],
        ["Je leur ai donné leurs cadeaux.", "leur (pronom, invariable) puis leurs (possessif pluriel)."]
      ],
      x: ["Ils se sont dits bonjour.", "Ils se sont dit bonjour.", "dire À qqn : ici se est COI, pas d'accord."],
      q: [
        [
          "Elle s'est ___ les cheveux.",
          ["coupé", "coupée"],
          0,
          "Le COD les cheveux est placé après le verbe."
        ],
        [
          "Je ___ ai envoyé ___ billets.",
          ["leur / leurs", "leurs / leur", "leur / leur"],
          0,
          "Le pronom leur est invariable ; le possessif devant un pluriel : leurs."
        ]
      ],
      pre: ["O4", "P4"]
    },
    {
      id: "S1",
      d: "S",
      p: 1,
      fr: "Négation",
      gloss: "la structure de la phrase",
      t: "Phrase simple, négation, question",
      s: "La structure de base de la phrase. À l'écrit, le ne est obligatoire et les questions se construisent autrement qu'à l'oral.",
      r: ["Négation : ne… pas / jamais / plus / rien / personne. À l'écrit, le <b>ne</b> ne s'omet pas.", "ne… que = seulement : Je n'ai que dix euros.", "Question écrite : l'inversion : Parlez-vous français ? A-t-il fini ? (-t- entre deux voyelles).", "À l'oral : Tu viens ? / Est-ce que tu viens ?"],
      e: [
        ["Il ne mange jamais de viande.", "ne… jamais : la négation remplace pas ; de devant le nom."],
        ["Pourquoi a-t-elle refusé ?", "Inversion avec -t- entre deux voyelles : a-t-elle."]
      ],
      x: ["Je sais pas.", "Je ne sais pas.", "« Je sais pas » passe à l'oral, mais à l'écrit c'est une faute."],
      q: [
        [
          "L'inversion correcte :",
          ["Parle-t-il anglais ?", "Parle-il anglais ?", "Parlet-il anglais ?"],
          0,
          "Entre deux voyelles : -t-."
        ],
        [
          "Pour dire qu'on a un seul frère :",
          ["Je n'ai qu'un frère.", "Je n'ai pas qu'un frère.", "J'ai que un frère."],
          0,
          "ne… que, et que → qu' devant une voyelle."
        ]
      ],
      pre: ["V1"]
    },
    {
      id: "S2",
      d: "S",
      p: 2,
      fr: "Ponctuation",
      gloss: "la ponctuation",
      t: "La ponctuation française",
      s: "La ponctuation française a ses propres règles : espaces avant certains signes, guillemets « », usage précis de la virgule.",
      r: ["Espace (insécable) avant <b>; : ! ?</b> et à l'intérieur des « guillemets ».", "Les guillemets sont des « chevrons » avec espaces ; dans les dialogues, on utilise souvent le tiret —.", "Devant que, qui, si, on ne met généralement <b>pas de virgule</b> : je pense que…", "Virgule après les mots d'introduction (Hier, Cependant,) et devant mais."],
      e: [["Il m'a dit : « Viens demain ! »", "Espace avant : et avant !, espaces dans les « »."], ["Je pense que tu as raison.", "Pas de virgule devant que."]],
      x: ["Je crois, qu'il viendra.", "Je crois qu'il viendra.", "Pas de virgule devant que."],
      q: [
        [
          "Forme correcte :",
          ["Pourquoi ?", "Pourquoi?"],
          0,
          "En français, espace avant ?."
        ],
        [
          "Où la virgule est-elle fautive ?",
          ["Je sais, que tu es là.", "Hier, il a plu.", "Il est fatigué, mais content."],
          0,
          "Pas de virgule devant que."
        ]
      ],
      pre: ["S1"]
    },
    {
      id: "S3",
      d: "S",
      p: 3,
      fr: "Connecteurs",
      gloss: "les connecteurs",
      t: "Les connecteurs logiques",
      s: "Les connecteurs transforment une suite de phrases en texte argumenté. Certains exigent le subjonctif.",
      r: ["Cause : parce que, car, puisque ; grâce à (positif), à cause de (négatif).", "Opposition : mais, cependant, pourtant, alors que ; bien que + subjonctif.", "Conséquence : donc, alors, c'est pourquoi, si bien que.", "But : pour / afin de + infinitif ; pour que / afin que + subjonctif."],
      e: [
        ["Il est resté chez lui à cause de la pluie.", "Cause négative + nom → à cause de."],
        ["Bien qu'elle soit malade, elle travaille.", "Concession : bien que + subjonctif (soit)."]
      ],
      x: ["Grâce à la grève, je suis arrivé en retard.", "À cause de la grève, je suis arrivé en retard.", "grâce à : seulement pour une cause positive."],
      q: [
        [
          "Il a réussi ___ ses efforts.",
          ["grâce à", "à cause de"],
          0,
          "Résultat positif → grâce à."
        ],
        [
          "Je parle lentement ___ tu comprennes.",
          ["pour que", "parce que", "donc"],
          0,
          "But + subjonctif → pour que."
        ]
      ],
      pre: ["S2"]
    },
    {
      id: "S4",
      d: "S",
      p: 4,
      fr: "Si…",
      gloss: "les phrases avec si",
      t: "Les phrases avec si",
      s: "Trois types de phrases conditionnelles. La règle d'or : juste après si, jamais de futur ni de conditionnel.",
      r: ["Condition réelle : si + présent → présent / futur / impératif. Si tu veux, je viendrai.", "Hypothèse : si + imparfait → conditionnel. Si j'avais le temps, je voyagerais.", "Irréel du passé : si + plus-que-parfait → conditionnel passé. Si j'avais su, je serais venu.", "si + il / ils → s'il, s'ils (mais si elle)."],
      e: [
        ["S'il fait beau, nous irons à la plage.", "Condition réelle : si + présent → futur."],
        ["Si j'étais toi, je lui écrirais.", "Hypothèse : si + imparfait → conditionnel."]
      ],
      x: ["Si j'aurais le temps, je viendrais.", "Si j'avais le temps, je viendrais.", "Après si : imparfait, pas de conditionnel."],
      q: [
        [
          "Si tu ___ plus tôt, tu ne serais pas fatigué.",
          ["te couchais", "te coucherais", "te couches"],
          0,
          "si + imparfait → conditionnel."
        ],
        [
          "Si j'avais su, je ___.",
          ["serais venu", "viendrais", "étais venu"],
          0,
          "si + plus-que-parfait → conditionnel passé."
        ]
      ],
      pre: ["S3", "M3", "V4"]
    },
    {
      id: "S5",
      d: "S",
      p: 5,
      fr: "Style",
      gloss: "gérondif, mise en relief",
      t: "Gérondif et mise en relief",
      s: "Outils de style : réunir deux actions en une (en lisant), mettre en relief l'essentiel (c'est… qui).",
      r: ["Gérondif : en + radical de nous + -ant : en marchant. Simultanéité ou manière : Il travaille en écoutant de la musique.", "Participe présent sans en : écrit et invariable : Les étudiants ayant fini peuvent sortir.", "Mise en relief : C'est lui qui a gagné. C'est à toi que je parle. Ce qui m'intéresse, c'est…", "Irréguliers : étant, ayant, sachant."],
      e: [
        ["En arrivant, j'ai vu le problème.", "Gérondif : même sujet (je) pour les deux actions."],
        ["Ce qui compte, c'est la régularité.", "Mise en relief : Ce qui…, c'est…"]
      ],
      x: ["C'est moi qui a raison.", "C'est moi qui ai raison.", "Après qui, le verbe s'accorde avec moi / toi / nous."],
      q: [
        [
          "Il s'est blessé ___.",
          ["en courant", "en courrant", "courant en"],
          0,
          "courir → nous courons → en courant (un seul r)."
        ],
        [
          "C'est nous qui ___ gagné.",
          ["avons", "ont", "a"],
          0,
          "qui remplace nous → avons."
        ]
      ],
      pre: ["S4", "N5"]
    }
  ],
  EX: {
    V1: {
      q: [
        [
          "Je ___ (appeler) mon frère.",
          ["appele", "appelle", "apelle"],
          1,
          "appeler double le l devant un e muet : j'appelle."
        ],
        [
          "Vous ___ (faire) quoi ?",
          ["faisez", "faites", "fait"],
          1,
          "Formes irrégulières : vous faites, vous dites, vous êtes."
        ],
        [
          "Elle ___ (répondre) vite.",
          ["répond", "répondt", "répons"],
          0,
          "Verbes en -dre : il répond, sans -t."
        ]
      ],
      c: [
        ["Nous mangons ensemble.", "Nous mangeons ensemble.", "Dans les verbes en -ger, on garde le e devant -ons."],
        ["Tu peut venir demain.", "Tu peux venir demain.", "pouvoir: je peux, tu peux."]
      ]
    },
    V2: {
      q: [
        [
          "Ils ___ (venir) hier.",
          ["ont venu", "sont venus", "sont venu"],
          1,
          "venir se conjugue avec être : accord avec ils."
        ],
        [
          "Nous ___ les courses.",
          ["avons fait", "sommes faits", "avons faits"],
          0,
          "faire se conjugue avec avoir, COD après le verbe."
        ],
        [
          "Elle ___ les valises.",
          ["est descendue", "a descendu", "est descendu"],
          1,
          "Avec un complément direct, les verbes de mouvement prennent avoir."
        ]
      ],
      c: [
        ["Elle a tombé dans la rue.", "Elle est tombée dans la rue.", "tomber se conjugue avec être, et le participe s'accorde."],
        ["J'ai prendu le bus.", "J'ai pris le bus.", "prendre → pris."]
      ]
    },
    V3: {
      q: [
        [
          "Soudain, la lumière ___.",
          ["s'éteignait", "s'est éteinte", "s'éteint"],
          1,
          "soudain → événement, passé composé."
        ],
        [
          "Avant, nous ___ à Kyiv.",
          ["habitions", "avons habité", "habitiont"],
          0,
          "Un état passé sans limites : imparfait."
        ],
        [
          "Il ___ vingt ans quand il est parti.",
          ["a eu", "avait", "avais"],
          1,
          "L'âge relève de la description : imparfait ; il → -ait."
        ]
      ],
      c: [
        ["Quand j'étais jeune, je suis allé souvent à la plage.", "Quand j'étais jeune, j'allais souvent à la plage.", "souvent au passé = habitude → imparfait."],
        ["Nous mangions et soudain quelqu'un sonnait.", "Nous mangions et soudain quelqu'un a sonné.", "soudain → passé composé."]
      ]
    },
    V4: {
      q: [
        [
          "J'ai perdu le livre que tu m'___.",
          ["as prêté", "avais prêté", "prêtais"],
          1,
          "Le prêt a eu lieu avant la perte."
        ],
        [
          "Elle ___ déjà ___ quand je l'ai appelée.",
          ["était / partie", "avait / partie", "était / parti"],
          0,
          "partir se conjugue avec être : accord avec elle."
        ],
        [
          "Si tu m'___, je serais venu.",
          ["avais appelé", "as appelé", "appellerais"],
          0,
          "si + plus-que-parfait → conditionnel passé."
        ]
      ],
      c: [
        ["Il a dit qu'il a déjà vu ce film.", "Il a dit qu'il avait déjà vu ce film.", "Le passé dans le passé → plus-que-parfait."],
        ["Nous avions arrivés trop tard.", "Nous étions arrivés trop tard.", "arriver se conjugue avec être."]
      ]
    },
    V5: {
      q: [
        [
          "« Elle fit » — infinitif :",
          ["faire", "finir", "fixer"],
          0,
          "faire → il fit."
        ],
        [
          "« Nous eûmes » — infinitif :",
          ["avoir", "être", "aller"],
          0,
          "avoir → il eut, nous eûmes."
        ],
        [
          "Passé simple d'être (ils) :",
          ["ils furent", "ils étèrent", "ils fûtes"],
          0,
          "être → il fut, ils furent."
        ]
      ],
      c: [
        ["Il finissa son repas.", "Il finit son repas.", "Verbes en -ir : il finit."],
        ["Ils parlairent longtemps.", "Ils parlèrent longtemps.", "Verbes en -er : ils -èrent."]
      ]
    },
    M1: {
      q: [
        [
          "___ sages, les enfants !",
          ["Soyez", "Êtes", "Soyiez"],
          0,
          "être à l'impératif : sois, soyons, soyez."
        ],
        [
          "Ne ___ pas ! (s'inquiéter, vous)",
          ["vous inquiétez", "inquiétez-vous", "vous inquiétez-vous"],
          0,
          "À la forme négative, le pronom se place devant le verbe."
        ],
        [
          "___-moi ton adresse. (donner, tu)",
          ["Donne", "Donnes", "Donnez"],
          0,
          "-er à la forme tu : sans -s."
        ]
      ],
      c: [
        ["Vas chez le médecin !", "Va chez le médecin !", "Le -s seulement devant y et en : Vas-y !"],
        ["Ne dis-le pas !", "Ne le dis pas !", "À la forme négative, le pronom se place devant le verbe."]
      ]
    },
    M2: {
      q: [
        [
          "Il ___ (falloir) partir tôt.",
          ["faudra", "fallira", "faudrera"],
          0,
          "falloir → faudr-."
        ],
        [
          "Tu ___ (être) là ce soir ?",
          ["seras", "esteras", "sera"],
          0,
          "être → ser-; tu → -as."
        ],
        [
          "Ils ___ (pouvoir) venir.",
          ["pouvront", "pourront", "pouveront"],
          1,
          "pouvoir → pourr-."
        ]
      ],
      c: [
        ["Demain, je prendrerai le train.", "Demain, je prendrai le train.", "Les verbes en -re perdent le e : prendr-."],
        ["Nous allons partirons demain.", "Nous allons partir demain.", "Futur proche : aller + infinitif."]
      ]
    },
    M3: {
      q: [
        [
          "Vous ___ vous reposer. (devoir, conseil)",
          ["devriez", "devrez", "deviez"],
          0,
          "Un conseil : conditionnel."
        ],
        [
          "À ta place, je ne ___ rien.",
          ["dirais", "dirai", "disais"],
          0,
          "À ta place → hypothèse, conditionnel."
        ],
        [
          "Nous ___ visiter Paris. (aimer, souhait)",
          ["aimerions", "aimerons", "aimions"],
          0,
          "Un souhait : conditionnel en -rions."
        ]
      ],
      c: [
        ["Pourriez vous m'aider ?", "Pourriez-vous m'aider ?", "L'inversion demande un trait d'union."],
        ["Si j'étais riche, j'achèterai une maison.", "Si j'étais riche, j'achèterais une maison.", "Hypothèse → conditionnel avec -s."]
      ]
    },
    M4: {
      q: [
        [
          "Avant que tu ___, appelle-moi.",
          ["pars", "partes", "partis"],
          1,
          "avant que + subjonctif."
        ],
        [
          "Je doute qu'il ___ raison.",
          ["a", "ait", "aie"],
          1,
          "douter que + subjonctif; il → ait."
        ],
        [
          "Je pense qu'elle ___ là.",
          ["soit", "est"],
          1,
          "penser que à la forme affirmative → indicatif."
        ]
      ],
      c: [
        ["Il faut que nous faisons attention.", "Il faut que nous fassions attention.", "faire au subjonctif : fass-."],
        ["Je veux que tu viens.", "Je veux que tu viennes.", "vouloir que + subjonctif."]
      ]
    },
    M5: {
      q: [
        [
          "« J'ai faim. » → Il a dit qu'il ___ faim.",
          ["avait", "a", "aura"],
          0,
          "présent → imparfait."
        ],
        [
          "« Où vas-tu ? » → Elle m'a demandé ___ j'allais.",
          ["où", "si", "que"],
          0,
          "Le mot interrogatif est conservé."
        ],
        [
          "« Je suis venu hier. » → Il a dit qu'il était venu ___.",
          ["la veille", "hier", "le lendemain"],
          0,
          "hier → la veille."
        ]
      ],
      c: [
        ["Elle a dit qu'elle viendra demain.", "Elle a dit qu'elle viendrait le lendemain.", "futur → conditionnel; demain → le lendemain."],
        ["Il m'a demandé est-ce que j'étais prêt.", "Il m'a demandé si j'étais prêt.", "est-ce que au discours indirect → si."]
      ]
    },
    N1: {
      q: [
        [
          "Il y a ___ eau sur la table.",
          ["de l'", "du", "des"],
          0,
          "Partitif devant une voyelle : de l'."
        ],
        [
          "J'adore ___ chocolat.",
          ["le", "du", "de"],
          0,
          "Après aimer, adorer, détester : article défini."
        ],
        [
          "Je parle ___ professeurs.",
          ["aux", "à les", "des"],
          0,
          "à + les = aux."
        ]
      ],
      c: [
        ["Elle a beaucoup des livres.", "Elle a beaucoup de livres.", "Après un mot de quantité : de."],
        ["Je n'aime pas du fromage.", "Je n'aime pas le fromage.", "aimer + article défini, même à la forme négative."]
      ]
    },
    N2: {
      q: [
        [
          "Pluriel d'« un œil » :",
          ["des œils", "des yeux"],
          1,
          "Exception : un œil → des yeux."
        ],
        [
          "Quel mot est masculin ?",
          ["voiture", "silence", "chanson"],
          1,
          "le silence est une exception parmi les mots en -ence."
        ],
        [
          "Pluriel d'« un cheveu » :",
          ["des cheveus", "des cheveux"],
          1,
          "-eu → -eux."
        ]
      ],
      c: [
        ["Les bijous sont chers.", "Les bijoux sont chers.", "bijou, caillou, chou, genou, hibou, joujou, pou → -oux."],
        ["La problème est grave.", "Le problème est grave.", "problème est masculin."]
      ]
    },
    N3: {
      q: [
        [
          "une femme ___ (heureux)",
          ["heureux", "heureuse", "heureuze"],
          1,
          "-eux → -euse."
        ],
        [
          "un ___ appartement (beau)",
          ["beau", "bel", "belle"],
          1,
          "Devant une voyelle au masculin : bel."
        ],
        [
          "des chemises ___ (blanc)",
          ["blancs", "blanches", "blanchs"],
          1,
          "blanc → blanche (fém.), au pluriel : blanches."
        ]
      ],
      c: [
        ["Une question importante et difficil.", "Une question importante et difficile.", "difficile prend un -e aux deux genres."],
        ["Il a acheté une voiture rouge nouvelle.", "Il a acheté une nouvelle voiture rouge.", "nouveau se place devant le nom, la couleur après."]
      ]
    },
    N4: {
      q: [
        [
          "C'est le ___ jour de ma vie.",
          ["meilleur", "mieux", "plus bon"],
          0,
          "Adjectif → le meilleur."
        ],
        [
          "Paris est la ville ___ chère de France.",
          ["la plus", "plus", "le plus"],
          0,
          "Après le nom, l'article se répète : la ville la plus chère."
        ],
        [
          "Il est ___ grand ___ son frère.",
          ["aussi / que", "autant / que", "aussi / comme"],
          0,
          "Égalité avec un adjectif : aussi… que."
        ]
      ],
      c: [
        ["Il chante plus mieux que moi.", "Il chante mieux que moi.", "mieux est déjà un comparatif."],
        ["Elle a plus que dix ans d'expérience.", "Elle a plus de dix ans d'expérience.", "Devant un nombre : plus de."]
      ]
    },
    N5: {
      q: [
        [
          "arriver → ___",
          ["l'arrivée", "l'arrivement", "l'arrivation"],
          0,
          "arriver → l'arrivée."
        ],
        [
          "développer → ___",
          ["le développement", "la développation"],
          0,
          "-ment → masculin."
        ],
        [
          "Quand le film a commencé → ___",
          ["Au début du film", "Au commencement de film"],
          0,
          "Nominalisation + article : du film."
        ]
      ],
      c: [
        ["La construisation du pont a duré deux ans.", "La construction du pont a duré deux ans.", "construire → la construction."],
        ["Après la décidation du directeur, tout a changé.", "Après la décision du directeur, tout a changé.", "décider → la décision."]
      ]
    },
    P1: {
      q: [
        [
          "Tu vois tes amis ? — Oui, je ___ vois.",
          ["les", "leur", "leurs"],
          0,
          "voir qqn : complément direct."
        ],
        [
          "J'ai dit la vérité à Marie → Je ___ ai dit la vérité.",
          ["l'", "lui", "la"],
          1,
          "dire à qqn → lui."
        ],
        [
          "Paul ? Je vais ___ appeler.",
          ["l'", "lui", "le"],
          0,
          "appeler qqn : complément direct ; devant une voyelle, l'."
        ]
      ],
      c: [
        ["Je leurs ai écrit.", "Je leur ai écrit.", "Le pronom leur ne prend jamais de -s."],
        ["Je vais lui voir demain.", "Je vais le voir demain.", "voir qqn : complément direct."]
      ]
    },
    P2: {
      q: [
        [
          "Tu bois du thé ? — Oui, j'___ bois.",
          ["y", "en", "le"],
          1,
          "du thé → en."
        ],
        [
          "Tu penses à ton voyage ? — Oui, j'___ pense.",
          ["y", "en", "lui"],
          0,
          "penser à + chose → y."
        ],
        [
          "Il y a des pommes ? — Oui, il y ___ a.",
          ["en", "y", "les"],
          0,
          "Il y en a."
        ]
      ],
      c: [
        ["Tu viens de la gare ? — Oui, j'y viens.", "Tu viens de la gare ? — Oui, j'en viens.", "venir DE → en."],
        ["Combien de sœurs as-tu ? — J'ai deux.", "Combien de sœurs as-tu ? — J'en ai deux.", "Un nombre sans nom → en."]
      ]
    },
    P3: {
      q: [
        [
          "Le livre ___ est sur la table.",
          ["que", "qui", "dont"],
          1,
          "Sujet → qui."
        ],
        [
          "Le pays ___ je viens.",
          ["où", "dont", "que"],
          1,
          "venir DE → dont (on peut aussi dire d'où)."
        ],
        [
          "La femme ___ tu as vue.",
          ["qui", "que", "dont"],
          1,
          "Complément direct → que."
        ]
      ],
      c: [
        ["L'homme que parle est mon père.", "L'homme qui parle est mon père.", "Sujet → qui."],
        ["Voilà le projet dont je t'ai parlé de.", "Voilà le projet dont je t'ai parlé.", "dont contient déjà de."]
      ]
    },
    P4: {
      q: [
        [
          "Tu donnes les clés à tes parents ? — Je ___ donne.",
          ["les leur", "leur les", "les leurs"],
          0,
          "les avant leur ; leur sans -s."
        ],
        [
          "Il y a du pain ? — Oui, il ___ a.",
          ["y en", "en y"],
          0,
          "y avant en."
        ],
        [
          "Ne ___ dis pas ! (cela, à lui)",
          ["le lui", "lui le"],
          0,
          "Impératif négatif : ordre habituel."
        ]
      ],
      c: [
        ["Donne-moi-le !", "Donne-le-moi !", "Impératif affirmatif : le avant moi."],
        ["Je lui en ai parlé de ce problème.", "Je lui en ai parlé.", "en remplace déjà « de ce problème »."]
      ]
    },
    P5: {
      q: [
        [
          "Le stylo avec ___ j'écris.",
          ["lequel", "laquelle", "qui"],
          0,
          "stylo : masculin, une chose."
        ],
        [
          "Le film ___ je pense.",
          ["auquel", "duquel", "dont"],
          0,
          "penser À → auquel."
        ],
        [
          "La maison au fond ___ il y a un jardin.",
          ["de laquelle", "dont", "duquel"],
          0,
          "au fond de + féminin → de laquelle."
        ]
      ],
      c: [
        ["Le problème à lequel je réfléchis.", "Le problème auquel je réfléchis.", "à + lequel = auquel."],
        ["L'entreprise pour lequel je travaille.", "L'entreprise pour laquelle je travaille.", "entreprise est féminin."]
      ]
    },
    O1: {
      q: [
        [
          "Elle ___ une voiture.",
          ["a", "à"],
          0,
          "Test : elle avait une voiture."
        ],
        [
          "Ils ___ faim.",
          ["on", "ont"],
          1,
          "Test : ils avaient faim."
        ],
        [
          "___ est mon sac ?",
          ["Ou", "Où"],
          1,
          "Lieu → où."
        ]
      ],
      c: [
        ["Mes parents son en vacances.", "Mes parents sont en vacances.", "Test : étaient → sont."],
        ["On à fini le travail.", "On a fini le travail.", "Test : on avait fini → a."]
      ]
    },
    O2: {
      q: [
        [
          "___ livres sont à moi.",
          ["Ces", "Ses", "C'est"],
          0,
          "Démonstratif (« ces livres-ci ») → ces."
        ],
        [
          "Il ne ___ pas nager.",
          ["sait", "s'est", "c'est"],
          0,
          "savoir → il sait."
        ],
        [
          "Il ___ venir demain.",
          ["peu", "peut", "peux"],
          1,
          "Test : il pouvait → peut."
        ]
      ],
      c: [
        ["Je ne sais pas quel heure il est.", "Je ne sais pas quelle heure il est.", "heure est féminin → quelle."],
        ["Il se lave et ce prépare.", "Il se lave et se prépare.", "Devant un verbe → se."]
      ]
    },
    O3: {
      q: [
        [
          "Vous ___ ce livre ? (aimer)",
          ["aimez", "aimer", "aimé"],
          0,
          "vous → -ez."
        ],
        [
          "Il est ___ à huit heures. (arriver)",
          ["arrivé", "arriver", "arrivait"],
          0,
          "Après être : participe."
        ],
        [
          "Il est parti sans ___ un mot. (parler)",
          ["parler", "parlé"],
          0,
          "Après une préposition : infinitif ; test : sans vendre."
        ]
      ],
      c: [
        ["Elle est aller au marché.", "Elle est allée au marché.", "Après être : participe, accordé avec elle."],
        ["Nous allons commencé demain.", "Nous allons commencer demain.", "Après aller : infinitif."]
      ]
    },
    O4: {
      q: [
        [
          "Les fleurs que j'ai ___.",
          ["acheté", "achetées", "achetés"],
          1,
          "que = les fleurs (fém. plur.), placé avant le verbe."
        ],
        [
          "Combien de pages as-tu ___ ?",
          ["lu", "lues"],
          1,
          "combien de pages est placé avant le verbe."
        ],
        [
          "Des gâteaux ? J'en ai ___ trois.",
          ["mangé", "mangés"],
          0,
          "Avec en, pas d'accord."
        ]
      ],
      c: [
        ["Ces chansons, je les ai déjà entendu.", "Ces chansons, je les ai déjà entendues.", "les = les chansons, placé avant le verbe."],
        ["Elle a écrite une lettre.", "Elle a écrit une lettre.", "COD après le verbe → pas d'accord."]
      ]
    },
    O5: {
      q: [
        [
          "Ils se sont ___ à Paris. (rencontrer)",
          ["rencontré", "rencontrés"],
          1,
          "rencontrer qqn : se est COD."
        ],
        [
          "___ les étudiants sont là.",
          ["Tout", "Tous", "Toutes"],
          1,
          "les étudiants : masc. plur. → tous."
        ],
        [
          "Elles sont ___ petites.",
          ["tout", "toutes"],
          1,
          "Devant un adjectif féminin commençant par une consonne, tout varie : toutes."
        ]
      ],
      c: [
        ["Elles se sont lavées les mains.", "Elles se sont lavé les mains.", "Le COD les mains est placé après le verbe."],
        ["Ils ont pris leur sacs.", "Ils ont pris leurs sacs.", "Possessif devant un pluriel → leurs."]
      ]
    },
    S1: {
      q: [
        [
          "Je ne vois ___.",
          ["personne", "pas personne"],
          0,
          "ne… personne, sans pas."
        ],
        [
          "La question correcte :",
          ["Où habite-t-elle ?", "Où habite-elle ?", "Où elle habite-t-elle ?"],
          0,
          "Entre deux voyelles : -t-."
        ],
        [
          "Il ___ travaille plus.",
          ["ne", "n'", "pas"],
          0,
          "ne… plus ; devant une consonne : ne."
        ]
      ],
      c: [
        ["Il a rien dit.", "Il n'a rien dit.", "À l'écrit, ne est obligatoire."],
        ["Est-ce que vous parlez-vous anglais ?", "Est-ce que vous parlez anglais ?", "Après est-ce que, pas d'inversion."]
      ]
    },
    S2: {
      q: [
        [
          "Les guillemets corrects :",
          ["« Bonjour »", "\"Bonjour\"", "«Bonjour»"],
          0,
          "Guillemets français avec espaces à l'intérieur."
        ],
        [
          "Virgule après un mot d'introduction :",
          ["Cependant, il a refusé.", "Cependant il a refusé."],
          0,
          "Après cependant en début de phrase : virgule."
        ],
        [
          "Forme correcte :",
          ["Attention : danger !", "Attention: danger!"],
          0,
          "Espace avant : et !"
        ]
      ],
      c: [
        ["Il a dit: «Je viens.»", "Il a dit : « Je viens. »", "Espace avant : et à l'intérieur des « ». Sur Mac : « = Option+\\, » = Option+Maj+\\."],
        ["Tu viens?", "Tu viens ?", "Espace avant ?"]
      ]
    },
    S3: {
      q: [
        [
          "Il pleut, ___ je prends un parapluie.",
          ["donc", "bien que", "pourtant"],
          0,
          "Conséquence → donc."
        ],
        [
          "___ il soit riche, il est malheureux.",
          ["Bien qu'", "Parce qu'", "Donc"],
          0,
          "Opposition + subjonctif → bien que."
        ],
        [
          "Je suis venu ___ te voir.",
          ["pour", "pour que", "parce que"],
          0,
          "But + infinitif → pour."
        ]
      ],
      c: [
        ["Bien qu'il est malade, il travaille.", "Bien qu'il soit malade, il travaille.", "bien que + subjonctif."],
        ["Il est parti car de la pluie.", "Il est parti à cause de la pluie.", "car + proposition ; avec un nom : à cause de."]
      ]
    },
    S4: {
      q: [
        [
          "Si tu ___, on y va.",
          ["veux", "voudrais", "voudras"],
          0,
          "Condition réelle : si + présent."
        ],
        [
          "S'il ___, nous resterions à la maison.",
          ["pleuvait", "pleuvrait", "pleut"],
          0,
          "si + imparfait → conditionnel."
        ],
        [
          "Si elle ___, elle aurait réussi.",
          ["avait travaillé", "aurait travaillé", "travaillerait"],
          0,
          "si + plus-que-parfait → conditionnel passé."
        ]
      ],
      c: [
        ["Si il vient, je serai content.", "S'il vient, je serai content.", "si + il → s'il."],
        ["Si tu viendras, je te montrerai.", "Si tu viens, je te montrerai.", "Après si : jamais de futur."]
      ]
    },
    S5: {
      q: [
        [
          "Il lit ___ le petit-déjeuner.",
          ["en prenant", "en prendant", "prenant en"],
          0,
          "nous prenons → en prenant."
        ],
        [
          "C'est à elle ___ je pense.",
          ["que", "qui", "dont"],
          0,
          "C'est + préposition… que."
        ],
        [
          "___ fatiguée, elle est restée chez elle.",
          ["Étant", "Étante", "En étant"],
          0,
          "Le participe présent est invariable : étant."
        ]
      ],
      c: [
        ["En mangeons, il regarde la télé.", "En mangeant, il regarde la télé.", "Gérondif: en + -ant."],
        ["C'est toi qui a gagné.", "C'est toi qui as gagné.", "qui = toi → tu as."]
      ]
    }
  },
  LONG: {
    V1: `## Les trois groupes de verbes
<b>1er groupe</b> : tous les verbes en -er, sauf aller. C'est environ 90 % des verbes, et tous les nouveaux verbes y entrent (googler, liker). <b>2e groupe</b> : les verbes en -ir qui prennent -iss- au pluriel : finir, choisir, réussir, grandir. <b>3e groupe</b> : tout le reste : -ir sans -iss- (partir, dormir, venir), -re (prendre, mettre), -oir (pouvoir, voir) et aller.
| | parler | finir | prendre | pouvoir |
| je | parl<b>e</b> | fin<b>is</b> | prend<b>s</b> | peu<b>x</b> |
| tu | parl<b>es</b> | fin<b>is</b> | prend<b>s</b> | peu<b>x</b> |
| il/elle | parl<b>e</b> | fin<b>it</b> | prend | peu<b>t</b> |
| nous | parl<b>ons</b> | fin<b>issons</b> | pren<b>ons</b> | pouv<b>ons</b> |
| vous | parl<b>ez</b> | fin<b>issez</b> | pren<b>ez</b> | pouv<b>ez</b> |
| ils/elles | parl<b>ent</b> | fin<b>issent</b> | pren<b>nent</b> | peuv<b>ent</b> |
## Pourquoi c'est difficile à l'écrit
Avec parler, quatre formes se prononcent pareil : parle, parles, parle, parlent. À l'oreille, aucune différence : seule le sujet décide de la terminaison. D'où la règle : trouve d'abord le sujet, puis écris la terminaison. Le piège : un sujet éloigné du verbe. « Les enfants de ma voisine <b>jouent</b> » : le sujet est enfants, pas voisine.
## Les changements de radical au 1er groupe
- -cer → ç devant o : nous commen<b>ç</b>ons.
- -ger → ge devant o : nous man<b>ge</b>ons.
- appeler, jeter doublent la consonne : j'appe<b>ll</b>e, je je<b>tt</b>e, mais nous appelons.
- acheter, lever, préférer prennent un è : j'ach<b>è</b>te, je pr<b>é</b>f<b>è</b>re, mais nous achetons.
- -oyer, -uyer → i : j'envo<b>i</b>e, j'appu<b>i</b>e.
La logique de la « botte » : le radical change là où la terminaison est muette (je, tu, il, ils), et reste celui de l'infinitif avec nous et vous.
## Quatre verbes à connaître par cœur
| | être | avoir | aller | faire |
| je | suis | ai | vais | fais |
| tu | es | as | vas | fais |
| il | est | a | va | fait |
| nous | sommes | avons | allons | faisons |
| vous | êtes | avez | allez | faites |
| ils | sont | ont | vont | font |
! Méthode : sujet → personne → groupe → terminaison. Pour le 3e groupe au singulier : -s, -s, -t (ou -d pour les verbes en -dre).`,
    V2: `## Construction
Passé composé = auxiliaire (avoir ou être) au présent + participe passé. L'auxiliaire se conjugue, le participe porte le sens : j'<b>ai</b> parlé, nous <b>sommes</b> partis.
## Quand employer être
Moyen mnémotechnique <b>DR MRS VANDERTRAMP</b> : devenir, revenir, monter, rester, sortir, venir, aller, naître, descendre, entrer, rentrer, tomber, retourner, arriver, mourir, partir. Ce sont surtout des mouvements « vers la maison et hors de la maison » et des changements d'état (naître, mourir, devenir). Plus <b>tous les verbes pronominaux</b> : je me suis levé, elle s'est trompée.
! Piège : monter, descendre, sortir, rentrer, retourner, passer prennent avoir quand ils ont un complément direct. Je suis sorti / J'ai sorti la poubelle.
## Former le participe
| Infinitif | Participe | Exemples |
| -er | -é | parlé, mangé, allé |
| -ir (2e groupe, partir, dormir) | -i | fini, choisi, parti |
| -re (la plupart) | -u | vendu, attendu, perdu |
| -oir | -u | voulu, pu, su, vu, dû |
Les irréguliers qui reviennent sans cesse : avoir → <b>eu</b>, être → <b>été</b>, faire → <b>fait</b>, dire → <b>dit</b>, écrire → <b>écrit</b>, prendre → <b>pris</b>, mettre → <b>mis</b>, ouvrir → <b>ouvert</b>, naître → <b>né</b>, mourir → <b>mort</b>, vivre → <b>vécu</b>, lire → <b>lu</b>, boire → <b>bu</b>, croire → <b>cru</b>.
## L'accord avec être
Avec être, le participe se comporte comme un adjectif : +e au féminin, +s au pluriel. Elle est parti<b>e</b>. Ils sont parti<b>s</b>. Elles sont parti<b>es</b>. Un groupe mixte prend le masculin pluriel. Le plus souvent, la différence ne s'entend pas (parti / partie) : c'est une faute qui ne se voit qu'à l'écrit.
## L'ordre des mots
- La négation encadre l'auxiliaire : Je <b>n'</b>ai <b>pas</b> compris.
- Les pronoms se placent devant l'auxiliaire : Je <b>l'</b>ai vu.
- Les adverbes courts se placent entre l'auxiliaire et le participe : J'ai <b>bien</b> dormi. Il a <b>déjà</b> mangé.`,
    V3: `## Formation
On prend la forme nous du présent, on enlève -ons et on ajoute les terminaisons. Seule exception : être → j'<b>ét</b>ais.
| | parler (nous parl-ons) | finir (nous finiss-ons) | être |
| je | parlais | finissais | étais |
| tu | parlais | finissais | étais |
| il | parlait | finissait | était |
| nous | parlions | finissions | étions |
| vous | parliez | finissiez | étiez |
| ils | parlaient | finissaient | étaient |
Pièges d'orthographe : les verbes dont le radical finit par i en ont deux : nous étud<b>ii</b>ons, vous r<b>ii</b>ez. -cer / -ger : je commen<b>ç</b>ais, je man<b>ge</b>ais (mais nous commencions).
## Choisir : imparfait ou passé composé
| Imparfait | Passé composé |
| le décor de la scène | l'action sur scène |
| un état : être, avoir, savoir, penser | un changement d'état : j'ai compris |
| une habitude : tous les lundis, souvent | une fois ou un nombre de fois : deux fois |
| une action en cours | l'action qui l'interrompt |
| sans limites dans le temps | avec des limites : pendant deux heures, de 8 h à 10 h |
## Le piège de la durée
Une action qui dure n'est pas forcément à l'imparfait. « J'ai travaillé là-bas trois ans » : l'action dure, mais elle a des limites claires, donc passé composé. La question décisive : l'action a-t-elle des limites dans le temps ?
## Les deux temps ensemble
<i>Il était sept heures. Il pleuvait et les rues étaient vides. Soudain, une voiture s'est arrêtée devant la maison. Un homme est sorti.</i> Les trois premiers verbes peignent le tableau (imparfait), les deux derniers sont des événements qui font avancer l'histoire (passé composé).`,
    V4: `## Formation
avoir ou être à l'imparfait + participe passé. Le choix de l'auxiliaire et l'accord suivent les règles du passé composé.
| | parler | partir |
| je | avais parlé | étais parti(e) |
| tu | avais parlé | étais parti(e) |
| il / elle | avait parlé | était parti / partie |
| nous | avions parlé | étions parti(e)s |
| vous | aviez parlé | étiez parti(e)(s) |
| ils / elles | avaient parlé | étaient partis / parties |
## À quoi il sert
À l'oral, on se contente souvent du passé composé pour tout : « quand je suis arrivé, il est parti ». À l'écrit, il faut montrer qu'une action passée a eu lieu avant une autre. Sans plus-que-parfait, le lecteur peut mal comprendre l'ordre des événements.
## Compare
- Quand il est arrivé, nous <b>avons mangé</b>. Il est arrivé, et <i>ensuite</i> nous avons mangé.
- Quand il est arrivé, nous <b>avions mangé</b>. Nous avions mangé <i>avant</i> son arrivée.
Un seul temps change le sens de la phrase.
## Contextes fréquents
- expliquer une cause : Il était fatigué parce qu'il <b>avait</b> mal <b>dormi</b> ;
- le discours indirect : le passé composé recule au plus-que-parfait (thème M5) ;
- une condition irréelle dans le passé : Si j'<b>avais su</b>, je serais venu (thème S4) ;
- le regret : Si seulement je l'<b>avais écouté</b> !`,
    V5: `## Où on le rencontre
Littérature, contes (<i>Il était une fois… Le prince partit</i>), textes historiques, biographies. À l'oral, dans les lettres et les messages, le passé composé le remplace. Ton objectif : reconnaître les formes en lisant, et ne l'écrire que dans un récit littéraire.
## Trois types de terminaisons
| | -a (parler) | -i (finir, prendre) | -u (vouloir, être) |
| je | parlai | finis | voulus |
| tu | parlas | finis | voulus |
| il | parla | finit | voulut |
| nous | parlâmes | finîmes | voulûmes |
| vous | parlâtes | finîtes | voulûtes |
| ils | parlèrent | finirent | voulurent |
## Le reconnaître
En pratique, 95 % des formes sont à la 3e personne : il + <b>-a, -it, -ut</b> ; ils + <b>-èrent, -irent, -urent</b>. Formes particulières à retenir :
- être → il <b>fut</b>, avoir → il <b>eut</b>, faire → il <b>fit</b> ;
- venir → il <b>vint</b>, ils <b>vinrent</b> ; tenir → il <b>tint</b> ;
- voir → il <b>vit</b>, vivre → il <b>vécut</b> ; naître → il <b>naquit</b> ; mourir → il <b>mourut</b>.
! Piège : « il vit », c'est à la fois voir au passé simple et vivre au présent. « Il finit » : présent et passé simple. C'est le temps du reste du texte qui tranche.
## En duo avec l'imparfait
En littérature, le passé simple joue le rôle du passé composé : l'imparfait pose le décor, le passé simple raconte les événements. <i>Il faisait nuit. Elle ouvrit la fenêtre et regarda dehors.</i>`,
    M1: `## Formation
On prend les formes tu, nous, vous du présent et on supprime le pronom.
| | parler | finir | aller | être | avoir | savoir |
| (tu) | parle | finis | va | sois | aie | sache |
| (nous) | parlons | finissons | allons | soyons | ayons | sachons |
| (vous) | parlez | finissez | allez | soyez | ayez | sachez |
Dans les verbes en -er, ainsi qu'aller, ouvrir, offrir, cueillir, la forme tu <b>perd son -s</b> : tu parles → Parle ! tu vas → Va ! Le -s ne revient que devant y et en : Vas-y ! Parles-en !
## Les verbes pronominaux
Le pronom se place après le verbe avec un trait d'union, te devient toi : Lève-toi ! Levons-nous ! Levez-vous ! À la forme négative, le pronom reprend sa place : Ne te lève pas !
## Les pronoms avec l'impératif
- Affirmatif : après le verbe, avec un trait d'union ; me → moi, te → toi. Regarde-<b>moi</b>. Écoute-<b>le</b>.
- Négatif : devant le verbe, comme dans une phrase ordinaire. Ne <b>me</b> regarde pas.
## L'impératif dans les lettres
L'impératif sonne sec. Dans une lettre officielle, on le remplace par :
- <b>Veuillez</b> + infinitif : Veuillez trouver ci-joint…
- <b>Merci de</b> + infinitif : Merci de me répondre avant vendredi.
- le conditionnel : Pourriez-vous… ?
Formule finale standard : <i>Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.</i>`,
    M2: `## Futur simple : formation
Infinitif + terminaisons identiques au présent d'avoir : <b>-ai, -as, -a, -ons, -ez, -ont</b>. Les verbes en -re perdent leur e final.
| | parler | finir | prendre |
| je | parlerai | finirai | prendrai |
| tu | parleras | finiras | prendras |
| il | parlera | finira | prendra |
| nous | parlerons | finirons | prendrons |
| vous | parlerez | finirez | prendrez |
| ils | parleront | finiront | prendront |
## Radicaux irréguliers
| Verbe | Radical | Verbe | Radical |
| être | ser- | venir | viendr- |
| avoir | aur- | tenir | tiendr- |
| aller | ir- | voir | verr- |
| faire | fer- | envoyer | enverr- |
| pouvoir | pourr- | savoir | saur- |
| vouloir | voudr- | falloir | faudr- |
| devoir | devr- | courir | courr- |
| recevoir | recevr- | mourir | mourr- |
## Orthographe
Les verbes dont le radical change au présent gardent ce changement dans tout le futur : j'appe<b>ll</b>erai, j'ach<b>è</b>terai, je je<b>tt</b>erai. À l'oral, le e de -erai est souvent avalé (je parl'rai), mais à l'écrit il est toujours là.
## Futur simple ou futur proche
- <b>Futur proche</b> (aller + infinitif) : un projet, une décision prise, quelque chose de proche. Registre familier. Je vais appeler Marie ce soir.
- <b>Futur simple</b> : prévision, promesse, condition, texte officiel. Je vous contacterai dès que possible.
## Futur antérieur
aurai / serai + participe : une action qui sera terminée avant une autre action future. Quand tu <b>auras fini</b>, tu m'appelleras. Après quand, dès que, lorsque au sens futur : toujours un temps du futur, jamais le présent.`,
    M3: `## Formation
Radical du futur + terminaisons de l'imparfait. Autrement dit, tu connais déjà tous les radicaux irréguliers grâce au thème M2.
| | parler | faire | être |
| je | parlerais | ferais | serais |
| tu | parlerais | ferais | serais |
| il | parlerait | ferait | serait |
| nous | parlerions | ferions | serions |
| vous | parleriez | feriez | seriez |
| ils | parleraient | feraient | seraient |
## Six situations
- <b>Politesse</b> : Je voudrais…, Pourriez-vous…, Auriez-vous… ?
- <b>Conseil</b> : Tu devrais…, Vous feriez mieux de…
- <b>Souhait</b> : J'aimerais…, Ce serait bien de…
- <b>Hypothèse avec si</b> : Si j'avais le temps, je <b>voyagerais</b> (thème S4).
- <b>Information non confirmée</b> dans la presse : Le ministre <b>serait</b> malade.
- <b>Futur dans le passé</b> : Il a dit qu'il <b>viendrait</b> (thème M5).
## Futur ou conditionnel à l'écrit
Je ferai et je ferais se prononcent pareil pour beaucoup de gens. Test : change de personne. Il <b>fera</b> (futur) / il <b>ferait</b> (conditionnel) ; nous <b>ferons</b> / nous <b>ferions</b>. Puis demande-toi : est-ce un futur certain, ou quelque chose d'imaginé, de poli, de conditionnel ?
## Conditionnel passé
aurais / serais + participe. Regret ou reproche sur le passé : J'<b>aurais dû</b> venir. Tu <b>aurais pu</b> me prévenir. Condition irréelle : Si j'avais su, je <b>serais venu</b>.`,
    M4: `## Ce que c'est
Le subjonctif n'est pas un temps, c'est un mode. Il présente l'action non comme un fait, mais à travers une attitude : volonté, nécessité, émotion, doute. Il se place presque toujours après <b>que</b>, dans une subordonnée dont le sujet est <b>différent</b> de celui de la principale.
## Formation
Radical de ils au présent + <b>-e, -es, -e, -ions, -iez, -ent</b>.
| | parler (ils parl-ent) | finir (ils finiss-ent) | venir (ils vienn-ent / nous ven-ons) |
| que je | parle | finisse | vienne |
| que tu | parles | finisses | viennes |
| qu'il | parle | finisse | vienne |
| que nous | parlions | finissions | venions |
| que vous | parliez | finissiez | veniez |
| qu'ils | parlent | finissent | viennent |
Pour les verbes en -er, les formes je, tu, il, ils sont celles du présent, et nous, vous celles de l'imparfait. Les verbes à deux radicaux (venir, prendre, boire, devoir) prennent nous / vous sur le nous du présent : que nous <b>prenions</b>, que vous <b>buviez</b>.
## Entièrement irréguliers
| être | avoir | aller | faire | pouvoir | savoir | vouloir |
| sois | aie | aille | fasse | puisse | sache | veuille |
| soit | ait | aille | fasse | puisse | sache | veuille |
| soyons | ayons | allions | fassions | puissions | sachions | voulions |
| soient | aient | aillent | fassent | puissent | sachent | veuillent |
## Déclencheurs
| Catégorie | Expressions |
| volonté, souhait | vouloir que, souhaiter que, préférer que, demander que, exiger que |
| nécessité | il faut que, il est nécessaire / important / essentiel que |
| émotions | être content / triste / surpris que, avoir peur que, regretter que |
| doute, possibilité | douter que, ne pas penser que, ne pas croire que, il est possible que |
| conjonctions | bien que, pour que, afin que, avant que, à moins que, sans que, jusqu'à ce que |
## Quand le subjonctif n'est PAS nécessaire
- Même sujet → infinitif : Je veux <b>partir</b> (et non que je parte).
- espérer que, penser que, croire que (à la forme affirmative), il est probable que, il est sûr que → indicatif.
- après que → indicatif (même si l'usage courant hésite souvent ici).`,
    M5: `## Le principe
Quand le verbe introducteur est au présent (Il dit que…), les temps du discours indirect ne changent pas. Quand il est au passé (Il a dit que…, Il disait que…), chaque temps recule d'un cran dans le passé.
| Discours direct | Discours indirect (après il a dit que…) |
| présent : « Je suis prêt. » | imparfait : qu'il était prêt |
| passé composé : « J'ai fini. » | plus-que-parfait : qu'il avait fini |
| futur : « Je viendrai. » | conditionnel : qu'il viendrait |
| futur antérieur : « J'aurai fini. » | conditionnel passé : qu'il aurait fini |
| imparfait, plus-que-parfait, conditionnel | ne changent pas |
| impératif : « Viens ! » | de + infinitif : Il m'a dit de venir |
## Pourquoi on se trompe
À l'oral, on oublie souvent la concordance : « Il m'a dit qu'il viendra demain ». À l'écrit, elle est attendue : Il m'a dit qu'il <b>viendrait</b> le lendemain. Après chaque « il a dit que », « elle m'a expliqué que », vérifie le temps.
## Personnes et indicateurs de temps
Les pronoms changent selon la logique : « Je t'aime » → Il a dit qu'il <b>m'</b>aimait.
| Direct | Indirect |
| aujourd'hui | ce jour-là |
| hier | la veille |
| demain | le lendemain |
| la semaine prochaine | la semaine suivante |
| il y a deux jours | deux jours plus tôt |
| maintenant | à ce moment-là |
## Les questions au discours indirect
- question fermée (oui / non) → <b>si</b> : « Tu viens ? » → Il m'a demandé si je venais.
- qu'est-ce que → <b>ce que</b> ; qu'est-ce qui → <b>ce qui</b>.
- où, quand, pourquoi, comment sont conservés.
- Pas d'inversion ni de point d'interrogation : Il m'a demandé où j'allais.`,
    N1: `## La logique générale
Presque chaque nom français a besoin d'un « accompagnateur » : un article, un possessif (mon), un démonstratif (ce) ou un nombre. Un nom tout seul est rare. Le choix de l'article dépend du sens : le même mot peut prendre le, un ou du.
| | masculin | féminin | devant une voyelle | pluriel |
| défini | le | la | l' | les |
| indéfini | un | une | un / une | des |
| partitif | du | de la | de l' | des |
## Choisir : trois questions
- S'agit-il d'une chose précise, connue, ou d'une notion en général ? → <b>le / la / les</b>. Le café est prêt. J'aime le café.
- S'agit-il d'une chose comptable, nouvelle pour le lecteur ? → <b>un / une / des</b>. J'ai acheté un livre.
- S'agit-il d'une partie d'un ensemble non comptable (nourriture, liquide, qualité) ? → <b>du / de la / de l'</b>. Je bois de l'eau. Il a du courage.
! Après aimer, adorer, préférer, détester : toujours le défini. J'aime <b>le</b> chocolat (et non du chocolat), car il s'agit du goût en général.
## Quand l'article devient de
- Après une négation : Je n'ai pas <b>de</b> voiture. Exception avec être : Ce n'est pas <b>un</b> problème.
- Après les mots de quantité : beaucoup de, peu de, trop de, assez de, un kilo de, une bouteille de.
- Devant un adjectif au pluriel (norme écrite) : <b>de</b> bons amis.
## Contractions avec à et de
à + le = <b>au</b>, à + les = <b>aux</b>, de + le = <b>du</b>, de + les = <b>des</b>. Pas de contraction avec la et l' : à la gare, de l'hôtel.
## Sans article
- profession après être : Il est médecin ;
- après en : en France, en voiture ;
- après avec / sans devant un nom abstrait : avec plaisir, sans problème ;
- dans les listes et les titres.`,
    N2: `## Le genre
Le genre d'un mot ne se devine pas toujours, et certains mots trompent : <i>le problème</i>, <i>le musée</i> malgré leur -e final, <i>la plage</i> malgré son -age. Pour les mots commençant par une voyelle, l'article ne montre pas le genre (l'hôtel) : vérifie avec un adjectif : <i>un grand hôtel</i>.
| Généralement féminin | Généralement masculin |
| -tion, -sion : la nation | -ment : le moment |
| -té : la liberté | -age : le fromage (mais la page, la plage, l'image) |
| -ure : la voiture | -isme : le tourisme |
| -ance, -ence : la chance (mais le silence) | -eau : le bureau (mais l'eau, la peau) |
| -ette, -ie, -ude | -oir, -ier, -et |
## Le pluriel
| Terminaison | Règle | Exceptions |
| la plupart | +s | — |
| -s, -x, -z | invariable : le prix → les prix | — |
| -eau, -au, -eu | +x : bateaux, jeux | pneus, bleus |
| -al | -aux : journaux | bals, festivals, carnavals |
| -ail | +s : détails | travail → travaux, vitrail → vitraux |
| -ou | +s : trous | 7 mots en -oux : bijou, caillou, chou, genou, hibou, joujou, pou |
Cas particuliers : un œil → des <b>yeux</b>, le ciel → les <b>cieux</b>, monsieur → <b>messieurs</b>, madame → <b>mesdames</b>.
## Vérifier à l'écrit
Le pluriel ne s'entend presque jamais. Vérifie toute la chaîne : déterminant → nom → adjectif → verbe. « Le<b>s</b> petite<b>s</b> maison<b>s</b> blanche<b>s</b> son<b>t</b> belle<b>s</b> » : six marques du pluriel, dont une seule s'entend (les).`,
    N3: `## L'accord
L'adjectif prend le genre et le nombre du nom. S'il y a plusieurs noms de genres différents : masculin pluriel. Un garçon et une fille content<b>s</b>.
## Le féminin
| Règle | Exemple |
| +e | grand → grande |
| déjà en -e : invariable | rouge → rouge |
| -er → -ère | cher → chère |
| -if → -ive | actif → active |
| -eux → -euse | heureux → heureuse |
| -el, -eil → -elle, -eille | naturel → naturelle |
| -en, -on → -enne, -onne | italien → italienne, bon → bonne |
| -et → -ette | muet → muette (mais complet → complète) |
Irréguliers : blanc → blanche, frais → fraîche, long → longue, doux → douce, faux → fausse, gentil → gentille, fou → folle, beau → belle, nouveau → nouvelle, vieux → vieille.
## La place
Par défaut, l'adjectif se place <b>après</b> le nom : une robe rouge, un film intéressant. Toujours après : couleurs, nationalités, formes, participes (une porte fermée).
Devant le nom se placent des adjectifs courts et fréquents (moyen mnémotechnique BAGS) :
- <b>B</b>eauté : beau, joli ;
- <b>Â</b>ge : jeune, vieux, nouveau ;
- <b>G</b>oodness, la bonté : bon, mauvais, gentil ;
- <b>S</b>ize, la taille : grand, petit, gros, long.
## Le sens dépend de la place
| Devant | Après |
| un ancien collègue : d'avant | un meuble ancien : d'époque |
| ma propre voiture : à moi | une voiture propre : nettoyée |
| mon cher ami : affection | un livre cher : prix élevé |
| un grand homme : illustre | un homme grand : de haute taille |
| la seule personne : unique | une personne seule : isolée |
## Les couleurs
Invariables si la couleur vient d'un nom (des yeux <b>marron</b>, des chaussures <b>orange</b>) ou si elle est composée (des robes <b>bleu clair</b>).`,
    N4: `## Le comparatif
- Avec un adjectif ou un adverbe : <b>plus / moins / aussi</b> + mot + <b>que</b>. Elle est plus grande que moi. Il parle aussi vite que toi.
- Avec un nom : <b>plus de / moins de / autant de</b> + nom + que. J'ai autant de travail que lui.
- Avec un verbe : verbe + <b>plus / moins / autant</b> + que. Il travaille plus que moi.
## Le superlatif
<b>le / la / les + plus / moins</b> + adjectif. Le complément est introduit par <b>de</b> : le plus grand <b>de</b> la classe, la plus belle ville <b>du</b> monde.
Si l'adjectif est placé après le nom, l'article se répète : la ville <b>la</b> plus chère. Avec un adverbe, toujours le : C'est elle qui court <b>le</b> plus vite.
## Formes irrégulières
| Forme simple | Comparatif | Superlatif |
| bon (adj.) | meilleur | le meilleur |
| bien (adv.) | mieux | le mieux |
| mauvais | plus mauvais / pire | le pire |
| beaucoup | plus | le plus |
| peu | moins | le moins |
## Le test : meilleur ou mieux
Remets la forme simple dans la phrase. Si <b>bon</b> convient → écris <b>meilleur</b> : Ce vin est bon → meilleur. Si <b>bien</b> convient → écris <b>mieux</b> : Elle chante bien → mieux. Tournure impersonnelle : c'est mieux.
## Les pronoms après que
Après que, on emploie la forme tonique : plus grand que <b>moi, toi, lui, elle, nous, vous, eux, elles</b>.`,
    N5: `## À quoi ça sert
L'écrit officiel et universitaire français privilégie les noms. Au lieu de « quand les prix ont augmenté, les gens ont commencé à économiser », on écrit <i>L'augmentation des prix a poussé les gens à économiser</i>. Le texte devient plus dense et sonne comme un écrit « adulte » : lettres à l'administration, rapports, dissertations.
## Verbe → nom
| Suffixe | Genre | Exemple |
| -tion, -ation | fém. | réaliser → la réalisation |
| -ment | masc. | changer → le changement |
| -age | masc. | laver → le lavage |
| -ure | fém. | ouvrir → l'ouverture |
| -ance, -ence | fém. | naître → la naissance |
| -ée | fém. | arriver → l'arrivée |
| sans suffixe | variable | choisir → le choix, attendre → l'attente, vendre → la vente |
## Adjectif → nom
| Suffixe | Exemple |
| -té, -ité | beau → la beauté, facile → la facilité |
| -esse | jeune → la jeunesse |
| -eur | long → la longueur |
| -ise | franc → la franchise |
## Restructurer la phrase
- Le sujet devient un complément avec de : Le gouvernement a décidé → la décision <b>du</b> gouvernement.
- L'adverbe devient un adjectif : Il est parti brusquement → son départ <b>brusque</b>.
- La subordonnée devient un groupe prépositionnel : à cause de, grâce à, en raison de, avant, après, lors de, malgré, en cas de.
! Évite les chaînes de trois ou quatre noms reliés par de : le texte devient lourd. Une ou deux nominalisations par phrase suffisent.`,
    P1: `## La règle principale
Ce n'est pas le sens qui décide, mais la construction du verbe : est-il suivi de à ? On dit « aider quelqu'un » (sans à), donc Je <b>l'</b>aide ; mais « téléphoner à quelqu'un », donc Je <b>lui</b> téléphone.
| Personne | COD (sans à) | COI (avec à) |
| je | me | me |
| tu | te | te |
| il | le | lui |
| elle | la | lui |
| nous | nous | nous |
| vous | vous | vous |
| ils / elles | les | leur |
La différence n'apparaît qu'à la 3e personne. C'est justement là qu'on se trompe.
## Verbes pièges
| Complément direct (le, la, les) | Complément indirect (lui, leur) |
| aider, appeler, écouter, attendre | téléphoner à, parler à, répondre à |
| chercher, regarder, remercier | demander à, dire à, donner à, écrire à |
| inviter, suivre, croire (qqn) | plaire à, sourire à, ressembler à, conseiller à |
## La place du pronom
Devant le verbe auquel il se rattache par le sens :
- Je <b>le</b> vois. Je ne <b>le</b> vois pas.
- Je <b>l'</b>ai vu (devant l'auxiliaire).
- Je vais <b>le</b> voir. Je ne veux pas <b>le</b> voir (devant l'infinitif).
- Impératif affirmatif : après : Regarde-<b>le</b>.
## Cas particuliers
- penser à, s'intéresser à, faire attention à + personne → pas lui, mais <b>à lui / à elle</b> : Je pense à elle.
- Le pronom neutre le remplace toute une idée : Je <b>le</b> sais. Je te <b>l'</b>ai dit.`,
    P2: `## en : tout ce qui est introduit par de
- Partitif ou article indéfini : du pain → j'<b>en</b> mange ; des amis → j'<b>en</b> ai.
- Avec une quantité (la quantité reste dans la phrase) : J'en ai <b>trois</b>. J'en veux <b>un kilo</b>. Il y en a <b>beaucoup</b>.
- Verbes et expressions avec de : parler de, avoir besoin de, se souvenir de, s'occuper de, avoir peur de, être content de : J'<b>en</b> ai besoin.
- Le lieu d'où l'on vient : Je viens de Lyon → J'<b>en</b> viens.
## y : le lieu et à + chose
- Lieu (à, en, dans, chez, sur…) : Je vais à Paris → J'<b>y</b> vais. Il est chez lui → Il <b>y</b> est.
- Verbes avec à + chose ou idée : penser à, réfléchir à, s'intéresser à, répondre à (une lettre), participer à, croire à : J'<b>y</b> pense.
## Et pour les personnes
| Construction | Chose | Personne |
| de + … | J'en parle. | Je parle <b>de lui</b>. |
| penser à, s'intéresser à | J'y pense. | Je pense <b>à elle</b>. |
| parler à, répondre à (COI) | J'y réponds (à la lettre). | Je <b>lui</b> réponds. |
## Place dans la phrase
Comme les autres pronoms : devant le verbe, devant l'auxiliaire, devant l'infinitif. S'il y a les deux : y avant en : Il <b>y en</b> a. Le participe passé ne s'accorde pas avec en (thème O4).
## Expressions figées
Ça y est ! : c'est fait. Vas-y ! / Allons-y ! : encouragement, départ. Je n'en peux plus : je suis épuisé. Je m'en vais : je pars. On y va : on part.`,
    P3: `## La méthode : couper en deux phrases
Cherche le rôle que joue l'antécédent dans la <b>deuxième</b> phrase :
| Deuxième phrase | Rôle | Relatif |
| Le livre est sur la table. | sujet | <b>qui</b> : le livre qui est sur la table |
| Je lis le livre. | complément direct | <b>que</b> : le livre que je lis |
| Je parle du livre. | de + … | <b>dont</b> : le livre dont je parle |
| J'habite dans la ville. | lieu | <b>où</b> : la ville où j'habite |
| Je travaille avec le collègue. | préposition + … | <b>avec qui / avec lequel</b> (thème P5) |
## dont en détail
- Après les verbes construits avec de : parler de, avoir besoin de, se souvenir de, avoir peur de, rêver de.
- Après les adjectifs construits avec de : fier de, content de, responsable de.
- Possession : l'homme <b>dont</b> la fille est médecin (= la fille de l'homme).
- Après dont, l'ordre est normal : dont + sujet + verbe + complément : la femme dont je connais <b>le mari</b>.
## ce qui, ce que, ce dont
Quand il n'y a pas d'antécédent (« la chose qui ») :
- <b>Ce qui</b> m'intéresse, c'est l'histoire. (sujet)
- Je sais <b>ce que</b> tu veux. (complément direct)
- <b>Ce dont</b> j'ai besoin, c'est du temps. (de)
## Les détails qui se voient à l'écrit
- que → qu' devant une voyelle, mais qui jamais : l'homme qui arrive.
- Pour le temps : où, et non quand : le jour où, l'année où, au moment où.
- Après que complément direct, le participe s'accorde : la lettre que j'ai écrit<b>e</b> (thème O4).`,
    P4: `## Le tableau des colonnes
Les pronoms se placent devant le verbe dans un ordre fixe. On en prend au plus un par colonne, de gauche à droite.
| 1 | 2 | 3 | 4 | 5 |
| me, te, se, nous, vous | le, la, les | lui, leur | y | en |
Les colonnes 1 et 3 ne se combinent pas.
## Exemples
- Il <b>me le</b> donne.
- Je <b>le lui</b> donne. Je <b>les leur</b> envoie.
- Il <b>m'en</b> parle. Je <b>vous y</b> emmène.
- Il <b>y en</b> a.
## Au passé composé et à la forme négative
Tous les pronoms se placent devant l'auxiliaire : Je <b>le lui</b> ai donné. La négation encadre les pronoms avec l'auxiliaire : Je <b>ne</b> le lui ai <b>pas</b> donné.
## Impératif affirmatif : un autre ordre
Verbe – direct – indirect – y – en, le tout relié par des traits d'union :
- Donne-<b>le-moi</b>. Donne-<b>le-lui</b>.
- moi / toi + en → <b>m'en, t'en</b> : Donne-m'en.
L'impératif négatif reprend l'ordre habituel : <b>Ne me le</b> donne pas.
! Lien avec le thème O4 : dans « Je les lui ai montrées », les est placé devant le verbe, donc le participe s'accorde.`,
    P5: `## Quand l'employer
Après une préposition (avec, pour, sur, dans, sans, par, chez, vers…) dans une relative.
- Pour les choses : <b>lequel</b> et ses formes.
- Pour les personnes : plutôt <b>qui</b> : la personne avec qui je travaille.
- Après parmi et entre : seulement lesquels / lesquelles : les amis <b>parmi lesquels</b>…
| | simple | à + | de + |
| masc. singulier | lequel | auquel | duquel |
| fém. singulier | laquelle | à laquelle | de laquelle |
| masc. pluriel | lesquels | auxquels | desquels |
| fém. pluriel | lesquelles | auxquelles | desquelles |
## auquel : les verbes avec à
penser à, participer à, s'intéresser à, répondre à, assister à : la réunion <b>à laquelle</b> j'ai assisté, les questions <b>auxquelles</b> j'ai répondu.
## duquel ou dont
- <b>dont</b> : pour un simple de placé juste après le mot : le livre dont je parle.
- <b>duquel</b> : après une préposition composée : près de, à côté de, au milieu de, autour de, en face de, à cause de : le restaurant <b>en face duquel</b> j'habite.
- Aussi après une préposition suivie d'un nom : la société <b>pour le compte de laquelle</b> je travaille.
## quoi
Après une préposition, quand l'antécédent est neutre (ce, rien, quelque chose) : C'est ce <b>à quoi</b> je pense. Il n'y a rien <b>sur quoi</b> compter.`,
    O1: `## Pourquoi c'est difficile
En français, une grande partie de la grammaire est « muette » : des mots différents se prononcent pareil, et seule leur fonction dans la phrase permet de les distinguer. La méthode est simple : remplace le mot par un autre qui se prononce différemment. Si le remplacement fonctionne, c'est la bonne forme.
| Paire | Nature | Test | Exemple |
| a / à | avoir / préposition | → avait | Il <b>a</b> mal <b>à</b> la tête. |
| et / est | coordination / être | → était | Il <b>est</b> grand <b>et</b> fort. |
| son / sont | possessif / être | → étaient ; son → mon | Ses parents <b>sont</b> là avec <b>son</b> frère. |
| on / ont | pronom / avoir | → avaient ; on → il | <b>On</b> sait qu'ils <b>ont</b> raison. |
| ou / où | choix / lieu, temps | → ou bien | <b>Où</b> vas-tu, ici <b>ou</b> là ? |
## Nuances
- À en début de phrase s'écrit en majuscule avec l'accent : À bientôt.
- où est le seul mot français avec ù.
- on signifie souvent « nous » à l'oral : On est arrivés. À l'écrit soutenu, préfère nous.
## S'entraîner
Reprends un de tes textes et fais une relecture consacrée uniquement à ces dix mots. Souligne chacun et fais le test mentalement. En deux ou trois semaines, les tests deviennent automatiques.`,
    O2: `## Le groupe ce / se / c'est
| Mot | Nature | Test |
| ces | démonstratif pluriel (de ce, cet, cette) | mets au singulier : ce livre |
| ses | possessif pluriel (à lui, à elle) | remplace par mes ou son |
| c'est | cela est | remplace par c'était |
| s'est | se + être (verbe pronominal au PC) | remplace par je me suis |
| sait, sais | savoir | remplace par savait |
| ce / se | ce + nom ou ce que ; se + verbe | se → me : il se lave → je me lave |
## Autres paires
| Mot | Nature | Test |
| la / là / l'a | article ou pronom / lieu / le, la + avoir | la → le ; là → ici ; l'a → l'avait |
| peu / peut / peux | petite quantité / pouvoir | peu → beaucoup ; peut → pouvait |
| quel(le)(s) / qu'elle(s) | interrogatif + nom / que + elle | qu'elle → qu'il |
| sans / s'en / sent | préposition / se + en / sentir | s'en → m'en ; sent → sentait |
| mais / mes / met | opposition / possessif / mettre | mes → tes ; met → mettait |
## quel s'accorde
quel livre, quel<b>le</b> heure, quel<b>s</b> livres, quel<b>les</b> idées. Piège : « Quelle est ta question ? » : quelle s'accorde avec question, même séparé par le verbe.
! Dresse ta propre liste des homophones sur lesquels tu te trompes le plus, et relis chaque texte en une passe consacrée uniquement à eux.`,
    O3: `## Pourquoi c'est difficile
parler, parlé, parlez, parlais, parlait se prononcent pareil ou presque. La prononciation n'aide pas : il faut la grammaire.
## Le test principal
Remplace par un verbe du 3e groupe dont les formes se prononcent différemment : <b>vendre / vendu / vendez / vendait</b> (ou prendre / pris).
- Je veux (manger ?) → je veux <b>vendre</b> ✓ → infinitif : manger.
- J'ai (mangé ?) → j'ai <b>vendu</b> ✓ → participe : mangé.
| Forme | Quand | Test |
| -er | infinitif après un autre verbe (aller, vouloir, pouvoir, devoir, aimer…) ou une préposition (à, de, pour, sans, avant de) | vendre |
| -é, -ée, -és, -ées | participe après avoir / être, ou employé comme adjectif | vendu |
| -ez | vous | vous vendez |
| -ais, -ait, -aient | imparfait | vendait |
## Le participe employé comme adjectif
Sans auxiliaire, le participe se comporte comme un adjectif et s'accorde : les portes <b>fermées</b>, une lettre <b>envoyée</b>, le travail <b>terminé</b>.
## Piège : un pronom entre les verbes
Je vais <b>te</b> (téléphoner), Je <b>l'</b>ai (vu), Il faut <b>les</b> (acheter). Le pronom ne change pas la règle : le test fonctionne de la même façon. Je vais te vendre ✓ → téléphoner.`,
    O4: `## Les trois règles du participe passé
- Avec <b>être</b> → accord avec le sujet (thème V2).
- Avec <b>avoir</b> → accord avec le complément d'objet direct (COD), seulement s'il est placé <b>avant</b> le verbe.
- Sans auxiliaire → comme un adjectif (thème O3).
## La méthode avec avoir
- Repère le participe employé avec avoir.
- Pose la question « quoi ? qui ? » après le verbe : J'ai mangé — quoi ?
- Pas de réponse, ou réponse placée après le verbe → pas d'accord.
- Réponse placée avant le verbe → accord en genre et en nombre avec elle.
## Quand le COD est placé avant le verbe
| Cas | Exemple |
| pronoms me, te, le, la, les, nous, vous | Il nous a invité<b>s</b>. Je l'ai vu<b>e</b>. |
| relatif que | Les lettres que j'ai reçu<b>es</b>. |
| interrogatif quel, combien de | Quelle robe as-tu choisi<b>e</b> ? Combien de livres as-tu lu<b>s</b> ? |
## Quand il n'y a pas d'accord
- avec en : Des pommes ? J'en ai mangé.
- avec un complément indirect : Je leur ai parlé (leur est COI).
- avec les verbes impersonnels : Les chaleurs qu'il a fait.
- fait + infinitif : Je les ai fait venir.
## Vérifie à l'oreille
Pour certains verbes, l'accord s'entend : écrit / écri<b>te</b>, fait / fai<b>te</b>, pris / pri<b>se</b>, mis / mi<b>se</b>, ouvert / ouver<b>te</b>. « La lettre que j'ai écrite » se prononce [ekʁit]. Si tu entends la consonne avec ces verbes, ajoute le e à l'écrit pour les autres.`,
    O5: `## Les verbes pronominaux au passé composé
Ils se conjuguent toujours avec être, mais s'accordent selon la règle d'avoir. Méthode : remplace mentalement être par avoir et cherche le COD.
| Phrase | Remplacement | COD | Accord |
| Elle s'est lavée. | elle a lavé qui ? | se (= elle), avant | oui |
| Elle s'est lavé les mains. | a lavé quoi ? | les mains, après | non |
| Ils se sont parlé. | parler <b>à</b> qqn | se est COI | non |
Verbes où se est COI (pas d'accord) : se parler, se téléphoner, se dire, se demander, s'écrire, se sourire, se plaire, se ressembler, se mentir, se succéder.
Les verbes essentiellement pronominaux (s'en aller, se souvenir, se moquer, s'évanouir) s'accordent toujours avec le sujet : Elle s'est souvenu<b>e</b>.
## leur
- Devant un verbe : pronom (= à eux), <b>jamais de -s</b> : Je leur parle.
- Devant un nom : possessif : <b>leur</b> + singulier (leur maison, une pour tous), <b>leurs</b> + pluriel (leurs enfants).
## tout
| Forme | Exemple |
| tout (masc. sing.) | tout le temps |
| toute (fém. sing.) | toute la journée |
| tous (masc. plur.) | tous les jours ; pronom : Ils sont tous là [tus] |
| toutes (fém. plur.) | toutes les semaines |
Employé comme adverbe (« tout à fait »), tout est invariable : Ils sont tout contents. Mais devant un adjectif féminin commençant par une consonne, il varie : Elle est tou<b>te</b> petite. Elles sont tou<b>tes</b> petites.`,
    S1: `## L'ordre des mots
Sujet – (ne) – pronoms – verbe – (pas) – compléments. Les adjectifs se placent en général après le nom, les adverbes après le verbe.
## La négation
| Construction | Sens |
| ne… pas | négation simple |
| ne… jamais | à aucun moment |
| ne… plus | ce n'est plus le cas |
| ne… rien | aucune chose |
| ne… personne | aucune personne |
| ne… aucun(e) | pas un seul |
| ne… ni… ni… | ni l'un ni l'autre |
| ne… pas encore | pas jusqu'à maintenant |
| ne… que | seulement (ce n'est pas une négation) |
Le second élément remplace pas, il ne s'y ajoute pas : Je ne vois <b>personne</b> (et non *pas personne).
## Les détails qui se voient à l'écrit
- personne et rien peuvent être sujets : <b>Personne n'</b>est venu. <b>Rien ne</b> marche.
- Au passé composé, ne… pas encadre l'auxiliaire : Je n'ai pas vu. Mais personne se place après le participe : Je n'ai vu personne.
- Devant un infinitif, ne pas restent ensemble : Je préfère <b>ne pas</b> répondre.
## Trois types de questions
| Type | Exemple | Registre |
| intonation | Tu viens ? | oral |
| est-ce que | Est-ce que tu viens ? | neutre |
| inversion | Viens-tu ? | écrit, soutenu |
Inversion avec un nom : le sujet reste, on ajoute un pronom : Marie vient-<b>elle</b> ? Pierre a-<b>t-il</b> fini ? Entre deux voyelles, on insère -t- : a-t-il, parle-t-elle, va-t-on.`,
    S2: `## Les espaces
En France, on met une espace insécable avant les signes doubles. Elle garde le signe collé au mot pour qu'il ne passe pas seul à la ligne.
| Signe | Espace avant | Espace après |
| . , | non | oui |
| ; ! ? | oui | oui |
| : | oui | oui |
| « | — | oui |
| » | oui | — |
Espace insécable sur Mac : Option + espace. Au Canada et en Suisse, on met souvent une espace fine, voire aucune espace, avant ; ! ?
## Guillemets et dialogue
Les guillemets principaux sont les « chevrons », avec des espaces à l'intérieur. Les guillemets de second niveau : “ ”. Dans un dialogue, chaque réplique commence par un tiret : <i>— Tu viens ? — Oui, j'arrive.</i>
## La virgule : moins qu'on ne croit
On est souvent tenté de mettre une virgule devant chaque subordonnée. En français, ce n'est pas la règle :
- Pas de virgule devant que, si, quand, parce que quand la subordonnée suit la principale : Je sais que tu as raison. Il est resté parce qu'il pleuvait.
- Une virgule si la subordonnée est en tête de phrase : Quand il est arrivé, nous mangions.
- qui / que sans virgule s'ils précisent de qui on parle : Le frère qui habite à Lyon (un parmi plusieurs). Entre virgules s'ils ajoutent seulement une explication : Mon frère, qui habite à Lyon, est médecin (un seul frère).
## La virgule obligatoire
- après les mots d'introduction : Cependant, Ensuite, Par ailleurs, En effet ;
- devant mais, car ;
- dans une énumération, mais pas devant le et du dernier élément : du pain, du fromage et du vin.
## Les majuscules
Langues, jours, mois : en minuscule : le français, lundi, janvier. La nationalité employée comme nom prend une majuscule (les Français), comme adjectif une minuscule (un livre français).`,
    S3: `## Les connecteurs par fonction
| Fonction | Mots | Mode qui suit |
| cause | parce que (réponse à pourquoi), car (écrit), puisque (cause connue), comme (en tête de phrase) | indicatif |
| cause + nom | grâce à (+), à cause de (−), en raison de (officiel) | nom |
| conséquence | donc, c'est pourquoi, par conséquent, si bien que | indicatif |
| opposition | mais, cependant, pourtant, toutefois, néanmoins | indicatif |
| contraste | alors que, tandis que | indicatif |
| concession | bien que, quoique | subjonctif |
| concession + nom | malgré | nom |
| but, même sujet | pour, afin de | infinitif |
| but, sujet différent | pour que, afin que | subjonctif |
| temps | quand, lorsque, pendant que, dès que, après que | indicatif |
| temps | avant que, jusqu'à ce que | subjonctif |
## La charpente du texte
- Ordre : Tout d'abord… Ensuite… De plus / En outre… Enfin…
- Argumentation : D'une part… d'autre part… Certes…, mais…
- Conclusion : En conclusion, Bref, En somme.
## Fautes fréquentes
- car en début de phrase : <s>Car il pleuvait, …</s> → Comme il pleuvait, …
- pour que avec le même sujet : <s>Je travaille pour que je réussisse</s> → Je travaille <b>pour réussir</b>.
- malgré que est familier ; à l'écrit, préfère <b>bien que</b>.
- même si + conditionnel : <s>même si j'aurais</s> → même si j'<b>avais</b>.`,
    S4: `## Trois types
| Type | Après si | Dans la principale | Sens |
| 1 | présent | présent, futur, impératif | condition réelle |
| 2 | imparfait | conditionnel présent | imaginaire, maintenant ou dans l'avenir |
| 3 | plus-que-parfait | conditionnel passé | irréel du passé |
- Si tu viens, je <b>serai</b> content.
- Si tu venais, je <b>serais</b> content.
- Si tu étais venu, j'<b>aurais été</b> content.
## Conditions mixtes
Les deux parties peuvent appartenir à des époques différentes :
- Si j'<b>avais étudié</b> (à l'époque), je <b>parlerais</b> bien maintenant.
- Si j'<b>étais</b> plus organisé (en général), je n'<b>aurais</b> pas <b>oublié</b> (cette fois-là).
## L'interdit et l'exception
Juste après le si de condition, jamais de futur ni de conditionnel. Exception : si au sens de « est-ce que », dans une question indirecte, n'est pas une condition : Je ne sais pas s'il <b>viendra</b> ✓.
## L'élision
si + il → <b>s'il</b>, si + ils → <b>s'ils</b>. Mais si elle, si on, sans élision.
## Alternatives à si
- au cas où + conditionnel : Au cas où il pleuvrait, …
- à condition que + subjonctif ;
- sans + nom : Sans ton aide, je n'aurais pas réussi ;
- même si + indicatif : Même si c'est difficile, …`,
    S5: `## Le gérondif
en + radical de nous au présent + -ant : nous faisons → <b>en faisant</b> ; nous finissons → <b>en finissant</b>. Exceptions : en étant, en ayant, en sachant.
- simultanéité : Il travaille en écoutant de la musique ;
- manière : C'est en forgeant qu'on devient forgeron ;
- condition : En travaillant plus, tu réussiras ;
- tout en : opposition : Tout en étant riche, il vit simplement.
! Le sujet du gérondif doit être celui de la phrase. « En sortant du bus, la pluie a commencé » est fautif : c'est la pluie qui sortirait du bus. Correct : En sortant du bus, j'ai vu qu'il pleuvait.
## Le participe présent sans en
Remplace à l'écrit qui + verbe, et reste invariable : les étudiants <b>ayant</b> réussi = qui ont réussi. Ne le confonds pas avec l'adjectif verbal en -ant, qui s'accorde : des enfants obéissant<b>s</b>. Parfois, les deux s'écrivent différemment :
| Participe présent | Adjectif |
| fatiguant | fatigant |
| convainquant | convaincant |
| différant | différent |
| négligeant | négligent |
## La mise en relief : c'est… qui / que
- c'est… <b>qui</b> : met en relief le sujet : C'est Marie qui a gagné.
- c'est… <b>que</b> : tout le reste : C'est hier que je l'ai vue. C'est à toi que je parle.
- Après qui, le verbe s'accorde avec le mot mis en relief : C'est moi qui <b>suis</b>, c'est vous qui <b>avez</b>.
- Ce qui…, c'est… / Ce que…, c'est… : Ce que j'aime, c'est voyager.
## Autres procédés du style écrit
- Le passif : Le pont a été construit en 1890.
- L'inversion après peut-être, ainsi, sans doute en tête de phrase : Peut-être viendra-t-il.
- La dislocation (Ce film, je l'ai adoré) : familière, à manier avec prudence à l'écrit.`
  },
  WHY: {
    "V2<V1": "les auxiliaires avoir et être du passé composé sont au présent : j'ai, il est.",
    "V3<V2": "l'imparfait s'apprend avec le passé composé : pour choisir entre les deux, il faut connaître les deux.",
    "V4<V3": "plus-que-parfait = avoir / être à l'imparfait + participe : j'avais fini.",
    "V5<V4": "on reconnaît le passé simple dans les textes où il côtoie l'imparfait et le plus-que-parfait.",
    "M1<V1": "l'impératif, ce sont les formes tu, nous, vous du présent sans le pronom.",
    "M2<V1": "les terminaisons du futur (-ai, -as, -a, -ons, -ez, -ont) sont le présent du verbe avoir.",
    "M3<M2": "le conditionnel se construit sur le radical du futur : fer-, ser-, pourr- …",
    "M3<V3": "les terminaisons du conditionnel sont celles de l'imparfait : -ais, -ait, -aient.",
    "M4<M3": "le subjonctif apparaît souvent à côté du conditionnel : Je voudrais que tu viennes.",
    "M4<V1": "le radical du subjonctif vient de la forme ils du présent : ils finissent → que je finisse.",
    "M5<M4": "au discours indirect, demandes et souhaits passent à que + subjonctif ou de + infinitif.",
    "M5<V4": "au discours indirect, le passé composé devient plus-que-parfait.",
    "N2<N1": "le genre se voit à l'article (le / la), le pluriel à les / des.",
    "N3<N2": "l'adjectif prend le genre et le nombre du nom : il faut savoir les identifier.",
    "N4<N3": "on compare des adjectifs : il faut connaître leurs formes et leur place dans la phrase.",
    "N5<N4": "la nominalisation forme souvent un nom à partir d'un adjectif : rapide → la rapidité.",
    "N5<S3": "la nominalisation fonctionne avec les connecteurs + nom : en raison de, à cause de.",
    "P1<V1": "le pronom se place avant le verbe, qu'il faut d'abord savoir conjuguer.",
    "P2<P1": "y et en occupent la même place que le / lui, et on les confond facilement.",
    "P2<N1": "en remplace du, de la, des : les articles partitifs et indéfinis.",
    "P3<P2": "dont est un « cousin » de en : les deux remplacent de + …",
    "P3<S1": "les relatifs relient des phrases simples : il faut savoir les construire avec assurance.",
    "P4<P2": "y et en font partie des doubles pronoms.",
    "P4<M1": "à l'impératif affirmatif, l'ordre des pronoms change : Donne-le-moi.",
    "P5<P3": "lequel, auquel, duquel prolongent qui, que, dont après une préposition.",
    "O1<V1": "a, est, sont, ont sont des formes d'avoir et d'être au présent.",
    "O2<O1": "la même méthode des tests de substitution, avec de nouvelles paires de mots.",
    "O2<P1": "on confond ce / se et la / l'a avec les pronoms le, la, se.",
    "O3<V2": "la terminaison -é est le participe passé du passé composé.",
    "O4<O3": "il faut d'abord savoir écrire -é, puis y ajouter -e / -s.",
    "O4<P1": "l'accord dépend des pronoms le, la, les placés avant le verbe.",
    "O5<O4": "la règle des verbes pronominaux prolonge celle d'avoir.",
    "O5<P4": "on confond leur pronom et leur possessif justement dans les phrases à plusieurs pronoms.",
    "S1<V1": "la négation ne … pas encadre le verbe conjugué.",
    "S2<S1": "la ponctuation dépend du type de phrase : question, négation, exclamation.",
    "S3<S2": "la plupart des connecteurs demandent une virgule : Cependant, …",
    "S4<S3": "si est aussi un connecteur, mais avec ses propres règles de temps.",
    "S4<M3": "la principale d'une phrase conditionnelle est au conditionnel.",
    "S4<V4": "le troisième type de phrase conditionnelle exige le plus-que-parfait après si.",
    "S5<S4": "les procédés de style s'appuient sur des phrases complexes maîtrisées.",
    "S5<N5": "les deux thèmes sont des outils du style écrit, et ils fonctionnent ensemble."
  }
};
