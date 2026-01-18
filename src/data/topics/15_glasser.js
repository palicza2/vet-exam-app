export const glasserData = {
  id: "glasser",
  title: "15. Glaesserella parasuis (Glässer-betegség)",
  studyMaterial: [
    {
      "title": "1. Kóroktan és Jellemzők",
      "icon": "bug",
      "color": "bg-red-50 border-red-200",
      "iconColor": "text-red-600",
      "sections": [
        {
          "header": "1.1. Glaesserella parasuis",
          "points": [
            "Korábban: *Haemophilus parasuis*",
            "Gram-negatív, kisméretű, pleomorf pálca",
            "**NAD (V-faktor) igényes:** Csak csokoládéagaron vagy dajkacsíkkal (S. aureus) nő"
          ]
        },
        {
          "header": "1.2. Szerotípusok",
          "points": [
            "15 szerotípus (tokpoliszacharidok alapján)",
            "Magas virulenciájúak: 1, 5, 10, 12, 13, 14",
            "Magyarországon a **4-es és 5-ös szerotípus** a leggyakoribb"
          ]
        }
      ]
    },
    {
      "title": "2. Járványtan és Kórfejlődés",
      "icon": "share-2",
      "color": "bg-blue-50 border-blue-200",
      "iconColor": "text-blue-600",
      "sections": [
        {
          "header": "2.1. Kolonizáció",
          "points": [
            "A felső légutak (orrüreg, tonsillák) természetes lakója",
            "A malacok az anyjuktól fertőződnek korán",
            "Betegség akkor van, ha a **naiv malacok** (pl. SPF telep) találkoznak virulens törzzsel"
          ]
        },
        {
          "header": "2.2. Hajlamosító tényezők",
          "points": [
            "**Stressz-betegség:** Választás, szállítás, falkásítás",
            "Társfertőzések: **PRRS, Influenza** (károsítják a légúti barriert)",
            "Rossz klíma: huzat, hideg"
          ]
        }
      ]
    },
    {
      "title": "3. Tünetek és Kórbonctan",
      "icon": "activity",
      "color": "bg-orange-50 border-orange-200",
      "iconColor": "text-orange-500",
      "sections": [
        {
          "header": "3.1. Klinikai formák",
          "points": [
            "**Akut:** Magas láz (41-42 °C), sántaság, duzzadt ízületek, púposítás a fájdalom miatt",
            "**Idegrendszeri:** Meningitis (oldalfekvés, evező mozgás, remegés)",
            "**Krónikus:** Lesoványodás ('borzas malacok'), tartós sántaság"
          ]
        },
        {
          "header": "3.2. Kórbonctan",
          "points": [
            "**Fibrines polyserositis iskolapéldája**",
            "Sárgás fibrinlepedék a tüdőn, szíven ('bundás szív'), májon és beleken",
            "Zavaros, fibrines ízületi nedv; gennyes-fibrines meningitis"
          ]
        }
      ]
    },
    {
      "title": "4. Diagnózis és Kezelés",
      "icon": "search",
      "color": "bg-slate-50 border-slate-200",
      "iconColor": "text-slate-500",
      "sections": [
        {
          "header": "4.1. Diagnosztika",
          "points": [
            "Minta: testüregekből (pleura, pericardium), ízületekből vagy agyvelőből",
            "**Az orrtampon diagnosztikai szempontból értéktelen** (egészségesekben is ott van)",
            "PCR: fajazonosítás és virulenciafaktorok (vtaA) meghatározása"
          ]
        },
        {
          "header": "4.2. Gyógykezelés",
          "points": [
            "**Ceftiofur:** Kiváló hatékonyság heveny esetekben",
            "Amoxicillin, Florfenikol, Enrofloxacin (ha indokolt)",
            "**NSAID:** Láz- és fájdalomcsillapításra kötelező"
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "glass_1",
      topic: "Glaesserella parasuis",
      type: "mcq",
      question: "Mi a Glaesserella parasuis korábbi neve?",
      options: ["Pasteurella multocida", "Haemophilus parasuis", "Actinobacillus suis", "Streptococcus suis"],
      correctAnswer: 1,
      explanation: "A Glaesserella parasuis-t korábban Haemophilus parasuis-ként ismertük (Glässer-kór)."
    },
    {
      id: "glass_2",
      topic: "Glaesserella parasuis",
      type: "mcq",
      question: "Melyik faktor szükséges a G. parasuis növekedéséhez a táptalajban?",
      options: ["X-faktor", "V-faktor (NAD)", "Csak oxigén", "Cukor"],
      correctAnswer: 1,
      explanation: "A G. parasuis NAD-dependens, ezért csokoládéagaron vagy dajkatenyészettel nő."
    },
    {
      id: "glass_3",
      topic: "Glaesserella parasuis",
      type: "mcq",
      question: "Mely szerotípusok a leggyakoribbak Magyarországon?",
      options: ["1 és 2", "4 és 5", "10 és 12", "15"],
      correctAnswer: 1,
      explanation: "Hazánkban és világszerte a 4-es és 5-ös szerotípus a leggyakoribb klinikai izolátum."
    },
    {
      id: "glass_4",
      topic: "Glaesserella parasuis",
      type: "mcq",
      question: "Mi a Glässer-betegség jellemző kórbonctani elváltozása?",
      options: ["Sajtos tüdőgyulladás", "Fibrines polyserositis (többszörös savóshártya-gyulladás)", "Vérzéses bélgyulladás", "Májzsugor"],
      correctAnswer: 1,
      explanation: "A G. parasuis sárgás fibrines felrakódásokat okoz a tüdőn, szíven, májon és az ízületekben."
    },
    {
      id: "glass_5",
      topic: "Glaesserella parasuis",
      type: "mcq",
      question: "Honnan TILOS mintát venni a Glässer-betegség igazolására?",
      options: ["Szívburokból", "Orrüregből / Tonsillából", "Ízületi folyadékból", "Agyvelőből"],
      correctAnswer: 1,
      explanation: "Az orrüregben egészséges állatokban is ott van a baktérium, így onnan nem igazolható a betegség."
    },
    {
      id: "glass_6",
      topic: "Glaesserella parasuis",
      type: "mcq",
      question: "Melyik korosztály a legérzékenyebb a Glässer-betegségre?",
      options: ["Szopós malacok", "4-8 hetes választott malacok", "Kifejlett kanok", "Vemhes kocák"],
      correctAnswer: 1,
      explanation: "A választás utáni stresszperiódusban a leggyakoribb a betegség jelentkezése."
    },
    {
      id: "glass_7",
      topic: "Glaesserella parasuis",
      type: "mcq",
      question: "Mi jellemző az idegrendszeri formára?",
      options: ["Vakság", "Oldalfekvés, evező mozgás, görcsök (meningitis)", "Süketség", "Szőrhullás"],
      correctAnswer: 1,
      explanation: "Az agyhártyagyulladás miatt az állatok evező mozgást és idegrendszeri kiesési tüneteket mutatnak."
    },
    {
      id: "glass_8",
      topic: "Glaesserella parasuis",
      type: "mcq",
      question: "Melyik antibiotikum kiváló választás a heveny esetek injekciós kezelésére?",
      options: ["Penicillin G", "Ceftiofur", "Tiloszin", "Tetraciklin"],
      correctAnswer: 1,
      explanation: "A Ceftiofur rendkívül hatékony a Gram-negatív G. parasuis ellen."
    },
    {
      id: "glass_9",
      topic: "Glaesserella parasuis",
      type: "mcq",
      question: "Miért fontos az anyai immunitás (kolosztrum) a Glässer-betegségnél?",
      options: ["Mert finom", "Lehetővé teszi a kolonizációt betegség kialakulása nélkül (immunitást ad)", "Megöli az összes baktériumot", "Nincs szerepe"],
      correctAnswer: 1,
      explanation: "Az anyai ellenanyagok védelme alatt a malacok találkoznak a baktériummal és saját immunitást építenek ki."
    },
    {
      id: "glass_10",
      topic: "Glaesserella parasuis",
      type: "mcq",
      question: "Mit jelent a 'bundás szív' kifejezés?",
      options: ["Szőr nő a szíven", "Fibrines pericarditis (vastag sárgás lepedék a szívburkon)", "Nagyobb szív", "Zsíros szív"],
      correctAnswer: 1,
      explanation: "A szívburok fibrines gyulladása miatt a szív felszíne borzas, sárgás lepedékkel fedett."
    },
    {
      id: "glass_11",
      topic: "Glaesserella parasuis",
      type: "mcq",
      question: "Melyik vírusfertőzés hajlamosít leginkább a Glässer-betegségre?",
      options: ["Parvovírus", "PRRS", "Rotavírus", "Veszettség"],
      correctAnswer: 1,
      explanation: "A PRRS vírus gyengíti az immunrendszert, utat nyitva a G. parasuis inváziójának."
    },
    {
      id: "glass_12",
      topic: "Glaesserella parasuis",
      type: "mcq",
      question: "Milyen az ízületi nedv Glässer-betegségben?",
      options: ["Tiszta", "Zavaros, sárgás-zöldes fibrines csapadékkal", "Csak tiszta vér", "Nincs folyadék"],
      correctAnswer: 1,
      explanation: "Az ízületi gyulladás fibrines jellegű, zavaros folyadékkal."
    },
    {
      id: "glass_13",
      topic: "Glaesserella parasuis",
      type: "mcq",
      question: "Mi a teendő a 'naiv' állományokkal a biosecurity szempontjából?",
      options: ["Mindent szabad", "Szigorú karantén és védelem a behurcolás ellen (katasztrofális lehet a kitörés)", "Nem kell védekezni", "Minden malacot beoltani"],
      correctAnswer: 1,
      explanation: "A korábban mentes állományokban nincs alapimmunitás, így a kórokozó bejutása óriási pusztítást okoz."
    },
    {
      id: "glass_14",
      topic: "Glaesserella parasuis",
      type: "mcq",
      question: "Melyik gén felelős a virulencia meghatározásáért PCR-nél?",
      options: ["toxA", "vtaA", "stx2e", "tet(B)"],
      correctAnswer: 1,
      explanation: "A vtaA gének vizsgálatával a törzsek virulenciája (betegségokozó képessége) becsülhető."
    },
    {
      id: "glass_15",
      topic: "Glaesserella parasuis",
      type: "mcq",
      question: "Milyen antibiotikum-rezisztencia gyakori a G. parasuis-nál?",
      options: ["Ceftiofur rezisztencia", "Tetraciklin és makrolid rezisztencia", "Nincs rezisztencia", "Csak penicillin rezisztencia"],
      correctAnswer: 1,
      explanation: "A tetraciklinekre és a tilozinra (makrolid) gyakran rezisztensek a törzsek."
    },
    {
      id: "glass_16",
      topic: "Glaesserella parasuis",
      type: "mcq",
      question: "Hogyan hívják a krónikus esetet túlélő állatokat?",
      options: ["Hősök", "Borzas malacok (soványak, szőrösek)", "Óriások", "Nincs nevük"],
      correctAnswer: 1,
      explanation: "A krónikus gyulladás és összenövések miatt a malacok fejlődése megáll, szőrük borzas lesz."
    },
    {
      id: "glass_17",
      topic: "Glaesserella parasuis",
      type: "mcq",
      question: "Melyik állítás igaz a vakcinázásra?",
      options: ["Csak egy szerotípus létezik", "A védelem szerotípus-specifikus (tudni kell, mi van a telepen)", "A vakcina megöli a vírusokat", "Minden vakcina egyforma"],
      correctAnswer: 1,
      explanation: "Mivel 15 szerotípus van, a vakcinának tartalmaznia kell a telepen lévő törzset a hatékonysághoz."
    },
    {
      id: "glass_18",
      topic: "Glaesserella parasuis",
      type: "mcq",
      question: "Miért 'stressz-betegség' a Glässer-kór?",
      options: ["Mert a gazda stresszes", "Mert a stresszhatások (szállítás, keverés) váltják ki a tünetmentes hordozókból a betegséget", "Mert fáj a fejük", "Nem az"],
      correctAnswer: 1,
      explanation: "A baktérium sok állatban ott van, de csak a stressz okozta legyengüléskor válik kórokozóvá."
    },
    {
      id: "glass_19",
      topic: "Glaesserella parasuis",
      type: "mcq",
      question: "Mit jelent a 'hasi légzés' Glässer-betegségben?",
      options: ["Hason fekve alszanak", "A mellhártyagyulladás fájdalma miatt az állat igyekszik csak a hasi izmokkal lélegezni", "Sokat esznek", "Gyors légzés"],
      correctAnswer: 1,
      explanation: "A pleuritis (mellhártyagyulladás) rendkívül fájdalmas, ezért a sertés kerüli a mellkas tágítását."
    },
    {
      id: "glass_20",
      topic: "Glaesserella parasuis",
      type: "mcq",
      question: "Mi az összefoglalás lényege a Glässer-betegségnél?",
      options: ["Nem veszélyes", "Választott malacok súlyos fibrines polyserositise, amit stressz és vírusok segítenek elő", "Csak idős kocák betegsége", "Hasmenést okoz"],
      correctAnswer: 1,
      explanation: "A Glässer-kór az egyik legjelentősebb választás körüli betegség, komoly mortalitási kockázattal."
    }
  ]
};
