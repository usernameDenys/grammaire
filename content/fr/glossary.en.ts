// Glossary of grammar terms for the French map, explained in English (content, not UI).
// Rendered as HTML inside the "Glossary" block.
export const glossaryHtml = `<div class="gl-body">
      <div class="gl-col">
        <h3>Persons (les personnes)</h3>
        <div class="tw"><table>
          <tr><th>English</th><th>Français</th><th>Pronoun</th><th>Meaning</th></tr>
          <tr><td>1st person singular</td><td>1<sup>re</sup> personne du singulier</td><td><i>je</i></td><td>I</td></tr>
          <tr><td>2nd person singular</td><td>2<sup>e</sup> personne du singulier</td><td><i>tu</i></td><td>you (one person, informal)</td></tr>
          <tr><td>3rd person singular</td><td>3<sup>e</sup> personne du singulier</td><td><i>il, elle, on</i></td><td>he, she, “people / we”</td></tr>
          <tr><td>1st person plural</td><td>1<sup>re</sup> personne du pluriel</td><td><i>nous</i></td><td>we</td></tr>
          <tr><td>2nd person plural</td><td>2<sup>e</sup> personne du pluriel</td><td><i>vous</i></td><td>you (several people, or polite)</td></tr>
          <tr><td>3rd person plural</td><td>3<sup>e</sup> personne du pluriel</td><td><i>ils, elles</i></td><td>they</td></tr>
        </table></div>
        <p><b>ils</b> is for a male or mixed group, <b>elles</b> only for an all-female one. <b>on</b> is grammatically 3rd person singular (on parle), although in speech it means “we”. Polite <b>vous</b> to one person: the verb is plural, the adjective follows the meaning: Vous êtes prêt<b>e</b>, Madame ?</p>
        <h3>Gender and number</h3>
        <div class="tw"><table>
          <tr><th>English</th><th>Français</th><th>Abbreviation</th></tr>
          <tr><td>masculine</td><td>le masculin</td><td>m., masc.</td></tr>
          <tr><td>feminine</td><td>le féminin</td><td>f., fém.</td></tr>
          <tr><td>singular</td><td>le singulier</td><td>sg.</td></tr>
          <tr><td>plural</td><td>le pluriel</td><td>pl.</td></tr>
        </table></div>
        <p>French has no neuter: every noun is either masculine or feminine, including things — <i>la table, le livre</i>.</p>
      </div>
      <div class="gl-col">
        <h3>Parts of speech (les classes de mots)</h3>
        <div class="tw"><table>
          <tr><th>English</th><th>Français</th><th>Examples</th></tr>
          <tr><td>noun</td><td>le nom</td><td><i>maison, Paris, liberté</i></td></tr>
          <tr><td>adjective</td><td>l'adjectif</td><td><i>grand, rouge, heureux</i></td></tr>
          <tr><td>verb</td><td>le verbe</td><td><i>parler, être, finir</i></td></tr>
          <tr><td>adverb</td><td>l'adverbe</td><td><i>vite, bien, très, souvent</i></td></tr>
          <tr><td>pronoun</td><td>le pronom</td><td><i>je, le, lui, qui, en, y</i></td></tr>
          <tr><td>determiner</td><td>le déterminant</td><td><i>le, un, du, mon, ce, quel</i></td></tr>
          <tr><td>preposition</td><td>la préposition</td><td><i>à, de, pour, avec, sur</i></td></tr>
          <tr><td>conjunction</td><td>la conjonction</td><td><i>et, mais, que, quand, si</i></td></tr>
          <tr><td>interjection</td><td>l'interjection</td><td><i>oh, hélas, aïe</i></td></tr>
        </table></div>
        <p><b>Determiner</b> — the word that introduces a noun: articles (le, un, du), possessives (mon, ses), demonstratives (ce, ces), question words (quel). A pronoun replaces the noun: <i>mon livre</i> → <i>le mien</i>.</p>
        <p>Kinds of article: definite — <i>l'article défini</i> (le), indefinite — <i>indéfini</i> (un), partitive — <i>partitif</i> (du). English has no partitive: du pain is “bread” or “some bread”.</p>
      </div>
      <div class="gl-col">
        <h3>Sentence roles (les fonctions)</h3>
        <div class="tw"><table>
          <tr><th>English</th><th>Français</th><th>Example (in bold)</th></tr>
          <tr><td>subject</td><td>le sujet</td><td><i><b>Marie</b> lit.</i></td></tr>
          <tr><td>direct object</td><td>le COD — complément d'objet direct</td><td><i>Je lis <b>un livre</b>.</i> (no preposition)</td></tr>
          <tr><td>indirect object</td><td>le COI — complément d'objet indirect</td><td><i>Je parle <b>à Marie</b>.</i> (with à or de)</td></tr>
          <tr><td>adverbial</td><td>le complément circonstanciel</td><td><i><b>Hier</b>, je suis allé <b>à Lyon</b>.</i></td></tr>
          <tr><td>attributive adjective</td><td>l'épithète</td><td><i>une robe <b>rouge</b></i></td></tr>
          <tr><td>subject complement</td><td>l'attribut du sujet</td><td><i>Elle est <b>contente</b>.</i></td></tr>
          <tr><td>antecedent</td><td>l'antécédent</td><td><i>le <b>livre</b> que je lis</i> — the word qui / que / dont refers to</td></tr>
          <tr><td>main clause</td><td>la proposition principale</td><td><i><b>Je pense</b> qu'il viendra.</i></td></tr>
          <tr><td>subordinate clause</td><td>la proposition subordonnée</td><td><i>Je pense <b>qu'il viendra</b>.</i></td></tr>
        </table></div>
        <p>How to find the COD: after the verb, ask “what? whom?” without a preposition. The COI answers “to whom? of what?” and has à or de. The French verb decides, not the English one: <i>téléphoner à</i> takes a COI although “call someone” is direct in English.</p>
      </div>
      <div class="gl-col">
        <h3>The verb (le verbe)</h3>
        <div class="tw"><table>
          <tr><th>English</th><th>Français</th><th>Example</th></tr>
          <tr><td>infinitive</td><td>l'infinitif</td><td><i>parler, finir, prendre</i></td></tr>
          <tr><td>stem / ending</td><td>le radical / la terminaison</td><td><i>parl- / -ons</i></td></tr>
          <tr><td>conjugation</td><td>la conjugaison</td><td><i>je parle, tu parles…</i></td></tr>
          <tr><td>verb group</td><td>le groupe (1<sup>er</sup>, 2<sup>e</sup>, 3<sup>e</sup>)</td><td><i>parler / finir / prendre</i></td></tr>
          <tr><td>auxiliary</td><td>l'auxiliaire</td><td><i>avoir, être</i></td></tr>
          <tr><td>past participle</td><td>le participe passé</td><td><i>parlé, fini, pris</i></td></tr>
          <tr><td>present participle</td><td>le participe présent</td><td><i>parlant</i></td></tr>
          <tr><td>gerund (en + -ant)</td><td>le gérondif</td><td><i>en parlant</i></td></tr>
          <tr><td>reflexive verb</td><td>le verbe pronominal</td><td><i>se lever, s'appeler</i></td></tr>
          <tr><td>impersonal verb</td><td>le verbe impersonnel</td><td><i>il faut, il pleut</i></td></tr>
          <tr><td>tense</td><td>le temps</td><td><i>présent, imparfait, futur…</i></td></tr>
          <tr><td>mood</td><td>le mode</td><td><i>indicatif, subjonctif, conditionnel, impératif</i></td></tr>
          <tr><td>agreement</td><td>l'accord</td><td><i>elle est partie</i></td></tr>
        </table></div>
        <p>Common abbreviations: <b>qqn</b> = quelqu'un (someone), <b>qqch</b> = quelque chose (something), <b>PC</b> = passé composé, <b>PP</b> = participe passé. <b>Homophones</b> (les homophones) — words that sound the same but are spelled differently: a / à.</p>
      </div>
    </div>`;
