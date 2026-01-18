export const staphylococcusData = {
  id: "staphylococcus",
  title: "4. Staphylococcus fertőzések",
  studyMaterial: [
    {
      "title": "1. A kórokozók jellemzése",
      "icon": "microscope",
      "color": "bg-blue-50 border-blue-200",
      "iconColor": "text-blue-500",
      "sections": [
        {
          "header": "1.1. Fontosabb fajok",
          "points": [
            "**Staphylococcus hyicus:** Főleg bőrbetegségekért felelős",
            "**Staphylococcus aureus:** Gennyes gyulladások, szeptikémia (LA-MRSA jelentősége!)",
            "**Jellemzők:** Gram-pozitív coccusok, aerob/fakultatív anaerobok, opportunisták (sérült bőrön át fertőznek)"
          ]
        },
        {
          "header": "1.2. Különbségek",
          "points": [
            "**S. hyicus:** Fehér pigment, nem hemolizál, exfoliatív toxinokat termel",
            "**S. aureus:** Sárgás pigment, **kettős béta-hemolízis**, koaguláz-pozitív"
          ]
        }
      ]
    },
    {
      "title": "2. Exudatív epidermitis (Kenőcsös bőrgyulladás)",
      "icon": "alert-triangle",
      "color": "bg-orange-50 border-orange-200",
      "iconColor": "text-orange-500",
      "sections": [
        {
          "header": "2.1. Jellemzők",
          "points": [
            "**Kórokozó:** S. hyicus",
            "**Érintett kor:** Újszülött és fiatal malacok (3–5 napos kor)",
            "**Hajlamosítás:** Elégtelen kolosztrumfelvétel, bőrsérülések (harapás), nedves környezet"
          ]
        },
        {
          "header": "2.2. Tünetek",
          "points": [
            "**Kezdet:** Pofa, szemek körül, lágyékon hólyagok",
            "**Folyamat:** Zsíros tapintatú exudátum → barnás pörkök alakulnak ki",
            "**Kritikus:** Viszketés és láz NINCS, de a kiterjedt bőrkárosodás miatt súlyos kiszáradás és elhullás következhet",
            "**Vese:** A toxinok miatt a vesecsatornák hámja leválhat"
          ]
        }
      ]
    },
    {
      "title": "3. Egyéb Staphylococcus kórformák",
      "icon": "thermometer",
      "color": "bg-red-50 border-red-200",
      "iconColor": "text-red-500",
      "sections": [
        {
          "header": "3.1. Arthritis (Ízületgyulladás)",
          "points": [
            "**Ok:** S. hyicus vagy S. aureus",
            "**Bejutás:** Hematogén úton, gyakran a **köldökön** keresztül",
            "**Tünet:** Sántaság, meleg ízületi duzzanat, polyarthritis"
          ]
        },
        {
          "header": "3.2. Szeptikémia és Mastitis",
          "points": [
            "**Szeptikémia:** Gennyes gócok (tályogok) az agyban, májban, vesében",
            "**Mastitis:** A koca tőgygyulladása, gennyes-tályogos jellegű, agalactiát okozhat"
          ]
        },
        {
          "header": "3.3. Fülvégelhalás",
          "points": [
            "6–14 hetes malacoknál szimmetrikus, száraz necrosis",
            "Összetett ok: S. hyicus toxinok + másodlagos fertőzések"
          ]
        }
      ]
    },
    {
      "title": "4. Diagnosztika és Kezelés",
      "icon": "search",
      "color": "bg-slate-50 border-slate-200",
      "iconColor": "text-slate-500",
      "sections": [
        {
          "header": "4.1. Labor",
          "points": [
            "Pörk alatti mintavétel, tenyésztés véres agaron",
            "Koaguláz-próba, kataláz-pozitivitás igazolása"
          ]
        },
        {
          "header": "4.2. Terápia",
          "points": [
            "**Antibiotikum:** Penicillin, amoxicillin, ceftiofur",
            "**Rezisztencia:** MRSA (LA-MRSA) esetén béta-laktámok hatástalanok!",
            "**Kiegészítés:** Antiszeptikus (jódos) lemosás, folyadékpótlás"
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "staph_1",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Melyik Staphylococcus faj okozza a kenőcsös bőrgyulladást?",
      options: ["S. aureus", "S. hyicus", "S. intermedius", "S. saprophyticus"],
      correctAnswer: 1,
      explanation: "A Staphylococcus hyicus a fő kórokozója az exudatív epidermitisnek."
    },
    {
      id: "staph_2",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Milyen életkorú malacokra jellemző leginkább a kenőcsös bőrgyulladás?",
      options: ["3-5 napos újszülöttek", "Választási malacok", "Hízók", "Kocák"],
      correctAnswer: 0,
      explanation: "Az újszülött és fiatal malacok a legfogékonyabbak a heveny formára."
    },
    {
      id: "staph_3",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Jellemző-e a láz és a viszketés a kenőcsös bőrgyulladásra?",
      options: ["Igen, mindkettő", "Láz van, viszketés nincs", "Viszketés van, láz nincs", "Egyik sem jellemző"],
      correctAnswer: 3,
      explanation: "Jellegzetes, hogy sem viszketés, sem láz nem kíséri általában a folyamatot."
    },
    {
      id: "staph_4",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Melyik szerv károsodhat a S. hyicus toxinok szisztémás hatása miatt?",
      options: ["Máj", "Tüdő", "Vese (gyűjtőcsatornák hámja leválik)", "Lép"],
      correctAnswer: 2,
      explanation: "A toxinok kiválasztódása során a vesehám károsodhat."
    },
    {
      id: "staph_5",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Mi a kenőcsös bőrgyulladás (exudatív epidermitis) legfőbb veszélye?",
      options: ["Csak esztétikai hiba", "Súlyos kiszáradás a bőrkárosodás miatt", "Vakság", "Sántaság"],
      correctAnswer: 1,
      explanation: "A nagy felületű bőrelváltozás miatt az állat rengeteg folyadékot veszít, ami halálos lehet."
    },
    {
      id: "staph_6",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Melyik Staphylococcus faj mutat kettős béta-hemolízist véragaron?",
      options: ["S. hyicus", "S. aureus", "S. xylosus", "S. sciuri"],
      correctAnswer: 1,
      explanation: "A S. aureusra jellemző a kettős hemolízis zóna a telepek körül."
    },
    {
      id: "staph_7",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Hogyan terjed leggyakrabban az ízületgyulladás malacokban?",
      options: ["Légúton", "Köldökön keresztül (hematogén út)", "Szájon át", "Kullancscsípéssel"],
      correctAnswer: 1,
      explanation: "A köldökcsonk a Staphylococcusok és más gennykeltők fő bemeneti kapuja újszülötteknél."
    },
    {
      id: "staph_8",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Melyik antibiotikum-csoport hatástalan MRSA fertőzés esetén?",
      options: ["Aminoglikozidok", "Béta-laktámok (penicillinek, cefalosporinok)", "Tetraciklinek", "Fluorokinolonok"],
      correctAnswer: 1,
      explanation: "Az MRSA (Meticillin-rezisztens S. aureus) minden béta-laktám antibiotikumra rezisztens."
    },
    {
      id: "staph_9",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Mi jellemző a S. hyicus telepekre véres agaron?",
      options: ["Sárga pigment, hemolízis", "Fehér pigment, nincs hemolízis", "Fekete telepek", "Zöldítő hemolízis"],
      correctAnswer: 1,
      explanation: "A S. hyicus fehér telepeket képez és nem mutat hemolízist."
    },
    {
      id: "staph_10",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Melyik kórkép szimmetrikus necrosis a fülkagylón?",
      options: ["Fülrüh", "Fülvégelhalás", "Fültályog", "Sertésorbánc"],
      correctAnswer: 1,
      explanation: "A fülvégelhalás süldőkben jelentkező, Staphylococcusokkal is összefüggő kórkép."
    },
    {
      id: "staph_11",
      topic: "Staphylococcus",
      type: "bool",
      question: "A Staphylococcusok Gram-pozitív coccusok.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, morfológiailag gömb alakúak és festődésük szerint Gram-pozitívak."
    },
    {
      id: "staph_12",
      topic: "Staphylococcus",
      type: "bool",
      question: "A Staphylococcusok spórát képeznek, ezért maradnak fenn a környezetben.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis, a Staphylococcusok nem képeznek spórát."
    },
    {
      id: "staph_13",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Mi a kataláz-próba jelentősége?",
      options: ["Elkülöníti a Staphylococcust (pozitív) a Streptococcustól (negatív)", "Kimutatja a vírust", "A vese funkcióját méri", "Semmi"],
      correctAnswer: 0,
      explanation: "A kataláz-pozitivitás alapvető differenciáló bélyeg a Staphylococcus nemzetség számára."
    },
    {
      id: "staph_14",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Melyik kórkép nem tipikusan Staphylococcus eredetű?",
      options: ["Kenőcsös bőrgyulladás", "Petyhüdt bénulás", "Arthritis", "Mastitis"],
      correctAnswer: 1,
      explanation: "A petyhüdt bénulást a Botulismus toxinja okozza, nem a Staphylococcus."
    },
    {
      id: "staph_15",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Hogyan kolonizálódnak a malacok S. hyicussal?",
      options: ["Csak a levegőből", "A koca bőrflórájából az ellés során", "Csak injekcióval", "Nincs kolonizáció"],
      correctAnswer: 1,
      explanation: "A malacok az anyjuktól veszik fel a normál bőrflóra részeként, ami később kárt okozhat."
    },
    {
      id: "staph_16",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Melyik hajlamosító tényező fontos a bőrgyulladásnál?",
      options: ["Bőrsérülések (pl. térdsérülés a padozattól)", "Sok vitamintartalmú takarmány", "Zenehallgatás", "Sötét ól"],
      correctAnswer: 0,
      explanation: "A mikrosérülések bejutási kaput nyitnak az opportunista baktériumnak."
    },
    {
      id: "staph_17",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Milyen állagú az exudátum kenőcsös bőrgyulladásnál?",
      options: ["Vizes", "Zsíros tapintatú, fehérjedús", "Kemény, száraz", "Gázos"],
      correctAnswer: 1,
      explanation: "Innen ered a 'kenőcsös' elnevezés is."
    },
    {
      id: "staph_18",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Mit okozhat a S. aureus szeptikémia útján az agyban?",
      options: ["Agydaganatot", "Gennyes agyvelőtályogot", "Agyvízkórt", "Semmit"],
      correctAnswer: 1,
      explanation: "A szeptikémia során távoli szervekben, így az agyban is gennyes gócok alakulhatnak ki."
    },
    {
      id: "staph_19",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Hogyan kell kezelni a kenőcsös malacokat?",
      options: ["Szisztémás antibiotikummal és helyi antiszeptikus lemosással", "Csak vízzel", "Selyemkendővel", "Éheztetéssel"],
      correctAnswer: 0,
      explanation: "A kombinált szisztémás és helyi kezelés a leghatékonyabb."
    },
    {
      id: "staph_20",
      topic: "Staphylococcus",
      type: "bool",
      question: "A Staphylococcusok fakultatív anaerobok.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, oxigén jelenlétében és hiányában is képesek szaporodni."
    },
    {
      id: "staph_21",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Mi a 'LA-MRSA' jelentése?",
      options: ["Laboratóriumi Alga", "Livestock-Associated MRSA (haszonállatokhoz kötődő MRSA)", "Lassan Alakuló Betegség", "Nincs ilyen"],
      correctAnswer: 1,
      explanation: "Haszonállatokban (sertésben is) elterjedt meticillin-rezisztens S. aureus törzs."
    },
    {
      id: "staph_22",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Mi jellemző a tőgygyulladásra Staphylococcus esetén?",
      options: ["Gennyes-tályogos jellegű", "Csak vízszerű tej", "Kék tőgy", "Semmi"],
      correctAnswer: 0,
      explanation: "A Staphylococcusok jellemzően gennyes folyamatokat és tályogokat okoznak."
    },
    {
      id: "staph_23",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Hogyan lehet megelőzni az újszülöttkori fertőzést?",
      options: ["Jó kolosztrumfelvétel és higiénia biztosításával", "Sok altatással", "Sötétben tartással", "Nincs mód rá"],
      correctAnswer: 0,
      explanation: "A megfelelő passzív immunitás (kolosztrum) és a tiszta környezet kulcsfontosságú."
    },
    {
      id: "staph_24",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Milyen antibiotikum-érzékenységi vizsgálat javasolt?",
      options: ["Vérvétel", "Antibiogram (izolált kórokozóból)", "Hőmérőzés", "Szemrevételezés"],
      correctAnswer: 1,
      explanation: "A rezisztencia (MRSA) miatt elengedhetetlen a pontos érzékenységi vizsgálat."
    },
    {
      id: "staph_25",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Mi a teendő a pörkökkel lemosás előtt?",
      options: ["Semmi", "Antiszeptikus jódoldatos lemosás javasolt", "Körömlakkal lefesteni", "Beolajozni"],
      correctAnswer: 1,
      explanation: "A külső fertőtlenítés segít csökkenteni a baktériumszámot."
    },
    {
      id: "staph_26",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Melyik csoportba tartozik a ceftiofur?",
      options: ["Penicillin", "3. generációs cefalosporin", "Aminoglikozid", "Makrolid"],
      correctAnswer: 1,
      explanation: "A ceftiofur egy széles spektrumú béta-laktám (cefalosporin)."
    },
    {
      id: "staph_27",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Mit jelent a 'polyarthritis'?",
      options: ["Egy ízület gyulladása", "Több ízület egyidejű gyulladása", "Ízületi daganat", "Bőrgyulladás"],
      correctAnswer: 1,
      explanation: "A hematogén (véráram útján történő) terjedés miatt gyakran több ízület érintett."
    },
    {
      id: "staph_28",
      topic: "Staphylococcus",
      type: "bool",
      question: "A Staphylococcusok opportunista kórokozók.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, kedvező alkalomra (pl. sérülés, gyenge immunrendszer) várnak a kártételhez."
    },
    {
      id: "staph_29",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Milyen az ízületi folyadék S. aureus arthritis esetén?",
      options: ["Tiszta", "Savós-gennyes vagy fibrines-gennyes", "Vörös", "Nincs"],
      correctAnswer: 1,
      explanation: "A Staphylococcus fertőzésre a gennyes exszudátum a jellemző."
    },
    {
      id: "staph_30",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Mi az agalactia?",
      options: ["Sok tej", "Tejhiány vagy tejtermelés megszűnése", "Gyors növés", "Hízás"],
      correctAnswer: 1,
      explanation: "A mastitis miatt a koca tejtermelése leállhat."
    },
    {
      id: "staph_31",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Hogyan azonosítjuk a Staphylococcust laborban?",
      options: ["Röntgensugárral", "Biokémiai tesztekkel és MALDI-TOF-fal", "Tapintással", "Ízleléssel"],
      correctAnswer: 1,
      explanation: "A modern laboratóriumi diagnosztika ezeket a módszereket használja."
    },
    {
      id: "staph_32",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Melyik Staphylococcus termel exfoliatív toxinokat?",
      options: ["S. hyicus", "S. aureus", "Mindkettő", "Egyik sem"],
      correctAnswer: 0,
      explanation: "A S. hyicus exfoliatív toxinjai okozzák a hám leválását és a kenőcsös jelleget."
    },
    {
      id: "staph_33",
      topic: "Staphylococcus",
      type: "bool",
      question: "A Staphylococcus aureus koaguláz-pozitív.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, ez egy fontos faji bélyege."
    },
    {
      id: "staph_34",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Milyen az idült forma a választás utáni malacoknál?",
      options: ["Halálos", "Lokalizált, enyhébb bőrelváltozások", "Csonttörés", "Tüsszentés"],
      correctAnswer: 1,
      explanation: "Az idősebb állatokban a folyamat gyakran kevésbé heveny."
    },
    {
      id: "staph_35",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Mit jelent a 'pyoderma'?",
      options: ["Bőrgyulladás", "Gennyes bőrgyulladás", "Bőrhámlás", "Bőrkeményedés"],
      correctAnswer: 1,
      explanation: "A gennyes bőrfelületi folyamatokat nevezzük így."
    },
    {
      id: "staph_36",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Milyen pigmentet termel a S. aureus?",
      options: ["Fekete", "Sárgás/Arany", "Zöld", "Kék"],
      correctAnswer: 1,
      explanation: "Az aureus név jelentése is arany, a pigmentje miatt."
    },
    {
      id: "staph_37",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Mit okozhat a S. aureus a méhben ellés után?",
      options: ["Daganatot", "Gennyes méhgyulladást (endometritis)", "Sok malacot", "Semmit"],
      correctAnswer: 1,
      explanation: "A sebeken át feljutva gyulladást okozhat, rontva a termékenyülést."
    },
    {
      id: "staph_38",
      topic: "Staphylococcus",
      type: "bool",
      question: "A fülvégelhalás pontos oka nem teljesen tisztázott, de a Staphylococcusok szerepet játszhatnak benne.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, összetett kórkép, de a S. hyicus toxinok közreműködhetnek."
    },
    {
      id: "staph_39",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Hogyan festődnek a Staphylococcusok?",
      options: ["Gram-pozitív (kék/lila)", "Gram-negatív (piros)", "Sárga", "Átlátszó"],
      correctAnswer: 0,
      explanation: "Gram-pozitív festődésűek."
    },
    {
      id: "staph_40",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Hány hétig tarthat az ízületgyulladás kezelése?",
      options: ["1 nap", "2-3 hét", "1 év", "1 óra"],
      correctAnswer: 1,
      explanation: "A krónikus gennyes folyamatok gyógyulása lassú."
    },
    {
      id: "staph_41",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Melyik állítás igaz a Staphylococcusokra?",
      options: ["Nem spóráznak", "Nem mozgók", "Fakultatív anaerobok", "Mindhárom igaz"],
      correctAnswer: 3,
      explanation: "Ezek a baktérium nemzetség alapvető tulajdonságai."
    },
    {
      id: "staph_42",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Milyen elhelyezkedésűek a coccusok a kenetben?",
      options: ["Láncok", "Fürtök", "Kettesével", "Spirál"],
      correctAnswer: 1,
      explanation: "A Staphylococcusok jellemzően szőlőfürt-szerű csoportokat alkotnak."
    },
    {
      id: "staph_43",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Mit jelent az 'exudátum'?",
      options: ["Vitamin", "Gyulladásos izzadmány", "Méreg", "Étel"],
      correctAnswer: 1,
      explanation: "A gyulladás során kilépő fehérjedús folyadék."
    },
    {
      id: "staph_44",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Mi a staphylokináz funkciója?",
      options: ["Étel emésztése", "Virulenciafaktor (segíti a terjedést)", "Látás javítása", "Nincs neki"],
      correctAnswer: 1,
      explanation: "Egy enzim, ami segíti a baktériumot a szövetekben való terjedésben."
    },
    {
      id: "staph_45",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Melyik antibiotikum-csoportba tartozik az amoxicillin?",
      options: ["Aminoglikozid", "Penicillin (béta-laktám)", "Tetraciklin", "Szulfonamid"],
      correctAnswer: 1,
      explanation: "Az amoxicillin egy félszintetikus penicillin."
    },
    {
      id: "staph_46",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Mi a teendő ha nem hat az amoxicillin?",
      options: ["Emeljük a dózist végtelenig", "Végezzünk rezisztenciavizsgálatot és váltsunk hatékony szerre", "Hagyjuk abba a kezelést", "Várjunk"],
      correctAnswer: 1,
      explanation: "A rezisztencia (pl. béta-laktamáz termelés) miatt ilyenkor váltani kell."
    },
    {
      id: "staph_47",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Hogyan előzhető meg a fülvégelhalás?",
      options: ["Management javításával és a hajlamosító vírusok (pl. PCV2) elleni vakcinázással", "Csak tiszta füllel", "Meleg sapkával", "Semmivel"],
      correctAnswer: 0,
      explanation: "Mivel összetett kórkép, a menedzsment és a víruskontroll a legfontosabb."
    },
    {
      id: "staph_48",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Mi a 'koaguláz' enzim funkciója?",
      options: ["Vér alvasztása (segít a baktériumnak elrejtőzni)", "Cukor bontása", "Fény termelése", "Nincs"],
      correctAnswer: 0,
      explanation: "A vérplazmát megalvasztja, fibrinréteget képezve a baci körül."
    },
    {
      id: "staph_49",
      topic: "Staphylococcus",
      type: "bool",
      question: "A Staphylococcus aureus törzsek egy része sárgás pigmentet termel.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, az aureus (arany) név is erre utal."
    },
    {
      id: "staph_50",
      topic: "Staphylococcus",
      type: "mcq",
      question: "Mi az összegzés fő tanulsága a Staphylococcusokról?",
      options: ["Mindig halálosak", "Opportunisták, a higiénia és a kolosztrumvédelem a kulcs", "Csak kocákban vannak", "Nem léteznek"],
      correctAnswer: 1,
      explanation: "A jó menedzsmenttel és tisztasággal megelőzhető a tömeges kártételük."
    }
  ]
};
