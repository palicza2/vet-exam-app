export const mhyoData = {
  id: "mycoplasma_hyopneumoniae",
  title: "13. Mycoplasma hyopneumoniae (Enzootiás pneumonia)",
  studyMaterial: [
    {
      "title": "1. Bevezetés és Jelentőség",
      "icon": "alert-triangle",
      "color": "bg-yellow-50 border-yellow-200",
      "iconColor": "text-yellow-600",
      "sections": [
        {
          "header": "1.1. Enzootiás pneumonia (EP)",
          "points": [
            "**Mycoplasma hyopneumoniae (Mhyo):** Az EP elsődleges kórokozója",
            "Idült lefolyású, magas morbiditású (sok állat beteg), de alacsony mortalitású (kevés pusztul el)",
            "Kulcsszerep a **PRDC** (légzőszervi betegségkomplex) kialakulásában"
          ]
        },
        {
          "header": "1.2. Gazdasági kár",
          "points": [
            "Napi testtömeg-gyarapodás csökkenése",
            "Fajlagos takarmányértékesítés romlása",
            "Másodlagos fertőzések (pl. Pasteurella) költségei"
          ]
        }
      ]
    },
    {
      "title": "2. Kóroktan és Járványtan",
      "icon": "microscope",
      "color": "bg-blue-50 border-blue-200",
      "iconColor": "text-blue-600",
      "sections": [
        {
          "header": "2.1. A kórokozó tulajdonságai",
          "points": [
            "**Sejtfal NINCS:** Pleomorf alak, béta-laktám antibiotikumokkal szembeni intrinszik rezisztencia",
            "Lassú szaporodás: 4-6 hét is lehet a tenyésztés",
            "Obligát parazita: nem képes aminosav/zsírsav szintézisre"
          ]
        },
        {
          "header": "2.2. Terjedés",
          "points": [
            "**Vertikális:** Kocáról malacra (tünetmentes hordozó kocák)",
            "**Horizontális:** Választott malacok között orr-orr kontaktussal",
            "**Aerogén:** Széllel akár 3–9 km távolságra is eljuthat (porszemcsékhez tapadva)"
          ]
        }
      ]
    },
    {
      "title": "3. Patogenezis és Tünetek",
      "icon": "activity",
      "color": "bg-red-50 border-red-200",
      "iconColor": "text-red-500",
      "sections": [
        {
          "header": "3.1. Kórélettan",
          "points": [
            "Adhézió a csillószőrökhöz (**P97 fehérje**)",
            "A csillók bénulása és pusztulása → az öntisztuló mechanizmus károsodik",
            "BALT hyperplasia: túlzott, de hatástalan immunválasz a tüdőben"
          ]
        },
        {
          "header": "3.2. Klinikai tünetek",
          "points": [
            "**Száraz, ugatásszerű köhögés:** Főleg terhelésre vagy mozgatásra jelentkezik",
            "Növendék-hízó korban (7-12 hét) a legkifejezettebb",
            "Lappangási idő hosszú (10-16 nap)"
          ]
        }
      ]
    },
    {
      "title": "4. Kórbonctan és Diagnózis",
      "icon": "search",
      "color": "bg-slate-50 border-slate-200",
      "iconColor": "text-slate-500",
      "sections": [
        {
          "header": "4.1. Bonclelet",
          "points": [
            "**Hússzerű tömöttség (hepatizáció):** A tüdő elülső-alsó lebenyeiben",
            "Éles határ az ép és a gyulladásos tüdőszövet között",
            "Színe: sötétvöröstől a szürkés-liláig"
          ]
        },
        {
          "header": "4.2. Diagnosztika",
          "points": [
            "**PCR:** A legmegbízhatóbb (gégetamponból vagy tüdőszövetből)",
            "Szerológia (ELISA): Állományszintű monitorozásra alkalmas"
          ]
        }
      ]
    },
    {
      "title": "5. Kezelés és Megelőzés",
      "icon": "shield-check",
      "color": "bg-green-50 border-green-200",
      "iconColor": "text-green-600",
      "sections": [
        {
          "header": "5.1. Terápia",
          "points": [
            "Pleuromutilinek (**Tiamulin**, Valnemulin) - Első választás",
            "Makrolidok (Tilmikozin, Tulatromicin), Tetraciklinek (Doxiciklin)",
            "**Béta-laktámok hatástalanok!**"
          ]
        },
        {
          "header": "5.2. Megelőzés",
          "points": [
            "**Vakcinázás:** 3 hetes korban (egyadagos) vagy kétadagos protokoll",
            "Menedzsment: All-in/All-out, ammónia és por csökkentése",
            "Mentesítés: Állományzárás (legalább 8 hónapig)"
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "mhyo_1",
      topic: "Mycoplasma hyopneumoniae",
      type: "mcq",
      question: "Mi az enzootiás pneumonia (EP) elsődleges kórokozója?",
      options: ["Pasteurella multocida", "Mycoplasma hyopneumoniae", "Actinobacillus pleuropneumoniae", "Streptococcus suis"],
      correctAnswer: 1,
      explanation: "A Mycoplasma hyopneumoniae felelős az EP kialakulásáért."
    },
    {
      id: "mhyo_2",
      topic: "Mycoplasma hyopneumoniae",
      type: "mcq",
      question: "Melyik sejtstruktúra hiánya miatt rezisztensek a mikoplazmák a penicillinekre?",
      options: ["Tok", "Sejtfal", "Mitokondrium", "Ostor"],
      correctAnswer: 1,
      explanation: "A mikoplazmáknak nincs sejtfalluk, így a sejtfalszintézist gátló antibiotikumok hatástalanok ellenük."
    },
    {
      id: "mhyo_3",
      topic: "Mycoplasma hyopneumoniae",
      type: "mcq",
      question: "Melyik fehérje felelős az M. hyopneumoniae csillószőrökhöz való tapadásáért?",
      options: ["ApxI", "P97", "LPS", "Flagellin"],
      correctAnswer: 1,
      explanation: "A P97 adhezin fehérje kulcsfontosságú a légúti hámhoz való kötődésben."
    },
    {
      id: "mhyo_4",
      topic: "Mycoplasma hyopneumoniae",
      type: "mcq",
      question: "Milyen jellegű köhögés jellemző az enzootiás pneumoniára?",
      options: ["Nedves, hurutos", "Száraz, ugatásszerű, főleg terhelésre", "Soha nincs köhögés", "Csak tüsszögés"],
      correctAnswer: 1,
      explanation: "Az EP-re a rohamokban jelentkező száraz köhögés a legjellemzőbb tünet."
    },
    {
      id: "mhyo_5",
      topic: "Mycoplasma hyopneumoniae",
      type: "mcq",
      question: "Melyik tüdőterületeken jelentkeznek a jellemző elváltozások boncoláskor?",
      options: ["Csak a tüdő csúcsán", "Elülső-alsó (cranioventralis) lebenyekben", "Csak a tüdő szélén", "Egész tüdőben egyenletesen"],
      correctAnswer: 1,
      explanation: "A hússzerű tömöttség jellemzően a tüdő elülső-alsó részeit érinti."
    },
    {
      id: "mhyo_6",
      topic: "Mycoplasma hyopneumoniae",
      type: "mcq",
      question: "Hány kilométerre juthat el a kórokozó aerogén úton a széllel?",
      options: ["100 m", "3–9 km", "50 km", "Soha nem terjed levegőben"],
      correctAnswer: 1,
      explanation: "A porszemcsékhez tapadva a M. hyopneumoniae jelentős távolságokra is eljuthat."
    },
    {
      id: "mhyo_7",
      topic: "Mycoplasma hyopneumoniae",
      type: "mcq",
      question: "Melyik antibiotikum csoport az 'első választás' Mhyo kezelésére?",
      options: ["Penicillinek", "Pleuromutilinek (pl. Tiamulin)", "Cefalosporinok", "Szulfonamidok"],
      correctAnswer: 1,
      explanation: "A Tiamulin és Valnemulin rendkívül hatékonyak mikoplazmák ellen."
    },
    {
      id: "mhyo_8",
      topic: "Mycoplasma hyopneumoniae",
      type: "mcq",
      question: "Mit jelent a BALT hyperplasia?",
      options: ["Vesedaganat", "A tüdővel kapcsolatos nyirokszövet túlzott felszaporodása", "Csontritkulás", "Májgyulladás"],
      correctAnswer: 1,
      explanation: "Ez egy jellemző szövettani elváltozás az EP-ben, a szervezet immunválaszának része."
    },
    {
      id: "mhyo_9",
      topic: "Mycoplasma hyopneumoniae",
      type: "mcq",
      question: "Mikor jelentkeznek jellemzően a tünetek endémiás állományban?",
      options: ["Születéskor", "Választás után (7–12 hetes korban), az anyai immunitás csökkenésekor", "Csak 2 évesen", "Soha"],
      correctAnswer: 1,
      explanation: "Az anyai ellenanyagok 6-10 hetes korig védik a malacokat a tünetektől."
    },
    {
      id: "mhyo_10",
      topic: "Mycoplasma hyopneumoniae",
      type: "mcq",
      question: "Melyik állítás igaz a vakcinázásra vonatkozóan?",
      options: ["Teljesen megakadályozza a fertőzést", "Csökkenti a tüdőelváltozások mértékét és a tünetek súlyosságát", "Felesleges", "Csak kocákat oltunk"],
      correctAnswer: 1,
      explanation: "A vakcina nem feltétlenül mentesít, de jelentősen javítja a termelési mutatókat és csökkenti a károkat."
    },
    {
      id: "mhyo_11",
      topic: "Mycoplasma hyopneumoniae",
      type: "mcq",
      question: "Hány napig túlélhet a kórokozó nedves, hűvös környezetben?",
      options: ["1 óra", "2–3 nap", "1 hónap", "1 év"],
      correctAnswer: 1,
      explanation: "A környezetben viszonylag rövid ideig (pár napig) marad életképes."
    },
    {
      id: "mhyo_12",
      topic: "Mycoplasma hyopneumoniae",
      type: "mcq",
      question: "Mit jelent a PRDC?",
      options: ["Piros Ruha Divat Cég", "Sertések Légzőszervi Betegségkomplexe (Porcine Respiratory Disease Complex)", "Pénzügyi Ellenőrző Bizottság", "Egy gyógyszer neve"],
      correctAnswer: 1,
      explanation: "Több kórokozó (vírusok és baktériumok) együttes okozta súlyos légúti tünetegyüttes."
    },
    {
      id: "mhyo_13",
      topic: "Mycoplasma hyopneumoniae",
      type: "mcq",
      question: "Mi a mentesítés alapja az állományzárás esetén?",
      options: ["1 hét zárás", "Legalább 8 hónapos állományzárás", "Csak a víz elzárása", "Nincs ilyen"],
      correctAnswer: 1,
      explanation: "A kórokozó hosszú ürítése miatt legalább 8 hónapos zárás szükséges a mentesség eléréséhez."
    },
    {
      id: "mhyo_14",
      topic: "Mycoplasma hyopneumoniae",
      type: "mcq",
      question: "Hogyan hívják a tüdő elszürkült, hússzerű tapintatát?",
      options: ["Kalcináció", "Hepatizáció (májjasodás)", "Ödéma", "Vérzés"],
      correctAnswer: 1,
      explanation: "A gyulladt tüdő légtelenné és tömötté válik, tapintata a májhoz (vagy húshoz) hasonló."
    },
    {
      id: "mhyo_15",
      topic: "Mycoplasma hyopneumoniae",
      type: "mcq",
      question: "Melyik állítás NEM igaz az M. hyopneumoniae-ra?",
      options: ["Gram-negatív", "Sejtfal nélküli", "Lassan szaporodik", "Csak sertést betegít"],
      correctAnswer: 0,
      explanation: "A mikoplazmák nem festődnek jól Gram-szerint a sejtfal hiánya miatt (Gram-negatívnak tűnhetnek, de rendszertanilag máshova tartoznak)."
    },
    {
      id: "mhyo_16",
      topic: "Mycoplasma hyopneumoniae",
      type: "mcq",
      question: "Melyik minta a legalkalmasabb PCR vizsgálatra élő állatból?",
      options: ["Bélsár", "Gégetampon", "Vizelet", "Szőrminta"],
      correctAnswer: 1,
      explanation: "A gégetamponnal közvetlenül a légutakból vehető minta a kórokozó kimutatásához."
    },
    {
      id: "mhyo_17",
      topic: "Mycoplasma hyopneumoniae",
      type: "mcq",
      question: "Miért káros az ammónia az EP szempontjából?",
      options: ["Mert büdös", "Károsítja a légúti hámot, megkönnyítve a mikoplazmák tapadását", "Segíti a hízást", "Semleges"],
      correctAnswer: 1,
      explanation: "A rossz istállóklíma és az irritáló gázok rontják a tüdő védekező képességét."
    },
    {
      id: "mhyo_18",
      topic: "Mycoplasma hyopneumoniae",
      type: "mcq",
      question: "Hány nap a lappangási idő az EP-nél?",
      options: ["1 nap", "10–16 nap", "2 hónap", "1 óra"],
      correctAnswer: 1,
      explanation: "Az EP lappangási ideje viszonylag hosszú."
    },
    {
      id: "mhyo_19",
      topic: "Mycoplasma hyopneumoniae",
      type: "mcq",
      question: "Mi a jellemzője az SPF telepeknek?",
      options: ["Sok Pénzért Fenntartott", "Meghatározott kórokozóktól (pl. Mhyo) mentes állomány", "Sertés Pékség és Food", "Sokat Pihenő Futó"],
      correctAnswer: 1,
      explanation: "Specific Pathogen Free - mentes a meghatározott fertőző betegségektől."
    },
    {
      id: "mhyo_20",
      topic: "Mycoplasma hyopneumoniae",
      type: "mcq",
      question: "Mi az összefoglalás lényege az EP-nél?",
      options: ["Mindig halálos", "Alacsony mortalitású, de nagy gazdasági kárt okozó krónikus tüdőgyulladás", "Csak vadkanokban van", "Nem fertőző"],
      correctAnswer: 1,
      explanation: "A gazdasági jelentősége a lassú fejlődésben és a másodlagos fertőzésekben rejlik."
    }
  ]
};
