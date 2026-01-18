export const appData = {
  id: "actinobacillus_pleuropneumoniae",
  title: "12. Actinobacillus pleuropneumoniae (APP)",
  studyMaterial: [
    {
      "title": "1. Kóroktan és Szerotípusok",
      "icon": "bug",
      "color": "bg-red-50 border-red-200",
      "iconColor": "text-red-500",
      "sections": [
        {
          "header": "1.1. A kórokozó jellemzői",
          "points": [
            "**Actinobacillus pleuropneumoniae:** Gram-negatív, tokos, fakultatív anaerob coccobacillus",
            "NAD-dependencia: Az 1-es biotípusnak NAD (V-faktor) kell a növekedéshez (Staph. aureus dajkatenyészet)",
            "Ellenállóképessége kicsi: a környezetben hamar elpusztul, szigorúan gazdaspecifikus (csak sertés)"
          ]
        },
        {
          "header": "1.2. Szerotípusok",
          "points": [
            "19 szerotípus ismert (tokpoliszacharidok alapján)",
            "Magyarországon korábban a **2-es szerotípus** dominált, de mára a **13-as szerotípus** is rendkívül elterjedt",
            "A vakcinázás szempontjából kulcsfontosságú a telepi szerotípus ismerete"
          ]
        }
      ]
    },
    {
      "title": "2. Virulencia és Patomechanizmus",
      "icon": "zap",
      "color": "bg-orange-50 border-orange-200",
      "iconColor": "text-orange-500",
      "sections": [
        {
          "header": "2.1. Apx toxinok (RTX-toxinok)",
          "points": [
            "**ApxI:** Erősen hemolitikus és citotoxikus (a legvirulensebb törzsek termelik)",
            "**ApxII:** Gyengén hemolitikus, mérsékelten citotoxikus",
            "**ApxIII:** Nem hemolitikus, de erősen citotoxikus a makrofágokra",
            "**ApxIV:** Csak *in vivo* (szervezetben) termelődik, minden törzsnél jelen van (diagnosztikai marker)"
          ]
        },
        {
          "header": "2.2. A 'Citokin vihar'",
          "points": [
            "A toxinok elpusztítják a falósejteket, amiből lizoszómális enzimek szabadulnak fel",
            "Ez kiterjedt tüdőelhalást (**nekrózis**), vérzést és fibrin-kiválást okoz"
          ]
        }
      ]
    },
    {
      "title": "3. Klinikai formák és Kórbonctan",
      "icon": "clipboard",
      "color": "bg-slate-50 border-slate-200",
      "iconColor": "text-slate-500",
      "sections": [
        {
          "header": "3.1. Klinikai megjelenés",
          "points": [
            "**Perakut:** Hirtelen elhullás, véres hab az orrból, cianózis (elkékült fülek/orr)",
            "**Akut:** Nehezített légzés (tátott száj), láz, köhögés",
            "**Krónikus:** Lassú növekedés, idült köhögés, tályogok a tüdőben"
          ]
        },
        {
          "header": "3.2. Kórbonctan",
          "points": [
            "**Fibrines-hemorrágiás-nekrotizáló pleuropneumonia**",
            "Gócok: sötétvörös, kemény (máj-tapintatú) területek, főleg a rekeszlebenyek dorzális részén",
            "Felszínen: sárgás fibrinlepedék, összenövések a mellkasfallal"
          ]
        }
      ]
    },
    {
      "title": "4. Diagnózis és Kezelés",
      "icon": "activity",
      "color": "bg-blue-50 border-blue-200",
      "iconColor": "text-blue-500",
      "sections": [
        {
          "header": "4.1. Laboratóriumi diagnózis",
          "points": [
            "Bakteriológia: dajkacsíkkal véres agaron (szatellita jelenség)",
            "Szerológia: **ApxIV ELISA** (fertőzöttség igazolására), LC-LPS ELISA (szerotipizáláshoz)"
          ]
        },
        {
          "header": "4.2. Terápia",
          "points": [
            "A sebesség döntő! Azonnali **parenterális** kezelés szükséges",
            "Hatékony szerek: Florfenikol, Tulathromycin, Ceftiofur (kritikus)",
            "Rezisztencia: Tetraciklinekre és szulfonamidokra gyakran rezisztens"
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "app_1",
      topic: "Actinobacillus pleuropneumoniae",
      type: "mcq",
      question: "Mi a jellemző kórbonctani elváltozás APP esetén?",
      options: ["Gennyes vesegyulladás", "Fibrines-hemorrágiás-nekrotizáló pleuropneumonia", "Bélcsavarodás", "Májzsugor"],
      correctAnswer: 1,
      explanation: "Az APP toxinok súlyos vérzést, elhalást és fibrinkiválást okoznak a tüdőben és a mellhártyán."
    },
    {
      id: "app_2",
      topic: "Actinobacillus pleuropneumoniae",
      type: "mcq",
      question: "Melyik toxin termelődik kizárólag in vivo (a szervezetben)?",
      options: ["ApxI", "ApxII", "ApxIII", "ApxIV"],
      correctAnswer: 3,
      explanation: "Az ApxIV minden törzsben jelen van, de csak fertőzés során termelődik, ezért kiváló diagnosztikai marker."
    },
    {
      id: "app_3",
      topic: "Actinobacillus pleuropneumoniae",
      type: "mcq",
      question: "Mit jelent a szatellita jelenség APP tenyésztésekor?",
      options: ["Űrhajók jelenlétét", "A baktérium csak egy másik baktérium (pl. Staph. aureus) közelében nő, amely NAD-ot termel", "Kék színt az agaron", "Gyors mozgást"],
      correctAnswer: 1,
      explanation: "Az 1-es biotípus NAD-dependens, így szüksége van egy dajkatenyészetre a növekedéshez."
    },
    {
      id: "app_4",
      topic: "Actinobacillus pleuropneumoniae",
      type: "mcq",
      question: "Melyik szerotípus vált jelentőssé Magyarországon a 2-es mellett az utóbbi években?",
      options: ["1-es", "13-as", "5-ös", "10-es"],
      correctAnswer: 1,
      explanation: "A 13-as szerotípus (biotípus 2) előfordulása kiugróan megemelkedett a hazai állományokban."
    },
    {
      id: "app_5",
      topic: "Actinobacillus pleuropneumoniae",
      type: "mcq",
      question: "Melyik tüdőlebeny dorzális része a leggyakoribb helye az elváltozásoknak?",
      options: ["Szívlebeny", "Rekeszlebeny", "Csúcslebeny", "Nincs ilyen"],
      correctAnswer: 1,
      explanation: "A rekeszlebenyek dorzális része az APP-ra jellemző predilekciós hely."
    },
    {
      id: "app_6",
      topic: "Actinobacillus pleuropneumoniae",
      type: "mcq",
      question: "Mi okozza a perakut esetben látható véres habot az orrnyílásoknál?",
      options: ["Orrvérzés", "A tüdőödéma és a vérzéses gyulladás váladéka", "Ételmaradék", "Fogínyvérzés"],
      correctAnswer: 1,
      explanation: "A rendkívül gyors tüdőkárosodás és ödéma miatt véres hab tör fel a légutakból."
    },
    {
      id: "app_7",
      topic: "Actinobacillus pleuropneumoniae",
      type: "mcq",
      question: "Mi a teendő a klinikailag beteg állatokkal az APP megjelenésekor?",
      options: ["Csak vízbe tett gyógyszer", "Azonnali egyedi parenterális (injekciós) kezelés", "Megvárni a vágóhidat", "Semmi"],
      correctAnswer: 1,
      explanation: "A toxinok perceken belül rombolnak, ezért a gyors egyedi kezelés elengedhetetlen a túléléshez."
    },
    {
      id: "app_8",
      topic: "Actinobacillus pleuropneumoniae",
      type: "mcq",
      question: "Melyik antibiotikum kiváló választás a metafilaxisra (állományszintű megelőzésre)?",
      options: ["Penicillin", "Tulathromycin", "Csak a vitamin", "Inzulin"],
      correctAnswer: 1,
      explanation: "A Tulathromycin hosszú ideig és magas koncentrációban van jelen a tüdőszövetben."
    },
    {
      id: "app_9",
      topic: "Actinobacillus pleuropneumoniae",
      type: "bool",
      question: "A toxoid vakcinák keresztvédelmet nyújthatnak különböző szerotípusok ellen.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, mert a közös toxinok (ApxI-III) ellen termelt ellenanyagok semlegesítik a különböző szerotípusok toxinjait."
    },
    {
      id: "app_10",
      topic: "Actinobacillus pleuropneumoniae",
      type: "mcq",
      question: "Mi a 'citokin vihar' lényege?",
      options: ["Nagy szél az istállóban", "A széteső sejtekből kiszabaduló gyulladásos mediátorok okozta kiterjedt szövetpusztulás", "Sok eső", "Áramszünet"],
      correctAnswer: 1,
      explanation: "A toxinok miatti lízis során felszabaduló anyagok felerősítik a gyulladást, ami elpusztítja a tüdőszövetet."
    },
    {
      id: "app_11",
      topic: "Actinobacillus pleuropneumoniae",
      type: "mcq",
      question: "Melyik antibiotikum tartozik a 'B' kategóriába (kritikusan fontos)?",
      options: ["Amoxicillin", "Ceftiofur", "Florfenikol", "Tiamulin"],
      correctAnswer: 1,
      explanation: "A 3. generációs cefalosporinok (Ceftiofur) használatát korlátozni kell a rezisztencia veszélye miatt."
    },
    {
      id: "app_12",
      topic: "Actinobacillus pleuropneumoniae",
      type: "mcq",
      question: "Hogyan terjed leginkább az APP?",
      options: ["Csak trágyával", "Cseppfertőzéssel és közvetlen érintkezéssel", "Csak szúnyogokkal", "Madarakkal"],
      correctAnswer: 1,
      explanation: "A baktérium cseppfertőzéssel, rövid távon terjed a levegőben vagy orr-orr kontaktussal."
    },
    {
      id: "app_13",
      topic: "Actinobacillus pleuropneumoniae",
      type: "mcq",
      question: "Miért fontos az All-in/All-out rendszer?",
      options: ["Hogy több hely legyen", "Megszakítja a fertőzési láncot a korcsoportok között", "Csak a takarítás miatt", "Divatos"],
      correctAnswer: 1,
      explanation: "Az elkülönített korcsoportok megakadályozzák, hogy az idősebb ürítők megfertőzzék a fiatalabbakat."
    },
    {
      id: "app_14",
      topic: "Actinobacillus pleuropneumoniae",
      type: "mcq",
      question: "Mi jellemző a krónikus APP esetekre?",
      options: ["Gyors hízás", "Tüdőtályogok és szívós mellhártya-összenövések", "Szőrhullás", "Süketség"],
      correctAnswer: 1,
      explanation: "A túlélő állatokban a gyulladásos gócok eltokolódnak és összenövéseket hagynak maguk után."
    },
    {
      id: "app_15",
      topic: "Actinobacillus pleuropneumoniae",
      type: "mcq",
      question: "Melyik állítás igaz a biofilmekre APP esetén?",
      options: ["Segítik a gyógyulást", "Növelik az antibiotikumokkal szembeni ellenállást és segítik a hordozást", "Ehetőek", "Nincs szerepük"],
      correctAnswer: 1,
      explanation: "A biofilm védi a baktériumokat a gyógyszerektől és az immunrendszertől is."
    },
    {
      id: "app_16",
      topic: "Actinobacillus pleuropneumoniae",
      type: "mcq",
      question: "Mikor kezdődik leggyakrabban a betegség endémiás állományban?",
      options: ["1 napos korban", "6–20 hetes korban (választás után, a passzív immunitás csökkenésekor)", "Csak kanokban", "Vemhesség végén"],
      correctAnswer: 1,
      explanation: "Amint az anyai ellenanyagok szintje lecsökken, a növendékek fogékonnyá válnak."
    },
    {
      id: "app_17",
      topic: "Actinobacillus pleuropneumoniae",
      type: "mcq",
      question: "Melyik antibiotikumra magas (>50%) a rezisztencia Magyarországon?",
      options: ["Florfenikol", "Tetraciklinek", "Ceftiofur", "Tiamulin"],
      correctAnswer: 1,
      explanation: "A tetraciklinek (pl. doxiciklin) ellen nagyon elterjedt a rezisztencia az APP törzsek körében."
    },
    {
      id: "app_18",
      topic: "Actinobacillus pleuropneumoniae",
      type: "mcq",
      question: "Hány biotípusa van az APP-nek?",
      options: ["1", "2 (NAD-dependens és NAD-independens)", "10", "19"],
      correctAnswer: 1,
      explanation: "Két biotípust különítünk el a NAD-igény alapján."
    },
    {
      id: "app_19",
      topic: "Actinobacillus pleuropneumoniae",
      type: "mcq",
      question: "Mit mutat ki az ApxIV ELISA?",
      options: ["Csak a vakcina ellenanyagot", "A fertőzöttséget (mivel csak élő állatban fertőzéskor termelődik)", "A takarmány minőségét", "Semmit"],
      correctAnswer: 1,
      explanation: "Mivel az ApxIV csak fertőzés során képződik, a jelenléte a fertőzöttséget (nem a vakcinázottságot) jelzi."
    },
    {
      id: "app_20",
      topic: "Actinobacillus pleuropneumoniae",
      type: "mcq",
      question: "Melyik hajlamosító tényező a legfontosabb az istállóban?",
      options: ["Sötétség", "Hirtelen hőmérséklet-ingadozás és rossz szellőzés", "A zene hiánya", "Sós nyalósó"],
      correctAnswer: 1,
      explanation: "A huzat, a hideg stressz és a rossz levegőminőség drasztikusan fokozza a kitörés esélyét."
    },
    {
      id: "app_21",
      topic: "Actinobacillus pleuropneumoniae",
      type: "mcq",
      question: "Melyik toxin erősen citotoxikus a makrofágokra, de nem hemolitikus?",
      options: ["ApxI", "ApxII", "ApxIII", "ApxIV"],
      correctAnswer: 2,
      explanation: "Az ApxIII speciálisan az immunsejteket (makrofágokat) pusztítja."
    },
    {
      id: "app_22",
      topic: "Actinobacillus pleuropneumoniae",
      type: "mcq",
      question: "Mit jelent a 'nekrózis'?",
      options: ["Gyógyulás", "Elhalás", "Szaporodás", "Mozgás"],
      correctAnswer: 1,
      explanation: "A nekrózis a szövetek visszafordíthatatlan pusztulását és elhalását jelenti."
    },
    {
      id: "app_23",
      topic: "Actinobacillus pleuropneumoniae",
      type: "mcq",
      question: "Melyik baktérium okozhat hasonló tüdőelváltozásokat, mint az APP?",
      options: ["E. coli", "Actinobacillus suis", "Salmonella", "Brucella"],
      correctAnswer: 1,
      explanation: "Az Actinobacillus suis is okozhat vérzéses-nekrotizáló tüdőgyulladást, de általában szeptikémiásabb jellegű."
    },
    {
      id: "app_24",
      topic: "Actinobacillus pleuropneumoniae",
      type: "mcq",
      question: "Milyen az APP-s tüdő metszéslapja heveny esetben?",
      options: ["Vizes, sárga", "Száraz, törékeny, sötétvörös", "Zöldes, büdös", "Nincs metszéslapja"],
      correctAnswer: 1,
      explanation: "A vérzéses és elhalt területek szárazabb tapintatúak és sötétvörösek."
    },
    {
      id: "app_25",
      topic: "Actinobacillus pleuropneumoniae",
      type: "mcq",
      question: "Mi a transzferrin-kötő fehérjék szerepe?",
      options: ["A baktérium mozgása", "Vasfelvétel a gazdaszervezetből", "A cukor lebontása", "Feleslegesek"],
      correctAnswer: 1,
      explanation: "A baktériumnak vasra van szüksége a szaporodáshoz, amit ezekkel a fehérjékkel szerez meg."
    },
    {
      id: "app_26",
      topic: "Actinobacillus pleuropneumoniae",
      type: "mcq",
      question: "Hogyan diagnosztizálható a szerotípus leggyorsabban?",
      options: ["Szaglással", "Molekuláris módszerekkel (PCR a cps génekre)", "Szemrevételezéssel", "Megkérdezve a gazdát"],
      correctAnswer: 1,
      explanation: "A tok-specifikus gének PCR alapú azonosítása a legmodernebb módszer."
    },
    {
      id: "app_27",
      topic: "Actinobacillus pleuropneumoniae",
      type: "mcq",
      question: "Mit jelent az MDR?",
      options: ["Minden Dokumentum Rendben", "Multirezisztencia (több antibiotikum-csoporttal szembeni ellenállás)", "Magyar Diagnosztikai Rendszer", "Sok malac"],
      correctAnswer: 1,
      explanation: "Az MDR törzsek kezelése rendkívül nehéz, mert alig marad hatékony gyógyszer ellenük."
    },
    {
      id: "app_28",
      topic: "Actinobacillus pleuropneumoniae",
      type: "mcq",
      question: "Mit jelent a 'fibrin szervülése' krónikus esetben?",
      options: ["Eltűnik a fibrin", "A fibrin helyét kötőszövet veszi át, ami összenövést okoz", "Elfogy a malac", "Sárga lesz a tüdő"],
      correctAnswer: 1,
      explanation: "A gyulladásos izzadmány (fibrin) hegszövetté alakul, fixálva a tüdőt a mellkasfalhoz."
    },
    {
      id: "app_29",
      topic: "Actinobacillus pleuropneumoniae",
      type: "mcq",
      question: "Milyen a tüdő felszíne APP-nál?",
      options: ["Fényes, sima", "Fibrinlepedékkel fedett, borzas", "Daganatos", "Tiszta"],
      correctAnswer: 1,
      explanation: "A mellhártyagyulladás miatt a tüdő felszínét szürkés-sárgás fibrinlepedék borítja."
    },
    {
      id: "app_30",
      topic: "Actinobacillus pleuropneumoniae",
      type: "mcq",
      question: "Mi az összefoglalás lényege az APP-nál?",
      options: ["Nem jelentős", "Súlyos, rendkívül ragályos betegség, ahol a gyors kezelés és a vakcinázás a védekezés alapja", "Csak hordozó malacokban van", "Mindig gyógyul"],
      correctAnswer: 1,
      explanation: "Az APP a világ egyik legjelentősebb sertésbetegsége, komoly gazdasági kockázattal."
    }
  ]
};
