export const mobileElementsData = {
  id: "mobile_genetic_elements",
  title: "19. Mobilis genetikai elemek (MGE)",
  studyMaterial: [
    {
      title: "1. A Horizontális Géntranszfer Kulcsai",
      icon: "microscope",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-500",
      sections: [
        {
          header: "MGE jelentősége",
          points: [
            "A baktériumok nem csak utódaiknak adják át a rezisztenciát, hanem 'oldalirányban' is (HGT).",
            "A mobilis genetikai elemek (MGE) biztosítják a gének mozgékonyságát a genomon belül és a sejtek között."
          ]
        }
      ]
    },
    {
      title: "2. Plazmidok",
      icon: "bug",
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-500",
      sections: [
        {
          header: "Az ellenállás hordozórakétái",
          points: [
            "**Cirkuláris DNS:** A kromoszómától függetlenül replikálódnak.",
            "**Konjugáció:** A *tra*-gének segítségével pilust képeznek, és átmásolják magukat egy másik sejtbe.",
            "**R-plazmidok:** Gyakran több rezisztenciagént is hordoznak egyszerre (multirezisztencia).",
            "**Példa:** Az ESBL (CTX-M) és a kolisztin-rezisztencia (mcr-1) legfontosabb terjesztői."
          ]
        }
      ]
    },
    {
      title: "3. Transzpozonok és IS elemek",
      icon: "activity",
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-500",
      sections: [
        {
          header: "Ugráló gének",
          points: [
            "**Transzpozonok:** Képesek helyet változtatni a genomban (pl. kromoszómáról plazmidra). Saját transzpozáz enzimmel rendelkeznek.",
            "**Példa:** Tn1546 hordozza a *vanA* gént (vankomicin-rezisztencia).",
            "**Inzerciós szekvenciák (IS):** A legegyszerűbb elemek. Gyakran 'kiszakítanak' géneket a kromoszómából és mobilis elemre ültetik (pl. *blaCTX-M* mobilizálása)."
          ]
        }
      ]
    },
    {
      title: "4. Integronok",
      icon: "shieldCheck",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
      sections: [
        {
          header: "Moduláris géngyűjtő rendszerek",
          points: [
            "**Működés:** Nem ugrálnak, hanem géneket (kazettákat) gyűjtenek be egy helyre.",
            "**Komponensek:** Integráz enzim (*intI*), befogadó hely (*attI*), és egy erős promóter a gének kifejezéséhez.",
            "**1. osztályú integronok:** Kórházi Gram-negatív baktériumokban a leggyakoribbak, 'csomagban' terjesztik a rezisztenciát."
          ]
        }
      ]
    },
    {
      title: "5. Speciális Elemek (ICE és SCCmec)",
      icon: "shieldAlert",
      color: "bg-emerald-50 border-emerald-200",
      iconColor: "text-emerald-500",
      sections: [
        {
          header: "Kromoszomális mobilis elemek",
          points: [
            "**ICE (Integratív és Konjugatív Elemek):** A kromoszómába épülnek, de képesek onnan kivágódni és konjugációval átjutni.",
            "**SCCmec kazetta:** A Staphylococcusokban hordozza a *mecA* gént (MRSA). Speciális rekombinázokkal (*ccr*) mozog."
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "mob_1",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Melyik mechanizmus útján terjednek a konjugatív plazmidok?",
      options: ["Vírussal", "Közvetlen sejt-sejt érintkezéssel (pilus útján)", "Szabad DNS felvételével", "Csak osztódással"],
      correctAnswer: 1,
      explanation: "A konjugáció során a donor és recipiens sejt fizikailag összekapcsolódik."
    },
    {
      id: "mob_2",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Melyik elemre jellemző, hogy géneket gyűjt össze 'kazetták' formájában?",
      options: ["Plazmid", "Integron", "IS elem", "Bakteriofág"],
      correctAnswer: 1,
      explanation: "Az integronok speciális rekombinációs rendszerek, amelyek gőnkazettákat fűznek sorba."
    },
    {
      id: "mob_3",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Mit jelent a 'transzpozíció'?",
      options: ["DNS átírása RNS-re", "Egy DNS szakasz áthelyeződése egyik helyről a másikra", "Baktériumok mozgása ostorral", "Sejtfal felépítése"],
      correctAnswer: 1,
      explanation: "A transzpozíció a transzpozonok (ugráló gének) helyváltoztatása a genomban."
    },
    {
      id: "mob_4",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Melyik mobilis elem hordozza az MRSA-ért felelős mecA gént?",
      options: ["Tn5 transzpozon", "SCCmec kazetta", "1. osztályú integron", "IncP plazmid"],
      correctAnswer: 1,
      explanation: "A mecA gén a Staphylococcal Cassette Chromosome mec (SCCmec) nevű integrált elem része."
    },
    {
      id: "mob_5",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Melyik a legegyszerűbb mobilis genetikai elem, amely gyakran csak egy transzpozázt kódol?",
      options: ["Plazmid", "Inzerciós szekvencia (IS)", "Integron", "ICE"],
      correctAnswer: 1,
      explanation: "Az IS elemek a legkisebb, alapvető ugráló egységek."
    },
    {
      id: "mob_6",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Mi a szerepe a *tra*-géneknek a plazmidokon?",
      options: ["Antibiotikum bontás", "A plazmid átvitelének (konjugáció) irányítása", "DNS javítás", "Toxin termelés"],
      correctAnswer: 1,
      explanation: "A *tra* (transfer) gének kódolják a konjugációhoz szükséges pilust és fehérjéket."
    },
    {
      id: "mob_7",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Melyik állítás igaz az ICE-ekre (Integratív és Konjugatív Elemek)?",
      options: [
        "Csak plazmid formájában léteznek",
        "A kromoszómába épülve élnek, de sejt-sejt kontaktussal átvihetők",
        "Soha nem hordoznak rezisztenciagént",
        "Csak vírusok tudják mozgatni őket"
      ],
      correctAnswer: 1,
      explanation: "Az ICE-ek ötvözik a transzpozonok (integráció) és a plazmidok (konjugáció) tulajdonságait."
    },
    {
      id: "mob_8",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Melyik transzpozon ismert a vankomicin-rezisztencia (*vanA*) terjesztéséről?",
      options: ["Tn3", "Tn1546", "Tn10", "Tn5"],
      correctAnswer: 1,
      explanation: "A Tn1546 komplex transzpozon tette lehetővé a *vanA* gének mobilitását."
    },
    {
      id: "mob_9",
      topic: "Mobilis elemek",
      type: "bool",
      question: "Egyetlen plazmid akár 10-15 különböző rezisztenciagént is hordozhat.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. A multirezisztencia plazmidok komplex 'mozaikok', sok különböző MGE-vel ötvözve."
    },
    {
      id: "mob_10",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Hogyan járulnak hozzá az IS elemek a rezisztencia terjedéséhez?",
      options: [
        "Megölik az érzékeny baktériumokat",
        "Képesek géneket 'kiragadni' a kromoszómából és mobilis elemekre helyezni",
        "Vitaminokat termelnek",
        "Gátolják a sejtosztódást"
      ],
      correctAnswer: 1,
      explanation: "Az IS elemek a gének mobilizálásával (pl. kromoszómáról plazmidra emelésével) segítik a terjedést."
    },
    {
      id: "mob_11",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Mit jelent az 'inkompatibilitási csoport' (Inc group) a plazmidoknál?",
      options: [
        "Két azonos replikációs mechanizmusú plazmid nem tud tartósan megmaradni ugyanabban a sejtben",
        "A plazmid nem bírja a hőt",
        "A plazmid megöli a baktériumot",
        "A plazmid csak egyedül szeret lenni"
      ],
      correctAnswer: 0,
      explanation: "Az azonos Inc-csoportba tartozó plazmidok versengenek a replikációs apparátusért."
    },
    {
      id: "mob_12",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Melyik folyamat során vesz fel a baktérium szabad DNS-t a környezetéből?",
      options: ["Konjugáció", "Transzdukció", "Transzformáció", "Osztódás"],
      correctAnswer: 2,
      explanation: "A transzformáció során a környezetben lévő (pl. szétesett sejtekből származó) DNS-t veszi fel a kompetens baktérium."
    },
    {
      id: "mob_13",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Mi a különbség a transzpozon és az IS elem között?",
      options: [
        "Nincs különbség",
        "Az IS elem csak a mozgáshoz szükséges gént tartalmazza, a transzpozon egyéb géneket (pl. rezisztenciát) is hordoz",
        "A transzpozon kisebb",
        "Az IS elem kör alakú"
      ],
      correctAnswer: 1,
      explanation: "A transzpozonok komplexebb elemek, amelyek 'hasznos' terhet (pl. antibiotikum rezisztenciát) is szállítanak."
    },
    {
      id: "mob_14",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Hogyan történik a transzdukció?",
      options: [
        "Közvetlen érintkezéssel",
        "Bakteriofágok (baktériumvírusok) közvetítésével",
        "DNS szippantással",
        "Sejtosztódással"
      ],
      correctAnswer: 1,
      explanation: "A fágok a fertőzés során véletlenül baktérium-DNS darabokat is becsomagolhatnak és átvihetik a következő sejtbe."
    },
    {
      id: "mob_15",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Mit jelent a 'mobilizálható plazmid'?",
      options: [
        "Saját maga nem tud konjugálni, de egy másik (segítő/helper) plazmid átvitelét kihasználva átjuthat",
        "Mindenhová eljut",
        "Könnyen változik az alakja",
        "Nem létezik ilyen"
      ],
      correctAnswer: 0,
      explanation: "A mobilizálható plazmidoknak van 'oriT' régiójuk, de hiányoznak a 'tra' génjeik."
    },
    {
      id: "mob_16",
      topic: "Mobilis elemek",
      type: "bool",
      question: "A horizontális géntranszfer (HGT) különböző baktériumfajok között is végbemehet.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Ez teszi lehetővé a rezisztencia gyors terjedését a mikrobiális közösségekben."
    },
    {
      id: "mob_17",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Melyik integron-típus a legjelentősebb az antibiotikum-rezisztencia terjesztésében?",
      options: ["1. osztályú integron", "10. osztályú integron", "Növényi integron", "Minden integron egyforma"],
      correctAnswer: 0,
      explanation: "Az 1. osztályú integronok (class 1 integrons) a leggyakoribbak a multirezisztens kórokozókban."
    },
    {
      id: "mob_18",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Mi a szerepe az 'integráz' enzimnek?",
      options: [
        "DNS darabolása",
        "Génkazetták kivágása és beillesztése az integronba",
        "Sejtfal építése",
        "Energia termelés"
      ],
      correctAnswer: 1,
      explanation: "Az integráz (IntI) végzi a specifikus rekombinációt a kazetták befogadásához."
    },
    {
      id: "mob_19",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Mit jelent a 'mozaik-plazmid' kifejezés?",
      options: [
        "Színes plazmid",
        "Sok különböző mobilis elemből (IS, transzpozon, integron) összeállt komplex genetikai egység",
        "Négyzet alakú plazmid",
        "Csak egyetlen gént tartalmaz"
      ],
      correctAnswer: 1,
      explanation: "A mai rezisztencia-plazmidok evolúciójuk során számos különböző elemet gyűjtöttek össze."
    },
    {
      id: "mob_20",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Melyik folyamat igényel 'kompetens' állapotot a baktérium részéről?",
      options: ["Konjugáció", "Transzformáció", "Transzdukció", "Minden folyamat"],
      correctAnswer: 1,
      explanation: "A kompetencia a baktérium azon fiziológiai állapota, amikor képes külső DNS felvételére."
    },
    {
      id: "mob_21",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Milyen szerkezetűek általában a plazmidok?",
      options: ["Lineáris RNS", "Kettős szálú, cirkuláris DNS", "Egyszálú DNS", "Fehérje láncok"],
      correctAnswer: 1,
      explanation: "A plazmidok extra-kromoszomális, kettős szálú, általában kör alakú DNS molekulák."
    },
    {
      id: "mob_22",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Mi a 'pilus' szerepe a konjugációban?",
      options: [
        "A baktérium mozgása",
        "A donor és recipiens sejt fizikai összekapcsolása és a DNS átvitelének segítése",
        "Védelem a vírusok ellen",
        "Tápanyag felvétel"
      ],
      correctAnswer: 1,
      explanation: "A szex-pilus (vagy F-pilus) hidat képez a két baktériumsejt között."
    },
    {
      id: "mob_23",
      topic: "Mobilis elemek",
      type: "bool",
      question: "A transzpozonok 'ugrása' során a genomban maradhat az eredeti példány és az új helyre egy másolat kerül.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Ezt hívják replikatív transzpozíciónak."
    },
    {
      id: "mob_24",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Melyik állítás igaz a SCCmec elemre?",
      options: [
        "Csak E. coliban fordul elő",
        "A Staphylococcusok kromoszómájába épült mobilis genetikai elem",
        "Egyfajta plazmid",
        "Mindig elpusztítja a gazdasejtet"
      ],
      correctAnswer: 1,
      explanation: "A Staphylococcal Cassette Chromosome mec (SCCmec) hordozza az MRSA-ért felelős géneket."
    },
    {
      id: "mob_25",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Mi a HGT (Horizontális Géntranszfer) legfontosabb következménye a gyógyításban?",
      options: [
        "Gyorsabb sebgyógyulás",
        "A rezisztencia villámgyors terjedése a baktériumok között, akár fajok felett is",
        "Több vitamin termelése",
        "Nincs következménye"
      ],
      correctAnswer: 1,
      explanation: "A HGT teszi lehetővé, hogy a rezisztencia ne csak lassan, mutációkkal terjedjen."
    },
    {
      id: "mob_26",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Melyik folyamat során igényel a baktérium sejt-sejt kontaktust?",
      options: ["Konjugáció", "Transzdukció", "Transzformáció", "Osztódás"],
      correctAnswer: 0,
      explanation: "A konjugációhoz fizikai híd (pilus) kell a két baktérium között."
    },
    {
      id: "mob_27",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Mik azok a 'bakteriofágok'?",
      options: [
        "Hasznos baktériumok",
        "Baktériumokat fertőző vírusok",
        "DNS darabok a talajban",
        "Antibiotikum termelő gombák"
      ],
      correctAnswer: 1,
      explanation: "A fágok a transzdukció során DNS-t vihetnek át egyik baktériumból a másikba."
    },
    {
      id: "mob_28",
      topic: "Mobilis elemek",
      type: "bool",
      question: "A plazmidok a gazdasejt osztódásától függetlenül is képesek replikálódni.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Saját replikációs origójuk (ori) van."
    },
    {
      id: "mob_29",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Mit jelent a 'high copy number' plazmid kifejezés?",
      options: [
        "Nagyon nagy méretű plazmid",
        "Egyetlen sejtben sok (akár több száz) példányban jelen lévő plazmid",
        "Sok gént hordozó plazmid",
        "Gyorsan mozgó plazmid"
      ],
      correctAnswer: 1,
      explanation: "Ezek a plazmidok nagy számban vannak jelen, növelve a hordozott gének (pl. rezisztencia) mennyiségét."
    },
    {
      id: "mob_30",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Melyik elem képes a kromoszómába beépülni és onnan kivágódni?",
      options: ["Csak a vírusok", "ICE (Integratív és Konjugatív Elemek)", "Csak a víz", "Semelyik"],
      correctAnswer: 1,
      explanation: "Az ICE-ek ötvözik a transzpozonok és plazmidok előnyös tulajdonságait."
    },
    {
      id: "mob_31",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Mi a 'transzformáció' felfedezésének történelmi jelentősége (Griffith kísérlet)?",
      options: [
        "Ezzel bizonyították, hogy a DNS az örökítőanyag",
        "Ezzel fedezték fel a penicillint",
        "Ezzel találták fel a mikroszkópot",
        "Nincs jelentősége"
      ],
      correctAnswer: 0,
      explanation: "A 'transzformáló elv' (szabad DNS felvétele) vezetett a genetika alapjainak megismeréséhez."
    },
    {
      id: "mob_32",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Mit hordoz az 'R-plazmid'?",
      options: ["Csak RNS-t", "Antibiotikum-rezisztencia géneket", "Csak toxinokat", "Csak a sejt színét"],
      correctAnswer: 1,
      explanation: "Az 'R' a Resistance (rezisztencia) szóra utal."
    },
    {
      id: "mob_33",
      topic: "Mobilis elemek",
      type: "bool",
      question: "Egy baktérium egyszerre több különböző plazmidot is hordozhat.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Ha különböző inkompatibilitási csoportba tartoznak, jól megférnek egymás mellett."
    },
    {
      id: "mob_34",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Mit jelent a 'kompetencia' a mikrobiológiában?",
      options: [
        "A baktérium képessége a DNS felvételére a környezetéből",
        "A baktérium gyorsasága",
        "A baktérium mérete",
        "A baktérium agresszivitása"
      ],
      correctAnswer: 0,
      explanation: "Nem minden baktérium kompetens alaphelyzetben; sokszor stressz hatására válnak azzá."
    },
    {
      id: "mob_35",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Melyik mobilis elemre jellemző a 'cut-and-paste' (kivágás és beillesztés) mechanizmus?",
      options: ["Plazmid", "Nem-replikatív transzpozon", "Integron", "Vírus"],
      correctAnswer: 1,
      explanation: "A transzpozonok egyik típusa ténylegesen átköltözik egyik helyről a másikra."
    },
    {
      id: "mob_36",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Mi a szerepe az integronok 'attI' régiójának?",
      options: [
        "Antibiotikum bontás",
        "Befogadó hely (attachment site) a génkazetták számára",
        "A sejt mozgása",
        "Energia tárolás"
      ],
      correctAnswer: 1,
      explanation: "Itt történik a specifikus rekombináció a kazetták beépülésekor."
    },
    {
      id: "mob_37",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Mit jelent az 'F-plazmid' (fertilitási plazmid)?",
      options: [
        "Fekete plazmid",
        "A konjugációt irányító, pilust kódoló plazmid",
        "Fiatal plazmid",
        "Folyékony plazmid"
      ],
      correctAnswer: 1,
      explanation: "Az F-plazmid hordozza a konjugációhoz szükséges összes információt."
    },
    {
      id: "mob_38",
      topic: "Mobilis elemek",
      type: "bool",
      question: "A transzdukció során a vírus (fág) véletlenül bármilyen baktérium-gént átvihet (általános transzdukció).",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Ha a fágfejbe a vírus-DNS helyett sejt-DNS kerül, bármi átjuthat."
    },
    {
      id: "mob_39",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Melyik integron-alkatrész felelős a gének kifejezéséért (átírásáért)?",
      options: ["Integráz", "Közös promóter (Pc)", "Befogadó hely", "A baktérium fala"],
      correctAnswer: 1,
      explanation: "A kazettáknak gyakran nincs saját promóterük, ezért az integron promóterét használják."
    },
    {
      id: "mob_40",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Mit jelent a 'Hfr' törzs (High Frequency of Recombination)?",
      options: [
        "Gyorsan növő törzs",
        "Olyan baktérium, ahol az F-plazmid beépült a kromoszómába",
        "Veszélyes törzs",
        "Nincs ilyen"
      ],
      correctAnswer: 1,
      explanation: "Ezek a törzsek konjugációkor a saját kromoszómájuk darabjait is átadják."
    },
    {
      id: "mob_41",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Milyen szerepet játszanak az IS elemek a baktérium-evolúcióban?",
      options: [
        "Károsak a sejtnek",
        "Gének inaktiválásával vagy új kombinációk létrehozásával segítik az alkalmazkodást",
        "Csak a DNS-t foglalják",
        "Nincs szerepük"
      ],
      correctAnswer: 1,
      explanation: "Az inzerciós szekvenciák a genom állandó átrendeződését és rugalmasságát biztosítják."
    },
    {
      id: "mob_42",
      topic: "Mobilis elemek",
      type: "bool",
      question: "A rezisztencia-plazmidok elterjedése a kórházi környezetben a szelekciós nyomás eredménye.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Az antibiotikum-használat kedvez a plazmidot hordozó baktériumoknak."
    },
    {
      id: "mob_43",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Mi a különbség a 'vertikális' és 'horizontális' géntranszfer között?",
      options: [
        "A vertikális az utódoknak, a horizontális más (akár idegen) egyedeknek adja át a gént",
        "A vertikális lassabb",
        "A horizontális csak vírusokkal megy",
        "Nincs különbség"
      ],
      correctAnswer: 0,
      explanation: "A horizontális (HGT) a rezisztencia terjedésének kulcsa a mikrobák között."
    },
    {
      id: "mob_44",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Mit kódol a 'tra' régió a plazmidokon?",
      options: ["Toxinokat", "A transzferhez (konjugációhoz) szükséges fehérjéket", "DNS javítást", "Sejtfalat"],
      correctAnswer: 1,
      explanation: "A 'tra' (transfer) gének nélkül a plazmid nem tudna átjutni másik sejtbe."
    },
    {
      id: "mob_45",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Milyen típusú DNS-t vesz fel a baktérium transzformáció során?",
      options: ["Csak vírus-DNS-t", "Szabad, környezetben lévő DNS darabokat", "Csak RNA-t", "Zárt plazmidot"],
      correctAnswer: 1,
      explanation: "A környezetbe kijutott DNS (pl. szétesett sejtekből) forrása lehet az új géneknek."
    },
    {
      id: "mob_46",
      topic: "Mobilis elemek",
      type: "bool",
      question: "A Tn1546 transzpozon segített a vankomicin-rezisztencia elterjedésében az Enterococcusok között.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Ez a komplex elem tette mobilissá a vanA géncsoportot."
    },
    {
      id: "mob_47",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Mi a 'génkazetta' az integronok összefüggésében?",
      options: [
        "Egy kis rádió",
        "Egyetlen gént (pl. rezisztenciát) és egy rekombinációs helyet (attC) tartalmazó egység",
        "A baktérium raktára",
        "DNS spirál"
      ],
      correctAnswer: 1,
      explanation: "A kazetták modulárisan cserélhetők és gyűjthetők az integronokban."
    },
    {
      id: "mob_48",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Mit jelent a 'plasmid curing' kifejezés?",
      options: [
        "A plazmid meggyógyítja a sejtet",
        "A plazmid elvesztése a sejtből (pl. stressz vagy kezelés hatására)",
        "Plazmid injekció",
        "DNS másolás"
      ],
      correctAnswer: 1,
      explanation: "Szelekciós nyomás nélkül a baktériumok gyakran 'eldobják' a felesleges plazmidokat az energiatakarékosság jegyében."
    },
    {
      id: "mob_49",
      topic: "Mobilis elemek",
      type: "mcq",
      question: "Melyik szervben történik a legtöbb HGT a sertésben?",
      options: ["Tüdő", "Bélcsatorna (nagy baktériumsűrűség)", "Máj", "Izom"],
      correctAnswer: 1,
      explanation: "A bélflóra sűrűsége és változatossága ideális terep a gének cseréjéhez."
    },
    {
      id: "mob_50",
      topic: "Mobilis elemek",
      type: "bool",
      question: "A rezisztenciagének mobilizálása (kromoszómáról plazmidra kerülése) gyakran IS elemek segítségével történik.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Az IS elemek képesek 'kiszakítani' a szomszédos géneket és elindítani őket a horizontális úton."
    }
  ]
};
