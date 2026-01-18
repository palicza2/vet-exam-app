export const ecoliOdemaExpecData = {
  id: "ecoli_odema_expec",
  title: "6. Ödémabetegség és ExPEC fertőzések",
  studyMaterial: [
    {
      "title": "1. Ödémabetegség (STEC/VTEC)",
      "icon": "alert-circle",
      "color": "bg-red-50 border-red-200",
      "iconColor": "text-red-500",
      "sections": [
        {
          "header": "1.1. Kóroktan és Patogenezis",
          "points": [
            "**Kórokozó:** Shiga toxin 2e (**Stx2e**) termelő E. coli törzsek",
            "**Tapadás:** Felszínükön **F18 fimbria** található",
            "**Életkor:** Főleg választás után (3–5 hetes kor), mert ekkor jelennek meg az F18 receptorok!",
            "**Hatás:** A toxin károsítja az endothelsejteket → fibrinoid nekrózis az érfalban → fokozott érpermeabilitás → **ödéma**"
          ]
        },
        {
          "header": "1.2. Klinikai tünetek",
          "points": [
            "Gyakran a **legjobban fejlett** malacokban jelentkezik",
            "**Szemhéjödéma**, vizenyő az orrháton és gégetájon",
            "Idegrendszeri tünetek: tántorgás, bénulás, görcsök, rekedt visítás (gégeödéma miatt)",
            "Elhullás 6–24 órán belül (légzés- és keringésleállás)"
          ]
        },
        {
          "header": "1.3. Kórbonctan",
          "points": [
            "Ödéma a szemhéjak alatt, a gége körül és a vastagbélfodrokban",
            "**Gyomor:** Ödéma a submucosában (nagyon jellegzetes!)",
            "**Agy:** Agytörzsi lágyulás és elhalás"
          ]
        }
      ]
    },
    {
      "title": "2. ExPEC (Bélcsatornán kívüli) fertőzések",
      "icon": "shield-alert",
      "color": "bg-orange-50 border-orange-200",
      "iconColor": "text-orange-600",
      "sections": [
        {
          "header": "2.1. Bejutási kapuk",
          "points": [
            "**Köldökcsonk:** Ha nem fertőtlenítik megfelelően",
            "**Bőrsérülések:** Fogcsiszolás, farokkurtítás, kasztrálás",
            "**Hajlamosítás:** Kolosztrumhiány, lehűlés, rossz higiénia"
          ]
        },
        {
          "header": "2.2. Kórformák",
          "points": [
            "**Coliseptikémia:** 1–4 napos korban; hirtelen rossz állapot, láz/sokk, gyors elhullás",
            "**Polyarthritis:** Gennyes ízületgyulladás, sántaság, duzzanat",
            "**Meningitis:** Agyhártyagyulladás (fejoldaltartás, görcsök)",
            "**Köldöktályog:** A köldök felől felszálló fertőzés"
          ]
        }
      ]
    },
    {
      "title": "3. Diagnózis és Megelőzés",
      "icon": "search",
      "color": "bg-slate-50 border-slate-200",
      "iconColor": "text-slate-500",
      "sections": [
        {
          "header": "3.1. Labor",
          "points": [
            "Tenyésztés: Az ödémabetegség törzsei többnyire **hemolizálnak**",
            "**PCR:** stx2e toxin és F18 fimbria gén kimutatása"
          ]
        },
        {
          "header": "3.2. Megelőzés",
          "points": [
            "**Vakcinázás:** Shiga-toxin semlegesítő toxoiddal (választás előtt)",
            "**Menedzsment:** Fokozatos takarmányváltás, alacsonyabb fehérjebevitel választáskor, köldökfertőtlenítés"
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "odema_1",
      topic: "Ödémabetegség",
      type: "mcq",
      question: "Melyik toxin felelős az ödémabetegség kialakulásáért?",
      options: ["Labilis toxin (LT)", "Shiga toxin 2e (Stx2e)", "Béta-toxin", "Endotoxin"],
      correctAnswer: 1,
      explanation: "Az Stx2e toxin károsítja az érfalakat, ami ödémához vezet."
    },
    {
      id: "odema_2",
      topic: "Ödémabetegség",
      type: "mcq",
      question: "Melyik fimbria jellemző az ödémabetegséget okozó E. coli törzsekre?",
      options: ["F4", "F5", "F18", "F41"],
      correctAnswer: 2,
      explanation: "Az ödémabetegség törzsei szinte mindig F18 fimbriával rendelkeznek."
    },
    {
      id: "odema_3",
      topic: "Ödémabetegség",
      type: "mcq",
      question: "Miért 3-5 hetes korban jelentkezik leggyakrabban az ödémabetegség?",
      options: ["Mert akkor fáznak a malacok", "Mert ekkor jelennek meg az F18 receptorok a bélhámsejteken", "Mert akkor kapnak oltást", "Mert akkor kezdődik a tavasz"],
      correctAnswer: 1,
      explanation: "A receptorok hiánya miatt a fiatalabb malacok ellenállóak az F18-as törzsekkel szemben."
    },
    {
      id: "odema_4",
      topic: "Ödémabetegség",
      type: "mcq",
      question: "Mi a Shiga-toxin hatásmechanizmusa?",
      options: ["Csökkenti a vércukrot", "Károsítja az érfal endothelsejtjeit", "Bénítja az izmokat", "Roncsolja a vörösvértesteket"],
      correctAnswer: 1,
      explanation: "Az érfal károsodása miatt nő az áteresztőképesség, és folyadék lép ki a szövetekbe (ödéma)."
    },
    {
      id: "odema_5",
      topic: "Ödémabetegség",
      type: "mcq",
      question: "Melyik állatcsoportot érinti leggyakrabban az ödémabetegség?",
      options: ["Az elhanyagolt, beteges malacokat", "A legjobban fejlett, sokat evő malacokat", "Csak a kanokat", "Az anyakocákat"],
      correctAnswer: 1,
      explanation: "A nagy mennyiségű tápanyagfelvétel (stressz/hirtelen váltás) kedvez a baktériumok elszaporodásának."
    },
    {
      id: "odema_6",
      topic: "Ödémabetegség",
      type: "mcq",
      question: "Mi a rekedt visítás oka ödémabetegségben?",
      options: ["Torokfájás", "Gégeödéma", "Félelem", "Sérülés"],
      correctAnswer: 1,
      explanation: "A gége körüli szövetek vizenyője megváltoztatja a hangképzést."
    },
    {
      id: "odema_7",
      topic: "Ödémabetegség",
      type: "mcq",
      question: "Melyik szerv submucosájának ödémája diagnosztikai értékű?",
      options: ["Máj", "Gyomor", "Lép", "Vese"],
      correctAnswer: 1,
      explanation: "A gyomorfal (submucosa) üvegszerű megvastagodása (ödémája) típusos lelet."
    },
    {
      id: "odema_8",
      topic: "Ödémabetegség",
      type: "mcq",
      question: "Melyik gén kimutatása igazolja a Shiga-toxint laborban?",
      options: ["stx2e", "tetO", "blaZ", "mecA"],
      correctAnswer: 0,
      explanation: "Az stx2e gén jelenléte igazolja, hogy a törzs képes a toxin termelésére."
    },
    {
      id: "odema_9",
      topic: "Ödémabetegség",
      type: "mcq",
      question: "Mivel lehet hatékonyan megelőzni az ödémabetegséget?",
      options: ["Toxoid vakcinával", "Sok vitaminnal", "Sötét óllal", "Nincs rá mód"],
      correctAnswer: 0,
      explanation: "A modern toxoid vakcinák semlegesítik a felszívódott toxint."
    },
    {
      id: "odema_10",
      topic: "Ödémabetegség",
      type: "mcq",
      question: "Melyik testtájon látható leggyakrabban ödéma?",
      options: ["Csak a lábakon", "Szemhéjakon és az orrháton", "A farkon", "A körmökön"],
      correctAnswer: 1,
      explanation: "A fej tájékán kialakuló vizenyő nagyon jellegzetes tünet."
    },
    {
      id: "expec_1",
      topic: "ExPEC",
      type: "mcq",
      question: "Mit jelent az ExPEC rövidítés?",
      options: ["Extra Erős Coli", "Extraintestinalis patogén E. coli (bélcsatornán kívüli)", "Exogén Pathogén", "Nincs jelentése"],
      correctAnswer: 1,
      explanation: "Olyan törzsek, amelyek a bélcsatornán kívül (véráram, szervek) okoznak betegséget."
    },
    {
      id: "expec_2",
      topic: "ExPEC",
      type: "mcq",
      question: "Melyik a coliseptikémia legfontosabb bejutási kapuja újszülöttekben?",
      options: ["Száj", "Köldökcsonk", "Fül", "Szem"],
      correctAnswer: 1,
      explanation: "A nem megfelelően kezelt köldökcsonk közvetlen utat nyit a véráramba."
    },
    {
      id: "expec_3",
      topic: "ExPEC",
      type: "mcq",
      question: "Melyik életkorra jellemző a coliseptikémia?",
      options: ["1-4 napos kor", "Hízó kor", "Választás után", "Koca kor"],
      correctAnswer: 0,
      explanation: "A legfiatalabb, gyenge immunvédekezésű malacok a legfogékonyabbak."
    },
    {
      id: "expec_4",
      topic: "ExPEC",
      type: "mcq",
      question: "Mit okozhat az ExPEC az ízületekben?",
      options: ["Csonttörést", "Gennyes polyarthritist (több ízület gyulladása)", "Izomsorvadást", "Semmit"],
      correctAnswer: 1,
      explanation: "A véráram útján eljutó baktériumok több ízületben is gyulladást okozhatnak."
    },
    {
      id: "expec_5",
      topic: "ExPEC",
      type: "mcq",
      question: "Mit okozhat az ExPEC az agyban?",
      options: ["Agydaganatot", "Gennyes meningitist (agyhártyagyulladás)", "Látásjavulást", "Semmit"],
      correctAnswer: 1,
      explanation: "A szeptikémia szövődményeként átjuthatnak a vér-agy gáton is."
    },
    {
      id: "expec_6",
      topic: "ExPEC",
      type: "mcq",
      question: "Mi a teendő a köldökcsonkkal születés után?",
      options: ["Békén hagyni", "Fertőtleníteni (pl. jódoldattal)", "Leragasztani", "Bebútyölni"],
      correctAnswer: 1,
      explanation: "A helyi fertőtlenítés megakadályozza a baktériumok felszálló fertőzését."
    },
    {
      id: "expec_7",
      topic: "ExPEC",
      type: "bool",
      question: "Az ExPEC fertőzések gyakran a rossz higiénia és a kolosztrumhiány következményei.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, ezek a legfontosabb hajlamosító tényezők."
    },
    {
      id: "expec_8",
      topic: "ExPEC",
      type: "mcq",
      question: "Milyen antibiotikum javasolt szeptikémia esetén?",
      options: ["Széles spektrumú, baktericid szer (pl. amoxicillin, ceftiofur)", "Csak vitamin", "Semmilyen", "Féreghajtó"],
      correctAnswer: 0,
      explanation: "A gyors és hatékony antibiotikumos beavatkozás életmentő lehet."
    },
    {
      id: "expec_9",
      topic: "ExPEC",
      type: "mcq",
      question: "Milyen kiegészítő kezelés javasolt szeptikémia esetén?",
      options: ["Csak víz", "NSAID (gyulladáscsökkentő) és folyadékpótlás", "Sötét szoba", "Napsütés"],
      correctAnswer: 1,
      explanation: "Az endotoxin-hatás mérséklése és a hidratálás segíti a gyógyulást."
    },
    {
      id: "expec_10",
      topic: "ExPEC",
      type: "mcq",
      question: "Mit jelent a 'polyarthritis'?",
      options: ["Ízületi ficam", "Több ízület egyidejű gyulladása", "Duzzadt has", "Láz"],
      correctAnswer: 1,
      explanation: "Szeptikémiánál jellemző, hogy nem csak egy, hanem több ízület is érintett."
    },
    {
      id: "extra_1",
      topic: "E. coli",
      type: "mcq",
      question: "Melyik patotípus tapad az intimin fehérjével?",
      options: ["ETEC", "EPEC", "ExPEC", "STEC"],
      correctAnswer: 1,
      explanation: "Az EPEC (Enteropatogén) törzsek jellemzője az intimin alapú tapadás."
    },
    {
      id: "extra_2",
      topic: "E. coli",
      type: "mcq",
      question: "Milyen a Shiga-toxin génje (stx2e) által kódolt toxin hatása?",
      options: ["Csak hasmenés", "Endothelkárosodás és fehérjeszintézis-gátlás", "Lázkeltés", "Semmi"],
      correctAnswer: 1,
      explanation: "A toxin a sejtek fehérjeszintézisét blokkolja, ami a sejt pusztulásához vezet."
    },
    {
      id: "extra_3",
      topic: "E. coli",
      type: "mcq",
      question: "Melyik belső szerv gyulladását okozhatja még az ExPEC?",
      options: ["Csak a bél", "Tőgy (mastitis) és méh (endometritis)", "Szem", "Köröm"],
      correctAnswer: 1,
      explanation: "A bélből kijutva bárhol gennyes gyulladást okozhat a szervezetben."
    },
    {
      id: "extra_4",
      topic: "E. coli",
      type: "mcq",
      question: "Mit jelent a 'fibrinoid nekrózis'?",
      options: ["Csonttörés", "Az érfal elhalása és fibrinkicsapódás", "Vírusfertőzés", "Megfázás"],
      correctAnswer: 1,
      explanation: "Az ödémabetegségre jellemző érkárosodás szövettani megnevezése."
    },
    {
      id: "extra_5",
      topic: "E. coli",
      type: "mcq",
      question: "Milyen vizit mutat a malac ödémabetegségben?",
      options: ["Vidám", "Rekedt", "Hangos", "Nem visít"],
      correctAnswer: 1,
      explanation: "A gége ödémája miatt a visítás rekedtté válik."
    }
  ]
};
