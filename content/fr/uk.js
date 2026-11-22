/* eslint-disable */
// French grammar map content written for Ukrainian speakers (native "uk", target "fr").
// Field "gloss" is the short name of a section/topic in the reader's language.
// Explanations (LONG) use a tiny markup: "## heading", "| table |" (1st row = header),
// "- list item", "! note", anything else = paragraph.

import { SOURCES } from "./sources";

const DOM = {
  V:{fr:"Indicatif",gloss:"теперішній і минулі",c:"--l-v"},
  M:{fr:"Futur & modes",gloss:"майбутнє і способи",c:"--l-m"},
  N:{fr:"Groupe nominal",gloss:"іменна група",c:"--l-n"},
  P:{fr:"Pronoms",gloss:"займенники",c:"--l-p"},
  O:{fr:"Orthographe",gloss:"граматична орфографія",c:"--l-o"},
  S:{fr:"Phrase",gloss:"речення і пунктуація",c:"--l-s"}
};

const PHASES = [
  {n:1,name:"Фундамент",goal:"Прості речення без помилок: правильні кінцівки présent, артиклі, займенники-додатки й перші омофони.",task:"Опиши свій звичайний день у 10–12 реченнях (présent). Потім підкресли кожне a/à, et/est, son/sont і перевір тестом заміни."},
  {n:2,name:"Розповідь",goal:"Розповідати про минуле й майбутнє: passé composé, futur, y/en, французька пунктуація.",task:"Лист другові про минулі вихідні й плани на наступні (150 слів). Пробіли перед : ; ! ? і лапки « »."},
  {n:3,name:"Опис і зв'язність",goal:"Довші речення: imparfait проти passé composé, qui/que/où/dont, зв'язки, звук [e] на письмі.",task:"Спогад з дитинства (200 слів): imparfait для тла, passé composé для подій, мінімум два dont і три логічні зв'язки."},
  {n:4,name:"Нюанси",goal:"Subjonctif, умовні речення з si, узгодження participe з avoir, подвійні займенники.",task:"Офіційний лист-прохання (200 слів): conditionnel ввічливості, 3 речення з il faut que / pour que / bien que, одне речення з si."},
  {n:5,name:"Стиль",goal:"Письмова мова: непряма мова, auquel/duquel, номіналізація, gérondif, складні узгодження.",task:"Есе-аргументація на 300 слів + переказ короткої розмови в непрямій мові. Перевір кожен participe passé."}
];

