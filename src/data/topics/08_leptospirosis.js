export const leptospirosisData = {
  id: "leptospirosis",
  title: "8. Leptospirosis",
  studyMaterial: [
    {
      "title": "1. Kóroktan és Szerotípusok",
      "icon": "microscope",
      "color": "bg-blue-50 border-blue-200",
      "iconColor": "text-blue-500",
      "sections": [
        {
          "header": "1.1. Sertéshez adaptálódott szerotípusok",
          "points": [
            "A sertés a természetes fenntartó gazda; a fertőzés gyakran tünetmentes, krónikus",
            "**Serovar Pomona:** Legfontosabb; késői vetélést, gyenge malacokat okoz; zoonózis!",
            "**Serovar Bratislava:** Petevezetékben és kanok nemi szerveiben perzisztál; visszaivarzást, meddőséget okozhat"
          ]
        },
        {
          "header": "1.2. Nem adaptálódott szerotípusok",
          "points": [
            "A sertés véletlenszerű gazda; súlyos szisztémás tünetek (láz, sárgaság)",
            "**Serovar Icterohaemorrhagiae:** Fő gazdája a vándorpatkány; súlyos sárgaság malacokban"
          ]
        }
      ]
    },
    {
      "title": "2. Járványtan és Patogenezis",
      "icon": "book",
      "color": "bg-gray-50 border-gray-200",
      "iconColor": "text-gray-500",
      "sections": [
        {
          "header": "2.1. Bejutás és Szóródás",
          "points": [
            "Bejutás: sérült bőrön vagy nyálkahártyákon (száj, orr, szem, nemi utak)",
            "Véráram útján eljut minden szervbe (máj, vese, méh)",
            "**Vese:** a tubulusokban megtelepedve idült gyulladást és hosszan tartó ürítést (vizelettel) okoz"
          ]
        },
        {
          "header": "2.2. Terjedés",
          "points": [
            "**Közvetlen:** Fertőzött vizelet, abortált magzatok, **nemi út** (ondóval is!)",
            "**Közvetett:** Szennyezett állóvíz, dagonya (hetekig fertőzőképes marad)"
          ]
        }
      ]
    },
    {
      "title": "3. Klinikai Tünetek",
      "icon": "alert-triangle",
      "color": "bg-orange-50 border-orange-200",
      "iconColor": "text-orange-500",
      "sections": [
        {
          "header": "3.1. Reprodukciós zavarok (Kocák)",
          "points": [
            "Késői vetélés a vemhesség utolsó harmadában",
            "Halvaszületés, életképtelen 'remegő' malacok",
            "Szabálytalan visszaivarzás (korai embrióelhalás)"
          ]
        },
        {
          "header": "3.2. Malacok és Növendékek",
          "points": [
            "Magas láz, sárgaság",
            "**Vérfestékvizelés:** vörösesbarna vizelet a hemolízis miatt",
            "**Kórbonctan:** 'Fehér foltos vese' (interstitialis nephritis jele)"
          ]
        }
      ]
    },
    {
      "title": "4. Diagnosztika és Terápia",
      "icon": "search",
      "color": "bg-slate-50 border-slate-200",
      "iconColor": "text-slate-500",
      "sections": [
        {
          "header": "4.1. Diagnózis",
          "points": [
            "**MAT (Mikroszkópos Agglutinációs Teszt):** Referencia-módszer ellenanyagszint mérésére",
            "**PCR:** Kórokozó DNS kimutatása vizeletből, veséből, magzatból",
            "Tenyésztés: Speciális táptalajt (EMJH) és heteket igényel"
          ]
        },
        {
          "header": "4.2. Kezelés",
          "points": [
            "**Sztreptomicin:** Leghatékonyabb a hordozó állapot felszámolására (egyszeri 25 mg/ttkg)",
            "**Doxiciklin:** Kiválóan penetrál a vesébe és nemi szervekbe; ivóvízben/takarmányban adható"
          ]
        }
      ]
    },
    {
      "title": "5. Megelőzés",
      "icon": "shield-check",
      "color": "bg-emerald-50 border-emerald-200",
      "iconColor": "text-emerald-500",
      "sections": [
        {
          "header": "5.1. Vakcinázás",
          "points": [
            "Inaktivált, multivalens vakcinák",
            "Kocasüldők alapimmunizálása, kocák emlékeztető oltása fialás előtt",
            "Kanok félévenkénti oltása"
          ]
        },
        {
          "header": "5.2. Higiénia",
          "points": [
            "**Rágcsálóirtás** (patkányok mint rezervoárok!), dagonyák felszámolása, tiszta ivóvíz"
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "lept_1",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Melyik Leptospira szerotípus a legjelentősebb sertésben világszerte?",
      options: ["L. Bratislava", "L. Pomona", "L. Hardjo", "L. Canicola"],
      correctAnswer: 1,
      explanation: "A Pomona szerovar a leggyakoribb sertés-adaptált típus, amely súlyos szaporodási zavarokat okoz."
    },
    {
      id: "lept_2",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Melyik szervben telepszenek meg tartósan a leptospirák a hordozó állatokban?",
      options: ["Tüdő", "Vese (tubulusok)", "Gyomor", "Lép"],
      correctAnswer: 1,
      explanation: "A vesetubulusokban megbújva hetekig vagy hónapokig ürülhetnek a vizelettel."
    },
    {
      id: "lept_3",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Mi a jellemző tünet vemhes kocákban fertőzés esetén?",
      options: ["Köhögés", "Késői vetélés a vemhesség utolsó harmadában", "Szőrhullás", "Csak láz"],
      correctAnswer: 1,
      explanation: "A leptospirák a placentán átjutva a vemhesség végén okoznak magzatkárosodást és vetélést."
    },
    {
      id: "lept_4",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Mi okozza a sárgaságot és a vérfestékvizelést leptospirosisban?",
      options: ["A baktérium színe", "Vörösvérsejt-szétesés (hemolízis) és májkárosodás", "Túlzott vitaminbevitel", "Napsütés"],
      correctAnswer: 1,
      explanation: "A nem-adaptált szerotípusok (pl. Icterohaemorrhagiae) heveny hemolízist és májgyulladást okoznak."
    },
    {
      id: "lept_5",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Melyik állatfaj a Serovar Icterohaemorrhagiae fő fenntartó gazdája?",
      options: ["Kutya", "Vándorpatkány", "Szarvasmarha", "Mezei pocok"],
      correctAnswer: 1,
      explanation: "A patkányok vizeletükkel szennyezik a környezetet, terjesztve ezt a veszélyes szerotípust."
    },
    {
      id: "lept_6",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Mi látható a vesén krónikus esetekben boncoláskor?",
      options: ["Fekete foltok", "Fehér foltos vese (interstitialis nephritis)", "Vesehiány", "Daganat"],
      correctAnswer: 1,
      explanation: "A vesegyulladás gyógyuló gócai szürkésfehér behúzódásokként látszanak a felszínen."
    },
    {
      id: "lept_7",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Melyik a referencia laboratóriumi módszer az ellenanyagok kimutatására?",
      options: ["ELISA", "MAT (Mikroszkópos Agglutinációs Teszt)", "Röntgen", "Vércukormérés"],
      correctAnswer: 1,
      explanation: "A MAT teszt az élő baktériumok agglutinációján alapul, ez a legspecifikusabb."
    },
    {
      id: "lept_8",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Melyik antibiotikum a leghatékonyabb a hordozó állapot felszámolására?",
      options: ["Penicillin", "Sztreptomicin / Dihidrostreptomicin", "Enrofloxacin", "Szulfonamid"],
      correctAnswer: 1,
      explanation: "Az aminoglikozidok (pl. sztreptomicin) kiválóan irtják a vesében lévő leptospirákat."
    },
    {
      id: "lept_9",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Hogyan terjedhet a Leptospira Bratislava leggyakrabban?",
      options: ["Csak széllel", "Nemi úton (ondóval vagy fedeztetéssel)", "Csak szúnyogcsípéssel", "Sehogy"],
      correctAnswer: 1,
      explanation: "Ez a szerovar a nemi szervekben perzisztál, így a fedeztetés során könnyen terjed."
    },
    {
      id: "lept_10",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Hogyan lehet megelőzni a leptospirosist a telepen?",
      options: ["Csak vakcinázással", "Vakcinázással, rágcsálóirtással és higiéniával", "Ablaknyitással", "Sok takarmánnyal"],
      correctAnswer: 1,
      explanation: "A komplex védekezés (oltás + rezervoárok kiiktatása) a leghatékonyabb."
    },
    {
      id: "lept_11",
      topic: "Leptospirosis",
      type: "bool",
      question: "A leptospirosis egy fontos zoonózis.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, az ember is megfertőződhet közvetlen kontaktus vagy szennyezett víz útján."
    },
    {
      id: "lept_12",
      topic: "Leptospirosis",
      type: "bool",
      question: "A leptospirák jól tűrik a száraz, napos környezetet.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis, a kiszáradásra és az UV sugárzásra nagyon érzékenyek, a nedvességet kedvelik."
    },
    {
      id: "lept_13",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Melyik szerovar specifikus a szarvasmarhára, de sertésben ritka?",
      options: ["Pomona", "Hardjo", "Canicola", "Bratislava"],
      correctAnswer: 1,
      explanation: "A Hardjo szerovar elsősorban a szarvasmarhák leptospirosisát okozza."
    },
    {
      id: "lept_14",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Mennyi ideig tarthat a vizelettel történő ürítés fertőzés után?",
            options: ["1 napig", "Akár egy évig is", "Csak 1 óráig", "Soha nem ürül"],
      correctAnswer: 1,
      explanation: "A veseperzisztencia miatt hosszan tartó, veszélyes ürítés alakulhat ki."
    },
    {
      id: "lept_15",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Milyen vizelet látható malacokban heveny fertőzéskor?",
      options: ["Zöld", "Vörösesbarna (vérfestékes)", "Hófehér", "Átlátszó"],
      correctAnswer: 1,
      explanation: "A hemoglobinuria miatt a vizelet elszíneződik."
    },
    {
      id: "lept_16",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Melyik antibiotikum ivóvízben adva alkalmas állományszintű kezelésre?",
      options: ["Gentamicin", "Doxiciklin", "Sztreptomicin", "Polimixin"],
      correctAnswer: 1,
      explanation: "A doxiciklin jó felszívódása és szöveti penetrációja miatt alkalmas erre."
    },
    {
      id: "lept_17",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Mi a teendő a kanokkal a megelőzés érdekében?",
      options: ["Minden héten oltani", "Félévente emlékeztető oltást adni", "Kizárni a tenyésztésből", "Nincs teendő"],
      correctAnswer: 1,
      explanation: "A kanok oltása védi az állatot és gátolja a nemi úton való terjesztést."
    },
    {
      id: "lept_18",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Milyen kémhatású vízben maradnak legtovább életben a leptospirák?",
      options: ["Erősen savas", "Lúgos vagy semleges", "Desztillált", "Forró"],
      correctAnswer: 1,
      explanation: "A savas környezet (pH < 6) gyorsan elöli a leptospirákat."
    },
    {
      id: "lept_19",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Miért fontos a savópárok vizsgálata?",
      options: ["Hogy több vért vegyünk", "Az ellenanyagszint változásának (emelkedésének) kimutatásához", "Esztétika", "Nincs értelme"],
      correctAnswer: 1,
      explanation: "Egyetlen minta alapján nehéz eldönteni, hogy korábbi átvészelt vagy friss fertőzésről van-e szó."
    },
    {
      id: "lept_20",
      topic: "Leptospirosis",
      type: "bool",
      question: "A leptospirák mozgékony baktériumok.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, jellegzetes dugóhúzó-szerű mozgást végeznek az endoflagellumok segítségével."
    },
    {
      id: "lept_21",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Melyik szerv károsodása okozza a sárgaságot?",
      options: ["Tüdő", "Máj", "Agy", "Csont"],
      correctAnswer: 1,
      explanation: "A májszövet gyulladása és károsodása miatt az epefesték felszaporodik a szervezetben."
    },
    {
      id: "lept_22",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Mit okozhat a korai embrióelhalás leptospirosisban?",
      options: ["Sok malacot", "Szabálytalan visszaivarzást", "Gyorsabb hízást", "Semmit"],
      correctAnswer: 1,
      explanation: "Ha az embriók a vemhesség elején elpusztulnak, a koca újra ivarzani kezd."
    },
    {
      id: "lept_23",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Hogyan fertőződhet az ember?",
      options: ["Csak szemnézéssel", "Sérült bőrön át fertőzött vizelettel vagy vízzel érintkezve", "Csak ha megharapja a sertés", "Puszival"],
      correctAnswer: 1,
      explanation: "A környezetbe ürített leptospirák a mikrosérüléseken keresztül könnyen bejutnak az emberbe."
    },
    {
      id: "lept_24",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Mikor a legcélszerűbb a kocák emlékeztető oltása?",
      options: ["Ellés után", "Fialás előtt 2-4 héttel", "Két év múlva", "Soha"],
      correctAnswer: 1,
      explanation: "A fialás előtti oltás biztosítja a legjobb védelmet a magzatoknak és a tej útján a malacoknak."
    },
    {
      id: "lept_25",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Milyen táptalajt igényel a Leptospira tenyésztése?",
      options: ["Sima húsleves", "Speciális (pl. EMJH) táptalaj", "Tej", "Kenyér"],
      correctAnswer: 1,
      explanation: "Nagyon igényes baktériumok, speciális összetételű folyékony vagy félig szilárd táptalaj kell nekik."
    },
    {
      id: "lept_26",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Melyik rágcsáló a Serovar Grippotyphosa fő fenntartója?",
      options: ["Patkány", "Mezei pocok", "Egér", "Mókus"],
      correctAnswer: 1,
      explanation: "A pocokpopuláció fenntartja a fertőzést a természetben."
    },
    {
      id: "lept_27",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Milyen tüneteket mutatnak az életképtelen malacok születéskor?",
      options: ["Nagyon aktívak", "Remegnek, gyengék, sárgás bőrűek", "Fekete szőrűek", "Nincs tünet"],
      correctAnswer: 1,
      explanation: "A magzati fertőzés miatt károsodottan születnek."
    },
    {
      id: "lept_28",
      topic: "Leptospirosis",
      type: "bool",
      question: "A leptospirák spórát képeznek.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis, a leptospirák nem képeznek spórát."
    },
    {
      id: "lept_29",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Hogyan hat a klóros fertőtlenítés a leptospirákra?",
      options: ["Élteti őket", "Pár perc alatt elpusztítja őket", "Nincs hatása", "Zölddé teszi őket"],
      correctAnswer: 1,
      explanation: "A leptospirák nagyon érzékenyek a szokásos fertőtlenítőszerekre."
    },
    {
      id: "lept_30",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Melyik szerovar okozhat 'remegő malac' szindrómát?",
      options: ["Minden szerovar", "Főleg a Pomona", "Egyik sem", "Csak a Hardjo"],
      correctAnswer: 1,
      explanation: "A Pomona fertőzés klasszikus tünete a gyenge, remegő malacok születése."
    },
    {
      id: "lept_31",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Mi a 'steril immunitás'?",
      options: ["Minden baktérium elpusztul", "Az állat nem betegszik meg, de a baktérium jelen maradhat (hordozás)", "Soha nem lesz beteg", "Csak orvosi műtéteknél van"],
      correctAnswer: 1,
      explanation: "Leptospirosis vakcinázásnál gyakran nincs steril immunitás: az állat védett a tünetektől, de hordozó maradhat."
    },
    {
      id: "lept_32",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Melyik állatcsoport oltása a legfontosabb a szaporodási zavarok megelőzésére?",
      options: ["Hízók", "Kocasüldők és kocák", "Csak a malacok", "Egyik sem"],
      correctAnswer: 1,
      explanation: "A tenyészállomány védelme a gazdasági siker alapja."
    },
    {
      id: "lept_33",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Milyen alakúak a leptospirák?",
      options: ["Gömb", "Spirális (dugóhúzó)", "Kocka", "Pálca"],
      correctAnswer: 1,
      explanation: "A spirochaeták közé tartoznak, finoman csavart fonalas alakúak."
    },
    {
      id: "lept_34",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Hogyan néz ki a leptospira sötétlátóteres mikroszkópban?",
      options: ["Nem látszik", "Fénylő, mozgó fonalak", "Fekete pöttyök", "Nagy rögök"],
      correctAnswer: 1,
      explanation: "Mivel vékonyak, rendes mikroszkópban nehezen látszanak, de sötétlátótérben jól megfigyelhetők."
    },
    {
      id: "lept_35",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Melyik antibiotikum-csoportba tartozik a doxiciklin?",
      options: ["Penicillin", "Tetraciklin", "Aminoglikozid", "Makrolid"],
      correctAnswer: 1,
      explanation: "A doxiciklin egy modern, jól felszívódó tetraciklin."
    },
    {
      id: "lept_36",
      topic: "Leptospirosis",
      type: "bool",
      question: "A leptospira fertőzés orrnyálkahártyán keresztül is létrejöhet.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, bármely nyálkahártya bejutási kapu lehet."
    },
    {
      id: "lept_37",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Mi a 'leptospiraemia'?",
      options: ["Vizeletben lévő baci", "Vérben keringő és szaporodó leptospirák", "Gyógyulás", "Oltás"],
      correctAnswer: 1,
      explanation: "A fertőzés kezdeti, lázas szakasza, amikor a vérben vannak a kórokozók."
    },
    {
      id: "lept_38",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Hány napig tart általában a leptospiraemia szakasza?",
      options: ["1 óra", "7-10 nap", "1 év", "10 perc"],
      correctAnswer: 1,
      explanation: "Körülbelül egy hétig kering a vérben, mielőtt a szervekbe telepedne."
    },
    {
      id: "lept_39",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Melyik kórbonctani jele a leptospirosisnak?",
      options: ["Vulkán lézió", "Pontszerű vérzések a szerveken", "Nincs vérzés", "Szőrös szív"],
      correctAnswer: 1,
      explanation: "Az érkárosodás miatt testszerte apró vérzések láthatók akut esetben."
    },
    {
      id: "lept_40",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Mi a teendő a vetélt magzatokkal?",
      options: ["Ott hagyni", "Diagnosztikai vizsgálatra küldeni és ártalmatlanítani", "Megetetni a kutyával", "Semmi"],
      correctAnswer: 1,
      explanation: "A magzatok nagy mennyiségben tartalmazzák a kórokozót, ezért veszélyesek."
    },
    {
      id: "lept_41",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Milyen kémhatású a leptospirák számára ideális talaj?",
      options: ["Savas", "Enyhén lúgos vagy semleges", "Ecetes", "Sós"],
      correctAnswer: 1,
      explanation: "A nedves, nem savas talajban maradnak legtovább életben."
    },
    {
      id: "lept_42",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Melyik szerovar okoz gyakran embrióelhalást kocasüldőkben?",
      options: ["Pomona", "Bratislava", "Hardjo", "Icterohaemorrhagiae"],
      correctAnswer: 1,
      explanation: "A Bratislava szerovar speciálisan a reprodukciós utakat kedveli."
    },
    {
      id: "lept_43",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Mi történik, ha a koca már korábban átvészelt egy adott szerovar fertőzést?",
      options: ["Újra beteg lesz", "Immunitást szerez és védett lesz az adott szerovarral szemben", "Meghal", "Elfelejti"],
      correctAnswer: 1,
      explanation: "Az átvészelt fertőzés specifikus védelmet hagy maga után."
    },
    {
      id: "lept_44",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Hogyan kell adagolni a sztreptomicint a hordozás ellen?",
      options: ["Naponta ötször", "Egyszeri nagy dózisban (25 mg/ttkg)", "Csak a fülbe", "Sehogy"],
      correctAnswer: 1,
      explanation: "Az egyszeri nagy dózis általában elegendő a vesetisztításhoz."
    },
    {
      id: "lept_45",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Melyik szerv tubulusaiban bújnak meg a leptospirák?",
      options: ["Máj", "Vese", "Herék", "Tüdő"],
      correctAnswer: 1,
      explanation: "A vesecsatornácskák kanyarulatai ideális rejtekhelyek számukra."
    },
    {
      id: "lept_46",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Milyen vizet igyanak a sertések a megelőzés érdekében?",
      options: ["Dagonyavizet", "Ellenőrzött, tiszta ivóvizet", "Sós vizet", "Bármilyet"],
      correctAnswer: 1,
      explanation: "Az állóvizek a fertőzés fő közvetítői lehetnek."
    },
    {
      id: "lept_47",
      topic: "Leptospirosis",
      type: "bool",
      question: "A leptospirosis elleni védekezésben a patkányirtás elengedhetetlen.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, a patkányok számos szerovar (főleg az Icterohaemorrhagiae) rezervoárjai."
    },
    {
      id: "lept_48",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Melyik antibiotikum hosszú hatású (LA) változata adható injekcióban?",
      options: ["Doxiciklin", "Oxitetraciklin", "Neomicin", "Nisztatin"],
      correctAnswer: 1,
      explanation: "Az oxitetraciklin LA formája több napos védelmet biztosít."
    },
    {
      id: "lept_49",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Mi a MAT teszt legfőbb nehézsége?",
      options: ["Túl olcsó", "A vakcinázott állatok is pozitívak lehetnek", "Nincs nehézsége", "Csak kutyánál működik"],
      correctAnswer: 1,
      explanation: "Nehéz megkülönböztetni a vakcina-eredetű és a fertőzéses ellenanyag-titert."
    },
    {
      id: "lept_50",
      topic: "Leptospirosis",
      type: "mcq",
      question: "Mi az összefoglalás lényege a leptospirosisnál?",
      options: ["Nem veszélyes", "Komplex, sok szerovaros betegség, oltással és higiéniával kordában tartható", "Csak a magzatok betegek", "Nincs ellene gyógyszer"],
      correctAnswer: 1,
      explanation: "A tudatos menedzsment és a megfelelő vakcina a siker kulcsa."
    }
  ]
};
