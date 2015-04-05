angular.module('Strom.services', [])

.factory('Trees', function() {
  var trees = [{
    year: 2014,
    id: "opatovicka_borovice",
    rank: 1,
    name: "Opatovická borovice",
    proposer: "Dalibor Badal, ZŠ, obec Velké Opatovice a Rodinné centrum Motýlek",
    kind: "borovice černá rakouská",
    age: "257 let",
    perimeter: "337 cm",
    location: "Jihomoravský kraj, okres Blansko, obec Velké Opatovice, zámecký park",
    gps: "",
    story: "Raritně větvená borovice je dominantou zámeckého parku ve Velkých Opatovicích a je unikátem celého kraje. Svým netypickým vzhledem přilákala už mnoho generací dětí k lezení po větvích. Tvarem připomíná sedmihlavou saň a také pověst mluví o tom, že se jedná o zakletého draka, se kterým bojoval svatý Jiří, jemuž je zasvěcený místní kostel. Podle pamětníků se borovici říkalo Julinka, protože pod ní na bílé lavičce sedávala hraběnka Julie Herbersteinová, poslední majitelka opatovického panství, pravnučka druhé manželky Napoleona Bonaparta. Borovice byla vybrána jako mateční strom pro sběr semen k dalšímu množení. V blízkosti stromu se nachází vzácná pět set let stará Opatovická lípa, ze které zbylo jen torzo a potřebovala by odbornou péči.",
    images: ["opatovicka_borovice1", "opatovicka_borovice2", "opatovicka_borovice3", "opatovicka_borovice4", "opatovicka_borovice5"],
    votes: 24834
  }, {
    year: 2014,
    id: "skomelsky_dub",
    rank: 2,
    name: "Skomelský dub",
    proposer: "Petr Chrz a obec Skomelno",
    kind: "dub letní",
    age: "610 let",
    perimeter: "630 cm",
    location: "Plzeňský kraj, okres Rokycany, obec Skomelno, u cesty směřující do Přírodního parku Radeč",
    gps: "",
    story: "Starý dub tu stál od nepaměti a děti z blízkého i dalekého okolí si k němu chodily hrát. Mezi nimi i Petr Chrz, který si na něj po čase vzpomněl a znovu ho navštívil. Majestátní dub jej okouzlil, a proto se rozhodl požádat o jeho památkovou ochranu. Přestože se nepodařilo dub vyhlásit za památný z důvodu nesouhlasu vlastníka pozemku, prohlásila ho obec Skomelno alespoň za významný. Dnes u něj můžete nalézt zídku z vyskládaných kamenů a malé posezení se stříškou. Dub je v každém ročním období jiný - tajuplný, hrozivý, nádherný až pohádkový, a proto ho chodí navštěvovat čím dál více lidí, od nejmenších až po seniory.",
    images: ["skomelsky_dub1", "skomelsky_dub2", "skomelsky_dub3", "skomelsky_dub4", "skomelsky_dub5"],
    votes: 8088
  }, {
    year: 2014,
    id: "dub_pitin",
    rank: 3,
    name: "Dub rodiny v Pitíně",
    proposer: "Římskokatolická farnost Pitín",
    kind: "dub letní",
    age: "100 let",
    perimeter: "242 cm",
    location: "Zlínský kraj, okres Uherské Hradiště, obec Pitín, kopec Jahodiska po červené turistické značce",
    gps: "",
    story: "Dub má pro obyvatele Pitína mimořádný význam a je místem častých rodinných výletů. Když člověk stane pod jeho korunou, naskytne se mu krásný pohled na reliéf Pálavy, Žďánický les, Chřiby s posvátným Velehradem, Vizovické vrchy a v hlubokém údolí pod kopcem pak samotný Pitín s kostelem sv. Stanislava.  Členové místní farnosti dub chápou jako symbol rodiny, a to také té církevní. Na dub měl totiž dlouhých 24 let výhled z okna i bývalý pitínský farář Miloslav Kunc.",
    images: ["dub_pitin1", "dub_pitin2", "dub_pitin3", "dub_pitin4", "dub_pitin5"],
    votes: 6714
  }, {
    year: 2014,
    id: "hruba_lipa",
    rank: 4,
    name: "Hrubá lípa",
    proposer: "ZŠ Jedovnice, SPŠ Jedovnice a Jiří Židů",
    kind: "lípa malolistá",
    age: "300 let",
    perimeter: "523 cm",
    location: "Jihomoravský kraj, okres Blansko, obec Jedovnice, ulice U Hrubé lípy",
    gps: "",
    story: "Hrubá, tj. velká, lípa na okraji Jedovnic shlíží do kraje už asi 300 let. Byla vysazena za časů hraběte Karla Ludvíka z Rogendorfu, který v Jedovnicích vystavěl barokní zámeček a nedaleko založil ves Rogendorf. Lípa stojí právě u cesty od zámečku kolem kostela do nové vsi, blízko hrobu těch, kdo podlehli nákaze cholery. Dobrý hrabě je dávno po smrti, zámeček zbořen, kostel přestavěn, ves Rogendorf přejmenována – jen Hrubá lípa zůstává jedním z pevných bodů v měnícím se světě, dnes i na poutní Svatojakubské cestě.",
    images: ["hruba_lipa1", "hruba_lipa2", "hruba_lipa3", "hruba_lipa4", "hruba_lipa5"],
    votes: 6556
  }, {
    year: 2014,
    id: "smirci_borovice",
    rank: 5,
    name: "Smírčí borovice",
    proposer: "Čestmíra Řezaninová a obec Nové Sady",
    kind: "borovice lesní",
    age: "200 let",
    perimeter: "258 cm",
    location: "Kraj Vysočina, okres Žďár nad Sázavou, obec Nové Sady, u polní cesty, kterou lemuje nově vysazená lipová alej",
    gps: "",
    story: "Příběh borovice již v roce 1926 zapsal zdejší kronikář Karel Brod. Podle vyprávění se v místě, kde borovice roste, pobili chasníci jdoucí od muziky a tři z nich při tom zemřeli.  U cesty a na sousední mezi jim pak na památku postavili tři žulové kameny s vytesanými kříži. U jednoho z nich později vyrostla osamělá borovice, která zde na rozdíl od kamenů zůstala dodnes. Na důkaz vážnosti stromu v roce 2011 vysadily rodiny z Nových Sadů kolem cesty lipovou alej.",
    images: ["smirci_borovice1", "smirci_borovice2", "smirci_borovice3", "smirci_borovice4", "smirci_borovice5"],
    votes: 6428
  }, {
    year: 2014,
    id: "doubravske_lipy",
    rank: 6,
    name: "Doubravské lípy",
    proposer: "František Landa, SDH Doubravka a obec Chrášťany",
    kind: "lípy malolisté",
    age: "250 a 150 let",
    perimeter: "505 a 290 cm",
    location: "Jihočeský kraj, okres České Budějovice, obec Chrášťany - Doubravka, asi 100 metrů od silnice Doubravka - Hosty",
    gps: "",
    story: "Lípy rostou v lokalitě zvané Stružka, kde každé ráno a odpoledne obecní slouha s pomocníky troubením svolával dobytek. Byly svědky mnoha místních událostí – v roce 1888 bouře, jež protrhla hráz rybníka, v roce 1772 hladomoru, při němž mnoho osadníků zahynulo, nebo protestů rolníků proti robotě, které přijel řešit krajský hejtman v doprovodu vojska. V jejich blízkosti stojí kříž, který zde údajně postavila rodina Landova. Zajímavostí je, že lípy s křížkem můžete nalézt u každého výjezdu z této obce a napočítáte jich celkem šestnáct.",
    images: ["doubravske_lipy1", "doubravske_lipy2", "doubravske_lipy3", "doubravske_lipy4", "doubravske_lipy5"],
    votes: 2038
  }, {
    year: 2014,
    id: "dub_heroltice",
    rank: 7,
    name: "Dub u Heroltic",
    proposer: "město Jihlava",
    kind: "dub letní",
    age: "140 let",
    perimeter: "277 cm",
    location: "Kraj Vysočina, okres Jihlava, obec Heroltice, v poli u obce Heroltice",
    gps: "",
    story: "Majestátní dub stojí uprostřed polí, odkud se zdrženlivě rozhlíží po okolí. Kdysi dávno se pod ním zastavovali unavení pocestní, kteří byli vděční za chvíli strávenou ve stínu jeho mohutné koruny. To bylo v dobách, kdy se u dubu sbíhaly polní cesty směřující do města. Pod korunou dubu před dvěma lety nadšení hledači drobných sakrálních památek objevili povalený kříž, nechali ho opravit a vrátili na původní místo. Město by chtělo obnovit vycházkovou trasu k dubu i nedaleké hrušni, zároveň by chtělo oba stromy vyhlásit jako památné.",
    images: ["dub_heroltice1", "dub_heroltice2", "dub_heroltice3", "dub_heroltice4", "dub_heroltice5"],
    votes: 1690
  }, {
    year: 2014,
    id: "dub_strazce",
    rank: 8,
    name: "Dub - strážce cest",
    proposer: "ZŠ a MŠ Brodce, SOŠ a SOU Horky n. Jizerou, obce Horky n. Jizerou a Brodce",
    kind: "dub letní",
    age: "300 let",
    perimeter: "476 cm",
    location: "Středočeský kraj, okres Mladá Boleslav, obec Horky n. Jizerou, u železného mostu",
    gps: "",
    story: "Dub stojí osamoceně na levém břehu řeky Jizery jako strážce cesty z Horek nad Jizerou do Brodec. Vysazen byl na panství Hartmanů z Klarsteina před 300 lety, v době, kdy obě obce byly ještě spojeny.  Pamatuje již mnoho generací místních obyvatel, mnoho významných událostí, hezkých i dramatických okamžiků a mnoho povodní, které rozvodněná Jizera v jeho okolí způsobila. Řekne-li se „u dubu“, všichni to místo znají, strom je jim blízký a všemi oblíbený. Díky snaze a péči obyvatel Brodecka byl dub loni zařazen mezi památné stromy.",
    images: ["dub_strazce1", "dub_strazce2", "dub_strazce3", "dub_strazce4", "dub_strazce5"],
    votes: 1170
  }, {
    year: 2014,
    id: "kukuluv_dub",
    rank: 9,
    name: "Kukulův dub",
    proposer: "studentky Lepařova Gymnázia",
    kind: "dub letní",
    age: "183 let",
    perimeter: "362 cm",
    location: "Královéhradecký kraj, okres Jičín, obec Jičín, kruhový objezd před nemocnicí",
    gps: "",
    story: "Podle starých map dub dříve stál v zahradě soukromé nemocnice, kterou zde v roce 1827 založil MUDr. František Kukula, krajský ranhojič. Je tedy možné, že strom vysadil právě on. Nedaleko dubu se nachází Valdštejnova lipová alej spojující centrum města s letohrádkem Libosad, v níž se nachází ve čtyřech řadách okolo tisíce stromů. V aleji se dobře daří vzácnému druhu brouka pachníku hnědému a chráněné veverce obecné.",
    images: ["kukuluv_dub1", "kukuluv_dub2", "kukuluv_dub3", "kukuluv_dub4", "kukuluv_dub5"],
    votes: 720
  }, {
    year: 2014,
    id: "lhotecka_lipa",
    rank: 10,
    name: "Lhotecká lípa",
    proposer: "obec Lhotka u Zlaté Olešnice",
    kind: "lípa malolistá",
    age: "více než 500 let",
    perimeter: "600 cm",
    location: "Liberecký kraj, okres Jablonec n. Nisou, obec Lhotka u Zlaté Olešnice, v centru obce u domu č. p. 1",
    gps: "",
    story: "Lípa byla dříve směrníkem zemské stezky, jež vedla od Železného Brodu přes Jílové, Návarov a Olešnici až k hranicím. Podle pověsti se kolem roku 1460 v lípě schoval před bouřkou panoš i se svým koněm, který mu prý následující den zachránil život. Odmítl jet dál, když ve tmě před sebou vycítil propast a neuposlechl panošova rozkazu. V roce 1908, kdy chodilo do zdejší školy 24 žáků, se do lípy všichni vešli i s učitelem a ještě zbylo místo. Bohužel se na lípě podepsal čas, rozlomila se a zbyla pouze necelá polovina původního kmene.",
    images: ["lhotecka_lipa1", "lhotecka_lipa2", "lhotecka_lipa3", "lhotecka_lipa4", "lhotecka_lipa5"],
    votes: 510
  }, {
    year: 2014,
    id: "hrusen",
    rank: 11,
    name: "Planá hrušeň na Helfštýně",
    proposer: "obec, MŠ a ZŠ Týn nad Bečvou, kastelán hradu",
    kind: "hrušeň planá",
    age: "250 let",
    perimeter: "182 cm",
    location: "Olomoucký kraj, okres Přerov, obec Týn nad Bečvou, před vstupem do hradu",
    gps: "",
    story: "Pověst o původu plané hrušně vypráví o rodu Ludanických, jedněch z majitelů hradu Helfštýn. Když se jim narodila dcera Kateřina, přišel k branám hradu starý pocestný a chtěl se schovat před bouřkou. Panstvo však na něj vypustilo psy. Poutník se rozzlobil, zabořil svou hůl do skály a rod proklel. Řekl, že z hole vyroste planá hrušeň a rod bude planý stejně tak. Manželství Kateřiny z Ludanic s Petrem Vokem pak opravdu bylo bezdětné, a tak oba rody vymřely. Jen planá hrušeň statečně roste ze skály před hradbami dodnes.",
    images: ["hrusen1", "hrusen2", "hrusen3", "hrusen4", "hrusen5"],
    votes: 384
  }, {
    year: 2014,
    id: "klen",
    rank: 12,
    name: "Klen „U Gavora“",
    proposer: "Oldřich Nosek a obec Šimonovice",
    kind: "javor klen",
    age: "135 let",
    perimeter: "705 cm",
    location: "Liberecký kraj, okres Liberec, obec Šimonovice, u statku Na Rašovce",
    gps: "",
    story: "Památný javor byl před 135 lety vysazen jako strom strážce u jednoho z největších zdejších statků, bývalého hospodářství „U Kotků“ a dříve rychty s hospodou „U Gavora“, o jejíž existenci svědčí již písemné prameny z roku 1850. Javor je významnou součástí obce Šimonovice, která podala žádost o udělení znaku a praporu obce s vyobrazením tohoto javoru.",
    images: ["klen1", "klen2", "klen3", "klen4", "klen5"],
    votes: 266
  }, {
    year: 2013,
    id: "visnova",
    rank: 1,
    name: "Dub ochránce ve Višňové",
    proposer: "obec Višňová a o. s. Víska",
    kind: "dub letní",
    age: "150 let",
    perimeter: "470 cm",
    location: "Liberecký kraj, okres Liberec, obec Višňová, část Víska",
    gps: "50°56'20\"N+15°1'38\"E",
    story: "V roce 2010 postihla Višňovou katastrofální povodeň. Řeka Smědá se vylila z břehů a nejvíce udeřila v části obce zvané Víska. Pod vodou zde bylo 42 domů z celkových 65. Voda s sebou vzala auta, stromy a další materiál. Proti naplaveninám se však postavil mohutný dub, který zde již dlouho roste. I když utrpěl četná zranění, odolal a nespadl. Mnoho hrázděných domů v jeho blízkosti vděčí dubu za to, že ještě stojí, protože ne všechny domy měly takové štěstí. Strom zachránil život také manželskému páru se psem, který přežil na střeše jednoho z domů. Místní obyvatelé ho i proto nazývají „Dubem ochráncem“ a doufají, že jeho službu již nikdy nebudou potřebovat. K optimismu je vede výstavba protipovodňové hráze, která v současné době nedaleko stromu probíhá.",
    images: ["visnova1", "visnova2", "visnova3", "visnova4"]
  }, {
    year: 2013,
    id: "mnisek",
    rank: 2,
    name: "Skalecký buk v Mníšku pod Brdy",
    proposer: "Město Mníšek pod Brdy",
    kind: "buk lesní",
    age: "230 let",
    perimeter: "382 cm",
    location: "Středočeský kraj, okres Praha – západ, obec Mníšek pod Brdy, Barokní areál Skalka",
    gps: "49°52'38\"N+14°15'16\"E",
    story: "Majestátní buk vzhlíží do mníšeckého údolí z úpatí Skalky. Vysadili ho spolu s dalšími stromy pravděpodobně v letech 1760 - 1780, kdy vznikly také kapličky spojující spodní a horní část barokního areálu. Strom přežil nesmírnou zátěž, kterou přinášelo v 50. letech 20. století poddolování těžbou železné rudy. Těžba zasáhla celou lokalitu, ale buk dále rostl a ustál nepříznivá léta režimu. Pověsti vypraví, že sílu buku umocňuje rozdvojení symbolizující, že nikdo na světě není sám a každý má svého ochránce, který nad ním bdí. Skalecký buk jako kavalír a patron pečuje o kostelík sv. Máří Magdalény, po jehož levé straně roste. Svou ochranu poskytuje jako odměnu a projev úcty za Magdalénin kajícný život.",
    images: ["mnisek1", "mnisek2", "mnisek3", "mnisek4"]
  }, {
    year: 2013,
    id: "pobezice",
    rank: 3,
    name: "Poběžovická lípa",
    proposer: "Eva Klokočníková",
    kind: "lípa velkolistá",
    age: "360 let",
    perimeter: "785 cm",
    location: "Plzeňský kraj, okres Domažlice, obec Poběžovice, u hřbitova, u silnice z Poběžovic do Hostouně",
    gps: "",
    story: "Památná lípa velkolistá roste u silnice z Poběžovic do Hostouně, hned naproti vchodu do hřbitova. Patří mezi nejmohutnější lípy v Českém lese a chráněna je od roku 2001. Kolem stromu procházejí všichni, kdo chodí na hřbitov zavzpomínat na své blízké. Lípa tak pravděpodobně pamatuje i pohřeb Heinricha Coudenhove - Kalergi, jehož syn Richard se stal zakladatelem Panevropské unie, předchůdkyně dnešní Evropské unie. Nedaleko lípy stojí boží muka a v pozadí se táhne hřeben Českého lesa spolu s Herštejnem a Lysou horou.",
    images: ["pobezice1", "pobezice2", "pobezice3", "pobezice4"]
  }, {
    year: 2013,
    id: "beroun",
    rank: 4,
    name: "Školní buk v Berouně",
    proposer: "ZŠ Wagnerovo náměstí",
    kind: "buk lesní červenolistý",
    age: "100 let",
    perimeter: "310 cm",
    location: "Středočeský kraj, okres Beroun, obec Beroun, v zahradě základní školy ",
    gps: "",
    story: "Památný buk roste u základní školy na Wagnerově náměstí, která již téměř 50 let sídlí v historické budově dřívějšího reálného gymnázia. Denně kolem něj prochází 660 žáků a 55 zaměstnanců školy. Strom pravděpodobně vysadili někdy na začátku 1. světové války. Od té doby se stal neoddělitelnou součástí školy a učitelé ho využívají také při výuce. Děti často kreslí strom ve výtvarné výchově nebo společně s ním oslavují Den stromů. O jeho zařazení mezi památné stromy se v roce 2000 postaral učitel z berounského gymnázia. Strom je cenný kvůli své velikosti i stáří a je jediným svého druhu v okolí.",
    images: ["beroun1", "beroun2", "beroun3", "beroun4"]
  }, {
    year: 2013,
    id: "kravsko",
    rank: 5,
    name: "Dub u Kocandy",
    proposer: "ZŠ a MŠ Kravsko",
    kind: "dub letní",
    age: "300 let",
    perimeter: "562 cm",
    location: "Jihomoravský kraj, okres Znojmo, obec Kravsko, v blízkosti bývalé keramické továrny u Kocandy",
    gps: "",
    story: "Památný dub je nejmohutnějším ze skupiny dubů rostoucích v porostu za areálem keramičky u Kocandy. Jedná se o jedny z posledních dubů letních, jež byly dříve součástí zámeckého panství. S dubem se pojí pověst o loupežníku Melkusovi, který přepadával kočáry a okrádal cestující. Chytit lapku se rozhodla vojenská jízdní služba v převlečení. Melkus se je snažil okrást a nastal boj. Loupežníkovi se však podařilo utéct do lesa. Marně po něm vojáci pátrali, a tak se zastavili k odpočinku pod dubem. Čas si krátili sestřelováním žaludů, když najednou z koruny začala kapat krev. Ve větvích pak objevili Melkusovo zasažené mrtvé tělo. V koruně stromu totiž měl svůj příbytek a schovával v ní uloupené poklady.",
    images: ["kravsko1", "kravsko2", "kravsko3", "kravsko4"]
  }, {
    year: 2013,
    id: "karvina",
    rank: 6,
    name: "Buk v Černém lese",
    proposer: "město Karviná",
    kind: "buk lesní",
    age: "200 let",
    perimeter: "497 cm",
    location: "Moravskoslezský kraj, okres Karviná, obec Karviná, Černý les (místní část Ráj)",
    gps: "",
    story: "Památný buk roste v Černém lese, který se rozprostírá na severozápadním svahu Rajeckého kopce. V minulosti byl les pro veřejnost nepřístupný, protože se v něm nacházel vojenský prostor s protiraketovou jednotkou a středem lesa vede státní hranice s Polskem. I proto se podařilo přírodní hodnoty území zachovat v téměř nedotčeném stavu. V lese se nachází mnoho chráněných druhů rostlin a živočichů, rozsáhlé stromové porosty i četná prameniště a klikatící se potůčky. Mohutný buk je jedním ze sedmi památných stromů na území Karviné a jeho koruna je vidět i z ptačí perspektivy. Za významný se považuje mimo jiné i z důvodu, že se jedná o strom v místě původní a jeho bukvice lesníci využijí k rozmnožování stromu.",
    images: ["karvina1", "karvina2", "karvina3", "karvina4"]
  }, {
    year: 2013,
    id: "tocna",
    rank: 7,
    name: "Dub v Točné",
    proposer: "žáci a učitelé ZŠ Na Beránku",
    kind: "dub letní",
    age: "250 let",
    perimeter: "288 cm",
    location: "Praha, pole mezi obcemi Cholupice a Točná",
    gps: "",
    story: "Původně vedle sebe v širém poli rostly tři duby, ale v roce 1947 dva z nich odešly ze světa a zůstal pouze ten nejsilnější. Pod jeho mohutnou korunou nadále odpočívali poutníci i zemědělci. Více než fyzické prožitky však přinášel těmto lidem duchovní náboj. Přežil rozorávání mezí ve své blízkosti a zdaleka jej tolik nepotěšil čestný titul „Památný strom“ jako výsadba stromořadí podél nedaleké polní cesty. Výsadbu stromků zbývá ještě z poloviny dokončit, ale již dnes se kráčející nebo projíždějící lidé u dubu zastavují. Člověk si při pohledu na krásný solitér připomene citát J. W. Goetha: „I na tom nejmenším místě zasaď strom, vše Ti vrátí.“",
    images: ["tocna1", "tocna2", "tocna3", "tocna4"]
  }, {
    year: 2013,
    id: "pastviny",
    rank: 8,
    name: "Vejdova lípa",
    proposer: "Josef Kvičera a obce Pastviny a Klášterec nad Orlicí",
    kind: "lípa velkolistá",
    age: "800 let",
    perimeter: "1259 cm",
    location: "Pardubický kraj, okres Ústí nad Orlicí, Pastviny, u bývalé hájovny",
    gps: "",
    story: "Vejdova lípa patří k nejmohutnějším památným stromům v republice. Lípu pravděpodobně zasadili okolo roku 1200, a tak zažila i vznik obce, jejíž první historická zmínka se datuje k roku 1513. Své jméno lípa získala na základě přezdívky pana Dolečka, jednoho z majitelů statku, u něhož roste. Ten vždy, když se vracel z hospody položené hluboko v údolí domů, opakoval větu: „Kdypak já na ten kopec vejda?“ Lípa má v kmeni rozsáhlou dutinu zakrytou stříškou. Podle pověsti do ní kdysi dávno zapadl pasáček. Kolem půlnoci bylo z lípy slyšet sténání a v koruně se zjevovalo světlo. Vše ustalo, až když se kmen otevřel a kostru malého pasáčka řádně pohřbili.",
    images: ["pastviny1", "pastviny2", "pastviny3", "pastviny4"]
  }, {
    year: 2013,
    id: "krupka",
    rank: 9,
    name: "Lípa v Krupce - Unčíně",
    proposer: "o. s. Zdraví pro Krupku",
    kind: "lípa malolistá",
    age: "300 let",
    perimeter: "363 cm",
    location: "Ústecký kraj, okres Teplice, obec Krupka, místní část Unčín, křižovatka ulic Soběchlebská a Revoluční",
    gps: "",
    story: "Lípu s největší pravděpodobností vysadili na přelomu 17. a 18. století. V raném věku zažila a přežila bitvu čtyř císařů (francouzského, rakouského, pruského a ruského) nazvanou podle nedalekého Chlumce. Od napoleonských válek až do konce druhé třetiny 19. století poskytovala lípa stín zákazníkům poštovní stanice, u níž se přepřahávali koně táhnoucí poštovní vozy na hřeben Krušných hor po trase Vídeň - Praha - Drážďany - Berlín. Pod stromem odpočívali až do začátku 20. století také hosté nedalekých teplických lázní, kteří se tímto směrem vydávali na blízký hrad Kyšperk. Ocenění hodné je zejména hrdinské vzdorování lípy útrapám dnešní doby – znečištění vzduchu, automobilové dopravě i výstavbě komunikací.",
    images: ["krupka1", "krupka2", "krupka3", "krupka4"]
  }, {
    year: 2013,
    id: "jemnice",
    rank: 10,
    name: "Jemnický buk lásky",
    proposer: "město Jemnice",
    kind: "buk lesní červenolistý",
    age: "neuvedeno",
    perimeter: "395 cm",
    location: "kraj Vysočina, okres Třebíč, obec Jemnice, zámecký park",
    gps: "",
    story: "Buk patří mezi nejstarší stromy v zámeckém parku, který v roce 1761 založil Maxmilián Daun. Stromu se říká „Buk lásky“, protože se na lavičce pod ním scházeli milenci a věřilo se, že je buk chrání. O „Buku lásky“ se v knize Zámecká zahrada zmiňuje i Jan Vrba. Nesmělý komorník Johan se podle povídky bezhlavě zamiloval do služky Margarety, ale nedokázal jí své city vyjádřit. Pan hrabě, zběhlý ve věcech lásky, poradil Johanovi, aby Margaretu pozval večer k buku, že pod ním se mu jazyk jistě rozváže. Hrabě se po setmění schoval za strom a poslouchal, co se bude dít. Johanovi se stále nedařilo vyslovit svou lásku, a tak rozčilený hrabě povídá: „Johan, oni jsou nekňuba, jim ani ten buk nepomůže.“ Naštěstí vše vzala do svých rukou Margareta a zanedlouho se slavila veselka.",
    images: ["jemnice1", "jemnice2", "jemnice3", "jemnice4"]
  }, {
    year: 2013,
    id: "radoun",
    rank: 11,
    name: "Hrušeň v Dolní Radouni",
    proposer: "město Jindřichův Hradec",
    kind: "hrušeň obecná",
    age: "200 let",
    perimeter: "410 cm",
    location: "Jihočeský kraj, okres Jindřichův Hradec, obec Dolní Radouň, u statku č. p. 20",
    gps: "",
    story: "Památná Hrušeň v Dolní Radouni je dle obvodu kmene druhou nejmohutnější hrušní v Jihočeském kraji. Má pravidelnou korunu jištěnou bezpečnostní vazbou a v kmeni dlouhou dutinu a několik dobře zavalených jizev. Každoročně kvete a plodí. Místní lidé si jí váží kvůli úctyhodnému věku a také proto, že je cenná z hlediska zachování původních druhů dřevin. Roste v blízkosti statku, na který se rodiče současného majitele přestěhovali již v roce 1946, a zejména v době kvetení je unikátní a nepřehlédnutelná.",
    images: ["radoun1", "radoun2", "radoun3", "radoun4"]
  }, {
    year: 2013,
    id: "vyskovec",
    rank: 12,
    name: "Lípa z Vlčích pramenů",
    proposer: "RNDr. Lubomír Pospěch",
    kind: "lípa velkolistá",
    age: "200 let",
    perimeter: "485 cm",
    location: "Zlínský kraj, okres Uherské Hradiště, obec Vyškovec, severozápadní svah hřebene Machnáče a Kykuly",
    gps: "",
    story: "Největší z trojúhelníku tří lip původně chránila stavení z kotovic, kterému se podobně jako jiným na Moravských Kopanicích nevyhnula lopotná dřina, bolest, veselí i lidská tragédie. Místo, řečené Švajniakovo, poznamenal v minulosti hrdelní zločin. Na konci 2. světové války se lípa stala svědkem letecké bitvy mezi americkými bombardéry a německými stíhačkami. V jediném dni Němci nad Bílými Karpaty sestřelili 13 letadel, jeden z bombardérů zvaný Lovely Ladies se po zásahu zřítil do údolí Vyškovce. Když v roce 1991 zemřel poslední hospodář usedlosti přezdívaný Švajniak, zchátralo stavení a zarostlo i jeho rozlehlé okolí. Od roku 2001 rodina Pospěchova na zdejších lukách a hájích buduje a rozvíjí soukromou biologickou rezervaci Vlčí prameny s mnoha chráněnými druhy rostlin a živočichů. Podmanivost a biodiverzitu přírody zde každoročně poznávají studenti, odborníci i veřejnost při lektorovaných exkurzích, terénním výzkumu i praktické pomoci při údržbě rezervace.",
    images: ["vyskovec1", "vyskovec2", "vyskovec3", "vyskovec4"]
  }];

  if (!localStorage.favourites) {
    localStorage.favourites = JSON.stringify([]);
  }
  var favourites = JSON.parse(localStorage.favourites);

  return {
    all: function() {
      return trees;
    },
    get: function(year, id) {
      for (var i = 0; i < trees.length; i++) {
        if (trees[i].year == year && trees[i].id == id) {
          return trees[i];
        }
      }
      return null;
    },
    getYears: function() {
      result = [];
      for (var i = 0; i < trees.length; i++) {
        if (result.indexOf(trees[i].year) == -1) {
          result.push(trees[i].year);
        }
      }
      return result;
    },
    favourites: {
      all: function() {
        return favourites;
      },
      contains: function(item) {
        for (var i = 0; i < favourites.length; i++) {
          if (favourites[i].year == item.year && favourites[i].id == item.id) {
            return true;
          }
        }
        return false;
      },
      toggle: function(year, id) {
        console.log("toggling: " + year + "; " + id);
        var item = {
          year: year,
          id: id
        };
        if (this.contains(item)) {
          this.remove(item);
        } else {
          this.add(item);
        }
        this.save();
      },
      save: function() {
        localStorage.favourites = JSON.stringify(favourites);
      },
      add: function(item) {
        favourites.push(item);
      },
      getIndex: function(item) {
        for (var i = 0; i < favourites.length; i++) {
          if (favourites[i].year == item.year && favourites[i].id == item.id) {
            return i;
          }
        }
        return -1;
      },
      remove: function(item) {
        var index = this.getIndex(item);
        favourites.splice(index, 1);
      }
    }
  }
});
