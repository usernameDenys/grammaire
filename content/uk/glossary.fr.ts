// Glossary of grammar terms for the Ukrainian map, explained in French (content, not UI).
// Rendered as HTML inside the "Glossary" block.
export const glossaryHtml = `<div class="gl-body">
      <div class="gl-col">
        <h3>Les cas (відмінки)</h3>
        <div class="tw"><table>
          <tr><th>Français</th><th>Українською</th><th>Questions</th><th>Emploi principal</th></tr>
          <tr><td>nominatif</td><td>називний</td><td>хто? що?</td><td>sujet, forme du dictionnaire</td></tr>
          <tr><td>génitif</td><td>родовий</td><td>кого? чого?</td><td>« de », absence, quantité, beaucoup de prépositions</td></tr>
          <tr><td>datif</td><td>давальний</td><td>кому? чому?</td><td>« à » quelqu'un (COI), états, âge</td></tr>
          <tr><td>accusatif</td><td>знахідний</td><td>кого? що?</td><td>COD, direction (куди ?)</td></tr>
          <tr><td>instrumental</td><td>орудний</td><td>ким? чим?</td><td>« avec », moyen, rôle</td></tr>
          <tr><td>locatif</td><td>місцевий</td><td>на кому? на чому?</td><td>lieu (де ?), toujours avec une préposition</td></tr>
          <tr><td>vocatif</td><td>кличний</td><td>—</td><td>interpeller quelqu'un</td></tr>
        </table></div>
        <p>Les questions de la troisième colonne sont celles des écoliers ukrainiens : on pose la question, et la forme suit.</p>
      </div>
      <div class="gl-col">
        <h3>Genre et nombre (рід і число)</h3>
        <div class="tw"><table>
          <tr><th>Français</th><th>Українською</th><th>Exemple</th></tr>
          <tr><td>masculin</td><td>чоловічий рід</td><td><i>стіл, брат</i></td></tr>
          <tr><td>féminin</td><td>жіночий рід</td><td><i>книжка, ніч</i></td></tr>
          <tr><td>neutre</td><td>середній рід</td><td><i>вікно, море</i></td></tr>
          <tr><td>singulier / pluriel</td><td>однина / множина</td><td><i>книжка / книжки</i></td></tr>
          <tr><td>animé / inanimé</td><td>істота / неістота</td><td><i>брат / стіл</i></td></tr>
          <tr><td>déclinaison</td><td>відмінювання</td><td><i>мама, мами, мамі…</i></td></tr>
          <tr><td>accord</td><td>узгодження</td><td><i>нова книжка, новий стіл</i></td></tr>
        </table></div>
        <h3>Parties du discours (частини мови)</h3>
        <div class="tw"><table>
          <tr><th>Français</th><th>Українською</th><th>Exemple</th></tr>
          <tr><td>nom</td><td>іменник</td><td><i>місто</i></td></tr>
          <tr><td>adjectif</td><td>прикметник</td><td><i>гарний</i></td></tr>
          <tr><td>pronom</td><td>займенник</td><td><i>я, мій, свій</i></td></tr>
          <tr><td>numéral</td><td>числівник</td><td><i>два, другий</i></td></tr>
          <tr><td>verbe</td><td>дієслово</td><td><i>читати</i></td></tr>
          <tr><td>adverbe</td><td>прислівник</td><td><i>швидко</i></td></tr>
          <tr><td>préposition</td><td>прийменник</td><td><i>у, на, до</i></td></tr>
          <tr><td>conjonction</td><td>сполучник</td><td><i>і, що, бо</i></td></tr>
          <tr><td>particule</td><td>частка</td><td><i>не, би, чи</i></td></tr>
        </table></div>
      </div>
      <div class="gl-col">
        <h3>Le verbe (дієслово)</h3>
        <div class="tw"><table>
          <tr><th>Français</th><th>Українською</th><th>Exemple</th></tr>
          <tr><td>infinitif</td><td>інфінітив</td><td><i>читати, іти</i></td></tr>
          <tr><td>conjugaison</td><td>дієвідміна</td><td><i>I : читаю ; II : говорю</i></td></tr>
          <tr><td>aspect : imperfectif / perfectif</td><td>вид: недоконаний / доконаний</td><td><i>писати / написати</i></td></tr>
          <tr><td>temps</td><td>час</td><td><i>теперішній, минулий, майбутній</i></td></tr>
          <tr><td>mode : impératif / conditionnel</td><td>спосіб: наказовий / умовний</td><td><i>пиши! / писав би</i></td></tr>
          <tr><td>verbe pronominal</td><td>дієслово на -ся</td><td><i>вчитися</i></td></tr>
          <tr><td>verbes de mouvement</td><td>дієслова руху</td><td><i>йти / ходити, їхати / їздити</i></td></tr>
          <tr><td>participe</td><td>дієприкметник</td><td><i>написаний</i></td></tr>
          <tr><td>gérondif</td><td>дієприслівник</td><td><i>читаючи, прочитавши</i></td></tr>
          <tr><td>phrase impersonnelle</td><td>безособове речення</td><td><i>Мені холодно.</i></td></tr>
        </table></div>
      </div>
      <div class="gl-col">
        <h3>Sons et orthographe (звуки й правопис)</h3>
        <div class="tw"><table>
          <tr><th>Français</th><th>Українською</th><th>Exemple</th></tr>
          <tr><td>voyelle / consonne</td><td>голосний / приголосний</td><td><i>а, о / б, т</i></td></tr>
          <tr><td>signe mou</td><td>м'який знак</td><td><i>день</i></td></tr>
          <tr><td>apostrophe</td><td>апостроф</td><td><i>п'ять</i></td></tr>
          <tr><td>accent tonique</td><td>наголос</td><td><i>мОва</i></td></tr>
          <tr><td>euphonie</td><td>милозвучність</td><td><i>у / в, і / й</i></td></tr>
          <tr><td>alternance</td><td>чергування</td><td><i>рука — у руці</i></td></tr>
          <tr><td>calque</td><td>калька</td><td><i>на протязі → протягом</i></td></tr>
        </table></div>
        <p>Les dictionnaires notent l'aspect <b>док.</b> (perfectif) et <b>недок.</b> (imperfectif), le genre <b>ч.</b>, <b>ж.</b>, <b>с.</b>, et donnent le génitif : <i>стіл, -у / -а</i>. Le <b>суржик</b> est le mélange quotidien d'ukrainien et de russe — utile à reconnaître, pas à imiter à l'écrit.</p>
      </div>
    </div>`;
