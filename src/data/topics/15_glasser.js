export const glasserData = {
  id: "glasser",
  title: "15. Glaesserella parasuis (Glässer-kór)",
  shortTitle: "Glässer-kór",
  description: "A sertések fertőző savóshártya- és ízületgyulladása (Glaesserella parasuis).",
  studyMaterial: [
    {
      title: "1. Kóroktan és Etiológia",
      icon: "microscope",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
      sections: [
        {
          header: "A Kórokozó Jellemzői",
          points: [
            "**Glaesserella parasuis** (korábban *Haemophilus parasuis*).",
            "Gram-negatív, kisméretű, pleomorf pálca.",
            "Tenyésztése igényes: **NAD (V-faktor) igényű**. Csokoládéagaron vagy *S. aureus* melletti szatellita növekedéssel tenyészthető."
          ]
        },
        {
          header: "Szerotípusok és Virulencia",
          points: [
            "15 szerotípusa ismert (Kielstein-Rapp-Gabrielson séma).",
            "**Magas virulenciájúak:** 1, 5, 10, 12, 13, 14 (akut Glässer-betegség).",
            "Magyarországon a **4-es és 5-ös szerotípus** a leggyakoribb.",
            "A virulencia markere a **vtaA (Group 1)** gének jelenléte."
          ]
        }
      ]
    },
    {
      title: "2. Járványtan",
      icon: "users",
      color: "bg-amber-50 border-amber-200",
      iconColor: "text-amber-600",
      sections: [
        {
          header: "Kolonizáció és Immunitás",
          points: [
            "A felső légutak (orrüreg, tonsilla) természetes kolonizálója.",
            "A malacok ideális esetben az anyai védelem alatt fertőződnek meg, így aktív immunitás alakul ki.",
            "**High health status kockázat:** A kórokozóval korábban nem találkozott (naiv) állományokban robbanásszerű járványt okozhat."
          ]
        },
        {
          header: "Hajlamosító Tényezők",
          points: [
            "Tipikus **stressz-betegség**: választás, szállítás, huzat, hideg.",
            "Társfertőzések: **PRRS és Sertésinfluenza (SIV)** drasztikusan növelik a fogékonyságot."
          ]
        }
      ]
    },
    {
      title: "3. Klinikai Tünetek és Kórbonctan",
      icon: "activity",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
      sections: [
        {
          header: "Klinikai Formák",
          points: [
            "**Heveny forma:** Magas láz (40,5-42 °C), bágyadtság.",
            "**Polyserositis miatti fájdalom:** Nehezített \"hasi légzés\", púposítás, mozgásra visítás.",
            "**Idegrendszeri tünetek:** Oldalfekvés, evező mozgás, remegés (hasonló a S. suis-hoz).",
            "**Krónikus forma:** \"Borzas malacok\", lesoványodás, tartós sántaság."
          ]
        },
        {
          header: "Kórbonctan",
          points: [
            "**Fibrines polyserositis:** Sárgás, bőséges fibrines lepedék a mellhártyán, szívburkon (**bundás szív**) és a hashártyán.",
            "**Arthritis:** Zavaros, fibrines ízületi nedv.",
            "**Meningitis:** Gennyes-fibrines agyhártyagyulladás."
          ]
        }
      ]
    },
    {
      title: "4. Diagnosztika és Elkülönítés",
      icon: "stethoscope",
      color: "bg-teal-50 border-teal-200",
      iconColor: "text-teal-600",
      sections: [
        {
          header: "Mintavétel",
          points: [
            "Minta: pleura, pericardium, peritoneum, ízületek vagy agyvelő.",
            "**Fontos:** Az orr/tonsilla minta nem diagnosztikai értékű (hordozás miatt)!",
            "A baktérium gyorsan pusztul a hullában, friss minta kell."
          ]
        },
        {
          header: "Módszerek",
          points: [
            "**PCR:** Leggyorsabb és legpontosabb (vtaA gének és szerotipizálás).",
            "**Tenyésztés:** Nehézkes, NAD igény miatt."
          ]
        }
      ]
    },
    {
      title: "5. Gyógykezelés és Megelőzés",
      icon: "syringe",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
      sections: [
        {
          header: "Antibiotikum Választás",
          points: [
            "**Ceftiofur:** Kiváló hatékonyság heveny esetekben.",
            "**Florfenikol:** Nagyon jó szöveti eloszlás, hatékony légzőszervi kórokozó ellen.",
            "**Amoxicillin:** Ivóvízben vagy takarmányban csoportos kezelésre.",
            "**Kerülendő:** Tetraciklinek és makrolidok (gyakori rezisztencia)."
          ]
        },
        {
          header: "Kezelési Stratégia",
          points: [
            "Beteg állatok: **egyedi injekció** + **NSAID**.",
            "Falka: **ivóvízkezelés** 5-7 napig (metafilaxis)."
          ]
        },
        {
          header: "Megelőzés",
          points: [
            "**Vakcinázás:** Inaktivált kereskedelmi (szerotípus-specifikus) vagy autogén vakcinák.",
            "Kocák oltása fialás előtt a passzív védelemért.",
            "Menedzsment: Stresszmentes választás, PRRS kontroll."
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "glasser_1",
      topic: "Glaesserella parasuis",
      question: "Mi volt a Glaesserella parasuis korábbi tudományos neve?",
      options: ["Haemophilus parasuis", "Actinobacillus pleuropneumoniae", "Pasteurella multocida", "Streptococcus suis"],
      correctAnswer: 0
    },
    {
      id: "glasser_2",
      topic: "Glaesserella parasuis",
      question: "Milyen speciális igénye van a G. parasuis-nak a laboratóriumi tenyésztés során?",
      options: ["Oxigénmentes környezet", "NAD (V-faktor) igény", "Magas sókoncentráció", "Csak sejttenyészeten nő"],
      correctAnswer: 1
    },
    {
      id: "glasser_3",
      topic: "Glaesserella parasuis",
      question: "Mely szerotípusok a leggyakoribbak a G. parasuis izolátumok között Magyarországon?",
      options: ["1-es és 2-es", "4-es és 5-ös", "10-es és 12-es", "14-es és 15-ös"],
      correctAnswer: 1
    },
    {
      id: "glasser_4",
      topic: "Glaesserella parasuis",
      question: "Melyik géncsoport jelenléte utal a G. parasuis törzsek invazivitására és virulenciájára?",
      options: ["tet(O)", "vtaA (Group 1)", "erm(B)", "blaROB-1"],
      correctAnswer: 1
    },
    {
      id: "glasser_5",
      topic: "Glaesserella parasuis",
      question: "Mi a Glässer-betegség klasszikus kórbonctani elváltozása?",
      options: ["Elhalásos tüdőgyulladás", "Fibrines polyserositis (pl. bundás szív)", "Lépmegnagyobbodás nélkül", "Kizárólag bőrvérzések"],
      correctAnswer: 1
    },
    {
      id: "glasser_6",
      topic: "Glaesserella parasuis",
      question: "Melyik állítás igaz a 'naiv' (kórokozótól mentes) állományok G. parasuis fertőzésére?",
      options: ["Enyhe lefolyású marad", "Robbanásszerű járványt és magas elhullást okozhat", "Nem betegszenek meg", "Csak az öreg kocák hullanak el"],
      correctAnswer: 1
    },
    {
      id: "glasser_7",
      topic: "Glaesserella parasuis",
      question: "Hogyan jellemezhető a Glässer-betegség során jelentkező légzési zavar?",
      options: ["Száraz, kínzó köhögés", "Nehezített 'hasi légzés' a fájdalmas polyserositis miatt", "Nincs légzési zavar", "Csak tüsszögés"],
      correctAnswer: 1
    },
    {
      id: "glasser_8",
      topic: "Glaesserella parasuis",
      question: "Melyik antibiotikum az egyik leggyakrabban használt szer az akut esetek injekciós kezelésére?",
      options: ["Penicillin", "Ceftiofur", "Tilozin", "Tiamulin"],
      correctAnswer: 1
    },
    {
      id: "glasser_9",
      topic: "Glaesserella parasuis",
      question: "Miért fontos a G. parasuis esetén a szerotipizálás a vakcinázás előtt?",
      options: ["Mert a védelem szerotípus-specifikus", "Mert így olcsóbb a vakcina", "Mert csak így lehet beadni", "Mert a hatóság előírja"],
      correctAnswer: 0
    },
    {
      id: "glasser_10",
      topic: "Glaesserella parasuis",
      question: "Honnan KELL mintát venni a szisztémás Glässer-betegség biztos igazolásához?",
      options: ["Orrnyílás", "Mandula", "Testüregek (pleura, pericardium) vagy agyvelő", "Bélsár"],
      correctAnswer: 2
    }
  ]
};
