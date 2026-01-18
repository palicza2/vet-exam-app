export const mycoplasmaData = {
  id: "mycoplasma",
  title: "14. Mycoplasma hyorhinis és M. hyosynoviae",
  studyMaterial: [
    {
      "title": "1. Kóroktan és Általános Jellemzők",
      "icon": "microscope",
      "color": "bg-blue-50 border-blue-200",
      "iconColor": "text-blue-600",
      "sections": [
        {
          "header": "1.1. A Mycoplasma nemzetség",
          "points": [
            "A legkisebb önállóan szaporodni képes prokarióták (Mollicutes osztály)",
            "**Nincs sejtfaluk:** Csak háromrétegű membrán határolja őket",
            "**Terápiás következmény:** Természetes rezisztencia a béta-laktámok (penicillinek, cefalosporinok) ellen"
          ]
        },
        {
          "header": "1.2. Diagnosztika",
          "points": [
            "Tenyésztésük lassan nő, speciális táptalajt igényel",
            "A diagnosztika elsősorban a **PCR** technikákra támaszkodik"
          ]
        }
      ]
    },
    {
      "title": "2. Mycoplasma hyorhinis (Polyserositis)",
      "icon": "activity",
      "color": "bg-purple-50 border-purple-200",
      "iconColor": "text-purple-600",
      "sections": [
        {
          "header": "2.1. Járványtan és Kórfejlődés",
          "points": [
            "Érintett korosztály: **3-10 hetes** választott malacok és növendékek",
            "Bakterémia útján jut el a savóshártyákra és ízületekbe",
            "Hajlamosító: stressz, PRRS, PCV2, Influenza"
          ]
        },
        {
          "header": "2.2. Tünetek és Kórbonctan",
          "points": [
            "**Fibrines-savós polyserositis:** Mellhártya, szívburok (megvastagodhat), hashártya gyulladás",
            "Sántaság, duzzadt ízületek, púposított hát a fájdalom miatt",
            "A szív felszínén fibrines lepedék látható"
          ]
        }
      ]
    },
    {
      "title": "3. Mycoplasma hyosynoviae (Arthritis)",
      "icon": "alert-circle",
      "color": "bg-amber-50 border-amber-200",
      "iconColor": "text-amber-600",
      "sections": [
        {
          "header": "3.1. Járványtan",
          "points": [
            "Érintett korosztály: **10-24 hetes** malacok (hízók)",
            "A baktérium a **tonsillákban** perzisztál akár élethossziglan",
            "Terjedés: cseppfertőzéssel a hordozóktól (kocák, hízók)"
          ]
        },
        {
          "header": "3.2. Tünetek és Kórbonctan",
          "points": [
            "Hirtelen fellépő, **vándorló sántaság**; morbiditás akár 50%",
            "**'Kutyaszerű ülés'**: az állatok nehezen állnak fel a végtagfájdalom miatt",
            "Boncolás: **CSAK ízületi elváltozások** (nincs polyserositis!), szalmasárga ízületi nedv"
          ]
        }
      ]
    },
    {
      "title": "4. Kezelés és Megelőzés",
      "icon": "syringe",
      "color": "bg-green-50 border-green-200",
      "iconColor": "text-green-600",
      "sections": [
        {
          "header": "4.1. Gyógykezelés",
          "points": [
            "**Pleuromutilinek (Tiamulin, Valnemulin):** Kiemelkedően hatékonyak, jól penetrálnak",
            "**Doxiciklin:** Lipofil, jól jut az ízületekbe és savóshártyákra",
            "**NSAID** (pl. Meloxicam): Elengedhetetlen a fájdalomcsillapításra a felálláshoz"
          ]
        },
        {
          "header": "4.2. Megelőzés",
          "points": [
            "Nincs kereskedelmi vakcina; autogén vakcinák hatékonysága változó",
            "All-in/All-out tartás, higiénia (mészelés csökkenti a túlélést)",
            "Szűrt, zárt populáció fenntartása (biosecurity)"
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "myco_1",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      type: "mcq",
      question: "Miért rezisztensek a mikoplazmák a béta-laktám antibiotikumokra?",
      options: ["Mert túl kicsik", "Mert nincs sejtfalluk", "Mert túl gyorsan mozognak", "Mert savas a környezetük"],
      correctAnswer: 1,
      explanation: "A penicillinek a sejtfalszintézist gátolják, de mivel a mikoplazmáknak nincs sejtfalluk, ezek a szerek hatástalanok."
    },
    {
      id: "myco_2",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      type: "mcq",
      question: "Melyik korosztályt érinti leginkább a Mycoplasma hyorhinis?",
      options: ["Szopós malacok", "Választott malacok (3-10 hetes)", "Öreg kanok", "Soha nem betegít meg malacot"],
      correctAnswer: 1,
      explanation: "A M. hyorhinis tipikusan a választás utáni, battériás korban okoz polyserositist."
    },
    {
      id: "myco_3",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      type: "mcq",
      question: "Milyen kórbonctani elváltozás jellemző a M. hyorhinis fertőzésre?",
      options: ["Fibrines-savós polyserositis", "Vastagbélgyulladás", "Májzsugor", "Agydaganat"],
      correctAnswer: 0,
      explanation: "A M. hyorhinis a savóshártyák (mell-, szív-, hashártya) fibrines gyulladását okozza."
    },
    {
      id: "myco_4",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      type: "mcq",
      question: "Hol perzisztál a Mycoplasma hyosynoviae az állatokban?",
      options: ["A májban", "A tonsillákban (mandulákban)", "A patában", "A szemben"],
      correctAnswer: 1,
      explanation: "A M. hyosynoviae a tonsillákban telepszik meg és akár élethossziglan ott maradhat."
    },
    {
      id: "myco_5",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      type: "mcq",
      question: "Mi a jellemző tünete a M. hyosynoviae fertőzésnek hízókban?",
      options: ["Hirtelen fellépő, vándorló sántaság", "Csak köhögés", "Hasmenés", "Vakság"],
      correctAnswer: 0,
      explanation: "A M. hyosynoviae ízületi gyulladást okoz, ami gyakran vándorló sántaságként jelentkezik."
    },
    {
      id: "myco_6",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      type: "mcq",
      question: "Milyen az ízületi nedv M. hyosynoviae fertőzés esetén?",
      options: ["Gennyes", "Véres", "Szalmasárga, tiszta vagy enyhén zavaros", "Nincs ízületi nedv"],
      correctAnswer: 2,
      explanation: "A M. hyosynoviae általában nem okoz fibrines vagy gennyes gyulladást, csak savósat."
    },
    {
      id: "myco_7",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      type: "mcq",
      question: "Melyik antibiotikum kiemelkedően hatékony a mikoplazmák ellen?",
      options: ["Penicillin", "Tiamulin", "Amoxicillin", "Ceftiofur"],
      correctAnswer: 1,
      explanation: "A Tiamulin (pleuromutilin) az egyik leghatékonyabb szer a mikoplazmák ellen."
    },
    {
      id: "myco_8",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      type: "mcq",
      question: "Miért fontos az NSAID-ok használata a kezelés során?",
      options: ["Hogy jobb legyen a hús íze", "A fájdalomcsillapítás és gyulladáscsökkentés miatt, hogy az állat felálljon és egyen/igyon", "Mert megöli a baktériumot", "Nem fontos"],
      correctAnswer: 1,
      explanation: "A sánta állat a fájdalom miatt nem kel fel, így kiszáradhat és éhen halhat; az NSAID segít ezen."
    },
    {
      id: "myco_9",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      type: "mcq",
      question: "Melyik diagnosztikai módszer a legmegbízhatóbb a fajazonosításra?",
      options: ["Szemrevételezés", "PCR", "Gram-festés", "Röntgen"],
      correctAnswer: 1,
      explanation: "A PCR gyors és pontos módszer a különböző Mycoplasma fajok elkülönítésére."
    },
    {
      id: "myco_10",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      type: "mcq",
      question: "Van-e kereskedelmi vakcina a M. hyorhinis/hyosynoviae ellen?",
      options: ["Igen, minden gyógyszertárban van", "Jelenleg nincs, csak autogén vakcinák léteznek", "Csak kutyáknak van", "Felesleges a vakcina"],
      correctAnswer: 1,
      explanation: "Ezek ellen a fajok ellen jelenleg nincsenek széles körben elérhető kereskedelmi vakcinák."
    },
    {
      id: "myco_11",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      type: "mcq",
      question: "Mit okoz a M. hyorhinis a szívburokban?",
      options: ["Semmit", "Fibrines pericarditist (szívburok-gyulladást)", "Daganatot", "Vérzést"],
      correctAnswer: 1,
      explanation: "A M. hyorhinis polyserositise érinti a szívburkot is, fibrines felrakódásokat okozva."
    },
    {
      id: "myco_12",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      type: "mcq",
      question: "Hogyan terjed a M. hyorhinis a szervezeten belül?",
      options: ["Bakterémia (véráram) útján", "Az idegek mentén", "Csak közvetlen érintkezéssel a bőrön", "Nem terjed"],
      correctAnswer: 0,
      explanation: "A baktérium a légutakból a véráramba jut, és így jut el a távoli szervekhez."
    },
    {
      id: "myco_13",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      type: "mcq",
      question: "Melyik állítás igaz a M. hyosynoviae kórbonctanára?",
      options: ["Mindig van mellhártyagyulladás", "Nincs polyserositis, csak ízületi gyulladás", "A máj mindig érintett", "Soha nem boncolunk"],
      correctAnswer: 1,
      explanation: "A M. hyosynoviae - ellentétben a M. hyorhinis-szel - csak az ízületeket betegíti meg."
    },
    {
      id: "myco_14",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      type: "mcq",
      question: "Melyik minta a legalkalmasabb diagnózishoz?",
      options: ["Vizelet", "Ízületi punktátum (synovia) vagy fibrin a savóshártyákról", "Szőr", "Bélsár"],
      correctAnswer: 1,
      explanation: "Közvetlenül az elváltozás helyéről (ízületből vagy savóshártyáról) vett minta a legjobb."
    },
    {
      id: "myco_15",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      type: "mcq",
      question: "Melyik antibiotikum lipofil és penetrál jól az ízületekbe?",
      options: ["Penicillin", "Doxiciklin", "Csak a víz", "Vitamin C"],
      correctAnswer: 1,
      explanation: "A doxiciklin lipofil (zsíroldékony) tulajdonsága segíti a bejutást a nehezen elérhető helyekre."
    },
    {
      id: "myco_16",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      type: "mcq",
      question: "Mi jellemző a sánta állat testtartására M. hyorhinis esetén?",
      options: ["Púposított hát a fájdalom miatt", "Fekve alszik", "Magasra tartott fej", "Nincs változás"],
      correctAnswer: 0,
      explanation: "A polyserositis és az ízületi fájdalom miatt az állatok gyakran púposítják a hátukat."
    },
    {
      id: "myco_17",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      type: "mcq",
      question: "Mikor alakul ki a M. hyosynoviae fertőzés manifesztációja?",
      options: ["A születés napján", "Amikor az anyai immunitás (kb. 10-12 hetes korban) csökken", "Csak öreg korban", "Soha"],
      correctAnswer: 1,
      explanation: "Az anyai ellenanyagok sokáig védik a malacokat, így a tünetek csak hízókorban jelentkeznek."
    },
    {
      id: "myco_18",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      type: "mcq",
      question: "Hogyan hat a mészelés a mikoplazmákra?",
      options: ["Segíti a növekedésüket", "Csökkenti a túlélőképességüket a környezetben", "Semleges", "Szépek lesznek tőle"],
      correctAnswer: 1,
      explanation: "A lúgos környezet (mész) gátolja a mikoplazmák életben maradását."
    },
    {
      id: "myco_19",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      type: "mcq",
      question: "Mi a 'szalmasárga' jelző jelentősége?",
      options: ["A malac színe", "Az ízületi folyadék színe M. hyosynoviae esetén", "A takarmány színe", "Nincs jelentősége"],
      correctAnswer: 1,
      explanation: "A savós gyulladásra jellemző tiszta, sárgás folyadék az ízületben."
    },
    {
      id: "myco_20",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      type: "mcq",
      question: "Mi az összefoglalás lényege ezeknél a mikoplazmáknál?",
      options: ["Csak tüdőgyulladást okoznak", "Sántasággal és savóshártya-gyulladással járó kórképek, ahol a béta-laktámok hatástalanok", "Mindig gyógyulnak maguktól", "Nem fertőzőek"],
      correctAnswer: 1,
      explanation: "A sántaság és a polyserositis gazdasági kárt okoz, a kezelésnél pedig figyelembe kell venni az antibiotikum rezisztenciát."
    }
  ]
};
