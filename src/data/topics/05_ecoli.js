export const ecoliData = {
  id: "ecoli",
  title: "5. Escherichia coli megbetegedések",
  studyMaterial: [
    {
      title: "1. A Kórokozó és Patotípusok",
      icon: "microscope",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-500",
      sections: [
        {
          header: "Escherichia coli",
          points: [
            "**Gram-negatív**, pálca alakú baktérium, a bélflóra normális tagja is lehet.",
            "**ETEC (Enterotoxint termelő):** Hasmenést okoz újszülött és választott malacokban.",
            "**EPEC (Enteropatogén):** Tapadásával károsítja a bélbolyhokat (AEEC - attaching-and-effacing).",
            "**VTEC / EDEC (Verotoxint termelő):** Az ödémabetegség okozója.",
            "**ExPEC:** Bélcsatornán kívüli fertőzések (szepszis)."
          ]
        }
      ]
    },
    {
      title: "2. Virulenciafaktorok",
      icon: "bug",
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-500",
      sections: [
        {
          header: "Adhéziós faktorok (Fimbriák)",
          points: [
            "A bélfalhoz való tapadást biztosítják.",
            "**Újszülöttekben:** F4 (K88), F5 (K99), F6 (987P), F41.",
            "**Választott malacokban:** F18 (fontos az ödémabetegségnél és PWD-nél is)."
          ]
        },
        {
          header: "Toxinok",
          points: [
            "**LT (Hőlabilis toxin):** cAMP szintet emel, szekréciós hasmenést okoz.",
            "**STa, STb (Hőstabil toxinok):** cGMP szintet emelnek vagy Ca-felszabadulást okoznak.",
            "**Stx2e (Shiga-toxin / Verotoxin):** Az érfalakat károsítja (fibrinoid nekrózis) -> ödémabetegség."
          ]
        }
      ]
    },
    {
      title: "3. Klinikai Megjelenési Formák",
      icon: "activity",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-500",
      sections: [
        {
          header: "Hasmenéses kórképek",
          points: [
            "**Újszülöttkori colibacillosis (1-4 nap):** Hirtelen fellépő, nagy mennyiségű vízszerű hasmenés, gyors kiszáradás.",
            "**Szopós malacok hasmenése:** 5 napos kortól választásig. Gyakran kevert fertőzés (rotavírus, coccidium).",
            "**Választás utáni hasmenés (PWD):** Stressz és takarmányváltás után. Folyadékvesztés, néha vérzés nélkül."
          ]
        },
        {
          header: "Ödémabetegség (EDEC)",
          points: [
            "**Időpont:** Választás után 1-2 héttel, gyors növekedési szakaszban.",
            "**Tünetek:** Hirtelen neurológiai jelek (ataxia, bénulás), rekedt hang (gégeödéma).",
            "**Külső jelek:** **Duzzadt arc, szemhéjak és orrhát**.",
            "**Kimenetel:** Gyors elhullás (fulladás).",
            "**Kórbonctan:** Gyomorfal ödémája, agytörzsi kiserek károsodása."
          ]
        }
      ]
    },
    {
      title: "4. Diagnózis",
      icon: "stethoscope",
      color: "bg-amber-50 border-amber-200",
      iconColor: "text-amber-600",
      sections: [
        {
          header: "Kórbonctan és Labor",
          points: [
            "**Boncolás:** Hasmenésnél telt bélkapillárisok, híg béltartalom, ép bélbolyhok (ETEC).",
            "**Ödémabetegség:** Gyomorfal ödéma, agyi érkárosodás.",
            "**Tenyésztés:** Aerob, gyakran hemolizáló telepek véres agaron.",
            "**Tipizálás:** Fimbria- és toxinantigének kimutatása (ELISA, PCR)."
          ]
        }
      ]
    },
    {
      title: "5. Kezelés és Megelőzés",
      icon: "syringe",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
      sections: [
        {
          header: "Terápia",
          points: [
            "**Folyadékpótlás:** Elektrolitok (szájon át vagy infúzió) kulcsfontosságú.",
            "**Antibiotikum:** Érzékenységi vizsgálat alapján! (ESBL veszély).",
            "**Takarmány:** Rost növelése, fehérje csökkentése választáskor."
          ]
        },
        {
          header: "Megelőzés",
          points: [
            "**Vakcinázás:** Kocák oltása (vemhesség végén) -> kolosztrális védelem (F4, F5, F6, F41).",
            "**Malacok oltása:** Szájon át adható élő (toxin-inaktivált) vakcinák (F4, F18).",
            "**Genetika:** Receptor-negatív sertésvonalak tenyésztése (rezisztencia az F4/F18-ra).",
            "**Adalékok:** Probiotikumok, szerves savak, cink-oxid (ZnO - bár alkalmazása korlátozott)."
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "ecoli_1",
      topic: "E. coli - Általános",
      type: "mcq",
      question: "Milyen Gram-festődésű és alakú az E. coli?",
      options: ["Gram-pozitív coccus", "Gram-negatív pálca", "Gram-pozitív pálca", "Gram-negatív coccus"],
      correctAnswer: 1,
      explanation: "Az E. coli egy Gram-negatív pálca alakú baktérium."
    },
    {
      id: "ecoli_2",
      topic: "E. coli - Virulencia",
      type: "mcq",
      question: "Melyik fimbria antigén fontos a választás utáni malacoknál?",
      options: ["F5 (K99)", "F6 (987P)", "F18", "F41"],
      correctAnswer: 2,
      explanation: "Választás után az F18 fimbria válik jelentőssé a megtapadásban."
    },
    {
      id: "ecoli_3",
      topic: "E. coli - Hasmenés",
      type: "mcq",
      question: "Mi jellemzi az ETEC okozta hasmenés mechanizmusát?",
      options: ["Bélbolyhok elpusztítása", "Szekréciós hasmenés (ion- és vízvesztés a toxinok miatt)", "Bélfal kilyukadása", "Vérzéses gyulladás"],
      correctAnswer: 1,
      explanation: "Az ETEC toxinok (LT, ST) az ioncsatornák zavarával szekréciós (vizes) hasmenést okoznak."
    },
    {
      id: "ecoli_4",
      topic: "E. coli - Ödémabetegség",
      type: "mcq",
      question: "Melyik toxin felelős az ödémabetegség kialakulásáért?",
      options: ["LT (Hőlabilis toxin)", "STa (Hőstabil toxin)", "Stx2e (Shiga-toxin / Verotoxin)", "Béta-toxin"],
      correctAnswer: 2,
      explanation: "Az ödémabetegséget a Shiga-toxin (Stx2e) érkárosító hatása okozza."
    },
    {
      id: "ecoli_5",
      topic: "E. coli - Ödémabetegség",
      type: "mcq",
      question: "Melyik klinikai tünet jellemző az ödémabetegségre?",
      options: ["Véres hasmenés", "Duzzadt arc és szemhéjak", "Folyamatos köhögés", "Sántaság"],
      correctAnswer: 1,
      explanation: "Az arc és szemhéj ödémája az ödémabetegség klasszikus tünete."
    },
    {
      id: "ecoli_6",
      topic: "E. coli - Diagnózis",
      type: "bool",
      question: "Az ETEC-fertőzés során a bélbolyhok súlyosan károsodnak és elpusztulnak.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis. Az ETEC-nél a bélbolyhok épek maradnak, a hasmenés funkcionális (toxin-mediált)."
    },
    {
      id: "ecoli_7",
      topic: "E. coli - Megelőzés",
      type: "mcq",
      question: "Hogyan kapják meg a védelmet az újszülött malacok a koca vakcinázása után?",
      options: ["Méhlepényen át", "A föcstejjel (kolosztrális immunitás)", "A koca nyálával", "Közvetlen érintkezéssel"],
      correctAnswer: 1,
      explanation: "A koca vemhesség végi vakcinázása ellenanyagokat juttat a kolosztrumba."
    },
    {
      id: "ecoli_8",
      topic: "E. coli - Megelőzés",
      type: "mcq",
      question: "Mit jelent a genetikai rezisztencia az E. coli esetében?",
      options: ["A sertés nem eszi meg a baktériumot", "A bélhámsejtekből hiányoznak a fimbria-receptorok", "A sertésnek több gyomorsava van", "A sertés gyorsabban fut"],
      correctAnswer: 1,
      explanation: "Egyes sertésvonalak nem rendelkeznek az F4 vagy F18 receptorokkal, így a baktérium nem tud megtapadni."
    },
    {
      id: "ecoli_9",
      topic: "E. coli - Ödémabetegség",
      type: "mcq",
      question: "Milyen jellegzetes tünet utal a gége ödémájára ödémabetegségben?",
      options: ["Hányás", "Rekedt hangú visítás", "Tüsszögés", "Nyelési nehézség"],
      correctAnswer: 1,
      explanation: "A gége ödémája miatt a malacok hangja rekedtté válik."
    },
    {
      id: "ecoli_10",
      topic: "E. coli - Terápia",
      type: "mcq",
      question: "Mi a legfontosabb tennivaló súlyos hasmenéses malacoknál?",
      options: ["Csak antibiotikum adása", "Folyadék- és elektrolitpótlás", "Elválasztás az anyjától", "Hideg fürdő"],
      correctAnswer: 1,
      explanation: "A kiszáradás megelőzése és kezelése (elektrolitok) életmentő."
    },
    {
      id: "ecoli_11",
      topic: "E. coli - Általános",
      type: "mcq",
      question: "Melyik patotípus felelős az 'AEEC' elváltozásért?",
      options: ["ETEC", "EPEC", "ExPEC", "VTEC"],
      correctAnswer: 1,
      explanation: "Az EPEC (enteropatogén) törzsek okozzák az attaching-and-effacing (tapadás és letörlés) elváltozást."
    },
    {
      id: "ecoli_12",
      topic: "E. coli - Megelőzés",
      type: "mcq",
      question: "Melyik fimbria antigén jelenléte utalhat arra, hogy a koca vakcinázása elmaradt?",
      options: ["F5 (K99)", "F18", "AIDA", "eae"],
      correctAnswer: 0,
      explanation: "Az F5 (K99) elleni védelem alapvető a kereskedelmi koca-vakcinákban."
    },
    {
      id: "ecoli_13",
      topic: "E. coli - Diagnózis",
      type: "bool",
      question: "A legtöbb patogén E. coli törzs véres agaron hemolizál.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. A virulens törzsek (különösen az F4-pozitívak) gyakran mutatnak hemolízist."
    },
    {
      id: "ecoli_14",
      topic: "E. coli - Ödémabetegség",
      type: "mcq",
      question: "Hol okozza a legnagyobb kárt a Shiga-toxin az ödémabetegség során?",
      options: ["Májsejtekben", "A kisartériák falában (fibrinoid nekrózis)", "Izomszövetben", "Csontvelőben"],
      correctAnswer: 1,
      explanation: "A toxin az érfalak endotheljét károsítja, ami ödémához és elhaláshoz vezet."
    },
    {
      id: "ecoli_15",
      topic: "E. coli - Terápia",
      type: "mcq",
      question: "Miért javasolt a takarmány fehérjetartalmának csökkentése választáskor?",
      options: ["Mert túl drága", "Mert a felesleges fehérje kedvez a patogén E. coli szaporodásának", "Mert a malac nem szereti", "Hogy több rostot egyen"],
      correctAnswer: 1,
      explanation: "A magas fehérjetartalom kedvez a baktériumok elszaporodásának a bélben."
    },
    {
      id: "ecoli_16",
      topic: "E. coli - Általános",
      type: "mcq",
      question: "Melyik korcsoportban fordul elő a PWD (post-weaning diarrhea)?",
      options: ["Újszülöttek", "Választás utáni malacok", "Kocák", "Kanok"],
      correctAnswer: 1,
      explanation: "PWD = Választás utáni hasmenés."
    },
    {
      id: "ecoli_17",
      topic: "E. coli - Virulencia",
      type: "mcq",
      question: "Hogyan hat az LT toxin a sejtben?",
      options: ["Gátolja a fehérjeszintézist", "Emeli a cAMP szintet", "Roncsolja a sejtmagot", "Bénítja az izmokat"],
      correctAnswer: 1,
      explanation: "Az LT toxin az adenilát-cikláz stimulálásával cAMP növekedést okoz."
    },
    {
      id: "ecoli_18",
      topic: "E. coli - Ödémabetegség",
      type: "mcq",
      question: "Milyen neurológiai tünet jellemző az ödémabetegségre?",
      options: ["Túlzott éberség", "Ataxia (mozgászavar), paresis és bénulás", "Szemtengelyferdülés", "Csuklás"],
      correctAnswer: 1,
      explanation: "Az agyi ödéma és érkárosodás súlyos mozgáskoordinációs zavarokat okoz."
    },
    {
      id: "ecoli_19",
      topic: "E. coli - Diagnózis",
      type: "mcq",
      question: "Melyik baktériumot kell elkülöníteni (differenciál diagnózis) hasmenés esetén?",
      options: ["Salmonella", "Rotavírus", "Coccidium", "Mindhármat"],
      correctAnswer: 3,
      explanation: "A hasmenésnek számos kórokozója lehet, amelyeket laboratóriumi úton kell elkülöníteni."
    },
    {
      id: "ecoli_20",
      topic: "E. coli - Megelőzés",
      type: "mcq",
      question: "Mit jelent a 'kompetitív kizárás' a vakcinázásnál?",
      options: ["A baktériumok birkóznak", "A vakcinatörzs elfoglalja a receptorokat a vad törzsek elől", "A sertés nem engedi be a baktériumot", "A koca elűzi a malacot"],
      correctAnswer: 1,
      explanation: "Az élő vakcina megtapad a bélfalon, így a patogén törzsek nem találnak szabad kötőhelyet."
    },
    {
      id: "ecoli_21",
      topic: "E. coli - Általános",
      type: "mcq",
      question: "Melyik szervrendszert érinti az ExPEC (Extraintestinal Pathogenic E. coli)?",
      options: ["Csak a bélcsatornát", "Bélcsatornán kívüli szerveket (pl. tüdő, agyhártya, vese, véráram)", "Csak a bőrt", "Csak a patákat"],
      correctAnswer: 1,
      explanation: "Az ExPEC törzsek szepszist, meningitiszt vagy húgyúti fertőzéseket okoznak a bélen kívül."
    },
    {
      id: "ecoli_22",
      topic: "E. coli - Ödémabetegség",
      type: "mcq",
      question: "Mi a Shiga-toxin receptorának neve a sertés ereiben?",
      options: ["CD4", "Gb3 (vagy Gb4)", "ACE2", "Glükóz-receptor"],
      correctAnswer: 1,
      explanation: "A toxin a glikoszfingolipid receptorokhoz (Gb3/Gb4) kötődik az érfal sejtjein."
    },
    {
      id: "ecoli_23",
      topic: "E. coli - Hasmenés",
      type: "bool",
      question: "A hőlabilis toxin (LT) szerkezetileg és hatásában hasonlít a kolera-toxinhoz.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Mindkettő AB5 típusú toxin és az adenilát-cikláz aktiválásával okoz hasmenést."
    },
    {
      id: "ecoli_24",
      topic: "E. coli - Ödémabetegség",
      type: "mcq",
      question: "Melyik korosztályban a LEGGYAKORIBB az ödémabetegség?",
      options: ["1 napos malacok", "Választás után 1-2 héttel", "Felnőtt kocák", "Vágásérett hízók"],
      correctAnswer: 1,
      explanation: "Az ödémabetegség tipikusan a választás körüli időszak betegsége."
    },
    {
      id: "ecoli_25",
      topic: "E. coli - Diagnózis",
      type: "mcq",
      question: "Milyen pH jellemző az E. coli okozta hasmenéses béltartalomra?",
      options: ["Erősen savas", "Lúgos (alkalikus)", "Semleges", "Nincs pH-ja"],
      correctAnswer: 1,
      explanation: "A szekréciós hasmenésnél a béltartalom általában lúgos (ellentétben a vírusos hasmenéssel)."
    },
    {
      id: "ecoli_26",
      topic: "E. coli - Általános",
      type: "mcq",
      question: "Melyik családba tartozik az Escherichia coli?",
      options: ["Pasteurellaceae", "Enterobacteriaceae", "Bacillaceae", "Clostridiaceae"],
      correctAnswer: 1,
      explanation: "Az E. coli az Enterobacteriaceae család tagja."
    },
    {
      id: "ecoli_27",
      topic: "E. coli - Virulencia",
      type: "mcq",
      question: "Melyik antigén felelős a baktérium csillójáért (H-antigén)?",
      options: ["O-antigén", "K-antigén", "H-antigén", "F-antigén"],
      correctAnswer: 2,
      explanation: "A H-antigén a baktérium ostorát (flagellum) alkotó fehérje."
    },
    {
      id: "ecoli_28",
      topic: "E. coli - Virulencia",
      type: "bool",
      question: "Az O-antigén a baktérium külső membránjában lévő lipopoliszacharid (LPS).",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Ez az endotoxin részét képező szomatikus antigén."
    },
    {
      id: "ecoli_29",
      topic: "E. coli - Hasmenés",
      type: "mcq",
      question: "Hogyan hat az STa toxin a bélsejtekben?",
      options: ["cAMP szintet emel", "cGMP szintet emel", "Bénítja az izmokat", "Roncsolja a sejtmagot"],
      correctAnswer: 1,
      explanation: "Az STa hőstabil toxin a cGMP szint emelésével okoz hasmenést."
    },
    {
      id: "ecoli_30",
      topic: "E. coli - Hasmenés",
      type: "mcq",
      question: "Milyen állapotot okoz a gyors folyadékvesztés malacokban?",
      options: ["Lázat", "Exsiccosis (kiszáradás)", "Elhízást", "Bőrpírt"],
      correctAnswer: 1,
      explanation: "A nagy mennyiségű vízvesztés miatt a malacok szeme beesik, bőrük rugalmatlan lesz (kiszáradás)."
    },
    {
      id: "ecoli_31",
      topic: "E. coli - Ödémabetegség",
      type: "mcq",
      question: "Miért 'jó kondíciójú' malacoknál jelentkezik leggyakrabban az ödémabetegség?",
      options: ["Mert ők esznek a legtöbbet, így több baktérium és toxin jut be", "Mert nekik gyengébb a szívük", "Mert ők többet mozognak", "Nincs ilyen összefüggés"],
      correctAnswer: 0,
      explanation: "A bőséges takarmányfelvétel kedvez az E. coli gyors elszaporodásának a bélben."
    },
    {
      id: "ecoli_32",
      topic: "E. coli - Általános",
      type: "bool",
      question: "Az E. coli képes a laktóz fermentálására.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Ez fontos bélyeg a laboratóriumi azonosítás során."
    },
    {
      id: "ecoli_33",
      topic: "E. coli - Ödémabetegség",
      type: "mcq",
      question: "Hol látható a legkifejezettebb ödéma a boncoláskor ödémabetegségben?",
      options: ["A tüdőben", "A gyomor falában (curvatura major)", "A lábakon", "A májban"],
      correctAnswer: 1,
      explanation: "A gyomorfal (cardia tájék) ödémája klasszikus kórbonctani elváltozás."
    },
    {
      id: "ecoli_34",
      topic: "E. coli - Diagnózis",
      type: "mcq",
      question: "Milyen táptalajon mutatnak az E. coli telepek jellegzetes metálfényű csillogást?",
      options: ["Véragar", "EMB agar (eozin-metilénkék)", "McConkey agar", "S-S agar"],
      correctAnswer: 1,
      explanation: "Az EMB agaron az erős savtermelés miatt fémes zöld csillogás látható."
    },
    {
      id: "ecoli_35",
      topic: "E. coli - Megelőzés",
      type: "mcq",
      question: "Mi a célja a szerves savak (pl. tejsav, hangyasav) ivóvízbe adagolásának?",
      options: ["A víz ízesítése", "A pH csökkentése, ami gátolja az E. coli szaporodását", "Vitaminpótlás", "A malacok nyugtatása"],
      correctAnswer: 1,
      explanation: "Az alacsony pH kedvezőtlen a Gram-negatív kórokozók számára."
    },
    {
      id: "ecoli_36",
      topic: "E. coli - Megelőzés",
      type: "bool",
      question: "A cink-oxid (ZnO) terápiás dózisú alkalmazását az EU-ban betiltották környezetvédelmi okok miatt.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. A környezeti terhelés miatt ma már más alternatívákat kell keresni."
    },
    {
      id: "ecoli_37",
      topic: "E. coli - Hasmenés",
      type: "mcq",
      question: "Melyik szerotípus okoz leggyakrabban újszülöttkori colibacillosist?",
      options: ["O138, O139", "O8, O141, O147, O149", "O157", "O1"],
      correctAnswer: 1,
      explanation: "Ezek a klasszikus ETEC szerocsoportok sertésben."
    },
    {
      id: "ecoli_38",
      topic: "E. coli - Virulencia",
      type: "mcq",
      question: "Mi a K-antigén a baktériumon?",
      options: ["A csilló", "A tok (kapszula)", "A sejtfal", "A plazmid"],
      correctAnswer: 1,
      explanation: "A K-antigén a baktérium tokját alkotó poliszacharid."
    },
    {
      id: "ecoli_39",
      topic: "E. coli - Terápia",
      type: "mcq",
      question: "Melyik antibiotikum csoportra jellemző a magas rezisztencia az E. coli törzseknél?",
      options: ["Kolisztin", "Régi penicillinek és tetraciklinek", "Negyedik generációs cefalosporinok", "Karbapenemek"],
      correctAnswer: 1,
      explanation: "A túlhasználat miatt a régebbi antibiotikumokra már nagyon sok törzs rezisztens."
    },
    {
      id: "ecoli_40",
      topic: "E. coli - Ödémabetegség",
      type: "mcq",
      question: "Hogyan jut el a Shiga-toxin a bélből a szervekbe?",
      options: ["A béltartalommal", "A vérárammal (toxémia)", "Idegpályákon", "Sehogy"],
      correctAnswer: 1,
      explanation: "A toxin felszívódik a vérbe és az erek falát károsítja testszerte."
    },
    {
      id: "ecoli_41",
      topic: "E. coli - Megelőzés",
      type: "bool",
      question: "A probiotikumok a bélflóra egyensúlyának fenntartásával segítik a megelőzést.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. A jótékony baktériumok kiszorítják a patogén E. colit."
    },
    {
      id: "ecoli_42",
      topic: "E. coli - Általános",
      type: "mcq",
      question: "Milyen oxigénigényű az E. coli?",
      options: ["Obligát aerob", "Obligát anaerob", "Fakultatív anaerob", "Mikroaerofil"],
      correctAnswer: 2,
      explanation: "Az E. coli képes oxigénnel és anélkül is élni."
    },
    {
      id: "ecoli_43",
      topic: "E. coli - Hasmenés",
      type: "mcq",
      question: "Mit okozhat az E. coli szeptikémia újszülött malacokban?",
      options: ["Csak hasmenést", "Hirtelen elhullást és ízület- vagy agyhártyagyulladást", "Szőrnövekedést", "Nincs hatása"],
      correctAnswer: 1,
      explanation: "Ha a baktérium bejut a vérbe, súlyos szervi gyulladásokat és gyors halált okoz."
    },
    {
      id: "ecoli_44",
      topic: "E. coli - Diagnózis",
      type: "mcq",
      question: "Milyen színűek az E. coli telepek McConkey agaron?",
      options: ["Színtelenek", "Rózsaszínűek (laktóz pozitív)", "Feketék", "Kékek"],
      correctAnswer: 1,
      explanation: "A laktóz-bontás miatt a telepek rózsaszínűek lesznek ezen a táptalajon."
    },
    {
      id: "ecoli_45",
      topic: "E. coli - Virulencia",
      type: "mcq",
      question: "Melyik toxin kódolása található gyakran plazmidon?",
      options: ["Endotoxin", "LT és ST enterotoxinok", "Minden toxin", "Egyik sem"],
      correctAnswer: 1,
      explanation: "Az enterotoxinok és fimbriák génjei gyakran mobilis genetikai elemeken (plazmidokon) vannak."
    },
    {
      id: "ecoli_46",
      topic: "E. coli - Megelőzés",
      type: "bool",
      question: "A malacok választás előtti stressz-mentesítése segít a PWD megelőzésében.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. A stressz (hideg, szállítás) rontja az immunrendszert és a bélműködést."
    },
    {
      id: "ecoli_47",
      topic: "E. coli - Általános",
      type: "mcq",
      question: "Ki fedezte fel az E. colit?",
      options: ["Louis Pasteur", "Robert Koch", "Theodor Escherich", "Alexander Fleming"],
      correctAnswer: 2,
      explanation: "Róla nevezték el a baktériumot (Escherichia)."
    },
    {
      id: "ecoli_48",
      topic: "E. coli - Hasmenés",
      type: "mcq",
      question: "Mi a 'colostrum-depriváció' jelentése?",
      options: ["Túl sok föcstej", "A föcstej felvételének hiánya vagy elégtelensége", "Egy új vakcina", "A koca betegsége"],
      correctAnswer: 1,
      explanation: "Ha a malac nem jut elég föcstejhez, védtelen marad az E. colival szemben."
    },
    {
      id: "ecoli_49",
      topic: "E. coli - Ödémabetegség",
      type: "mcq",
      question: "Milyen hőmérsékletű a malac teste ödémabetegségben?",
      options: ["Magas láza van", "Gyakran normális vagy csak enyhén emelkedett", "Jéghideg", "Folyamatosan változik"],
      correctAnswer: 1,
      explanation: "Az ödémabetegség nem klasszikus gyulladásos lázas betegség, a toxin hatása dominál."
    },
    {
      id: "ecoli_50",
      topic: "E. coli - Diagnózis",
      type: "mcq",
      question: "Mit keresnek a PCR vizsgálat során az E. coli diagnosztikában?",
      options: ["A baktérium súlyát", "Specifikus virulenciagének (toxinok, fimbriák) jelenlétét", "A baktérium színét", "Nincs ilyen vizsgálat"],
      correctAnswer: 1,
      explanation: "A PCR-rel gyorsan azonosíthatók a patogén törzsekre jellemző gének."
    }
  ]
};
