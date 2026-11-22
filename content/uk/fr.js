/* eslint-disable */
// Ukrainian grammar map content written for French speakers (native "fr", target "uk").
// Same topics, examples and exercises as en.js; explanations compare Ukrainian with French.
// Field "fr" holds the name in the target language (historical key shared with the other maps);
// field "gloss" is the short name of a section/topic in the reader's language.
// Explanations (LONG) use a tiny markup: "## heading", "| table |" (1st row = header),
// "- list item", "! note", anything else = paragraph.
// Ukrainian examples follow the 2019 spelling code and the у/в, і/й euphony rules.

import { SOURCES } from "./sources";

const DOM = {
  V:{fr:"Дієслово",gloss:"le verbe",c:"--l-v"},
  M:{fr:"Рух і способи",gloss:"mouvement et modes",c:"--l-m"},
  N:{fr:"Відмінки",gloss:"les cas",c:"--l-n"},
  P:{fr:"Займенники",gloss:"pronoms, adjectifs",c:"--l-p"},
  O:{fr:"Правопис",gloss:"orthographe et sons",c:"--l-o"},
  S:{fr:"Речення",gloss:"la phrase",c:"--l-s"}
};

const PHASES = [
  {n:1,name:"Fondations",goal:"Lire et dire des phrases simples : présent, genre, pronoms, alphabet, questions et négation.",task:"Présente-toi en 10 phrases : ton nom, où tu habites, ce que tu fais, ce que tu aimes. Lis-les à voix haute, puis vérifie chaque и / і et chaque apostrophe."},
  {n:2,name:"Premiers récits",goal:"Parler du passé et du futur, dire où l'on est et où l'on va, décrire, relier des phrases.",task:"Écris sur ton dernier week-end et tes projets pour le prochain (120 mots) : où tu es allé et comment. Vérifie у / в et le genre de chaque verbe au passé."},
  {n:3,name:"Se déplacer",goal:"L'aspect, le génitif, les pronoms aux cas, les nombres et les verbes de mouvement à préfixe.",task:"Prépare un voyage (150 mots) : combien de jours, ce que tu feras, avec qui tu pars. Utilise au moins 5 nombres et 3 verbes de mouvement à préfixe."},
  {n:4,name:"Conversation",goal:"Verbes en -ся, instrumental, comparaison, vocatif, « j'ai » et « j'ai froid », conditionnel.",task:"Un message poli à un propriétaire ou un collègue (150 mots) avec le vocatif, чи не могли б ви et deux comparaisons. Puis joue la conversation à voix haute."},
  {n:5,name:"Aisance",goal:"Participes, datif, свій et себе, détails d'orthographe, mots modaux et style naturel sans calques.",task:"Un texte d'opinion de 200 mots sur ta ville. Vérifie chaque треба / можна, chaque свій et les virgules avant що et який."}
];

