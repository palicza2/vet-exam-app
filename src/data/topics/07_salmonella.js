export const salmonellaData = {
  id: "salmonella",
  title: "7. Sertés szalmonellózisa",
  studyMaterial: [
    {
      "title": "1. A kórokozó jellemzése",
      "icon": "microscope",
      "color": "bg-blue-50 border-blue-200",
      "iconColor": "text-blue-500",
      "sections": [
        {
          "header": "1.1. Általános jellemzők",
          "points": [
            "**Salmonella enterica** alfajai (Gram-negatív pálcák)",
            "Sertésben legfontosabbak: **S. Choleraesuis** (sertés-specifikus) és **S. Typhimurium** (zoonózis!)",
            "**Fakultatív intracelluláris:** Képes túlélni és szaporodni a makrofágokban",
            "Rendkívül ellenálló a környezetben"
          ]
        }
      ]
    },
    {
      "title": "2. Járványtan és Patomechanizmus",
      "icon": "book",
      "color": "bg-gray-50 border-gray-200",
      "iconColor": "text-gray-500",
      "sections": [
        {
          "header": "2.1. Terjedés",
          "points": [
            "Fekál-orális út (bélsárral szennyezett takarmány, víz)",
            "Tünetmentes hordozók: mandulában, epehólyagban, bélfodri nyirokcsomókban perzisztál",
            "Stressz hatására intermittáló ürítés kezdődik"
          ]
        },
        {
          "header": "2.2. Patogenezis",
          "points": [
            "Bélhámhoz és M-sejtekhez kötődés → behatolás a nyálkahártyába",
            "Makrofágok bekebelezik, de nem ölik meg → a nyirokcsomókba és a véráramba 'utaztatják'",
            "Eredmény: szeptikémia vagy lokális enterocolitis"
          ]
        }
      ]
    },
    {
      "title": "3. Klinikai kórformák",
      "icon": "alert-triangle",
      "color": "bg-orange-50 border-orange-200",
      "iconColor": "text-orange-500",
      "sections": [
        {
          "header": "3.1. Szeptikémiás forma (S. Choleraesuis)",
          "points": [
            "Főleg választott malacok és süldők (4 hónapos korig)",
            "**Tünetek:** Magas láz (42 °C), bágyadtság, **cianózis** (fülvégek, has alja elkékül)",
            "Légzőszervi tünetek (tüdő érintettsége), hirtelen elhullás"
          ]
        },
        {
          "header": "3.2. Enterocolitis forma (S. Typhimurium)",
          "points": [
            "Leggyakoribb a hizlaldákban",
            "**Tünetek:** Híg, sárgás-zöldes hasmenés (véres/nyálkás is lehet), lesoványodás",
            "**Végbél-szűkület:** Késői szövődmény! A fekélyek hegesedése miatt a bél beszűkül → 'csónak alakú' has, bélsárpangás"
          ]
        }
      ]
    },
    {
      "title": "4. Kórbonctan",
      "icon": "search",
      "color": "bg-slate-50 border-slate-200",
      "iconColor": "text-slate-500",
      "sections": [
        {
          "header": "4.1. Szeptikémiás jelek",
          "points": [
            "**Lép:** megnagyobbodott, sötétvörös, gumiszerű",
            "**Máj:** apró, szürkésfehér elhalásos gócok",
            "**Tüdő:** vizenyő, interstitial pneunomia"
          ]
        },
        {
          "header": "4.2. Enterális jelek",
          "points": [
            "Fibrines-elhalásos enterocolitis a vastagbélben",
            "**Gombos fekélyek:** a vakbélben és remesében látható, koncentrikus pörkök (kórjelző!)"
          ]
        }
      ]
    },
    {
      "title": "5. Terápia és Megelőzés",
      "icon": "pill",
      "color": "bg-emerald-50 border-emerald-200",
      "iconColor": "text-emerald-500",
      "sections": [
        {
          "header": "5.1. Kezelés",
          "points": [
            "Gyakori a **multirezisztencia (MDR)**!",
            "Florfenikol (szeptikémia esetén), Apramicin (enterális forma)",
            "Szerves savak (takarmány savanyítása) gátolja a szaporodást"
          ]
        },
        {
          "header": "5.2. Vakcinázás",
          "points": [
            "**Élő, attenuált vakcinák:** leghatékonyabbak (sejtes és lokális immunitást is adnak)",
            "Malacoknak 3 napos kortól szájon át"
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "salm_1",
      topic: "Salmonella",
      type: "mcq",
      question: "Melyik Salmonella szerotípus sertés-specifikus és okoz gyakran szeptikémiát?",
      options: ["S. Typhimurium", "S. Choleraesuis", "S. Derby", "S. Enteritidis"],
      correctAnswer: 1,
      explanation: "A S. Choleraesuis a sertésekre adaptálódott, súlyos vérfertőzést okozó típus."
    },
    {
      id: "salm_2",
      topic: "Salmonella",
      type: "mcq",
      question: "Mit jelent a Salmonella fakultatív intracelluláris életmódja?",
      options: ["Csak sejten kívül él meg", "Képes túlélni és szaporodni a gazdasejtekben (pl. makrofágokban)", "Vírusként viselkedik", "Csak halott szövetben szaporodik"],
      correctAnswer: 1,
      explanation: "Ez a tulajdonság teszi lehetővé a hordozó állapotot és a szeptikémiás terjedést."
    },
    {
      id: "salm_3",
      topic: "Salmonella",
      type: "mcq",
      question: "Melyik elváltozás kórjelző értékű krónikus szalmonellózisban?",
      options: ["Vulkán lézió", "Gombos fekélyek a vastagbélben", "Szájzár", "Rombusz alakú foltok"],
      correctAnswer: 1,
      explanation: "A vakbél és remese nyálkahártyáján látható gombos fekélyek tipikus szalmonellózis leletek."
    },
    {
      id: "salm_4",
      topic: "Salmonella",
      type: "mcq",
      question: "Mi a szeptikémiás szalmonellózis egyik feltűnő klinikai tünete?",
      options: ["Fehér bőr", "Cianózis (elkékülő fülvégek és has alja)", "Vakság", "Szőrhullás"],
      correctAnswer: 1,
      explanation: "A súlyos keringési zavar miatt a perifériás részek cianotikussá válnak."
    },
    {
      id: "salm_5",
      topic: "Salmonella",
      type: "mcq",
      question: "Melyik kórkép a S. Typhimurium fertőzés jellegzetes késői szövődménye?",
      options: ["Süketség", "Végbél-szűkület", "Veseelégtelenség", "Májgyulladás"],
      correctAnswer: 1,
      explanation: "A végbél fekélyeinek hegesedése bélcsatorna-szűkületet és bélsárpangást okoz."
    },
    {
      id: "salm_6",
      topic: "Salmonella",
      type: "mcq",
      question: "Milyen állagú a lép szeptikémiás szalmonellózisban?",
      options: ["Petyhüdt", "Duzzadt, sötétvörös, gumiszerű", "Kicsi és fehér", "Folyékony"],
      correctAnswer: 1,
      explanation: "A 'szalmonellás lép' duzzadt, vérbő és tömött tapintatú."
    },
    {
      id: "salm_7",
      topic: "Salmonella",
      type: "mcq",
      question: "Melyik szervet érdemes szeptikémiás gyanú esetén bakteriológiai vizsgálatra küldeni?",
      options: ["Csak szőrt", "Lép, máj, tüdő", "Csak nyálat", "Csak vizeletet"],
      correctAnswer: 1,
      explanation: "Ezek a szervek tartalmazzák a legnagyobb mennyiségben a kórokozót szeptikémia esetén."
    },
    {
      id: "salm_8",
      topic: "Salmonella",
      type: "mcq",
      question: "Mi a szerves savak szerepe a megelőzésben?",
      options: ["Vitaminpótlás", "A gyomor pH-jának csökkentése (gátolja a baktérium átjutását)", "Ízesítés", "Nincs szerepük"],
      correctAnswer: 1,
      explanation: "A savanyítás gátolja a Salmonella bejutását és szaporodását a bélcsatornában."
    },
    {
      id: "salm_9",
      topic: "Salmonella",
      type: "mcq",
      question: "Melyik vakcinatípus nyújtja a legkomplexebb védelmet szalmonellózis ellen?",
      options: ["Inaktivált (elölt) vakcina", "Élő, attenuált (legyengített) vakcina", "Csak a vitaminos kiegészítő", "Nincs vakcina"],
      correctAnswer: 1,
      explanation: "Az élő vakcinák sejtes és lokális immunitást is kiváltanak."
    },
    {
      id: "salm_10",
      topic: "Salmonella",
      type: "bool",
      question: "A szalmonellák Gram-pozitív baktériumok.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis, a Salmonellák Gram-negatív pálcák."
    },
    {
      id: "salm_11",
      topic: "Salmonella",
      type: "bool",
      question: "A Salmonella fertőzés emberre is veszélyes (zoonózis).",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, különösen a S. Typhimurium jelent komoly humán egészségügyi kockázatot."
    },
    {
      id: "salm_12",
      topic: "Salmonella",
      type: "mcq",
      question: "Melyik szerotípus okoz leggyakrabban hasmenést hizlaldákban?",
      options: ["S. Choleraesuis", "S. Typhimurium", "S. Dublin", "S. Gallinarum"],
      correctAnswer: 1,
      explanation: "A hizlaldai enterocolitis fő okozója a S. Typhimurium."
    },
    {
      id: "salm_13",
      topic: "Salmonella",
      type: "mcq",
      question: "Hogyan ürítik a baktériumot a hordozó állatok?",
      options: ["Folyamatosan", "Intermittálóan (szakaszosan, főleg stresszre)", "Csak egyszer", "Soha"],
      correctAnswer: 1,
      explanation: "A hordozók stressz hatására kezdenek el nagy mennyiségű baktériumot üríteni."
    },
    {
      id: "salm_14",
      topic: "Salmonella",
      type: "mcq",
      question: "Melyik sejt 'utaztatja' a baktériumot a szervezetben?",
      options: ["Vörösvértest", "Makrofág", "Hámsejt", "Idegsejt"],
      correctAnswer: 1,
      explanation: "A Salmonella a makrofágokban élve jut el a regionális nyirokcsomókba és a véráramba."
    },
    {
      id: "salm_15",
      topic: "Salmonella",
      type: "mcq",
      question: "Milyen színű a Salmonella telep XLD agaron?",
      options: ["Sárga", "Fekete (vagy fekete közepű a H2S termelés miatt)", "Kék", "Fehér"],
      correctAnswer: 1,
      explanation: "A H2S termelő törzsek fekete telepeket képeznek ezen a táptalajon."
    },
    {
      id: "salm_16",
      topic: "Salmonella",
      type: "mcq",
      question: "Mit jelent az MDR kifejezés a szalmonelláknál?",
      options: ["Magyar Diagnosztikai Részleg", "Multirezisztencia (több antibiotikummal szembeni ellenállás)", "Mindenre Jó Gyógyszer", "Magas Dózisú Reakció"],
      correctAnswer: 1,
      explanation: "Multi-Drug Resistance: sok törzs ellenáll több antibiotikum csoportnak is."
    },
    {
      id: "salm_17",
      topic: "Salmonella",
      type: "mcq",
      question: "Melyik antibiotikum kiváló választás szeptikémiás S. Choleraesuis esetén?",
      options: ["Csak kolisztin", "Florfenikol (injekcióban)", "Penicillin", "Nisztatin"],
      correctAnswer: 1,
      explanation: "A florfenikol jól penetrál a szövetekbe és hatékony a szisztémás fertőzés ellen."
    },
    {
      id: "salm_18",
      topic: "Salmonella",
      type: "mcq",
      question: "Hogyan terjedhet a fertőzés zárt istállóban a porral?",
      options: ["Sehogy", "Aeroszol útján (belégzéssel)", "Csak a vízzel", "Csak rágcsálókkal"],
      correctAnswer: 1,
      explanation: "A beszáradt bélsár pora is tartalmazhat életképes baktériumokat."
    },
    {
      id: "salm_19",
      topic: "Salmonella",
      type: "mcq",
      question: "Melyik fázisban alakul ki a 'gombos fekély'?",
      options: ["Heveny (akut)", "Idült (krónikus)", "Lappangási időben", "Soha"],
      correctAnswer: 1,
      explanation: "A gombos fekély az elhúzódó, krónikus enterocolitis jellemzője."
    },
    {
      id: "salm_20",
      topic: "Salmonella",
      type: "bool",
      question: "A Salmonella fertőzés ellen a rágcsálóirtás fontos védekezési elem.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, a rágcsálók jelentős rezervoárjai és terjesztői a Salmonellának."
    },
    {
      id: "salm_21",
      topic: "Salmonella",
      type: "mcq",
      question: "Mi a Kauffmann-White séma?",
      options: ["Egy gyógyszer", "Szerotipizálási rendszer (antigének alapján)", "Vakcinázási terv", "Boncolási technika"],
      correctAnswer: 1,
      explanation: "A Salmonellák szerológiai azonosítására (O és H antigének) szolgáló rendszer."
    },
    {
      id: "salm_22",
      topic: "Salmonella",
      type: "mcq",
      question: "Milyen hőmérsékletű láz jellemző szeptikémiában?",
      options: ["39 °C", "40,5–42 °C", "37 °C", "Nincs láz"],
      correctAnswer: 1,
      explanation: "A heveny vérfertőzés nagyon magas lázzal jár."
    },
    {
      id: "salm_23",
      topic: "Salmonella",
      type: "mcq",
      question: "Melyik szervben láthatók apró elhalásos gócok boncoláskor?",
      options: ["Csak az agyban", "Máj", "Csak a köröm", "Szem"],
      correctAnswer: 1,
      explanation: "A 'szalmonellás gócok' a májban a baktériumok szaporodási helyei."
    },
    {
      id: "salm_24",
      topic: "Salmonella",
      type: "mcq",
      question: "Mit jelent az All-in/All-out technológia?",
      options: ["Mindenki egyszerre jön és megy (a turnusok nem keverednek)", "Csak kint és bent", "Minden nap mosás", "Semmit"],
      correctAnswer: 0,
      explanation: "Ez a menedzsment módszer segít megszakítani a fertőzési láncot az istállóban."
    },
    {
      id: "salm_25",
      topic: "Salmonella",
      type: "mcq",
      question: "Miért fontos a MIC meghatározása?",
      options: ["Hogy tudjuk a baci színét", "A pontos antibiotikum-érzékenység és dózis megállapításához", "A malac súlyának méréséhez", "Nincs jelentősége"],
      correctAnswer: 1,
      explanation: "A minimális gátló koncentráció ismerete elengedhetetlen a rezisztens törzsek elleni harchoz."
    },
    {
      id: "salm_26",
      topic: "Salmonella",
      type: "mcq",
      question: "Melyik Salmonella típus okozhat szeptikémiát emberben is sertés kontaktus után?",
      options: ["Minden típus", "S. Choleraesuis (ritka, de súlyos)", "Csak a S. Dublin", "Emberre nem veszélyes"],
      correctAnswer: 1,
      explanation: "Bár sertés-specifikus, emberbe jutva súlyos szisztémás betegséget okozhat."
    },
    {
      id: "salm_27",
      topic: "Salmonella",
      type: "mcq",
      question: "Hány óra a szeptikémiás forma lappangási ideje?",
      options: ["1-2 óra", "24-48 óra", "1 hét", "1 hónap"],
      correctAnswer: 1,
      explanation: "A fertőzés után 1-2 nappal már jelentkeznek a heveny tünetek."
    },
    {
      id: "salm_28",
      topic: "Salmonella",
      type: "bool",
      question: "A Salmonella baktériumok fakultatív anaerobok.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, oxigénnel és anélkül is képesek élni."
    },
    {
      id: "salm_29",
      topic: "Salmonella",
      type: "mcq",
      question: "Mi a M-sejtek szerepe a fertőzésben?",
      options: ["Védik a malacot", "A baktériumok bejutási kapui a bélfalba", "Emésztő enzimeket termelnek", "Semmi"],
      correctAnswer: 1,
      explanation: "A Salmonella az immunrendszer M-sejtjeit használja fel a bélfalon való átjutáshoz."
    },
    {
      id: "salm_30",
      topic: "Salmonella",
      type: "mcq",
      question: "Melyik sav a leghatékonyabb a Salmonella ellen a takarmányban?",
      options: ["C-vitamin", "Rövid szénláncú zsírsavak (pl. hangyasav, propionsav)", "Kénsav", "Nincs ilyen"],
      correctAnswer: 1,
      explanation: "Ezek a savak közvetlenül gátolják a kórokozó szaporodását."
    },
    {
      id: "salm_31",
      topic: "Salmonella",
      type: "mcq",
      question: "Hogyan terjed a Salmonella vertikálisan?",
      options: ["Csak mesterséges úton", "Kocáról a malacokra", "Madárról sertésre", "Sehogy"],
      correctAnswer: 1,
      explanation: "A fertőzött koca az ellés és szoptatás során átadhatja a kórokozót."
    },
    {
      id: "salm_32",
      topic: "Salmonella",
      type: "mcq",
      question: "Milyen az ürülék enterocolitis esetén?",
      options: ["Kemény", "Híg, vizes, sárgás-zöldes", "Nincs ürülék", "Kék"],
      correctAnswer: 1,
      explanation: "A szalmonellás hasmenésre jellemző a híg, olykor bűzös bélsár."
    },
    {
      id: "salm_33",
      topic: "Salmonella",
      type: "mcq",
      question: "Mit okoz a végbél-szűkület a sertés küllemében?",
      options: ["Selymes szőr", "Hordó alakú vagy 'csónak alakú' has a bélsárpangás miatt", "Hosszú lábak", "Nincs változás"],
      correctAnswer: 1,
      explanation: "A pangó béltartalom miatt a has térfogata megnő."
    },
    {
      id: "salm_34",
      topic: "Salmonella",
      type: "bool",
      question: "A szalmonellák spórát képeznek.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis, a Salmonellák nem képeznek spórát, de spóra nélkül is ellenállóak."
    },
    {
      id: "salm_35",
      topic: "Salmonella",
      type: "mcq",
      question: "Hogyan hat a PRRS az orbánc/szalmonella kórlefolyására?",
      options: ["Gyógyítja", "Súlyosbítja az immunszuppresszió miatt", "Semleges", "Megállítja a fertőzést"],
      correctAnswer: 1,
      explanation: "A vírusfertőzések gyengítik a védekezést, így a baktériumok agresszívabbak lesznek."
    },
    {
      id: "salm_36",
      topic: "Salmonella",
      type: "mcq",
      question: "Melyik szervben perzisztálhat a baktérium hordozókban?",
      options: ["Csak a szemben", "Epehólyag, mandula, bélfodri nyirokcsomók", "Csak a köröm alatt", "Sehol"],
      correctAnswer: 1,
      explanation: "Ezek a szervek a Salmonella kedvelt rejtekhelyei a szervezetben."
    },
    {
      id: "salm_37",
      topic: "Salmonella",
      type: "mcq",
      question: "Mit jelent az 'intermittáló ürítés'?",
      options: ["Folyamatos", "Szakaszos, időnkénti", "Egyszeri", "Gyors"],
      correctAnswer: 1,
      explanation: "A hordozók nem mindig ürítik a bacit, csak bizonyos időközönként vagy stresszre."
    },
    {
      id: "salm_38",
      topic: "Salmonella",
      type: "mcq",
      question: "Mi a teendő a diagnózis után?",
      options: ["Minden állatot levágni", "Célzott antibiotikumos kezelés, vakcinázás és higiéniai intézkedések", "Ablakot nyitni", "Több ételt adni"],
      correctAnswer: 1,
      explanation: "A szalmonellózis elleni védekezés komplex stratégiát igényel."
    },
    {
      id: "salm_39",
      topic: "Salmonella",
      type: "mcq",
      question: "Milyen állatfajok terjeszthetik még a Salmonellát a telepen?",
      options: ["Csak a hangyák", "Rágcsálók, vadmadarak, legyek", "Csak a halak", "Sehogy"],
      correctAnswer: 1,
      explanation: "Számos vektor és rezervoár állatfaj részt vehet a terjesztésben."
    },
    {
      id: "salm_40",
      topic: "Salmonella",
      type: "bool",
      question: "A Salmonella Choleraesuis szeptikémia magas elhullással járhat.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, a heveny vérfertőzés nagyon veszélyes és nagy veszteséget okozhat."
    },
    {
      id: "salm_41",
      topic: "Salmonella",
      type: "mcq",
      question: "Mi az MST?",
      options: ["Magyar Sertés Társaság", "Monofázisos Salmonella Typhimurium variáns", "Egy új gyógyszer", "Vakcina márka"],
      correctAnswer: 1,
      explanation: "Egy specifikus, gyakran multirezisztens Salmonella variáns."
    },
    {
      id: "salm_42",
      topic: "Salmonella",
      type: "mcq",
      question: "Milyen kórbonctani elváltozás látható a vakbélben idült esetben?",
      options: ["Tiszta felület", "Fibrines-elhalásos gyulladás és korpaszerű felrakódás", "Csak vérzés", "Nincs elváltozás"],
      correctAnswer: 1,
      explanation: "A vastagbél gyulladása tipikus enterális szalmonellózisban."
    },
    {
      id: "salm_43",
      topic: "Salmonella",
      type: "mcq",
      question: "Hogyan hat az apramicin az enterális szalmonellózisra?",
      options: ["Sehogy", "Hatékony, mert a bélben magas koncentrációt ér el", "Csak tüdőre hat", "Mérgező"],
      correctAnswer: 1,
      explanation: "Az apramicin egy aminoglikozid, ami jól hat a bélcsatornában lévő Salmonellákra."
    },
    {
      id: "salm_44",
      topic: "Salmonella",
      type: "mcq",
      question: "Mi a teendő a fertőzött padozattal?",
      options: ["Csak lesöpörni", "Alapos mosás és hatékony fertőtlenítés", "Befesteni", "Semmi"],
      correctAnswer: 1,
      explanation: "A környezet tisztasága alapvető a visszafertőződés gátlásához."
    },
    {
      id: "salm_45",
      topic: "Salmonella",
      type: "mcq",
      question: "Mit okoz a hirtelen takarmányváltás?",
      options: ["Hajlamosít a hasmenésre (diszbakteriózis)", "Gyorsabb növekedést", "Semmit", "Jobb kedvet"],
      correctAnswer: 0,
      explanation: "A bélflóra egyensúlyának felborulása segíti a patogén Salmonellák elszaporodását."
    },
    {
      id: "salm_46",
      topic: "Salmonella",
      type: "mcq",
      question: "Melyik szerv gyulladását kíséri a szalmonellózis tüdőérintettsége?",
      options: ["Májgyulladás", "Interstitialis pneumonia (tüdőgyulladás)", "Veseelégtelenség", "Nincs ilyen"],
      correctAnswer: 1,
      explanation: "Szeptikémia során a baktérium a tüdőt is károsíthatja."
    },
    {
      id: "salm_47",
      topic: "Salmonella",
      type: "mcq",
      question: "Mennyi ideig tart a szeptikémiás forma lefolyása kezelés nélkül?",
      options: ["Pár óra vagy 1-2 nap", "1 év", "10 perc", "1 hónap"],
      correctAnswer: 0,
      explanation: "A heveny forma nagyon gyors, gyakran végzetes lefolyású."
    },
    {
      id: "salm_48",
      topic: "Salmonella",
      type: "mcq",
      question: "Hogyan azonosítják a Salmonellát a referencialaborban?",
      options: ["Szag alapján", "Szerotipizálással (antigén-meghatározás)", "Röntgennel", "Nem azonosítják"],
      correctAnswer: 1,
      explanation: "A szerotipizálás (pl. Typhimurium azonosítása) speciális szerológiai módszerekkel történik."
    },
    {
      id: "salm_49",
      topic: "Salmonella",
      type: "bool",
      question: "A Salmonellák minden fertőtlenítőszerre érzékenyek.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis, csak a megfelelő hatóanyagú és töménységű fertőtlenítők hatásosak ellenük."
    },
    {
      id: "salm_50",
      topic: "Salmonella",
      type: "mcq",
      question: "Mi a legfontosabb cél a szalmonella elleni védekezésben?",
      options: ["A baktérium teljes kiirtása a világból", "A klinikai tünetek és az ürítés minimalizálása", "Csak a malacok hízlalása", "Semmi"],
      correctAnswer: 1,
      explanation: "Az állomány egészségének megőrzése és a humán kockázat csökkentése a fő cél."
    }
  ]
};
