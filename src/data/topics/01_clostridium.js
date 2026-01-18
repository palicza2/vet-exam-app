export const clostridiumData = {
  id: "clostridium",
  title: "1. Clostridiumok okozta megbetegedések",
  studyMaterial: [
    {
      title: "1. A Clostridium fajok jellemzői",
      icon: "microscope",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-500",
      sections: [
        {
          header: "1.1. Alapvető tulajdonságok",
          points: [
            "**Gram-pozitív**, pálcika alakú baktériumok",
            "**Endospóraképzés** → extrém környezeti ellenállás (talajban, trágyában évekig túlél)",
            "Többségük **szigorúan anaerob**",
            "Spórák elhelyezkedése: terminális, szubterminális, centrális",
            "**C. tetani:** „dobverő” / teniszütő forma"
          ]
        },
        {
          header: "1.2. Előfordulás",
          points: [
            "Széles körben megtalálhatók a környezetben (ubikviter)",
            "Normál bélflóra részei (emberben, állatokban)"
          ]
        },
        {
          header: "1.3. Patogenitás alapja: exotoxinok",
          points: [
            "Fajspecifikus toxinkészletek (pl. C. perfringens A–E toxintípusok)",
            "**Fő toxinok:** szövetbontó (foszfolipázok, proteázok), enterotoxinok, neurotoxinok",
            "**Hatások:** bélhám roncsolása, boholyatrophia, transzmurális necrosis, gázképzés (H₂S) → emphysema, toxémia, shock"
          ]
        }
      ]
    },
    {
      title: "2. A Clostridium-fertőzések fő formái sertésben",
      icon: "book",
      color: "bg-gray-50 border-gray-200",
      iconColor: "text-gray-500",
      sections: [
        {
          header: "Főbb megjelenési formák",
          points: [
            "**Enterális** megbetegedések (emésztőrendszer)",
            "**Gázödémás** (hisztotoxikus) fertőzések (szövetek)",
            "**Neurotoxikus** fertőzések (idegrendszer)"
          ]
        }
      ]
    },
    {
      title: "3. Enterális clostridiosisok",
      icon: "alert-triangle",
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-500",
      sections: [
        {
          header: "3.1. C. perfringens C – újszülöttkori hemorrágiás-necrotizáló enteritis",
          points: [
            "**Lefolyás:** Élet első napjaiban, perakut",
            "**Toxin:** **béta-toxin** (tripszinérzékeny → újszülöttekben hatékonyabb, ahol alacsony a tripszin szint)",
            "**Patogenezis:** fejletlen bélflóra → gyors elszaporodás → bélnyálkahártya transzmurális necrosisa → vérzés, gázképződés",
            "**Klinikum:** hirtelen elhullás vagy véres-híg hasmenés, gyors kiszáradás, shock",
            "**Megelőzés:** kocák vakcinázása → kolosztrális immunitás"
          ]
        },
        {
          header: "3.2. C. perfringens A – dysbacteriosis",
          points: [
            "Enyhébb, nem véres hasmenés szopós malacokban",
            "Gyakoribb legyengült, nagy almos vagy stresszes malacokban",
            "Boholyatrophia, felszínes hámkárosodás",
            "Minden sertésben jelen lehet → toxintermelő törzs kimutatása szükséges"
          ]
        },
        {
          header: "3.3. C. difficile colitis",
          points: [
            "**Oka:** Antibiotikum-használathoz társuló dysbacteriosis után gyakori",
            "**Toxinok:** A- és B-toxin",
            "**Elváltozás:** megvastagodott colonfal, fibrines-álhártyás colitis, **„vulkán lézió”**, bélfodri ödéma, ascites",
            "**Klinikum:** vizes, pépes hasmenés, hasi fájdalom"
          ]
        },
        {
          header: "3.4. Dysbacteriosis (hemorrágiás bél szindróma jelleg)",
          points: [
            "**Kiváltó ok:** Takarmányváltás, stressz, rossz takarmány → bélflóra felborul",
            "Opportunista anaerobok túlszaporodása",
            "**Klinikum:** hirtelen puffadás, nehézlégzés, gyors elhullás",
            "**Megelőzés:** takarmányminőség, etetési rend, probiotikumok"
          ]
        }
      ]
    },
    {
      title: "4. Gázödémás (hisztotoxikus) fertőzések",
      icon: "shield-alert",
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-500",
      sections: [
        {
          header: "4.1. Kórokozók és kialakulás",
          points: [
            "**Kórokozók:** C. chauvoei, C. septicum, C. novyi, C. sordellii",
            "**Exogén:** sérülés → szennyeződés → anaerob közeg",
            "**Endogén:** régebben bejutott spórák → izomsérülés után aktiválódnak"
          ]
        },
        {
          header: "4.2. Formák",
          points: [
            "**„Sercegő üszög” (blackleg):** Főleg C. chauvoei; izomfájdalom, duzzanat, **crepitatio** (gázos ropogás), láz",
            "**Kocák fertőzései:** Ellés körüli sérülések → akut metritis; C. novyi B → nekrotizáló hepatitis („Black disease”)"
          ]
        },
        {
          header: "4.3. Diagnosztika",
          points: [
            "**Boncolás:** Feketés, nedves, bűzös, gázzal átitatott izom/szerv; a kóros gázképződés lokalizált!",
            "**Labor:** Bélyegzőlenyomat (Gram+ pálcák), Immunfluoreszcencia, PCR, Anaerob tenyésztés (dupla hemolízis)"
          ]
        }
      ]
    },
    {
      title: "5. Neurotoxikus clostridiosisok",
      icon: "brain",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-500",
      sections: [
        {
          header: "5.1. Tetanusz (C. tetani)",
          points: [
            "**Fertőzési kapu:** Mély seb (kasmírozás, farokkurtítás, szülészeti beavatkozás)",
            "**Toxin:** tetanospazmin (gátló neurotranszmitterek blokádja)",
            "**Tünet:** **spasztikus (merevgörcsös) bénulás**",
            "**Jellemzők:** rágóizmok merevsége (szájzár), fokozott ingerlékenység, **„fűrészbak-állás”**, opisthotonus",
            "**Kezelés:** antitoxin, nyugtatók, penicillin (korlátozott siker)"
          ]
        },
        {
          header: "5.2. Botulizmus (C. botulinum)",
          points: [
            "**Jelleg:** **Intoxikáció** (romlott takarmány, dög), nem valódi fertőzés",
            "**Toxin hatása:** acetilkolin felszabadítás blokkolása → **petyhüdt bénulás**",
            "**Tünetek:** gyengeség → parézis → teljes bénulás, nyelészavar, nyálcsorgás, légzőizombénulás → elhullás",
            "**Diagnózis:** toxin kimutatása (bio-próba, ELISA)"
          ]
        }
      ]
    },
    {
      title: "6. Kezelés és megelőzés összefoglalása",
      icon: "pill",
      color: "bg-emerald-50 border-emerald-200",
      iconColor: "text-emerald-500",
      sections: [
        {
          header: "6.1. Terápia",
          points: [
            "**Antibiotikumok:** Penicillinek, aminopenicillinek, lincomycin, tylosin hatékonyak; aminoglikozidok és quinolonok hatástalanok!",
            "**Szupportív:** Folyadékpótlás, NSAID; tetanusznál nyugtatók; botulizmusnál intenzív ápolás",
            "**Antitoxinok:** Tetanusz antitoxin, C. perfringens C elleni szérum"
          ]
        },
        {
          header: "6.2. Megelőzés",
          points: [
            "**Vakcinázás:** Kocák oltása C. perfringens C ellen (rutin); Tetanusz toxoid (ritkán)",
            "**Higiénia:** Sebellátás, steril eszközök, telepi járványvédelem (spóraölő fertőtlenítők)",
            "**Takarmányozás:** Jó minőségű szilázs, dögök eltávolítása, fokozatos váltás",
            "**Adalékok:** Probiotikumok (Lactobacillus, Bifidobacterium), szerves savak, ZnO"
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "clos_1",
      topic: "Clostridium",
      type: "mcq",
      question: "Melyik jellemző a Clostridium fajokra?",
      options: ["Gram-negatívak", "Endospórát képeznek", "Mindig aerobok", "Nincs sejtfallal"],
      correctAnswer: 1,
      explanation: "A Clostridiumok Gram-pozitív, endospóraképző baktériumok."
    },
    {
      id: "clos_2",
      topic: "Clostridium",
      type: "mcq",
      question: "Milyen alakú a C. tetani a spórája miatt?",
      options: ["Lánc alakú", "Dobverő forma", "Szőlőfürt", "Csavart"],
      correctAnswer: 1,
      explanation: "A terminális spóra miatt dobverő vagy teniszütő formát mutat."
    },
    {
      id: "clos_3",
      topic: "Clostridium",
      type: "mcq",
      question: "Melyik toxin felelős a C. perfringens C okozta enteritisért?",
      options: ["Alfa-toxin", "Béta-toxin", "Epsilon-toxin", "Iota-toxin"],
      correctAnswer: 1,
      explanation: "A béta-toxin okozza a hemorrágiás-necrotizáló bélgyulladást."
    },
    {
      id: "clos_4",
      topic: "Clostridium",
      type: "mcq",
      question: "Miért tripszinérzékeny a béta-toxin?",
      options: ["Mert szerves sav", "Mert fehérje természetű", "Mert zsírban oldódik", "Nem tripszinérzékeny"],
      correctAnswer: 1,
      explanation: "A béta-toxin fehérje, amit a tripszin lebont, ezért veszélyesebb az újszülöttekben, ahol kevés a tripszin."
    },
    {
      id: "clos_5",
      topic: "Clostridium",
      type: "mcq",
      question: "Melyik kórképre jellemző a 'vulkán lézió'?",
      options: ["C. tetani", "C. difficile colitis", "C. chauvoei", "C. novyi"],
      correctAnswer: 1,
      explanation: "A C. difficile okozta álhártyás vastagbélgyulladás jellegzetes képlete."
    },
    {
      id: "clos_6",
      topic: "Clostridium",
      type: "mcq",
      question: "Mit jelent a crepitatio?",
      options: ["Láz", "Gázos ropogás tapintáskor", "Hasmenés", "Hányás"],
      correctAnswer: 1,
      explanation: "A szövetek közötti gázgyülem miatt érzékelhető sercegő/ropogó hang."
    },
    {
      id: "clos_7",
      topic: "Clostridium",
      type: "mcq",
      question: "Milyen bénulást okoz a tetanusz?",
      options: ["Petyhüdt", "Spasztikus (merevgörcsös)", "Részleges", "Nem okoz bénulást"],
      correctAnswer: 1,
      explanation: "A gátló neurotranszmitterek blokkolása miatt tartós izomösszehúzódás alakul ki."
    },
    {
      id: "clos_8",
      topic: "Clostridium",
      type: "mcq",
      question: "Milyen bénulást okoz a botulizmus?",
      options: ["Petyhüdt", "Spasztikus", "Egyoldali", "Nincs bénulás"],
      correctAnswer: 0,
      explanation: "Az acetilkolin felszabadulásának gátlása miatt az izmok nem tudnak összehúzódni."
    },
    {
      id: "clos_9",
      topic: "Clostridium",
      type: "mcq",
      question: "Melyik antibiotikum hatástalan a Clostridiumok ellen?",
      options: ["Penicillin", "Aminoglikozidok", "Lincomycin", "Tylosin"],
      correctAnswer: 1,
      explanation: "Az anaerobok ellen az aminoglikozidok (és quinolonok) hatástalanok."
    },
    {
      id: "clos_10",
      topic: "Clostridium",
      type: "mcq",
      question: "Hogyan előzhető meg a kismalacok C. perfringens C fertőzése?",
      options: ["Malacok oltásával", "Kocák vemhesség alatti vakcinázásával", "Antibiotikummal születéskor", "Nem előzhető meg"],
      correctAnswer: 1,
      explanation: "A koca vakcinázása kolosztrális ellenanyagokat biztosít a malacoknak."
    },
    {
      id: "clos_11",
      topic: "Clostridium",
      type: "bool",
      question: "A Clostridium fajok többsége szigorúan anaerob.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, a Clostridiumok anaerob életmódot folytatnak."
    },
    {
      id: "clos_12",
      topic: "Clostridium",
      type: "bool",
      question: "A botulizmus egy valódi bakteriális fertőzés a sertésben.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis, a botulizmus intoxikáció (méregfelvétel), nem fertőzés."
    },
    {
      id: "clos_13",
      topic: "Clostridium",
      type: "mcq",
      question: "Melyik kórokozó okozza a 'Black disease'-t (nekrotizáló hepatitis)?",
      options: ["C. chauvoei", "C. novyi", "C. septicum", "C. sordellii"],
      correctAnswer: 1,
      explanation: "A C. novyi (főleg a B típus) okozza."
    },
    {
      id: "clos_14",
      topic: "Clostridium",
      type: "mcq",
      question: "Melyik kórképre jellemző a 'fűrészbak-állás'?",
      options: ["Botulizmus", "Tetanusz", "Sertésorbánc", "E. coli fertőzés"],
      correctAnswer: 1,
      explanation: "A tetanuszos merevgörcs jellegzetes testtartása."
    },
    {
      id: "clos_15",
      topic: "Clostridium",
      type: "mcq",
      question: "Hol élnek a Clostridium spórák a legtovább?",
      options: ["Levegőben", "Vízben", "Talajban és trágyában", "Csak az állatban"],
      correctAnswer: 2,
      explanation: "Az endospórák rendkívül ellenállóak a környezeti hatásokkal szemben."
    },
    {
      id: "clos_16",
      topic: "Clostridium",
      type: "mcq",
      question: "Melyik C. perfringens típus okoz enyhébb dysbacteriosist?",
      options: ["A", "B", "C", "D"],
      correctAnswer: 0,
      explanation: "A C. perfringens A típus enyhébb bélflóra-zavart okoz."
    },
    {
      id: "clos_17",
      topic: "Clostridium",
      type: "mcq",
      question: "Melyik toxin gátolja az acetilkolin felszabadulását?",
      options: ["Tetanospazmin", "Botulinum toxin", "Béta-toxin", "Enterotoxin"],
      correctAnswer: 1,
      explanation: "A botulinum toxin blokkolja a neuromuszkuláris szinapszisokat."
    },
    {
      id: "clos_18",
      topic: "Clostridium",
      type: "mcq",
      question: "Melyik a tetanusz fertőzési kapuja?",
      options: ["Szájon át", "Mély sebek", "Légutak", "Szem"],
      correctAnswer: 1,
      explanation: "A spórák mély, anaerob sebekben (pl. kasztráció) aktiválódnak."
    },
    {
      id: "clos_19",
      topic: "Clostridium",
      type: "bool",
      question: "A C. difficile colitis kialakulásában szerepe lehet a túlzott antibiotikum-használatnak.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, az antibiotikumok elpusztítják a védő flórát, lehetőséget adva a C. difficile-nek."
    },
    {
      id: "clos_20",
      topic: "Clostridium",
      type: "mcq",
      question: "Milyen színű a hasmenés C. perfringens C esetén?",
      options: ["Sárga", "Véres", "Zöld", "Fehér"],
      correctAnswer: 1,
      explanation: "A hemorrágiás enteritis miatt jellegzetesen véres."
    }
  ]
};
