export const rhinitisPasteurellaData = {
  id: "rhinitis_pasteurella",
  title: "11. Torzító orrgyulladás és Pasteurellosis",
  studyMaterial: [
    {
      "title": "1. Torzító orrgyulladás (Atrófiás rhinitis)",
      "icon": "frown",
      "color": "bg-amber-50 border-amber-200",
      "iconColor": "text-amber-500",
      "sections": [
        {
          "header": "1.1. Kóroktan",
          "points": [
            "**Kórokozók:** *Bordetella bronchiseptica* (DNT toxin) és toxintermelő *Pasteurella multocida* D típus (PMT toxin)",
            "A *Bordetella* vagy ammónia irritáció nyit utat a toxikus *Pasteurella* megtelepedésének"
          ]
        },
        {
          "header": "1.2. Patomechanizmus",
          "points": [
            "A **PMT toxin** gátolja az osteoblastokat (csontépítés) és serkenti az osteoclastokat (csontbontás)",
            "Eredmény: az orrkagylók sorvadása és az állcsont deformitása"
          ]
        },
        {
          "header": "1.3. Klinikai tünetek",
          "points": [
            "**Szopós malac:** tüsszögés, könnycsatorna-elzáródás miatti 'fekete könnyfolt'",
            "**Süldő/Hízó:** orrferdülés, az orrhát bőrének ráncolódása, 'csapott orr'",
            "Rossz takarmányértékesítés és súlygyarapodás-elmaradás"
          ]
        }
      ]
    },
    {
      "title": "2. Sertés Pasteurellosis",
      "icon": "wind",
      "color": "bg-blue-50 border-blue-200",
      "iconColor": "text-blue-500",
      "sections": [
        {
          "header": "2.1. Tüdőgyulladás (Pasteurella multocida A)",
          "points": [
            "Gyakran másodlagos (pl. *M. hyopneumoniae* után)",
            "**Kórkép:** Gennyes-hurutos bronchopneumonia",
            "**Boncolás:** 'Tarka' tüdő, cranioventralis lebenyek tömöttsége (hepatisatio)"
          ]
        },
        {
          "header": "2.2. Heveny vérzéses vérfertőzés (B:2 típus)",
          "points": [
            "Mérsékelt égövön ritka, hirtelen szeptikémia",
            "Toroktájéki ödéma, cianózis, hirtelen elhullás"
          ]
        }
      ]
    },
    {
      "title": "3. Diagnózis és Megelőzés",
      "icon": "search",
      "color": "bg-slate-50 border-slate-200",
      "iconColor": "text-slate-500",
      "sections": [
        {
          "header": "3.1. Labor és Képalkotók",
          "points": [
            "**PCR:** A *toxA* gén (toxikus *P. multocida*) kimutatása döntő",
            "**Röntgen/CT:** Az orrkagyló-sorvadás mértékének in vivo megítélése",
            "Vágóhídi vizsgálat: az orr keresztmetszeti vizsgálata"
          ]
        },
        {
          "header": "3.2. Védekezés",
          "points": [
            "**Vakcinázás:** Kocák oltása fialás előtt (Bordetella + Pasteurella toxoid)",
            "**Menedzsment:** Szellőztetés javítása (ammónia csökkentése), SPF állományok"
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "rhin_1",
      topic: "Atrófiás rhinitis",
      type: "mcq",
      question: "Melyik két baktérium felelős a progresszív torzító orrgyulladásért (PAR)?",
      options: ["E. coli és Salmonella", "Bordetella bronchiseptica és toxintermelő Pasteurella multocida", "Streptococcus és Staphylococcus", "Mycoplasma és Lawsonia"],
      correctAnswer: 1,
      explanation: "A Bordetella készíti elő a terepet a súlyosabb csontkárosodást okozó toxikus Pasteurellának."
    },
    {
      id: "rhin_2",
      topic: "Atrófiás rhinitis",
      type: "mcq",
      question: "Melyik toxin felelős a csontfaló sejtek serkentéséért?",
      options: ["DNT toxin", "PMT toxin (Pasteurella multocida toxin)", "Labilis toxin", "Shiga-toxin"],
      correctAnswer: 1,
      explanation: "A PMT toxin direkt módon avatkozik be a csontanyagcserébe, leállítva az építést és fokozva a bontást."
    },
    {
      id: "rhin_3",
      topic: "Atrófiás rhinitis",
      type: "mcq",
      question: "Mi okozza a szem alatti 'fekete könnyfoltot' malacokban?",
      options: ["Szemgyulladás", "A könnycsatorna gyulladása és elzáródása az orrgyulladás miatt", "A baktérium színe", "Piszok"],
      correctAnswer: 1,
      explanation: "A rhinitis miatti nyálkahártya-duzzanat elzárja a könnycsatornát, így a könny kicsordul és beszárad."
    },
    {
      id: "rhin_4",
      topic: "Atrófiás rhinitis",
      type: "mcq",
      question: "Melyik szerv elváltozása alapján diagnosztizálható a vágóhídon a betegség?",
      options: ["Lép", "Orrkagylók keresztmetszete", "Tüdő", "Vese"],
      correctAnswer: 1,
      explanation: "A vágóhídi pontozásos rendszer az orrkagylók sorvadásának mértékén alapul."
    },
    {
      id: "rhin_5",
      topic: "Atrófiás rhinitis",
      type: "mcq",
      question: "Mit jelent az SPF állomány?",
      options: ["Sokat Pihenő Futó", "Specifikus kórokozóktól mentes (Specific Pathogen Free)", "Szuper Finom Portartalom", "Nincs jelentése"],
      correctAnswer: 1,
      explanation: "Olyan állományok, amelyek mentesek a meghatározott fertőző betegségektől (pl. toxikus Pasteurella)."
    },
    {
      id: "past_1",
      topic: "Pasteurellosis",
      type: "mcq",
      question: "Melyik Pasteurella multocida típus a tüdőgyulladások fő okozója?",
      options: ["A típus", "B típus", "E típus", "Nincs típusa"],
      correctAnswer: 0,
      explanation: "Az A típus felelős a gennyes-hurutos bronchopneumoniák többségéért."
    },
    {
      id: "past_2",
      topic: "Pasteurellosis",
      type: "mcq",
      question: "Melyik elváltozás jellemző a pasteurellás tüdőre boncoláskor?",
      options: ["Csak daganatok", "Cranioventralis lebenyek tömöttsége (májra emlékeztető tapintat)", "Üregképződés", "Semmi"],
      correctAnswer: 1,
      explanation: "A tüdő elülső-alsó lebenyeinek hepatisatiója (májjasodása) típusos lelet."
    },
    {
      id: "past_3",
      topic: "Pasteurellosis",
      type: "mcq",
      question: "Hogyan hat az ammónia a fertőzésre?",
      options: ["Gyógyítja", "Izgatja a nyálkahártyát, hajlamosítva a baktériumok megtelepedésére", "Semleges", "Megöli a bacikat"],
      correctAnswer: 1,
      explanation: "A rossz szellőzés miatti ammónia károsítja a légutak védekezését."
    },
    {
      id: "past_4",
      topic: "Pasteurellosis",
      type: "mcq",
      question: "Melyik tünet jellemző a vérzéses vérfertőzésre (B:2 típus)?",
      options: ["Csak sántaság", "Toroktájéki ödéma és hirtelen elhullás", "Szőrhullás", "Fogfájás"],
      correctAnswer: 1,
      explanation: "A heveny szeptikémiás formát súlyos vizenyős duzzanat kíséri a nyaki tájékon."
    },
    {
      id: "rhin_6",
      topic: "Atrófiás rhinitis",
      type: "mcq",
      question: "Mikor oltják a kocákat a passzív védelem érdekében?",
      options: ["Csak ha tüsszögnek", "Vemhesség alatt (pl. 6 és 2 héttel fialás előtt)", "Ellés után 1 évvel", "Soha"],
      correctAnswer: 1,
      explanation: "A koca oltása biztosítja az ellenanyagokat a malacok számára a kolosztrumban."
    },
    {
      id: "rhin_7",
      topic: "Atrófiás rhinitis",
      type: "bool",
      question: "A már kialakult csonttorzulás orvosi kezeléssel teljesen visszafordítható.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis, a csontelváltozások irreverzibilisek, csak a folyamat lassítható."
    },
    {
      id: "rhin_8",
      topic: "Atrófiás rhinitis",
      type: "mcq",
      question: "Mit jelent a 'csapzott' vagy 'csapott' orr?",
      options: ["Hosszabb orr", "A felső állcsont rövidülése vagy elferdülése", "Nagyobb fülek", "Semmit"],
      correctAnswer: 1,
      explanation: "A PAR következtében az orr hossza megrövidül, a bőr pedig ráncba szorul rajta."
    },
    {
      id: "rhin_9",
      topic: "Atrófiás rhinitis",
      type: "mcq",
      question: "Melyik gén kimutatása szükséges a toxikus Pasteurella azonosításához?",
      options: ["toxA", "stx2e", "tetO", "blaZ"],
      correctAnswer: 0,
      explanation: "A toxA gén hordozása teszi képessé a Pasteurellát a PAR okozására."
    },
    {
      id: "rhin_10",
      topic: "Atrófiás rhinitis",
      type: "mcq",
      question: "Milyen antibiotikum adható kiegészítésként az anyakoca takarmányába?",
      options: ["Csak vitamin", "Szulfonamidok vagy oxitetraciklin", "Inzulin", "Nincs ilyen"],
      correctAnswer: 1,
      explanation: "Ezzel csökkenthető a koca ürítése és a malacok korai fertőződése."
    },
    {
      id: "past_5",
      topic: "Pasteurellosis",
      type: "mcq",
      question: "Melyik kórkép szövődménye gyakran a Pasteurella multocida A?",
      options: ["Csak a hasmenésé", "Enzootiás pneumonia (Mycoplasma hyopneumoniae)", "Sertésorbánc", "Tetanusz"],
      correctAnswer: 1,
      explanation: "A Mycoplasma károsítja a csillószőröket, utat engedve a Pasteurellának."
    },
    {
      id: "past_6",
      topic: "Pasteurellosis",
      type: "mcq",
      question: "Mit jelent a 'tarka tüdő' kifejezés?",
      options: ["Sokszínű festés", "Vörös és szürke területek váltakozása (különböző stádiumú gyulladás)", "Kék pöttyök", "Sárga tüdő"],
      correctAnswer: 1,
      explanation: "A különböző időben kialakult gyulladásos gócok eltérő színe miatt tűnik tarkának a szerv."
    },
    {
      id: "past_7",
      topic: "Pasteurellosis",
      type: "mcq",
      question: "Melyik antibiotikum kiváló választás tüdő-pasteurellosis esetén?",
      options: ["Csak a nystatin", "Florfenikol vagy tulatromicin", "Csak a gentamicin", "Vitamin C"],
      correctAnswer: 1,
      explanation: "Ezek a szerek kiválóan penetrálnak a tüdőszövetbe."
    },
    {
      id: "past_8",
      topic: "Pasteurellosis",
      type: "bool",
      question: "A Pasteurellák Gram-negatív baktériumok.",
      options: ["Igaz", "Hamis"],
      answer: 0,
      explanation: "Igaz, apró Gram-negatív pálcikák (gyakran bipoláris festődéssel)."
    },
    {
      id: "past_9",
      topic: "Pasteurellosis",
      type: "mcq",
      question: "Mi a fibrines pleuritis?",
      options: ["Bőrgyulladás", "Mellhártyagyulladás fibrinkiválással", "Veseelégtelenség", "Ízületi ficam"],
      correctAnswer: 1,
      explanation: "A Pasteurella fertőzést gyakran kíséri a tüdő feletti hártya gyulladása."
    },
    {
      id: "rhin_11",
      topic: "Atrófiás rhinitis",
      type: "mcq",
      question: "Melyik korosztályban kezdődik a tüsszögés nem progresszív forma esetén?",
      options: ["1 évesen", "3-4 hetes korban", "Közvetlenül születéskor", "Soha"],
      correctAnswer: 1,
      explanation: "A Bordetella okozta enyhébb forma korán jelentkezik."
    },
    {
      id: "rhin_12",
      topic: "Atrófiás rhinitis",
      type: "mcq",
      question: "Hogyan hat a PMT toxin a növekedésre?",
      options: ["Gyorsítja", "Gátolja a súlygyarapodást (szisztémás hatás is lehet)", "Nincs hatása", "Csak az orra hat"],
      correctAnswer: 1,
      explanation: "A toxin felszívódva az egész szervezet anyagcseréjét rontja."
    },
    {
      id: "rhin_13",
      topic: "Atrófiás rhinitis",
      type: "mcq",
      question: "Melyik baktérium nő MacConkey agaron is?",
      options: ["Pasteurella", "Bordetella bronchiseptica", "Nincs ilyen", "Mindkettő"],
      correctAnswer: 1,
      explanation: "A Bordetella ellenállóbb és MacConkey agaron is képes növekedni."
    },
    {
      id: "rhin_14",
      topic: "Atrófiás rhinitis",
      type: "mcq",
      question: "Mi az a tonsilla-biopszia jelentősége?",
      options: ["Torokfájás mérése", "A kórokozó kimutatása a mandulából (hordozó állapot szűrése)", "Súly mérése", "Felesleges"],
      correctAnswer: 1,
      explanation: "A mandula a toxikus Pasteurella egyik fő rejtekhelye a hordozókban."
    },
    {
      id: "rhin_15",
      topic: "Atrófiás rhinitis",
      type: "mcq",
      question: "Melyik állítás igaz a 'nem progresszív' formára?",
      options: ["Halálos", "Gyakran magától regenerálódik a hízlalás végére", "Nincs tüsszögés", "Csak kanokban van"],
      correctAnswer: 1,
      explanation: "Mivel a csontépítés nem áll le teljesen, a szervezet képes kijavítani az enyhébb hibákat."
    },
    {
      id: "rhin_16",
      topic: "Atrófiás rhinitis",
      type: "mcq",
      question: "Mit okoz az orrsövény elferdülése?",
      options: ["Jobb szaglást", "Az orrjáratok beszűkülését és légzési nehézséget", "Semmit", "Kék színt"],
      correctAnswer: 1,
      explanation: "A torzult csontozat nehezíti a levegő áramlását és hajlamosít fertőzésekre."
    },
    {
      id: "rhin_17",
      topic: "Atrófiás rhinitis",
      type: "mcq",
      question: "Hogyan lehet in vivo (élőben) látni az orrkagylókat?",
      options: ["Nagyítóval", "Röntgen vagy CT vizsgálattal", "Szaglással", "Selyemkendővel"],
      correctAnswer: 1,
      explanation: "A modern képalkotók lehetővé teszik a diagnózist az állat leölése nélkül."
    },
    {
      id: "rhin_18",
      topic: "Atrófiás rhinitis",
      type: "mcq",
      question: "Melyik faktor NEM segít a megelőzésben?",
      options: ["Jó szellőzés", "Vakcinázás", "Zsúfoltság növelése", "SPF állomány"],
      correctAnswer: 2,
      explanation: "A zsúfoltság éppen ellenkezőleg: segíti a kórokozók terjedését és fokozza a stresszt."
    },
    {
      id: "rhin_19",
      topic: "Atrófiás rhinitis",
      type: "mcq",
      question: "Mi a DNT toxin?",
      options: ["Dermonecroticus toxin (Bordetella termeli)", "Daganat Növelő Tényező", "Egy gyógyszer", "Nincs ilyen"],
      correctAnswer: 0,
      explanation: "A Bordetella bronchiseptica virulenciafaktora."
    },
    {
      id: "rhin_20",
      topic: "Atrófiás rhinitis",
      type: "mcq",
      question: "Mi az All-in/All-out szerepe itt?",
      options: ["Semmi", "Megszakítja a fertőzési láncot a turnusok között", "Csak a vízre hat", "Kereskedelmi név"],
      correctAnswer: 1,
      explanation: "A fakkok alapos ürítése és fertőtlenítése elengedhetetlen a légúti kórokozók ellen."
    },
    {
      id: "past_10",
      topic: "Pasteurellosis",
      type: "mcq",
      question: "Mi az a hepatisatio?",
      options: ["Májbetegség", "A tüdőszövet májhoz hasonló tömöttsége a gyulladás miatt", "Lépduzzanat", "Bőrelszíneződés"],
      correctAnswer: 1,
      explanation: "A gyulladásos izzadmánnyal telt tüdő elveszti légtartalmát és máj tapintatúvá válik."
    },
    {
      id: "past_11",
      topic: "Pasteurellosis",
      type: "mcq",
      question: "Melyik szerv érintett a heveny vérzéses vérfertőzésben?",
      options: ["Csak a bél", "Az egész szervezet (szeptikémia)", "Csak a pata", "Szem"],
      correctAnswer: 1,
      explanation: "Ez egy gyors lefolyású általános fertőzés vérzésekkel."
    },
    {
      id: "past_12",
      topic: "Pasteurellosis",
      type: "mcq",
      question: "Mi a teendő a fulmináns pasteurellosis gyanúja esetén?",
      options: ["Várni másnapig", "Azonnali parenterális (injekciós) antibiotikumos kezelés", "Csak takarmányváltás", "Semmi"],
      correctAnswer: 1,
      explanation: "A gyors elhullás miatt minden perc számít a kezelésnél."
    },
    {
      id: "past_13",
      topic: "Pasteurellosis",
      type: "bool",
      question: "A Pasteurella multocida a normál felső légúti flóra része is lehet.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, opportunista kórokozóként vár a hajlamosító hatásokra."
    },
    {
      id: "past_14",
      topic: "Pasteurellosis",
      type: "mcq",
      question: "Milyen jellegű a tüdőgyulladás a Pasteurella multocida A esetén?",
      options: ["Sajtos", "Gennyes-hurutos", "Gázos", "Nincs gyulladás"],
      correctAnswer: 1,
      explanation: "Jellemzően gennyes váladékképződéssel járó bronchopneumonia."
    },
    {
      id: "past_15",
      topic: "Pasteurellosis",
      type: "mcq",
      question: "Mit okoz a Pasteurella a mellhártyán?",
      options: ["Fibrinkiválást (pleuritis)", "Szőrnövekedést", "Daganatot", "Semmit"],
      correctAnswer: 0,
      explanation: "A tüdőgyulladás gyakran átterjed a mellhártyára is."
    },
    {
      id: "past_16",
      topic: "Pasteurellosis",
      type: "mcq",
      question: "Milyen antibiotikum-csoportba tartozik a tulatromicin?",
      options: ["Penicillin", "Makrolid", "Aminoglikozid", "Szulfonamid"],
      correctAnswer: 1,
      explanation: "Egy modern, hosszú hatású makrolid, speciálisan légúti betegségekre."
    },
    {
      id: "past_17",
      topic: "Pasteurellosis",
      type: "mcq",
      question: "Melyik állítás igaz a Pasteurellák oxigénigényére?",
      options: ["Szigorúan anaerob", "Aerob / Fakultatív anaerob", "Csak nitrogénben él", "Nincs igénye"],
      correctAnswer: 1,
      explanation: "Levegő jelenlétében is jól szaporodnak."
    },
    {
      id: "past_18",
      topic: "Pasteurellosis",
      type: "mcq",
      question: "Mi a 'bipoláris festődés'?",
      options: ["Két színe van", "A pálcika két vége erősebben festődik (bizonyos festésekkel)", "Nappal kék, éjjel zöld", "Nem festődik"],
      correctAnswer: 1,
      explanation: "A Pasteurellákra jellemző mikroszkópos kép, mintha két kis pont lenne."
    },
    {
      id: "past_19",
      topic: "Pasteurellosis",
      type: "mcq",
      question: "Hogyan nevezzük a szívburok gyulladását?",
      options: ["Pneumonia", "Pericarditis", "Hepatitis", "Arthritis"],
      correctAnswer: 1,
      explanation: "Súlyos pasteurellosisban a szívburok is begyulladhat."
    },
    {
      id: "past_20",
      topic: "Pasteurellosis",
      type: "mcq",
      question: "Mi az összefoglalás lényege a Pasteurellánál?",
      options: ["Nem veszélyes", "Fontos légúti kórokozó, menedzsmenttel és vakcinázással kontrollálható", "Csak malacokban van", "Mindig halálos"],
      correctAnswer: 1,
      explanation: "A hajlamosító tényezők kiiktatása a védekezés alapja."
    },
    {
      id: "rhin_21",
      topic: "Atrófiás rhinitis",
      type: "mcq",
      question: "Mit okoz a Bordetella bronchiseptica a tüdőben fiatal malacokban?",
      options: ["Semmit", "Gennyes-elhalásos bronchopneumoniát", "Csak tüsszögést", "Daganatot"],
      correctAnswer: 1,
      explanation: "A Bordetella önállóan is képes súlyos tüdőgyulladást okozni a legfiatalabbaknál."
    },
    {
      id: "rhin_22",
      topic: "Atrófiás rhinitis",
      type: "mcq",
      question: "Melyik enzim szócikk - bocsánat, ez a korábbi kérdés ismétlése. Inkább: Mi a D-típusú Pasteurella multocida jelentősége a PAR-ban?",
      options: ["Csak a tüdőt betegíti", "Ez a típus termeli az orrkagyló-sorvadást okozó PMT toxint", "Nem fontos", "Sárga színt ad"],
      correctAnswer: 1,
      explanation: "A D típusú törzsek speciális toxinja (PMT) okozza a súlyos csontpusztulást."
    },
    {
      id: "rhin_23",
      topic: "Atrófiás rhinitis",
      type: "mcq",
      question: "Mi a 'toxoid'?",
      options: ["Méreghatású anyag", "Inaktivált toxin, amely immunválaszt vált ki (vakcina komponens)", "Egy antibiotikum", "Baktérium szerv"],
      correctAnswer: 1,
      explanation: "A toxoid oltásokkal a szervezet a toxin káros hatása ellen tanul meg védekezni."
    },
    {
      id: "rhin_24",
      topic: "Atrófiás rhinitis",
      type: "mcq",
      question: "Milyen az orrhát bőre súlyos PAR esetén?",
      options: ["Sima, feszes", "Ráncolt, redőzött", "Szőrtelen", "Kék"],
      correctAnswer: 1,
      explanation: "A belső csontos váz rövidülése miatt a bőr 'túl bő' lesz és ráncokba szorul."
    },
    {
      id: "rhin_25",
      topic: "Atrófiás rhinitis",
      type: "mcq",
      question: "Hogyan terjed a fertőzés az állományban?",
      options: ["Csak a vízzel", "Aerogén úton (cseppfertőzéssel, orr-orr kontaktussal)", "Csak rovarokkal", "Soha nem terjed"],
      correctAnswer: 1,
      explanation: "A tüsszögéssel és közvetlen érintkezéssel könnyen átadják egymásnak."
    },
    {
      id: "rhin_26",
      topic: "Atrófiás rhinitis",
      type: "mcq",
      question: "Melyik állítás igaz a 'progresszív' (PAR) formára?",
      options: ["Csak tüsszögés van", "Súlyos, visszafordíthatatlan csontsorvadással jár", "Magától meggyógyul", "Nincs gazdasági kár"],
      correctAnswer: 1,
      explanation: "A progresszív név a folyamat súlyosbodására és a tartós károsodásra utal."
    },
    {
      id: "rhin_27",
      topic: "Atrófiás rhinitis",
      type: "mcq",
      question: "Mi a teendő a tüsszögő süldőkkel?",
      options: ["Semmi", "Diagnózis, hajlamosító tényezők javítása, vakcinázási program felülvizsgálata", "Azonnal levágni mindet", "Több sót adni"],
      correctAnswer: 1,
      explanation: "A tünetek okát fel kell tárni a további veszteségek megelőzésére."
    },
    {
      id: "rhin_28",
      topic: "Atrófiás rhinitis",
      type: "mcq",
      question: "Mit okoz a por az istállóban?",
      options: ["Tisztaságot", "Irritálja a légutakat és hordozza a baktériumokat", "Jobb étvágyat", "Semmit"],
      correctAnswer: 1,
      explanation: "A por mechanikai irritációja segíti a kórokozók bejutását."
    },
    {
      id: "rhin_29",
      topic: "Atrófiás rhinitis",
      type: "mcq",
      question: "Melyik antibiotikum-csoportba tartozik a doxiciklin?",
      options: ["Penicillin", "Tetraciklin", "Aminoglikozid", "Makrolid"],
      correctAnswer: 1,
      explanation: "Gyakran használják légúti kórképek állományszintű kezelésére."
    },
    {
      id: "rhin_30",
      topic: "Atrófiás rhinitis",
      type: "mcq",
      question: "Mi az összefoglalás lényege a torzító orrgyulladásnál?",
      options: ["Csak esztétikai hiba", "Gazdaságilag jelentős, a menedzsment és a kocaoltás a védekezés kulcsa", "Nem fertőző", "Minden malac tüsszög"],
      correctAnswer: 1,
      explanation: "A lassabb fejlődés miatt komoly veszteséget okozhat a nem megfelelően védett telepen."
    }
  ]
};
