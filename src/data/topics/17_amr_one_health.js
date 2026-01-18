export const amrOneHealthData = {
  id: "amr_one_health",
  title: "17. AMR és One Health",
  studyMaterial: [
    {
      "title": "1. AMR és One Health alapok",
      "icon": "globe",
      "color": "bg-emerald-50 border-emerald-200",
      "iconColor": "text-emerald-600",
      "sections": [
        {
          "header": "1.1. Mi az AMR?",
          "points": [
            "**Antimikrobiális rezisztencia (AMR):** Amikor a baktériumok ellenállóvá válnak a gyógyításukra használt szerekkel szemben",
            "Szerzett rezisztencia: spontán mutáció vagy horizontális géntranszfer (konjugáció, transzformáció, transzdukció) útján",
            "Mechanizmusok: antibiotikum lebontása enzimekkel, támadáspont módosítása, efflux pumpák (kiválasztás a sejtből)"
          ]
        },
        {
          "header": "1.2. One Health (Egy Egészség) szemlélet",
          "points": [
            "Lényege: az emberi, állati és környezeti egészség összefügg",
            "A rezisztencia 'visszaáramlik' a szektorok között, ezért csak egységesen kezelhető",
            "Résztvevők: orvosok, állatorvosok, környezetvédők, mezőgazdasági szakemberek"
          ]
        }
      ]
    },
    {
      "title": "2. Terjedési útvonalak és Kockázatok",
      "icon": "share-2",
      "color": "bg-blue-50 border-blue-200",
      "iconColor": "text-blue-600",
      "sections": [
        {
          "header": "2.1. Terjedési útvonalak",
          "points": [
            "**Közvetlen kontaktus:** Telepi dolgozók, állatorvosok (pl. LA-MRSA hordozás)",
            "**Élelmiszerlánc:** Nyers hús szennyeződése, nem megfelelő hőkezelés vagy konyhatechnológia",
            "**Környezet:** Trágya útján a talajba és vizekbe jutó antibiotikum-maradványok és rezisztens gének"
          ]
        },
        {
          "header": "2.2. Kiemelt kórokozók",
          "points": [
            "**LA-MRSA:** Sertéshez köthető meticillin-rezisztens Staphylococcus aureus",
            "**ESBL-termelő E. coli:** Széles spektrumú béta-laktamáz termelő baktériumok (bontják a cefalosporinokat)"
          ]
        }
      ]
    },
    {
      "title": "3. Szabályozás (EU és Magyarország)",
      "icon": "gavel",
      "color": "bg-slate-50 border-slate-200",
      "iconColor": "text-slate-500",
      "sections": [
        {
          "header": "3.1. Az (EU) 2019/6 rendelet",
          "points": [
            "**Profilaxis (megelőzés) TILOS:** antibiotikumot rutinszerűen megelőzésre használni tilos",
            "Metafilaxis: csak indokolt esetben, diagnózishoz kötve alkalmazható",
            "A cink-oxid terápiás használatának betiltása (ko-szelekciós kockázat az MRSA-val)"
          ]
        },
        {
          "header": "3.2. Hazai implementáció",
          "points": [
            "**Csökkentési terv:** A nagy sertéstelepeknek kötelező éves tervet készíteniük",
            "**E-veny és FELIR:** Az antibiotikum-felhasználás valós idejű hatósági (Nébih) monitorozása",
            "Hatósági engedély: Csak speciális képzést végzett állatorvos írhat fel antibiotikumot haszonállatnak"
          ]
        }
      ]
    },
    {
      "title": "4. AMEG kategóriák (EMA)",
      "icon": "list",
      "color": "bg-amber-50 border-amber-200",
      "iconColor": "text-amber-600",
      "sections": [
        {
          "header": "Kategóriák és példák",
          "points": [
            "**'A' (Avoid):** TILOS (pl. Karbapenemek, Glikopeptidek)",
            "**'B' (Restrict):** Korlátozott, humán kritikus szerek (pl. 3-4. gen. Cefalosporinok, Fluorokinolonok, Kolisztin)",
            "**'C' (Caution):** Óvatosan (pl. Makrolidok, Pleuromutilinek, Florfenikol)",
            "**'D' (Prudence):** Elsődlegesen választandó (pl. Penicillinek, Tetraciklinek, Szulfonamidok)"
          ]
        }
      ]
    },
    {
      "title": "5. Diagnosztika és Alternatívák",
      "icon": "shield-check",
      "color": "bg-purple-50 border-purple-200",
      "iconColor": "text-purple-600",
      "sections": [
        {
          "header": "5.1. Döntési fa",
          "points": [
            "Mindig a D kategóriával kell kezdeni, ha lehetséges",
            "B szert csak AST (érzékenységi vizsgálat) után, ha nincs más megoldás",
            "PK/PD elvek: idő-függő (Penicillinek) vs. koncentráció-függő (Fluorokinolonok) szerek"
          ]
        },
        {
          "header": "5.2. Alternatívák",
          "points": [
            "**Vakcinázás:** A leghatékonyabb antibiotikum-csökkentő eszköz",
            "**Szerves savak:** Csökkentik a pH-t, gátolják a patogéneket (pl. E. coli)",
            "Probiotikumok, prebiotikumok és jobb biológiai biztonság"
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "amr_1",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Mit jelent a One Health (Egy Egészség) szemlélet lényege?",
      options: [
        "Minden állatnak ugyanazt a gyógyszert kell adni",
        "Az emberi, állati és környezeti egészség szorosan összefügg és csak együtt kezelhető",
        "Csak az állatorvosok foglalkoznak a rezisztenciával",
        "Egy telepnek egy orvosa legyen"
      ],
      correctAnswer: 1,
      explanation: "Az AMR terjedése az emberek, állatok és a környezet között zajlik, így a megoldás is globális együttműködést igényel."
    },
    {
      id: "amr_2",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Melyik AMEG kategóriába tartoznak a haszonállatoknál TILOSAN alkalmazható szerek (pl. Karbapenemek)?",
      options: ["A kategória", "B kategória", "C kategória", "D kategória"],
      correctAnswer: 0,
      explanation: "Az 'A' kategóriás (Avoid) szerek állatgyógyászati felhasználása az EU-ban tilos a humán egészségügyi kockázat miatt."
    },
    {
      id: "amr_3",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Melyik szer került át a 'B' (korlátozott) kategóriába a plazmidon terjedő mcr-1 gén miatt?",
      options: ["Amoxicillin", "Kolisztin", "Doxiciklin", "Tiamulin"],
      correctAnswer: 1,
      explanation: "A kolisztin-rezisztencia terjedése miatt a szer használatát szigorúan korlátozták az állatgyógyászatban."
    },
    {
      id: "amr_4",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Mi az (EU) 2019/6 rendelet legfontosabb korlátozása az antibiotikum-használatban?",
      options: [
        "Mindent ingyen kell adni",
        "Az antibiotikumok rutinszerű, megelőző célú (profilaktikus) alkalmazása TILOS",
        "Bármikor lehet antibiotikumot adni, ha tetszik",
        "Csak a hízók kaphatnak gyógyszert"
      ],
      correctAnswer: 1,
      explanation: "A rendelet értelmében az antibiotikumok nem használhatók a tartási körülmények hiányosságainak kompenzálására megelőzésképpen."
    },
    {
      id: "amr_5",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Melyik hatóság felelős Magyarországon az antibiotikum-használat ellenőrzéséért?",
      options: ["MÁV", "Nébih", "NAV", "Katasztrófavédelem"],
      correctAnswer: 1,
      explanation: "A Nébih felügyeli az e-vényeket és a telepi csökkentési terveket."
    },
    {
      id: "amr_6",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Mit jelent a metafilaxis fogalma?",
      options: [
        "Egyedi állat megelőző kezelése",
        "Egy csoport kezelése a betegség terjedésének megállítására, ha már van beteg állat a csoportban",
        "Takarmány-adalékanyag",
        "Vakcinázási program"
      ],
      correctAnswer: 1,
      explanation: "Metafilaxisnál a csoport többi (még tünetmentes, de fertőzött) tagját kezeljük a betegség kitörésének megakadályozására."
    },
    {
      id: "amr_7",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Melyik rezisztens kórokozó terjedése köthető szorosan a sertéstartáshoz (Livestock-Associated)?",
      options: ["Veszettség", "LA-MRSA (Meticillin-rezisztens Staphylococcus aureus)", "Influenza", "TBC"],
      correctAnswer: 1,
      explanation: "A LA-MRSA hordozása gyakori a sertésekben és a velük érintkező dolgozókban."
    },
    {
      id: "amr_8",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Miért tiltották be a cink-oxid terápiás alkalmazását malacokban?",
      options: [
        "Mert túl drága",
        "A ko-szelekció veszélye miatt (a cink-rezisztencia gyakran együtt öröklődik az MRSA-rezisztenciával)",
        "Mert nem hatékony",
        "Mert mérgezi a malacokat"
      ],
      correctAnswer: 1,
      explanation: "A cink használata közvetve fenntarthatja az antibiotikum-rezisztens baktériumok jelenlétét az állományban."
    },
    {
      id: "amr_9",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Mit jelent az 'ESBL' kifejezés?",
      options: [
        "Egy új vakcina",
        "Széles spektrumú béta-laktamáz (enzim, ami elbontja a penicillineket és cefalosporinokat)",
        "Egy baktériumfaj",
        "Hatósági engedély"
      ],
      correctAnswer: 1,
      explanation: "Az ESBL-termelő baktériumok (főleg E. coli) súlyos közegészségügyi kockázatot jelentenek."
    },
    {
      id: "amr_10",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Melyik AMEG kategóriába tartoznak az 'elsőként választandó' szerek (pl. amoxicillin)?",
      options: ["A kategória", "B kategória", "C kategória", "D kategória"],
      correctAnswer: 3,
      explanation: "A 'D' kategóriás (Prudence) szerek a legkevésbé kritikusak, ezeket kell előnyben részesíteni a terápiában."
    },
    {
      id: "amr_11",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Mit jelent az AST (Antimicrobial Susceptibility Testing)?",
      options: [
        "Bakteriológiai érzékenységi vizsgálat",
        "Súly mérés",
        "Hőmérséklet ellenőrzés",
        "Takarmány-analízis"
      ],
      correctAnswer: 0,
      explanation: "Az AST során laboratóriumban határozzák meg, hogy melyik antibiotikum öli meg a baktériumot."
    },
    {
      id: "amr_12",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Mi a MIC (Minimális Gátló Koncentráció) jelentősége?",
      options: [
        "A legdrágább antibiotikum ára",
        "A legkisebb hatóanyag-koncentráció, amely még gátolja a baktérium szaporodását",
        "A legnagyobb adható dózis",
        "A baktérium mérete"
      ],
      correctAnswer: 1,
      explanation: "A MIC érték alapvető a PK/PD számításokhoz és a gyógyszerválasztáshoz."
    },
    {
      id: "amr_13",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Melyik antibiotikum-csoportnál kritikus az idő-függő hatás (T>MIC)?",
      options: ["Fluorokinolonok", "Penicillinek és Cefalosporinok", "Aminoglikozidok", "Ionofórok"],
      correctAnswer: 1,
      explanation: "A béta-laktámoknál fontos, hogy a szintjük minél hosszabb ideig a MIC felett maradjon a vérben."
    },
    {
      id: "amr_14",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Melyik az antibiotikumok legfontosabb alternatívája a megelőzésben?",
      options: ["Több só a vízben", "Vakcinázás", "Kevesebb alvás", "Zenehallgatás"],
      correctAnswer: 1,
      explanation: "A vakcinázás közvetlenül csökkenti a betegségek számát, így a gyógyszerigényt is."
    },
    {
      id: "amr_15",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Hogyan segítenek a szerves savak az antibiotikum-csökkentésben?",
      options: [
        "Csökkentik a pH-t a gyomorban, segítve az emésztést és gátolva a kóros baktériumok (pl. E. coli) szaporodását",
        "Vitaminokat pótolnak",
        "Gyorsítják az ürítést",
        "Nem segítenek"
      ],
      correctAnswer: 0,
      explanation: "Az acidifikálók kedvezőtlen környezetet teremtenek a patogén baktériumok számára."
    },
    {
      id: "amr_16",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Mi a horizontális géntranszfer három fő módja?",
      options: [
        "Evés, ivás, alvás",
        "Konjugáció, transzdukció, transzformáció",
        "Ikerellés, vetélés, fialás",
        "Nincs ilyen"
      ],
      correctAnswer: 1,
      explanation: "Ezekkel a mechanizmusokkal adják át egymásnak a baktériumok a rezisztenciagénjeiket."
    },
    {
      id: "amr_17",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Milyen következménye van az antibiotikum-maradványok környezetbe jutásának?",
      options: [
        "Semmilyen",
        "Szelekciós nyomást gyakorolnak a talaj- és vízi baktériumokra, segítve a rezisztencia fennmaradását",
        "Javítják a talaj termőképességét",
        "Eltűnnek 1 óra alatt"
      ],
      correctAnswer: 1,
      explanation: "A környezeti szennyezés 'rezervoárként' funkcionál az AMR számára."
    },
    {
      id: "amr_18",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Mit jelent a 'csökkentési terv' a sertéstelepeken?",
      options: [
        "A kerítés alacsonyabb lesz",
        "Dokumentum, amelyben a telep éves célokat tűz ki az antibiotikum-felhasználás mérséklésére",
        "A malacok számának csökkentése",
        "A munkabérek csökkentése"
      ],
      correctAnswer: 1,
      explanation: "Ez egy kötelező szakmai terv Magyarországon a nagy létszámú telepek számára."
    },
    {
      id: "amr_19",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Melyik csoport preferált az antibiotikum adagolásánál a One Health szerint?",
      options: ["Csoportos kezelés (itatás)", "Egyedi injekciós kezelés", "Takarmányba keverés", "Nincs preferencia"],
      correctAnswer: 1,
      explanation: "Az egyedi kezelés célzottabb, pontosabb dózist ad és csökkenti a felesleges szelekciós nyomást az egészséges állatokon."
    },
    {
      id: "amr_20",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Mi az összefoglalás lényege az AMR és One Health témakörben?",
      options: [
        "Csak a gyógyszergyárak profitja a fontos",
        "Az AMR globális veszély, amely ellen felelős antibiotikum-használattal, vakcinázással és interszektoriális összefogással kell küzdeni",
        "Mindenki szedjen antibiotikumot",
        "Nem kell törődni vele"
      ],
      correctAnswer: 1,
      explanation: "A jövő záloga a tudatos, diagnosztika-alapú állatgyógyászat és a megelőzés."
    }
  ]
};