const T = [
/* ---------- V: the verb ---------- */
{id:"V1",d:"V",p:1,fr:"Теперішній час",gloss:"le présent",t:"Теперішній час: I і II дієвідміна",
 s:"Comme en français, le verbe ukrainien change de terminaison à chaque personne. Il y a deux modèles principaux, et l'infinitif indique en général lequel suivre.",
 r:["1<sup>re</sup> conjugaison (la plupart des verbes en -ати, -яти, -ути) : <b>-у/-ю, -еш/-єш, -е/-є, -емо/-ємо, -ете/-єте, -уть/-ють</b> : читаю, читаєш, читає… читають.","2<sup>e</sup> conjugaison (la plupart des verbes en -ити, -іти, -їти) : <b>-у/-ю, -иш/-їш, -ить/-їть, -имо, -ите, -ать/-ять</b> : говорю, говориш, говорить… говорять.","À la forme я, д → дж, з → ж, с → ш, т → ч : ходити → ходжу, просити → прошу ; après б, п, в, м, ф on ajoute л : робити → роблю.","Pas de « être » au présent : Я студент. Він удома. Irréguliers : їсти (їм, їси, їсть), дати (дам, даси, дасть)."],
 e:[["Я читаю, а ти що робиш?","Je lis, et toi, que fais-tu ?"],["Вони говорять українською.","Ils parlent ukrainien."],["Він живе у Львові.","Il habite à Lviv."]],
 x:["Я робю домашнє завдання.","Я роблю домашнє завдання.","Après б, п, в, м, ф, la forme я ajoute л : робити → роблю."],
 q:[["Ти ___ (говорити) українською?",["говориш","говореш","говорить"],0,"2e conjugaison : ти → -иш."],["Вони ___ (читати) книжку.",["читають","читаять","читаєть"],0,"1re conjugaison : вони → -ють après une voyelle."]],pre:[]},
{id:"V2",d:"V",p:2,fr:"Минулий і майбутній",gloss:"passé et futur",t:"Минулий і майбутній час",
 s:"Le passé change selon le genre, pas selon la personne — un peu comme l'accord du participe avec être. Le futur a deux formes pour les actions inachevées et une pour les actions achevées.",
 r:["Passé : radical + <b>-в</b> (masc.), <b>-ла</b> (fém.), <b>-ло</b> (neutre), <b>-ли</b> (pluriel) : читав, читала, читало, читали. Une femme dit я читала, un homme я читав.","Futur (imperfectif) : <b>буду, будеш… + infinitif</b> (буду читати) ou en un mot : <b>читатиму, читатимеш…</b>","Futur (perfectif) : on conjugue simplement le verbe : прочитаю, напишу, зроблю (thème V3).","Jamais буду + verbe perfectif : <s>буду прочитати</s> → прочитаю."],
 e:[["Вчора Олена працювала вдома.","Hier, Olena a travaillé à la maison."],["Завтра ми будемо дивитися фільм.","Demain, nous regarderons un film."],["Я напишу тобі ввечері.","Je t'écrirai ce soir."]],
 x:["Вона був у Києві.","Вона була в Києві.","Le passé s'accorde avec le genre du sujet : вона → була."],
 q:[["Вчора Олена ___ вдома.",["працювала","працював","працювало"],0,"Олена est féminin → -ла."],["Завтра ми ___ фільм.",["будемо дивитися","будемо подивитися","дивилися"],0,"Futur imperfectif : будемо + infinitif."]],pre:["V1"]},
{id:"V3",d:"V",p:3,fr:"Вид дієслова",gloss:"l'aspect",t:"Вид дієслова: доконаний і недоконаний",
 s:"La plupart des verbes vont par paires : l'un pour le déroulement ou la répétition (imperfectif), l'autre pour une action unique et achevée (perfectif). C'est proche de l'opposition imparfait / passé composé, mais valable à tous les temps.",
 r:["Imperfectif : déroulement, durée, habitude : писати, читати, робити, купувати. Я писав лист дві години.","Perfectif : une action achevée, un résultat : написати, прочитати, зробити, купити. Я написав лист.","Les paires se forment avec un préfixe (писати → написати), un changement de suffixe (купувати → купити) ou un autre mot (брати → взяти, говорити → сказати).","Les verbes perfectifs n'ont pas de présent : leurs formes « de présent » expriment le futur : напишу = j'écrirai."],
 e:[["Я щодня читаю новини.","Je lis les nouvelles tous les jours (habitude)."],["Вчора я нарешті прочитав цю книжку.","Hier, j'ai enfin fini ce livre (résultat)."],["Зачекай, я зараз зроблю каву.","Attends, je fais le café tout de suite."]],
 x:["Я завжди написав йому листи.","Я завжди писав йому листи.","завжди = une habitude → imperfectif."],
 q:[["Я щодня ___ новини.",["читаю","прочитаю"],0,"Tous les jours → imperfectif."],["Вчора я нарешті ___ лист.",["писав","написав"],1,"нарешті = un résultat achevé → perfectif."]],pre:["V2"]},
{id:"V4",d:"V",p:4,fr:"Дієслова на -ся",gloss:"verbes en -ся",t:"Дієслова на -ся",
 s:"La terminaison -ся joue le rôle du « se » des verbes pronominaux français : вмиватися = se laver. Un verbe très courant, подобатися, fonctionne comme « plaire » : c'est la chose aimée qui est sujet.",
 r:["Présent : вчуся, вчишся, вчиться, вчимося, вчитеся, вчаться. Passé : вчився, вчилася, вчилося, вчилися.","-ся = « se » réfléchi ou réciproque : одягатися (s'habiller), зустрічатися (se rencontrer).","Beaucoup de verbes n'existent qu'avec -ся : сміятися, боятися, посміхатися.","<b>Мені подобається</b> кава — mot à mot « le café me plaît » : le verbe s'accorde avec ce qu'on aime : мені подобаються квіти."],
 e:[["Мені подобається цей фільм.","Ce film me plaît."],["Ми прокидаємося о сьомій.","Nous nous réveillons à sept heures."],["Вона вчиться в університеті.","Elle fait ses études à l'université."]],
 x:["Я подобаю цей фільм.","Мені подобається цей фільм.","Comme « ce film me plaît » : la personne au datif (мені), la chose aimée sujet."],
 q:[["Мені ___ цей фільм.",["подобається","подобаю","подобаєшся"],0,"Мені подобається + chose au singulier."],["Вона ___ в університеті.",["вчиться","вчить","вчаться"],0,"вчитися = étudier ; вона → вчиться."]],pre:["V3","P3"]},
{id:"V5",d:"V",p:5,fr:"Дієприкметники",gloss:"les participes",t:"Дієприкметник і дієприслівник",
 s:"Des formes verbales pour l'écrit : le participe décrit un nom (зачинені двері — la porte fermée), le gérondif décrit une seconde action (читаючи — en lisant).",
 r:["Participes passifs en -ний, -тий : написаний лист, зачинені двері, вимитий посуд. Ils s'accordent comme des adjectifs.","Formes impersonnelles en -но, -то : Лист написано. Двері зачинено. Très fréquentes dans les textes officiels.","Gérondifs : <b>-учи, -ючи</b> (simultanéité, « en lisant ») : читаючи ; <b>-вши</b> (antériorité, « après avoir lu ») : прочитавши. Invariables.","On évite les participes actifs en -учий, -ачий : <s>працюючі люди</s> → люди, які працюють."],
 e:[["Лист написано вчора.","La lettre a été écrite hier."],["Читаючи книжку, він заснув.","En lisant le livre, il s'est endormi."],["Повернувшись додому, я зателефонував мамі.","Rentré à la maison, j'ai appelé ma mère."]],
 x:["Працюючі люди мають право на відпустку.","Люди, які працюють, мають право на відпустку.","Les participes actifs en -учий sont un calque du russe ; on utilise une relative avec який."],
 q:[["Лист ___ вчора.",["написано","написав","пишучи"],0,"Forme impersonnelle en -но."],["___ книжку, він заснув.",["Читаючи","Прочитаний","Читає"],0,"Action simultanée → -ючи."]],pre:["V4","P2"]},
/* ---------- M: motion and moods ---------- */
{id:"M1",d:"M",p:1,fr:"Наказовий спосіб",gloss:"l'impératif",t:"Наказовий спосіб",
 s:"Pour demander, inviter, donner une consigne. Il se forme sur le radical du présent, avec -й ou -и pour ти et -йте / -іть pour ви.",
 r:["Radical en voyelle → <b>-й, -йте</b> : читай, читайте ; стій, стійте.","Radical en consonne → <b>-и, -іть</b> : пиши, пишіть ; говори, говоріть.","« Allons… » : <b>-ймо / -імо</b> : читаймо, ходімо, напишімо.","Ajoute будь ласка pour être poli ; vouvoie les inconnus : Скажіть, будь ласка…"],
 e:[["Говоріть, будь ласка, повільніше.","Parlez plus lentement, s'il vous plaît."],["Ходімо в кіно!","Allons au cinéma !"],["Не хвилюйся, все буде добре.","Ne t'inquiète pas, tout ira bien."]],
 x:["Скажите, будь ласка, де вокзал?","Скажіть, будь ласка, де вокзал?","L'impératif en ви se termine en -іть ; -ите est russe."],
 q:[["___, будь ласка, повільніше! (говорити, ви)",["Говоріть","Говорите","Говорити"],0,"Radical en consonne → -іть."],["___ мені завтра! (написати, ти)",["Напиши","Напишеш","Написати"],0,"ти → -и."]],pre:["V1"]},
{id:"M2",d:"M",p:2,fr:"Йти чи ходити",gloss:"verbes de mouvement",t:"Дієслова руху: йти чи ходити, їхати чи їздити",
 s:"Là où le français dit simplement « aller », l'ukrainien distingue à pied ou en véhicule, et un trajet unique dans une direction ou un mouvement habituel, aller-retour.",
 r:["À pied : <b>йти</b> (une direction, maintenant) : я йду, ти йдеш ; <b>ходити</b> (habitude, aller-retour, capacité) : я ходжу, ти ходиш.","En véhicule : <b>їхати</b> (une direction, maintenant) : я їду ; <b>їздити</b> (habitude, aller-retour) : я їжджу, ти їздиш.","Passé : йшов / ходив, їхав / їздив. Минулого літа ми їздили в Карпати = nous y sommes allés et revenus.","Куди ? + accusatif : йти в школу, їхати на роботу (thème N2). Пішки = à pied."],
 e:[["Зараз я йду на роботу.","En ce moment, je vais au travail à pied."],["Щосуботи ми ходимо на ринок.","Tous les samedis, nous allons au marché."],["Куди ти їдеш? — У Львів, поїздом.","Où vas-tu ? — À Lviv, en train."]],
 x:["Я щодня йду в спортзал.","Я щодня ходжу в спортзал.","щодня = une habitude → ходити."],
 q:[["Зараз я ___ на роботу.",["йду","ходжу"],0,"Maintenant, une direction → йти."],["Щосуботи ми ___ на ринок.",["ходимо","йдемо"],0,"Une habitude → ходити."]],pre:["V2","N2"]},
{id:"M3",d:"M",p:3,fr:"Префікси руху",gloss:"mouvement à préfixe",t:"Дієслова руху з префіксами",
 s:"Le préfixe donne la direction : arriver, partir, entrer, traverser. Les verbes préfixés tirés de йти / їхати sont perfectifs, leurs paires tirées de ходити / їздити imperfectifs.",
 r:["<b>при-</b> arriver (прийти, приїхати), <b>ви-</b> sortir (вийти), <b>у- / в-</b> entrer (увійти), <b>пере-</b> traverser (перейти), <b>до-</b> atteindre (дійти), <b>від-</b> s'éloigner (відійти), <b>за-</b> passer chez (зайти), <b>піти</b> partir.","Après un préfixe en consonne, йти devient -ійти : увійти, підійти, відійти, обійти.","Paires : прийти / приходити, виїхати / виїжджати. Я прийду завтра (une fois) / Він часто приходить (souvent).","Les préfixes se combinent aussi avec нести, везти, бігти : принести, привезти."],
 e:[["Коли ти прийдеш додому?","Quand rentreras-tu à la maison ?"],["Переходьте вулицю на зелене світло.","Traversez la rue au feu vert."],["Я зайду до тебе на хвилинку.","Je passerai chez toi une minute."]],
 x:["Він вийшов у кімнату.","Він увійшов у кімнату.","Entrer dans une pièce → у- / в- (увійти) ; ви- veut dire sortir."],
 q:[["Коли ти ___ додому сьогодні?",["прийдеш","прийшов","приходиш"],0,"Une arrivée future unique → futur perfectif."],["___ вулицю на зелене світло.",["Переходьте","Приходьте","Виходьте"],0,"пере- = à travers."]],pre:["M2","V3"]},
{id:"M4",d:"M",p:4,fr:"Умовний спосіб",gloss:"le conditionnel",t:"Умовний спосіб: би, якби",
 s:"Passé + би (б) = le conditionnel français : pour les souhaits, les demandes polies et l'irréel.",
 r:["Forme : passé + <b>би</b> (après une consonne) ou <b>б</b> (après une voyelle) : я хотів би, я б хотіла.","Irréel : <b>якби</b> + passé, … + би : Якби я мав час, я поїхав би (si j'avais le temps, je partirais).","Politesse : Чи не могли б ви…? (Pourriez-vous… ?) Я хотіла б… (Je voudrais…)","La condition réelle utilise якщо + présent / futur : Якщо буде час, я поїду."],
 e:[["Я хотів би кави.","Je voudrais un café."],["Якби я мав гроші, я купив би машину.","Si j'avais de l'argent, j'achèterais une voiture."],["Чи не могли б ви мені допомогти?","Pourriez-vous m'aider ?"]],
 x:["Якби я буду мати час, я поїду.","Якби я мав час, я поїхав би.","Après якби, le passé ; le résultat prend би — comme « si + imparfait, conditionnel »."],
 q:[["Якби я мав гроші, я ___ машину.",["купив би","куплю","купив"],0,"Résultat irréel → passé + би."],["___ ви мені допомогти?",["Чи не могли б","Чи не можете б","Могли би б"],0,"Demande polie : Чи не могли б ви…?"]],pre:["V3"]},
{id:"M5",d:"M",p:5,fr:"Треба, можна",gloss:"mots modaux",t:"Треба, можна, мусити, мати",
 s:"L'ukrainien exprime « il faut », « on peut » et « on devrait » surtout avec des mots impersonnels et le datif : мені треба — « il me faut ».",
 r:["<b>треба, потрібно, слід, варто</b> + infinitif, avec le datif : мені треба йти (il faut que j'y aille), вам варто відпочити.","<b>можна / не можна</b> : permis / interdit : Тут не можна палити.","Verbes personnels : <b>мусити</b> (мушу — je dois), <b>мати</b> + infinitif (маю зробити — je suis censé faire), <b>могти</b> (можу — je peux).","<b>повинен, повинна, повинні</b> s'accordent avec le sujet : Вона повинна прийти."],
 e:[["Мені треба йти.","Il faut que j'y aille."],["Тут не можна палити.","Il est interdit de fumer ici."],["Я маю зателефонувати мамі.","Je dois appeler ma mère."]],
 x:["Я треба працювати.","Мені треба працювати.","треба est impersonnel, comme « il faut » : la personne au datif."],
 q:[["Мені ___ йти.",["треба","потрібний","мушу"],0,"Мені + треба + infinitif."],["Тут ___ палити.",["не можна","не може","не можемо"],0,"Interdit → не можна."]],pre:["M4","S4"]},
/* ---------- N: cases ---------- */
{id:"N1",d:"N",p:1,fr:"Рід і число",gloss:"genre et nombre",t:"Рід, число і називний відмінок",
 s:"Chaque nom a un genre — masculin, féminin ou neutre (un de plus qu'en français) — souvent visible à la terminaison. Il n'y a pas d'articles : « un livre » et « le livre » se disent книжка.",
 r:["Masculin : en général une consonne : стіл, брат, музей. Féminin : -а, -я : мама, земля (et certains en -ь : ніч, сіль, любов). Neutre : -о, -е, -я : вікно, море, завдання.","Pluriel : masc. et fém. → <b>-и / -і</b> : столи, книжки, музеї, ночі ; neutre → <b>-а / -я</b> : вікна, моря, завдання.","Les mots qui s'accordent changent selon le genre : мій брат, моя мама, моє вікно, мої друзі.","це = c'est / ce sont : Це мій брат. Це мої друзі."],
 e:[["Це моя книжка.","C'est mon livre."],["У кімнаті два вікна.","Il y a deux fenêtres dans la pièce."],["Це мій брат, а це моя сестра.","Voici mon frère, et voici ma sœur."]],
 x:["Це моя кіт.","Це мій кіт.","кіт est masculin → мій."],
 q:[["Це моя ___.",["книжка","стіл","вікно"],0,"моя → un nom féminin."],["Pluriel de « місто » :",["міста","місти","містаи"],0,"Neutre en -о → -а."]],pre:[]},
{id:"N2",d:"N",p:2,fr:"Де і куди",gloss:"où et vers où",t:"Де? і куди? Місцевий і знахідний відмінки",
 s:"Les mêmes prépositions у / в et на se construisent avec deux cas différents : le lieu (où ?) prend le locatif, la direction (vers où ?) l'accusatif. Le français dit « à Kyiv » dans les deux cas.",
 r:["Де ? → <b>у / в, на + locatif</b> : у Києві, в Україні, на роботі, у школі. Terminaison le plus souvent <b>-і</b>.","Куди ? → <b>у / в, на + accusatif</b> : у Київ, на роботу, в школу.","Accusatif : fém. -а → <b>-у</b>, -я → <b>-ю</b> (книжку, землю) ; masc. inanimé = nominatif (стіл) ; masc. animé = génitif (брата).","на s'emploie avec les événements, les espaces ouverts et certains lieux : на роботі, на концерті, на пошті, на ринку."],
 e:[["Я живу в Києві.","J'habite à Kyiv."],["Ми їдемо на море.","Nous partons à la mer."],["Вона працює в банку.","Elle travaille dans une banque."]],
 x:["Я йду в школі.","Я йду в школу.","Direction (куди ?) → accusatif."],
 q:[["Я живу ___.",["в Києві","в Київ","Київ"],0,"Lieu → locatif."],["Ми їдемо ___.",["на море","на морі"],0,"Direction → accusatif."]],pre:["N1"]},
{id:"N3",d:"N",p:3,fr:"Родовий",gloss:"le génitif",t:"Родовий відмінок",
 s:"Le cas le plus fréquent après le nominatif : il couvre beaucoup d'emplois du « de » français — absence, quantité, appartenance — et de nombreuses prépositions.",
 r:["<b>немає + génitif</b> (« il n'y a pas de ») : немає часу, немає води. Quantité : багато людей, склянка води.","Appartenance : книжка брата (le livre du frère), машина мого друга.","Après <b>без, для, до, з / із, від, біля, після, крім</b> : з Києва, до бабусі, для мене.","Terminaisons (sing.) : fém. <b>-и / -і</b> (води, землі) ; neutre <b>-а / -я</b> (вікна) ; masc. <b>-а / -я</b> pour les personnes et les objets (брата, стола), <b>-у / -ю</b> pour les matières et les notions abstraites (часу, цукру)."],
 e:[["У мене немає часу.","Je n'ai pas le temps."],["Я з Києва.","Je viens de Kyiv."],["Дайте, будь ласка, склянку води.","Un verre d'eau, s'il vous plaît."]],
 x:["У мене немає сестра.","У мене немає сестри.","немає + génitif."],
 q:[["У мене немає ___.",["часу","час","часом"],0,"немає + génitif ; nom abstrait → -у."],["Це машина мого ___.",["брата","брат","братові"],0,"Appartenance → génitif."]],pre:["N2"]},
{id:"N4",d:"N",p:4,fr:"Орудний",gloss:"l'instrumental",t:"Орудний відмінок",
 s:"Le cas de « avec qui », « au moyen de quoi » et « en tant que qui » : з другом, ручкою, лікарем.",
 r:["<b>з / із / зі + instrumental</b> = avec : з другом, з мамою, кава з молоком.","Instrument ou moyen (sans préposition) : писати ручкою (écrire au stylo), їхати поїздом (aller en train).","Profession ou rôle après працювати, бути (au passé / futur), стати : працювати лікарем (être médecin), стати вчителькою.","Lieu avec <b>над, під, перед, за, між</b> : над столом, перед будинком. Terminaisons : masc. / neutre <b>-ом, -ем, -єм</b> ; fém. <b>-ою, -ею, -єю</b>."],
 e:[["Я працюю лікарем.","Je suis médecin."],["Я п'ю каву з молоком.","Je bois du café au lait."],["Ми їдемо поїздом.","Nous voyageons en train."]],
 x:["Я пишу з ручкою.","Я пишу ручкою.","L'instrument se met à l'instrumental, sans з."],
 q:[["Я працюю ___.",["лікарем","лікар","лікаря"],0,"працювати ким ? → instrumental."],["Я п'ю каву з ___.",["молоком","молоко","молока"],0,"з = avec → instrumental."]],pre:["N3"]},
{id:"N5",d:"N",p:5,fr:"Давальний",gloss:"le datif",t:"Давальний відмінок і вся система",
 s:"Le datif répond à « à qui » : celui qui reçoit, qu'on aide, qui ressent quelque chose. C'est le COI du français. Avec lui, tu as les sept cas.",
 r:["Destinataire : давати, дарувати, писати, телефонувати <b>кому</b> : подзвони братові (appelle ton frère).","Verbes au datif en ukrainien : <b>допомагати</b> мамі (aider maman), <b>дякувати</b> вам (vous remercier), <b>заважати</b> сусідам (déranger les voisins).","Terminaisons : masc. <b>-ові / -еві / -єві</b> ou <b>-у / -ю</b> (братові, брату), fém. <b>-і</b> (мамі, сестрі), neutre <b>-у / -ю</b> (вікну). Pluriel : <b>-ам / -ям</b> (друзям).","L'âge et les états se disent aussi au datif : Мені двадцять років. Мені холодно (thème S4)."],
 e:[["Я допомагаю мамі.","J'aide ma mère."],["Дякую вам за допомогу.","Merci pour votre aide."],["Ми подарували вчительці квіти.","Nous avons offert des fleurs à l'institutrice."]],
 x:["Я дякую тебе.","Я дякую тобі.","дякувати кому ? → datif."],
 q:[["Я допомагаю ___.",["мамі","маму","мамою"],0,"допомагати кому ? → datif."],["Подзвони ___!",["братові","брата","братом"],0,"дзвонити кому ? → datif (téléphoner à)."]],pre:["N4","P3"]},
/* ---------- P: pronouns and adjectives ---------- */
{id:"P1",d:"P",p:1,fr:"Я, мій",gloss:"personnels, possessifs",t:"Особові та присвійні займенники",
 s:"Les pronoms personnels et « mon, ton, notre ». Comme en français, le possessif s'accorde avec l'objet possédé — sauf його, її, їхній, qui suivent d'autres règles.",
 r:["я, ти, він, вона, воно, ми, ви, вони. <b>Ви</b> sert aussi de vouvoiement.","мій, моя, моє, мої ; твій… ; наш, наша, наше, наші ; ваш… — accord avec le nom.","<b>його</b> (son, à lui) et <b>її</b> (son, à elle) ne changent jamais : його сестра, її брат.","<b>їхній, їхня, їхнє, їхні</b> (leur) s'accordent avec le nom : їхня квартира."],
 e:[["Це моя сестра, а це її чоловік.","Voici ma sœur, et voici son mari."],["Це наші нові сусіди.","Ce sont nos nouveaux voisins."],["Ви звідки?","D'où venez-vous ?"]],
 x:["Це моє друзі.","Це мої друзі.","друзі est au pluriel → мої."],
 q:[["Це ___ книжка.",["моя","мій","моє"],0,"книжка est féminin."],["Це машина Олега. Це ___ машина.",["його","її","свій"],0,"Олег est un homme → його (invariable)."]],pre:[]},
{id:"P2",d:"P",p:2,fr:"Прикметник",gloss:"les adjectifs",t:"Прикметник: узгодження",
 s:"L'adjectif s'accorde avec le nom en genre, en nombre et en cas. Il y a deux groupes : dur (новий) et mou (синій).",
 r:["Groupe dur : <b>-ий, -а, -е, -і</b> : новий стіл, нова книжка, нове вікно, нові друзі.","Groupe mou : <b>-ій, -я, -є, -і</b> : синій, синя, синє, сині (aussi літній, осінній, вечірній).","L'adjectif se place en général avant le nom, contrairement au français : цікавий фільм (un film intéressant).","Les adverbes tirés d'adjectifs finissent en -о ou -е : швидкий → швидко, добрий → добре."],
 e:[["Це дуже цікавий фільм.","C'est un film très intéressant."],["У мене синя сорочка.","J'ai une chemise bleue."],["Великі вікна, світла кімната.","De grandes fenêtres, une pièce lumineuse."]],
 x:["Це дуже цікава фільм.","Це дуже цікавий фільм.","фільм est masculin → -ий."],
 q:[["Це ___ машина.",["нова","новий","нове"],0,"машина est féminin → -а."],["У мене ___ сорочка.",["синя","синьа","синій"],0,"Groupe mou, féminin → -я."]],pre:["P1","N1"]},
{id:"P3",d:"P",p:3,fr:"Мене, мені",gloss:"pronoms aux cas",t:"Займенники у відмінках",
 s:"Les pronoms personnels changent de forme à chaque cas, comme me / moi / lui en français, mais plus systématiquement. Après une préposition, він, вона, вони prennent un н- : у нього, до неї, з ними.",
 r:["я → <b>мене</b> (gén. / acc.), <b>мені</b> (dat. / loc.), <b>мною</b> ; ти → тебе, тобі, тобою.","він → <b>його</b>, йому, ним ; вона → <b>її</b>, їй, нею ; вони → <b>їх</b>, їм, ними.","Après une préposition : <b>нього, неї, них</b> : у нього, до неї, без них, про неї.","ми → нас, нам, нами ; ви → вас, вам, вами."],
 e:[["У нього є машина.","Il a une voiture."],["Я тебе люблю.","Je t'aime."],["Дай мені ручку, будь ласка.","Donne-moi un stylo, s'il te plaît."]],
 x:["Я йду до його.","Я йду до нього.","Après une préposition → нього."],
 q:[["У ___ є машина.",["нього","його","він"],0,"Après у → нього."],["Я ___ люблю.",["тебе","тобі","ти"],0,"любити кого ? → accusatif."]],pre:["P2","N2"]},
{id:"P4",d:"P",p:4,fr:"Порівняння",gloss:"la comparaison",t:"Ступені порівняння",
 s:"Le comparatif se termine en -ший ou -іший, le superlatif ajoute най-. « Que » se dit ніж ou за.",
 r:["<b>-іший / -ший</b> : новий → новіший, гарний → гарніший, короткий → коротший.","Irréguliers : великий → <b>більший</b>, малий → <b>менший</b>, добрий → <b>кращий</b> (meilleur), поганий → <b>гірший</b> (pire).","Superlatif : <b>най-</b> + comparatif : найновіший, найкращий. Pas <s>самий кращий</s>.","« Que » : <b>ніж</b> + nominatif ou <b>за</b> + accusatif : старший, ніж брат / старший за брата. Adverbes : швидше, краще."],
 e:[["Київ більший за Львів.","Kyiv est plus grand que Lviv."],["Це найкращий день у моєму житті.","C'est le plus beau jour de ma vie."],["Говоріть повільніше, будь ласка.","Parlez plus lentement, s'il vous plaît."]],
 x:["Це самий цікавий фільм.","Це найцікавіший фільм.","Superlatif → най- ; самий est un calque du russe."],
 q:[["Київ ___ за Львів.",["більший","більш великий","великіший"],0,"великий → більший."],["Це ___ день у моєму житті.",["найкращий","найдобріший","самий кращий"],0,"добрий → кращий → найкращий."]],pre:["P2"]},
{id:"P5",d:"P",p:5,fr:"Свій, хтось",gloss:"свій, себе, quelqu'un",t:"Свій, себе, хтось, кожен",
 s:"свій signifie « son propre » et renvoie au sujet. Avec lui viennent себе (soi), les indéfinis (хтось — quelqu'un) et les quantifiants (весь, кожен).",
 r:["<b>свій, своя, своє, свої</b> = celui du sujet : Олена любить свою роботу. її роботу voudrait dire le travail d'une autre femme.","<b>себе</b> (soi) n'a pas de nominatif : Він думає про себе. Купи собі щось.","<b>-сь</b> = quelque- : хтось, щось, десь, колись. <b>будь-</b> = n'importe- : будь-хто, будь-що.","<b>весь, вся, все, всі</b> (tout) ; <b>кожен, кожна, кожне</b> (chaque)."],
 e:[["Олена любить свою роботу.","Olena aime son (propre) travail."],["Хтось подзвонив тобі.","Quelqu'un t'a appelé."],["Він завжди думає тільки про себе.","Il ne pense toujours qu'à lui-même."]],
 x:["Олена любить її роботу.","Олена любить свою роботу.","Son propre travail → свою. її роботу = le travail d'une autre femme."],
 q:[["Вона любить ___ роботу.",["свою","її","себе"],0,"Celui du sujet → свою."],["___ подзвонив тобі, поки тебе не було.",["Хтось","Ніхто","Будь-хто"],0,"Quelqu'un → хтось."]],pre:["P3"]},
/* ---------- O: spelling and sounds ---------- */
{id:"O1",d:"O",p:1,fr:"Абетка",gloss:"l'alphabet",t:"Абетка, звуки й апостроф",
 s:"L'alphabet ukrainien compte 33 lettres et se lit presque comme il s'écrit. Quelques lettres et l'apostrophe causent l'essentiel des erreurs.",
 r:["<b>и</b> [ɪ] (entre « i » et « é ») et <b>і</b> [i] (le « i » français) : дим / дім. <b>ї</b> = [ji], <b>є</b> = [jé], <b>щ</b> = [chtch].","<b>г</b> est un [h] sonore, <b>ґ</b> un [g] dur : гора, ґанок.","<b>ь</b> mouille la consonne qui précède : день, сіль, Львів.","<b>Apostrophe</b> après б, п, в, м, ф et р devant я, ю, є, ї : п'ять, м'ясо, сім'я, пір'я. Pas si une autre consonne précède la labiale : свято, цвях."],
 e:[["п'ять, м'ясо, сім'я","cinq, viande, famille"],["Привіт! Як справи?","Salut ! Ça va ?"],["Мій брат вчиться в п'ятому класі.","Mon frère est en CM2 (5e année)."]],
 x:["сімя","сім'я","м devant я → apostrophe."],
 q:[["Quelle orthographe est correcte ?",["п'ять","пять","пьять"],0,"п devant я → apostrophe."],["Quel mot contient le son [g] ?",["ґанок","гора","голова"],0,"ґ est le [g] dur."]],pre:[]},
{id:"O2",d:"O",p:2,fr:"У чи в",gloss:"l'euphonie",t:"Милозвучність: у / в, і / й, з / із / зі",
 s:"L'ukrainien évite les rencontres de voyelles ou de consonnes, donc certains petits mots changent de forme : у / в, і / й, з / із / зі. Un peu comme « ce / cet » ou l'élision en français, mais c'est une règle d'orthographe.",
 r:["<b>в</b> après une voyelle, devant une consonne : вона в місті. <b>у</b> entre consonnes et en début de phrase : брат у місті, У мене є…","Devant в, ф, льв, св, тв, хв toujours <b>у</b> : у Львові, у Франції, у вівторок.","<b>й</b> après une voyelle : мама й тато ; <b>і</b> après une consonne : брат і сестра.","<b>з</b> par défaut ; <b>із</b> entre sifflantes (з, с, ц, ч, ш) ; <b>зі</b> devant з, с, ш + consonne : зі школи, зі мною."],
 e:[["Вона працює в лікарні.","Elle travaille à l'hôpital."],["Брат живе у Львові.","Mon frère habite à Lviv."],["Мама й тато прийшли зі школи.","Maman et papa sont revenus de l'école."]],
 x:["Він живе в Львові.","Він живе у Львові.","Devant льв → у."],
 q:[["Мама працює ___ лікарні.",["в","у"],0,"Après une voyelle, devant une consonne → в."],["Брат живе ___ Львові.",["у","в"],0,"Devant льв → у."]],pre:["O1"]},
{id:"O3",d:"O",p:3,fr:"Чергування",gloss:"alternances",t:"Чергування звуків",
 s:"Les sons changent quand le mot change de forme. Repérer le schéma aide à reconnaître le mot et à l'écrire.",
 r:["<b>і ↔ о / е</b> : і en syllabe fermée, о / е en syllabe ouverte : кінь — коня, ніч — ночі, сіль — солі, Київ — Києва.","<b>г, к, х → з, ц, с</b> devant -і : нога — на нозі, рука — у руці, Прага — у Празі, сумка — у сумці.","Dans les verbes : д → дж, з → ж, с → ш, т → ч à la forme я : ходити → ходжу, просити → прошу, писати → пишу.","Voyelle qui tombe : день — дня, вітер — вітру."],
 e:[["Я тримаю телефон у руці.","Je tiens mon téléphone à la main."],["Ми живемо в Празі.","Nous habitons à Prague."],["Немає солі.","Il n'y a pas de sel."]],
 x:["Я тримаю телефон у рукі.","Я тримаю телефон у руці.","к → ц devant -і."],
 q:[["у ___ (рука)",["руці","рукі","руки"],0,"к → ц devant -і."],["Génitif de « ніч » :",["ночі","нічі","ніча"],0,"і → о en syllabe ouverte."]],pre:["O2","N2"]},
{id:"O4",d:"O",p:4,fr:"Кличний",gloss:"le vocatif",t:"Кличний відмінок",
 s:"L'ukrainien a une forme spéciale pour interpeller quelqu'un. Utiliser le nominatif à la place sonne sec ou étranger, surtout à l'écrit et dans la conversation polie.",
 r:["Féminin -а → <b>-о</b> : Олена → Олено, мама → мамо ; -я → <b>-є / -ю</b> : Марія → Маріє, Галя → Галю.","Masculin (dur) → <b>-е</b> : Іван → Іване, Тарас → Тарасе, пан → пане ; après к, г, х : друг → друже.","Masculin (mou) → <b>-ю</b> : Андрій → Андрію, Ігор → Ігорю.","Adresse formelle : <b>пане Андрію, пані Олено</b> (пані ne change pas). Шановний пане Іване !"],
 e:[["Олено, ходи сюди!","Olena, viens ici !"],["Добрий день, пане Іване!","Bonjour, monsieur Ivan !"],["Дякую, друже!","Merci, mon ami !"]],
 x:["Привіт, Андрій!","Привіт, Андрію!","Quand on interpelle quelqu'un → vocatif : Андрію."],
 q:[["___, ходи сюди! (Олена)",["Олено","Олена","Оленою"],0,"-а → -о."],["Добрий день, пане ___! (Іван)",["Іване","Іван","Івану"],0,"Masculin dur → -е."]],pre:["O3","N1"]},
{id:"O5",d:"O",p:5,fr:"Подвоєння",gloss:"détails d'orthographe",t:"Подвоєння, м'який знак, дефіс, велика буква",
 s:"Les règles d'orthographe qui se voient dans chaque texte : lettres doubles, signe mou, trait d'union et majuscules.",
 r:["Doublement dans les noms neutres après une voyelle : <b>життя, знання, питання, обличчя</b>. Pas au génitif pluriel : знань, питань.","Doublement à la jonction : віддати, беззахисний, письменник.","<b>ь</b> après д, т, з, с, ц, л, н en fin de mot et devant о : день, сіль, сьогодні. Pas après ж, ч, ш : ніч, ріж.","Minuscule pour les jours, mois, langues et nationalités — comme en français : понеділок, січень, українська мова, українці. Trait d'union : будь-хто, хто-небудь."],
 e:[["У мене є кілька питань.","J'ai quelques questions."],["Ми зустрінемося у вівторок.","On se verra mardi."],["Будь-хто може прийти.","N'importe qui peut venir."]],
 x:["Я вивчаю Українську мову з Січня.","Я вивчаю українську мову з січня.","Les langues et les mois prennent une minuscule."],
 q:[["Quelle orthographe est correcte ?",["життя","житя","життє"],0,"тт doublé : життя."],["Laquelle est correcte ?",["у понеділок","у Понеділок"],0,"Les jours prennent une minuscule."]],pre:["O4"]},
/* ---------- S: sentence ---------- */
{id:"S1",d:"S",p:1,fr:"Питання і «не»",gloss:"questions, négation",t:"Просте речення: питання і заперечення",
 s:"L'ordre des mots est libre, mais sujet-verbe-complément reste neutre. Les questions fermées commencent par чи ou reposent sur l'intonation. La négation utilise не, et les mots négatifs en exigent un aussi — comme ne… personne en français.",
 r:["Question fermée : <b>чи</b> + phrase (comme « est-ce que ») ou simple intonation : Чи ти говориш українською? Ти говориш українською?","Mots interrogatifs : хто, що, де (où), куди (vers où), звідки (d'où), коли, чому, як, скільки.","<b>не</b> devant le verbe : Я не знаю. Absence : <b>немає</b> (нема) + génitif.","Double négation obligatoire : <b>ніхто не</b>, <b>нічого не</b>, <b>ніколи не</b>, <b>ніде не</b> : Ніхто не прийшов."],
 e:[["Чи ти говориш українською?","Est-ce que tu parles ukrainien ?"],["Я нічого не знаю.","Je ne sais rien."],["Куди ти йдеш? — Додому.","Où vas-tu ? — À la maison."]],
 x:["Я нічого знаю.","Я нічого не знаю.","Comme « je ne sais rien » : le mot négatif exige не devant le verbe."],
 q:[["___ ти говориш українською?",["Чи","Що","Як"],0,"Question fermée → чи."],["Ніхто ___ прийшов.",["не","ні","—"],0,"Double négation : ніхто не."]],pre:["V1"]},
{id:"S2",d:"S",p:2,fr:"Що, бо, який",gloss:"phrases complexes",t:"Складне речення: що, який, бо, щоб",
 s:"Relier des propositions : що (que), який (qui / que relatif), бо / тому що (parce que), щоб (pour que), коли, якщо. En ukrainien, une virgule sépare toujours les propositions.",
 r:["<b>що</b> = que : Я думаю, що він правий. Toujours avec une virgule.","<b>який, яка, яке, які</b> = qui / que / lequel ; il prend le genre et le nombre du nom, et le cas de sa fonction : дівчина, якій я подзвонив.","<b>бо, тому що</b> = parce que ; <b>щоб</b> + forme du passé = pour que : Я хочу, щоб ти прийшов (je veux que tu viennes).","Une virgule avant що, який, бо, коли, щоб, якщо, але, а — toujours."],
 e:[["Я думаю, що він правий.","Je pense qu'il a raison."],["Це книжка, яку я читаю.","C'est le livre que je lis."],["Я не прийшов, бо хворів.","Je ne suis pas venu parce que j'étais malade."]],
 x:["Я хочу, щоб ти прийдеш.","Я хочу, щоб ти прийшов.","Après щоб → forme du passé (là où le français met le subjonctif)."],
 q:[["Я думаю, ___ він правий.",["що","який","чи"],0,"que → що."],["Це книжка, ___ я читаю.",["яку","який","яка"],0,"книжка (fém.) est le complément → яку."]],pre:["S1"]},
{id:"S3",d:"S",p:3,fr:"Числівники",gloss:"les nombres",t:"Числівники з іменниками, час і дати",
 s:"Le nom qui suit un nombre change de forme : un livre, deux livres et cinq livres ne s'écrivent pas pareil. La même logique sert pour l'âge et l'heure.",
 r:["<b>1</b> (один, одна, одне) + nominatif singulier : один брат, одна книжка ; aussi 21, 31 : двадцять один студент.","<b>2, 3, 4</b> (два / дві, три, чотири) + nominatif pluriel : два брати, дві сестри, три книжки.","<b>5 et plus</b> + génitif pluriel : п'ять братів, десять книжок. рік : один рік, два роки, п'ять років.","L'heure : <b>о котрій ?</b> — о першій, о сьомій ; пів на третю (2 h 30). Dates : першого травня."],
 e:[["У мене два брати й дві сестри.","J'ai deux frères et deux sœurs."],["Йому тридцять п'ять років.","Il a trente-cinq ans."],["Зустрінемося о сьомій.","On se retrouve à sept heures."]],
 x:["Мені двадцять п'ять роки.","Мені двадцять п'ять років.","5 et plus → génitif pluriel : років."],
 q:[["У мене два ___.",["брати","брата","братів"],0,"2–4 + nominatif pluriel."],["П'ять ___.",["книжок","книжки","книжка"],0,"5 et plus → génitif pluriel."]],pre:["S2","N3"]},
{id:"S4",d:"S",p:4,fr:"У мене є",gloss:"avoir, âge, états",t:"У мене є, мені холодно, мене звати",
 s:"Beaucoup d'idées du quotidien sont impersonnelles en ukrainien : « j'ai » se dit « chez moi il y a », « j'ai froid » se dit « à moi il fait froid », « je m'appelle » se dit « on m'appelle ».",
 r:["Avoir : <b>у мене є</b> + nominatif (« chez moi il y a ») : У мене є брат. Ne pas avoir : <b>у мене немає</b> + génitif.","États : <b>datif + adverbe</b> : мені холодно (j'ai froid), нам весело, йому сумно.","Âge : <b>datif + nombre + рік / роки / років</b> : Мені тридцять років (j'ai trente ans).","Nom : <b>Мене звати</b> Олена. Як тебе звати? / Як вас звати?"],
 e:[["У тебе є машина?","Tu as une voiture ?"],["Мені холодно.","J'ai froid."],["Як тебе звати? — Мене звати Андрій.","Comment tu t'appelles ? — Je m'appelle Andriï."]],
 x:["Я є 30 років.","Мені 30 років.","L'âge → datif + років (comme « à moi trente ans »)."],
 q:[["___ є машина?",["У тебе","Ти","Тобі"],0,"Avoir → у + génitif + є."],["___ холодно.",["Мені","Я","Мене"],0,"Un état → datif."]],pre:["S3","P3"]},
{id:"S5",d:"S",p:5,fr:"Стиль",gloss:"style, calques",t:"Стиль і пунктуація: без кальок",
 s:"Les apprenants reprennent souvent des tournures copiées du russe (calques) qui sonnent faux en ukrainien standard. Connaître les équivalents naturels et quelques règles de ponctuation rend ton écrit plus authentique.",
 r:["Calques → standard : <s>приймати участь</s> → брати участь ; <s>на протязі</s> → протягом ; <s>слідуючий</s> → наступний ; <s>в залежності від</s> → залежно від ; <s>згідно наказу</s> → згідно з наказом.","S'excuser : <b>вибачте, перепрошую</b> (pas <s>вибачаюсь</s>). « Faisons » : <b>зробімо</b> plutôt que давайте зробимо.","Un tiret entre deux noms dans « X est Y » : Київ — столиця України.","Guillemets « », virgule avant що, який, але, а ; contrairement au français, pas d'espace avant ? ! : ;"],
 e:[["Ми взяли участь у конференції.","Nous avons participé à la conférence."],["Ми працювали над проєктом протягом року.","Nous avons travaillé sur le projet pendant un an."],["Київ — столиця України.","Kyiv est la capitale de l'Ukraine."]],
 x:["Ми працювали над проєктом на протязі року.","Ми працювали над проєктом протягом року.","на протязі est un calque ; le mot standard est протягом."],
 q:[["Я хочу ___ участь у конкурсі.",["взяти","прийняти","прийти"],0,"брати участь — participer."],["___ зупинка — «Університет».",["Наступна","Слідуюча","Слідуєма"],0,"prochain → наступний."]],pre:["S4"]}
];

