export const streptococcus_suis = {
  id: "streptococcus_suis",
  title: "3. Streptococcus suis fertőzés",
  studyMaterial: [
    {
      "title": "1. A kórokozó jellemzői",
      "icon": "microscope",
      "color": "bg-blue-50 border-blue-200",
      "iconColor": "text-blue-500",
      "sections": [
        {
          "header": "1.1. Morfológia",
          "points": [
            "**Gram-pozitív coccusok**, amelyek jellemzően láncokban helyezkednek el",
            "Fakultatív anaerob, tokkal rendelkezik (CPS - poliszacharid tok)",
            "A tok a legfontosabb virulenciafaktor: véd a fagocitózistól"
          ]
        },
        {
          "header": "1.2. Szerotípusok és Zoonózis",
          "points": [
            "35 szerotípus ismert (a 2-es a legvirulensebb és leggyakoribb)",
            "**Zoonózis:** emberben súlyos meningitist és maradandó süketséget okozhat!"
          ]
        }
      ]
    },
    {
      "title": "2. Klinikai lefolyás",
      "icon": "alert-triangle",
      "color": "bg-orange-50 border-orange-200",
      "iconColor": "text-orange-500",
      "sections": [
        {
          "header": "2.1. Perakut és Akut forma",
          "points": [
            "**Perakut:** Hirtelen elhullás (fulmináns szeptikémia)",
            "**Akut:** Magas láz, levertség, idegrendszeri tünetek",
            "**Meningitis tünetei:** ataxia (bizonytalan mozgás), **opisthotonus** (hátrahajló fej), **nystagmus** (szemtekerezgés)"
          ]
        },
        {
          "header": "2.2. Szubakut forma (Lokalizált folyamatok)",
          "points": [
            "**Gennyes arthritis:** ízületgyulladás, sántaság",
            "**Bronchopneumonia:** tüdőgyulladás",
            "**Vegetatív endocarditis:** szívbelhártya-gyulladás (cianózis, hirtelen elhullás)"
          ]
        }
      ]
    },
    {
      "title": "3. Kórbonctani elváltozások",
      "icon": "search",
      "color": "bg-slate-50 border-slate-200",
      "iconColor": "text-slate-500",
      "sections": [
        {
          "header": "3.1. Szeptikémiás és gyulladásos jelek",
          "points": [
            "Vérzések a savóshártyákon, lépmegnagyobbodás",
            "**Meningitis:** vérbő agyburkok, zavaros/gennyes liquor",
            "**Polyserositis:** fibrines-gennyes gyulladás (mellhártya, szívburok, hashártya)",
            "**Arthritis:** sárgás, gennyes ízületi folyadék"
          ]
        }
      ]
    },
    {
      "title": "4. Diagnosztika és Terápia",
      "icon": "pill",
      "color": "bg-emerald-50 border-emerald-200",
      "iconColor": "text-emerald-500",
      "sections": [
        {
          "header": "4.1. Diagnózis",
          "points": [
            "Minta: agyvelő, ízületi folyadék, lép",
            "Tenyésztés: véres agaron (Gram+ coccusok láncban)",
            "PCR a fajazonosság megerősítésére"
          ]
        },
        {
          "header": "4.2. Kezelés (Antibiotikumok)",
          "points": [
            "**Béta-laktámok** (első választás): amoxicillin, ampicillin, penicillin G, ceftiofur",
            "**Florfenikol:** kiválóan penetrál az idegrendszerbe és ízületekbe",
            "**Tetraciklinek és Makrolidok:** KERÜLENDŐK a rendkívül magas (80-90%) rezisztencia miatt!"
          ]
        }
      ]
    },
    {
      "title": "5. Megelőzés",
      "icon": "shield-check",
      "color": "bg-indigo-50 border-indigo-200",
      "iconColor": "text-indigo-500",
      "sections": [
        {
          "header": "5.1. Vakcinázás",
          "points": [
            "**Autogén vakcinák:** telepspecifikus törzsekből",
            "Kocák oltása fialás előtt (kolosztrális védelem 3-5 hetes korig)"
          ]
        },
        {
          "header": "5.2. Menedzsment",
          "points": [
            "Zsúfoltság csökkentése, higiénikus sebészeti beavatkozások",
            "Társfertőzések (PRRS, PCV2) kontrollja"
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "ssuis_1",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Mi a Streptococcus suis legfontosabb virulenciafaktora?",
      options: ["Ostor", "Poliszacharid tok (CPS)", "Endotoxin", "Spóra"],
      correctAnswer: 1,
      explanation: "A poliszacharid tok védi a baktériumot a gazdaszervezet immunsejtjeitől (fagocitózis)."
    },
    {
      id: "ssuis_2",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Melyik szerotípus a leggyakoribb és legvirulensebb sertésben?",
      options: ["1-es", "2-es", "9-es", "35-ös"],
      correctAnswer: 1,
      explanation: "A 2-es szerotípus a legelterjedtebb a megbetegedések hátterében világszerte."
    },
    {
      id: "ssuis_3",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Melyik idegrendszeri tünet utal meningitisre?",
      options: ["Köhögés", "Opisthotonus (hátrahajló fej)", "Hasmenés", "Szőrhullás"],
      correctAnswer: 1,
      explanation: "Az opisthotonus, az ataxia és a nystagmus az agyhártyagyulladás tipikus jelei."
    },
    {
      id: "ssuis_4",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Mi a 'nystagmus'?",
      options: ["Bénulás", "Szemtekerezgés", "Láz", "Vakvágány"],
      correctAnswer: 1,
      explanation: "A szemek ritmikus, akaratlan mozgása, ami idegrendszeri károsodásra utal."
    },
    {
      id: "ssuis_5",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Melyik kórkép jellemző a szubakut formára?",
      options: ["Csak láz", "Gennyes arthritis (ízületgyulladás)", "Hirtelen elhullás", "Bőrelhalás"],
      correctAnswer: 1,
      explanation: "A szubakut formában lokalizált gyulladások, például ízületgyulladás vagy tüdőgyulladás alakulnak ki."
    },
    {
      id: "ssuis_6",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Mi látható az agyburkokon boncoláskor meningitis esetén?",
      options: ["Semmi", "Vérbőség és zavaros, gennyes liquor", "Kiszáradás", "Daganat"],
      correctAnswer: 1,
      explanation: "Az agyburkok gyulladása miatt azok vérbőek, az agyvíz pedig zavarossá válik."
    },
    {
      id: "ssuis_7",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Hogyan néz ki a S. suis a mikroszkóp alatt?",
      options: ["Gram-negatív pálca", "Gram-pozitív coccusok láncban", "Gram-pozitív fürtökben", "Spirális"],
      correctAnswer: 1,
      explanation: "A Streptococcusokra jellemzően Gram-pozitív gömbök (coccusok), amelyek láncokat alkotnak."
    },
    {
      id: "ssuis_8",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Melyik antibiotikum-csoport a terápia gerince?",
      options: ["Tetraciklinek", "Béta-laktámok (pl. amoxicillin)", "Aminoglikozidok", "Kinolonok"],
      correctAnswer: 1,
      explanation: "A béta-laktámok (penicillinek, amoxicillin) a leghatékonyabbak, a törzsek >90%-a érzékeny."
    },
    {
      id: "ssuis_9",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Miért kerülendők a tetraciklinek a S. suis kezelésében?",
      options: ["Mert túl drágák", "Rendkívül magas (80-90%) a rezisztencia aránya", "Mert nem szívódnak fel", "Mert mérgezőek"],
      correctAnswer: 1,
      explanation: "A széles körű rezisztencia miatt ezek a szerek már nem hatékonyak."
    },
    {
      id: "ssuis_10",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Mit okozhat a S. suis emberben?",
      options: ["Csak náthát", "Súlyos meningitist és süketséget", "Hasmenést", "Semmit"],
      correctAnswer: 1,
      explanation: "Veszélyes zoonózis, amely maradandó károsodást, például hallásvesztést is okozhat."
    },
    {
      id: "ssuis_11",
      topic: "Streptococcus suis",
      type: "bool",
      question: "A S. suis ellen létezik univerzális vakcina minden szerotípusra.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis, a sok szerotípus miatt általában autogén (telepspecifikus) vakcinákat használnak."
    },
    {
      id: "ssuis_12",
      topic: "Streptococcus suis",
      type: "bool",
      question: "A tünetmentes hordozó sertések mandulájában gyakran megtalálható a baktérium.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, a mandula az egyik fő rezervoárja a kórokozónak."
    },
    {
      id: "ssuis_13",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Melyik kórkép nem jellemző a S. suis fertőzésre?",
      options: ["Meningitis", "Arthritis", "Szarvmegbetegedés", "Endocarditis"],
      correctAnswer: 2,
      explanation: "A Streptococcus suis nem okoz szarvmegbetegedést."
    },
    {
      id: "ssuis_14",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Milyen jellegű a gyulladás polyserositis esetén?",
      options: ["Csak vizenyős", "Fibrines-gennyes", "Üszkös", "Nincs gyulladás"],
      correctAnswer: 1,
      explanation: "A Streptococcus fertőzésre jellemző a fibrines és gennyes izzadmány képződése."
    },
    {
      id: "ssuis_15",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Melyik vírusfertőzés hajlamosít a S. suis kártételére?",
      options: ["Csak a száj- és körömfájás", "PRRS és PCV2", "Veszebség", "Sertéspestis"],
      correctAnswer: 1,
      explanation: "Az immunrendszert gyengítő vírusok (PRRS, cirkovírus) segítik a baktérium elszaporodását."
    },
    {
      id: "ssuis_16",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Melyik antibiotikum lipofil, így kiválóan penetrál az agyba és ízületekbe?",
      options: ["Neomicin", "Florfenikol", "Sztreptomicin", "Nisztatin"],
      correctAnswer: 1,
      explanation: "A florfenikol kiváló szöveti penetrációval rendelkezik."
    },
    {
      id: "ssuis_17",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Hogyan nevezzük a több savóshártyát érintő gyulladást?",
      options: ["Dermatitis", "Polyserositis", "Hepatitis", "Gastritis"],
      correctAnswer: 1,
      explanation: "A mellhártya, szívburok és hashártya együttes gyulladása a polyserositis."
    },
    {
      id: "ssuis_18",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Mi a teendő meningitis tünetek esetén?",
      options: ["Éheztetés", "Azonnali nagy dózisú antibiotikumos kezelés", "Csak víz adása", "Semmi"],
      correctAnswer: 1,
      explanation: "Az idegrendszeri tüneteknél a gyors beavatkozás kritikus a túléléshez."
    },
    {
      id: "ssuis_19",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Melyik szerotípus ellen nyújt védelmet a legtöbb autogén vakcina?",
      options: ["Amelyiket a telepen izolálták", "Az összes létező ellen", "Csak az 1-es ellen", "Csak emberi ellen"],
      correctAnswer: 0,
      explanation: "Az autogén vakcina lényege, hogy a helyi, problémát okozó törzsekből készül."
    },
    {
      id: "ssuis_20",
      topic: "Streptococcus suis",
      type: "bool",
      question: "A S. suis Gram-negatív baktérium.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis, a Streptococcusok Gram-pozitívak."
    },
    {
      id: "ssuis_21",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Mit okoz a szívbillentyűn kialakuló vegetáció?",
      options: ["Jobb hallást", "Billentyűelégtelenséget és keringési zavart", "Fokozott izomerőt", "Semmit"],
      correctAnswer: 1,
      explanation: "A felrakódások akadályozzák a billentyűk záródását."
    },
    {
      id: "ssuis_22",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Milyen mintát kell venni ízületgyulladás gyanúja esetén?",
      options: ["Vizeletet", "Ízületi folyadékot (synovia)", "Bélsárt", "Szőrt"],
      correctAnswer: 1,
      explanation: "A gyulladt ízületből vett folyadék a legjobb diagnosztikai minta."
    },
    {
      id: "ssuis_23",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Mi az 'opisthotonus'?",
      options: ["Hasmenés", "A tarkó- és hátizmok merevsége miatti hátrahajló testtartás", "Köhögés", "Látásvesztés"],
      correctAnswer: 1,
      explanation: "Az agyhártyagyulladás okozta jellegzetes kényszertartás."
    },
    {
      id: "ssuis_24",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Melyik antibiotikum kombináció szinergista hatású és ivóvízben is adható?",
      options: ["Penicillin + Sztreptomicin", "Trimetoprim-szulfonamid", "Tetraciklin + Makrolid", "Semelyik"],
      correctAnswer: 1,
      explanation: "A trimetoprim-szulfonamid hatékony és jól alkalmazható csoportos kezelésre."
    },
    {
      id: "ssuis_25",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Mikor a legfogékonyabbak a malacok a meningitisre?",
      options: ["Közvetlenül születés után", "Választás után (stressz és kolosztrális védelem csökkenése)", "1 évesen", "Koca korban"],
      correctAnswer: 1,
      explanation: "A választás körüli időszak a legkritikusabb."
    },
    {
      id: "ssuis_26",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Milyen alakúak a Streptococcus telepek véres agaron?",
      options: ["Nagy szürke telepek", "Apró telepek", "Fekete lyukak", "Nincs telep"],
      correctAnswer: 1,
      explanation: "A Streptococcusok jellemzően kisméretű telepeket képeznek."
    },
    {
      id: "ssuis_27",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Milyen gének kódolják a tetraciklin rezisztenciát S. suis-ban?",
      options: ["mecA", "tet(O), tet(W)", "erm(B)", "blaZ"],
      correctAnswer: 1,
      explanation: "A tet(O) és tet(W) gének a leggyakoribbak a tetraciklin rezisztencia hátterében."
    },
    {
      id: "ssuis_28",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Milyen elváltozás látható a vesében endocarditis esetén?",
      options: ["Daganat", "Veseinfarktus (embólia miatt)", "Vesehiány", "Semmi"],
      correctAnswer: 1,
      explanation: "A szívbillentyűről leszakadó darabok embolizálhatnak a vesébe."
    },
    {
      id: "ssuis_29",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Melyik faktor segíti a baktérium bejutását a szervezetbe?",
      options: ["Jó higiénia", "Sebészeti beavatkozások (pl. farokkurtítás, kasztrálás)", "Sok alvás", "Friss levegő"],
      correctAnswer: 1,
      explanation: "A sebek bemeneti kapuként szolgálnak a baktériumok számára."
    },
    {
      id: "ssuis_30",
      topic: "Streptococcus suis",
      type: "bool",
      question: "A S. suis törzsek között gyakori a multirezisztencia (MDR).",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, sok törzs 3 vagy több antibiotikum-csoporttal szemben is ellenálló."
    },
    {
      id: "ssuis_31",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Melyik billentyű érintett leggyakrabban endocarditisben?",
      options: ["Csak az aorta", "Mitrális és aorta", "Csak a trikuszpidális", "Nincs billentyű érintettség"],
      correctAnswer: 1,
      explanation: "A bal szívfél billentyűi érintettek a leggyakrabban."
    },
    {
      id: "ssuis_32",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Hogyan hat az erm(B) gén a baktériumra?",
      options: ["Elpusztítja", "Metilálja a riboszómát, megakadályozva az antibiotikum kötődését", "Vastagítja a tokot", "Semmit nem tesz"],
      correctAnswer: 1,
      explanation: "Ez a mechanizmus felelős a makrolid és linkózamid rezisztenciáért."
    },
    {
      id: "ssuis_33",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Mi a fulmináns szeptikémia következménye?",
      options: ["Gyors gyógyulás", "Hirtelen elhullás", "Szőrnövekedés", "Hízás"],
      correctAnswer: 1,
      explanation: "A baktériumok gyors elszaporodása a vérben sokkhoz és halálhoz vezet."
    },
    {
      id: "ssuis_34",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Milyen az agyvíz (liquor) S. suis meningitis esetén?",
      options: ["Tiszta, vízszerű", "Zavaros, gennyes, fibrines", "Vörös", "Zöld"],
      correctAnswer: 1,
      explanation: "A gyulladásos folyamat miatt az agyvíz opálossá és gennyessé válik."
    },
    {
      id: "ssuis_35",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Milyen típusú baktérium a S. suis?",
      options: ["Szigorúan aerob", "Fakultatív anaerob", "Szigorúan anaerob", "Fototróf"],
      correctAnswer: 1,
      explanation: "Oxigén jelenlétében és hiányában is képes szaporodni."
    },
    {
      id: "ssuis_36",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Melyik állítás igaz a zoonózis veszélyére?",
      options: ["Csak nyers hús evésével terjed", "Bőrsérüléseken keresztül is fertőzheti a gondozókat/henteseket", "Emberben nem okoz bajt", "Csak kutyákra veszélyes"],
      correctAnswer: 1,
      explanation: "A sertésekkel való közvetlen érintkezés és a sérülések nagy kockázatot jelentenek."
    },
    {
      id: "ssuis_37",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Mi a bronchopneumonia?",
      options: ["Gyomorgyulladás", "Tüdőgyulladás", "Májgyulladás", "Bőrgyulladás"],
      correctAnswer: 1,
      explanation: "A Streptococcus suis okozhat másodlagos tüdőgyulladást is."
    },
    {
      id: "ssuis_38",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Melyik az 'intermedier' érzékenység jelentése antibiotikumnál?",
      options: ["Nagyon érzékeny", "Átmeneti állapot az érzékeny és a rezisztens között (emelt dózis kellhet)", "Teljesen rezisztens", "Azonnal ható"],
      correctAnswer: 1,
      explanation: "Ilyenkor az antibiotikum hatása bizonytalan, nagyobb adag vagy más szer javasolt."
    },
    {
      id: "ssuis_39",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Melyik szerv duzzanata látható szeptikémia esetén?",
      options: ["Lép és nyirokcsomók", "Csak a szív", "Csak a köröm", "Semelyiké"],
      correctAnswer: 0,
      explanation: "A fertőzésre adott immunválasz részeként ezek a szervek megduzzadnak."
    },
    {
      id: "ssuis_40",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Miért fontos a PRRS kontrollja a S. suis ellen?",
      options: ["Mert ugyanaz az antibiotikum kell rájuk", "Mert a PRRS vírus gyengíti az immunvédelmet, utat nyitva a baktériumnak", "Mert nem fontos", "Mert a PRRS vírus megeszi a baktériumot"],
      correctAnswer: 1,
      explanation: "A vírusfertőzések gyakran elősegítik a Streptococcus kártételét."
    },
    {
      id: "ssuis_41",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Mi az MLST?",
      options: ["Egy gyógyszer", "Molekuláris tipizáló eljárás a törzsek rokonságának felderítésére", "Egy vakcina", "Egy betegség"],
      correctAnswer: 1,
      explanation: "Multilocus Sequence Typing - a baktériumok genetikai nyomon követésére használják."
    },
    {
      id: "ssuis_42",
      topic: "Streptococcus suis",
      type: "bool",
      question: "A S. suis okozta endocarditis főleg növendékeken és hízókon fordul elő.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, a krónikusabb szívbillentyű-elváltozások az idősebb állatokra jellemzőbbek."
    },
    {
      id: "ssuis_43",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Milyen az ízületi folyadék gennyes arthritis esetén?",
      options: ["Tiszta", "Sárgás, zavaros, fibrines-gennyes", "Kék", "Nincs folyadék"],
      correctAnswer: 1,
      explanation: "A gyulladásos izzadmány megváltoztatja a folyadék színét és állagát."
    },
    {
      id: "ssuis_44",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Mi a 'fulmináns' kifejezés jelentése?",
      options: ["Lassú", "Villámgyors, viharos lefolyású", "Enyhe", "Idült"],
      correctAnswer: 1,
      explanation: "A perakut esetekre jellemző rendkívül gyors folyamat."
    },
    {
      id: "ssuis_45",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Hogyan lehet megelőzni a zoonózis fertőzést?",
      options: ["Kesztű használatával és higiéniával a fertőzött állatok/hús kezelésekor", "Csak maszkban", "Sosem kell védekezni", "Védőital fogyasztásával"],
      correctAnswer: 0,
      explanation: "A fizikai védelem és a tisztaság a legfontosabb."
    },
    {
      id: "ssuis_46",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Mit jelent az MDR?",
      options: ["Magyar Diagnosztikai Rendszer", "Multirezisztencia (három vagy több antibiotikum-csoporttal szemben)", "Mindenre Jó Gyógyszer", "Magas Dózisú Reakció"],
      correctAnswer: 1,
      explanation: "Multi-Drug Resistance - komoly kihívás a gyógykezelésben."
    },
    {
      id: "ssuis_47",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Melyik béta-laktám antibiotikum kritikusan fontos (HPCIA)?",
      options: ["Penicillin G", "Amoxicillin", "Ceftiofur", "Ampicillin"],
      correctAnswer: 2,
      explanation: "A 3. generációs cefalosporinok (pl. ceftiofur) kiemelt fontosságúak, használatukat korlátozni kell."
    },
    {
      id: "ssuis_48",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Mi a CPS?",
      options: ["Egy kórkép", "Capsular Polysaccharide (poliszacharid tok)", "Gyors diagnosztikai teszt", "Egy antibiotikum"],
      correctAnswer: 1,
      explanation: "A baktérium védőburka, a tok angol rövidítése."
    },
    {
      id: "ssuis_49",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Mit okoz a 'vaginitis'?",
      options: ["Tüdőgyulladást", "Hüvelygyulladást", "Lábvég-gyulladást", "Agygyulladást"],
      correctAnswer: 1,
      explanation: "A Streptococcus suis ritkábban a nemi szerveket is érintheti."
    },
    {
      id: "ssuis_50",
      topic: "Streptococcus suis",
      type: "mcq",
      question: "Mi a legfontosabb teendő a telepi S. suis probléma esetén?",
      options: ["Minden állat levágása", "Diagnózis, rezisztenciavizsgálat, menedzsment javítás és vakcinázás", "Csak ablaknyitás", "Több étel adása"],
      correctAnswer: 1,
      explanation: "A komplex védekezési stratégia a leghatékonyabb."
    }
  ]
};
