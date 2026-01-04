export const staphylococcusData = {
  id: "staphylococcus",
  title: "4. Staphylococcusok okozta megbetegedések",
  studyMaterial: [
    {
      title: "1. A Kórokozók Jellemzői",
      icon: "microscope",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-500",
      sections: [
        {
          header: "Staphylococcus hyicus és S. aureus",
          points: [
            "**Gram-pozitív**, gömb alakú (coccus) baktériumok.",
            "A környezetben széles körben elterjedtek, a normál flóra részei lehetnek.",
            "**S. hyicus:** Fehér pigmentet termel, véres agaron **nem hemolizál**. Exfoliatív toxinokat termel.",
            "**S. aureus:** Sárgás pigment ('arany' staphylococcus), **kettős zónájú béta-hemolízist** okoz.",
            "**MRSA:** Meticillin-rezisztens S. aureus törzsek is előfordulhatnak sertésben (LA-MRSA)."
          ]
        }
      ]
    },
    {
      title: "2. Kenőcsös Bőrgyulladás (Exudatív epidermitis)",
      icon: "alertTriangle",
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-500",
      sections: [
        {
          header: "Kialakulás és Hajlamosító tényezők",
          points: [
            "**Kórokozó:** Elsősorban a **Staphylococcus hyicus**.",
            "**Célcsoport:** Újszülött és fiatal malacok (gyakran 3-5 napos korban).",
            "**Hajlamosít:** Kevés kolosztrum, bőrsérülések (harapás, durva padozat), magas kocasüldő arány.",
            "**Terjedés:** Horizontális (alomtársak) vagy vertikális (kocától)."
          ]
        },
        {
          header: "Tünetek és Kórlefolyás",
          points: [
            "**Kezdet:** Pofa, szemek körül, hónaljban, lágyékon.",
            "**Bőrtünet:** Zsíros tapintatú, barnás pörkökkel fedett gennyes gyulladás. Alatta a bőr vörös és nedvező.",
            "**Különbség:** **NINCS láz** és **NINCS viszketés** (elkülönítés a rühességtől!).",
            "**Kimenetel:** Kiszáradás, legyengülés, súlyos esetben elhullás.",
            "**Vese:** A toxinok miatt a vesemedencében hámleválás (dequamatio) tapasztalható."
          ]
        }
      ]
    },
    {
      title: "3. Lokalizált Fertőzések",
      icon: "activity",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-500",
      sections: [
        {
          header: "Ízületgyulladás (Arthritis)",
          points: [
            "Bakteriális eredetű, gyakran hematogén (köldökön át) terjedés.",
            "**Tünetek:** Sántaság, duzzadt, fájdalmas ízületek.",
            "**Kórbonctan:** Savós-gennyes vagy fibrines-gennyes ízületi folyadék.",
            "Gyakran társul a kenőcsös bőrgyulladáshoz."
          ]
        },
        {
          header: "Tőgygyulladás (Mastitis)",
          points: [
            "S. aureus okozhat sporadikusan gennyes tőgygyulladást.",
            "**Tünetek:** Duzzadt, fájdalmas emlők, láz, agalactia (tejhiány).",
            "Tályogképződésre hajlamosít."
          ]
        },
        {
          header: "Fülvégelhalás",
          points: [
            "Összetett kórkép, de a S. hyicus helyi túlszaporodása és toxintermelése kulcsszerepet játszhat.",
            "Fiatal malacoknál (6-14 hetes) szimmetrikus, száraz elhalás a fülkagylókon."
          ]
        }
      ]
    },
    {
      title: "4. Szeptikémia (Vérfertőzés)",
      icon: "shieldAlert",
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-500",
      sections: [
        {
          header: "S. aureus szepszis",
          points: [
            "A baktérium bejut a véráramba (köldök, sebek, tőgy útján).",
            "**Metasztatikus tályogok:** Gennyes gócok alakulhatnak ki a májban, vesében, agyban, szívben.",
            "**Endocarditis:** Szívbelhártya-gyulladás és szívizom-tályogok hirtelen elhullást okozhatnak."
          ]
        }
      ]
    },
    {
      title: "5. Diagnózis és Terápia",
      icon: "pill",
      color: "bg-emerald-50 border-emerald-200",
      iconColor: "text-emerald-500",
      sections: [
        {
          header: "Laboratóriumi Diagnózis",
          points: [
            "**Minta:** Pörkök alatti genny, ízületi folyadék, tej, belső szervek.",
            "**Tenyésztés:** Aerob, véres agaron 24 óra alatt jól nő.",
            "**Azonosítás:** Kataláz-teszt (pozitív), koaguláz-teszt.",
            "**Differenciál:** Sertéshimlő (viszket!), rühesség (viszket!), cinkhiány."
          ]
        },
        {
          header: "Kezelés és Megelőzés",
          points: [
            "**Antibiotikum:** Penicillin, amoxicillin, ceftiofur, cefquinom.",
            "**Fontos:** Antibiotikum-érzékenységi vizsgálat az MRSA veszélye miatt!",
            "**Helyi kezelés:** Antiszeptikus (jódos) lemosás.",
            "**Megelőzés:** Kolosztrum felvétel biztosítása, higiénia (alom, fertőtlenítés), traumák elkerülése (fogcsípés).",
            "**Vakcina:** Telepspecifikus (autogén) vakcinák, kocák oltása a vemhesség végén."
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "staph_1",
      topic: "Staphylococcus - Általános",
      type: "mcq",
      question: "Melyik Staphylococcus faj okozza leggyakrabban a kenőcsös bőrgyulladást?",
      options: ["Staphylococcus aureus", "Staphylococcus hyicus", "Staphylococcus sciuri", "Staphylococcus xylosus"],
      correctAnswer: 1,
      explanation: "A kenőcsös bőrgyulladás (exudatív epidermitis) fő kórokozója a S. hyicus."
    },
    {
      id: "staph_2",
      topic: "Staphylococcus - Általános",
      type: "mcq",
      question: "Milyen morfológiájúak a Staphylococcusok?",
      options: ["Gram-negatív pálcák", "Gram-pozitív gömbök (coccusok)", "Gram-pozitív pálcák", "Gram-negatív coccusok"],
      correctAnswer: 1,
      explanation: "A Staphylococcusok Gram-pozitív, gömb alakú baktériumok."
    },
    {
      id: "staph_3",
      topic: "Staphylococcus - Epidermitis",
      type: "bool",
      question: "A kenőcsös bőrgyulladásban szenvedő malacokra jellemző a magas láz és a viszketés.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis. Jellemző diagnosztikai bélyeg, hogy NINCS láz és NINCS viszketés."
    },
    {
      id: "staph_4",
      topic: "Staphylococcus - Epidermitis",
      type: "mcq",
      question: "Melyik szervben tapasztalható jellegzetes elváltozás (hámleválás) S. hyicus toxinhatás miatt?",
      options: ["Máj", "Vese (gyűjtőcsatornák és vesemedence)", "Tüdő", "Lép"],
      correctAnswer: 1,
      explanation: "A S. hyicus toxinok szisztémás hatása miatt a vesében hámsejt-leválás (dequamatio) látható."
    },
    {
      id: "staph_5",
      topic: "Staphylococcus - Epidermitis",
      type: "mcq",
      question: "Mikor jelentkeznek leggyakrabban a tünetek újszülött malacokban?",
      options: ["1 órán belül", "3-5 napos korban", "Csak választás után", "6 hónapos korban"],
      correctAnswer: 1,
      explanation: "A heveny forma leggyakrabban az élet első hetében, 3-5 napos korban jelentkezik."
    },
    {
      id: "staph_6",
      topic: "Staphylococcus - Diagnózis",
      type: "mcq",
      question: "Milyen hemolízist mutat a S. aureus véres agaron?",
      options: ["Nincs hemolízis", "Alfa-hemolízis", "Kettős zónájú béta-hemolízis", "Gamma-hemolízis"],
      correctAnswer: 2,
      explanation: "A S. aureus-ra jellemző a kettős zónájú béta-hemolízis."
    },
    {
      id: "staph_7",
      topic: "Staphylococcus - Általános",
      type: "mcq",
      question: "Mit jelent az MRSA rövidítés?",
      options: ["Magas Rezisztenciájú Staphylococcus", "Meticillin-rezisztens Staphylococcus aureus", "Máj-reaktív Staphylococcus", "Mindenre Rezisztens Staphylococcus"],
      correctAnswer: 1,
      explanation: "Meticillin-rezisztens Staphylococcus aureus."
    },
    {
      id: "staph_8",
      topic: "Staphylococcus - Arthritis",
      type: "mcq",
      question: "Hogyan jutnak be leggyakrabban a baktériumok az ízületekbe újszülött malacokban?",
      options: ["Széllel", "Köldökön keresztül (hematogén úton)", "Kizárólag szájon át", "Semennyire, nem fertőző"],
      correctAnswer: 1,
      explanation: "A bakteriális arthritis gyakran köldökfertőzésből kiinduló véráramfertőzés útján alakul ki."
    },
    {
      id: "staph_9",
      topic: "Staphylococcus - Mastitis",
      type: "mcq",
      question: "Milyen jellegű tőgygyulladást okoz tipikusan a S. aureus?",
      options: ["Szevas", "Gennyes (suppuratív), tályogképződésre hajlamos", "Csak vizenyős", "Nekrotizáló"],
      correctAnswer: 1,
      explanation: "S. aureus-ra jellemző a gennyes gyulladás és a tályogképződés."
    },
    {
      id: "staph_10",
      topic: "Staphylococcus - Terápia",
      type: "mcq",
      question: "Melyik antibiotikum csoport az első választás Staphylococcus ellen (ha érzékeny)?",
      options: ["Aminoglikozidok", "Béta-laktámok (pl. Penicillinek)", "Kinolonok", "Szulfonamidok"],
      correctAnswer: 1,
      explanation: "A penicillinek és aminopenicillinek az elsődlegesen választandó szerek, ha a tőrzs érzékeny."
    },
    {
      id: "staph_11",
      topic: "Staphylococcus - Megelőzés",
      type: "bool",
      question: "A kenőcsös bőrgyulladás megelőzésében fontos a malacok fogainak lecsípése.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. A fogcsípéssel csökkenthető a bőr sérülése, ami a baktérium bejutási kapuja."
    },
    {
      id: "staph_12",
      topic: "Staphylococcus - Általános",
      type: "mcq",
      question: "Milyen színű pigmentet termel a S. hyicus?",
      options: ["Aranysárga", "Fehér", "Zöld", "Fekete"],
      correctAnswer: 1,
      explanation: "A S. hyicus fehér pigmentet termel és nem hemolizál."
    },
    {
      id: "staph_13",
      topic: "Staphylococcus - Szeptikémia",
      type: "mcq",
      question: "Melyik szívbetegséget okozhatja a S. aureus szepszis?",
      options: ["Szívburok-vízkór", "Endocarditis (szívbelhártya-gyulladás)", "Szívbillentyű hiány", "Semmit"],
      correctAnswer: 1,
      explanation: "Metasztatikus gócokat és endocarditist okozhat a szívben."
    },
    {
      id: "staph_14",
      topic: "Staphylococcus - Megelőzés",
      type: "mcq",
      question: "Milyen vakcinát használnak leggyakrabban a védekezésben, ha a telepen visszatérő a probléma?",
      options: ["Univerzális kereskedelmi vakcina", "Telepspecifikus (autogén) vakcina", "Humán vakcina", "Nincs vakcina"],
      correctAnswer: 1,
      explanation: "Kereskedelmi vakcina nincs, ezért a telepspecifikus (autogén) vakcinák használatosak."
    },
    {
      id: "staph_15",
      topic: "Staphylococcus - Általános",
      type: "mcq",
      question: "Mit jelent a 'pleomorf' kifejezés a staphylococcusoknál?",
      options: ["Mindig egyforma", "Változatos alakú (pl. fonalasodhat)", "Két magja van", "Nem létezik ilyen"],
      correctAnswer: 1,
      explanation: "Változatos megjelenési forma, bár a staphylococcusoknál ez kevésbé jellemző, mint pálcáknál, de öreg tenyészetben előfordulhat."
    },
    {
      id: "staph_16",
      topic: "Staphylococcus - Epidermitis",
      type: "mcq",
      question: "Mivel érdemes kiegészíteni a kezelést kiszáradt malacoknál?",
      options: ["Több takarmánnyal", "Elektrolitoldat itatásával", "Hideg vízzel", "Semmivel"],
      correctAnswer: 1,
      explanation: "A bőr kiterjedt károsodása miatti kiszáradást elektrolitokkal kell kezelni."
    },
    {
      id: "staph_17",
      topic: "Staphylococcus - Diagnózis",
      type: "mcq",
      question: "Milyen enzimteszt választja el a Staphylococcusokat a Streptococcusoktól?",
      options: ["Ureáz", "Kataláz (Staph +, Strep -)", "Oxidáz", "Lipáz"],
      correctAnswer: 1,
      explanation: "A kataláz-pozitivitás alapvető differenciáló bélyeg a staphylococcusok javára."
    },
    {
      id: "staph_18",
      topic: "Staphylococcus - Epidermitis",
      type: "bool",
      question: "A kenőcsös bőrgyulladás viszketéssel jár.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis. Nem viszket, ez fontos különbség a rühességtől."
    },
    {
      id: "staph_19",
      topic: "Staphylococcus - Lokalizált",
      type: "mcq",
      question: "Melyik korcsoportot érinti leginkább a fülvégelhalás?",
      options: ["Újszülöttek", "Választott malacok (6-14 hetes)", "Kocák", "Kanok"],
      correctAnswer: 1,
      explanation: "Jellemzően 6-14 hetes korban jelentkezik."
    },
    {
      id: "staph_20",
      topic: "Staphylococcus - Általános",
      type: "mcq",
      question: "Melyik állítás igaz a S. hyicus koaguláz termelésére?",
      options: ["Mindig pozitív", "Mindig negatív", "Törzstől függően lehet pozitív vagy negatív", "Nem termel koagulázt"],
      correctAnswer: 2,
      explanation: "A S. hyicus variábilis koaguláz termelés szempontjából."
    },
    {
      id: "staph_21",
      topic: "Staphylococcus - Epidermitis",
      type: "mcq",
      question: "Hogyan befolyásolja a kocasüldők aránya a kenőcsös bőrgyulladás előfordulását?",
      options: ["Nincs összefüggés", "A kocasüldők malacai veszélyeztetettebbek az alacsonyabb kolosztrális immunitás miatt", "A kocasüldők malacai rezisztensebbek", "Csak az öreg kocák malacai betegek"],
      correctAnswer: 1,
      explanation: "A kocasüldők gyakran kevesebb ellenanyagot adnak át a S. hyicus ellen, így malacaik fogékonyabbak."
    },
    {
      id: "staph_22",
      topic: "Staphylococcus - Általános",
      type: "mcq",
      question: "Melyik Staphylococcus faj okozhat 'botriomikózist' (idült gennyes-kötőszövetes gyulladást) sertésben?",
      options: ["S. aureus", "S. hyicus", "S. epidermidis", "S. saprophyticus"],
      correctAnswer: 0,
      explanation: "A S. aureus képes idült, daganatszerű gennyes burjánzásokat okozni a bőrben vagy a tőgyben."
    },
    {
      id: "staph_23",
      topic: "Staphylococcus - Diagnózis",
      type: "bool",
      question: "A Staphylococcusok spóraképző baktériumok.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis. A Staphylococcusok nem képeznek spórát."
    },
    {
      id: "staph_24",
      topic: "Staphylococcus - Epidermitis",
      type: "mcq",
      question: "Milyen hatással van a toxin a malacok bélcsatornájára?",
      options: ["Súlyos hasmenést okoz", "Gátolja a tápanyagfelszívódást", "Nincs közvetlen enterális hatása, a kiszáradást a bőrveszteség okozza", "Kilyukasztja a gyomrot"],
      correctAnswer: 2,
      explanation: "A kenőcsös bőrgyulladásnál a kiszáradás oka a bőr barrier funkciójának elvesztése, nem a hasmenés."
    },
    {
      id: "staph_25",
      topic: "Staphylococcus - Terápia",
      type: "mcq",
      question: "Miért fontos a sebzések (pl. farokkurtítás, fogcsípés) utáni fertőtlenítés?",
      options: ["Hogy szebb legyen az állat", "Mert ezek a Staphylococcusok behatolási kapui", "Hogy ne vérezzen", "Felesleges, magától gyógyul"],
      correctAnswer: 1,
      explanation: "A Staphylococcusok opportunista kórokozók, amelyek a hámhiányokon át jutnak a szervezetbe."
    },
    {
      id: "staph_26",
      topic: "Staphylococcus - Általános",
      type: "mcq",
      question: "Melyik Staphylococcus faj termel exfoliátív toxinokat?",
      options: ["S. aureus", "S. hyicus", "S. epidermidis", "S. saprophyticus"],
      correctAnswer: 1,
      explanation: "A S. hyicus exfoliátív (bőrhámlasztó) toxinokat termel, amelyek a kenőcsös bőrgyulladást okozzák."
    },
    {
      id: "staph_27",
      topic: "Staphylococcus - Epidermitis",
      type: "mcq",
      question: "Milyen állagúak a pörkök a kenőcsös bőrgyulladásnál?",
      options: ["Száraz, porszerű", "Zsíros tapintatú, barnás", "Kemény, kőszerű", "Nincsenek pörkök"],
      correctAnswer: 1,
      explanation: "A zsíros tapintat az exudátum (izzadmány) és a faggyú keveredése miatt alakul ki."
    },
    {
      id: "staph_28",
      topic: "Staphylococcus - Általános",
      type: "bool",
      question: "A Staphylococcusok kataláz-pozitívak.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Ez különbözteti meg őket a Streptococcusoktól, amelyek kataláz-negatívak."
    },
    {
      id: "staph_29",
      topic: "Staphylococcus - Epidermitis",
      type: "mcq",
      question: "Mi a leggyakoribb oka az elhullásnak kenőcsös bőrgyulladásban?",
      options: ["Fulladás", "Kiszáradás és toxémia", "Belső vérzés", "Éhezés"],
      correctAnswer: 1,
      explanation: "A nagy bőrfelületen keresztül történő folyadékvesztés és a felszívódó toxinok okozzák az elhullást."
    },
    {
      id: "staph_30",
      topic: "Staphylococcus - Általános",
      type: "mcq",
      question: "Mit jelent a 'LA-MRSA' kifejezés?",
      options: ["Lassú Staphylococcus", "Livestock-Associated MRSA (haszonállatokhoz köthető)", "Laboratóriumi Staphylococcus", "Legyengített Staphylococcus"],
      correctAnswer: 1,
      explanation: "A LA-MRSA a haszonállatokban (főleg sertésben) előforduló meticillin-rezisztens S. aureus."
    },
    {
      id: "staph_31",
      topic: "Staphylococcus - Lokalizált",
      type: "mcq",
      question: "Milyen színű genny jellemző a Staphylococcus fertőzésekre?",
      options: ["Zöld", "Sárgásfehér, krémszerű", "Fekete", "Víztiszta"],
      correctAnswer: 1,
      explanation: "A Staphylococcusok sűrű, sárgásfehér genny képződését okozzák."
    },
    {
      id: "staph_32",
      topic: "Staphylococcus - Epidermitis",
      type: "mcq",
      question: "Hogyan terjedhet a S. hyicus a telepen belül?",
      options: ["Csak vízzel", "Kocák tőgybőréről, szülőcsatornából és malacok közötti kontaktussal", "Csak rágcsálókkal", "Csak mesterséges termékenyítéssel"],
      correctAnswer: 1,
      explanation: "A fertőzés forrása gyakran a koca bőre vagy nyálkahártyája."
    },
    {
      id: "staph_33",
      topic: "Staphylococcus - Diagnózis",
      type: "mcq",
      question: "Melyik teszt pozitív a S. aureus esetében és negatív a S. hyicus-nál általában?",
      options: ["Kataláz", "Koaguláz (csőmódszerrel)", "Gram-festés", "Oxidáz"],
      correctAnswer: 1,
      explanation: "A S. aureus tipikusan koaguláz-pozitív, a S. hyicus gyakran negatív vagy későn lesz pozitív."
    },
    {
      id: "staph_34",
      topic: "Staphylococcus - Terápia",
      type: "bool",
      question: "A rezisztens Staphylococcusok ellen a negyedik generációs cefalosporinok mindig hatásosak.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis. Az MRSA törzsek szinte minden béta-laktámra, így a cefalosporinokra is rezisztensek."
    },
    {
      id: "staph_35",
      topic: "Staphylococcus - Epidermitis",
      type: "mcq",
      question: "Mi a teendő a beteg malacokkal a kezelés mellett?",
      options: ["Sötétben tartani", "Elkülönítés és bőséges alom/meleg biztosítása", "Éheztetés", "Hideg vizes fürdetés"],
      correctAnswer: 1,
      explanation: "A beteg malacok hőháztartása felborul, ezért a meleg és a higiénia kulcsfontosságú."
    },
    {
      id: "staph_36",
      topic: "Staphylococcus - Általános",
      type: "mcq",
      question: "Melyik enzim bontja a hidrogén-peroxidot a Staphylococcusoknál?",
      options: ["Lipáz", "Kataláz", "Proteáz", "Amiláz"],
      correctAnswer: 1,
      explanation: "A kataláz enzim vízzé és oxigénné bontja a hidrogén-peroxidot (pezsgés)."
    },
    {
      id: "staph_37",
      topic: "Staphylococcus - Epidermitis",
      type: "mcq",
      question: "Melyik vitamin hiánya okozhat a kenőcsös bőrgyulladáshoz hasonló tüneteket?",
      options: ["C-vitamin", "B7-vitamin (Biotin)", "A-vitamin", "D-vitamin"],
      correctAnswer: 1,
      explanation: "A biotinhiány is okozhat bőrgyulladást, ezért differenciál-diagnosztikailag fontos."
    },
    {
      id: "staph_38",
      topic: "Staphylococcus - Lokalizált",
      type: "mcq",
      question: "Milyen beavatkozás hajlamosít a fülvégelhalásra?",
      options: ["Csak az oltás", "Rossz szellőzés, zsúfoltság és egymás fülének rágása", "A jó minőségű táp", "A zenehallgatás"],
      correctAnswer: 1,
      explanation: "A stressz és a mechanikai sérülések utat nyitnak a kórokozóknak."
    },
    {
      id: "staph_39",
      topic: "Staphylococcus - Általános",
      type: "bool",
      question: "A Staphylococcusok fakultatív anaerobok.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Oxigén jelenlétében és hiányában is képesek szaporodni."
    },
    {
      id: "staph_40",
      topic: "Staphylococcus - Diagnózis",
      type: "mcq",
      question: "Melyik állítás igaz a Staphylococcusok ellenálló képességére?",
      options: ["Nagyon érzékenyek", "Viszonylag ellenállóak a kiszáradással és a sóval szemben", "Csak vízben élnek meg", "Azonnal elpusztulnak 40 fokon"],
      correctAnswer: 1,
      explanation: "A Staphylococcusok jól bírják a környezeti hatásokat és a magas sókoncentrációt."
    },
    {
      id: "staph_41",
      topic: "Staphylococcus - Szeptikémia",
      type: "mcq",
      question: "Hogyan néz ki a szívizom-tályog makroszkóposan?",
      options: ["Fekete folt", "Sárgásfehér, körülírt gennyes góc", "Üreges rész", "Vizes hólyag"],
      correctAnswer: 1,
      explanation: "A metasztatikus tályogok sárgásfehér gennyet tartalmazó gócok a szervekben."
    },
    {
      id: "staph_42",
      topic: "Staphylococcus - Terápia",
      type: "mcq",
      question: "Melyik szer használható a bőr fertőtlenítésére kenőcsös bőrgyulladásnál?",
      options: ["Alkohol", "Hígított jódoldat vagy klórhexidin", "Ecet", "Olaj"],
      correctAnswer: 1,
      explanation: "Az antiszeptikus lemosás csökkenti a baktériumok számát a bőr felszínén."
    },
    {
      id: "staph_43",
      topic: "Staphylococcus - Általános",
      type: "mcq",
      question: "Milyen szerkezetben látszanak a Staphylococcusok mikroszkóp alatt?",
      options: ["Láncok", "Szőlőfürtszerű csoportok", "Párok", "Egyesével"],
      correctAnswer: 1,
      explanation: "A név a görög 'staphyle' (szőlőfürt) szóból ered."
    },
    {
      id: "staph_44",
      topic: "Staphylococcus - Epidermitis",
      type: "bool",
      question: "A kenőcsös bőrgyulladás általában a választás utáni hízók betegsége.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis. Elsősorban a szopós és fiatal választott malacokat érinti."
    },
    {
      id: "staph_45",
      topic: "Staphylococcus - Megelőzés",
      type: "mcq",
      question: "Mi a legfontosabb a koca-malac kapcsolatban a védekezés szempontjából?",
      options: ["A malacok elvétele azonnal", "A föcstej (kolosztrum) időben történő felvétele", "A koca fürdetése jéghideg vízben", "Nincs jelentősége"],
      correctAnswer: 1,
      explanation: "A kolosztrum tartalmazza azokat az antitesteket, amelyek megvédik a malacot az élet első heteiben."
    },
    {
      id: "staph_46",
      topic: "Staphylococcus - Általános",
      type: "mcq",
      question: "Mit bont a hialuronidáz enzim a Staphylococcusoknál?",
      options: ["DNS-t", "Kötőszöveti alapállományt (hialuronsavat)", "Fehérjét", "Zsírt"],
      correctAnswer: 1,
      explanation: "Ez az enzim segíti a baktérium terjedését a szövetekben (spreading factor)."
    },
    {
      id: "staph_47",
      topic: "Staphylococcus - Diagnózis",
      type: "mcq",
      question: "Milyen táptalajt használnak a Staphylococcusok szelektív tenyésztésére?",
      options: ["McConkey agar", "Mannit-só agar", "Sabouraud agar", "TSI agar"],
      correctAnswer: 1,
      explanation: "A Staphylococcusok jól bírják a magas (7.5%) sókoncentrációt, a mannitot pedig fermentálják (sárga szín)."
    },
    {
      id: "staph_48",
      topic: "Staphylococcus - Általános",
      type: "bool",
      question: "A Staphylococcus aureus zoonózis kórokozó.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Az emberre is veszélyes lehet, különösen a rezisztens törzsek (MRSA)."
    },
    {
      id: "staph_49",
      topic: "Staphylococcus - Epidermitis",
      type: "mcq",
      question: "Hány százalékos lehet az elhullás egy kezeletlen, súlyos állományban?",
      options: ["1-5%", "Akár 70-90%", "Mindig 100%", "0%"],
      correctAnswer: 1,
      explanation: "Súlyos, heveny járvány esetén az elhullási arány rendkívül magas lehet fiatal malacokban."
    },
    {
      id: "staph_50",
      topic: "Staphylococcus - Általános",
      type: "mcq",
      question: "Melyik Staphylococcus faj okozhat húgyúti fertőzést kocákban?",
      options: ["S. aureus", "S. hyicus", "S. saprophyticus", "S. epidermidis"],
      correctAnswer: 2,
      explanation: "A S. saprophyticus ismert húgyúti kórokozó."
    }
  ]
};