/* ---------- extra exercises: q = multiple choice, c = fix the mistake [wrong, correct, hint] ---------- */
const EX = {
V1:{q:[["Ми ___ (хотіти) їсти.",["хочемо","хотимо","хочимо"],0,"хотіти : хочу, хочеш, хоче, хочемо."],["Він ___ (жити) у Львові.",["живе","жиє","живить"],0,"жити : живу, живеш, живе."],["Я ___ (ходити) на роботу пішки.",["ходжу","ходю","хожу"],0,"д → дж à la forme я."]],
 c:[["Ти пишиш дуже гарно.","Ти пишеш дуже гарно.","писати est de la 1re conjugaison : ти пишеш."],["Вони говорють українською.","Вони говорять українською.","2e conjugaison : вони -ять."]]},
V2:{q:[["Діти ___ в парку.",["гралися","грався","гралась"],0,"Pluriel → -ли."],["Я ___ тобі завтра.",["напишу","буду написати","писав"],0,"Futur perfectif : напишу."],["Ми ___ (працювати) завтра весь день.",["працюватимемо","працюватиму","працювали"],0,"Futur en un mot : -тимемо pour ми."]],
 c:[["Я буду прочитати цю книжку.","Я прочитаю цю книжку.","Les verbes perfectifs ne prennent pas буду."],["Вчора ми ходимо в кіно.","Вчора ми ходили в кіно.","вчора → passé."]]},
V3:{q:[["Зачекай, я зараз ___ каву.",["зроблю","роблю","буду зробити"],0,"Une action avec résultat → futur perfectif."],["Він два роки ___ українську.",["вчив","вивчив"],0,"Durée (deux ans) → imperfectif."],["Нарешті я ___ квитки!",["купив","купував"],0,"Un résultat atteint → perfectif."]],
 c:[["Ми цілий вечір подивилися телевізор.","Ми цілий вечір дивилися телевізор.","Durée (toute la soirée) → imperfectif."],["Я вже купувала квитки, ось вони.","Я вже купила квитки, ось вони.","Le résultat est là → perfectif."]]},
V4:{q:[["Нам ___ ваші ідеї.",["подобаються","подобається"],0,"ідеї est au pluriel → подобаються."],["Ми ___ о восьмій.",["прокидаємося","прокидаємо","прокидається"],0,"прокидатися ; ми → -ємося."],["Чому ти ___?",["смієшся","смієш","сміється"],0,"сміятися ; ти → смієшся."]],
 c:[["Мені подобається ці квіти.","Мені подобаються ці квіти.","Le sujet est квіти (pluriel)."],["Діти вже одягнули.","Діти вже одягнулися.","S'habiller → -ся."]]},
V5:{q:[["Двері ___.",["зачинені","зачиняючи","зачиняв"],0,"Participe passif qui décrit двері (pluriel)."],["___ додому, я зателефонував мамі.",["Повернувшись","Повертаючий","Повернений"],0,"Action antérieure → -вши."],["Роботу ___ вчасно.",["виконано","виконаний","виконуючи"],0,"Forme impersonnelle en -но."]],
 c:[["Ми живемо в будинку, будуючому в 1990 році.","Ми живемо в будинку, збудованому в 1990 році.","Construit → participe passif збудований."],["Вона йшла, співав пісню.","Вона йшла, співаючи пісню.","Action simultanée → -ючи."]]},
M1:{q:[["___ в кіно! (ходити, ми)",["Ходімо","Ходимо","Ходіте"],0,"Allons… → -імо."],["Не ___! (хвилюватися, ти)",["хвилюйся","хвилюєшся","хвилюватися"],0,"Radical en voyelle → -й + -ся."],["___ уважні! (бути, ви)",["Будьте","Будете","Бути"],0,"бути → будь, будьте."]],
 c:[["Пишите нам на пошту.","Пишіть нам на пошту.","Impératif en ви → -іть."],["Не забудь купить хліба.","Не забудь купити хліба.","L'infinitif ukrainien se termine en -ти."]]},
M2:{q:[["Куди ти ___? — У Львів, поїздом.",["їдеш","ходиш","їздиш"],0,"En train, maintenant, une direction → їхати."],["Минулого літа ми ___ в Карпати.",["їздили","їхали","ходили"],0,"Un aller-retour → їздити."],["Він уміє ___ на велосипеді.",["їздити","їхати"],0,"Une capacité → le verbe multidirectionnel."]],
 c:[["Я їду на роботу пішки.","Я йду на роботу пішки.","À pied → йти."],["Ми щороку їдемо на море.","Ми щороку їздимо на море.","Chaque année → їздити."]]},
M3:{q:[["Я ___ до тебе на хвилинку.",["зайду","вийду","перейду"],0,"за- = passer chez."],["Потяг ___ о 7:15.",["відходить","заходить","доходить"],0,"від- = partir, s'éloigner."],["Ми ледве ___ до вокзалу.",["дійшли","вийшли","зайшли"],0,"до- = atteindre."]],
 c:[["Він пришов о шостій.","Він прийшов о шостій.","при- + йти → прийти."],["Підіть сюди, будь ласка.","Підійдіть сюди, будь ласка.","під- + йти → підійти ; impératif підійдіть."]]},
M4:{q:[["Я ___ чаю.",["хотів би","хочу би","хотіти б"],0,"Je voudrais → passé + би."],["Що б ти ___ на моєму місці?",["зробив","зробиш","робиш"],0,"би + passé."],["Якби вона ___ раніше, ми б встигли.",["прийшла","прийде","приходить"],0,"якби + passé."]],
 c:[["Вона би прийшла, якби знала.","Вона б прийшла, якби знала.","Après une voyelle → б."],["Якщо б ти прийшов, було б весело.","Якби ти прийшов, було б весело.","Condition irréelle → якби."]]},
M5:{q:[["Вона ___ закінчити звіт до п'ятниці.",["повинна","повинен","треба"],0,"повинен s'accorde : вона → повинна."],["Вам ___ відпочити.",["варто","маєте","мусите"],0,"Вам + варто impersonnel."],["Я ___ зателефонувати мамі.",["маю","маю би","треба"],0,"мати + infinitif = je dois / je suis censé."]],
 c:[["Мені треба йде.","Мені треба йти.","Après треба → infinitif."],["Вона повинен це зробити.","Вона повинна це зробити.","повинен s'accorde avec le genre du sujet."]]},
N1:{q:[["Quel mot est féminin ?",["ніч","день","вікно"],0,"ніч est un nom féminin en -ь."],["Pluriel de « музей » :",["музеї","музеи","музейи"],0,"-й → -ї."],["Quel mot est neutre ?",["море","земля","олівець"],0,"-е → neutre."]],
 c:[["Ця вікно дуже велике.","Це вікно дуже велике.","вікно est neutre → це."],["Моя друг живе в Києві.","Мій друг живе в Києві.","друг est masculin."]]},
N2:{q:[["Вона працює ___.",["в банку","в банк","банк"],0,"Lieu → locatif."],["Я бачу ___.",["маму","мама","мамі"],0,"COD → accusatif : -у."],["Покладіть книжку ___.",["на стіл","на столі"],0,"Direction → accusatif."]],
 c:[["Я був на Київі.","Я був у Києві.","Une ville → у + locatif."],["Ми чекаємо на автобусі.","Ми чекаємо на автобус.","чекати на + accusatif."]]},
N3:{q:[["Я з ___.",["Києва","Київ","Києві"],0,"з (de, depuis) + génitif."],["Дайте, будь ласка, склянку ___.",["води","вода","воду"],0,"Quantité → génitif."],["Після ___ ми підемо гуляти.",["обіду","обід","обідом"],0,"після + génitif."]],
 c:[["Мені треба купити два кілограми цукор.","Мені треба купити два кілограми цукру.","Quantité → génitif : цукру."],["Ця кава для мій брат.","Ця кава для мого брата.","для + génitif."]]},
N4:{q:[["Ми їдемо ___.",["поїздом","поїзд","поїзду"],0,"Moyen de transport → instrumental."],["Лампа висить над ___.",["столом","стіл","столі"],0,"над + instrumental."],["Вона хоче стати ___.",["вчителькою","вчителька","вчительку"],0,"стати ким ? → instrumental."]],
 c:[["Я гуляю з собака.","Я гуляю з собакою.","з + instrumental : -ою."],["Він працює як програміст.","Він працює програмістом.","працювати ким ? → instrumental."]]},
N5:{q:[["Ми подарували ___ квіти.",["вчительці","вчительку","вчителька"],0,"дарувати кому ? → datif."],["Скільки років твоєму ___?",["синові","сина","син"],0,"L'âge → datif."],["Я телефоную ___.",["друзям","друзів","друзі"],0,"Datif pluriel → -ям."]],
 c:[["Вона допомагає свого брата.","Вона допомагає своєму братові.","допомагати кому ? → datif."],["Дякую вас за допомогу.","Дякую вам за допомогу.","дякувати кому ? → вам."]]},
P1:{q:[["Це наш ___.",["дім","квартира","вікно"],0,"наш → nom masculin."],["Ольга й Петро — мої сусіди. Це ___ квартира.",["їхня","їхній","їхнє"],0,"квартира est féminin → їхня."],["Це ___ діти.",["мої","моє","моя"],0,"Pluriel → мої."]],
 c:[["Це наша нові сусіди.","Це наші нові сусіди.","Pluriel → наші."],["Це їхнє квартира.","Це їхня квартира.","квартира est féminin."]]},
P2:{q:[["___ вікна",["великі","великий","велика"],0,"Pluriel → -і."],["___ море (синій)",["синє","синеє","синій"],0,"Groupe mou, neutre → -є."],["___ ранок (добрий)",["добрий","добре","добра"],0,"ранок est masculin."]],
 c:[["У нас нова вчитель.","У нас новий вчитель.","вчитель est masculin."],["Ці квіти дуже гарна.","Ці квіти дуже гарні.","Pluriel → -і."]]},
P3:{q:[["Дай ___ ручку, будь ласка.",["мені","мене","я"],0,"давати кому ? → datif."],["Ми говорили про ___.",["неї","її","вона"],0,"Après une préposition → неї."],["Я давно не бачив ___.",["їх","них","їм"],0,"бачити кого ? → їх (sans préposition)."]],
 c:[["Я подзвоню тебе завтра.","Я подзвоню тобі завтра.","дзвонити кому ? → тобі (téléphoner à)."],["Ми чекали на його цілий день.","Ми чекали на нього цілий день.","Après une préposition → нього."]]},
P4:{q:[["Моя сестра старша ___ мене.",["за","як","чим"],0,"старший за + accusatif."],["Говоріть ___, будь ласка.",["повільніше","повільніший","найповільніше"],0,"Adverbe au comparatif."],["Сьогодні ___, ніж учора.",["холодніше","холодніший","холодно"],0,"Le temps qu'il fait → adverbe : холодніше."]],
 c:[["Він більш старший за мене.","Він старший за мене.","On ne combine pas більш et -ший."],["Цей план гірше, ніж той.","Цей план гірший, ніж той.","Il qualifie план → adjectif гірший."]]},
P5:{q:[["Він завжди думає тільки про ___.",["себе","собі","свій"],0,"про + accusatif de себе."],["Я бачу її ___ дня.",["кожного","кожен","кожному"],0,"кожного дня — chaque jour (génitif)."],["Візьми ___ сумку!",["свою","твою свою","себе"],0,"Ton propre sac → свою."]],
 c:[["Вона розповідала про себе й про її сім'ю.","Вона розповідала про себе й про свою сім'ю.","Sa propre famille → свою."],["Всі студенти зробив завдання.","Всі студенти зробили завдання.","всі → verbe au pluriel."]]},
O1:{q:[["Choisis la bonne lettre : « пр_віт » (salut)",["и","і"],0,"привіт s'écrit avec и."],["Quelle orthographe est correcte ?",["свято","св'ято"],0,"Une autre consonne avant в → pas d'apostrophe."],["Quelle orthographe est correcte ?",["м'ясо","мясо","мьясо"],0,"м devant я → apostrophe."]],
 c:[["Мені подобається мясо.","Мені подобається м'ясо.","м devant я → apostrophe."],["Мій брат вчиться в пятому класі.","Мій брат вчиться в п'ятому класі.","п devant я → apostrophe."]]},
O2:{q:[["Петро ___ Олена",["й","і"],0,"Entre deux voyelles → й."],["Я прийшов ___ школи.",["зі","з","із"],0,"Devant ш + consonne → зі."],["Ми поїдемо ___ вівторок.",["у","в"],0,"Devant в → у."]],
 c:[["Вона була у Києві.","Вона була в Києві.","Après une voyelle, devant une consonne → в."],["Я йду з школи.","Я йду зі школи.","Devant ш + consonne → зі."]]},
O3:{q:[["на ___ (нога)",["нозі","ногі","нога"],0,"г → з devant -і."],["Pluriel de « кінь » :",["коні","кіні","коня"],0,"і → о en syllabe ouverte."],["Ми живемо в ___ (Прага).",["Празі","Прагі","Прагу"],0,"г → з devant -і."]],
 c:[["Що в тебе в сумкі?","Що в тебе в сумці?","к → ц devant -і."],["Немає ніякої сілі.","Немає ніякої солі.","сіль → солі."]]},
O4:{q:[["Дякую, ___! (друг)",["друже","друг","другу"],0,"друг → друже."],["___, ти вдома? (мама)",["Мамо","Мама","Мамі"],0,"-а → -о."],["Шановна пані ___! (Марія)",["Маріє","Марія","Марію"],0,"-ія → -іє."]],
 c:[["Тарас, допоможи мені!","Тарасе, допоможи мені!","Masculin dur → -е."],["Ольга, де ти?","Ольго, де ти?","-а → -о."]]},
O5:{q:[["Laquelle est correcte ?",["будь-хто","будьхто","будь хто"],0,"будь- avec un trait d'union."],["Laquelle est correcte ?",["знання","знаня"],0,"нн doublé après une voyelle."],["Génitif pluriel de « питання » :",["питань","питаннь"],0,"Pas de doublement au génitif pluriel."]],
 c:[["У мене є кілька питаннь.","У мене є кілька питань.","Génitif pluriel : питань."],["Ми зустрінемося у Вівторок.","Ми зустрінемося у вівторок.","Les jours prennent une minuscule."]]},
S1:{q:[["___ ти живеш? — У Львові.",["Де","Куди","Звідки"],0,"Lieu → де."],["___ ти йдеш? — Додому.",["Куди","Де","Коли"],0,"Direction → куди."],["У нас ___ хліба.",["немає","не","ні"],0,"Absence → немає + génitif."]],
 c:[["Ми ніколи були в Одесі.","Ми ніколи не були в Одесі.","ніколи exige не."],["Де ти йдеш?","Куди ти йдеш?","Direction → куди."]]},
S2:{q:[["Я не прийшов, ___ хворів.",["бо","що","щоб"],0,"parce que → бо."],["Подзвони, ___ будеш удома.",["коли","що","який"],0,"quand → коли."],["Скажи, ___ ти робиш.",["що","яке","щоб"],0,"ce que → що."]],
 c:[["Я знаю що ти маєш рацію.","Я знаю, що ти маєш рацію.","Virgule avant що."],["Це дівчина, який я подзвонив.","Це дівчина, якій я подзвонив.","дівчина est féminin ; дзвонити кому → якій."]]},
S3:{q:[["У класі двадцять один ___.",["студент","студенти","студентів"],0,"…1 → nominatif singulier."],["Зустрінемося ___.",["о сьомій","в сім","сім годин"],0,"À quelle heure → о + ordinal."],["Три ___.",["сестри","сестер","сестра"],0,"2–4 → nominatif pluriel."]],
 c:[["У нас дві собаки й чотири котів.","У нас дві собаки й чотири коти.","2–4 → nominatif pluriel."],["Фільм почнеться в восьмій.","Фільм почнеться о восьмій.","L'heure → о + locatif."]]},
S4:{q:[["Як ___ звати?",["тебе","тобі","ти"],0,"Як тебе звати ? — accusatif."],["У неї ___ братів.",["немає","не має","нема є"],0,"немає + génitif."],["___ потрібна допомога?",["Вам","Ви","Вас"],0,"потрібна + datif."]],
 c:[["Я холодно.","Мені холодно.","Un état → datif (comme « j'ai froid », pas « je suis froid »)."],["Я маю двадцять років.","Мені двадцять років.","L'âge → datif."]]},
S5:{q:[["___ від погоди.",["Залежно","В залежності","По залежності"],0,"selon → залежно від."],["___, будь ласка, за запізнення.",["Вибачте","Вибачаюсь","Звиняюсь"],0,"S'excuser → вибачте."],["Київ ___ столиця України.",["—","являється","є являється"],0,"Un tiret entre deux noms."]],
 c:[["Ми прийняли участь у конференції.","Ми взяли участь у конференції.","брати участь, pas приймати."],["Згідно наказу, офіс закрито.","Згідно з наказом, офіс закрито.","згідно з + instrumental."]]}
};

