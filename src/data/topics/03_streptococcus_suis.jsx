import React from 'react';
import { Microscope, Activity, Stethoscope, Syringe } from 'lucide-react';

export const streptococcus_suis = {
  id: "streptococcus_suis",
  title: "3. Streptococcus suis",
  shortTitle: "S. suis",
  description: "A Streptococcus suis jellemzői, klinikai formái, diagnosztikája és védekezés.",
  studyMaterial: [
    {
      title: "1. A Kórokozó Jellemzői",
      icon: <Microscope size={24} className="text-blue-600" />,
      color: "bg-blue-50 border-blue-200",
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
      icon: <Activity size={24} className="text-purple-600" />,
      color: "bg-purple-50 border-purple-200",
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
      icon: <Stethoscope size={24} className="text-amber-600" />,
      color: "bg-amber-50 border-amber-200",
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
      icon: <Syringe size={24} className="text-green-600" />,
      color: "bg-green-50 border-green-200",
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
      id: 1,
      question: "Milyen Gram-festődési tulajdonsággal rendelkezik a Streptococcus suis?",
      options: ["Gram-negatív", "Gram-pozitív", "Gram-variábilis", "Saválló"],
      correctAnswer: "Gram-pozitív"
    },
    {
      id: 2,
      question: "Milyen elrendeződés jellemző a Streptococcus suis baktériumokra?",
      options: ["Szőlőfürtszerű", "Láncokban elhelyezkedő coccus", "Diplococcusok", "Pálcák"],
      correctAnswer: "Láncokban elhelyezkedő coccus"
    },
    {
      id: 3,
      question: "Mi alapján sorolható szerotípusokba a Streptococcus suis?",
      options: ["A sejtfal fehérjéi", "A poliszacharid tok", "A flagellum antigének", "A termelt toxinok"],
      correctAnswer: "A poliszacharid tok"
    },
    {
      id: 4,
      question: "Milyen típusú hemolízist okoz a S. suis véres agaron?",
      options: ["Béta-hemolízist", "Gamma-hemolízist", "Alfa-hemolízist", "Nem okoz hemolízist"],
      correctAnswer: "Alfa-hemolízist"
    },
    {
      id: 5,
      question: "Hány ismert szerotípusa van jelenleg a S. suis-nak?",
      options: ["10", "23", "35", "Több mint 100"],
      correctAnswer: "35"
    },
    {
      id: 6,
      question: "Mely szerotípusok a leggyakoribbak?",
      options: ["20-25.", "1-9.", "30-35.", "Csak a 2-es típus"],
      correctAnswer: "1-9."
    },
    {
      id: 7,
      question: "Melyik szerotípus ST1 törzse ismert magas virulenciájáról?",
      options: ["1. szerotípus", "2. szerotípus", "7. szerotípus", "9. szerotípus"],
      correctAnswer: "2. szerotípus"
    },
    {
      id: 8,
      question: "Milyen oxigénigényű a Streptococcus suis?",
      options: ["Szigorú anaerob", "Szigorú aerob", "Fakultatív anaerob", "Mikroaerofil"],
      correctAnswer: "Fakultatív anaerob"
    },
    {
      id: 9,
      question: "Hol hordozzák leggyakrabban a baktériumot az egészséges sertések?",
      options: ["Vékonybél", "Felső légutak (tonsillák, orrüreg)", "Máj", "Izomszövet"],
      correctAnswer: "Felső légutak (tonsillák, orrüreg)"
    },
    {
      id: 10,
      question: "Hogyan terjed elsősorban a betegség állományok között?",
      options: ["Szél útján", "Fertőzött élő állatok behurcolásával", "Csak takarmánnyal", "Kizárólag rágcsálók révén"],
      correctAnswer: "Fertőzött élő állatok behurcolásával"
    },
    {
      id: 11,
      question: "Mennyi ideig marad fertőzőképes a S. suis elhullott állatokban (hullákban)?",
      options: ["Csak pár óráig", "Hetekig", "Évekig", "Azonnal elpusztul a gazdával együtt"],
      correctAnswer: "Hetekig"
    },
    {
      id: 12,
      question: "Jelent-e zoonózis veszélyt a Streptococcus suis?",
      options: ["Nem, szigorúan fajspecifikus", "Igen, embert is megbetegíthet", "Csak kutyákra veszélyes", "Csak madarakra veszélyes"],
      correctAnswer: "Igen, embert is megbetegíthet"
    },
    {
      id: 13,
      question: "Milyen súlyos kórképet okozhat emberben a S. suis?",
      options: ["Enyhe bőrkiütés", "Agyhártyagyulladás (meningitis)", "Gyomorrontás", "Hajhullás"],
      correctAnswer: "Agyhártyagyulladás (meningitis)"
    },
    {
      id: 14,
      question: "Melyik korcsoportban jelentkeznek leggyakrabban a tünetek sertéseknél?",
      options: ["Újszülött malacok (1-3 napos)", "Választás utáni malacok (5-10 hetes)", "Idős tenyészkocák", "Hízók vágás előtt"],
      correctAnswer: "Választás utáni malacok (5-10 hetes)"
    },
    {
      id: 15,
      question: "Mi jellemzi a perakut lefolyást?",
      options: ["Hosszan tartó köhögés", "Hirtelen elhullás előzetes tünetek nélkül", "Krónikus sántaság", "Fokozatos fogyás"],
      correctAnswer: "Hirtelen elhullás előzetes tünetek nélkül"
    },
    {
      id: 16,
      question: "Mi az opisthotonus?",
      options: ["Szemtekerezgés", "Izületi duzzanat", "Tarkó- és hátizmok merevsége miatti hátrahajló testtartás", "Bőr alatti vizenyő"],
      correctAnswer: "Tarkó- és hátizmok merevsége miatti hátrahajló testtartás"
    },
    {
      id: 17,
      question: "Mi a nystagmus?",
      options: ["Szemtekerezgés", "Fogcsikorgatás", "Bélgörcs", "Szívritmuszavar"],
      correctAnswer: "Szemtekerezgés"
    },
    {
      id: 18,
      question: "Melyik kórforma jellemző tünete az ataxia és görcsök?",
      options: ["Szubakut ízületi forma", "Akut idegrendszeri forma (meningitis)", "Krónikus tüdőgyulladás", "Bőrforma"],
      correctAnswer: "Akut idegrendszeri forma (meningitis)"
    },
    {
      id: 19,
      question: "Melyik szerv gyulladása okozhat hirtelen elhullást szubakut esetben a keringés összeomlása miatt?",
      options: ["Tüdő", "Máj", "Szívbelhártya (endocarditis)", "Vese"],
      correctAnswer: "Szívbelhártya (endocarditis)"
    },
    {
      id: 20,
      question: "Mit jelent a 'bánulás' a klinikai tünetek között?",
      options: ["Depresszió", "Sántaság az ízületgyulladás miatt", "Étvágytalanság", "Vakság"],
      correctAnswer: "Sántaság az ízületgyulladás miatt"
    },
    {
      id: 21,
      question: "Milyen elváltozás utal szeptikémiára a boncolás során?",
      options: ["Csonttörések", "Vérzések (petechiák) a szervekben és lépmegnagyobbodás", "Zsírmáj", "Gyomorfekély"],
      correctAnswer: "Vérzések (petechiák) a szervekben és lépmegnagyobbodás"
    },
    {
      id: 22,
      question: "Milyen típusú tüdőgyulladást okozhat a S. suis?",
      options: ["Csak elhalásos", "Interstitialis vagy bronchopneumonia", "Csak tályogos", "Nem okoz tüdőgyulladást"],
      correctAnswer: "Interstitialis vagy bronchopneumonia"
    },
    {
      id: 23,
      question: "Honnan KELL mintát venni a biztos diagnózishoz?",
      options: ["Orrváladékból", "Bélsárból", "Elváltozott szervekből (pl. agyvelő, ízület)", "Vizeletből"],
      correctAnswer: "Elváltozott szervekből (pl. agyvelő, ízület)"
    },
    {
      id: 24,
      question: "Miért nem bizonyító erejű az orr- és garatváladék minta pozitivitása?",
      options: ["Mert ott sosem található meg a baktérium", "Mert a S. suis a normál flóra része is lehet egészségesekben", "Mert a baktérium ott elpusztul", "Mert technikailag nehéz mintát venni"],
      correctAnswer: "Mert a S. suis a normál flóra része is lehet egészségesekben"
    },
    {
      id: 25,
      question: "Milyen táptalajon tenyészthető jól a S. suis?",
      options: ["Csak speciális szintetikus táptalajon", "Véragaron", "Csak sejttenyészeten", "Nem tenyészthető"],
      correctAnswer: "Véragaron"
    },
    {
      id: 26,
      question: "Mivel igazolható a fajazonosság a tenyésztés után?",
      options: ["Csak mikroszkópos ránézéssel", "Biokémiai tesztekkel és PCR-rel", "Ízleléspróbával", "Szaglással"],
      correctAnswer: "Biokémiai tesztekkel és PCR-rel"
    },
    {
      id: 27,
      question: "Milyen módszerrel határozható meg a szerotípus?",
      options: ["Tárgylemez-agglutinációs próba", "Gram-festés", "Ultrahang", "Röntgen"],
      correctAnswer: "Tárgylemez-agglutinációs próba"
    },
    {
      id: 28,
      question: "Rendelkezésre áll-e rutin ELISA teszt a S. suis fertőzés kimutatására?",
      options: ["Igen, minden laborban ez az alap", "Nem áll rendelkezésre", "Csak Kanadában", "Csak kutatási célra"],
      correctAnswer: "Nem áll rendelkezésre"
    },
    {
      id: 29,
      question: "Milyen betegségtől kell elkülöníteni az idegrendszeri tünetes eseteket?",
      options: ["Sertésorbánc", "Glässer-betegség (H. parasuis)", "Ragadós száj- és körömfájás", "Sertésinfluenza"],
      correctAnswer: "Glässer-betegség (H. parasuis)"
    },
    {
      id: 30,
      question: "Milyen NEM fertőző ok okozhat hasonló idegrendszeri tüneteket?",
      options: ["Vitaminhiány", "Sómérgezés", "Napszúrás", "Túletetés"],
      correctAnswer: "Sómérgezés"
    },
    {
      id: 31,
      question: "Milyen kórokozó okozza az Ödémabetegséget, ami hasonló tünetekkel járhat?",
      options: ["Salmonella", "Enterotoxikus E. coli", "Mycoplasma", "Clostridium"],
      correctAnswer: "Enterotoxikus E. coli"
    },
    {
      id: 32,
      question: "Milyen betegségre gyanakszunk inkább, ha kiterjedt polyserositist (savóshártya-gyulladást) látunk?",
      options: ["Streptococcus suis", "Glässer-betegség", "Sertésdysenteria", "Parvovírus"],
      correctAnswer: "Glässer-betegség"
    },
    {
      id: 33,
      question: "Mi az elsődlegesen választandó antibiotikum csoport a kezelésre?",
      options: ["Aminoglikozidok", "Béta-laktámok (pl. Penicillin)", "Szulfonamidok", "Nincs hatékony antibiotikum"],
      correctAnswer: "Béta-laktámok (pl. Penicillin)"
    },
    {
      id: 34,
      question: "Melyik antibiotikummal szemben alakul ki gyakran rezisztencia?",
      options: ["Penicillin", "Tetraciklinek", "Cefalosporinok", "Vankomicin"],
      correctAnswer: "Tetraciklinek"
    },
    {
      id: 35,
      question: "Mi a teendő rezisztencia gyanúja esetén?",
      options: ["Emelni a dózist", "Gyógyszerérzékenységi vizsgálat (antibiogram) készítése", "Várni a gyógyulásra", "Homeopátia alkalmazása"],
      correctAnswer: "Gyógyszerérzékenységi vizsgálat (antibiogram) készítése"
    },
    {
      id: 36,
      question: "Miért fontos a korai injekciós kezelés meningitis esetén?",
      options: ["Mert olcsóbb", "Mert életmentő lehet", "Mert így nem fertőz tovább", "Mert a tablettát nem eszi meg"],
      correctAnswer: "Mert életmentő lehet"
    },
    {
      id: 37,
      question: "Van-e univerzális, minden szerotípus ellen védő kereskedelmi vakcina?",
      options: ["Igen, kötelező használni", "Nincs", "Csak Amerikában", "Igen, de drága"],
      correctAnswer: "Nincs"
    },
    {
      id: 38,
      question: "Milyen típusú vakcinát használnak leggyakrabban a védekezésben?",
      options: ["Élő, attenuált vakcinát", "Telepspecifikus (autogén) vakcinát", "RNS vakcinát", "Vektor vakcinát"],
      correctAnswer: "Telepspecifikus (autogén) vakcinát"
    },
    {
      id: 39,
      question: "Kiket oltanak általában a telepen a passzív immunitás érdekében?",
      options: ["Csak a kanokat", "A kocákat", "A hízókat", "Minden állatot egyszerre"],
      correctAnswer: "A kocákat"
    },
    {
      id: 40,
      question: "Hogyan kapnak védelmet a malacok a koca oltása után?",
      options: ["A méhlepényen keresztül", "A föcstejjel (passzív immunitás)", "Cseppfertőzéssel", "Genetikai úton"],
      correctAnswer: "A föcstejjel (passzív immunitás)"
    },
    {
      id: 41,
      question: "Miért kell rendszeresen felülvizsgálni az autogén vakcinát?",
      options: ["Mert lejár a szavatossága", "Mert új szerotípusok bukkanhatnak fel vagy változhat a domináns törzs", "Mert a hatóság előírja", "Mert olcsóbb lesz"],
      correctAnswer: "Mert új szerotípusok bukkanhatnak fel vagy változhat a domináns törzs"
    },
    {
      id: 42,
      question: "Melyik földrajzi régióban gyakori a súlyos emberi megbetegedés?",
      options: ["Nyugat-Európa", "Délkelet-Ázsia", "Észak-Amerika", "Ausztrália"],
      correctAnswer: "Délkelet-Ázsia"
    },
    {
      id: 43,
      question: "Milyen kiegészítő kezelés javasolt az antibiotikum mellé?",
      options: ["Vitaminok", "Gyulladáscsökkentők", "Vízhajtók", "Nyugtatók"],
      correctAnswer: "Gyulladáscsökkentők"
    },
    {
      id: 44,
      question: "Milyen szerepe van a toknak a S. suis esetében?",
      options: ["Semmi", "Meghatározza a virulenciát és ellenálló képességet", "Csak a színeződésért felel", "Segíti a mozgást"],
      correctAnswer: "Meghatározza a virulenciát és ellenálló képességet"
    },
    {
      id: 45,
      question: "Melyik állatfaj a S. suis fő gazdája?",
      options: ["Szarvasmarha", "Sertés", "Baromfi", "Ló"],
      correctAnswer: "Sertés"
    },
    {
      id: 46,
      question: "Milyen általános járványvédelmi intézkedés segít a megelőzésben?",
      options: ["Napi ötszöri etetés", "Új állatok karanténozása és megfelelő higiénia", "Az állatok szabadon engedése", "Folyamatos antibiotikum adagolás"],
      correctAnswer: "Új állatok karanténozása és megfelelő higiénia"
    },
    {
      id: 47,
      question: "Okozhat-e vetélést a S. suis?",
      options: ["Soha", "Igen, előfordulhat", "Csak kecskéknél", "Csak ha vírussal társul"],
      correctAnswer: "Igen, előfordulhat"
    },
    {
      id: 48,
      question: "Milyen mintázatú a S. suis okozta agyhártyagyulladás makroszkóposan?",
      options: ["Tiszta, átlátszó", "Fibrines vagy gennyes exsudatummal borított", "Száraz", "Fekete elszíneződésű"],
      correctAnswer: "Fibrines vagy gennyes exsudatummal borított"
    },
    {
      id: 49,
      question: "Mi a teendő a malacokkal, ha a betegség veszélye nagy?",
      options: ["Azonnal le kell vágni őket", "Vakcinázhatók a választást követően", "Külön istállóba kell zárni őket kezelés nélkül", "Nem lehet mit tenni"],
      correctAnswer: "Vakcinázhatók a választást követően"
    },
    {
      id: 50,
      question: "Milyen módszert alkalmaznak a molekuláris tipizálásra járványtani célból?",
      options: ["Gram-festés", "MLST (multilocus sequence typing)", "Elektronmikroszkópia", "Vércukormérés"],
      correctAnswer: "MLST (multilocus sequence typing)"
    }
  ]
};