const T = [
/* ---------- V ---------- */
{id:"V1",d:"V",p:1,fr:"Présent",gloss:"теперішній",t:"Le présent de l'indicatif",
 s:"Основа всього письма. Форми звучать однаково, а пишуться по-різному, тому саме тут найбільше помилок на папері.",
 r:["I група (-er): <b>-e, -es, -e, -ons, -ez, -ent</b>. Закінчення -ent у ils/elles не читається, але пишеться завжди.","II група (finir): <b>-is, -is, -it, -issons, -issez, -issent</b>.","III група: переважно <b>-s, -s, -t</b>. Дієслова на -dre зберігають d: il prend, il répond.","pouvoir, vouloir, valoir: <b>-x, -x, -t</b> (je peux, tu veux, il veut)."],
 e:[["Ils parlent trop vite.","Вони говорять надто швидко."],["Elle finit son travail à six heures.","Вона закінчує роботу о шостій."],["Nous commençons, nous mangeons.","ç та e перед -ons зберігають вимову."]],
 x:["Il prends le train.","Il prend le train.","3-тя особа однини: -t або -d, ніколи -s."],
 q:[["Tu ___ (vouloir) venir ?",["veux","veut","veus"],0,"vouloir і pouvoir у je/tu закінчуються на -x."],["Ils ___ (finir) tard.",["finent","finissent","finisent"],1,"II група має суфікс -iss- у множині."]],pre:[]},
{id:"V2",d:"V",p:2,fr:"Passé composé",gloss:"минулий складений",t:"Le passé composé",
 s:"Головний час розповіді. Для письма дві складності: вибір avoir чи être і правильна форма participe passé.",
 r:["Більшість дієслів з <b>avoir</b>: j'ai mangé, elle a pris.","З <b>être</b>: дієслова руху й зміни стану (aller, venir, arriver, partir, entrer, sortir, monter, descendre, naître, mourir, rester, tomber, devenir, revenir…) і всі займенникові (se lever).","З être participe узгоджується з підметом: elle est partie, ils sont venus.","Participe: -er → -é, -ir → -i; III групу треба вчити: pris, mis, fait, dit, écrit, vu, lu, su, pu, eu, été."],
 e:[["Elle est arrivée hier soir.","Вона приїхала вчора ввечері."],["Nous avons pris le train de 8 h.","Ми сіли на потяг о 8-й."],["Ils se sont levés tôt.","Вони рано встали."]],
 x:["J'ai allé au cinéma.","Je suis allé(e) au cinéma.","aller — дієслово руху, тому з être."],
 q:[["Elles ___ en retard.",["ont arrivé","sont arrivées","sont arrivé"],1,"arriver — з être, тож participe узгоджується: жін. рід, множина."],["J'ai ___ une lettre.",["écris","écrit","écrite"],1,"Participe від écrire — écrit. COD стоїть після дієслова, тому без узгодження."]],pre:["V1"]},
{id:"V3",d:"V",p:3,fr:"Imparfait",gloss:"тло проти події",t:"Imparfait ou passé composé ?",
 s:"Imparfait — тло, опис, звичка. Passé composé — подія, що сталася. На письмі ще й кінцівки: -ais, -ais, -ait, -ions, -iez, -aient.",
 r:["Утворення: основа від nous у présent (nous finiss-ons) + <b>-ais, -ais, -ait, -ions, -iez, -aient</b>. Виняток: être → j'étais.","Imparfait: опис (il faisait beau), стан, звичка в минулому (chaque été, nous allions…), дія в процесі.","Passé composé: конкретна завершена подія, часто з soudain, un jour, hier, trois fois.","Разом: <i>Je lisais quand le téléphone a sonné.</i>"],
 e:[["Quand j'étais petit, je jouais au foot tous les jours.","Коли я був малим, я щодня грав у футбол."],["Il pleuvait, alors nous sommes restés à la maison.","Ішов дощ, тож ми лишилися вдома."]],
 x:["Hier, il a fait beau et je me promenais trois heures.","Hier, il faisait beau et je me suis promené trois heures.","Погода — тло (imparfait); прогулянка з чіткою тривалістю — подія (passé composé)."],
 q:[["Je ___ la télé quand tu as appelé.",["ai regardé","regardais","regardait"],1,"Дія в процесі, яку перервали, — imparfait; je → -ais."],["Ils ___ souvent à la mer.",["sont allés","allaient","allait"],1,"souvent = звичка, тобто imparfait; ils → -aient."]],pre:["V2"]},
{id:"V4",d:"V",p:4,fr:"Plus-que-parfait",gloss:"передминулий",t:"Le plus-que-parfait",
 s:"Минуле в минулому: дія, що сталася ще раніше за іншу минулу. Без нього розповідь на письмі звучить пласко й плутано.",
 r:["avoir або être в imparfait + participe: j'avais fini, elle était partie.","Ті самі правила вибору avoir/être і узгодження, що й у passé composé.","Типові маркери: déjà, parce que, quand…, ce jour-là."],
 e:[["Quand je suis arrivé, le film avait déjà commencé.","Коли я прийшов, фільм уже почався."],["Elle m'a dit qu'elle était déjà venue.","Вона сказала, що вже приходила."]],
 x:["Quand je suis arrivé, ils sont déjà partis.","Quand je suis arrivé, ils étaient déjà partis.","Вони пішли раніше за мій прихід — plus-que-parfait."],
 q:[["Il a réussi parce qu'il ___ beaucoup.",["a travaillé","avait travaillé","travaillait"],1,"Праця була раніше за успіх."],["Elle était fatiguée : elle ___ toute la nuit.",["avait dansé","était dansée","a dansée"],0,"danser — з avoir, COD немає, тож без узгодження."]],pre:["V3"]},
{id:"V5",d:"V",p:5,fr:"Passé simple",gloss:"літературний",t:"Le passé simple",
 s:"Час літератури й історичних текстів. Писати ним самому не обов'язково, але читати й розпізнавати треба.",
 r:["-er: <b>-ai, -as, -a, -âmes, -âtes, -èrent</b> (il parla).","-ir / -re: <b>-is, -is, -it, -îmes, -îtes, -irent</b> (il finit, il prit).","Багато інших на -us: il fut, il eut, il put, il voulut; venir → il vint.","Пастка: il finit — і présent, і passé simple; розрізняй за контекстом."],
 e:[["Il ouvrit la porte et sortit.","Він відчинив двері й вийшов."],["Ils furent très surpris.","Вони дуже здивувалися."]],
 x:["Hier, je mangeai une pizza avec Paul.","Hier, j'ai mangé une pizza avec Paul.","У листі чи повідомленні — passé composé. Passé simple лише в літературній оповіді."],
 q:[["« Ils vinrent » — це:",["venir, passé simple","voir, passé simple","vendre, présent"],0,"venir → je vins, il vint, ils vinrent."],["Passé simple від aller (il):",["il alla","il allait","il allat"],0,"aller поводиться як дієслово на -er: il alla."]],pre:["V4"]},
/* ---------- M ---------- */
{id:"M1",d:"M",p:1,fr:"Impératif",gloss:"наказовий",t:"L'impératif",
 s:"Накази, поради, інструкції. Головна пастка на письмі: зникає -s у дієсловах на -er.",
 r:["Три форми без займенника: Parle ! Parlons ! Parlez !","Дієслова на -er (а також aller, ouvrir, offrir) у формі tu — <b>без -s</b>: Mange ! Va !","Але -s повертається перед y та en: Vas-y ! Manges-en !","Нерегулярні: sois/soyez, aie/ayez, sache/sachez, veuillez."],
 e:[["Ferme la porte, s'il te plaît.","Зачини двері, будь ласка."],["Ne t'inquiète pas !","Не хвилюйся!"],["Veuillez trouver ci-joint mon CV.","Формула офіційного листа: «додаю моє резюме»."]],
 x:["Regardes ce film !","Regarde ce film !","Дієслово на -er: у наказовому для tu -s немає."],
 q:[["___ au lit ! (aller, tu)",["Vas","Va","Allez"],1,"aller у наказовому: Va !"],["Як правильно?",["Parle-en","Parles-en"],1,"Перед en та y додаємо -s для милозвучності."]],pre:["V1"]},
{id:"M2",d:"M",p:2,fr:"Futur",gloss:"майбутній",t:"Futur simple et futur proche",
 s:"Дві форми майбутнього. Futur simple будується на інфінітиві, тож головне — вивчити нерегулярні основи.",
 r:["Futur proche: aller + інфінітив (je vais partir), розмовне й близьке.","Futur simple: інфінітив + <b>-ai, -as, -a, -ons, -ez, -ont</b>. Дієслова на -re втрачають e: prendre → je prendrai.","Нерегулярні основи: ser-, aur-, ir-, fer-, pourr-, voudr-, devr-, viendr-, verr-, saur-, faudr-.","Після quand про майбутнє — теж futur: <i>Quand je serai à Paris, je t'appellerai.</i>"],
 e:[["Demain, il fera beau.","Завтра буде гарна погода."],["Quand tu auras le temps, tu m'écriras.","Коли матимеш час, напишеш мені."]],
 x:["Quand j'arrive à Paris, je t'appellerai.","Quand j'arriverai à Paris, je t'appellerai.","Як і в українській («коли приїду»), після quand про майбутнє — futur."],
 q:[["Nous ___ (voir) demain.",["voirons","verrons","verons"],1,"Нерегулярна основа verr-."],["Яке написання правильне?",["J'appellerai","J'appelerai"],0,"appeler подвоює l: j'appelle → j'appellerai."]],pre:["V1"]},
{id:"M3",d:"M",p:3,fr:"Conditionnel",gloss:"умовний",t:"Le conditionnel présent",
 s:"Ввічливість, побажання, гіпотеза. На письмі критично не плутати з futur: -rai і -rais звучать майже однаково.",
 r:["Основа futur + закінчення imparfait: <b>-ais, -ais, -ait, -ions, -iez, -aient</b>.","Ввічливість: Je voudrais…, Pourriez-vous… ?","Порада: Tu devrais dormir plus.","Тест для je: підстав nous. nous ferons (futur) → je ferai; nous ferions (cond.) → je ferais."],
 e:[["J'aimerais vous rencontrer.","Я хотів би з вами зустрітися."],["Pourriez-vous m'envoyer le document ?","Чи не могли б ви надіслати мені документ?"]],
 x:["Je voudrai un café, s'il vous plaît.","Je voudrais un café, s'il vous plaît.","Ввічливе прохання — conditionnel, з -s."],
 q:[["Si j'avais le temps, je ___ plus.",["lirai","lirais","lisais"],1,"si + imparfait → conditionnel."],["Demain je te ___ sans faute.",["téléphonerai","téléphonerais"],0,"Впевнена дія в майбутньому — futur. Тест: nous téléphonerons."]],pre:["M2","V3"]},
{id:"M4",d:"M",p:4,fr:"Subjonctif",gloss:"суб'єктивний спосіб",t:"Le subjonctif présent",
 s:"Спосіб бажання, необхідності, емоцій і сумніву. У письмовій мові трапляється постійно.",
 r:["Основа від ils у présent (ils finiss-ent) + <b>-e, -es, -e, -ions, -iez, -ent</b>.","Тригери: il faut que, vouloir que, pour que, bien que, avant que, à moins que, être content que, douter que.","Нерегулярні: être (que je sois), avoir (que j'aie), aller (que j'aille), faire (que je fasse), pouvoir (que je puisse), savoir (que je sache).","Не після espérer que, penser que (у ствердженні) та après que: там індикатив."],
 e:[["Il faut que tu viennes.","Треба, щоб ти прийшов."],["Bien qu'il soit tard, je continue.","Хоч і пізно, я продовжую."],["Je veux qu'elle fasse attention.","Я хочу, щоб вона була уважна."]],
 x:["Il faut que je vais à la banque.","Il faut que j'aille à la banque.","Після il faut que — subjonctif."],
 q:[["Je suis content que tu ___ là.",["es","sois","soit"],1,"Емоція → subjonctif; tu → sois."],["J'espère qu'il ___ beau demain.",["fasse","fera"],1,"espérer que вимагає індикатива."]],pre:["M3","V1"]},
{id:"M5",d:"M",p:5,fr:"Concordance",gloss:"непряма мова",t:"Concordance des temps et discours indirect",
 s:"Як переказати чужі слова в минулому. Обов'язкове для листів, звітів, есе.",
 r:["Якщо головне дієслово в минулому (il a dit que…), часи зсуваються:","présent → imparfait; passé composé → plus-que-parfait; futur → conditionnel.","Слова часу теж: demain → le lendemain, hier → la veille, ici → là.","Питання: Est-ce que tu viens ? → Il m'a demandé <b>si</b> je venais. Qu'est-ce que → <b>ce que</b>."],
 e:[["Elle a dit : « Je suis fatiguée. » → Elle a dit qu'elle était fatiguée.","Пряма мова → непряма."],["Il m'a demandé ce que je ferais le lendemain.","Він спитав, що я робитиму наступного дня."]],
 x:["Il m'a demandé qu'est-ce que je voulais.","Il m'a demandé ce que je voulais.","У непрямому питанні qu'est-ce que стає ce que."],
 q:[["« Je viendrai. » → Il a dit qu'il ___.",["viendra","viendrait","venait"],1,"futur → conditionnel."],["« Tu as fini ? » → Elle m'a demandé ___ j'avais fini.",["si","que","est-ce que"],0,"Загальне питання вводиться через si."]],pre:["M4","V4"]},
/* ---------- N ---------- */
{id:"N1",d:"N",p:1,fr:"Articles",gloss:"артиклі",t:"Les articles : le, un, du",
 s:"В українській артиклів немає, тому їх пропускають або плутають. На письмі це видно одразу.",
 r:["Означений le/la/l'/les: відоме або загальне (J'aime le café).","Неозначений un/une/des: одне з багатьох.","Партитивний du/de la/de l': невизначена кількість (Je bois du café).","Після заперечення й кількості — <b>de</b>: pas de café, beaucoup de gens. Злиття: à + le = au, de + les = des."],
 e:[["Je mange du pain, mais je n'aime pas le pain blanc.","Я їм хліб, але не люблю білий."],["Il n'a pas d'enfants.","У нього немає дітей."],["Beaucoup de gens parlent anglais.","Багато людей говорять англійською."]],
 x:["Je n'ai pas des amis ici.","Je n'ai pas d'amis ici.","Після pas неозначений і партитивний артиклі стають de."],
 q:[["Elle ne boit jamais ___ alcool.",["de l'","d'","du"],1,"Заперечення → de (d' перед голосною)."],["Je vais ___ marché.",["à le","au","du"],1,"à + le = au."]],pre:[]},
{id:"N2",d:"N",p:2,fr:"Genre & pluriel",gloss:"рід і число",t:"Genre et pluriel des noms",
 s:"Рід і множина. Більшість множинних закінчень не вимовляються, тому на письмі їх легко загубити.",
 r:["Множина: +s; -eau/-eu → <b>-x</b> (bateaux, jeux); -al → <b>-aux</b> (journal → journaux), але bals, festivals.","-ail → -ails, крім travail → travaux.","Рід за закінченням: -tion, -té, -ure, -ence зазвичай жіночий; -ment, -age, -isme — чоловічий.","Пастки: le problème, le système, le musée (чол.); la plage, l'image (жін.)."],
 e:[["Les chevaux et les animaux du village.","Коні й тварини села."],["C'est un nouveau problème.","Це нова проблема."]],
 x:["les journals locals","les journaux locaux","-al → -aux і в іменниках, і в прикметниках."],
 q:[["Множина від « un travail »:",["des travails","des travaux"],1,"travail — виняток: travaux."],["Яке слово жіночого роду?",["fromage","liberté","message"],1,"-té → жіночий рід."]],pre:["N1"]},
{id:"N3",d:"N",p:3,fr:"Adjectifs",gloss:"узгодження",t:"Accord et place de l'adjectif",
 s:"Прикметник узгоджується з іменником у роді й числі. Більшість стоїть після іменника.",
 r:["Жіночий рід: +e; -if → -ive, -eux → -euse, -er → -ère, -el → -elle, -en → -enne.","Перед іменником короткі часті (BAGS): beauté (beau, joli), âge (jeune, vieux), bonté (bon, mauvais), size (grand, petit).","beau, nouveau, vieux перед голосною: un bel homme, un vieil ami.","Значення може змінюватися: un grand homme (великий) / un homme grand (високий)."],
 e:[["une voiture neuve et chère","нова й дорога машина"],["de vieilles maisons blanches","старі білі будинки (de перед прикметником у множині)"]],
 x:["Elles sont content.","Elles sont contentes.","Узгодження: жіночий рід + множина."],
 q:[["une ___ idée (bon)",["bon","bonne","bonnes"],1,"-on → -onne."],["un ___ arbre (vieux)",["vieux","vieil","vieille"],1,"Перед голосною в чол. роді — vieil."]],pre:["N2"]},
{id:"N4",d:"N",p:4,fr:"Comparaison",gloss:"порівняння",t:"Comparatif et superlatif",
 s:"Порівняння й найвищий ступінь. Головна пастка — meilleur проти mieux.",
 r:["plus / moins / aussi + прикм. + que: plus grand que.","Superlatif: le/la/les plus + прикм.; після іменника артикль повторюється: la ville la plus belle.","bon → <b>meilleur</b> (прикметник), bien → <b>mieux</b> (прислівник).","Кількість: plus de / autant de / moins de + іменник."],
 e:[["C'est le meilleur restaurant du quartier.","Це найкращий ресторан району."],["Elle parle mieux que moi.","Вона говорить краще за мене."]],
 x:["Il chante plus bien que moi.","Il chante mieux que moi.","bien → mieux, не plus bien."],
 q:[["Ce gâteau est ___ que l'autre.",["mieux","meilleur","plus bon"],1,"Описує іменник (gâteau) → прикметник meilleur."],["Elle travaille ___ heures que lui.",["autant d'","aussi d'"],0,"З іменником — autant de."]],pre:["N3"]},
{id:"N5",d:"N",p:5,fr:"Nominalisation",gloss:"письмовий стиль",t:"La nominalisation",
 s:"Перетворення дієслів і прикметників на іменники — ознака зрілого письма в листах, звітах і есе.",
 r:["Дієслово → іменник: augmenter → l'augmentation, choisir → le choix, partir → le départ.","Прикметник → іменник: rapide → la rapidité, fort → la force.","Дозволяє стиснути: Parce que les prix ont augmenté → En raison de l'augmentation des prix.","Не зловживай: одна-дві номіналізації на речення."],
 e:[["Après la publication du rapport, …","Після публікації звіту…"],["La réduction des coûts est prioritaire.","Скорочення витрат — пріоритет."]],
 x:["l'augmentement des prix","l'augmentation des prix","Суфікси не вгадуються: перевіряй у словнику."],
 q:[["choisir → ___",["le choisissement","le choix","la choisie"],1,"choisir → le choix."],["Parce qu'il est parti → ___",["En raison de son départ","En raison de son partir"],0,"partir → le départ."]],pre:["N4","S3"]},
/* ---------- P ---------- */
{id:"P1",d:"P",p:1,fr:"le · lui",gloss:"прямий і непрямий",t:"Pronoms COD et COI",
 s:"le/la/les замінюють прямий додаток, lui/leur — непрямий (з à). Вибір залежить від французького дієслова, а не від українського відмінка.",
 r:["COD (без прийменника): voir qqn → je <b>le</b> vois.","COI (à + особа): parler à qqn → je <b>lui</b> parle; так само téléphoner à, demander à, répondre à.","Місце: перед дієсловом (je le vois), у passé composé — перед допоміжним (je l'ai vu).","З інфінітивом — перед інфінітивом: Je vais le voir."],
 e:[["Tu connais Marie ? — Oui, je la connais.","Ти знаєш Марі? — Так, знаю її."],["J'écris à mes parents → Je leur écris.","Пишу батькам → Пишу їм."]],
 x:["Je le téléphone ce soir.","Je lui téléphone ce soir.","téléphoner À qqn → непрямий додаток."],
 q:[["Tu aides ta sœur ? — Oui, je ___ aide.",["l'","lui"],0,"aider qqn — прямий додаток (хоч в українській «допомагаю їй»)."],["Il répond à ses clients → Il ___ répond.",["les","leur","leurs"],1,"COI у множині — leur, без -s."]],pre:["V1"]},
{id:"P2",d:"P",p:2,fr:"y · en",gloss:"y і en",t:"Les pronoms y et en",
 s:"Два займенники, яких немає в українській. Без них речення важкі й повторюються.",
 r:["<b>en</b> замінює de + щось: J'en veux (du café), J'en viens (de Paris), J'en parle (de ce problème).","en з кількістю: J'en ai trois. Il y en a beaucoup.","<b>y</b> замінює à + річ чи місце: J'y vais. J'y pense (à ce projet).","Для осіб: à → lui/leur; de → de lui / d'elle. Je pense à elle."],
 e:[["Tu as des frères ? — Oui, j'en ai deux.","У тебе є брати? — Так, двоє."],["Tu vas à Lyon ? — Oui, j'y vais demain.","Їдеш до Ліона? — Так, завтра."]],
 x:["Des frères ? J'ai deux.","Des frères ? J'en ai deux.","Після числа без іменника обов'язково en."],
 q:[["Tu t'occupes du dossier ? — Oui, je m'___ occupe.",["y","en"],1,"s'occuper DE → en."],["Tu as réfléchi à ma proposition ? — Oui, j'___ ai réfléchi.",["y","en","lui"],0,"réfléchir À + річ → y."]],pre:["P1","N1"]},
{id:"P3",d:"P",p:3,fr:"qui · que · dont",gloss:"відносні",t:"Pronoms relatifs simples",
 s:"Відносні займенники зшивають короткі речення в довгі. dont — найчастіша письмова пастка.",
 r:["<b>qui</b> — підмет: L'homme qui parle.","<b>que</b> (qu') — прямий додаток: Le livre que je lis.","<b>où</b> — місце і час: la ville où j'habite, le jour où il est parti.","<b>dont</b> замінює de + …: le livre dont je parle (parler de), la fille dont le père est médecin."],
 e:[["C'est le film dont tout le monde parle.","Це фільм, про який усі говорять."],["Le jour où je suis arrivé, il pleuvait.","Того дня, коли я приїхав, ішов дощ."]],
 x:["C'est la chose que j'ai besoin.","C'est la chose dont j'ai besoin.","avoir besoin DE → dont."],
 q:[["La maison ___ je rêve.",["que","dont","où"],1,"rêver DE → dont."],["L'année ___ nous nous sommes rencontrés.",["où","quand","que"],0,"Для часу — où, не quand."]],pre:["P2","S1"]},
{id:"P4",d:"P",p:4,fr:"Ordre",gloss:"два займенники",t:"Double pronoms : l'ordre",
 s:"Коли в реченні два займенники, порядок жорсткий. В ствердному імперативі він інший.",
 r:["Порядок: me/te/se/nous/vous → le/la/les → lui/leur → y → en.","Il me le donne. Je le lui donne. Je leur en parle. Il y en a.","Ствердний імператив: дієслово-le-moi/lui-y-en: Donne-le-moi ! Donne-m'en !","Заперечний імператив — звичайний порядок: Ne me le donne pas."],
 e:[["Tu as montré les photos à Paul ? — Oui, je les lui ai montrées.","Показав фото Полю? — Так, показав їх йому."],["Envoie-la-moi.","Надішли її мені."]],
 x:["Je lui le donne.","Je le lui donne.","le/la/les завжди перед lui/leur."],
 q:[["Il ___ envoie. (le paquet, à moi)",["me le","le me"],0,"me перед le."],["Donne-___ ! (du pain, à moi)",["m'en","moi-en","en-moi"],0,"moi + en → m'en."]],pre:["P2","M1"]},
{id:"P5",d:"P",p:5,fr:"lequel",gloss:"auquel, duquel",t:"Pronoms relatifs composés",
 s:"Відносні займенники після прийменників: auquel, duquel, sur lequel, pour laquelle. Типова ознака письмової мови.",
 r:["Прийменник + lequel / laquelle / lesquels / lesquelles для речей: la table sur laquelle…","à + lequel = <b>auquel</b>, auxquels, auxquelles; à laquelle.","de + lequel = <b>duquel</b> після складених прийменників: près duquel, à côté de laquelle.","Для осіб частіше qui: la personne à qui je parle."],
 e:[["Le projet auquel je travaille est urgent.","Проєкт, над яким я працюю, терміновий."],["La raison pour laquelle je vous écris…","Причина, з якої я вам пишу…"]],
 x:["La raison pour qu'il est parti…","La raison pour laquelle il est parti…","Після прийменника для речі — lequel/laquelle."],
 q:[["Les questions ___ tu as répondu.",["auxquelles","auquel","lesquelles"],0,"répondre À + questions (жін., мн.) → auxquelles."],["Le parc près ___ j'habite.",["duquel","dont","lequel"],0,"Після складеного прийменника près de — duquel, не dont."]],pre:["P3"]},
/* ---------- O ---------- */
{id:"O1",d:"O",p:1,fr:"a/à · et/est",gloss:"омофони I",t:"Homophones grammaticaux (1)",
 s:"Слова звучать однаково, а пишуться по-різному. Найчастіші помилки навіть у французів. Для кожного є простий тест заміни.",
 r:["<b>a</b> (avoir) / <b>à</b> (прийменник): заміни на avait. Il a faim → il avait faim ✓.","<b>et</b> (і) / <b>est</b> (être): заміни на était.","<b>son</b> (його) / <b>sont</b> (être): заміни на étaient.","<b>on</b> / <b>ont</b> (avoir): заміни на avaient. <b>ou</b> (або) / <b>où</b> (де): заміни на ou bien."],
 e:[["Il est à Paris et il a froid.","Він у Парижі, і йому холодно."],["Ils ont dit qu'on partait.","Вони сказали, що ми їдемо."],["Où vas-tu, à Lyon ou à Nice ?","Куди ти: до Ліона чи до Ніцци?"]],
 x:["Il à un chien et sa maison et grande.","Il a un chien et sa maison est grande.","Тести: il avait un chien; sa maison était grande."],
 q:[["Ils ___ partis avec ___ frère.",["son / sont","sont / son","sont / sont"],1,"Ils étaient partis → sont; «його брат» → son."],["Tu viens ___ pas ?",["ou","où"],0,"«або ні» → ou (ou bien)."]],pre:["V1"]},
{id:"O2",d:"O",p:2,fr:"ces/ses/c'est",gloss:"омофони II",t:"Homophones grammaticaux (2)",
 s:"Друга хвиля омофонів: ces/ses/c'est/s'est/sait, ce/se, la/là/l'a, peu/peut, quel/qu'elle.",
 r:["<b>ces</b> (ці) / <b>ses</b> (його/її, мн.) / <b>c'est</b> (це є) / <b>s'est</b> (займенникове в PC) / <b>sait</b> (savoir).","<b>ce</b> + іменник або ce que; <b>se</b> — перед дієсловом (se laver).","<b>la</b> (артикль) / <b>là</b> (там) / <b>l'a</b> (→ l'avait).","<b>peu</b> (мало) / <b>peut</b> (→ pouvait). <b>quel(le)</b> + іменник / <b>qu'elle</b> (que + elle)."],
 e:[["C'est Marie qui s'est trompée.","Це Марі помилилася."],["Il sait que ses amis sont là.","Він знає, що його друзі тут."]],
 x:["Ses une bonne idée, mais il ses trompé.","C'est une bonne idée, mais il s'est trompé.","«це є» → c'est; se tromper у PC → s'est."],
 q:[["Elle ___ levée tôt.",["c'est","s'est","sait"],1,"se lever → elle s'est levée."],["Je crois ___ viendra.",["quelle","qu'elle"],1,"que + elle; тест: qu'il viendra."]],pre:["O1","P1"]},
{id:"O3",d:"O",p:3,fr:"-é / -er / -ez",gloss:"звук [e] на письмі",t:"é, er, ez, ais, ait ?",
 s:"Звук [e] на кінці дієслова пишеться п'ятьма способами. Найчастіша письмова помилка взагалі.",
 r:["Після іншого дієслова чи прийменника — інфінітив <b>-er</b>: je vais manger, pour parler.","Після avoir/être — participe <b>-é(e)(s)</b>: j'ai mangé.","Тест: підстав дієслово III групи (vendre / vendu). Je vais vendre → -er; j'ai vendu → -é.","<b>-ez</b> — vous: vous parlez. <b>-ais / -ait</b> — imparfait: je parlais, il parlait."],
 e:[["Il faut acheter du pain ; j'ai oublié d'en acheter hier.","Треба купити хліба; я вчора забув купити."],["Vous allez aimer ce film.","Вам сподобається цей фільм."]],
 x:["Je vais te téléphoné demain.","Je vais te téléphoner demain.","Тест: je vais te vendre → інфінітив."],
 q:[["Il a ___ toute la journée.",["travaillé","travailler","travaillez"],0,"Після avoir — participe; тест: il a vendu."],["Elle veut ___ à Paris.",["habité","habiter","habitait"],1,"Після vouloir — інфінітив; тест: elle veut vendre."]],pre:["V2"]},
{id:"O4",d:"O",p:4,fr:"Accord du PP",gloss:"avoir + COD",t:"Accord du participe passé avec avoir",
 s:"Правило, яке видає грамотність: participe з avoir узгоджується з прямим додатком, лише якщо той стоїть ПЕРЕД дієсловом.",
 r:["COD після дієслова — без узгодження: J'ai acheté des pommes.","COD перед дієсловом (le/la/les, que, combien de, quel…) — узгодження: Je les ai achetées. Les pommes que j'ai achetées.","З en — без узгодження: Des pommes ? J'en ai acheté.","Метод: спитай «що?» після дієслова і подивись, де стоїть відповідь."],
 e:[["La lettre que tu m'as écrite.","Лист, який ти мені написав."],["Quelles villes as-tu visitées ?","Які міста ти відвідав?"]],
 x:["Les photos que j'ai pris sont belles.","Les photos que j'ai prises sont belles.","que = les photos (жін., мн.) стоїть перед дієсловом."],
 q:[["Ta robe ? Je l'ai ___ hier.",["vu","vue","vus"],1,"l' = la robe перед дієсловом → vue."],["J'ai ___ les clés.",["perdu","perdues"],0,"COD після дієслова → без узгодження."]],pre:["O3","P1"]},
{id:"O5",d:"O",p:5,fr:"se · tout · leur",gloss:"складні узгодження",t:"Pronominaux, tout, leur",
 s:"Найскладніші узгодження: займенникові дієслова в passé composé та слова-хамелеони tout і leur.",
 r:["se + PC: узгоджуй, якщо se — прямий додаток: Elle s'est lavée. Якщо після дієслова є COD або se — непрямий, ні: Elle s'est lavé les mains; Ils se sont parlé.","<b>leur</b> перед дієсловом — займенник, незмінний: je leur parle. Перед іменником — присвійний: leur maison, leurs enfants.","tout / toute / tous / toutes узгоджуються з іменником. tout як прислівник («зовсім») незмінний, крім перед жін. прикметником на приголосну: elle est toute petite."],
 e:[["Elles se sont téléphoné.","Вони зателефонували одна одній (téléphoner À)."],["Je leur ai donné leurs cadeaux.","Я дав їм їхні подарунки."]],
 x:["Ils se sont dits bonjour.","Ils se sont dit bonjour.","dire À qqn — se тут непрямий додаток, узгодження немає."],
 q:[["Elle s'est ___ les cheveux.",["coupé","coupée"],0,"COD les cheveux стоїть після дієслова."],["Je ___ ai envoyé ___ billets.",["leur / leurs","leurs / leur","leur / leur"],0,"Займенник leur незмінний; присвійний перед множиною — leurs."]],pre:["O4","P4"]},
/* ---------- S ---------- */
{id:"S1",d:"S",p:1,fr:"Négation",gloss:"будова речення",t:"Phrase simple, négation, question",
 s:"Базова будова речення. На письмі ne обов'язкове, а питання будуються інакше, ніж у розмові.",
 r:["Заперечення: ne… pas / jamais / plus / rien / personne. На письмі <b>ne</b> не пропускається.","ne… que = тільки: Je n'ai que dix euros.","Письмове питання — інверсія: Parlez-vous français ? A-t-il fini ? (-t- між двома голосними).","Розмовне: Tu viens ? / Est-ce que tu viens ?"],
 e:[["Il ne mange jamais de viande.","Він ніколи не їсть м'яса."],["Pourquoi a-t-elle refusé ?","Чому вона відмовилася?"]],
 x:["Je sais pas.","Je ne sais pas.","«Je sais pas» нормальне в розмові, але на письмі — помилка."],
 q:[["Правильна інверсія:",["Parle-t-il anglais ?","Parle-il anglais ?","Parlet-il anglais ?"],0,"Між двома голосними — -t-."],["«У мене лише один брат»:",["Je n'ai qu'un frère.","Je n'ai pas qu'un frère.","J'ai que un frère."],0,"ne… que, і que → qu' перед голосною."]],pre:["V1"]},
{id:"S2",d:"S",p:2,fr:"Ponctuation",gloss:"пунктуація",t:"La ponctuation française",
 s:"Французька пунктуація відрізняється від української: пробіли перед знаками, лапки « », інші правила коми.",
 r:["Пробіл (нерозривний) перед <b>; : ! ?</b> і всередині « лапок ».","Лапки — « ялинки » з пробілами; у діалогах часто тире —.","Перед que, qui, si кома зазвичай <b>не ставиться</b> (на відміну від «я думаю, що»): je pense que…","Кома після вступних слів (Hier, Cependant,) і перед mais."],
 e:[["Il m'a dit : « Viens demain ! »","Він сказав мені: «Приходь завтра!»"],["Je pense que tu as raison.","Я думаю, що ти маєш рацію."]],
 x:["Je crois, qu'il viendra.","Je crois qu'il viendra.","Перед que коми немає."],
 q:[["Правильно:",["Pourquoi ?","Pourquoi?"],0,"Перед ? у французькій пробіл."],["Де кома зайва?",["Je sais, que tu es là.","Hier, il a plu.","Il est fatigué, mais content."],0,"Перед que кома не ставиться."]],pre:["S1"]},
{id:"S3",d:"S",p:3,fr:"Connecteurs",gloss:"логічні зв'язки",t:"Les connecteurs logiques",
 s:"Слова-зв'язки перетворюють набір речень на аргументований текст. Деякі з них вимагають subjonctif.",
 r:["Причина: parce que, car, puisque; grâce à (позитивне), à cause de (негативне).","Протиставлення: mais, cependant, pourtant, alors que; bien que + subjonctif.","Наслідок: donc, alors, c'est pourquoi, si bien que.","Мета: pour / afin de + інфінітив; pour que / afin que + subjonctif."],
 e:[["Il est resté chez lui à cause de la pluie.","Він лишився вдома через дощ."],["Bien qu'elle soit malade, elle travaille.","Хоч вона й хвора, вона працює."]],
 x:["Grâce à la grève, je suis arrivé en retard.","À cause de la grève, je suis arrivé en retard.","grâce à — лише для позитивної причини."],
 q:[["Il a réussi ___ ses efforts.",["grâce à","à cause de"],0,"Позитивний результат → grâce à."],["Je parle lentement ___ tu comprennes.",["pour que","parce que","donc"],0,"Мета + subjonctif → pour que."]],pre:["S2"]},
{id:"S4",d:"S",p:4,fr:"Si…",gloss:"умовні речення",t:"Les phrases avec si",
 s:"Три типи умовних речень. Головне правило: одразу після si ніколи не буває futur чи conditionnel.",
 r:["Реальна умова: si + présent → présent / futur / impératif. Si tu veux, je viendrai.","Гіпотеза: si + imparfait → conditionnel. Si j'avais le temps, je voyagerais.","Нереальне минуле: si + plus-que-parfait → conditionnel passé. Si j'avais su, je serais venu.","si + il / ils → s'il, s'ils (але si elle)."],
 e:[["S'il fait beau, nous irons à la plage.","Якщо буде гарна погода, підемо на пляж."],["Si j'étais toi, je lui écrirais.","На твоєму місці я б йому написав."]],
 x:["Si j'aurais le temps, je viendrais.","Si j'avais le temps, je viendrais.","Після si — imparfait, не conditionnel."],
 q:[["Si tu ___ plus tôt, tu ne serais pas fatigué.",["te couchais","te coucherais","te couches"],0,"si + imparfait → conditionnel."],["Si j'avais su, je ___.",["serais venu","viendrais","étais venu"],0,"si + plus-que-parfait → conditionnel passé."]],pre:["S3","M3","V4"]},
{id:"S5",d:"S",p:5,fr:"Style",gloss:"gérondif, виділення",t:"Gérondif et mise en relief",
 s:"Інструменти стилю: стиснути дві дії в одну (en lisant), виділити головне (c'est… qui).",
 r:["Gérondif: en + основа nous + -ant: en marchant. Одночасність або спосіб: Il travaille en écoutant de la musique.","Participe présent без en — письмовий і незмінний: Les étudiants ayant fini peuvent sortir.","Виділення: C'est lui qui a gagné. C'est à toi que je parle. Ce qui m'intéresse, c'est…","Нерегулярні: étant, ayant, sachant."],
 e:[["En arrivant, j'ai vu le problème.","Прийшовши, я побачив проблему."],["Ce qui compte, c'est la régularité.","Що важить, так це регулярність."]],
 x:["C'est moi qui a raison.","C'est moi qui ai raison.","Після qui дієслово узгоджується з moi / toi / nous."],
 q:[["Il s'est blessé ___.",["en courant","en courrant","courant en"],0,"courir → nous courons → en courant (одне r)."],["C'est nous qui ___ gagné.",["avons","ont","a"],0,"qui замінює nous → avons."]],pre:["S4","N5"]}
];

