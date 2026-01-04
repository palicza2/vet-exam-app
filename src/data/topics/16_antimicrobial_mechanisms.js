export const antimicrobialMechanismsData = {
  id: "antimicrobial_mechanisms",
  title: "16. Antimikrobiális szerek hatásmechanizmusa",
  studyMaterial: [
    {
      title: "1. Alapfogalmak és Csoportosítás",
      icon: "microscope",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-500",
      sections: [
        {
          header: "Hatás jellege",
          points: [
            "**Baktericid:** Elpusztítja a baktériumokat (pl. béta-laktámok, aminoglikozidok, fluorokinolonok).",
            "**Bakteriosztatikus:** Gátolja a szaporodást (pl. tetraciklinek, makrolidok, szulfonamidok)."
          ]
        },
        {
          header: "Fő támadáspontok",
          points: [
            "**Sejtfalszintézis gátlása** (peptidoglikán réteg).",
            "**Fehérjeszintézis gátlása** (riboszómák: 30S vagy 50S alegység).",
            "**Nukleinsav-szintézis gátlása** (DNS-replikáció vagy folsavszintézis).",
            "**Sejtmembrán károsítása** (permeabilitás megváltoztatása)."
          ]
        }
      ]
    },
    {
      title: "2. Sejtfalszintézis Gátlók",
      icon: "shieldCheck",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
      sections: [
        {
          header: "Béta-laktámok",
          points: [
            "**Mechanizmus:** A transzpeptidáz (PBP) enzimek gátlása -> a peptidoglikán keresztkötések nem jönnek létre -> lízis.",
            "**Főbb szerek:** Penicillinek (Penicillin G, amoxicillin), Cefalosporinok (ceftiofur, cefquinom).",
            "**Jellemző:** Csak osztódó sejtekre hatnak. Szelektívek (állati sejtnek nincs sejtfala).",
            "**NEM hatnak:** Mycoplasmákra (mert nincs sejtfaluk!)."
          ]
        },
        {
          header: "Egyéb sejtfalra hatók",
          points: [
            "**Bacitracin:** Korai sejtfalépítési lépést gátol. Clostridiumok ellen baromfiban.",
            "**Foszfomicin:** MurA enzim gátlása. Széles spektrum."
          ]
        }
      ]
    },
    {
      title: "3. Fehérjeszintézis Gátlók",
      icon: "pill",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
      sections: [
        {
          header: "30S alegység gátlói",
          points: [
            "**Aminoglikozidok (Gentamicin, Neomycin):** Baktericid hatás! Aerob Gram-negatívokra jó. Anaerobokra nem hat (oxigénigényes felvétel).",
            "**Tetraciklinek (Oxitetraciklin, Doxiciklin):** Bakteriosztatikus, széles spektrum (Mycoplasma is!). Kelátképzők (Ca/Mg gátolja a felszívódást)."
          ]
        },
        {
          header: "50S alegység gátlói",
          points: [
            "**Makrolidok (Tilozin, Tulatromicin):** Elsőrendű szerek légzőszervi betegségekre (BRD) és Mycoplasmákra.",
            "**Linkózamidok (Linkomicin):** Sertésdizentéria (Brachyspira) ellen. Kérődzőkben tilos (fatális dysbacteriosis!).",
            "**Fenikolok (Florfenikol):** Széles spektrum, tüdőgyulladás (APP, Pasteurella) kezelésére.",
            "**Pleuromutilinek (Tiamulin):** Sertésspecifikus szer (dizentéria, enzootikus pneumonia ellen)."
          ]
        }
      ]
    },
    {
      title: "4. Nukleinsav-szintézis és Anyagcsere Gátlók",
      icon: "brain",
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-500",
      sections: [
        {
          header: "DNS-giráz gátlók",
          points: [
            "**Fluorokinolonok (Enrofloxacin, Marbofloxacin):** DNS-giráz (topoizomeráz II) gátlása. Gyorsan baktericid, koncentráció-függő.",
            "**Fontos:** Emberi orvoslásban is kritikusak -> állatgyógyászati alkalmazásuk szigorúan korlátozott."
          ]
        },
        {
          header: "Folsavszintézis gátlók (Antimetabolitok)",
          points: [
            "**Szulfonamidok + Trimetoprim:** Két különböző ponton gátolják a folsavszintézist. Szinergista baktericid hatás.",
            "Széles spektrum, kokcidiumok ellen is hatnak baromfiban."
          ]
        }
      ]
    },
    {
      title: "5. Sejtmembrán Károsítók",
      icon: "activity",
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-500",
      sections: [
        {
          header: "Polimixinek (Kolisztin)",
          points: [
            "**Mechanizmus:** Detergens-szerű hatás a Gram-negatívok külső membránján (LPS kötés).",
            "**Alkalmazás:** Sertésben E. coli hasmenés ellen (szájon át, mert nem szívódik fel).",
            "**Veszély:** Szisztémásan vesekárosító."
          ]
        },
        {
          header: "Ionofórok (Monenzin, Salinomicin)",
          points: [
            "**Mechanizmus:** Felborítják az ionháztartást (Na/K pumpa).",
            "**Alkalmazás:** Baromfiban kokcidiosztatikum, szarvasmarhában bendőmanipuláló (hozamfokozó).",
            "**Sertésben:** Tilos, mert toxikus lehet!"
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "mech_1",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Melyik csoport gátolja a baktériumok sejtfalszintézisét?",
      options: ["Tetraciklinek", "Béta-laktámok (pl. Penicillinek)", "Aminoglikozidok", "Fluorokinolonok"],
      correctAnswer: 1,
      explanation: "A béta-laktámok a peptidoglikán keresztkötések kialakulását (transzpeptidációt) gátolják."
    },
    {
      id: "mech_2",
      topic: "Antimikrobiális mechanizmusok",
      type: "bool",
      question: "A penicillinek kiválóan alkalmasak a Mycoplasma fertőzések gyógykezelésére.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis. A Mycoplasmáknak nincs sejtfaluk, így a sejtfalszintézis-gátlók hatástalanok rájuk."
    },
    {
      id: "mech_3",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Melyik fehérjeszintézis-gátló csoport baktericid hatású?",
      options: ["Makrolidok", "Tetraciklinek", "Aminoglikozidok (pl. Gentamicin)", "Linkózamidok"],
      correctAnswer: 2,
      explanation: "Bár a legtöbb fehérjeszintézis-gátló bakteriosztatikus, az aminoglikozidok baktericid hatásúak."
    },
    {
      id: "mech_4",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Milyen mechanizmussal hatnak a fluorokinolonok (pl. enrofloxacin)?",
      options: ["Riboszóma gátlás", "DNS-giráz gátlás", "Sejtfal roncsolás", "Folsavszintézis gátlás"],
      correctAnswer: 1,
      explanation: "A fluorokinolonok a DNS-giráz (topoizomeráz II) enzim gátlásával akadályozzák a DNS replikációt."
    },
    {
      id: "mech_5",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Melyik szer hat detergens-szerűen a Gram-negatív baktériumok külső membránján?",
      options: ["Penicillin", "Kolisztin", "Tiamulin", "Florfenikol"],
      correctAnswer: 1,
      explanation: "A kolisztin (polimixin E) a sejtmembrán integritását bontja meg detergens-szerű hatással."
    },
    {
      id: "mech_6",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Melyik állatfajban tilos linkomicint alkalmazni a fatális dysbacteriosis veszélye miatt?",
      options: ["Sertés", "Baromfi", "Szarvasmarha (és egyéb kérődzők)", "Kutya"],
      correctAnswer: 2,
      explanation: "A linkózamidok a kérődzők bendőflórájának súlyos zavarát okozhatják, ami elhulláshoz vezet."
    },
    {
      id: "mech_7",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Hogyan hat a szulfonamid és a trimetoprim kombinációja?",
      options: ["Különböző riboszómákra hatnak", "A folsavszintézis két különböző lépését gátolják", "Roncsolják a DNS-t", "Gátolják a sejtosztódást"],
      correctAnswer: 1,
      explanation: "A szulfonamidok és a trimetoprim szekvenciális blokádot képeznek a folsavszintézisben."
    },
    {
      id: "mech_8",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Melyik csoportba tartozik a tulatromicin?",
      options: ["Makrolidok", "Aminoglikozidok", "Fenikolok", "Pleuromutilinek"],
      correctAnswer: 0,
      explanation: "A tulatromicin egy modern makrolid, hosszan tartó hatással."
    },
    {
      id: "mech_9",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Melyik antibiotikum csoport gátolja a 30S riboszóma alegységet?",
      options: ["Tetraciklinek és Aminoglikozidok", "Makrolidok és Linkózamidok", "Béta-laktámok", "Fenikolok"],
      correctAnswer: 0,
      explanation: "A tetraciklinek és az aminoglikozidok a kisebb (30S) alegységhez kötődnek."
    },
    {
      id: "mech_10",
      topic: "Antimikrobiális mechanizmusok",
      type: "bool",
      question: "Az aminoglikozidok hatékonyak anaerob baktériumok ellen is.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis. Az aminoglikozidok bejutása a sejtbe oxigénfüggő, így anaerob környezetben hatástalanok."
    },
    {
      id: "mech_11",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Mi a pleuromutilinek (pl. tiamulin) fő alkalmazási területe?",
      options: ["Baromfi bélgyulladás", "Sertés dizentéria és enzootikus pneumonia", "Szarvasmarha tőgygyulladás", "Kutyák bőrfertőzése"],
      correctAnswer: 1,
      explanation: "A tiamulin és valnemulin a sertéságazat specifikus antibiotikumai Brachyspira és Mycoplasma ellen."
    },
    {
      id: "mech_12",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Melyik szer okozhat fogelszíneződést fiatal állatokban a kalciumhoz való kötődése miatt?",
      options: ["Penicillin", "Tetraciklinek", "Enrofloxacin", "Kolisztin"],
      correctAnswer: 1,
      explanation: "A tetraciklinek kelátot képeznek a kalciummal, beépülnek a csontokba és fogakba."
    },
    {
      id: "mech_13",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Milyen hatása van az ionofóroknak (pl. monenzin) a szarvasmarha bendőjében?",
      options: ["Elpusztítják az összes baktériumot", "Módosítják a mikrobiális populációt, javítva a takarmányhasznosulást", "Gátolják a kérődzést", "Vitaminokat termelnek"],
      correctAnswer: 1,
      explanation: "Az ionofórok szelektíven gátolnak bizonyos baktériumokat, így hatékonyabbá teszik a bendőfermentációt."
    },
    {
      id: "mech_14",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Mit jelent a 'koncentráció-függő baktericid' hatás (pl. fluorokinolonoknál)?",
      options: ["Mindegy mekkora a dózis", "A hatékonyság a csúcskoncentráció (Cmax) nagyságától függ", "Csak kis adagban hatnak", "Csak sokáig adva hatnak"],
      correctAnswer: 1,
      explanation: "Minél magasabb a koncentráció a MIC értékhez képest, annál gyorsabb és erősebb a baktériumölő hatás."
    },
    {
      id: "mech_15",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Melyik szer tilos élelmiszer-termelő állatokban a mutagén/rákkeltő gyanú miatt?",
      options: ["Amoxicillin", "Nitroimidazolok (pl. metronidazol)", "Doxiciklin", "Tilozin"],
      correctAnswer: 1,
      explanation: "A metronidazol és társai humán egészségügyi kockázatuk miatt tiltottak haszonállatoknál."
    },
    {
      id: "mech_16",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Melyik enzim gátlásával fejtik ki hatásukat a fenikolok (pl. florfenikol)?",
      options: ["DNS-polimeráz", "Peptidiltranszferáz", "Transzpeptidáz", "RNS-polimeráz"],
      correctAnswer: 1,
      explanation: "A fenikolok az 50S alegység peptidiltranszferáz centrumához kötődnek."
    },
    {
      id: "mech_17",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Mire használják a bacitracint a baromfitenyésztésben?",
      options: ["Tüsszögés ellen", "Clostridium perfringens okozta nekrotikus enteritis ellen", "Szalmonella ellen", "Növekedés gátlására"],
      correctAnswer: 1,
      explanation: "A bacitracin hatékony a Gram-pozitív anaerob Clostridiumok ellen a bélben."
    },
    {
      id: "mech_18",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Miért nem szívódik fel jól a neomycin a bélből?",
      options: ["Mert túl kicsi", "Mert erősen poláris (aminoglikozid)", "Mert lebontja a gyomorsav", "Mert a baktériumok megeszik"],
      correctAnswer: 1,
      explanation: "Az aminoglikozidok poláris szerkezetük miatt alig szívódnak fel a tápcsatornából, így bélfertőtlenítésre kiválóak."
    },
    {
      id: "mech_19",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Melyik szervet károsíthatják az aminoglikozidok magas dózisban?",
      options: ["Máj", "Vese és hallószerv", "Szív", "Lép"],
      correctAnswer: 1,
      explanation: "Ismert mellékhatásuk a nephrotoxicitás (vese) és az ototoxicitás (hallás/egyensúly)."
    },
    {
      id: "mech_20",
      topic: "Antimikrobiális mechanizmusok",
      type: "bool",
      question: "A szulfonamidok szerkezeti analógjai a PABA-nak (para-amino-benzoesav).",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Kompetitív módon gátolják a PABA beépülését a folsavba."
    },
    {
      id: "mech_21",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Melyik béta-laktám csoportba tartozik a ceftiofur?",
      options: ["1. generációs cefalosporin", "3. generációs cefalosporin", "Penicillin", "Karbapenem"],
      correctAnswer: 1,
      explanation: "A ceftiofur egy széles spektrumú, 3. generációs cefalosporin, amit gyakran használnak légzőszervi betegségekre."
    },
    {
      id: "mech_22",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Hogyan hat a rifampicin a baktériumokra?",
      options: ["DNS-giráz gátlás", "DNS-függő RNS-polimeráz gátlása", "Riboszóma roncsolás", "Sejtfal lyukasztás"],
      correctAnswer: 1,
      explanation: "A rifampicin az RNS-szintézist gátolja az RNS-polimerázhoz kötődve."
    },
    {
      id: "mech_23",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Mit jelent a 'szinergizmus' két antibiotikum között?",
      options: ["Gyengítik egymást", "A két szer együttes hatása nagyobb, mint a különálló hatásaik összege", "Semmit nem változtatnak", "Kicsapódnak az oldatból"],
      correctAnswer: 1,
      explanation: "A szinergista kombinációk (pl. szulfonamid + trimetoprim) sokkal hatékonyabbak együtt."
    },
    {
      id: "mech_24",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Melyik szer gátolja a baktériumok folsavszintézisének MÁSODIK lépését?",
      options: ["Szulfonamid", "Trimetoprim", "Penicillin", "Enrofloxacin"],
      correctAnswer: 1,
      explanation: "A szulfonamid az első (dihidropteroát-szintetáz), a trimetoprim a második (dihidrofolát-reduktáz) lépést gátolja."
    },
    {
      id: "mech_25",
      topic: "Antimikrobiális mechanizmusok",
      type: "bool",
      question: "A béta-laktám antibiotikumok csak akkor hatnak, ha a baktériumok aktívan osztódnak.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Mivel a sejtfal felépítését gátolják, nyugalmi állapotban lévő baktériumokra nem hatnak."
    },
    {
      id: "mech_26",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Melyik szervrendszert károsíthatják a tetraciklinek?",
      options: ["Csontfejlődés és fogazat (fiatal állatokban)", "Lép", "Szőrzet", "Paták"],
      correctAnswer: 0,
      explanation: "A tetraciklinek kalciummal képeznek komplexet, így beépülnek a fejlődő csontokba és fogakba."
    },
    {
      id: "mech_27",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Hogyan hatnak a lincosamidok (pl. linkomicin)?",
      options: ["Sejtfal gátlás", "50S riboszóma alegység gátlása", "DNS szintézis gátlás", "Folsav gátlás"],
      correctAnswer: 1,
      explanation: "A lincosamidok a fehérjeszintézist gátolják az 50S alegységhez kötődve."
    },
    {
      id: "mech_28",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Mi a különbség a bakteriostatikus és a baktericid hatás között?",
      options: [
        "A statikus öl, a cid gátol",
        "A statikus gátolja a szaporodást, a baktericid elpusztítja a sejteket",
        "Nincs különbség",
        "Csak a dózistól függ"
      ],
      correctAnswer: 1,
      explanation: "A statikus szerek az immunrendszer segítségére támaszkodnak a fertőzés felszámolásához."
    },
    {
      id: "mech_29",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Melyik hatóanyag tartozik a pleuromutilinek közé?",
      options: ["Tiamulin", "Gentamicin", "Enrofloxacin", "Penicillin"],
      correctAnswer: 0,
      explanation: "A tiamulin egy fontos sertésgyógyászati pleuromutilin antibiotikum."
    },
    {
      id: "mech_30",
      topic: "Antimikrobiális mechanizmusok",
      type: "bool",
      question: "A kolisztin Gram-pozitív baktériumok ellen hatékony.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis. A kolisztin szelektíven a Gram-negatívok külső membránját (LPS) támadja."
    },
    {
      id: "mech_31",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Melyik antibiotikum csoport gátolja a folsavszintézist?",
      options: ["Penicillinek", "Szulfonamidok", "Tetraciklinek", "Aminoglikozidok"],
      correctAnswer: 1,
      explanation: "A szulfonamidok antimetabolitok, amelyek a folsav felépítését akadályozzák."
    },
    {
      id: "mech_32",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Mi jellemző az aminoglikozidok felszívódására a bélből?",
      options: ["Kiválóan felszívódnak", "Alig szívódnak fel (lokális bélhatás)", "Csak zsírral szívódnak fel", "A gyomorsav lebontja őket"],
      correctAnswer: 1,
      explanation: "Vízoldékony, poláris molekulák, ezért szájon át adva a bélben maradnak."
    },
    {
      id: "mech_33",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Melyik antibiotikum kötődik a PBP (penicillin-kötő fehérje) enzimekhez?",
      options: ["Amoxicillin", "Tiamulin", "Doxiciklin", "Florfenikol"],
      correctAnswer: 0,
      explanation: "A béta-laktámok (mint az amoxicillin) a PBP-k gátlásával akadályozzák a sejtfalépítést."
    },
    {
      id: "mech_34",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Hogyan hat a florfenikol?",
      options: ["Sejtfal gátlás", "Fehérjeszintézis gátlása (50S)", "DNS giráz gátlás", "Membrán roncsolás"],
      correctAnswer: 1,
      explanation: "A fenikolok (pl. florfenikol) a fehérjeszintézist gátolják."
    },
    {
      id: "mech_35",
      topic: "Antimikrobiális mechanizmusok",
      type: "bool",
      question: "A fluorokinolonok (pl. enrofloxacin) koncentráció-függő baktericid szerek.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. A hatásuk erőssége a vérben elért csúcskoncentrációtól függ."
    },
    {
      id: "mech_36",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Melyik szer hat a DNS-transzkripcióra (RNS-polimeráz gátló)?",
      options: ["Rifampicin", "Penicillin", "Gentamicin", "Szulfonamid"],
      correctAnswer: 0,
      explanation: "A rifampicin az RNS-szintézist gátolja."
    },
    {
      id: "mech_37",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Mit jelent a 'szinergizimus' a Trimetoprim-Szulfonamid kombinációnál?",
      options: [
        "A két szer gyengíti egymást",
        "A két szer hatása összeadódik, és együttesen baktériumölő (baktericid) lesz",
        "Nincs jelentősége",
        "Csak a mellékhatások nőnek"
      ],
      correctAnswer: 1,
      explanation: "Külön-külön statikusak, de együtt hatékonyan és gyorsan ölnek."
    },
    {
      id: "mech_38",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Melyik antibiotikum csoport nem használható anaerob fertőzésekre?",
      options: ["Aminoglikozidok", "Penicillinek", "Makrolidok", "Nitroimidazolok"],
      correctAnswer: 0,
      explanation: "Az aminoglikozidok bejutásához oxigénre van szükség, ezért anaerob környezetben nem hatnak."
    },
    {
      id: "mech_39",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Melyik szer hat a 30S riboszóma alegységre?",
      options: ["Doxiciklin", "Tilozin", "Linkomicin", "Ceftiofur"],
      correctAnswer: 0,
      explanation: "A tetraciklinek (mint a doxiciklin) a 30S alegységhez kötődnek."
    },
    {
      id: "mech_40",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Hogyan hatnak a polimixinek (pl. kolisztin)?",
      options: [
        "Sejtfal gátlás",
        "A sejtmembrán permeabilitásának megváltoztatásával (detergens hatás)",
        "DNS giráz gátlás",
        "Riboszóma gátlás"
      ],
      correctAnswer: 1,
      explanation: "A kolisztin szétzilálja a Gram-negatívok külső membránját."
    },
    {
      id: "mech_41",
      topic: "Antimikrobiális mechanizmusok",
      type: "bool",
      question: "A makrolidok (pl. tilozin) jól bejutnak a sejtekbe és a tüdőszövetbe.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Kiváló szöveti penetrációjuk miatt kedveltek légzőszervi betegségek kezelésére."
    },
    {
      id: "mech_42",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Melyik csoportba tartozik a marbofloxacin?",
      options: ["Fluorokinolonok", "Cefalosporinok", "Makrolidok", "Aminoglikozidok"],
      correctAnswer: 0,
      explanation: "A marbofloxacin egy modern állatgyógyászati fluorokinolon."
    },
    {
      id: "mech_43",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Mi a hatásmechanizmusa a vankomicinnek?",
      options: ["Fehérjeszintézis gátlás", "Sejtfalszintézis gátlása (glikopeptid)", "DNS szintézis gátlás", "Folsav gátlás"],
      correctAnswer: 1,
      explanation: "A glikopeptidek (mint a vankomicin) a sejtfalépítést gátolják, de máshol, mint a béta-laktámok."
    },
    {
      id: "mech_44",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Melyik állítás igaz a bacitracinra?",
      options: [
        "Csak Gram-negatívokra hat",
        "Gram-pozitívok ellen hatékony és nem szívódik fel a bélből",
        "Vénásan adják",
        "DNS gátló"
      ],
      correctAnswer: 1,
      explanation: "Helyi bélkezelésre (pl. Clostridiumok ellen) használják."
    },
    {
      id: "mech_45",
      topic: "Antimikrobiális mechanizmusok",
      type: "bool",
      question: "Az antibiotikumok a vírusok ellen is hatásosak.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis. Az antibiotikumok csak baktériumok ellen hatnak (kivéve néhány antiprotozoon hatást)."
    },
    {
      id: "mech_46",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Melyik szer tartozik a pleuromutilinek közé a tiamulinon kívül?",
      options: ["Valnemulin", "Neomycin", "Apramycin", "Tulathromycin"],
      correctAnswer: 0,
      explanation: "A valnemulin szintén a pleuromutilinek csoportjába tartozik."
    },
    {
      id: "mech_47",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Mi a folsav szerepe a baktériumokban, ami miatt a gátlása hatékony?",
      options: [
        "A DNS és RNS alapköveinek (purinok) szintéziséhez szükséges",
        "A sejt mozgásához kell",
        "Energiát termel",
        "A sejtfal része"
      ],
      correctAnswer: 0,
      explanation: "Folsav nélkül nincs nukleinsav-szintézis és sejtosztódás."
    },
    {
      id: "mech_48",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Melyik antibiotikum csoportba tartozik a gentamicin?",
      options: ["Aminoglikozidok", "Fenikolok", "Szulfonamidok", "Tetraciklinek"],
      correctAnswer: 0,
      explanation: "A gentamicin a leggyakrabban használt aminoglikozid."
    },
    {
      id: "mech_49",
      topic: "Antimikrobiális mechanizmusok",
      type: "bool",
      question: "A nitrofuránok használata haszonállatokban tilos az EU-ban.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Rákkeltő hatásuk és maradékanyag-problémák miatt betiltották őket."
    },
    {
      id: "mech_50",
      topic: "Antimikrobiális mechanizmusok",
      type: "mcq",
      question: "Melyik szernek van jó hatása Brachyspira (sertésdizentéria) ellen?",
      options: ["Tiamulin", "Gentamicin", "Kolisztin", "Szulfonamid"],
      correctAnswer: 0,
      explanation: "A pleuromutilinek (tiamulin, valnemulin) kiválóak a sertésdizentéria kezelésére."
    }
  ]
};
