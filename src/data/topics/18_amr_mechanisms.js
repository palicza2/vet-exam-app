export const amrMechanismsData = {
  id: "amr_mechanisms",
  title: "18. Az AMR molekuláris mechanizmusai",
  studyMaterial: [
    {
      "title": "1. Evolúciós alapok és HGT",
      "icon": "dna",
      "color": "bg-indigo-50 border-indigo-200",
      "iconColor": "text-indigo-600",
      "sections": [
        {
          "header": "1.1. Horizontális géntranszfer (HGT)",
          "points": [
            "**Konjugáció:** Plazmid átadás piluson keresztül (pl. E. coli bélflórában)",
            "**Transzformáció:** Szabad DNS felvétele a környezetből (pl. Streptococcusok)",
            "**Transzdukció:** Bakteriofágok (vírusok) általi génátvitel (pl. S. aureus)"
          ]
        },
        {
          "header": "1.2. Mobilis genetikai elemek (MGE)",
          "points": [
            "**Plazmidok:** Kromoszómán kívüli, önállóan replikálódó DNS-körök",
            "**Integronok:** Gének befogására és kifejezésére szolgáló platformok",
            "**Transzpozonok:** 'Ugráló gének', amik helyet változtatnak a genomon belül"
          ]
        }
      ]
    },
    {
      "title": "2. Rezisztencia mechanizmusok",
      "icon": "shield",
      "color": "bg-red-50 border-red-200",
      "iconColor": "text-red-600",
      "sections": [
        {
          "header": "2.1. Enzimatikus inaktiválás",
          "points": [
            "**Béta-laktamázok:** Elhasítják az antibiotikum gyűrűjét (pl. ESBL, karbapenemázok)",
            "**Modifikáló enzimek:** Kémiai módosítás (acetilálás, foszforilálás) pl. aminoglikozidoknál",
            "**CAT:** Klóramfenikol-acetiltranszferáz"
          ]
        },
        {
          "header": "2.2. Célmolekula módosítás és Efflux",
          "points": [
            "**Mutáció:** Megváltozott kötőhely (pl. DNS-giráz mutáció kinolon-rezisztenciánál)",
            "**Metiláció:** Riboszóma módosítása (erm gének -> makrolid rezisztencia)",
            "**Efflux pumpák:** Aktív kiszivattyúzás a sejtből (pl. AcrAB-TolC rendszer)"
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "mol_1",
      topic: "Molekuláris mechanizmusok",
      type: "mcq",
      question: "Melyik mechanizmus során történik DNS-átadás piluson keresztül két baktérium között?",
      options: ["Transzformáció", "Konjugáció", "Transzdukció", "Mutáció"],
      correctAnswer: 1,
      explanation: "A konjugációhoz közvetlen sejt-sejt kontaktus és egy pilus szükséges a plazmid átadásához."
    },
    {
      id: "mol_2",
      topic: "Molekuláris mechanizmusok",
      type: "mcq",
      question: "Mit jelent a transzformáció a baktériumoknál?",
      options: [
        "Változás pillangóvá",
        "Szabad DNS felvétele a környezetből",
        "Vírusos fertőzés",
        "Sejtosztódás"
      ],
      correctAnswer: 1,
      explanation: "Néhány baktérium képes a környezetében lévő szabad DNS-darabokat felvenni és beépíteni a saját genomjába."
    },
    {
      id: "mol_3",
      topic: "Molekuláris mechanizmusok",
      type: "mcq",
      question: "Mik azok a bakteriofágok?",
      options: ["Baktériumokat evő állatok", "Baktériumokat megfertőző vírusok", "Óriás baktériumok", "Gombák"],
      correctAnswer: 1,
      explanation: "A bakteriofágok vírusok, amelyek a transzdukció során géneket vihetnek át egyik baktériumból a másikba."
    },
    {
      id: "mol_4",
      topic: "Molekuláris mechanizmusok",
      type: "mcq",
      question: "Melyik molekuláris elem nevezhető 'génbefogó platformnak'?",
      options: ["Plazmid", "Integron", "Flagellum", "Riboszóma"],
      correctAnswer: 1,
      explanation: "Az integronok képesek génkazettákat befogni és kifejezni, gyakran multirezisztenciát okozva."
    },
    {
      id: "mol_5",
      topic: "Molekuláris mechanizmusok",
      type: "mcq",
      question: "Mit csinálnak a béta-laktamáz enzimek?",
      options: [
        "Segítik az antibiotikum bejutását",
        "Elhasítják az antibiotikum béta-laktám gyűrűjét, inaktiválva azt",
        "DNS-t másolnak",
        "Energiát termelnek"
      ],
      correctAnswer: 1,
      explanation: "A gyűrű elhasításával az antibiotikum (pl. penicillin) elveszíti hatását."
    },
    {
      id: "mol_6",
      topic: "Molekuláris mechanizmusok",
      type: "mcq",
      question: "Melyik rezisztencia-mechanizmus jellemző a fluorokinolonokra?",
      options: [
        "Enzimatikus lebontás",
        "A célmolekula (DNS-giráz) mutációja",
        "Csak a sejtfal megvastagodása",
        "Nincs rezisztencia"
      ],
      correctAnswer: 1,
      explanation: "A fluorokinolon-rezisztencia leggyakrabban a DNS-giráz vagy a topoizomeráz IV enzim pontmutációi miatt alakul ki."
    },
    {
      id: "mol_7",
      topic: "Molekuláris mechanizmusok",
      type: "mcq",
      question: "Mik azok az efflux pumpák?",
      options: [
        "Vízpumpák az istállóban",
        "Membránfehérjék, amik aktívan kiszivattyúzzák az antibiotikumot a sejtből",
        "Baktériumok mozgásszervei",
        "Az immunrendszer részei"
      ],
      correctAnswer: 1,
      explanation: "Az efflux pumpák csökkentik az antibiotikum belső koncentrációját, így az nem éri el a hatásos szintet."
    },
    {
      id: "mol_8",
      topic: "Molekuláris mechanizmusok",
      type: "mcq",
      question: "Mit jelent a 'rezisztom' fogalma?",
      options: [
        "Egy új gyógyszer",
        "A környezetben jelen lévő összes rezisztenciagén összessége",
        "A baktériumok gyomra",
        "Ellenállási mozgalom"
      ],
      correctAnswer: 1,
      explanation: "A környezeti baktériumok (pl. talajban) hatalmas tárházai a rezisztenciagéneknek."
    },
    {
      id: "mol_9",
      topic: "Molekuláris mechanizmusok",
      type: "mcq",
      question: "Melyik rezisztencia típus jellemző a Mycoplasmákra a penicillinekkel szemben?",
      options: ["Szerzett", "Veleszületett (intrinsic)", "Nincs rezisztencia", "Csak mutációval alakul ki"],
      correctAnswer: 1,
      explanation: "Mivel a mikoplazmáknak soha nincs sejtfalluk, veleszületett módon rezisztensek a sejtfalszintézis-gátlókra."
    },
    {
      id: "mol_10",
      topic: "Molekuláris mechanizmusok",
      type: "mcq",
      question: "Mit kódol az MRSA-ban jelen lévő mecA gén?",
      options: [
        "Egy mérget",
        "Egy új, módosult penicillin-kötő fehérjét (PBP2a), amihez nem kötődik a béta-laktám",
        "Egy efflux pumpát",
        "Tokot"
      ],
      correctAnswer: 1,
      explanation: "A módosult célmolekula lehetővé teszi a sejtfalépítést az antibiotikum jelenlétében is."
    },
    {
      id: "mol_11",
      topic: "Molekuláris mechanizmusok",
      type: "mcq",
      question: "Melyik molekuláris mechanizmus felelős az aminoglikozid rezisztenciáért leggyakrabban?",
      options: [
        "A riboszóma elpusztítása",
        "Modifikáló enzimek (acetilálás, foszforilálás, adenilálás)",
        "A sejt felrobbanása",
        "Cukorbontás"
      ],
      correctAnswer: 1,
      explanation: "Az aminoglikozid-modifikáló enzimek (AME) kémiailag megváltoztatják a molekulát, így az nem kötődik a riboszómához."
    },
    {
      id: "mol_12",
      topic: "Molekuláris mechanizmusok",
      type: "mcq",
      question: "Mit jelent a kiterjesztett spektrumú béta-laktamáz (ESBL)?",
      options: [
        "Csak a penicillint bontja",
        "A penicillineket és a 3-4. generációs cefalosporinokat is elbontó enzim",
        "Egy baktériumfaj",
        "Vitamin termelő enzim"
      ],
      correctAnswer: 1,
      explanation: "Az ESBL enzimek (pl. CTX-M) miatt a legfontosabb béta-laktámok hatástalanná válnak."
    },
    {
      id: "mol_13",
      topic: "Molekuláris mechanizmusok",
      type: "mcq",
      question: "Hogyan működnek az RND típusú efflux pumpák?",
      options: [
        "Behúzzák a gyógyszert a sejtbe",
        "A sejt belsejéből közvetlenül a külvilágba juttatják az antibiotikumot",
        "Lebontják a DNS-t",
        "Soha nem működnek"
      ],
      correctAnswer: 1,
      explanation: "Ezek a komplex rendszerek (pl. AcrAB-TolC) rendkívül hatékonyan távolítják el a káros anyagokat."
    },
    {
      id: "mol_14",
      topic: "Molekuláris mechanizmusok",
      type: "mcq",
      question: "Mit jelent a 'kompetens' állapot a baktériumoknál transzformáció során?",
      options: [
        "Hogy nagyon okosak",
        "Hogy képesek felvenni szabad DNS-t a környezetből",
        "Hogy gyorsan futnak",
        "Hogy betegek"
      ],
      correctAnswer: 1,
      explanation: "A kompetencia egy speciális élettani állapot, ami lehetővé teszi a környezeti DNS befogadását."
    },
    {
      id: "mol_15",
      topic: "Molekuláris mechanizmusok",
      type: "mcq",
      question: "Melyik mobilis elem felelős leginkább a 'multirezisztencia' gyors terjedéséért?",
      options: ["Mutáció", "R-plazmidok (amelyek több rezisztenciagént is hordozhatnak)", "Ostor", "Tok"],
      correctAnswer: 1,
      explanation: "Egyetlen plazmid átadásával a baktérium egyszerre több antibiotikummal szemben is ellenállóvá válhat."
    },
    {
      id: "mol_16",
      topic: "Molekuláris mechanizmusok",
      type: "mcq",
      question: "Hogyan hat a riboszómális metiláció (erm gének)?",
      options: [
        "Elvágja a riboszómát",
        "Módosítja az rRNS-t, így a makrolidok nem tudnak kötődni hozzá",
        "Segíti a fehérjeszintézist",
        "Semmit nem csinál"
      ],
      correctAnswer: 1,
      explanation: "A metilcsoport fizikai akadályt képez az antibiotikum kötődése számára a riboszómán."
    },
    {
      id: "mol_17",
      topic: "Molekuláris mechanizmusok",
      type: "mcq",
      question: "Mit csinálnak a Qnr fehérjék?",
      options: [
        "Megölik a baktériumot",
        "Védik a DNS-girázt a fluorokinolonok hatásától",
        "Segítik a mozgást",
        "Emésztőenzimek"
      ],
      correctAnswer: 1,
      explanation: "Ez egy példa a célpont-védelemre, ahol egy plusz fehérje óvja meg a gyógyszer célpontját."
    },
    {
      id: "mol_18",
      topic: "Molekuláris mechanizmusok",
      type: "mcq",
      question: "Melyik baktériumnál jellemző a porincsatornák elvesztése miatti rezisztencia?",
      options: ["Gram-pozitívok", "Gram-negatívok (pl. Pseudomonas, E. coli)", "Mycoplasma", "Vírusok"],
      correctAnswer: 1,
      explanation: "Mivel a Gram-negatívoknak van külső membránja, a porinok megváltoztatása hatékonyan zárja ki a gyógyszert."
    },
    {
      id: "mol_19",
      topic: "Molekuláris mechanizmusok",
      type: "mcq",
      question: "Mit kódol az mcr-1 gén?",
      options: [
        "Penicillin ellenállást",
        "Plazmidon terjedő kolisztin-rezisztenciát",
        "Lázat",
        "Hasmenést"
      ],
      correctAnswer: 1,
      explanation: "Az mcr-1 felfedezése mérföldkő volt, mert bebizonyította, hogy a kolisztin-rezisztencia horizontálisan is terjedhet."
    },
    {
      id: "mol_20",
      topic: "Molekuláris mechanizmusok",
      type: "mcq",
      question: "Mi az összefoglalás lényege az AMR molekuláris hátterénél?",
      options: [
        "Véletlen folyamat, nem számít",
        "A baktériumok rendkívül változatos és hatékony eszköztárral rendelkeznek az antibiotikumok kijátszására",
        "Minden baktérium egyforma",
        "Nincs molekuláris háttér"
      ],
      correctAnswer: 1,
      explanation: "A HGT és a különböző mechanizmusok (enzimek, efflux, mutációk) együttesen teszik nehézzé a fertőzések kezelését."
    }
  ]
};