/* ---------- extra exercises: q = multiple choice, c = fix the mistake [wrong, correct, hint] ---------- */
const EX = {
V1:{q:[["Je ___ (appeler) mon frère.",["appele","appelle","apelle"],1,"appeler подвоює l перед німим e: j'appelle."],["Vous ___ (faire) quoi ?",["faisez","faites","fait"],1,"Нерегулярні: vous faites, vous dites, vous êtes."],["Elle ___ (répondre) vite.",["répond","répondt","répons"],0,"Дієслова на -dre: il répond, без -t."]],
 c:[["Nous mangons ensemble.","Nous mangeons ensemble.","У дієсловах на -ger перед -ons зберігається e."],["Tu peut venir demain.","Tu peux venir demain.","pouvoir: je peux, tu peux."]]},
V2:{q:[["Ils ___ (venir) hier.",["ont venu","sont venus","sont venu"],1,"venir — з être, узгодження з ils."],["Nous ___ les courses.",["avons fait","sommes faits","avons faits"],0,"faire — з avoir, COD після дієслова."],["Elle ___ les valises.",["est descendue","a descendu","est descendu"],1,"З прямим додатком дієслова руху беруть avoir."]],
 c:[["Elle a tombé dans la rue.","Elle est tombée dans la rue.","tomber — з être, і participe узгоджується."],["J'ai prendu le bus.","J'ai pris le bus.","prendre → pris."]]},
V3:{q:[["Soudain, la lumière ___.",["s'éteignait","s'est éteinte","s'éteint"],1,"soudain → подія, passé composé."],["Avant, nous ___ à Kyiv.",["habitions","avons habité","habitiont"],0,"Стан у минулому без меж — imparfait."],["Il ___ vingt ans quand il est parti.",["a eu","avait","avais"],1,"Вік — опис, imparfait; il → -ait."]],
 c:[["Quand j'étais jeune, je suis allé souvent à la plage.","Quand j'étais jeune, j'allais souvent à la plage.","souvent у минулому = звичка → imparfait."],["Nous mangions et soudain quelqu'un sonnait.","Nous mangions et soudain quelqu'un a sonné.","soudain → passé composé."]]},
V4:{q:[["J'ai perdu le livre que tu m'___.",["as prêté","avais prêté","prêtais"],1,"Позичив раніше, ніж я загубив."],["Elle ___ déjà ___ quand je l'ai appelée.",["était / partie","avait / partie","était / parti"],0,"partir — з être, узгодження з elle."],["Si tu m'___, je serais venu.",["avais appelé","as appelé","appellerais"],0,"si + plus-que-parfait → conditionnel passé."]],
 c:[["Il a dit qu'il a déjà vu ce film.","Il a dit qu'il avait déjà vu ce film.","Минуле в минулому → plus-que-parfait."],["Nous avions arrivés trop tard.","Nous étions arrivés trop tard.","arriver — з être."]]},
V5:{q:[["« Elle fit » — інфінітив:",["faire","finir","fixer"],0,"faire → il fit."],["« Nous eûmes » — інфінітив:",["avoir","être","aller"],0,"avoir → il eut, nous eûmes."],["Passé simple від être (ils):",["ils furent","ils étèrent","ils fûtes"],0,"être → il fut, ils furent."]],
 c:[["Il finissa son repas.","Il finit son repas.","Дієслова на -ir: il finit."],["Ils parlairent longtemps.","Ils parlèrent longtemps.","Дієслова на -er: ils -èrent."]]},
M1:{q:[["___ sages, les enfants !",["Soyez","Êtes","Soyiez"],0,"être в наказовому: sois, soyons, soyez."],["Ne ___ pas ! (s'inquiéter, vous)",["vous inquiétez","inquiétez-vous","vous inquiétez-vous"],0,"У запереченні займенник стоїть перед дієсловом."],["___-moi ton adresse. (donner, tu)",["Donne","Donnes","Donnez"],0,"-er у формі tu — без -s."]],
 c:[["Vas chez le médecin !","Va chez le médecin !","-s лише перед y та en: Vas-y !"],["Ne dis-le pas !","Ne le dis pas !","У запереченні займенник перед дієсловом."]]},
M2:{q:[["Il ___ (falloir) partir tôt.",["faudra","fallira","faudrera"],0,"falloir → faudr-."],["Tu ___ (être) là ce soir ?",["seras","esteras","sera"],0,"être → ser-; tu → -as."],["Ils ___ (pouvoir) venir.",["pouvront","pourront","pouveront"],1,"pouvoir → pourr-."]],
 c:[["Demain, je prendrerai le train.","Demain, je prendrai le train.","Дієслова на -re втрачають e: prendr-."],["Nous allons partirons demain.","Nous allons partir demain.","futur proche: aller + інфінітив."]]},
M3:{q:[["Vous ___ vous reposer. (devoir, порада)",["devriez","devrez","deviez"],0,"Порада — conditionnel."],["À ta place, je ne ___ rien.",["dirais","dirai","disais"],0,"À ta place → гіпотеза, conditionnel."],["Nous ___ visiter Paris. (aimer, побажання)",["aimerions","aimerons","aimions"],0,"Побажання — conditionnel: -rions."]],
 c:[["Pourriez vous m'aider ?","Pourriez-vous m'aider ?","В інверсії потрібен дефіс."],["Si j'étais riche, j'achèterai une maison.","Si j'étais riche, j'achèterais une maison.","Гіпотеза → conditionnel з -s."]]},
M4:{q:[["Avant que tu ___, appelle-moi.",["pars","partes","partis"],1,"avant que + subjonctif."],["Je doute qu'il ___ raison.",["a","ait","aie"],1,"douter que + subjonctif; il → ait."],["Je pense qu'elle ___ là.",["soit","est"],1,"penser que у ствердженні → індикатив."]],
 c:[["Il faut que nous faisons attention.","Il faut que nous fassions attention.","faire у subjonctif: fass-."],["Je veux que tu viens.","Je veux que tu viennes.","vouloir que + subjonctif."]]},
M5:{q:[["« J'ai faim. » → Il a dit qu'il ___ faim.",["avait","a","aura"],0,"présent → imparfait."],["« Où vas-tu ? » → Elle m'a demandé ___ j'allais.",["où","si","que"],0,"Питальне слово зберігається."],["« Je suis venu hier. » → Il a dit qu'il était venu ___.",["la veille","hier","le lendemain"],0,"hier → la veille."]],
 c:[["Elle a dit qu'elle viendra demain.","Elle a dit qu'elle viendrait le lendemain.","futur → conditionnel; demain → le lendemain."],["Il m'a demandé est-ce que j'étais prêt.","Il m'a demandé si j'étais prêt.","est-ce que у непрямій мові → si."]]},
N1:{q:[["Il y a ___ eau sur la table.",["de l'","du","des"],0,"Партитив перед голосною: de l'."],["J'adore ___ chocolat.",["le","du","de"],0,"Після aimer, adorer, détester — означений артикль."],["Je parle ___ professeurs.",["aux","à les","des"],0,"à + les = aux."]],
 c:[["Elle a beaucoup des livres.","Elle a beaucoup de livres.","Після слів кількості — de."],["Je n'aime pas du fromage.","Je n'aime pas le fromage.","aimer + означений артикль, навіть у запереченні."]]},
N2:{q:[["Множина від « un œil »:",["des œils","des yeux"],1,"Виняток: un œil → des yeux."],["Яке слово чоловічого роду?",["voiture","silence","chanson"],1,"le silence — виняток серед слів на -ence."],["Множина від « un cheveu »:",["des cheveus","des cheveux"],1,"-eu → -eux."]],
 c:[["Les bijous sont chers.","Les bijoux sont chers.","bijou, caillou, chou, genou, hibou, joujou, pou → -oux."],["La problème est grave.","Le problème est grave.","problème — чоловічий рід."]]},
N3:{q:[["une femme ___ (heureux)",["heureux","heureuse","heureuze"],1,"-eux → -euse."],["un ___ appartement (beau)",["beau","bel","belle"],1,"Перед голосною в чол. роді — bel."],["des chemises ___ (blanc)",["blancs","blanches","blanchs"],1,"blanc → blanche (жін.), множина — blanches."]],
 c:[["Une question importante et difficil.","Une question importante et difficile.","difficile має -e в обох родах."],["Il a acheté une voiture rouge nouvelle.","Il a acheté une nouvelle voiture rouge.","nouveau стоїть перед іменником, колір — після."]]},
N4:{q:[["C'est le ___ jour de ma vie.",["meilleur","mieux","plus bon"],0,"Прикметник → le meilleur."],["Paris est la ville ___ chère de France.",["la plus","plus","le plus"],0,"Після іменника артикль повторюється: la ville la plus chère."],["Il est ___ grand ___ son frère.",["aussi / que","autant / que","aussi / comme"],0,"Рівність з прикметником: aussi… que."]],
 c:[["Il chante plus mieux que moi.","Il chante mieux que moi.","mieux уже означає «краще»."],["Elle a plus que dix ans d'expérience.","Elle a plus de dix ans d'expérience.","Перед числом — plus de."]]},
N5:{q:[["arriver → ___",["l'arrivée","l'arrivement","l'arrivation"],0,"arriver → l'arrivée."],["développer → ___",["le développement","la développation"],0,"-ment → чоловічий рід."],["Quand le film a commencé → ___",["Au début du film","Au commencement de film"],0,"Номіналізація + артикль: du film."]],
 c:[["La construisation du pont a duré deux ans.","La construction du pont a duré deux ans.","construire → la construction."],["Après la décidation du directeur, tout a changé.","Après la décision du directeur, tout a changé.","décider → la décision."]]},
P1:{q:[["Tu vois tes amis ? — Oui, je ___ vois.",["les","leur","leurs"],0,"voir qqn — прямий додаток."],["J'ai dit la vérité à Marie → Je ___ ai dit la vérité.",["l'","lui","la"],1,"dire à qqn → lui."],["Paul ? Je vais ___ appeler.",["l'","lui","le"],0,"appeler qqn — прямий додаток; перед голосною l'."]],
 c:[["Je leurs ai écrit.","Je leur ai écrit.","Займенник leur ніколи не має -s."],["Je vais lui voir demain.","Je vais le voir demain.","voir qqn — прямий додаток."]]},
P2:{q:[["Tu bois du thé ? — Oui, j'___ bois.",["y","en","le"],1,"du thé → en."],["Tu penses à ton voyage ? — Oui, j'___ pense.",["y","en","lui"],0,"penser à + річ → y."],["Il y a des pommes ? — Oui, il y ___ a.",["en","y","les"],0,"Il y en a."]],
 c:[["Tu viens de la gare ? — Oui, j'y viens.","Tu viens de la gare ? — Oui, j'en viens.","venir DE → en."],["Combien de sœurs as-tu ? — J'ai deux.","Combien de sœurs as-tu ? — J'en ai deux.","Число без іменника → en."]]},
P3:{q:[["Le livre ___ est sur la table.",["que","qui","dont"],1,"Підмет → qui."],["Le pays ___ je viens.",["où","dont","que"],1,"venir DE → dont (можна й d'où)."],["La femme ___ tu as vue.",["qui","que","dont"],1,"Прямий додаток → que."]],
 c:[["L'homme que parle est mon père.","L'homme qui parle est mon père.","Підмет → qui."],["Voilà le projet dont je t'ai parlé de.","Voilà le projet dont je t'ai parlé.","dont уже містить de."]]},
P4:{q:[["Tu donnes les clés à tes parents ? — Je ___ donne.",["les leur","leur les","les leurs"],0,"les перед leur; leur без -s."],["Il y a du pain ? — Oui, il ___ a.",["y en","en y"],0,"y перед en."],["Ne ___ dis pas ! (cela, à lui)",["le lui","lui le"],0,"Заперечний імператив — звичайний порядок."]],
 c:[["Donne-moi-le !","Donne-le-moi !","Ствердний імператив: le перед moi."],["Je lui en ai parlé de ce problème.","Je lui en ai parlé.","en уже замінює de ce problème."]]},
P5:{q:[["Le stylo avec ___ j'écris.",["lequel","laquelle","qui"],0,"stylo — чол. рід, річ."],["Le film ___ je pense.",["auquel","duquel","dont"],0,"penser À → auquel."],["La maison au fond ___ il y a un jardin.",["de laquelle","dont","duquel"],0,"au fond de + жін. рід → de laquelle."]],
 c:[["Le problème à lequel je réfléchis.","Le problème auquel je réfléchis.","à + lequel = auquel."],["L'entreprise pour lequel je travaille.","L'entreprise pour laquelle je travaille.","entreprise — жіночий рід."]]},
O1:{q:[["Elle ___ une voiture.",["a","à"],0,"Тест: elle avait une voiture."],["Ils ___ faim.",["on","ont"],1,"Тест: ils avaient faim."],["___ est mon sac ?",["Ou","Où"],1,"«де» → où."]],
 c:[["Mes parents son en vacances.","Mes parents sont en vacances.","Тест: étaient → sont."],["On à fini le travail.","On a fini le travail.","Тест: on avait fini → a."]]},
O2:{q:[["___ livres sont à moi.",["Ces","Ses","C'est"],0,"«ці книжки» → ces."],["Il ne ___ pas nager.",["sait","s'est","c'est"],0,"savoir → il sait."],["Il ___ venir demain.",["peu","peut","peux"],1,"Тест: il pouvait → peut."]],
 c:[["Je ne sais pas quel heure il est.","Je ne sais pas quelle heure il est.","heure — жіночий рід → quelle."],["Il se lave et ce prépare.","Il se lave et se prépare.","Перед дієсловом → se."]]},
O3:{q:[["Vous ___ ce livre ? (aimer)",["aimez","aimer","aimé"],0,"vous → -ez."],["Il est ___ à huit heures. (arriver)",["arrivé","arriver","arrivait"],0,"Після être — participe."],["Il est parti sans ___ un mot. (parler)",["parler","parlé"],0,"Після прийменника — інфінітив; тест: sans vendre."]],
 c:[["Elle est aller au marché.","Elle est allée au marché.","Після être — participe, узгоджений з elle."],["Nous allons commencé demain.","Nous allons commencer demain.","Після aller — інфінітив."]]},
O4:{q:[["Les fleurs que j'ai ___.",["acheté","achetées","achetés"],1,"que = les fleurs (жін., мн.) перед дієсловом."],["Combien de pages as-tu ___ ?",["lu","lues"],1,"combien de pages стоїть перед дієсловом."],["Des gâteaux ? J'en ai ___ trois.",["mangé","mangés"],0,"З en узгодження немає."]],
 c:[["Ces chansons, je les ai déjà entendu.","Ces chansons, je les ai déjà entendues.","les = chansons, стоїть перед дієсловом."],["Elle a écrite une lettre.","Elle a écrit une lettre.","COD після дієслова → без узгодження."]]},
O5:{q:[["Ils se sont ___ à Paris. (rencontrer)",["rencontré","rencontrés"],1,"rencontrer qqn: se — прямий додаток."],["___ les étudiants sont là.",["Tout","Tous","Toutes"],1,"les étudiants — чол., мн. → tous."],["Elles sont ___ petites.",["tout","toutes"],1,"Перед жін. прикметником на приголосну tout змінюється: toutes."]],
 c:[["Elles se sont lavées les mains.","Elles se sont lavé les mains.","COD les mains стоїть після дієслова."],["Ils ont pris leur sacs.","Ils ont pris leurs sacs.","Присвійний перед множиною → leurs."]]},
S1:{q:[["Je ne vois ___.",["personne","pas personne"],0,"ne… personne, без pas."],["Правильне питання:",["Où habite-t-elle ?","Où habite-elle ?","Où elle habite-t-elle ?"],0,"Між двома голосними — -t-."],["Il ___ travaille plus.",["ne","n'","pas"],0,"ne… plus; перед приголосною — ne."]],
 c:[["Il a rien dit.","Il n'a rien dit.","На письмі ne обов'язкове."],["Est-ce que vous parlez-vous anglais ?","Est-ce que vous parlez anglais ?","Після est-ce que інверсії немає."]]},
S2:{q:[["Правильні лапки:",["« Bonjour »","\"Bonjour\"","«Bonjour»"],0,"Французькі лапки з пробілами всередині."],["Кома після вступного слова:",["Cependant, il a refusé.","Cependant il a refusé."],0,"Після cependant на початку — кома."],["Правильно:",["Attention : danger !","Attention: danger!"],0,"Пробіл перед : і !"]],
 c:[["Il a dit: «Je viens.»","Il a dit : « Je viens. »","Пробіл перед : і всередині « ». На Mac « — Option+\\, » — Option+Shift+\\."],["Tu viens?","Tu viens ?","Пробіл перед ?"]]},
S3:{q:[["Il pleut, ___ je prends un parapluie.",["donc","bien que","pourtant"],0,"Наслідок → donc."],["___ il soit riche, il est malheureux.",["Bien qu'","Parce qu'","Donc"],0,"Протиставлення + subjonctif → bien que."],["Je suis venu ___ te voir.",["pour","pour que","parce que"],0,"Мета + інфінітив → pour."]],
 c:[["Bien qu'il est malade, il travaille.","Bien qu'il soit malade, il travaille.","bien que + subjonctif."],["Il est parti car de la pluie.","Il est parti à cause de la pluie.","car + речення; з іменником — à cause de."]]},
S4:{q:[["Si tu ___, on y va.",["veux","voudrais","voudras"],0,"Реальна умова: si + présent."],["S'il ___, nous resterions à la maison.",["pleuvait","pleuvrait","pleut"],0,"si + imparfait → conditionnel."],["Si elle ___, elle aurait réussi.",["avait travaillé","aurait travaillé","travaillerait"],0,"si + plus-que-parfait → conditionnel passé."]],
 c:[["Si il vient, je serai content.","S'il vient, je serai content.","si + il → s'il."],["Si tu viendras, je te montrerai.","Si tu viens, je te montrerai.","Після si — ніколи не futur."]]},
S5:{q:[["Il lit ___ le petit-déjeuner.",["en prenant","en prendant","prenant en"],0,"nous prenons → en prenant."],["C'est à elle ___ je pense.",["que","qui","dont"],0,"C'est + прийменник… que."],["___ fatiguée, elle est restée chez elle.",["Étant","Étante","En étant"],0,"Participe présent незмінний: étant."]],
 c:[["En mangeons, il regarde la télé.","En mangeant, il regarde la télé.","Gérondif: en + -ant."],["C'est toi qui a gagné.","C'est toi qui as gagné.","qui = toi → tu as."]]}
};