/* ---------- detailed explanations. Markup: "## heading", "| table |" (1st row = header), "- list item", "! note", anything else = paragraph ---------- */
const LONG = {
V1:`## Deux conjugaisons
Le verbe change de terminaison à chaque personne, comme en français, mais chaque terminaison s'entend. Apprends les deux modèles une fois, et la plupart des verbes suivront.
| | читати (I) | писати (I) | говорити (II) | робити (II) |
| я | чита<b>ю</b> | пиш<b>у</b> | говор<b>ю</b> | роб<b>лю</b> |
| ти | чита<b>єш</b> | пиш<b>еш</b> | говор<b>иш</b> | роб<b>иш</b> |
| він / вона | чита<b>є</b> | пиш<b>е</b> | говор<b>ить</b> | роб<b>ить</b> |
| ми | чита<b>ємо</b> | пиш<b>емо</b> | говор<b>имо</b> | роб<b>имо</b> |
| ви | чита<b>єте</b> | пиш<b>ете</b> | говор<b>ите</b> | роб<b>ите</b> |
| вони | чита<b>ють</b> | пиш<b>уть</b> | говор<b>ять</b> | роб<b>лять</b> |
Le test le plus rapide est la forme вони : -уть / -ють → 1<sup>re</sup> conjugaison, -ать / -ять → 2<sup>e</sup>.
## Changements de consonne à la forme я
Les verbes de la 2<sup>e</sup> conjugaison changent la dernière consonne du radical, seulement à la forme я : ходити → хо<b>дж</b>у (mais ходиш), просити → про<b>ш</b>у, возити → во<b>ж</b>у, платити → пла<b>ч</b>у. Après б, п, в, м, ф apparaît un <b>л</b> : робити → роб<b>л</b>ю, купити → куп<b>л</b>ю, любити → люб<b>л</b>ю (et роблять, люблять).
## « Être » et les verbes irréguliers
Au présent, бути disparaît : <i>Я студентка. Він удома. Це мій друг.</i> La forme <b>є</b> n'apparaît que pour insister ou pour « il y a » : <i>У мене є питання.</i>
| їсти | дати | хотіти |
| їм, їси, їсть | дам, даси, дасть | хочу, хочеш, хоче |
| їмо, їсте, їдять | дамо, дасте, дадуть | хочемо, хочете, хочуть |
## Un seul présent
Comme en français, <i>я читаю</i> = « je lis » et « je suis en train de lire ». Le contexte et des mots comme зараз (maintenant), щодня (chaque jour) font le reste.
! Le pronom sujet est souvent omis, car la terminaison montre déjà la personne : <i>Читаю.</i> = « Je lis. » À l'écrit, garde-le au début ; à l'oral, l'omettre sonne naturel.`,
V2:`## Le passé
On prend l'infinitif, on enlève -ти et on ajoute la terminaison de genre. La personne ne compte pas — seulement le genre et le nombre.
| | masculin | féminin | neutre | pluriel |
| читати | читав | читала | читало | читали |
| писати | писав | писала | писало | писали |
| могти | міг | могла | могло | могли |
| іти | ішов / йшов | ішла / йшла | ішло | ішли |
Donc я, ти, він partagent читав quand le locuteur ou le sujet est un homme, et я, ти, вона partagent читала pour une femme. Au pluriel et avec le vouvoiement ви — toujours -ли : <i>Ви були в Києві?</i>
## Le futur : trois possibilités
- Imperfectif, en deux mots : <b>буду, будеш, буде, будемо, будете, будуть</b> + infinitif : я буду читати.
- Imperfectif, en un mot : infinitif + <b>-му, -меш, -ме, -мемо, -мете, -муть</b> : читатиму, читатимеш. Même sens, un peu plus écrit — et proche du futur simple français, formé lui aussi sur l'infinitif.
- Perfectif : on conjugue le verbe perfectif comme un présent : прочитаю, напишеш, зробимо (thème V3).
## L'erreur la plus fréquente
буду ne se combine qu'avec des verbes imperfectifs. <s>Я буду прочитати</s> → <i>Я прочитаю</i> (je finirai de le lire) ou <i>Я буду читати</i> (je lirai).
! Au passé, les verbes en -ся gardent -ся au masculin et -ся / -сь ailleurs : <i>він сміявся, вона сміялася (сміялась)</i>.`,
V3:`## Pourquoi l'aspect compte
Le français marque « je lisais / j'ai lu » par les temps. L'ukrainien le marque par deux verbes différents. Chaque fois que tu parles du passé ou du futur, tu choisis un verbe, pas seulement un temps.
| Imperfectif (déroulement) | Perfectif (résultat) |
| писати — écrire, être en train d'écrire | написати — écrire (et finir) |
| читати | прочитати |
| робити | зробити |
| купувати | купити |
| давати | дати |
| брати | взяти |
| говорити | сказати |
## Comment choisir
| Imperfectif | Perfectif |
| l'action en cours : Я писав лист, коли ти подзвонив. | une action achevée : Я написав лист. |
| habitude, répétition : щодня, часто, завжди | une seule fois, un résultat : нарешті, вже, раз |
| durée : дві години, цілий вечір | une suite d'événements : прийшов, сів, написав |
| fait général : Ти читав цю книжку? (l'as-tu déjà lu) | achèvement : Ти прочитав цю книжку? (l'as-tu fini) |
## Les temps de chaque aspect
| | Imperfectif | Perfectif |
| passé | писав | написав |
| présent | пишу | — |
| futur | буду писати / писатиму | напишу |
## Le lien avec le français
Au passé, l'imperfectif ressemble souvent à l'imparfait et le perfectif au passé composé : <i>Я читав, коли…</i> (je lisais quand…) / <i>Я прочитав</i> (j'ai lu). Mais l'ukrainien garde cette opposition au futur aussi : <i>буду читати</i> (je lirai, je serai en train de lire) / <i>прочитаю</i> (je l'aurai lu).
! Apprends les verbes par paires dès le début : писати / написати, купувати / купити. Le dictionnaire donne les deux : « робити (недок.) — зробити (док.) ».`,
V4:`## Ce que fait -ся
- Réfléchi, comme « se » : <i>вмиватися</i> (se laver), <i>одягатися</i> (s'habiller).
- Réciproque : <i>зустрічатися</i> (se rencontrer), <i>листуватися</i> (s'écrire).
- Verbes qui n'existent qu'avec -ся : <i>сміятися</i> (rire), <i>боятися</i> (avoir peur), <i>намагатися</i> (essayer).
- Passif / général, comme « se » en français : <i>Магазин відкривається о дев'ятій</i> (le magasin ouvre à neuf heures). <i>Як це пишеться?</i> (comment ça s'écrit ?)
## Formes
| | вчитися | сміятися |
| я | вчуся | сміюся |
| ти | вчишся | смієшся |
| він / вона | вчиться | сміється |
| ми | вчимося | сміємося |
| ви | вчитеся | смієтеся |
| вони | вчаться | сміються |
Passé : <i>вчився, вчилася, вчилося, вчилися</i>. Orthographe : -ться se prononce [ttsʲa], mais s'écrit toujours -ться.
## подобатися = plaire
Exactement comme « plaire » en français, ce qu'on aime est le sujet, la personne est au datif :
| Ukrainien | Français |
| Мені подобається кава. | Le café me plaît. |
| Мені подобаються квіти. | Les fleurs me plaisent. |
| Їй подобався фільм. | Le film lui a plu. |
| Тобі подобається грати? | Ça te plaît de jouer ? |
Pour les goûts plus forts, <b>любити</b> (кого? що?) est aussi courant : <i>Я люблю каву.</i>
! вчити = enseigner ou apprendre quelque chose (вчити слова), вчитися = étudier (вчитися в університеті).`,
V5:`## Participes passifs en -ний, -тий
Ils fonctionnent comme des adjectifs et s'accordent avec le nom : <i>написаний лист, написана книжка, написане слово, написані тексти</i>.
| Verbe | Participe | Exemple |
| написати | написаний | написаний лист |
| зачинити | зачинений | зачинені двері |
| вимити | вимитий | вимитий посуд |
| збудувати | збудований | будинок, збудований у 1990 році |
## La forme en -но / -то
Une forme impersonnelle courte, très typique du style officiel ukrainien : <i>Лист написано. Роботу виконано. Двері зачинено.</i> Elle remplace le passif français « a été fait ».
## Gérondifs
| Forme | Sens | Exemple |
| -учи, -ючи (imperfectif) | en faisant | <i>Читаючи, він заснув.</i> |
| -вши (perfectif) | après avoir fait | <i>Прочитавши лист, вона засміялася.</i> |
Ils sont invariables, et leur sujet doit être celui de la phrase — exactement comme le gérondif français.
## Évite les participes actifs
Des formes comme <s>працюючий, відпочиваючий, слідуючий</s> sont des calques du russe. On utilise une relative ou un autre mot : люди, які працюють ; відпочивальники ; наступний.
! Ces formes appartiennent à l'écrit. À l'oral, une relative avec який ou une subordonnée avec коли sonne plus naturelle.`,
M1:`## Formation
On part du radical du présent (la forme вони sans -уть / -ють, -ать / -ять).
| Infinitif | вони | ти | ви | ми (allons…) |
| читати | читають | читай | читайте | читаймо |
| стояти | стоять | стій | стійте | стіймо |
| писати | пишуть | пиши | пишіть | пишімо |
| говорити | говорять | говори | говоріть | говорімо |
| сісти | сядуть | сядь | сядьте | сядьмо |
| бути | — | будь | будьте | будьмо |
## Politesse
- Utilise les formes en ви avec les inconnus, les collègues et les personnes âgées.
- Ajoute <b>будь ласка</b> : <i>Скажіть, будь ласка, котра година?</i>
- Demandes plus douces : <i>Чи не могли б ви…?</i> (thème M4).
## « Allons… »
La forme en -ймо / -імо est le « allons… » naturel : <i>Ходімо! Почнімо! Зробімо це разом.</i> <i>Давайте зробимо</i> est courant à l'oral, mais c'est un calque du russe à l'écrit.
## Les impératifs qu'on entend partout
Ходи сюди! Зачекай! Слухай! Дивись! Не хвилюйся! Будь ласка, проходьте. Сідайте!
! -ите au lieu de -іть (<s>скажите, пишите</s>) est l'erreur typique d'influence russe. En ukrainien : скажіть, пишіть, робіть.`,
M2:`## Deux paires de verbes
| | une direction, maintenant, une fois | habitude, aller-retour, capacité |
| à pied | йти (іти) | ходити |
| en véhicule | їхати | їздити |
## Formes
| | йти | ходити | їхати | їздити |
| я | йду | ходжу | їду | їжджу |
| ти | йдеш | ходиш | їдеш | їздиш |
| він / вона | йде | ходить | їде | їздить |
| ми | йдемо | ходимо | їдемо | їздимо |
| ви | йдете | ходите | їдете | їздите |
| вони | йдуть | ходять | їдуть | їздять |
Passé : йшов, йшла / ходив, ходила ; їхав, їхала / їздив, їздила.
## Comment choisir
- <i>Я йду в магазин</i> — je suis en route pour le magasin.
- <i>Я часто ходжу в магазин</i> — je vais souvent au magasin.
- <i>Вчора я ходив у магазин</i> — hier je suis allé au magasin (et revenu).
- <i>Я їду в Київ</i> — je pars à Kyiv (maintenant / bientôt).
- <i>Ми щороку їздимо на море</i> — nous allons à la mer chaque année.
## Moyens et destinations
Куди ? + accusatif (thème N2) : у Київ, на роботу, до бабусі (до + génitif). Comment : пішки (à pied), автобусом, поїздом, машиною (instrumental, thème N4), ou на автобусі.
! Le français « aller » recouvre les quatre verbes. Pose-toi deux questions : à pied ou en véhicule ? un trajet maintenant, ou une habitude / un aller-retour ?`,
M3:`## Préfixes et sens
| Préfixe | Sens | À pied | En véhicule |
| при- | arriver | прийти | приїхати |
| ви- | sortir, quitter un lieu | вийти | виїхати |
| у- / в- | entrer | увійти | в'їхати |
| пере- | traverser | перейти | переїхати (aussi : déménager) |
| до- | atteindre | дійти | доїхати |
| від- | s'éloigner | відійти | від'їхати |
| за- | passer chez | зайти | заїхати |
| під- | s'approcher | підійти | під'їхати |
| об- | contourner | обійти | об'їхати |
| — | partir | піти | поїхати |
Après un préfixe en consonne, йти devient -ійти (увійти, підійти) ; їхати prend une apostrophe (в'їхати, під'їхати).
## Paires d'aspect
Les verbes préfixés tirés de йти / їхати sont perfectifs ; ceux de ходити / їздити imperfectifs :
- <i>Я прийду о шостій</i> (une fois, futur) / <i>Він завжди приходить вчасно</i> (habitude).
- <i>Ми виїхали о восьмій</i> / <i>Ми виїжджаємо щоранку о восьмій.</i>
## Passé
прийшов, прийшла, прийшли ; пішов, пішла, пішли ; увійшов, увійшла.
## Autres verbes de mouvement
Les mêmes préfixes s'appliquent à нести (porter), везти (transporter), бігти (courir) : <i>принести, привезти, прибігти ; винести, перевезти, вибігти.</i>
! пішов (est parti) / прийшов (est arrivé) est la paire la plus fréquente dans un récit : <i>Він прийшов о сьомій і пішов о десятій.</i>`,
M4:`## Formation
Passé + la particule <b>би</b> ou <b>б</b> :
- <b>б</b> après une voyelle : <i>я б хотіла, вона б прийшла, ми б поїхали</i> ;
- <b>би</b> après une consonne : <i>я хотів би, він прийшов би</i>.
La particule peut se placer avant ou après le verbe : <i>я б пішов</i> = <i>я пішов би</i>.
## L'irréel
| Condition | Conséquence |
| Якби я мав час, | я поїхав би на море. |
| Якби ти сказав раніше, | я б допоміг. |
L'ukrainien ne distingue pas « si j'avais » et « si j'avais eu » : la même forme couvre le présent et le passé, et le contexte tranche. <i>Якби я знав…</i> = « si je savais… » ou « si j'avais su… ».
## Condition réelle
On utilise <b>якщо</b> avec le présent ou le futur : <i>Якщо буде гарна погода, ми підемо в парк.</i> Jamais якщо + би — comme jamais de conditionnel après « si ».
## Politesse et souhaits
- <i>Я хотів би / хотіла б…</i> — Je voudrais…
- <i>Чи не могли б ви…?</i> — Pourriez-vous… ?
- <i>Було б добре…</i> — Ce serait bien…
- <i>Я б на твоєму місці…</i> — À ta place, je…
## щоб
La même forme du passé suit щоб (pour que) : <i>Я хочу, щоб ти прийшов</i> (je veux que tu viennes) — là où le français met le subjonctif (thème S2).
! La forme du passé s'accorde toujours en genre : une femme dit <i>я хотіла б</i>, un homme <i>я хотів би</i>.`,
M5:`## Mots impersonnels + datif
| Mot | Sens | Exemple |
| треба, потрібно | il faut | Мені треба йти. |
| можна | on peut, c'est permis | Можна увійти? |
| не можна | il est interdit | Тут не можна палити. |
| слід | il convient (soutenu) | Вам слід відпочити. |
| варто | ça vaut la peine, tu devrais | Тобі варто прочитати цю книжку. |
| доводиться | être obligé (à contrecœur) | Мені доводиться рано вставати. |
La personne se met au datif (мені, тобі, йому, нам…), l'action à l'infinitif — comme « il me faut partir ».
## Verbes et mots personnels
- <b>мусити</b> : obligation forte : <i>Я мушу йти.</i>
- <b>мати</b> + infinitif : projet ou devoir (« devoir », « être censé ») : <i>Я маю зателефонувати мамі.</i> <i>Поїзд має прибути о сьомій.</i>
- <b>могти</b> : pouvoir : <i>Я можу, ти можеш, він може.</i> Passé : міг, могла.
- <b>вміти</b> : savoir faire : <i>Я вмію плавати</i> (je sais nager).
- <b>повинен, повинна, повинне, повинні</b> : devoir ; s'accorde avec le sujet : <i>Ти повинна відпочити.</i>
## потрібний comme adjectif
<i>Мені потрібна допомога</i> (j'ai besoin d'aide) : потрібний s'accorde avec ce dont on a besoin.
! можу = je peux (capacité) ; вмію = je sais (compétence) ; можна = c'est permis. <i>Я вмію плавати, але сьогодні не можу — тут не можна.</i>`,
N1:`## Le genre
| | Masculin | Féminin | Neutre |
| terminaison typique | consonne, -й | -а, -я | -о, -е, -я (-ання, -ття) |
| exemples | стіл, брат, музей, кінь | мама, книжка, земля | вікно, море, завдання, життя |
| pièges | тато, дядько (-о, mais masculin) | ніч, сіль, любов, радість (-ь) | ім'я, курча (-я) |
Le genre ukrainien ne correspond pas au genre français : <i>стіл</i> (la table) est masculin, <i>книжка</i> (le livre) est féminin. Les mots en -ь peuvent être masculins (день, кінь) ou féminins (ніч, сіль, радість) — apprends-les avec un adjectif : <i>новий день, темна ніч</i>.
## Le pluriel (nominatif)
| | Singulier | Pluriel |
| masc. dur | стіл, брат | столи, брати |
| masc. mou / -й | кінь, музей | коні, музеї |
| fém. -а / -я | книжка, земля | книжки, землі |
| neutre -о / -е | вікно, море | вікна, моря |
| neutre -ння | завдання | завдання |
Quelques pluriels irréguliers : друг → друзі, людина → люди, дитина → діти, око → очі.
## Pas d'articles
<i>книжка</i> = un livre ou le livre. Pour « ce » ou « un » : цей, один : <i>Ця книжка цікава.</i>
## це
<i>Це</i> présente les choses quel que soit le genre et le nombre, comme « c'est » / « ce sont » : <i>Це мій брат. Це моя мама. Це мої друзі.</i> Le démonstratif, lui, s'accorde : <i>цей стіл, ця книжка, це вікно, ці книжки</i>.
! Le genre n'est pas un détail : il décide de la forme des adjectifs, des possessifs, des verbes au passé et des nombres. Apprends chaque nom avec мій / моя / моє.`,
N2:`## Une préposition, deux cas
| Question | Cas | Exemple |
| Де ? (où) | locatif | Я в Києві. Книжка на столі. |
| Куди ? (vers où) | accusatif | Я їду в Київ. Поклади книжку на стіл. |
Le français dit « je suis à Kyiv » et « je vais à Kyiv » avec la même préposition ; l'ukrainien change le cas.
## Terminaisons du locatif (singulier)
| | Terminaison | Exemple |
| la plupart des noms | -і | у місті, на столі, у Києві, у школі |
| г, к, х → з, ц, с | -і | на нозі, у руці (thème O3) |
| quelques masculins courts | -у | на мосту, у саду, на льоду |
| neutre -ння | -і | у завданні |
Pluriel : <b>-ах / -ях</b> : у містах, на роботах.
## Terminaisons de l'accusatif (singulier)
| | Nominatif | Accusatif |
| fém. -а | книжка, мама | книжку, маму |
| fém. -я | земля | землю |
| fém. -ь | ніч | ніч (identique) |
| masc. inanimé | стіл, Київ | стіл, Київ (identique) |
| masc. animé | брат, кіт | брата, кота (comme le génitif) |
| neutre | вікно | вікно (identique) |
## у / в ou на
<b>на</b> s'emploie avec les espaces ouverts, les événements, les surfaces et certains lieux fixes : на вулиці, на концерті, на роботі, на пошті, на ринку, на вокзалі, на морі. La plupart des bâtiments, villes et pays prennent у / в : у школі, в Україні, у Франції. Apprends les mots en на comme une liste.
! Attention à l'euphonie : в après une voyelle, у après une consonne (thème O2) : <i>Я живу в Києві. Брат живе у Львові.</i>`,
N3:`## Quand utiliser le génitif
- Absence : <b>немає</b> (нема, не було, не буде) + génitif : <i>Немає часу. Не було води.</i> (« pas de »)
- Quantité : багато, мало, кілька, скільки, кілограм, склянка + génitif : <i>багато людей, кілограм яблук.</i> (« beaucoup de », « un kilo de »)
- Appartenance et « de » : <i>книжка брата, центр міста, кінець фільму.</i>
- Prépositions : <b>без, для, до, з / із / зі</b> (de, depuis), <b>від, біля, після, крім, замість, навколо</b>.
- Dates : <i>першого травня</i> (le premier mai).
Beaucoup d'emplois du « de » français correspondent au génitif.
## Terminaisons du singulier
| | Nominatif | Génitif |
| fém. -а | вода, мама | води, мами |
| fém. -я, -ь | земля, ніч | землі, ночі |
| neutre | вікно, море | вікна, моря |
| masc. personnes, objets | брат, стіл | брата, стола |
| masc. matières, notions, lieux | час, цукор, ліс | часу, цукру, лісу |
Le choix -а / -у pour les masculins est un des points les plus difficiles ; le dictionnaire l'indique toujours : « стіл, -у / -а ».
## Pluriel
Les terminaisons varient : <b>-ів</b> (братів, студентів), terminaison zéro (книжок, сестер, вікон, міст), <b>-ей</b> (людей, гостей). Apprends-les avec les nombres (thème S3) : п'ять книжок, десять студентів.
! до + génitif veut dire « chez » ou « jusqu'à » : <i>до бабусі</i> (chez grand-mère), <i>до лікаря, до вокзалу.</i> C'est la façon la plus naturelle de dire « aller chez quelqu'un » : <i>Я йду до друга.</i>`,
N4:`## Emplois
| Emploi | Exemple |
| avec quelqu'un / quelque chose (з) | з другом, з мамою, кава з молоком |
| instrument, moyen | писати ручкою, їхати автобусом |
| rôle, profession | працювати лікарем, бути вчителькою, стати інженером |
| lieu avec над, під, перед, за, між | над столом, під деревом, перед будинком |
| moment | вранці, ввечері, взимку (adverbes figés issus de ce cas) |
| avec certains verbes | цікавитися музикою, займатися спортом, пишатися сином |
## Terminaisons
| | Nominatif | Instrumental sing. | Instrumental pl. |
| masc. dur | брат, стіл | братом, столом | братами |
| masc. mou | вчитель, музей | вчителем, музеєм | вчителями |
| fém. -а | мама, книжка | мамою, книжкою | мамами |
| fém. -я | земля | землею | землями |
| fém. -ь | ніч, радість | ніччю, радістю | ночами |
| neutre | вікно, море | вікном, морем | вікнами |
Les féminins en -ь doublent la consonne : ніч → ніччю, сіль → сіллю, радість → радістю.
## Pronoms
мною, тобою, ним, нею, нами, вами, ними : <i>Ходімо зі мною! Я говорив з нею.</i>
! Le français dit « je suis médecin » sans article et « je voyage en train » avec une préposition ; l'ukrainien utilise l'instrumental dans les deux cas : <i>Я працюю лікарем. Я їду поїздом.</i>`,
N5:`## Emplois du datif
- Destinataire : давати, дарувати, писати, телефонувати, показувати, пояснювати <b>кому</b> : <i>Я покажу тобі місто.</i> C'est le COI du français.
- Verbes au datif en ukrainien mais au COD en français : <b>допомагати</b> (aider quelqu'un), <b>дякувати</b> (remercier), <b>заважати</b> (déranger), <b>вірити</b> (croire quelqu'un), <b>радити</b> (conseiller).
- États, âge, goûts : <i>Мені холодно. Мені тридцять років. Мені подобається.</i>
- Nécessité : <i>Мені треба…</i> (thème M5). Prépositions : <b>завдяки</b> (grâce à), <b>всупереч</b> (malgré).
## Terminaisons
| | Nominatif | Datif sing. | Datif pl. |
| masc. | брат, вчитель | братові / брату, вчителеві / вчителю | братам, вчителям |
| fém. -а / -я | мама, земля | мамі, землі | мамам, землям |
| fém. -ь | ніч | ночі | ночам |
| neutre | вікно, море | вікну, морю | вікнам, морям |
Pour les noms de personnes masculins, -ові / -еві est préféré, surtout quand deux datifs se suivent : <i>Іванові Петровичу</i>.
## Le système complet
| Cas | Question | мама | брат | вікно |
| називний | хто ? що ? | мама | брат | вікно |
| родовий | кого ? чого ? | мами | брата | вікна |
| давальний | кому ? чому ? | мамі | братові | вікну |
| знахідний | кого ? що ? | маму | брата | вікно |
| орудний | ким ? чим ? | мамою | братом | вікном |
| місцевий | на кому ? на чому ? | (на) мамі | (на) братові | (на) вікні |
| кличний | — | мамо ! | брате ! | вікно ! |
! Les questions de la deuxième colonne sont celles qu'apprennent les enfants ukrainiens ; les poser est le moyen le plus rapide de choisir le bon cas.`,
P1:`## Pronoms personnels
| | Singulier | Pluriel |
| 1<sup>re</sup> | я | ми |
| 2<sup>e</sup> | ти | ви (aussi vouvoiement) |
| 3<sup>e</sup> | він (m), вона (f), воно (n) | вони |
Comme « il / elle » en français, <b>він / вона</b> remplacent aussi des choses selon leur genre grammatical : <i>Де книжка? — Вона на столі.</i> <i>Де стіл? — Він там.</i>
## Possessifs qui s'accordent avec le nom
| | masc. | fém. | neutre | pluriel |
| mon | мій | моя | моє | мої |
| ton | твій | твоя | твоє | твої |
| notre | наш | наша | наше | наші |
| votre | ваш | ваша | ваше | ваші |
| leur | їхній | їхня | їхнє | їхні |
| son propre | свій | своя | своє | свої |
## Possessifs invariables
<b>його</b> (son, à lui) et <b>її</b> (son, à elle) : <i>його сестра, його брат, його діти ; її машина, її будинок.</i> L'ukrainien distingue donc « à lui » et « à elle », ce que « son / sa » français ne fait pas.
## Le vouvoiement
Dans une lettre à une seule personne, on peut écrire <i>Ви, Вас, Ваш</i> avec une majuscule. À l'oral, ви avec le verbe au pluriel : <i>Ви знаєте?</i> Le passé aussi passe au pluriel : <i>Ви були вчора вдома?</i>
! Comme en français, le possessif s'accorde avec la chose possédée : <i>моя книжка</i> (mon livre), quel que soit « je ». Mais його / її dépendent du possesseur : le frère d'Olena est <i>її брат</i>.`,
P2:`## Groupe dur et groupe mou
| | masc. | fém. | neutre | pluriel |
| dur : новий | новий | нова | нове | нові |
| mou : синій | синій | синя | синє | сині |
Les adjectifs mous sont peu nombreux : синій, літній, осінній, вечірній, ранній, пізній, давній, сусідній, справжній, крайній. La plupart sont durs.
## Place et accord
L'adjectif se place avant le nom — contrairement au français pour la plupart des adjectifs — et copie son genre, son nombre et son cas : <i>цікавий фільм, цікава книжка, цікаве місто, цікаві люди ; у новому місті, з новою подругою</i>.
## Adverbes
À partir des adjectifs : <b>-о</b> (dur) ou <b>-е</b> (certains) : швидкий → швидко, повільний → повільно, добрий → добре, гарний → гарно. <i>Вона гарно співає.</i>
## Adjectifs possessifs
À partir des prénoms : <i>мамин телефон</i> (le téléphone de maman), <i>батькова машина, Оленина сумка</i> (-ин, -ів) — très courants à l'oral.
! Aux autres cas, l'adjectif a son propre tableau (нового, новому, новим, на новому…). L'apprendre avec le nom est plus simple : <i>у новому будинку, з новою подругою</i>.`,
P3:`## Les pronoms personnels à tous les cas
| | я | ти | він | вона | ми | ви | вони |
| nom. | я | ти | він | вона | ми | ви | вони |
| gén. | мене | тебе | його (нього) | її (неї) | нас | вас | їх (них) |
| dat. | мені | тобі | йому | їй | нам | вам | їм |
| acc. | мене | тебе | його (нього) | її (неї) | нас | вас | їх (них) |
| instr. | мною | тобою | ним | нею | нами | вами | ними |
| loc. | (на) мені | (на) тобі | (на) ньому | (на) ній | (на) нас | (на) вас | (на) них |
## Le н- après une préposition
Après une préposition, les formes de la 3<sup>e</sup> personne commencent par н : <i>у нього, до неї, без них, про нього, з ним, на ній</i>. Sans préposition : <i>я бачу його, я знаю її</i>.
## Tournures fréquentes
- <i>У мене є…</i> (j'ai, thème S4), <i>Мене звати…</i> (je m'appelle).
- <i>Мені подобається…</i> (ça me plaît, thème V4), <i>Мені треба…</i> (il me faut).
- <i>Зі мною, з тобою</i> — avec moi, avec toi ; <i>для мене</i> — pour moi.
## Place
Comme en français, le pronom non accentué se place souvent avant le verbe : <i>Я тебе люблю</i> (je t'aime). <i>Я йому скажу</i> (je lui dirai). Après le verbe, il est mis en relief : <i>Я люблю тебе.</i>
! Les correspondances COD / COI changent parfois : дзвонити тобі (t'appeler — « téléphoner à toi »), допомагати йому (l'aider), дякувати вам (vous remercier).`,
P4:`## Formes synthétiques
| Adjectif | Comparatif | Superlatif |
| новий | новіший | найновіший |
| гарний | гарніший | найгарніший |
| дешевий | дешевший | найдешевший |
| короткий | коротший | найкоротший |
| дорогий | дорожчий | найдорожчий |
| великий | більший | найбільший |
| малий | менший | найменший |
| добрий, гарний | кращий (ліпший) | найкращий |
| поганий | гірший | найгірший |
Changements de consonne : г → ж (дорогий → дорожчий), к → ч, з / зь → ж (вузький → вужчий).
## Formes analytiques
<b>більш / менш</b> + adjectif, <b>найбільш / найменш</b> + adjectif : <i>більш зручний, найбільш популярний</i> — comme « plus / le plus » en français. Une seule méthode à la fois : jamais <s>більш старший</s>.
## « Que »
- <b>ніж</b> + nominatif : <i>Брат старший, ніж я.</i>
- <b>за</b> + accusatif : <i>Брат старший за мене.</i>
- <b>від</b> + génitif (oral) : <i>старший від мене.</i>
## Adverbes et intensifs
швидко → швидше → найшвидше ; добре → краще → найкраще. Plus fort : <i>набагато кращий</i> (bien meilleur), <i>значно дешевший.</i> <i>найкращий з усіх</i> — le meilleur de tous.
! <s>самий кращий</s>, <s>самий цікавий</s> sont des calques du russe. L'ukrainien utilise най- : найкращий, найцікавіший.`,
P5:`## свій
<b>свій</b> renvoie au sujet de la proposition et signifie « son propre » :
| Phrase | Sens |
| Олена любить свою роботу. | son propre travail |
| Олена любить її роботу. | le travail d'une autre femme |
| Ми продаємо свою машину. | notre propre voiture (наша машина possible aussi) |
| Візьми свою сумку! | ton propre sac |
Avec я, ти, ми, ви, свій et мій / твій / наш / ваш sont possibles ; avec він, вона, вони, свій est nécessaire pour dire « son propre » — c'est ce qui lève l'ambiguïté du « son » français.
## себе
Le pronom réfléchi n'a pas de nominatif : себе (gén. / acc.), собі (dat. / loc.), собою (instr.) : <i>Він думає про себе</i> (il pense à lui-même). <i>Купи собі щось. Візьми з собою парасольку.</i>
## Indéfinis et négatifs
| quelque- (-сь) | n'importe- (будь-, -небудь) | ne… (ні-) + не |
| хтось | будь-хто, хто-небудь | ніхто не |
| щось | будь-що | нічого не |
| десь | будь-де | ніде не |
| колись | будь-коли | ніколи не |
## весь, кожен
весь, вся, все, всі (tout, toute, tous) : <i>весь день, вся сім'я, всі люди.</i> кожен, кожна, кожне (chaque) : <i>кожен день, кожного дня.</i>
! Utiliser його / її au lieu de свій est l'erreur la plus fréquente : <i>Петро зателефонував своїй мамі</i> — sa propre mère ; <i>його мамі</i> — la mère de quelqu'un d'autre.`,
O1:`## Les lettres qui diffèrent du latin et du russe
| Lettre | Son | Exemple |
| и | [ɪ], entre « i » et « é » | ти, мир |
| і | [i], le « i » français | дім, ліс |
| ї | [ji], comme « yi » | їжа, Україна |
| є | [jé] | є, моє |
| г | [ɦ], un « h » sonore | гора, голова |
| ґ | [g], « g » dur | ґанок, ґудзик |
| щ | [chtch] | що, борщ |
| ь | mouille la consonne | день, сіль |
| ' | sépare, sans mouiller | п'ять, сім'я |
## и ou і
À la lecture : и est un son bref et central ; і est un « i » net. À l'écrit, ils distinguent des mots : <i>дим</i> (fumée) / <i>дім</i> (maison), <i>кит</i> (baleine) / <i>кіт</i> (chat). En cas de doute, vérifie dans un dictionnaire comme Горох.
## L'apostrophe
On écrit une apostrophe devant я, ю, є, ї :
- après les labiales <b>б, п, в, м, ф</b> : п'ять, м'ясо, сім'я, в'язати, б'ю ;
- après <b>р</b> en fin de syllabe : пір'я, бур'ян ;
- après un préfixe terminé par une consonne : від'їзд, з'їсти, під'їзд.
Pas d'apostrophe si une consonne (autre que р) précède la labiale : <i>свято, цвях</i>, ni devant ю / я qui marquent la mouillure : <i>рюкзак, буряк</i>.
## Conseils de prononciation
- Les voyelles ukrainiennes ne sont pas réduites : <i>молоко</i> se dit [mɔlɔˈkɔ], chaque о est net.
- в en fin de mot ou devant une consonne sonne comme un [u] bref : <i>Львів</i> [lʲwiw].
- Pas de voyelles nasales : <i>він</i> se prononce [win], sans nasaliser.
! Au clavier, tape l'apostrophe ' ou ’. Le site accepte les deux dans les exercices.`,
O2:`## у ou в
| Position | Choix | Exemple |
| après une voyelle, devant une consonne | в | Вона в місті. Мама в лікарні. |
| entre deux voyelles | в | Вона в Одесі. Мама в офісі. |
| après une consonne, devant une consonne | у | Брат у місті. |
| en début de phrase, devant une consonne | у | У мене є питання. |
| devant в, ф, льв, св, тв, хв | у | у Львові, у Франції, у вівторок, у світі |
| après une pause (virgule, tiret) devant une consonne | у | Він, у свою чергу, … |
Le même choix vaut pour les mots qui commencent par у / в : <i>учитель / вчитель, удома / вдома, уже / вже.</i>
## і ou й
- <b>й</b> après une voyelle : <i>мама й тато, Петро й Олена</i>.
- <b>і</b> après une consonne, en début de phrase, devant й, є, ю, я, ї : <i>брат і сестра, Олена і Ярослав</i>.
## з, із, зі
- <b>з</b> par défaut : <i>з мамою, з Києва, з другом</i>.
- <b>із</b> entre sifflantes (з, с, ц, ч, ш, щ, ж) : <i>брат із сестрою, ніж із шухляди</i>.
- <b>зі</b> devant з, с, ш, щ + consonne : <i>зі школи, зі мною, зі сходу</i>.
## Pourquoi c'est important
L'euphonie fait partie des règles officielles d'orthographe, et c'est ce qui rend l'ukrainien fluide. À l'oral elle vient naturellement ; à l'écrit, vérifie-la consciemment — comme la liaison et l'élision en français.
! Auto-contrôle rapide : évite deux voyelles ou deux consonnes autour du petit mot. <i>Вона в місті</i> : а-в-м, fluide. <i>Брат у місті</i> : т-у-м, fluide.`,
O3:`## і ↔ о, е
Dans beaucoup de mots, une syllabe fermée (terminée par une consonne) a і, alors que la syllabe ouverte des autres formes a о ou е :
| Fermée (і) | Ouverte (о / е) |
| кінь | коня, коні |
| ніч | ночі |
| сіль | солі |
| стіл | стола, столи |
| піч | печі |
| Київ | Києва |
| шість | шести |
Cela explique aussi des génitifs pluriels : гора → гір, нога → ніг, школа → шкіл.
## г, к, х → з, ц, с
Devant la terminaison -і (datif et locatif des féminins, locatif de certains masculins) :
| Mot | Changement | Exemple |
| нога | г → з | на нозі |
| Прага | г → з | у Празі |
| рука | к → ц | у руці |
| сумка | к → ц | у сумці |
| муха | х → с | на мусі |
| поверх | х → с | на поверсі |
## Changements de consonne dans les verbes
| Infinitif | Forme я | Changement |
| ходити | ходжу | д → дж |
| просити | прошу | с → ш |
| возити | вожу | з → ж |
| платити | плачу | т → ч |
| писати | пишу | с → ш |
| плакати | плачу | к → ч |
## Voyelles qui tombent
Certains о / е disparaissent quand on ajoute une terminaison : <i>день — дня, сон — сну, вітер — вітру, палець — пальця</i>.
! Ces changements sont assez réguliers pour être devinés, mais une entrée de dictionnaire comme « кінь, коня » les montre tout de suite.`,
O4:`## Terminaisons
| Groupe | Nominatif | Vocatif |
| fém. -а | Олена, мама, Ольга | Олено, мамо, Ольго |
| fém. -я après consonne | Галя, Надя | Галю, Надю |
| fém. -ія | Марія, Наталія | Маріє, Наталіє |
| masc. dur | Іван, Тарас, пан, брат | Іване, Тарасе, пане, брате |
| masc. après к, г, х | друг, козак | друже, козаче |
| masc. mou / -й | Андрій, Ігор, вчитель | Андрію, Ігорю, вчителю |
| masc. -о | Петро, Дмитро | Петре, Дмитре |
| diminutifs en -ко, -чик | Сашко, Михасик | Сашку, Михасику |
| пані | пані | пані (inchangé) |
## À l'oral
<i>Мамо, де мій телефон? Андрію, ходи сюди! Дякую, друже!</i> Le nominatif (<i>Андрій, ходи сюди</i>) s'entend dans certaines villes, mais le vocatif est la norme et sonne plus chaleureux.
## Dans les lettres et l'adresse formelle
- <i>Шановний пане Іване!</i> / <i>Шановна пані Олено!</i> — l'équivalent de « Cher Monsieur, Chère Madame », mais avec le prénom.
- Avec le patronyme, les deux mots changent : <i>Іване Петровичу, Олено Миколаївно</i>.
- Dans un e-mail : <i>Доброго дня, пане Андрію!</i>
## Avec des titres
<i>пане директоре, пані професорко, друзі!</i> (au pluriel, vocatif = nominatif).
! Mettre correctement le prénom de quelqu'un au vocatif est l'une des marques de respect pour la langue les plus remarquées.`,
O5:`## Consonnes doubles
- Noms neutres en -ння, -ття, -сся, -ччя, -лля, -ддя, -ззя : <i>знання, життя, волосся, обличчя, весілля, суддя</i>.
- Mais pas au génitif pluriel : <i>знань, питань, облич.</i>
- À la jonction préfixe / racine / suffixe : <i>віддати, беззахисний, оббити, письменник, щоденний, іменний</i>.
- Dans les adjectifs en -нний : <i>осінній, щоденний, туманний</i>.
## Le signe mou
On écrit ь après д, т, з, с, ц, л, н :
- en fin de mot : <i>день, мідь, сіль, кінь</i> ;
- devant о : <i>сьогодні, льон, дзьоб</i> ;
- dans les suffixes -ськ-, -цьк-, -зьк- : <i>український, козацький</i>.
Jamais après ж, ч, ш, щ, р (en fin de mot) : <i>ніч, борщ, лікар.</i>
## Trait d'union
- будь-, -небудь, казна-, хтозна- : <i>будь-хто, хто-небудь, казна-що.</i>
- Mots répétés ou couplés : <i>ледве-ледве, біло-синій.</i>
- пів devant une voyelle ou un nom propre suit des règles particulières — vérifie dans un dictionnaire.
## Majuscules
Comme en français, minuscule pour les jours (понеділок), les mois (січень), les langues (українська мова) et les nationalités (українці, француз) ; pour les fêtes, majuscule seulement au premier mot (Новий рік).
! La meilleure habitude : quand un mot te paraît étrange, cherche-le dans Горох (goroh.pp.ua), qui montre aussi l'accent et toutes les formes.`,
S1:`## Ordre des mots
Les terminaisons montrent qui fait quoi, donc l'ordre des mots est plus libre qu'en français. L'ordre neutre reste sujet – verbe – complément : <i>Олена читає книжку.</i> Placer un mot à la fin le met en relief : <i>Книжку читає Олена</i> (c'est Olena qui le lit).
## Questions
| Type | Exemple |
| fermée avec чи | Чи ти говориш українською? |
| fermée par l'intonation | Ти говориш українською? |
| mot interrogatif | Де ти живеш? Куди ти йдеш? Звідки ти? |
Mots interrogatifs : <b>хто</b> (qui), <b>що</b> (quoi), <b>який</b> (quel), <b>чий</b> (à qui), <b>де</b> (où), <b>куди</b> (vers où), <b>звідки</b> (d'où), <b>коли</b> (quand), <b>чому / навіщо</b> (pourquoi / dans quel but), <b>як</b> (comment), <b>скільки</b> (combien).
## Négation
- <b>не</b> devant le mot nié : <i>Я не знаю. Не я, а він.</i>
- <b>ні</b> = non (réponse) et « ni… ni… » : <i>Ні, дякую. Ні він, ні вона.</i>
- <b>немає / нема</b> + génitif = il n'y a pas de : <i>Тут немає кави.</i>
## Double négation
Comme « ne… personne », « ne… rien » en français, les mots négatifs <b>exigent</b> не avec le verbe :
| Ukrainien | Français |
| Ніхто не прийшов. | Personne n'est venu. |
| Я нічого не знаю. | Je ne sais rien. |
| Він ніколи не запізнюється. | Il n'est jamais en retard. |
| Ми ніде не були. | Nous ne sommes allés nulle part. |
! L'ukrainien garde toujours не, même à l'oral — alors que le français parlé laisse souvent tomber le « ne ».`,
S2:`## Conjonctions principales
| Mot | Sens | Exemple |
| що | que | Я знаю, що він прийде. |
| який / яка / яке / які | qui, que, lequel | людина, яка мені допомогла |
| де, куди, коли | où, quand | місто, де я народився |
| бо, тому що | parce que | Я не прийшов, бо хворів. |
| тому | donc, c'est pourquoi | Я хворів, тому не прийшов. |
| щоб | pour que, pour | Я прийшов, щоб допомогти. |
| якщо | si (réel) | Якщо хочеш, приходь. |
| але, а | mais, alors que | Я хочу, але не можу. |
## який
Il prend le genre et le nombre du nom qu'il reprend, et le cas de sa fonction dans sa proposition — comme « lequel / auquel / duquel » :
- <i>фільм, <b>який</b> я дивився</i> (masc., COD) ;
- <i>дівчина, <b>якій</b> я подзвонив</i> (fém., дзвонити кому — « à laquelle ») ;
- <i>друзі, <b>з якими</b> я живу</i> (pl., instrumental — « avec lesquels »).
## щоб
- Même sujet → infinitif : <i>Я прийшов, щоб допомогти</i> (pour aider).
- Sujet différent → forme du passé : <i>Я хочу, щоб ти прийшов</i> (que tu viennes). <i>Мама просить, щоб ми не запізнювалися.</i>
## Virgules
En ukrainien, chaque subordonnée est séparée par une virgule : <i>Я думаю, що… Людина, яка… Я не знаю, коли…</i> — y compris avant що, où le français n'en met pas.
! тому що et бо veulent dire « parce que » ; бо est plus court et très fréquent. Ne confonds pas тому що (parce que) et тому (c'est pourquoi) : <i>Я хворів, тому не прийшов.</i>`,
S3:`## Nombres et noms
| Nombre | Forme du nom | Exemple |
| 1, 21, 31… (один, одна, одне) | nominatif singulier | один брат, одна книжка, двадцять один студент |
| 2, 3, 4, 22… (два / дві, три, чотири) | nominatif pluriel | два брати, дві сестри, три книжки |
| 5–20, 25… | génitif pluriel | п'ять братів, десять книжок, одинадцять років |
два sert au masculin et au neutre, дві au féminin : <i>два столи, два вікна, дві книжки.</i>
## рік : années et âge
| | |
| 1 | рік |
| 2–4 | роки |
| 5–20 | років |
<i>Мені двадцять один рік. Йому тридцять два роки. Їй сорок п'ять років.</i>
## L'heure
- <b>Котра година?</b> — Перша, друга, третя… (ordinaux, au féminin car година est féminin).
- <b>О котрій?</b> — о першій, о сьомій, о дев'ятій тридцять.
- La demie : <i>пів на третю</i> (2 h 30, mot à mot « une demie vers la troisième »). Quart : <i>чверть на третю</i> (2 h 15), <i>за чверть третя</i> (3 h moins le quart).
## Dates
<i>Сьогодні перше травня.</i> À une date : génitif : <i>першого травня, двадцять четвертого серпня.</i> Années : <i>у дві тисячі двадцять п'ятому році.</i>
! Les nombres font hésiter tout le monde, même les natifs. À l'oral, la forme du nom après le nombre compte plus que la terminaison exacte du nombre.`,
S4:`## Avoir
| Ukrainien | Mot à mot | Sens |
| У мене є брат. | Chez moi il y a un frère. | J'ai un frère. |
| У тебе є машина? | Chez toi il y a une voiture ? | Tu as une voiture ? |
| У нас немає часу. | Chez nous il n'y a pas de temps. | Nous n'avons pas le temps. |
| У нього було двоє дітей. | Chez lui il y avait deux enfants. | Il avait deux enfants. |
Le verbe <b>мати</b> existe aussi (<i>Я маю брата</i>) et il est correct, mais у мене є est plus naturel au quotidien.
## États : datif + adverbe
Là où le français dit « j'ai froid », l'ukrainien dit « à moi il fait froid » : <i>Мені холодно, тобі жарко, нам весело, їй сумно, мені погано, мені нудно.</i> Passé et futur : <i>Мені було холодно. Тобі буде цікаво.</i>
## Âge et prénom
- <i>Скільки тобі років? — Мені двадцять п'ять (років).</i> — « J'ai vingt-cinq ans » : pas de verbe « avoir » ici.
- <i>Як тебе / вас звати? — Мене звати Олена.</i> (« on m'appelle Olena »). Aussi : <i>Моє ім'я Олена.</i>
## Météo et phrases impersonnelles
<i>Надворі тепло. Сьогодні хмарно. Темніє. Пахне кавою.</i> Pas besoin de « il » comme dans « il fait chaud ».
## Besoin
<i>Мені потрібна допомога. Мені потрібен / потрібний час. Мені потрібно / треба йти.</i> Le mot s'accorde avec ce dont on a besoin.
! Traduire « j'ai froid » par <s>Я маю холодно</s> ou <s>Я холодний</s> ne marche pas. Pour les sensations, toujours le datif : <i>Мені холодно.</i>`,
S5:`## Calques à éviter
Beaucoup de tournures copiées du russe sont courantes à l'oral mais comptent comme des fautes en ukrainien standard :
| À éviter | À utiliser | Sens |
| приймати участь | брати участь | participer |
| на протязі | протягом | pendant |
| слідуючий | наступний | suivant, prochain |
| в залежності від | залежно від | selon |
| згідно наказу | згідно з наказом | conformément à l'ordre |
| вибачаюсь | вибачте, перепрошую | pardon |
| давайте зробимо | зробімо | faisons |
| являтися | бути, є | être |
| самий кращий | найкращий | le meilleur |
| на рахунок | щодо | concernant |
| по питанню | з питання | au sujet de |
| співпадати | збігатися | coïncider |
## Ponctuation
- Un tiret entre deux noms quand le verbe « être » manque : <i>Київ — столиця України. Моя мама — лікарка.</i>
- Guillemets « » (et „ “ à l'intérieur) — comme en français, mais sans espaces à l'intérieur.
- Une virgule avant що, який, бо, але, а, щоб, коли, якщо dans les phrases complexes.
- Pas d'espace avant ? ! : ; — contrairement au français.
## Registre
| Neutre | Soutenu |
| треба | необхідно, слід |
| зробити | здійснити, виконати |
| дати | надати |
| через | у зв'язку з |
| Дякую! | Щиро дякую за… |
## Noms de métiers au féminin
L'ukrainien moderne forme volontiers des féminins : <i>лікарка, вчителька, директорка, авторка, менеджерка</i> — comme « autrice, directrice » en français.
! Si une tournure sonne « comme du russe avec des lettres ukrainiennes », vérifie-la. Des sites comme onlinecorrector.com.ua et Ukrainian Lessons recensent les calques les plus fréquents.`
};

