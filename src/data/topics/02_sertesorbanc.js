export const sertesorbancData = {
  id: "sertesorbanc",
  title: "2. Sertésorbánc",
  studyMaterial: [
    {
      "title": "1. A kórokozó jellemzői",
      "icon": "microscope",
      "color": "bg-blue-50 border-blue-200",
      "iconColor": "text-blue-500",
      "sections": [
        {
          "header": "1.1. Morfológia és alapvető tulajdonságok",
          "points": [
            "**Erysipelothrix rhusiopathiae**: Gram-pozitív, vékony pálcika",
            "Nem mozgó, nem spóraképző, de **rendkívül ellenálló** a környezetben",
            "**Fakultatív intracelluláris** → a gazda sejtjeiben is túlél",
            "Sertésben főleg az 1-es és 2-es szerotípusok jelentősek"
          ]
        },
        {
          "header": "1.2. Előfordulás és Zoonózis",
          "points": [
            "Fő gazda a sertés, de előfordul baromfiban (pulyka!), vadmadarakban, halakban",
            "**Zoonózis:** emberben **erysipeloid** (bőrgyulladás) néven ismert"
          ]
        },
        {
          "header": "1.3. Virulenciafaktorok",
          "points": [
            "**Neuraminidáz enzim:** károsítja az endotélsejteket → trombózishajlam → **mikrotrombózisok**",
            "Ez felelős a rombusz alakú bőrelhalásokért!",
            "**Poliszacharid tok:** védi a baktériumot a falósejtektől",
            "**SpaA antigén:** erősen immunogén felszíni fehérje"
          ]
        }
      ]
    },
    {
      "title": "2. Terjedés és Fogékonyság",
      "icon": "book",
      "color": "bg-gray-50 border-gray-200",
      "iconColor": "text-gray-500",
      "sections": [
        {
          "header": "2.1. Fertőzés forrása",
          "points": [
            "Tünetmentes hordozók (akár 50%): mandulákban telepszik meg",
            "Ürítés: nyál, bélsár, vizelet útján"
          ]
        },
        {
          "header": "2.2. Terjedési módok",
          "points": [
            "**Szájon át** (szennyezett takarmány, víz) – leggyakoribb",
            "Bőrön át (sebek), rovarcsípéssel (vektorok)",
            "Fertőzött tetemek (hónapokig túlél benne a baci!)"
          ]
        },
        {
          "header": "2.3. Fogékonyság",
          "points": [
            "Legfogékonyabbak: **3–6 hónapos süldők**",
            "Hajlamosító tényezők: stressz, hirtelen időjárás-változás, rossz higiénia"
          ]
        }
      ]
    },
    {
      "title": "3. Klinikai formák",
      "icon": "alert-triangle",
      "color": "bg-orange-50 border-orange-200",
      "iconColor": "text-orange-500",
      "sections": [
        {
          "header": "3.1. Akut (heveny) forma",
          "points": [
            "**Tünetek:** 40–42 °C láz, levertség, vetélés",
            "**Bőrtünet:** rombusz (gyémánt) alakú kiütések, „orbáncos csalánláz”",
            "A neuraminidáz okozta trombózis miatt kialakuló körülírt bőrinfarktusok"
          ]
        },
        {
          "header": "3.2. Krónikus (idült) forma",
          "points": [
            "Az akut szak túlélőiben alakul ki 2–3 hét után",
            "**Proliferatív arthritis:** ízületi tok megvastagodás, porcerózió, **ankylosis** (összecsontosodás)",
            "**Vegetatív endocarditis:** szemölcsszerű felrakódások a szívbillentyűkön (főleg mitrális) → embolizációveszély!",
            "Bőrelhalás: a rombusz alakú foltok helyén"
          ]
        }
      ]
    },
    {
      "title": "4. Diagnosztika és Terápia",
      "icon": "search",
      "color": "bg-slate-50 border-slate-200",
      "iconColor": "text-slate-500",
      "sections": [
        {
          "header": "4.1. Diagnózis",
          "points": [
            "Klinikai kép: rombusz foltok + láz + sántaság",
            "Bakteriológia: tenyésztés (lép, máj, nyirokcsomó, vér)",
            "Véragaron apró telepek, **alfa-hemolízis** (zöldítő)"
          ]
        },
        {
          "header": "4.2. Kezelés",
          "points": [
            "Első választás: **penicillin** (24-48 órán belül látványos javulás)",
            "Tetraciklinre gyakori a rezisztencia!",
            "A krónikus formák (ízület, szív) gyógykezelése kevésbé eredményes a maradandó károsodások miatt."
          ]
        }
      ]
    },
    {
      "title": "5. Megelőzés",
      "icon": "shield-check",
      "color": "bg-emerald-50 border-emerald-200",
      "iconColor": "text-emerald-500",
      "sections": [
        {
          "header": "5.1. Vakcinázás",
          "points": [
            "Kocák: fedeztetés előtt",
            "Malacok: 8–12 hetes korban, emlékeztetővel",
            "SpaA antigén elleni védelem"
          ]
        },
        {
          "header": "5.2. Higiénia",
          "points": [
            "Rágcsáló- és légyirtás, tetemek eltávolítása, karanténozás"
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "orb_1",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Mi a sertésorbánc kórokozója?",
      options: ["Streptococcus suis", "Erysipelothrix rhusiopathiae", "Staphylococcus aureus", "E. coli"],
      correctAnswer: 1,
      explanation: "A sertésorbánc kórokozója az Erysipelothrix rhusiopathiae nevű baktérium."
    },
    {
      id: "orb_2",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Melyik enzim felelős az endotélkárosodásért és a mikrotrombózisokért?",
      options: ["Hialuronidáz", "Neuraminidáz", "Koaguláz", "Lipáz"],
      correctAnswer: 1,
      explanation: "A neuraminidáz enzim hasítja le a sziálsavat, ami endotélkárosodáshoz és trombózishoz vezet."
    },
    {
      id: "orb_3",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Mi a jellemző bőrtünet heveny orbánc esetén?",
      options: ["Kerek, gennyes hólyagok", "Rombusz (gyémánt) alakú vörös foltok", "Egész testre kiterjedő hámlás", "Nincs bőrtünet"],
      correctAnswer: 1,
      explanation: "A kapillárisok trombózisa miatt jellegzetes rombusz alakú bőrinfarktusok jönnek létre."
    },
    {
      id: "orb_4",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Melyik állatcsoport a legfogékonyabb az orbáncra?",
      options: ["1-2 napos malacok", "3-6 hónapos süldők", "Öreg kanok", "Csak a vemhes kocák"],
      correctAnswer: 1,
      explanation: "A 3-6 hónapos süldők a legfogékonyabbak, miután a kolosztrális immunitásuk lecsökken."
    },
    {
      id: "orb_5",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Mit okoz az orbáncbaktérium krónikus formában a szívben?",
      options: ["Szívburokgyulladást", "Vegetatív endocarditist (szemölcsszerű felrakódás)", "Szívizom-elfajulást", "Semmit"],
      correctAnswer: 1,
      explanation: "A szívbillentyűkön (főleg a mitrálison) karfiolszerű vegetációk alakulnak ki."
    },
    {
      id: "orb_6",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Milyen hemolízist mutat az orbáncbaktérium véragaron?",
      options: ["Béta (teljes)", "Alfa (zöldítő)", "Gamma (nincs)", "Kettős"],
      correctAnswer: 1,
      explanation: "Az E. rhusiopathiae jellegzetesen alfa-hemolizáló."
    },
    {
      id: "orb_7",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Melyik az elsődlegesen választandó antibiotikum orbánc kezelésére?",
      options: ["Tetraciklin", "Penicillin", "Gentamicin", "Szulfonamid"],
      correctAnswer: 1,
      explanation: "A penicillin rendkívül hatékony, 24-48 órán belül javulást hoz."
    },
    {
      id: "orb_8",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Hogyan nevezzük az emberi fertőzést?",
      options: ["Orbánc", "Erysipeloid", "Szeptikémia", "Dermatitis"],
      correctAnswer: 1,
      explanation: "Az emberben kialakuló bőrgyulladást erysipeloidnak nevezzük (zoonózis)."
    },
    {
      id: "orb_9",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Mit jelent az 'ankylosis'?",
      options: ["Ízületi gyulladás", "Ízületek összecsontosodása, elmerevedése", "Bőrelhalás", "Vemhességi zavar"],
      correctAnswer: 1,
      explanation: "A krónikus ízületgyulladás végső stádiumában az ízület elmerevedik."
    },
    {
      id: "orb_10",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Melyik antigén a legfontosabb a vakcinázás szempontjából?",
      options: ["Lipopoliszacharid", "SpaA (Surface protective antigen A)", "Béta-toxin", "Flagellin"],
      correctAnswer: 1,
      explanation: "A SpaA antigén a fő protektív immunogén fehérje a baktérium felszínén."
    },
    {
      id: "orb_11",
      topic: "Sertésorbánc",
      type: "bool",
      question: "Az orbáncbaktérium képes túlélni a gazdasejteken belül is.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, fakultatív intracelluláris kórokozó, ami segíti a perzisztenciát."
    },
    {
      id: "orb_12",
      topic: "Sertésorbánc",
      type: "bool",
      question: "Az orbánc spórával terjed a környezetben.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis, az orbáncbaktérium nem képez spórát, de anélkül is ellenálló."
    },
    {
      id: "orb_13",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Melyik állatfajban okozhat még súlyos orbáncot a sertésen kívül?",
      options: ["Kutya", "Pulyka", "Macska", "Ló"],
      correctAnswer: 1,
      explanation: "A baromfifajok közül a pulyka különösen fogékony."
    },
    {
      id: "orb_14",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Hány fokos láz jellemző az akut formára?",
      options: ["38-39 °C", "40-42 °C", "43-45 °C", "Nincs láz"],
      correctAnswer: 1,
      explanation: "A heveny szeptikémiás szakban magas, akár 42 fokos láz is kialakulhat."
    },
    {
      id: "orb_15",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Melyik billentyű érintett leggyakrabban endocarditis esetén?",
      options: ["Aorta", "Mitrális (kéthegyű)", "Trikuszpidális", "Pulmonális"],
      correctAnswer: 1,
      explanation: "Leggyakrabban a bal szívfél mitrális billentyűjén alakulnak ki vegetációk."
    },
    {
      id: "orb_16",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Mennyi az akut forma lappangási ideje?",
      options: ["Néhány óra", "1-3 nap", "2 hét", "1 hónap"],
      correctAnswer: 1,
      explanation: "A fertőzés után 1-3 nappal már jelentkezhetnek a tünetek."
    },
    {
      id: "orb_17",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Hogyan terjed leggyakrabban a fertőzés?",
      options: ["Légúton", "Szájon át (per os)", "Csak mesterséges termékenyítéssel", "Idegpályákon"],
      correctAnswer: 1,
      explanation: "A szájon át történő felvétel a leggyakoribb természetes út."
    },
    {
      id: "orb_18",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Mi jellemző az orbáncbaktérium morfológiájára?",
      options: ["Nagy pálca", "Vékony, rövid pálcika, esetleg fonalszerű", "Gömbalakú", "Spirális"],
      correctAnswer: 1,
      explanation: "Gram-pozitív, vékony, rövid pálcika, krónikus esetben fonallá nyúlhat."
    },
    {
      id: "orb_19",
      topic: "Sertésorbánc",
      type: "bool",
      question: "A sertésorbánc ellen létezik vakcina.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, a vakcinázás a megelőzés kulcsa."
    },
    {
      id: "orb_20",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Melyik szervet érdemes beküldeni laborvizsgálatra szeptikémiás gyanú esetén?",
      options: ["Csak bélsár", "Lép, máj, nyirokcsomó", "Csak vizelet", "Szőrminta"],
      correctAnswer: 1,
      explanation: "A parenchimás szervekből jól tenyészthető a kórokozó."
    },
    {
      id: "orb_21",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "A neuraminidáz hatására mi történik a vérlemezkékkel?",
      options: ["Elpusztulnak", "Összecsapzódnak (aggregáció)", "Felszaporodnak", "Nem változnak"],
      correctAnswer: 1,
      explanation: "Fokozódik az aggregációs hajlam, ami mikrotrombózisokhoz vezet."
    },
    {
      id: "orb_22",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Mikor oltják a kocákat orbánc ellen?",
      options: ["Csak ha betegek", "Fedeztetés előtt", "Ellés után 1 órával", "Soha"],
      correctAnswer: 1,
      explanation: "A fedeztetés előtti oltás védi a kocát és biztosítja a malacok védelmét."
    },
    {
      id: "orb_23",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Milyen színűek a rombusz alakú foltok a bőrön?",
      options: ["Hófehér", "Vörös vagy lilás", "Zöld", "Fekete"],
      correctAnswer: 1,
      explanation: "A pangás és gyulladás miatt vörös-lilás színűek."
    },
    {
      id: "orb_24",
      topic: "Sertésorbánc",
      type: "bool",
      question: "A sertések mandulája lehet a baktérium rejtekhelye.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, a tünetmentes hordozók mandulájában perzisztálhat a baci."
    },
    {
      id: "orb_25",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Melyik antibiotikum-csoport hatástalan az orbáncra?",
      options: ["Penicillinek", "Szulfonamidok", "Makrolidok", "Linkózamidok"],
      correctAnswer: 1,
      explanation: "A szulfonamidok általában hatástalanok ellene."
    },
    {
      id: "orb_26",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Meddig maradhat életképes a baktérium a tetemben?",
      options: ["1 napig", "Hónapokig", "10 évig", "1 óráig"],
      correctAnswer: 1,
      explanation: "Rendkívüli ellenálló képessége miatt tetemben hónapokig túlél."
    },
    {
      id: "orb_27",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Melyik tényező hajlamosíthat az orbánc kitörésére?",
      options: ["Sok pihenés", "Hirtelen lehűlés vagy kánikula (stressz)", "Jó minőségű takarmány", "Zenehallgatás"],
      correctAnswer: 1,
      explanation: "A stresszhatások (pl. időjárás) gyengítik az immunrendszert, segítve a betegség kitörését."
    },
    {
      id: "orb_28",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Milyen jellegű a gyulladás az ízületekben idült esetben?",
      options: ["Csak savós", "Proliferatív (szövetszaporulattal járó)", "Nincs gyulladás", "Gennyes"],
      correctAnswer: 1,
      explanation: "A krónikus forma szövetszaporulattal és porckárosodással jár."
    },
    {
      id: "orb_29",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Mi a teendő a 'csalánlázas' sertéssel?",
      options: ["Kivárni", "Azonnal antibiotikummal (pl. penicillin) kezelni", "Csak lemosni", "Selyemkendőbe csavarni"],
      correctAnswer: 1,
      explanation: "Az időben megkezdett kezelés életmentő és gyors gyógyulást hoz."
    },
    {
      id: "orb_30",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Melyik állítás igaz az orbáncbaktériumra?",
      options: ["Obligát aerob", "Fakultatív anaerob", "Csak mesterségesen tenyészthető", "Vírus"],
      correctAnswer: 1,
      explanation: "Az E. rhusiopathiae fakultatív anaerob életmódú."
    },
    {
      id: "orb_31",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Mit okozhat a szívbillentyűről leszakadó vegetáció?",
      options: ["Tüsszentést", "Embóliát és hirtelen elhullást", "Székrekedést", "Fokozott étvágyat"],
      correctAnswer: 1,
      explanation: "A leszakadó darabok elzárhatják az ereket (embólia)."
    },
    {
      id: "orb_32",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Milyen gyakran ürítik a hordozók a baktériumot?",
      options: ["Soha", "Periódikusan vagy folyamatosan", "Csak teliholdkor", "Csak egyszer az életben"],
      correctAnswer: 1,
      explanation: "A hordozók váladékaikkal folyamatosan szennyezhetik a környezetet."
    },
    {
      id: "orb_33",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Hogyan néz ki a baktérium Gram-festéssel?",
      options: ["Gram-negatív vörös", "Gram-pozitív kék/lila", "Nem festődik", "Zöld"],
      correctAnswer: 1,
      explanation: "Az orbáncbaktérium Gram-pozitív."
    },
    {
      id: "orb_34",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Milyen bőrelváltozás maradhat az idült szak után?",
      options: ["Selymes szőr", "Hegesedés és bőrelhalás", "Pikkelysömör", "Szeplők"],
      correctAnswer: 1,
      explanation: "A súlyos infarktusok helyén a bőr elhalhat és hegesedhet."
    },
    {
      id: "orb_35",
      topic: "Sertésorbánc",
      type: "bool",
      question: "A tetraciklinre való rezisztencia gyakori az orbáncbaktériumoknál.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, ezért nem a tetraciklin az elsődleges választás."
    },
    {
      id: "orb_36",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Melyik antigén ellen véd a legtöbb vakcina?",
      options: ["O-antigén", "SpaA", "K-antigén", "H-antigén"],
      correctAnswer: 1,
      explanation: "A SpaA a legfontosabb protektív felszíni fehérje."
    },
    {
      id: "orb_37",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Milyen jellegű a láz akut orbáncban?",
      options: ["Hőemelkedés", "Magas, folyamatos láz (akár 42 °C)", "Hullámzó láz", "Nincs láz"],
      correctAnswer: 1,
      explanation: "Heveny szeptikémiában nagyon magas láz jellemző."
    },
    {
      id: "orb_38",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Milyen alakúak a telepek véragaron?",
      options: ["Nagy, szétterülő", "Apró, harmatcsepp-szerű", "Fekete", "Sárga"],
      correctAnswer: 1,
      explanation: "Kicsi, áttetsző, harmatcseppre emlékeztető telepeket képez."
    },
    {
      id: "orb_39",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Mit jelent a 'fakultatív intracelluláris' kifejezés?",
      options: ["Csak sejten belül él", "Sejten belül és kívül is képes élni", "Csak laborban él", "Sejtromboló"],
      correctAnswer: 1,
      explanation: "Képes túlélni és szaporodni a gazdaszervezet sejtjeiben (pl. makrofágok) is."
    },
    {
      id: "orb_40",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Melyik állítás igaz a zoonózisról?",
      options: ["Csak harapással terjed emberre", "A fertőzött hús kezelésekor bőrsérülésen át juthat be", "Emberre nem veszélyes", "Csak a gyerekekre veszélyes"],
      correctAnswer: 1,
      explanation: "Bőrsérüléseken keresztül jut be, gyakran henteseknél, horgászoknál."
    },
    {
      id: "orb_41",
      topic: "Sertésorbánc",
      type: "bool",
      question: "Az orbáncbaktérium mozgásra képes ostoraival.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis, az orbáncbaktérium nem mozgó."
    },
    {
      id: "orb_42",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Mi a sántaság oka az orbánc kezdeti szakaszában?",
      options: ["Csonttörés", "Ízületgyulladás (arthritis)", "Izomláz", "Hosszú körmök"],
      correctAnswer: 1,
      explanation: "A baktérium korán megtelepszik az ízületekben, gyulladást okozva."
    },
    {
      id: "orb_43",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Hogyan hat a hideg füstölés a baktériumra?",
      options: ["Azonnal elpusztítja", "Jól tűri, életben maradhat", "Megsokszorozza", "Zölddé teszi"],
      correctAnswer: 1,
      explanation: "Rendkívül ellenálló a tartósítási eljárásokkal (füstölés, sózás) szemben."
    },
    {
      id: "orb_44",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Mikor a legcélszerűbb a malacok első oltása?",
      options: ["1 napos korban", "8-12 hetes korban", "1 éves korban", "Soha"],
      correctAnswer: 1,
      explanation: "Ekkorra csökken le a kolosztrális védettség annyira, hogy az oltás hatékony legyen."
    },
    {
      id: "orb_45",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Mi a teendő a beteg állattal?",
      options: ["Együtt hagyni a többivel", "Elkülöníteni és azonnal kezelni", "Eladni", "Éheztetni"],
      correctAnswer: 1,
      explanation: "Az elkülönítés gátolja a terjedést, a gyors kezelés pedig menti az állatot."
    },
    {
      id: "orb_46",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Melyik szerv megnagyobbodása (daganata) jellemző kórbonctanilag?",
      options: ["Vese", "Lép", "Tüdő", "Gyomor"],
      correctAnswer: 1,
      explanation: "A szeptikémiás szakban a lép kifejezetten megnagyobbodik."
    },
    {
      id: "orb_47",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Mi a PCR vizsgálat előnye?",
      options: ["Lassú", "Gyors és megbízhatóan kimutatja a baktérium DNS-t", "Csak halott állatnál jó", "Nagyon olcsó"],
      correctAnswer: 1,
      explanation: "A molekuláris módszerekkel gyorsan igazolható a kórokozó jelenléte."
    },
    {
      id: "orb_48",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Hány szerotípus ismert összesen?",
      options: ["Csak 2", "Több mint 25", "100", "1"],
      correctAnswer: 1,
      explanation: "Számos szerotípust (1-26, N) leírtak már."
    },
    {
      id: "orb_49",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Melyik kórkép nem tartozik az orbánchoz?",
      options: ["Csalánláz", "Endocarditis", "Választási hasmenés", "Arthritis"],
      correctAnswer: 2,
      explanation: "A választási hasmenést általában E. coli okozza, nem az orbánc."
    },
    {
      id: "orb_50",
      topic: "Sertésorbánc",
      type: "mcq",
      question: "Mi az összegzés fő tanulsága?",
      options: ["Az orbánc nem veszélyes", "A megelőzés kulcsa a vakcinázás és higiénia", "Csak a kanok betegek", "Nincs ellene gyógyszer"],
      correctAnswer: 1,
      explanation: "A rendszeres oltás és a tiszta környezet tartja távol a betegséget."
    }
  ]
};
