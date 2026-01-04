export const streptococcus_suis = {
  id: "streptococcus_suis",
  title: "3. Streptococcus suis",
  shortTitle: "S. suis",
  description: "A Streptococcus suis jellemzői, klinikai formái, diagnosztikája és védekezés.",
  studyMaterial: [
    {
      title: "1. A Kórokozó Jellemzői",
      icon: "microscope",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
      sections: [
        {
          header: "Streptococcus suis",
          points: [
            "**Gram-pozitív**, láncokban elhelyezkedő coccus, mely poliszacharid tokja alapján szerotípusokba sorolható.",
            "**Fakultatív anaerob** baktérium, véres agaron **alfa-hemolízist** okoz.",
            "Jelenleg **35 szerotípusát** ismerjük; az **1–9. szerotípusok** a leggyakoribbak.",
            "Előfordulnak tok nélküli, szerológiailag nem tipizálható törzsek is.",
            "Egy adott sertésben akár **több szerotípus egyidejű jelenléte** is lehetséges.",
            "**Molekuláris tipizálás:** MLST (multilocus sequence typing) - pl. 2. szerotípus ST1 törzs.",
            "A törzsek virulenciája változó; a **tok fontos szerepet játszik** a kórokozó ellenálló képességében és patogenitásában."
          ]
        },
        {
          header: "Hordozás és Terjedés",
          points: [
            "**Hordozás:** Felső légutak nyálkahártyáján (tonsillák, orrüreg) és a húgy-nemi traktusban.",
            "**Terjedés:** Fertőzött élő állatok, ragályfogó tárgyak, rovarok.",
            "**Ellenálló képesség:** Környezetben rövid ideig, hullákban hetekig fertőzőképes."
          ]
        },
        {
          header: "Zoonózis",
          points: [
            "⚠️ **Zoonózis:** Állatról emberre terjedhet (főleg Délkelet-Ázsiában).",
            "Emberben **agyhártyagyulladást (meningitis)** okozhat, főleg vágóhídi dolgozóknál."
          ]
        }
      ]
    },
    {
      title: "2. Klinikai Formák Sertésben",
      icon: "activity",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
      sections: [
        {
          header: "Általános Jellemzők",
          points: [
            "A tünetek többnyire a **választást követő korban (5–10 hetes malacoknál)** válnak észlelhetővé."
          ]
        },
        {
          header: "Perakut és Akut Forma",
          points: [
            "**Perakut:** Hirtelen elhullás (fulmináns szepszis).",
            "**Akut:** Magas láz, bizonytalan mozgás (ataxia).",
            "**Idegrendszeri tünetek:** Opisthotonus (hátrahajló fejtartás), nystagmus (szemtekerezgés).",
            "Jellemző: **Agyburokgyulladás (meningitis)**."
          ]
        },
        {
          header: "Félheveny (Szubakut) Forma",
          points: [
            "Lokalizált gyulladások.",
            "**Ízületgyulladás (arthritis):** Sántaság, \"bánulás\".",
            "**Tüdőgyulladás:** Interstitialis vagy bronchopneumonia.",
            "**Szívbelhártya-gyulladás (endocarditis):** Hirtelen elhulláshoz vezethet.",
            "Ritkábban: Vaginitis, vetélés."
          ]
        }
      ]
    },
    {
      title: "3. Kórbonctan és Diagnosztika",
      icon: "stethoscope",
      color: "bg-amber-50 border-amber-200",
      iconColor: "text-amber-600",
      sections: [
        {
          header: "Kórbonctan",
          points: [
            "**Boncolás:** Szeptikémia jelei (vérzések, lépmegnagyobbodás).",
            "Fibrines/gennyes meningitis, polyarthritis, pneumonia, endocarditis."
          ]
        },
        {
          header: "Diagnosztika Kulcspontjai",
          points: [
            "**Minta:** Agyvelő, agyhártya, ízületi folyadék, lép. (Az orr/garat minta **NEM diagnosztikus** a hordozás miatt!)",
            "**Tenyésztés:** Véragaron jól nő, Gram-pozitív láncok.",
            "**Azonosítás:** PCR, szerotipizálás (tárgylemez-agglutináció).",
            "**Elkülönítés:** Glässer-kór (G. parasuis), Ödémabetegség (E. coli), Sómmérgezés, Sertésorbánc."
          ]
        }
      ]
    },
    {
      title: "4. Kezelés és Megelőzés",
      icon: "syringe",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
      sections: [
        {
          header: "Kezelés",
          points: [
            "**Antibiotikum:** **Béta-laktámok** (Penicillin G, aminopenicillinek).",
            "Rezisztencia esetén (pl. tetraciklinek ellen) **antibiotikum-váltás antibiogram** alapján.",
            "**Korai injekciós kezelés** életmentő lehet, kiegészítve **gyulladáscsökkentőkkel**."
          ]
        },
        {
          header: "Vakcinázás Stratégiája",
          points: [
            "**Nincs univerzális vakcina** a sok szerotípus miatt.",
            "A védekezés alapja a **telepspecifikus (autogén) vakcina**.",
            "**Kocák oltása** → passzív immunitás a malacoknak.",
            "Szükség esetén a **malacok oltása választás után**.",
            "**Rendszeres törzsfrissítés** szükséges a vakcinában."
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "suis_1",
      topic: "Streptococcus suis",
      question: "Milyen Gram-festődési tulajdonsággal rendelkezik a Streptococcus suis?",
      options: ["Gram-negatív", "Gram-pozitív", "Gram-variábilis", "Saválló"],
      correctAnswer: 1
    },
    {
      id: "suis_2",
      topic: "Streptococcus suis",
      question: "Milyen elrendeződés jellemző a Streptococcus suis baktériumokra?",
      options: ["Szőlőfürtszerű", "Láncokban elhelyezkedő coccus", "Diplococcusok", "Pálcák"],
      correctAnswer: 1
    },
    {
      id: "suis_3",
      topic: "Streptococcus suis",
      question: "Mi alapján sorolható szerotípusokba a Streptococcus suis?",
      options: ["A sejtfal fehérjéi", "A poliszacharid tok", "A flagellum antigének", "A termelt toxinok"],
      correctAnswer: 1
    },
    {
      id: "suis_4",
      topic: "Streptococcus suis",
      question: "Milyen típusú hemolízist okoz a S. suis véres agaron?",
      options: ["Béta-hemolízist", "Gamma-hemolízist", "Alfa-hemolízist", "Nem okoz hemolízist"],
      correctAnswer: 2
    },
    {
      id: "suis_5",
      topic: "Streptococcus suis",
      question: "Hány ismert szerotípusa van jelenleg a S. suis-nak?",
      options: ["10", "23", "35", "Több mint 100"],
      correctAnswer: 2
    },
    {
      id: "suis_6",
      topic: "Streptococcus suis",
      question: "Mely szerotípusok a leggyakoribbak?",
      options: ["20-25.", "1-9.", "30-35.", "Csak a 2-es típus"],
      correctAnswer: 1
    },
    {
      id: "suis_7",
      topic: "Streptococcus suis",
      question: "Melyik szerotípus ST1 törzs ismert magas virulenciájáról?",
      options: ["1. szerotípus", "2. szerotípus", "7. szerotípus", "9. szerotípus"],
      correctAnswer: 1
    },
    {
      id: "suis_8",
      topic: "Streptococcus suis",
      question: "Milyen oxigénigényű a Streptococcus suis?",
      options: ["Szigorú anaerob", "Szigorú aerob", "Fakultatív anaerob", "Mikroaerofil"],
      correctAnswer: 2
    },
    {
      id: "suis_9",
      topic: "Streptococcus suis",
      question: "Hol hordozzák leggyakrabban a baktériumot az egészséges sertések?",
      options: ["Vékonybél", "Felső légutak (tonsillák, orrüreg)", "Máj", "Izomszövet"],
      correctAnswer: 1
    },
    {
      id: "suis_10",
      topic: "Streptococcus suis",
      question: "Hogyan terjed elsősorban a betegség állományok között?",
      options: ["Szél útján", "Fertőzött élő állatok behurcolásával", "Csak takarmánnyal", "Kizárólag rágcsálók révén"],
      correctAnswer: 1
    },
    {
      id: "suis_11",
      topic: "Streptococcus suis",
      question: "Mennyi ideig marad fertőzőképes a S. suis elhullott állatokban (hullákban)?",
      options: ["Csak pár óráig", "Hetekig", "Évekig", "Azonnal elpusztul a gazdával együtt"],
      correctAnswer: 1
    },
    {
      id: "suis_12",
      topic: "Streptococcus suis",
      question: "Jelent-e zoonózis veszélyt a Streptococcus suis?",
      options: ["Nem, szigorúan fajspecifikus", "Igen, embert is megbetegíthet", "Csak kutyákra veszélyes", "Csak madarakra veszélyes"],
      correctAnswer: 1
    },
    {
      id: "suis_13",
      topic: "Streptococcus suis",
      question: "Milyen súlyos kórképet okozhat emberben a S. suis?",
      options: ["Enyhe bőrkiütés", "Agyhártyagyulladás (meningitis)", "Gyomorrontás", "Hajhullás"],
      correctAnswer: 1
    },
    {
      id: "suis_14",
      topic: "Streptococcus suis",
      question: "Melyik korcsoportban jelentkeznek leggyakrabban a tünetek sertéseknél?",
      options: ["Újszülött malacok (1-3 napos)", "Választás utáni malacok (5-10 hetes)", "Idős tenyészkocák", "Hízók vágás előtt"],
      correctAnswer: 1
    },
    {
      id: "suis_15",
      topic: "Streptococcus suis",
      question: "Mi jellemzi a perakut lefolyást?",
      options: ["Hosszan tartó köhögés", "Hirtelen elhullás előzetes tünetek nélkül", "Krónikus sántaság", "Fokozatos fogyás"],
      correctAnswer: 1
    },
    {
      id: "suis_16",
      topic: "Streptococcus suis",
      question: "Mi az opisthotonus?",
      options: ["Szemtekerezgés", "Izületi duzzanat", "Tarkó- és hátizmok merevsége miatti hátrahajló testtartás", "Bőr alatti vizenyő"],
      correctAnswer: 2
    },
    {
      id: "suis_17",
      topic: "Streptococcus suis",
      question: "Mi a nystagmus?",
      options: ["Szemtekerezgés", "Fogcsikorgatás", "Bélgörcs", "Szívritmuszavar"],
      correctAnswer: 0
    },
    {
      id: "suis_18",
      topic: "Streptococcus suis",
      question: "Melyik kórforma jellemző tünete az ataxia és görcsök?",
      options: ["Szubakut ízületi forma", "Akut idegrendszeri forma (meningitis)", "Krónikus tüdőgyulladás", "Bőrforma"],
      correctAnswer: 1
    },
    {
      id: "suis_19",
      topic: "Streptococcus suis",
      question: "Melyik szerv gyulladása okozhat hirtelen elhullást szubakut esetben a keringés összeomlása miatt?",
      options: ["Tüdő", "Máj", "Szívbelhártya (endocarditis)", "Vese"],
      correctAnswer: 2
    },
    {
      id: "suis_20",
      topic: "Streptococcus suis",
      question: "Mit jelent a 'bánulás' a klinikai tünetek között?",
      options: ["Depresszió", "Sántaság az ízületgyulladás miatt", "Étvágytalanság", "Vakság"],
      correctAnswer: 1
    },
    {
      id: "suis_21",
      topic: "Streptococcus suis",
      question: "Milyen elváltozás utal szeptikémiára a boncolás során?",
      options: ["Csonttörések", "Vérzések (petechiák) a szervekben és lépmegnagyobbodás", "Zsírmáj", "Gyomorfekély"],
      correctAnswer: 1
    },
    {
      id: "suis_22",
      topic: "Streptococcus suis",
      question: "Milyen típusú tüdőgyulladást okozhat a S. suis?",
      options: ["Csak elhalásos", "Interstitialis vagy bronchopneumonia", "Csak tályogos", "Nem okoz tüdőgyulladást"],
      correctAnswer: 1
    },
    {
      id: "suis_23",
      topic: "Streptococcus suis",
      question: "Honnan KELL mintát venni a biztos diagnózishoz?",
      options: ["Orrváladékból", "Bélsárból", "Elváltozott szervekből (pl. agyvelő, ízület)", "Vizeletből"],
      correctAnswer: 2
    },
    {
      id: "suis_24",
      topic: "Streptococcus suis",
      question: "Miért nem bizonyító erejű az orr- és garatváladék minta pozitivitása?",
      options: ["Mert ott sosem található meg a baktérium", "Mert a S. suis a normál flóra része is lehet egészségesekben", "Mert a baktérium ott elpusztul", "Mert technikailag nehéz mintát venni"],
      correctAnswer: 1
    },
    {
      id: "suis_25",
      topic: "Streptococcus suis",
      question: "Milyen táptalajon tenyészthető jól a S. suis?",
      options: ["Csak speciális szintetikus táptalajon", "Véragaron", "Csak sejttenyészeten", "Nem tenyészthető"],
      correctAnswer: 1
    },
    {
      id: "suis_26",
      topic: "Streptococcus suis",
      question: "Mivel igazolható a fajazonosság a tenyésztés után?",
      options: ["Csak mikroszkópos ránézéssel", "Biokémiai tesztekkel és PCR-rel", "Ízleléspróbával", "Szaglással"],
      correctAnswer: 1
    },
    {
      id: "suis_27",
      topic: "Streptococcus suis",
      question: "Milyen módszerrel határozható meg a szerotípus?",
      options: ["Tárgylemez-agglutinációs próba", "Gram-festés", "Ultrahang", "Röntgen"],
      correctAnswer: 0
    },
    {
      id: "suis_28",
      topic: "Streptococcus suis",
      question: "Rendelkezésre áll-e rutin ELISA teszt a S. suis fertőzés kimutatására?",
      options: ["Igen, minden laborban ez az alap", "Nem áll rendelkezésre", "Csak Kanadában", "Csak kutatási célra"],
      correctAnswer: 1
    },
    {
      id: "suis_29",
      topic: "Streptococcus suis",
      question: "Milyen betegségtől kell elkülöníteni az idegrendszeri tünetes eseteket?",
      options: ["Sertésorbánc", "Glässer-betegség (H. parasuis)", "Ragadós száj- és körömfájás", "Sertésinfluenza"],
      correctAnswer: 1
    },
    {
      id: "suis_30",
      topic: "Streptococcus suis",
      question: "Milyen NEM fertőző ok okozhat hasonló idegrendszeri tüneteket?",
      options: ["Vitaminhiány", "Sómérgezés", "Napszúrás", "Túletetés"],
      correctAnswer: 1
    },
    {
      id: "suis_31",
      topic: "Streptococcus suis",
      question: "Milyen kórokozó okozza az Ödémabetegséget, ami hasonló tünetekkel járhat?",
      options: ["Salmonella", "Enterotoxikus E. coli", "Mycoplasma", "Clostridium"],
      correctAnswer: 1
    },
    {
      id: "suis_32",
      topic: "Streptococcus suis",
      question: "Milyen betegségre gyanakszunk inkább, ha kiterjedt polyserositist (savóshártya-gyulladást) látunk?",
      options: ["Streptococcus suis", "Glässer-betegség", "Sertésdysenteria", "Parvovírus"],
      correctAnswer: 1
    },
    {
      id: "suis_33",
      topic: "Streptococcus suis",
      question: "Mi az elsődlegesen választandó antibiotikum csoport a kezelésre?",
      options: ["Aminoglikozidok", "Béta-laktámok (pl. Penicillin)", "Szulfonamidok", "Nincs hatékony antibiotikum"],
      correctAnswer: 1
    },
    {
      id: "suis_34",
      topic: "Streptococcus suis",
      question: "Melyik antibiotikummal szemben alakul ki gyakran rezisztencia?",
      options: ["Penicillin", "Tetraciklinek", "Cefalosporinok", "Vankomicin"],
      correctAnswer: 1
    },
    {
      id: "suis_35",
      topic: "Streptococcus suis",
      question: "Mi a teendő rezisztencia gyanúja esetén?",
      options: ["Emelni a dózist", "Gyógyszerérzékenységi vizsgálat (antibiogram) készítése", "Várni a gyógyulásra", "Homeopátia alkalmazása"],
      correctAnswer: 1
    },
    {
      id: "suis_36",
      topic: "Streptococcus suis",
      question: "Miért fontos a korai injekciós kezelés meningitis esetén?",
      options: ["Mert olcsóbb", "Mert életmentő lehet", "Mert így nem fertőz tovább", "Mert a tablettát nem eszi meg"],
      correctAnswer: 1
    },
    {
      id: "suis_37",
      topic: "Streptococcus suis",
      question: "Van-e univerzális, minden szerotípus ellen védő kereskedelmi vakcina?",
      options: ["Igen, kötelező használni", "Nincs", "Csak Amerikában", "Igen, de drága"],
      correctAnswer: 1
    },
    {
      id: "suis_38",
      topic: "Streptococcus suis",
      question: "Milyen típusú vakcinát használnak leggyakrabban a védekezésben?",
      options: ["Élő, attenuált vakcinát", "Telepspecifikus (autogén) vakcinát", "RNS vakcinát", "Vektor vakcinát"],
      correctAnswer: 1
    },
    {
      id: "suis_39",
      topic: "Streptococcus suis",
      question: "Kiket oltanak általában a telepen a passzív immunitás érdekében?",
      options: ["Csak a kanokat", "A kocákat", "A hízókat", "Minden állatot egyszerre"],
      correctAnswer: 1
    },
    {
      id: "suis_40",
      topic: "Streptococcus suis",
      question: "Hogyan kapnak védelmet a malacok a koca oltása után?",
      options: ["A méhlepényen keresztül", "A föcstejjel (passzív immunitás)", "Cseppfertőzéssel", "Genetikai úton"],
      correctAnswer: 1
    },
    {
      id: "suis_41",
      topic: "Streptococcus suis",
      question: "Miért kell rendszeresen felülvizsgálni az autogén vakcinát?",
      options: ["Mert lejár a szavatossága", "Mert új szerotípusok bukkanhatnak fel vagy változhat a domináns törzs", "Mert a hatóság előírja", "Mert olcsóbb lesz"],
      correctAnswer: 1
    },
    {
      id: "suis_42",
      topic: "Streptococcus suis",
      question: "Melyik földrajzi régióban gyakori a súlyos emberi megbetegedés?",
      options: ["Nyugat-Európa", "Délkelet-Ázsia", "Észak-Amerika", "Ausztrália"],
      correctAnswer: 1
    },
    {
      id: "suis_43",
      topic: "Streptococcus suis",
      question: "Milyen kiegészítő kezelés javasolt az antibiotikum mellé?",
      options: ["Vitaminok", "Gyulladáscsökkentők", "Vízhajtók", "Nyugtatók"],
      correctAnswer: 1
    },
    {
      id: "suis_44",
      topic: "Streptococcus suis",
      question: "Milyen szerepe van a toknak a S. suis esetében?",
      options: ["Semmi", "Meghatározza a virulenciát és ellenálló képességet", "Csak a színeződésért felel", "Segíti a mozgást"],
      correctAnswer: 1
    },
    {
      id: "suis_45",
      topic: "Streptococcus suis",
      question: "Melyik állatfaj a S. suis fő gazdája?",
      options: ["Szarvasmarha", "Sertés", "Baromfi", "Ló"],
      correctAnswer: 1
    },
    {
      id: "suis_46",
      topic: "Streptococcus suis",
      question: "Milyen általános járványvédelmi intézkedés segít a megelőzésben?",
      options: ["Napi ötszöri etetés", "Új állatok karanténozása és megfelelő higiénia", "Az állatok szabadon engedése", "Folyamatos antibiotikum adagolás"],
      correctAnswer: 1
    },
    {
      id: "suis_47",
      topic: "Streptococcus suis",
      question: "Okozhat-e vetélést a S. suis?",
      options: ["Soha", "Igen, előfordulhat", "Csak kecskéknél", "Csak ha vírussal társul"],
      correctAnswer: 1
    },
    {
      id: "suis_48",
      topic: "Streptococcus suis",
      question: "Milyen mintázatú a S. suis okozta agyhártyagyulladás makroszkóposan?",
      options: ["Tiszta, átlátszó", "Fibrines vagy gennyes exsudatummal borított", "Száraz", "Fekete elszíneződésű"],
      correctAnswer: 1
    },
    {
      id: "suis_49",
      topic: "Streptococcus suis",
      question: "Mi a teendő a malacokkal, ha a betegség veszélye nagy?",
      options: ["Azonnal le kell vágni őket", "Vakcinázhatók a választást követően", "Külön istállóba kell zárni őket kezelés nélkül", "Nem lehet mit tenni"],
      correctAnswer: 1
    },
    {
      id: "suis_50",
      topic: "Streptococcus suis",
      question: "Milyen módszert alkalmaznak a molekuláris tipizálásra járványtani célból?",
      options: ["Gram-festés", "MLST (multilocus sequence typing)", "Elektronmikroszkópia", "Vércukormérés"],
      correctAnswer: 1
    }
  ]
};