/* ---------- detailed explanations. Markup: "## heading", "| table |" (1st row = header), "- list item", "! note", anything else = paragraph ---------- */
const LONG = {
V1:`## Три групи дієслів
<b>I група</b> — усі дієслова на -er, крім aller. Це близько 90% дієслів, і всі нові слова потрапляють сюди (googler, liker). <b>II група</b> — дієслова на -ir, що мають -iss- у множині: finir, choisir, réussir, grandir. <b>III група</b> — усе інше: -ir без -iss- (partir, dormir, venir), -re (prendre, mettre), -oir (pouvoir, voir) та aller.
| | parler | finir | prendre | pouvoir |
| je | parl<b>e</b> | fin<b>is</b> | prend<b>s</b> | peu<b>x</b> |
| tu | parl<b>es</b> | fin<b>is</b> | prend<b>s</b> | peu<b>x</b> |
| il/elle | parl<b>e</b> | fin<b>it</b> | prend | peu<b>t</b> |
| nous | parl<b>ons</b> | fin<b>issons</b> | pren<b>ons</b> | pouv<b>ons</b> |
| vous | parl<b>ez</b> | fin<b>issez</b> | pren<b>ez</b> | pouv<b>ez</b> |
| ils/elles | parl<b>ent</b> | fin<b>issent</b> | pren<b>nent</b> | peuv<b>ent</b> |
## Чому це складно саме на письмі
У parler чотири форми звучать однаково: parle, parles, parle, parlent. На слух різниці немає, тому закінчення визначає лише підмет. Звідси правило: спершу знайди підмет, потім пиши закінчення. Пастка — коли підмет далеко від дієслова: «Les enfants de ma voisine <b>jouent</b>» — підмет enfants, а не voisine.
## Зміни в основі дієслів I групи
- -cer → ç перед o: nous commen<b>ç</b>ons.
- -ger → ge перед o: nous man<b>ge</b>ons.
- appeler, jeter подвоюють приголосну: j'appe<b>ll</b>e, je je<b>tt</b>e, але nous appelons.
- acheter, lever, préférer отримують è: j'ach<b>è</b>te, je pr<b>é</b>f<b>è</b>re, але nous achetons.
- -oyer, -uyer → i: j'envo<b>i</b>e, j'appu<b>i</b>e.
Логіка «чобота»: основа змінюється там, де закінчення німе (je, tu, il, ils), а в nous і vous лишається як в інфінітиві.
## Чотири дієслова, які треба знати напам'ять
| | être | avoir | aller | faire |
| je | suis | ai | vais | fais |
| tu | es | as | vas | fais |
| il | est | a | va | fait |
| nous | sommes | avons | allons | faisons |
| vous | êtes | avez | allez | faites |
| ils | sont | ont | vont | font |
! Алгоритм: підмет → особа → група → закінчення. Для III групи в однині: -s, -s, -t (або -d у дієсловах на -dre).`,
V2:`## Будова
Passé composé = допоміжне дієслово (avoir або être) у présent + participe passé. Допоміжне відмінюється, participe несе зміст: j'<b>ai</b> parlé, nous <b>sommes</b> partis.
## Коли être
Мнемоніка <b>DR MRS VANDERTRAMP</b>: devenir, revenir, monter, rester, sortir, venir, aller, naître, descendre, entrer, rentrer, tomber, retourner, arriver, mourir, partir. Це переважно рух «у дім і з дому» та зміна стану (народитися, померти, стати). Плюс <b>усі займенникові</b> дієслова: je me suis levé, elle s'est trompée.
! Пастка: monter, descendre, sortir, rentrer, retourner, passer з прямим додатком беруть avoir. Je suis sorti (я вийшов) / J'ai sorti la poubelle (я виніс сміття).
## Як утворити participe
| Інфінітив | Participe | Приклади |
| -er | -é | parlé, mangé, allé |
| -ir (II група, partir, dormir) | -i | fini, choisi, parti |
| -re (більшість) | -u | vendu, attendu, perdu |
| -oir | -u | voulu, pu, su, vu, dû |
Нерегулярні, які трапляються постійно: avoir → <b>eu</b>, être → <b>été</b>, faire → <b>fait</b>, dire → <b>dit</b>, écrire → <b>écrit</b>, prendre → <b>pris</b>, mettre → <b>mis</b>, ouvrir → <b>ouvert</b>, naître → <b>né</b>, mourir → <b>mort</b>, vivre → <b>vécu</b>, lire → <b>lu</b>, boire → <b>bu</b>, croire → <b>cru</b>.
## Узгодження з être
З être participe поводиться як прикметник: +e для жіночого роду, +s для множини. Elle est parti<b>e</b>. Ils sont parti<b>s</b>. Elles sont parti<b>es</b>. Змішана група — чоловічий рід множини. Найчастіше різниці не чути (parti / partie), тож це помилка, яку видно тільки на письмі.
## Порядок слів
- Заперечення обгортає допоміжне: Je <b>n'</b>ai <b>pas</b> compris.
- Займенники стоять перед допоміжним: Je <b>l'</b>ai vu.
- Короткі прислівники — між допоміжним і participe: J'ai <b>bien</b> dormi. Il a <b>déjà</b> mangé.`,
V3:`## Утворення
Беремо форму nous у présent, відкидаємо -ons, додаємо закінчення. Єдиний виняток — être: j'<b>ét</b>ais.
| | parler (nous parl-ons) | finir (nous finiss-ons) | être |
| je | parlais | finissais | étais |
| tu | parlais | finissais | étais |
| il | parlait | finissait | était |
| nous | parlions | finissions | étions |
| vous | parliez | finissiez | étiez |
| ils | parlaient | finissaient | étaient |
Пастки написання: дієслова з i в основі мають два i: nous étud<b>ii</b>ons, vous r<b>ii</b>ez. -cer / -ger: je commen<b>ç</b>ais, je man<b>ge</b>ais (але nous commencions).
## Як обрати: imparfait чи passé composé
| Imparfait | Passé composé |
| тло, декорації сцени | дія на сцені |
| стан: être, avoir, savoir, penser | зміна стану: j'ai compris |
| звичка: tous les lundis, souvent | один раз або скільки разів: deux fois |
| дія в процесі | дія, що її перервала |
| без меж у часі | з межами: pendant deux heures, de 8 h à 10 h |
## Чи допомагає український вид
Часто так: недоконаний вид ≈ imparfait (читав), доконаний ≈ passé composé (прочитав). Але не завжди. «Я працював там три роки» — недоконаний вид, проте в дії є чіткі межі, тож J'<b>ai travaillé</b> là-bas trois ans. Вирішальне питання: чи має дія межі в часі?
## Як звучить разом
<i>Il était sept heures. Il pleuvait et les rues étaient vides. Soudain, une voiture s'est arrêtée devant la maison. Un homme est sorti.</i> Перші три дієслова описують картину (imparfait), останні два — події, що просувають історію вперед (passé composé).`,
V4:`## Утворення
avoir або être в imparfait + participe passé. Правила вибору допоміжного й узгодження такі самі, як у passé composé.
| | parler | partir |
| je | avais parlé | étais parti(e) |
| tu | avais parlé | étais parti(e) |
| il / elle | avait parlé | était parti / partie |
| nous | avions parlé | étions parti(e)s |
| vous | aviez parlé | étiez parti(e)(s) |
| ils / elles | avaient parlé | étaient partis / parties |
## Навіщо він потрібен
В українській немає окремого передминулого часу: ми кажемо «коли я прийшов, він уже пішов» і обидва дієслова в одному часі. Французька вимагає показати, що одна минула дія сталася раніше за іншу. Без plus-que-parfait читач може зрозуміти послідовність неправильно.
## Порівняй
- Quand il est arrivé, nous <b>avons mangé</b>. — Він прийшов, і <i>після цього</i> ми поїли.
- Quand il est arrivé, nous <b>avions mangé</b>. — Ми поїли <i>ще до</i> його приходу.
Один час змінює зміст речення.
## Типові контексти
- пояснення причини: Il était fatigué parce qu'il <b>avait</b> mal <b>dormi</b>;
- непряма мова: passé composé зсувається в plus-que-parfait (тема M5);
- нереальна умова в минулому: Si j'<b>avais su</b>, je serais venu (тема S4);
- жаль: Si seulement je l'<b>avais écouté</b> !`,
V5:`## Де він трапляється
Література, казки (<i>Il était une fois… Le prince partit</i>), історичні тексти, біографії. У розмові, листах і повідомленнях його замінює passé composé. Ваше завдання — впізнавати форми під час читання, а писати лише якщо пишете художню оповідь.
## Три типи закінчень
| | -a (parler) | -i (finir, prendre) | -u (vouloir, être) |
| je | parlai | finis | voulus |
| tu | parlas | finis | voulus |
| il | parla | finit | voulut |
| nous | parlâmes | finîmes | voulûmes |
| vous | parlâtes | finîtes | voulûtes |
| ils | parlèrent | finirent | voulurent |
## Як впізнавати
На практиці 95% форм — 3-тя особа: il + <b>-a, -it, -ut</b>; ils + <b>-èrent, -irent, -urent</b>. Особливі форми, які варто запам'ятати:
- être → il <b>fut</b>, avoir → il <b>eut</b>, faire → il <b>fit</b>;
- venir → il <b>vint</b>, ils <b>vinrent</b>; tenir → il <b>tint</b>;
- voir → il <b>vit</b>, vivre → il <b>vécut</b>; naître → il <b>naquit</b>; mourir → il <b>mourut</b>.
! Пастка: «il vit» — це і voir у passé simple (він побачив), і vivre у présent (він живе). «Il finit» — і présent, і passé simple. Розрізняй за часом решти тексту.
## Пара з imparfait
У літературі passé simple працює як passé composé: imparfait дає тло, passé simple — події. <i>Il faisait nuit. Elle ouvrit la fenêtre et regarda dehors.</i>`,
M1:`## Утворення
Беремо форми tu, nous, vous з présent і прибираємо займенник.
| | parler | finir | aller | être | avoir | savoir |
| (tu) | parle | finis | va | sois | aie | sache |
| (nous) | parlons | finissons | allons | soyons | ayons | sachons |
| (vous) | parlez | finissez | allez | soyez | ayez | sachez |
У дієсловах на -er, а також aller, ouvrir, offrir, cueillir, форма tu <b>втрачає -s</b>: tu parles → Parle ! tu vas → Va ! Повертається -s тільки перед y та en: Vas-y ! Parles-en !
## Займенникові дієслова
Займенник іде після дієслова через дефіс, te стає toi: Lève-toi ! Levons-nous ! Levez-vous ! У запереченні займенник повертається на місце: Ne te lève pas !
## Займенники з імперативом
- Ствердний: після дієслова, через дефіс; me → moi, te → toi. Regarde-<b>moi</b>. Écoute-<b>le</b>.
- Заперечний: перед дієсловом, як у звичайному реченні. Ne <b>me</b> regarde pas.
## Імператив у листах
Наказовий спосіб звучить різко. В офіційному листі замість нього використовують:
- <b>Veuillez</b> + інфінітив: Veuillez trouver ci-joint…
- <b>Merci de</b> + інфінітив: Merci de me répondre avant vendredi.
- conditionnel: Pourriez-vous… ?
Стандартна фінальна формула: <i>Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.</i>`,
M2:`## Futur simple: утворення
Інфінітив + закінчення, що збігаються з présent від avoir: <b>-ai, -as, -a, -ons, -ez, -ont</b>. Дієслова на -re втрачають кінцеве e.
| | parler | finir | prendre |
| je | parlerai | finirai | prendrai |
| tu | parleras | finiras | prendras |
| il | parlera | finira | prendra |
| nous | parlerons | finirons | prendrons |
| vous | parlerez | finirez | prendrez |
| ils | parleront | finiront | prendront |
## Нерегулярні основи
| Дієслово | Основа | Дієслово | Основа |
| être | ser- | venir | viendr- |
| avoir | aur- | tenir | tiendr- |
| aller | ir- | voir | verr- |
| faire | fer- | envoyer | enverr- |
| pouvoir | pourr- | savoir | saur- |
| vouloir | voudr- | falloir | faudr- |
| devoir | devr- | courir | courr- |
| recevoir | recevr- | mourir | mourr- |
## Орфографія
Дієслова, що змінюють основу в présent, тримають зміну в усьому futur: j'appe<b>ll</b>erai, j'ach<b>è</b>terai, je je<b>tt</b>erai. У розмові e в -erai часто «ковтається» (je parl'rai), але на письмі воно є завжди.
## Futur simple чи futur proche
- <b>Futur proche</b> (aller + інфінітив): план, вже вирішене, щось близьке. Розмовне. Je vais appeler Marie ce soir.
- <b>Futur simple</b>: прогноз, обіцянка, умова, офіційний текст. Je vous contacterai dès que possible.
## Futur antérieur
aurai / serai + participe: дія, що завершиться раніше за іншу майбутню. Quand tu <b>auras fini</b>, tu m'appelleras. Після quand, dès que, lorsque про майбутнє — завжди майбутній час, ніколи не présent.`,
M3:`## Утворення
Основа futur + закінчення imparfait. Тобто всі нерегулярні основи ти вже знаєш з теми M2.
| | parler | faire | être |
| je | parlerais | ferais | serais |
| tu | parlerais | ferais | serais |
| il | parlerait | ferait | serait |
| nous | parlerions | ferions | serions |
| vous | parleriez | feriez | seriez |
| ils | parleraient | feraient | seraient |
## Шість ситуацій
- <b>Ввічливість</b>: Je voudrais…, Pourriez-vous…, Auriez-vous… ?
- <b>Порада</b>: Tu devrais…, Vous feriez mieux de…
- <b>Бажання</b>: J'aimerais…, Ce serait bien de…
- <b>Гіпотеза з si</b>: Si j'avais le temps, je <b>voyagerais</b> (тема S4).
- <b>Неперевірена інформація</b> в пресі: Le ministre <b>serait</b> malade — «за непідтвердженими даними».
- <b>Майбутнє в минулому</b>: Il a dit qu'il <b>viendrait</b> (тема M5).
## Futur чи conditionnel на письмі
Je ferai і je ferais у багатьох людей звучать однаково. Тест: підстав іншу особу. Il <b>fera</b> (futur) / il <b>ferait</b> (conditionnel); nous <b>ferons</b> / nous <b>ferions</b>. Тоді питання: це впевнене майбутнє чи щось уявне, ввічливе, умовне?
## Conditionnel passé
aurais / serais + participe. Жаль або докір про минуле: J'<b>aurais dû</b> venir. Tu <b>aurais pu</b> me prévenir. Нереальна умова: Si j'avais su, je <b>serais venu</b>.`,
M4:`## Що це
Subjonctif — не час, а спосіб. Він показує дію не як факт, а через ставлення до неї: бажання, необхідність, емоцію, сумнів. Майже завжди стоїть після <b>que</b> у підрядному реченні, коли підмет там <b>інший</b>, ніж у головному.
## Утворення
Основа від ils у présent + <b>-e, -es, -e, -ions, -iez, -ent</b>.
| | parler (ils parl-ent) | finir (ils finiss-ent) | venir (ils vienn-ent / nous ven-ons) |
| que je | parle | finisse | vienne |
| que tu | parles | finisses | viennes |
| qu'il | parle | finisse | vienne |
| que nous | parlions | finissions | venions |
| que vous | parliez | finissiez | veniez |
| qu'ils | parlent | finissent | viennent |
У дієсловах на -er форми je, tu, il, ils збігаються з présent, а nous і vous — з imparfait. Дієслова з двома основами (venir, prendre, boire, devoir) беруть nous / vous від nous у présent: que nous <b>prenions</b>, que vous <b>buviez</b>.
## Повністю нерегулярні
| être | avoir | aller | faire | pouvoir | savoir | vouloir |
| sois | aie | aille | fasse | puisse | sache | veuille |
| soit | ait | aille | fasse | puisse | sache | veuille |
| soyons | ayons | allions | fassions | puissions | sachions | voulions |
| soient | aient | aillent | fassent | puissent | sachent | veuillent |
## Тригери
| Категорія | Вирази |
| воля, бажання | vouloir que, souhaiter que, préférer que, demander que, exiger que |
| необхідність | il faut que, il est nécessaire / important / essentiel que |
| емоції | être content / triste / surpris que, avoir peur que, regretter que |
| сумнів, можливість | douter que, ne pas penser que, ne pas croire que, il est possible que |
| сполучники | bien que, pour que, afin que, avant que, à moins que, sans que, jusqu'à ce que |
## Коли subjonctif НЕ потрібен
- Підмет той самий → інфінітив: Je veux <b>partir</b> (не que je parte).
- espérer que, penser que, croire que (у ствердженні), il est probable que, il est sûr que → індикатив.
- après que → індикатив (хоча французи часто помиляються тут самі).`,
M5:`## Принцип
Коли вводне дієслово стоїть у présent (Il dit que…), часи в непрямій мові не змінюються. Коли воно в минулому (Il a dit que…, Il disait que…), кожен час зсувається на крок у минуле.
| Пряма мова | Непряма (після il a dit que…) |
| présent: « Je suis prêt. » | imparfait: qu'il était prêt |
| passé composé: « J'ai fini. » | plus-que-parfait: qu'il avait fini |
| futur: « Je viendrai. » | conditionnel: qu'il viendrait |
| futur antérieur: « J'aurai fini. » | conditionnel passé: qu'il aurait fini |
| imparfait, plus-que-parfait, conditionnel | не змінюються |
| impératif: « Viens ! » | de + інфінітив: Il m'a dit de venir |
## Чому для нас це складно
В українській час не зсувається: «Він сказав, що втомлений». Французька вимагає зсуву: Il a dit qu'il <b>était</b> fatigué. Тому помилка з'являється майже автоматично. Після кожного «il a dit que», «elle m'a expliqué que» перевіряй час.
## Особи та слова часу
Займенники змінюються за логікою: « Je t'aime » → Il a dit qu'il <b>m'</b>aimait.
| Пряма | Непряма |
| aujourd'hui | ce jour-là |
| hier | la veille |
| demain | le lendemain |
| la semaine prochaine | la semaine suivante |
| il y a deux jours | deux jours plus tôt |
| maintenant | à ce moment-là |
## Питання в непрямій мові
- загальне (так / ні) → <b>si</b>: « Tu viens ? » → Il m'a demandé si je venais.
- qu'est-ce que → <b>ce que</b>; qu'est-ce qui → <b>ce qui</b>.
- où, quand, pourquoi, comment зберігаються.
- Інверсії й знака питання немає: Il m'a demandé où j'allais.`,
N1:`## Загальна логіка
Майже кожен французький іменник потребує «супровідника»: артикля, присвійного (mon), вказівного (ce) або числа. Іменник без нічого — рідкість. Українська артиклів не має, тож тут допомагає лише свідома перевірка.
| | чол. рід | жін. рід | перед голосною | множина |
| означений | le | la | l' | les |
| неозначений | un | une | un / une | des |
| партитивний | du | de la | de l' | des |
## Як вибирати: три питання
- Це конкретна, відома річ або поняття загалом? → <b>le / la / les</b>. Le café est prêt. J'aime le café.
- Це одна зліченна річ, нова для читача? → <b>un / une / des</b>. J'ai acheté un livre.
- Це частина чогось незліченного (їжа, рідина, якість)? → <b>du / de la / de l'</b>. Je bois de l'eau. Il a du courage.
! Після aimer, adorer, préférer, détester — завжди означений: J'aime <b>le</b> chocolat (а не du chocolat), бо це смак загалом.
## Коли артикль стає de
- Після заперечення: Je n'ai pas <b>de</b> voiture. Виняток — être: Ce n'est pas <b>un</b> problème.
- Після слів кількості: beaucoup de, peu de, trop de, assez de, un kilo de, une bouteille de.
- Перед прикметником у множині (письмова норма): <b>de</b> bons amis.
## Злиття з à і de
à + le = <b>au</b>, à + les = <b>aux</b>, de + le = <b>du</b>, de + les = <b>des</b>. З la та l' злиття немає: à la gare, de l'hôtel.
## Без артикля
- професія після être: Il est médecin;
- після en: en France, en voiture;
- після avec / sans з абстрактним: avec plaisir, sans problème;
- у переліках і заголовках.`,
N2:`## Рід
Рід французького слова часто не збігається з українським: <i>la table</i> (стіл), <i>le livre</i> (книжка). Тому кожне нове слово вчи разом з артиклем, а для слів на голосну — з прикметником: <i>un grand hôtel</i>.
| Зазвичай жіночий | Зазвичай чоловічий |
| -tion, -sion: la nation | -ment: le moment |
| -té: la liberté | -age: le fromage (але la page, la plage, l'image) |
| -ure: la voiture | -isme: le tourisme |
| -ance, -ence: la chance (але le silence) | -eau: le bureau (але l'eau, la peau) |
| -ette, -ie, -ude | -oir, -ier, -et |
## Множина
| Закінчення | Правило | Винятки |
| більшість | +s | — |
| -s, -x, -z | не змінюється: le prix → les prix | — |
| -eau, -au, -eu | +x: bateaux, jeux | pneus, bleus |
| -al | -aux: journaux | bals, festivals, carnavals |
| -ail | +s: détails | travail → travaux, vitrail → vitraux |
| -ou | +s: trous | 7 слів на -oux: bijou, caillou, chou, genou, hibou, joujou, pou |
Особливі: un œil → des <b>yeux</b>, le ciel → les <b>cieux</b>, monsieur → <b>messieurs</b>, madame → <b>mesdames</b>.
## Перевірка на письмі
Множину майже ніколи не чути. Перевіряй увесь ланцюжок: детермінант → іменник → прикметник → дієслово. «Le<b>s</b> petite<b>s</b> maison<b>s</b> blanche<b>s</b> son<b>t</b> belle<b>s</b>» — шість позначок множини, з яких на слух чути лише одну (les).`,
N3:`## Узгодження
Прикметник бере рід і число іменника. Якщо іменників кілька і вони різного роду — чоловічий рід множини: un garçon et une fille content<b>s</b>.
## Жіночий рід
| Правило | Приклад |
| +e | grand → grande |
| уже на -e: без змін | rouge → rouge |
| -er → -ère | cher → chère |
| -if → -ive | actif → active |
| -eux → -euse | heureux → heureuse |
| -el, -eil → -elle, -eille | naturel → naturelle |
| -en, -on → -enne, -onne | italien → italienne, bon → bonne |
| -et → -ette | muet → muette (але complet → complète) |
Нерегулярні: blanc → blanche, frais → fraîche, long → longue, doux → douce, faux → fausse, gentil → gentille, fou → folle, beau → belle, nouveau → nouvelle, vieux → vieille.
## Місце
За замовчуванням прикметник стоїть <b>після</b> іменника: une robe rouge, un film intéressant. Завжди після: кольори, національність, форма, дієприкметники (une porte fermée).
Перед іменником стоять короткі часті прикметники (мнемоніка BAGS):
- <b>B</b>eauté: beau, joli;
- <b>A</b>ge: jeune, vieux, nouveau;
- <b>G</b>oodness: bon, mauvais, gentil;
- <b>S</b>ize: grand, petit, gros, long.
## Значення залежить від місця
| Перед | Після |
| un ancien collègue — колишній | un meuble ancien — старовинний |
| ma propre voiture — власна | une voiture propre — чиста |
| mon cher ami — любий | un livre cher — дорогий |
| un grand homme — великий | un homme grand — високий |
| la seule personne — єдина | une personne seule — самотня |
## Кольори
Незмінні, якщо колір походить від іменника (des yeux <b>marron</b>, des chaussures <b>orange</b>) або складений (des robes <b>bleu clair</b>).`,
N4:`## Порівняльний ступінь
- З прикметником або прислівником: <b>plus / moins / aussi</b> + слово + <b>que</b>. Elle est plus grande que moi. Il parle aussi vite que toi.
- З іменником: <b>plus de / moins de / autant de</b> + іменник + que. J'ai autant de travail que lui.
- З дієсловом: дієслово + <b>plus / moins / autant</b> + que. Il travaille plus que moi.
## Найвищий ступінь
<b>le / la / les + plus / moins</b> + прикметник. Порівнюване вводиться через <b>de</b>, а не «в»: le plus grand <b>de</b> la classe, la plus belle ville <b>du</b> monde.
Якщо прикметник стоїть після іменника, артикль повторюється: la ville <b>la</b> plus chère. З прислівником — завжди le: C'est elle qui court <b>le</b> plus vite.
## Нерегулярні форми
| Звичайна | Порівняльний | Найвищий |
| bon (прикм.) | meilleur | le meilleur |
| bien (присл.) | mieux | le mieux |
| mauvais | plus mauvais / pire | le pire |
| beaucoup | plus | le plus |
| peu | moins | le moins |
## Тест: meilleur чи mieux
Постав у речення звичайну форму. Підходить <b>bon</b> → пиши <b>meilleur</b>: Ce vin est bon → meilleur. Підходить <b>bien</b> → пиши <b>mieux</b>: Elle chante bien → mieux. Безособове «так краще» — c'est mieux.
## Займенники після que
Після que стоїть наголошена форма: plus grand que <b>moi, toi, lui, elle, nous, vous, eux, elles</b>.`,
N5:`## Навіщо це
Французьке офіційне та академічне письмо тяжіє до іменників. Замість «коли ціни зросли, люди почали економити» пишуть <i>L'augmentation des prix a poussé les gens à économiser</i>. Текст стає стислішим і звучить як «доросле» письмо: листи до адміністрації, звіти, есе DELF B2.
## Дієслово → іменник
| Суфікс | Рід | Приклад |
| -tion, -ation | жін. | réaliser → la réalisation |
| -ment | чол. | changer → le changement |
| -age | чол. | laver → le lavage |
| -ure | жін. | ouvrir → l'ouverture |
| -ance, -ence | жін. | naître → la naissance |
| -ée | жін. | arriver → l'arrivée |
| без суфікса | різний | choisir → le choix, attendre → l'attente, vendre → la vente |
## Прикметник → іменник
| Суфікс | Приклад |
| -té, -ité | beau → la beauté, facile → la facilité |
| -esse | jeune → la jeunesse |
| -eur | long → la longueur |
| -ise | franc → la franchise |
## Як перебудувати речення
- Підмет стає доповненням з de: Le gouvernement a décidé → la décision <b>du</b> gouvernement.
- Прислівник стає прикметником: Il est parti brusquement → son départ <b>brusque</b>.
- Підрядне речення стає прийменниковою групою: à cause de, grâce à, en raison de, avant, après, lors de, malgré, en cas de.
! Не будуй ланцюги з трьох-чотирьох іменників з de: текст стане важким. Одна-дві номіналізації на речення достатньо.`,
P1:`## Головне правило
Не перекладай з української. «Я йому допомагаю» — давальний відмінок, але aider qqn у французькій бере прямий додаток: Je <b>l'</b>aide. Вирішує французьке дієслово: чи стоїть після нього à.
| Особа | COD (без à) | COI (з à) |
| je | me | me |
| tu | te | te |
| il | le | lui |
| elle | la | lui |
| nous | nous | nous |
| vous | vous | vous |
| ils / elles | les | leur |
Різниця з'являється лише в 3-й особі. Саме там і робимо помилки.
## Дієслова-пастки
| Прямий додаток (le, la, les) | Непрямий (lui, leur) |
| aider, appeler, écouter, attendre | téléphoner à, parler à, répondre à |
| chercher, regarder, remercier | demander à, dire à, donner à, écrire à |
| inviter, suivre, croire (qqn) | plaire à, sourire à, ressembler à, conseiller à |
## Місце займенника
Перед тим дієсловом, до якого належить за змістом:
- Je <b>le</b> vois. Je ne <b>le</b> vois pas.
- Je <b>l'</b>ai vu (перед допоміжним).
- Je vais <b>le</b> voir. Je ne veux pas <b>le</b> voir (перед інфінітивом).
- Ствердний імператив — після: Regarde-<b>le</b>.
## Особливі випадки
- penser à, s'intéresser à, faire attention à + особа → не lui, а <b>à lui / à elle</b>: Je pense à elle.
- Нейтральне le замінює цілу думку: Je <b>le</b> sais. Je te <b>l'</b>ai dit.`,
P2:`## en: все, що вводиться de
- Партитив або неозначений артикль: du pain → j'<b>en</b> mange; des amis → j'<b>en</b> ai.
- З кількістю (кількість лишається в реченні): J'en ai <b>trois</b>. J'en veux <b>un kilo</b>. Il y en a <b>beaucoup</b>.
- Дієслова й вирази з de: parler de, avoir besoin de, se souvenir de, s'occuper de, avoir peur de, être content de: J'<b>en</b> ai besoin.
- Місце, звідки: Je viens de Lyon → J'<b>en</b> viens.
## y: місце та à + річ
- Місце (à, en, dans, chez, sur…): Je vais à Paris → J'<b>y</b> vais. Il est chez lui → Il <b>y</b> est.
- Дієслова з à + річ або ідея: penser à, réfléchir à, s'intéresser à, répondre à (une lettre), participer à, croire à: J'<b>y</b> pense.
## А якщо йдеться про людей
| Конструкція | Річ | Особа |
| de + … | J'en parle. | Je parle <b>de lui</b>. |
| penser à, s'intéresser à | J'y pense. | Je pense <b>à elle</b>. |
| parler à, répondre à (COI) | J'y réponds (à la lettre). | Je <b>lui</b> réponds. |
## Місце в реченні
Як в інших займенників: перед дієсловом, перед допоміжним, перед інфінітивом. Якщо обидва — y перед en: Il <b>y en</b> a. Participe passé з en не узгоджується (тема O4).
## Стійкі вирази
Ça y est ! — Готово! Vas-y ! / Allons-y ! — Давай! / Ходімо! Je n'en peux plus — Я більше не можу. Je m'en vais — Я йду. On y va — Пішли.`,
P3:`## Метод: розбий на два речення
Знайди, яку роль слово-антецедент відіграє у <b>другому</b> реченні:
| Друге речення | Роль | Відносний |
| Le livre est sur la table. | підмет | <b>qui</b>: le livre qui est sur la table |
| Je lis le livre. | прямий додаток | <b>que</b>: le livre que je lis |
| Je parle du livre. | de + … | <b>dont</b>: le livre dont je parle |
| J'habite dans la ville. | місце | <b>où</b>: la ville où j'habite |
| Je travaille avec le collègue. | прийменник + … | <b>avec qui / avec lequel</b> (тема P5) |
## dont докладно
- Після дієслів з de: parler de, avoir besoin de, se souvenir de, avoir peur de, rêver de.
- Після прикметників з de: fier de, content de, responsable de.
- Приналежність: l'homme <b>dont</b> la fille est médecin (= la fille de l'homme).
- Порядок після dont — звичайний: dont + підмет + дієслово + додаток: la femme dont je connais <b>le mari</b>.
## ce qui, ce que, ce dont
Коли антецедента немає («те, що»):
- <b>Ce qui</b> m'intéresse, c'est l'histoire. (підмет)
- Je sais <b>ce que</b> tu veux. (прямий додаток)
- <b>Ce dont</b> j'ai besoin, c'est du temps. (de)
## Дрібниці, що видно на письмі
- que → qu' перед голосною, а qui — ніколи: l'homme qui arrive.
- Для часу — où, а не quand: le jour où, l'année où, au moment où.
- Після que з прямим додатком participe узгоджується: la lettre que j'ai écrit<b>e</b> (тема O4).`,
P4:`## Таблиця колонок
Займенники стоять перед дієсловом у фіксованому порядку. Береш щонайбільше по одному з кожної колонки, зліва направо.
| 1 | 2 | 3 | 4 | 5 |
| me, te, se, nous, vous | le, la, les | lui, leur | y | en |
Колонки 1 і 3 разом не трапляються.
## Приклади
- Il <b>me le</b> donne.
- Je <b>le lui</b> donne. Je <b>les leur</b> envoie.
- Il <b>m'en</b> parle. Je <b>vous y</b> emmène.
- Il <b>y en</b> a.
## У passé composé та з запереченням
Усі займенники стоять перед допоміжним: Je <b>le lui</b> ai donné. Заперечення обгортає займенники разом з допоміжним: Je <b>ne</b> le lui ai <b>pas</b> donné.
## Ствердний імператив: інший порядок
Дієслово – прямий – непрямий – y – en, усе через дефіс:
- Donne-<b>le-moi</b>. Donne-<b>le-lui</b>.
- moi / toi + en → <b>m'en, t'en</b>: Donne-m'en.
Заперечний імператив повертає звичайний порядок: <b>Ne me le</b> donne pas.
! Зв'язок з темою O4: у «Je les lui ai montrées» les стоїть перед дієсловом, тому participe узгоджується.`,
P5:`## Коли потрібен
Після прийменника (avec, pour, sur, dans, sans, par, chez, vers…) у відносному реченні.
- Для речей — <b>lequel</b> та його форми.
- Для осіб — частіше <b>qui</b>: la personne avec qui je travaille.
- Після parmi та entre — лише lesquels / lesquelles: les amis <b>parmi lesquels</b>…
| | просто | à + | de + |
| чол. однина | lequel | auquel | duquel |
| жін. однина | laquelle | à laquelle | de laquelle |
| чол. множина | lesquels | auxquels | desquels |
| жін. множина | lesquelles | auxquelles | desquelles |
## auquel: дієслова з à
penser à, participer à, s'intéresser à, répondre à, assister à: la réunion <b>à laquelle</b> j'ai assisté, les questions <b>auxquelles</b> j'ai répondu.
## duquel чи dont
- <b>dont</b> — для простого de, що стоїть одразу після слова: le livre dont je parle.
- <b>duquel</b> — після складених прийменників: près de, à côté de, au milieu de, autour de, en face de, à cause de: le restaurant <b>en face duquel</b> j'habite.
- Також після прийменника з іменником: la société <b>pour le compte de laquelle</b> je travaille.
## quoi
Після прийменника, коли антецедент нейтральний (ce, rien, quelque chose): C'est ce <b>à quoi</b> je pense. Il n'y a rien <b>sur quoi</b> compter.`,
O1:`## Чому це важко
У французькій багато граматики «німої»: різні слова звучать однаково, і розрізнити їх можна лише за роллю в реченні. Метод простий: заміни слово на інше, яке звучить по-різному. Якщо заміна працює — це та форма.
| Пара | Що це | Тест | Приклад |
| a / à | avoir / прийменник | → avait | Il <b>a</b> mal <b>à</b> la tête. |
| et / est | «і» / être | → était | Il <b>est</b> grand <b>et</b> fort. |
| son / sont | «його» / être | → étaient; son → mon | Ses parents <b>sont</b> là avec <b>son</b> frère. |
| on / ont | займенник / avoir | → avaient; on → il | <b>On</b> sait qu'ils <b>ont</b> raison. |
| ou / où | «або» / «де, куди, коли» | → ou bien | <b>Où</b> vas-tu, ici <b>ou</b> là ? |
## Нюанси
- À на початку речення пишуть з великої і з акцентом: À bientôt.
- où — єдине французьке слово з ù.
- on у розмові означає «ми»: On est arrivés. На письмі краще nous.
## Як тренувати
Візьми свій текст і зроби окремий прохід лише по цих десяти словах. Підкресли кожне й проведи тест подумки. За два-три тижні тести стануть автоматичними.`,
O2:`## Група ce / se / c'est
| Слово | Що це | Тест |
| ces | «ці» (множина від ce, cet, cette) | заміни на однину: ce livre |
| ses | «його / її» у множині | заміни на mes або son |
| c'est | «це є» | заміни на c'était |
| s'est | se + être (займенникове дієслово в PC) | заміни на je me suis |
| sait, sais | savoir | заміни на savait |
| ce / se | ce + іменник або ce que; se + дієслово | se → me: il se lave → je me lave |
## Інші пари
| Слово | Що це | Тест |
| la / là / l'a | артикль або займенник / «там» / le, la + avoir | la → le; là → ici; l'a → l'avait |
| peu / peut / peux | «мало» / pouvoir | peu → beaucoup; peut → pouvait |
| quel(le)(s) / qu'elle(s) | питальне + іменник / que + elle | qu'elle → qu'il |
| sans / s'en / sent | «без» / se + en / sentir | s'en → m'en; sent → sentait |
| mais / mes / met | «але» / «мої» / mettre | mes → tes; met → mettait |
## quel узгоджується
quel livre, quel<b>le</b> heure, quel<b>s</b> livres, quel<b>les</b> idées. Пастка: «Quelle est ta question ?» — quelle узгоджується з question, навіть якщо стоїть через дієслово.
! Склади власний список омофонів, у яких помиляєшся найчастіше, і перечитуй кожен свій текст окремим проходом лише по них.`,
O3:`## Чому це важко
parler, parlé, parlez, parlais, parlait звучать однаково або майже однаково. Вимова не допоможе. Потрібна граматика.
## Головний тест
Підстав дієслово III групи, у якого форми звучать різно: <b>vendre / vendu / vendez / vendait</b> (або prendre / pris).
- Je veux (manger?) → je veux <b>vendre</b> ✓ → інфінітив: manger.
- J'ai (mangé?) → j'ai <b>vendu</b> ✓ → participe: mangé.
| Форма | Коли | Тест |
| -er | інфінітив після іншого дієслова (aller, vouloir, pouvoir, devoir, aimer…) або прийменника (à, de, pour, sans, avant de) | vendre |
| -é, -ée, -és, -ées | participe після avoir / être, або як прикметник | vendu |
| -ez | vous | vous vendez |
| -ais, -ait, -aient | imparfait | vendait |
## Participe як прикметник
Без допоміжного дієслова participe поводиться як прикметник і узгоджується: les portes <b>fermées</b>, une lettre <b>envoyée</b>, le travail <b>terminé</b>.
## Пастка: займенник між дієсловами
Je vais <b>te</b> (téléphoner), Je <b>l'</b>ai (vu), Il faut <b>les</b> (acheter). Займенник не змінює правила: тест працює так само. Je vais te vendre ✓ → téléphoner.`,
O4:`## Три правила participe passé
- З <b>être</b> → узгоджується з підметом (тема V2).
- З <b>avoir</b> → узгоджується з прямим додатком (COD), тільки якщо він стоїть <b>перед</b> дієсловом.
- Без допоміжного → як прикметник (тема O3).
## Алгоритм для avoir
- Знайди participe з avoir.
- Спитай «що? кого?» після дієслова: J'ai mangé — quoi ?
- Відповіді немає або вона стоїть після дієслова → не узгоджуй.
- Відповідь стоїть перед дієсловом → узгоджуй з нею в роді й числі.
## Де COD стоїть перед дієсловом
| Випадок | Приклад |
| займенники me, te, le, la, les, nous, vous | Il nous a invité<b>s</b>. Je l'ai vu<b>e</b>. |
| відносне que | Les lettres que j'ai reçu<b>es</b>. |
| питальне quel, combien de | Quelle robe as-tu choisi<b>e</b> ? Combien de livres as-tu lu<b>s</b> ? |
## Коли не узгоджується
- з en: Des pommes ? J'en ai mangé.
- з непрямим додатком: Je leur ai parlé (leur — COI).
- у безособових: Les chaleurs qu'il a fait.
- fait + інфінітив: Je les ai fait venir.
## Перевір вимовою
У деяких дієслів узгодження чути: écrit / écri<b>te</b>, fait / fai<b>te</b>, pris / pri<b>se</b>, mis / mi<b>se</b>, ouvert / ouver<b>te</b>. «La lettre que j'ai écrite» вимовляється [ekʁit]. Якщо в цих дієсловах ти чуєш приголосну, у решти постав e на письмі.`,
O5:`## Займенникові дієслова в passé composé
Вони завжди беруть être, але узгоджуються за правилом avoir. Метод: подумки заміни être на avoir і знайди прямий додаток.
| Речення | Заміна | Прямий додаток | Узгодження |
| Elle s'est lavée. | elle a lavé qui ? | se (= elle), перед | так |
| Elle s'est lavé les mains. | a lavé quoi ? | les mains, після | ні |
| Ils se sont parlé. | parler <b>à</b> qqn | se — непрямий | ні |
Дієслова, де se — непрямий (узгодження немає): se parler, se téléphoner, se dire, se demander, s'écrire, se sourire, se plaire, se ressembler, se mentir, se succéder.
Суто займенникові (s'en aller, se souvenir, se moquer, s'évanouir) — завжди узгоджуються з підметом: Elle s'est souvenu<b>e</b>.
## leur
- Перед дієсловом — займенник (= à eux), <b>ніколи без -s</b>: Je leur parle.
- Перед іменником — присвійний: <b>leur</b> + однина (leur maison, одна на всіх), <b>leurs</b> + множина (leurs enfants).
## tout
| Форма | Приклад |
| tout (чол. однина) | tout le temps |
| toute (жін. однина) | toute la journée |
| tous (чол. множина) | tous les jours; займенник: Ils sont tous là [tus] |
| toutes (жін. множина) | toutes les semaines |
Як прислівник («цілком») tout незмінний: Ils sont tout contents. Але перед жіночим прикметником на приголосну змінюється: Elle est tou<b>te</b> petite. Elles sont tou<b>tes</b> petites.`,
S1:`## Порядок слів
Підмет – (ne) – займенники – дієслово – (pas) – додатки. Прикметники зазвичай після іменника, прислівники — після дієслова.
## Заперечення
| Конструкція | Значення |
| ne… pas | не |
| ne… jamais | ніколи |
| ne… plus | більше не |
| ne… rien | нічого |
| ne… personne | нікого |
| ne… aucun(e) | жодний |
| ne… ni… ni… | ні… ні… |
| ne… pas encore | ще не |
| ne… que | тільки (це не заперечення) |
Друга частина замінює pas, а не додається до нього: Je ne vois <b>personne</b> (не *pas personne).
## Деталі, що видно на письмі
- personne і rien можуть бути підметом: <b>Personne n'</b>est venu. <b>Rien ne</b> marche.
- У passé composé ne… pas обгортає допоміжне: Je n'ai pas vu. Але personne стоїть після participe: Je n'ai vu personne.
- Перед інфінітивом ne pas стоять разом: Je préfère <b>ne pas</b> répondre.
## Три типи питань
| Тип | Приклад | Де вживати |
| інтонація | Tu viens ? | розмова |
| est-ce que | Est-ce que tu viens ? | нейтрально |
| інверсія | Viens-tu ? | письмо, ввічливо |
Інверсія з іменником: підмет лишається, додається займенник: Marie vient-<b>elle</b> ? Pierre a-<b>t-il</b> fini ? Між двома голосними вставляється -t-: a-t-il, parle-t-elle, va-t-on.`,
S2:`## Пробіли
У Франції перед подвійними знаками ставиться нерозривний пробіл. Він тримає знак разом зі словом, щоб той не перескочив на новий рядок.
| Знак | Пробіл перед | Пробіл після |
| . , | ні | так |
| ; ! ? | так | так |
| : | так | так |
| « | — | так |
| » | так | — |
Нерозривний пробіл на Mac: Option + пробіл. У Канаді та Швейцарії перед ; ! ? часто ставлять вузький пробіл або не ставлять зовсім.
## Лапки і діалог
Основні лапки — « ялинки » з пробілами всередині. Вкладені — “ ”. У діалогах кожна репліка починається з тире: <i>— Tu viens ? — Oui, j'arrive.</i>
## Кома: головна відмінність від української
В українській комою відокремлюється кожне підрядне речення. У французькій — ні:
- Без коми перед que, si, quand, parce que, якщо підрядне стоїть після головного: Je sais que tu as raison. Il est resté parce qu'il pleuvait.
- З комою, якщо підрядне стоїть на початку: Quand il est arrivé, nous mangions.
- qui / que без коми, якщо уточнюють, яке саме: Le frère qui habite à Lyon (один з кількох). З комами, якщо просто пояснюють: Mon frère, qui habite à Lyon, est médecin (брат один).
## Кома обов'язкова
- після вступних слів: Cependant, Ensuite, Par ailleurs, En effet;
- перед mais, car;
- у переліку, але не перед et останнього елемента: du pain, du fromage et du vin.
## Великі літери
Мови, дні, місяці — з малої: le français, lundi, janvier. Національність як іменник — з великої (les Français), як прикметник — з малої (un livre français).`,
S3:`## Зв'язки за функцією
| Функція | Слова | Після них |
| причина | parce que (відповідь на pourquoi), car (письм.), puisque (причина відома), comme (на початку) | індикатив |
| причина + іменник | grâce à (+), à cause de (−), en raison de (офіц.) | іменник |
| наслідок | donc, c'est pourquoi, par conséquent, si bien que | індикатив |
| протиставлення | mais, cependant, pourtant, toutefois, néanmoins | індикатив |
| контраст | alors que, tandis que | індикатив |
| поступка | bien que, quoique | subjonctif |
| поступка + іменник | malgré | іменник |
| мета, той самий підмет | pour, afin de | інфінітив |
| мета, інший підмет | pour que, afin que | subjonctif |
| час | quand, lorsque, pendant que, dès que, après que | індикатив |
| час | avant que, jusqu'à ce que | subjonctif |
## Каркас тексту
- Порядок: Tout d'abord… Ensuite… De plus / En outre… Enfin…
- Аргумент: D'une part… d'autre part… Certes…, mais…
- Висновок: En conclusion, Bref, En somme.
## Типові помилки
- car на початку речення: <s>Car il pleuvait, …</s> → Comme il pleuvait, …
- pour que з тим самим підметом: <s>Je travaille pour que je réussisse</s> → Je travaille <b>pour réussir</b>.
- malgré que — розмовне, на письмі краще <b>bien que</b>.
- même si + conditionnel: <s>même si j'aurais</s> → même si j'<b>avais</b>.`,
S4:`## Три типи
| Тип | Після si | У головному | Значення |
| 1 | présent | présent, futur, impératif | реальна умова |
| 2 | imparfait | conditionnel présent | уявна зараз або в майбутньому |
| 3 | plus-que-parfait | conditionnel passé | нереальна в минулому |
- Si tu viens, je <b>serai</b> content.
- Si tu venais, je <b>serais</b> content.
- Si tu étais venu, j'<b>aurais été</b> content.
## Змішані умови
Частини можуть належати до різних часів:
- Si j'<b>avais étudié</b> (тоді), je <b>parlerais</b> bien maintenant.
- Si j'<b>étais</b> plus organisé (завжди), je n'<b>aurais</b> pas <b>oublié</b> (того разу).
## Заборона і виняток
Одразу після si в умові не буває ні futur, ні conditionnel. Виняток: si у значенні «чи» в непрямому питанні — це не умова: Je ne sais pas s'il <b>viendra</b> ✓.
## Скорочення
si + il → <b>s'il</b>, si + ils → <b>s'ils</b>. Але si elle, si on — без скорочення.
## Альтернативи si
- au cas où + conditionnel: Au cas où il pleuvrait, …
- à condition que + subjonctif;
- sans + іменник: Sans ton aide, je n'aurais pas réussi;
- même si + індикатив: Même si c'est difficile, …`,
S5:`## Gérondif
en + основа nous у présent + -ant: nous faisons → <b>en faisant</b>; nous finissons → <b>en finissant</b>. Винятки: en étant, en ayant, en sachant.
- одночасність: Il travaille en écoutant de la musique;
- спосіб: C'est en forgeant qu'on devient forgeron;
- умова: En travaillant plus, tu réussiras;
- tout en — протиставлення: Tout en étant riche, il vit simplement.
! Підмет gérondif має збігатися з підметом речення. «En sortant du bus, la pluie a commencé» — помилка: виходить, що з автобуса виходив дощ. Правильно: En sortant du bus, j'ai vu qu'il pleuvait.
## Participe présent без en
Письмова заміна qui + дієслово, незмінна: les étudiants <b>ayant</b> réussi = qui ont réussi. Не плутай з прикметником на -ant, який узгоджується: des enfants obéissant<b>s</b>. Іноді вони й пишуться по-різному:
| Participe présent | Прикметник |
| fatiguant | fatigant |
| convainquant | convaincant |
| différant | différent |
| négligeant | négligent |
## Виділення: c'est… qui / que
- c'est… <b>qui</b> — виділяє підмет: C'est Marie qui a gagné.
- c'est… <b>que</b> — усе інше: C'est hier que je l'ai vue. C'est à toi que je parle.
- Дієслово після qui узгоджується з виділеним словом: C'est moi qui <b>suis</b>, c'est vous qui <b>avez</b>.
- Ce qui…, c'est… / Ce que…, c'est…: Ce que j'aime, c'est voyager.
## Інші прийоми письмового стилю
- Пасив: Le pont a été construit en 1890.
- Інверсія після peut-être, ainsi, sans doute на початку: Peut-être viendra-t-il.
- Винесення (Ce film, je l'ai adoré) — розмовне, на письмі обережно.`
};