/* why topic B builds on topic A: key "B<A" */
const WHY = {
"V2<V1":"le futur avec буду et le futur perfectif reprennent les terminaisons du présent.",
"V3<V2":"l'aspect se choisit surtout au passé et au futur, il faut donc connaître ces deux temps.",
"V4<V3":"les verbes en -ся forment aussi des paires d'aspect : вчитися / навчитися.",
"V4<P3":"подобатися demande les pronoms au datif мені, тобі, йому.",
"V5<V4":"les participes se forment à partir des verbes, y compris pronominaux.",
"V5<P2":"les participes passifs se déclinent comme des adjectifs.",
"M1<V1":"l'impératif se forme sur le radical du présent.",
"M2<V2":"les verbes de mouvement se pratiquent surtout au passé : ходив, їздив, йшов.",
"M2<N2":"куди ? demande l'accusatif : йти в школу, їхати на роботу.",
"M3<M2":"les préfixes s'ajoutent à йти / ходити et їхати / їздити.",
"M3<V3":"les verbes de mouvement préfixés vont par paires perfectif / imperfectif.",
"M4<V3":"le conditionnel = passé + би, souvent d'un verbe perfectif.",
"M5<M4":"la modalité polie (хотів би, могли б) se combine avec треба, можна, варто.",
"M5<S4":"треба, можна, варто suivent le même modèle au datif que мені холодно.",
"N2<N1":"les terminaisons de cas dépendent du genre, qu'il faut donc connaître d'abord.",
"N3<N2":"l'accusatif des masculins animés est identique au génitif.",
"N4<N3":"l'instrumental complète les cas principaux après le génitif.",
"N5<N4":"le datif boucle le système des cas.",
"N5<P3":"les datifs les plus fréquents sont des pronoms : мені, тобі, йому.",
"P2<P1":"les adjectifs s'accordent comme les possessifs : мій новий, моя нова.",
"P2<N1":"l'accord dépend du genre et du nombre du nom.",
"P3<P2":"les pronoms aux cas vont de pair avec les adjectifs aux cas.",
"P3<N2":"мене, тебе, його sont les premières formes d'accusatif qu'on rencontre.",
"P4<P2":"les comparatifs se forment à partir des adjectifs.",
"P5<P3":"свій et себе se déclinent comme les autres pronoms.",
"O2<O1":"l'euphonie suppose de savoir quelles lettres sont des voyelles et des consonnes.",
"O3<O2":"dans les deux cas, il s'agit de sons qui changent aux frontières et à l'intérieur des mots.",
"O3<N2":"le -і du locatif déclenche г, к, х → з, ц, с : у руці.",
"O4<O3":"les terminaisons du vocatif montrent les mêmes alternances : друг → друже.",
"O4<N1":"la terminaison du vocatif dépend du genre.",
"O5<O4":"les détails d'orthographe complètent la ligne sons et orthographe.",
"S1<V1":"la négation et les questions s'organisent autour d'un verbe conjugué.",
"S2<S1":"les phrases complexes relient des phrases simples.",
"S3<S2":"les nombres servent dans les descriptions et les projets plus longs.",
"S3<N3":"5 et plus demande le génitif pluriel.",
"S4<S3":"l'âge (мені 25 років) combine les nombres et le datif.",
"S4<P3":"у мене, мені, мене звати utilisent les pronoms aux cas.",
"S5<S4":"le travail sur le style vient quand les structures du quotidien sont en place."
};

/* recommended order of all 30 topics; within a stage, prerequisites come first */
const ROUTE = ["V1","N1","P1","O1","S1","M1", "V2","N2","P2","O2","S2","M2", "V3","N3","P3","O3","S3","M3", "V4","N4","P4","O4","S4","M4", "V5","N5","P5","O5","S5","M5"];
/* fix-the-mistake answers in these topics also check spacing */
const STRICT = [];
/* localStorage key prefix: progress is kept per target language */
const STORE = "ukmap-";

export const content = { DOM, PHASES, T, EX, LONG, WHY, SOURCES, ROUTE, STRICT, STORE };
