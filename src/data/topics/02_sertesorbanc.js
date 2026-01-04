export const sertesorbancData = {
  id: "sertesorbanc",
  title: "2. Sertésorbánc (Erysipelas suis)",
  studyMaterial: [
    {
      title: "1. A Kórokozó és Járványtan",
      icon: "bug",
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-600",
      sections: [
        {
          header: "Erysipelothrix rhusiopathiae",
          points: [
            "**Jellemzők:** Kisméretű, Gram-pozitív, egyenes vagy hajlott pálca.",
            "**Ellenálló képesség:** Rendkívül nagy. Hónapokig túlél a talajban, dögben. Ellenáll a sózásnak, füstölésnek, pácolásnak!",
            "**Virulencia faktorok:** **Neuraminidáz** (érkárosítás, trombózis), Tok (fagocitózis gátlás), SpaA antigén.",
            "**Előfordulás:** Sertésen kívül madarakban, halakban, és **emberben is (zoonózis -> Erysipeloid)**."
          ]
        },
        {
          header: "Terjedés",
          points: [
            "**Forrás:** Tünetmentes hordozó sertések (mandulában lakik).",
            "**Ürítés:** Bélsárral, vizelettel, nyállal.",
            "**Fertőzési kapu:** Szájon át (szennyezett takarmány/víz), Bőr sérülései (küzdelem, durva padozat).",
            "**Vektorok:** Vérszívó rovarok, rágcsálók."
          ]
        }
      ]
    },
    {
      title: "2. Klinikai Formák",
      icon: "activity",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
      sections: [
        {
          header: "Heveny (Akut) Forma",
          points: [
            "**Tünetek:** Hirtelen magas láz (40-42°C), bágyadtság, étvágytalanság.",
            "**Bőrtünetek:** **'Orbáncos csalánláz'** - Rombusz (gyémánt) alakú, vöröses-lilás, tapintható foltok.",
            "**Ok:** A baktérium okozta érgyulladás és mikrotrombózis a bőrben.",
            "**Következmény:** Kezeletlenül elhullás (szeptikémia), vetélés kocáknál."
          ]
        },
        {
          header: "Félheveny (Szubakut) Forma",
          points: [
            "Enyhébb tünetek, alacsonyabb láz.",
            "Kevesebb bőrelváltozás.",
            "Gyakran spontán gyógyul, de krónikussá válhat."
          ]
        },
        {
          header: "Idült (Krónikus) Forma",
          points: [
            "Az akut szakasz túlélői vagy lappangó fertőzés eredménye.",
            "**Ízületgyulladás:** Sántaság, duzzadt ízületek, merevség (ankylosis).",
            "**Szívbelhártya-gyulladás (Endocarditis):** Vegetációk ('karfiol') a szívbillentyűkön -> keringési elégtelenség, hirtelen halál.",
            "**Bőrelhalás:** A rombusz alakú foltok helyén a bőr elhal, pörköösödik, leválik."
          ]
        }
      ]
    },
    {
      title: "3. Kórbonctan és Diagnózis",
      icon: "stethoscope",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
      sections: [
        {
          header: "Kórbonctan",
          points: [
            "**Akut:** Szeptikémiás jelek. Lépduzzanat (vörös, lágy), pontszerű vérzések (vese, szív), tüdőödéma.",
            "**Krónikus:** Torzult ízületek, porckopás. Szívbillentyűkön felrakódások (vegetációk)."
          ]
        },
        {
          header: "Diagnózis",
          points: [
            "**Klinikum:** Láz + Rombusz alakú foltok = Erős gyanú.",
            "**Labor:** Tenyésztés (véres agar: apró telepek, alfa-hemolízis), PCR.",
            "**Differenciál diagnózis:** Sertéspestis (nincs rombusz), Salmonella (hasmenés), Actinobacillus."
          ]
        }
      ]
    },
    {
      title: "4. Terápia és Megelőzés",
      icon: "syringe",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
      sections: [
        {
          header: "Kezelés",
          points: [
            "**Antibiotikum:** **Penicillin** (első választás! Nagyon hatékony).",
            "Alternatívák: Amoxicillin, Cephalosporinok.",
            "**Fontos:** Az akut formát jól gyógyítja, a krónikus (ízületi/szív) elváltozások visszafordíthatatlanok!"
          ]
        },
        {
          header: "Megelőzés",
          points: [
            "**Vakcinázás:** Alapvető! Kocák (vemhesség alatt), malacok (választás után), kanok.",
            "**Higiénia:** Rágcsálóirtás, takarítás, karantén.",
            "**Megjegyzés:** A vakcina a SpaA antigén ellen termel ellenanyagot."
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "orb_1",
      topic: "Sertésorbánc - Kórokozó",
      type: "mcq",
      question: "Mi a sertésorbánc kórokozója?",
      options: ["Erysipelothrix rhusiopathiae", "Clostridium perfringens", "Streptococcus suis", "Escherichia coli"],
      correctAnswer: 0,
      explanation: "A kórokozó az Erysipelothrix rhusiopathiae, egy Gram-pozitív pálca."
    },
    {
      id: "orb_2",
      topic: "Sertésorbánc - Kórokozó",
      type: "bool",
      question: "A sertésorbánc baktériuma spóraképző, ezért nagyon ellenálló.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis. Nem képez spórát, de ennek ellenére rendkívül ellenálló a környezetben."
    },
    {
      id: "orb_3",
      topic: "Sertésorbánc - Kórokozó",
      type: "mcq",
      question: "Melyik állatfajban NEM fordul elő jellemzően az Erysipelothrix rhusiopathiae?",
      options: ["Sertés", "Pulyka/Baromfi", "Hal", "Kutya"],
      correctAnswer: 3,
      explanation: "Sertésben, madarakban és halakban gyakori, kutyában ritka."
    },
    {
      id: "orb_4",
      topic: "Sertésorbánc - Zoonózis",
      type: "mcq",
      question: "Hogy nevezik az emberi fertőzést, amit a sertésorbánc kórokozója okoz?",
      options: ["Orbánc (Erysipelas)", "Erysipeloid", "Lépfene", "Tetanusz"],
      correctAnswer: 1,
      explanation: "Emberben Erysipeloid a neve (a humán orbáncot Streptococcus okozza)."
    },
    {
      id: "orb_5",
      topic: "Sertésorbánc - Kórokozó",
      type: "mcq",
      question: "Melyik enzim a baktérium fontos virulenciafaktora, ami érkárosodást okoz?",
      options: ["Hialuronidáz", "Neuraminidáz", "Koaguláz", "Ureáz"],
      correctAnswer: 1,
      explanation: "A neuraminidáz sziálsavat hasít le, érkárosodást és trombózist okozva."
    },
    {
      id: "orb_6",
      topic: "Sertésorbánc - Járványtan",
      type: "bool",
      question: "A kórokozó ellenáll a sózásnak és füstölésnek.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. A hagyományos tartósítási eljárások nem pusztítják el biztosan."
    },
    {
      id: "orb_7",
      topic: "Sertésorbánc - Járványtan",
      type: "mcq",
      question: "Hol hordozzák leggyakrabban a baktériumot a tünetmentes sertések?",
      options: ["Bélcsatorna", "Mandulák", "Tüdő", "Vese"],
      correctAnswer: 1,
      explanation: "A mandulákban telepedik meg és onnan ürülhet."
    },
    {
      id: "orb_8",
      topic: "Sertésorbánc - Klinikum",
      type: "mcq",
      question: "Mi a heveny sertésorbánc legjellemzőbb bőrtünete?",
      options: ["Kerek, viszkető foltok", "Rombusz (gyémánt) alakú sötétvörös foltok", "Apró gennyes hólyagok", "Szőrhullás"],
      correctAnswer: 1,
      explanation: "Az 'orbáncos csalánláz' jellegzetes rombusz alakú."
    },
    {
      id: "orb_9",
      topic: "Sertésorbánc - Klinikum",
      type: "bool",
      question: "Az akut sertésorbánc nem jár magas lázzal.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis. Hirtelen magas láz (40-42°C) az egyik első tünet."
    },
    {
      id: "orb_10",
      topic: "Sertésorbánc - Klinikum",
      type: "mcq",
      question: "Mi okozza a rombusz alakú bőrelváltozásokat?",
      options: ["Allergiás reakció", "Bőr alatti vérzések és mikrotrombózisok", "Rovarcsípés", "Gombás fertőzés"],
      correctAnswer: 1,
      explanation: "A baktérium okozta érkárosodás és helyi érelzáródás (infarktus) a bőrben."
    },
    {
      id: "orb_11",
      topic: "Sertésorbánc - Klinikum",
      type: "mcq",
      question: "Melyik szerv gyulladása jellemző az idült (krónikus) orbáncra?",
      options: ["Tüdő", "Szívbillentyű (Endocarditis)", "Máj", "Gyomor"],
      correctAnswer: 1,
      explanation: "A krónikus forma gyakori szövődménye a szívbelhártya-gyulladás."
    },
    {
      id: "orb_12",
      topic: "Sertésorbánc - Klinikum",
      type: "bool",
      question: "A krónikus ízületgyulladás orbánc esetén teljes gyógyulással végződik antibiotikum hatására.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis. A krónikus ízületi elváltozások (torzulás, csontosodás) általában visszafordíthatatlanok."
    },
    {
      id: "orb_13",
      topic: "Sertésorbánc - Klinikum",
      type: "mcq",
      question: "Mit jelent az ankylosis?",
      options: ["Vérszegénység", "Ízületi merevség/összecsontosodás", "Szívmegállás", "Bőrviszketés"],
      correctAnswer: 1,
      explanation: "A krónikus ízületgyulladás végső fázisa, az ízület merevvé válása."
    },
    {
      id: "orb_14",
      topic: "Sertésorbánc - Terápia",
      type: "mcq",
      question: "Mi az elsődlegesen választandó antibiotikum sertésorbánc kezelésére?",
      options: ["Penicillin", "Gentamicin", "Sulfonamidok", "Enrofloxacin"],
      correctAnswer: 0,
      explanation: "A kórokozó rendkívül érzékeny a penicillinre."
    },
    {
      id: "orb_15",
      topic: "Sertésorbánc - Kórbonctan",
      type: "mcq",
      question: "Mit látunk a szívbillentyűkön krónikus esetben?",
      options: ["Sima felületet", "Karfiolszerű felrakódásokat (vegetációkat)", "Lyukakat", "Semmit"],
      correctAnswer: 1,
      explanation: "Vegetatív endocarditis alakul ki, szemölcsszerű felrakódásokkal."
    },
    {
      id: "orb_16",
      topic: "Sertésorbánc - Megelőzés",
      type: "bool",
      question: "Sertésorbánc ellen nincs hatékony vakcina.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis. Hatékony vakcinák léteznek és széles körben használják őket."
    },
    {
      id: "orb_17",
      topic: "Sertésorbánc - Járványtan",
      type: "mcq",
      question: "Melyik korcsoport a legfogékonyabb a megbetegedésre?",
      options: ["Szopós malacok (1-2 hetes)", "Növendék sertések (3-6 hónapos)", "Idős kocák", "Minden korcsoport egyformán"],
      correctAnswer: 1,
      explanation: "A kolosztrális immunitás lecsengése után, 3 hónapos kor körül a legfogékonyabbak."
    },
    {
      id: "orb_18",
      topic: "Sertésorbánc - Diagnózis",
      type: "mcq",
      question: "Mivel lehet összetéveszteni az akut orbáncot (differenciál diagnózis)?",
      options: ["Sertéspestis", "Aujeszky-betegség", "Sertésinfluenza", "Rühösség"],
      correctAnswer: 0,
      explanation: "A magas láz és a bőrvérzések miatt a sertéspestisre hasonlíthat."
    },
    {
      id: "orb_19",
      topic: "Sertésorbánc - Kórbonctan",
      type: "mcq",
      question: "Milyen elváltozás látható a lépben akut szeptikémia esetén?",
      options: ["Zsugorodott, kicsi", "Megnagyobbodott, sötétvörös (lépduzzanat)", "Fehér göbök", "Nincs elváltozás"],
      correctAnswer: 1,
      explanation: "Heveny szeptikémiára jellemző a lépduzzanat (splenomegalia)."
    },
    {
      id: "orb_20",
      topic: "Sertésorbánc - Klinikum",
      type: "bool",
      question: "A vemhes kocák orbánc fertőzése vetélést okozhat.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. A magas láz és a szeptikémia vetéléshez vezethet."
    },
    {
      id: "orb_21",
      topic: "Sertésorbánc - Kórokozó",
      type: "mcq",
      question: "Milyen Gram-festődésű az Erysipelothrix rhusiopathiae?",
      options: ["Gram-pozitív", "Gram-negatív", "Saválló", "Nem festhető"],
      correctAnswer: 0,
      explanation: "Gram-pozitív pálca."
    },
    {
      id: "orb_22",
      topic: "Sertésorbánc - Járványtan",
      type: "mcq",
      question: "Milyen szerepet játszhatnak a rágcsálók a terjesztésben?",
      options: ["Semmilyet", "Mechanikai vektorok lehetnek", "A fő gazdái a baktériumnak", "Elpusztítják a baktériumot"],
      correctAnswer: 1,
      explanation: "A rágcsálók és madarak mechanikusan terjeszthetik a kórokozót."
    },
    {
      id: "orb_23",
      topic: "Sertésorbánc - Diagnózis",
      type: "mcq",
      question: "Milyen hemolízist mutat a kórokozó véres agaron?",
      options: ["Béta (teljes)", "Alfa (zöldítő)", "Gamma (nincs)", "Delta"],
      correctAnswer: 1,
      explanation: "Gyakran keskeny, zöldes (alfa) hemolízis udvar látható."
    },
    {
      id: "orb_24",
      topic: "Sertésorbánc - Terápia",
      type: "bool",
      question: "A tetraciklinek minden esetben hatásosak az orbánc ellen.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis. Gyakori a tetraciklin-rezisztencia, ezért antibiotikum-érzékenységi vizsgálat javasolt."
    },
    {
      id: "orb_25",
      topic: "Sertésorbánc - Klinikum",
      type: "mcq",
      question: "Mit jelent a 'bőrnekrózis' krónikus orbáncban?",
      options: ["A bőr kifehéredését", "A rombusz alakú területek elhalását és leválását", "Szőrnövekedést", "Zsírosodást"],
      correctAnswer: 1,
      explanation: "A vérellátás hiánya miatt az érintett bőrterület elhal, pörkösödik és leválik."
    },
    {
      id: "orb_26",
      topic: "Sertésorbánc - Járványtan",
      type: "mcq",
      question: "Mennyi ideig maradhat életképes a baktérium a talajban?",
      options: ["Pár percig", "1-2 óráig", "Legalább 4-5 hétig (akár hónapokig)", "Évekig"],
      correctAnswer: 2,
      explanation: "Viszonylag ellenálló, hetekig-hónapokig fertőzőképes marad a környezetben."
    },
    {
      id: "orb_27",
      topic: "Sertésorbánc - Megelőzés",
      type: "mcq",
      question: "Mikor javasolt a tenyészkocák vakcinázása?",
      options: ["Ellés után közvetlenül", "Fedeztetés előtt (és évente)", "Soha", "Csak ha betegek"],
      correctAnswer: 1,
      explanation: "A fedeztetés előtti oltás védi a kocát a vemhesség alatt és biztosítja a kolosztrális immunitást."
    },
    {
      id: "orb_28",
      topic: "Sertésorbánc - Kórokozó",
      type: "bool",
      question: "Az Erysipelothrix rhusiopathiae fakultatív intracelluláris kórokozó.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Képes túlélni a gazdaszervezet sejtjeiben (makrofágokban) is."
    },
    {
      id: "orb_29",
      topic: "Sertésorbánc - Klinikum",
      type: "mcq",
      question: "Melyik szívbillentyű a leggyakrabban érintett endocarditis esetén?",
      options: ["Mitrális (kéthegyű) billentyű", "Trikuszpidális billentyű", "Pulmonális billentyű", "Egyik sem"],
      correctAnswer: 0,
      explanation: "Leggyakrabban a szív bal oldalán, a mitrális billentyűn alakulnak ki elváltozások."
    },
    {
      id: "orb_30",
      topic: "Sertésorbánc - Diagnózis",
      type: "mcq",
      question: "Melyik laboratóriumi módszerrel mutatható ki a baktérium DNS-e gyorsan?",
      options: ["Gram-festés", "PCR", "ELISA", "Agglutináció"],
      correctAnswer: 1,
      explanation: "A PCR (polimeráz-láncreakció) a genetikai anyag gyors kimutatására szolgál."
    },
    {
      id: "orb_31",
      topic: "Sertésorbánc - Terápia",
      type: "bool",
      question: "A hiperimmun szérumot ma már soha nem használják.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis. Bár ritkábban, de nagy értékű állatoknál vagy járvány kezdetén még használható passzív védelemre."
    },
    {
      id: "orb_32",
      topic: "Sertésorbánc - Járványtan",
      type: "mcq",
      question: "Hogyan juthat be a kórokozó a bőrön keresztül?",
      options: ["Csak szúnyogcsípéssel", "Sértetlen bőrön át is", "Sebzéseken, horzsolásokon keresztül", "Sehogy"],
      correctAnswer: 2,
      explanation: "A hámhiányos, sérült bőr fontos behatolási kapu."
    },
    {
      id: "orb_33",
      topic: "Sertésorbánc - Kórbonctan",
      type: "mcq",
      question: "Milyen színűre színeződhet a bőr akut szeptikémia esetén (cyanosis)?",
      options: ["Sárga", "Kékes-lilás", "Zöld", "Fehér"],
      correctAnswer: 1,
      explanation: "A keringési zavar miatt a fülek, orr, hasalj kékes-lilásra (livid) színeződhet."
    },
    {
      id: "orb_34",
      topic: "Sertésorbánc - Megelőzés",
      type: "bool",
      question: "A betegség átvészelése után nem alakul ki immunitás.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis. A gyógyult állatokban kialakul immunitás, de a baktérium hordozói maradhatnak."
    },
    {
      id: "orb_35",
      topic: "Sertésorbánc - Klinikum",
      type: "mcq",
      question: "Mi a teendő, ha egy állományban hirtelen több sertés belázasodik és rombusz alakú foltok jelennek meg?",
      options: ["Azonnali kényszervágás", "Antibiotikumos kezelés (Penicillin) elkezdése és állatorvos hívása", "Várni pár napot", "Csak vitamint adni"],
      correctAnswer: 1,
      explanation: "A gyors antibiotikumos beavatkozás életmentő és megakadályozza a terjedést."
    },
    {
      id: "orb_36",
      topic: "Sertésorbánc - Kórokozó",
      type: "mcq",
      question: "Melyik antigén ellen termelődött antitestek nyújtanak védelmet?",
      options: ["SpaA antigén", "O antigén", "H antigén", "K antigén"],
      correctAnswer: 0,
      explanation: "A Surface protective antigen A (SpaA) a kulcsfontosságú immunogén."
    },
    {
      id: "orb_37",
      topic: "Sertésorbánc - Járványtan",
      type: "mcq",
      question: "Mi befolyásolhatja a betegség kitörését (hajlamosító tényezők)?",
      options: ["Stressz, meleg időjárás, zsúfoltság", "Csak a takarmány típusa", "A sertés színe", "A holdállás"],
      correctAnswer: 0,
      explanation: "A környezeti stresszorok (pl. hirtelen melegfront) gyakran aktiválják a lappangó fertőzést."
    },
    {
      id: "orb_38",
      topic: "Sertésorbánc - Klinikum",
      type: "bool",
      question: "Az idült orbáncos sertés húsa feltétel nélkül fogyasztható.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis. Vágóhídi vizsgálat tárgya, gyakran elkobzás vagy hőkezelés szükséges."
    },
    {
      id: "orb_39",
      topic: "Sertésorbánc - Kórokozó",
      type: "mcq",
      question: "Milyen alakúak a telepek a régebbi tenyészetekben?",
      options: ["Mindig rövid pálcák", "Hosszú, fonalszerű (filamentózus) alakok is lehetnek", "Coccusok", "Spirálok"],
      correctAnswer: 1,
      explanation: "A baktérium pleomorf, öregebb tenyészetben fonalasodik."
    },
    {
      id: "orb_40",
      topic: "Sertésorbánc - Terápia",
      type: "mcq",
      question: "Miért nem hatékony a kezelés krónikus endocarditis esetén?",
      options: ["Mert a baktérium rezisztens", "Mert a szívbillentyű károsodása visszafordíthatatlan és a baktériumok el vannak zárva a vegetációkban", "Mert a penicillin nem jut el a szívhez", "Mert a sertés nem nyeli le a gyógyszert"],
      correctAnswer: 1,
      explanation: "A vegetációk belsejébe nehezen jut be a gyógyszer, és a mechanikai kár már megtörtént."
    },
    {
      id: "orb_41",
      topic: "Sertésorbánc - Járványtan",
      type: "mcq",
      question: "Milyen hosszú a lappangási idő akut fertőzésnél?",
      options: ["1-3 nap", "2 hét", "1 hónap", "Fél év"],
      correctAnswer: 0,
      explanation: "Rövid, általában 1-3 (max 7) nap."
    },
    {
      id: "orb_42",
      topic: "Sertésorbánc - Diagnózis",
      type: "mcq",
      question: "Melyik szervből érdemes mintát venni bakteriológiai vizsgálatra elhullás esetén?",
      options: ["Lép, vese, nyirokcsomó", "Szőr", "Pata", "Szem"],
      correctAnswer: 0,
      explanation: "A szeptikémia miatt a belső szervekben (főleg lépben) dúsul a kórokozó."
    },
    {
      id: "orb_43",
      topic: "Sertésorbánc - Klinikum",
      type: "bool",
      question: "A 'szubakut' forma súlyosabb, mint az 'akut'.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis. A szubakut (félheveny) enyhébb lefolyású."
    },
    {
      id: "orb_44",
      topic: "Sertésorbánc - Megelőzés",
      type: "mcq",
      question: "Mit kell tenni az új sertésekkel az állományba kerülés előtt?",
      options: ["Azonnal összeereszteni a többiekkel", "Karanténozni és vakcinázni", "Megfürdetni", "Csak megjelölni"],
      correctAnswer: 1,
      explanation: "A karantén és immunizálás megakadályozza a betegség behurcolását."
    },
    {
      id: "orb_45",
      topic: "Sertésorbánc - Kórbonctan",
      type: "mcq",
      question: "Mit jelent a 'festékanyag-injekció' szerű vérzés a vesén?",
      options: ["Sertésorbánc specifikus jele", "Pestisre jellemző, de orbáncnál is előfordulhat hasonló", "Sérülés jele", "Normális jelenség"],
      correctAnswer: 1,
      explanation: "A vesevérzések szeptikémiás betegségeknél (pestis, orbánc) gyakoriak."
    },
    {
      id: "orb_46",
      topic: "Sertésorbánc - Terápia",
      type: "bool",
      question: "A lázcsillapítók (NSAID) adása felesleges orbánc esetén.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis. Segítenek a közérzet javításában és a láz okozta károk (pl. vetélés) csökkentésében."
    },
    {
      id: "orb_47",
      topic: "Sertésorbánc - Klinikum",
      type: "mcq",
      question: "Milyen mozgászavar jellemző az akut szakban?",
      options: ["Sántaság, merev mozgás (fájdalmas ízületek)", "Körkörös mozgás", "Teljes bénulás", "Nincs mozgászavar"],
      correctAnswer: 0,
      explanation: "A kezdődő ízületi gyulladás és a lábvégek fájdalma miatt tipegő, merev járás jellemző."
    },
    {
      id: "orb_48",
      topic: "Sertésorbánc - Járványtan",
      type: "mcq",
      question: "Hogyan viselkedik a baktérium a környezetben?",
      options: ["Gyorsan elpusztul", "Kiemelkedően szívós, sokáig fertőzőképes", "Csak vízben él meg", "A napfény azonnal megöli"],
      correctAnswer: 1,
      explanation: "A talajban, alomban hetekig-hónapokig túlél."
    },
    {
      id: "orb_49",
      topic: "Sertésorbánc - Diagnózis",
      type: "mcq",
      question: "A szerológiai vizsgálat (ELISA) mire a legalkalmasabb?",
      options: ["Akut betegség azonnali diagnózisára", "Átfertőzöttség vagy vakcinázás sikerességének ellenőrzésére", "A baktérium tenyésztésére", "Bőrtünetek kezelésére"],
      correctAnswer: 1,
      explanation: "Az ellenanyagszint mérésére jó, akut diagnózisra a tenyésztés/PCR jobb."
    },
    {
      id: "orb_50",
      topic: "Sertésorbánc - Általános",
      type: "bool",
      question: "A sertésorbánc gazdasági kártétele elhanyagolható.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis. Jelentős kárt okoz az elhullás, a kényszervágás és a fejlődésben való visszamaradás miatt."
    }
  ]
};