/* why topic B builds on topic A: key "B<A" */
const WHY = {
"V2<V1":"допоміжні avoir та être у passé composé стоять у présent: j'ai, il est.",
"V3<V2":"imparfait вчиться в парі з passé composé: щоб обирати між ними, треба знати обидва.",
"V4<V3":"plus-que-parfait = avoir / être в imparfait + participe: j'avais fini.",
"V5<V4":"passé simple впізнаєш у текстах, де поруч стоять imparfait і plus-que-parfait.",
"M1<V1":"наказовий спосіб — це форми tu, nous, vous з présent без займенника.",
"M2<V1":"закінчення futur (-ai, -as, -a, -ons, -ez, -ont) — це présent дієслова avoir.",
"M3<M2":"conditionnel будується на основі futur: fer-, ser-, pourr- …",
"M3<V3":"закінчення conditionnel ті самі, що в imparfait: -ais, -ait, -aient.",
"M4<M3":"subjonctif часто стоїть поруч із conditionnel: Je voudrais que tu viennes.",
"M4<V1":"основа subjonctif береться з форми ils у présent: ils finissent → que je finisse.",
"M5<M4":"у непрямій мові прохання й бажання переходять у que + subjonctif або de + інфінітив.",
"M5<V4":"passé composé у непрямій мові стає plus-que-parfait.",
"N2<N1":"рід видно з артикля (le / la), а множину — з les / des.",
"N3<N2":"прикметник бере рід і число іменника, тож їх треба вміти визначати.",
"N4<N3":"порівнюють прикметники, тому потрібні їхні форми та місце в реченні.",
"N5<N4":"номіналізація часто робить іменник з прикметника: rapide → la rapidité.",
"N5<S3":"номіналізація працює разом зі зв'язками + іменник: en raison de, à cause de.",
"P1<V1":"займенник стоїть перед дієсловом, яке спершу треба правильно відмінити.",
"P2<P1":"y та en стоять на тому самому місці, що й le / lui, і їх легко сплутати.",
"P2<N1":"en замінює du, de la, des — тобто партитивні та неозначені артиклі.",
"P3<P2":"dont — «родич» en: обидва замінюють de + …",
"P3<S1":"відносні займенники зшивають прості речення, тож їх треба будувати впевнено.",
"P4<P2":"у подвійних займенниках беруть участь y та en.",
"P4<M1":"у ствердному наказовому порядок займенників інший: Donne-le-moi.",
"P5<P3":"lequel, auquel, duquel — розширення qui, que, dont після прийменників.",
"O1<V1":"a, est, sont, ont — це форми avoir та être у présent.",
"O2<O1":"той самий метод тестів заміни, тільки нові пари слів.",
"O2<P1":"ce / se та la / l'a плутають із займенниками le, la, se.",
"O3<V2":"закінчення -é — це participe passé з passé composé.",
"O4<O3":"спершу треба вміти написати -é, потім — додавати до нього -e / -s.",
"O4<P1":"узгодження залежить від займенників le, la, les перед дієсловом.",
"O5<O4":"правило для займенникових дієслів — розширення правила з avoir.",
"O5<P4":"leur як займенник і як присвійне слово плутають саме в реченнях з кількома займенниками.",
"S1<V1":"заперечення ne … pas обгортає відмінене дієслово.",
"S2<S1":"пунктуація залежить від типу речення: питання, заперечення, вигук.",
"S3<S2":"більшість зв'язків вимагає коми: Cependant, …",
"S4<S3":"si — це теж зв'язка, але зі своїми правилами часів.",
"S4<M3":"головна частина умовного речення стоїть у conditionnel.",
"S4<V4":"третій тип умовних речень вимагає plus-que-parfait після si.",
"S5<S4":"прийоми стилю спираються на впевнені складні речення.",
"S5<N5":"обидві теми — інструменти письмового стилю, і вони працюють разом."
};

export const content = { DOM, PHASES, T, EX, LONG, WHY, SOURCES };
