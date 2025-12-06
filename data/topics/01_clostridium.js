import React from 'react';
import { Microscope, AlertTriangle, ShieldAlert, Brain, Pill } from 'lucide-react';

export const clostridiumData = {
  id: "clostridium",
  title: "1. A Clostridium fajok jellemzői",
  studyMaterial: [
    {
      title: "1. A Clostridium fajok jellemzői",
      icon: <Microscope size={24} className="text-blue-500" />,
      color: "bg-blue-50 border-blue-200",
      sections: [
        {
          header: "Morfológia és Életmód",
          points: [
            "**Gram-pozitív**, pálca alakú, **endospórát** képző baktériumok.",
            "Többségük **obligát (szigorúan) anaerob**.",
            "**Spórák:** A sejten belül terminálisan, szubterminálisan vagy centrálisan. Gyakran deformálják a sejtet (pl. C. tetani \"dobverő\" alak).",
            "**Ellenálló képesség:** A spórák évekig túlélnek a talajban, trágyában.",
            "**Előfordulás:** Szaprofita (környezet) és normál bélflóra része."
          ]
        },
        {
          header: "Patogenitás és Toxinok",
          points: [
            "Fő fegyverük az **exotoxin** termelés.",
            "**C. perfringens típusok (A–E):** Fő toxinok alapján (alfa, béta, epsilon, iota).",
            "Sertésben jelentős: **A** és **C** típus.",
            "**Hatásmechanizmusok:** Szövetbontó (pl. foszfolipáz), Enterotoxin (bél), Neurotoxin (ideg).",
            "**Szöveti hatás:** Gázképződés (H₂S), szövetelhalás (necrosis), toxémia.",
            "**Labor:** Véres agaron jellegzetes **kettős hemolízis** (\"céltábla\")."
          ]
        }
      ]
    },
    {
      title: "2. Enterális kórképek (Bél)",
      icon: <AlertTriangle size={24} className="text-orange-500" />,
      color: "bg-orange-50 border-orange-200",
      sections: [
        {
          header: "C. perfringens C típus (Enteritis Necroticans)",
          points: [
            "**Célcsoport:** Újszülött malacok (1-3 napos kor).",
            "**Kórkép:** Hemorrágiás-elhalásos vékonybélgyulladást okoz.",
            "**Oka:** **Béta-toxin**. Ez tripszinérzékeny, ezért csak az első héten veszélyes (amíg alacsony a tripszin szint).",
            "**Tünetek:** Véres hasmenés, hirtelen elhullás, gázos belek.",
            "**Megelőzés:** Koca vakcinázása (kolosztrális védelem)."
          ]
        },
        {
          header: "C. perfringens A típus",
          points: [
            "**Kórkép:** Enyhébb **dysbacteriosis**, hasmenés.",
            "**Tünetek:** Sárgás/szürkés, híg (nem véres) bélsár. Lassú növekedés.",
            "**Ok:** Béta2-toxin termelő törzsek elszaporodása (pl. antibiotikum után)."
          ]
        },
        {
          header: "C. difficile colitis",
          points: [
            "**Jellemző:** Antibiotikum-kúra utáni (dysbacteriosis) vastagbélgyulladás.",
            "**Toxinok:** A (enterotoxin) és B (citotoxin).",
            "**Elváltozás:** Fibrines-álhártyás gyulladás, **\"Vulkán lézió\"**, mesocolon ödéma."
          ]
        }
      ]
    },
    {
      title: "3. Hisztotoxikus (Gázödémás) Fertőzések",
      icon: <ShieldAlert size={24} className="text-red-500" />,
      color: "bg-red-50 border-red-200",
      sections: [
        {
          header: "Általános Mechanizmus",
          points: [
            "Spórák bejutása sebbe (exogén) vagy bélből az izomba (endogén).",
            "Anaerob környezet (zúzódás) -> Aktiválódás -> Gázgangréna."
          ]
        },
        {
          header: "Specifikus Kórképek",
          points: [
            "**C. chauvoei ('Sercegő üszög'):** Ritka. Izomelhalás, fekete izom, **crepitatio** (gázos ropogás tapintásra).",
            "**C. novyi:** Heveny májelhalás (kocák hirtelen elhullása). Máj: sötét, omlós, szivacsos."
          ]
        }
      ]
    },
    {
      title: "4. Neurotoxikus Kórképek",
      icon: <Brain size={24} className="text-purple-500" />,
      color: "bg-purple-50 border-purple-200",
      sections: [
        {
          header: "Tetanusz (C. tetani)",
          points: [
            "**Fertőzés:** Mély, szennyezett seb (kasztrálás, köldök).",
            "**Toxin:** Tetanospazmin (gátolja a gátló neurotranszmittereket).",
            "**Tünet:** **Merevgörcsös (spasztikus) bénulás**.",
            "**Jelek:** Szájzár, **\"fűrészbak állás\"**, mimikai torzulás."
          ]
        },
        {
          header: "Botulizmus (C. botulinum)",
          points: [
            "**Jelleg:** Intoxikáció (Mérgezés), nem fertőzés!",
            "**Forrás:** Dög, romlott szilázs toxinja.",
            "**Toxin:** Gátolja az acetilkolin felszabadulását.",
            "**Tünet:** **Petyhüdt bénulás** (lefelé terjed).",
            "**Jelek:** Támolygás, nyelészavar, elfekvés."
          ]
        }
      ]
    },
    {
      title: "5. Terápia és Megelőzés",
      icon: <Pill size={24} className="text-emerald-500" />,
      color: "bg-emerald-50 border-emerald-200",
      sections: [
        {
          header: "Kezelés (Antibiotikum)",
          points: [
            "**JÓ:** Penicillinek, Lincosamidok, Makrolidok, Tetraciklinek.",
            "**TILOS (Hatástalan):** Aminoglikozidok (pl. gentamicin), Quinolonok. (Mert oxigénigényes a felvételük)."
          ]
        },
        {
          header: "Megelőzés (Kulcsfontosságú)",
          points: [
            "**Vakcina:** Kocák C. perfringens C (kolosztrális védelem).",
            "**Higiénia:** Steril műtétek, tiszta fialó, fertőtlenítés (spóraölő szerek).",
            "**Takarmány:** Fokozatos váltás, dögök távoltartása.",
            "**Adalékok:** Probiotikumok, szerves savak, cink-oxid (ZnO)."
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "clos_1",
      topic: "Clostridium - General",
      type: "mcq",
      question: "Milyen festődésűek és alakúak a Clostridiumok?",
      options: ["Gram-negatív pálcák", "Gram-pozitív pálcák", "Gram-pozitív coccusok", "Gram-negatív coccusok"],
      correctAnswer: 1,
      explanation: "A Clostridiumok Gram-pozitív, pálca alakú, endospórát képző baktériumok."
    },
    {
      id: "clos_2",
      topic: "Clostridium - General",
      type: "bool",
      question: "A Clostridium fajok spórái érzékenyek a környezeti hatásokra és gyorsan elpusztulnak a talajban.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis. A spórák rendkívül ellenállóak és évekig túlélhetnek a környezetben."
    },
    {
      id: "clos_3",
      topic: "Clostridium - General",
      type: "mcq",
      question: "Melyik toxinérzékenység jellemző a C. perfringens béta-toxinjára?",
      options: ["Hőérzékeny", "Tripszinérzékeny", "Savérzékeny", "Alkoholérzékeny"],
      correctAnswer: 1,
      explanation: "A béta-toxin tripszinérzékeny, ezért okoz betegséget főleg az élet első hetében, amikor a tripszinaktivitás alacsony."
    },
    {
      id: "clos_4",
      topic: "Clostridium - Enteric",
      type: "mcq",
      question: "Mit okoz a Clostridium perfringens C típus újszülött malacokban?",
      options: ["Idült vastagbélgyulladást", "Hemorrágiás-elhalásos vékonybélgyulladást", "Tüdőgyulladást", "Agyhártyagyulladást"],
      correctAnswer: 1,
      explanation: "Klasszikus enterotoxémiát, véres-elhalásos bélgyulladást okoz."
    },
    {
      id: "clos_5",
      topic: "Clostridium - Enteric",
      type: "mcq",
      question: "Melyik kórképre jellemző a 'vulkán lézió' és a mesocolon ödéma?",
      options: ["C. perfringens A", "C. perfringens C", "C. difficile", "C. tetani"],
      correctAnswer: 2,
      explanation: "Ezek a Clostridioides difficile okozta colitis tipikus kórbonctani jelei."
    },
    {
      id: "clos_6",
      topic: "Clostridium - Enteric",
      type: "bool",
      question: "A C. perfringens A típus csak immunszupprimált felnőtt sertésekben okoz tüneteket.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis. Szopós malacokban is okozhat dysbacteriosis jellegű, enyhébb hasmenést."
    },
    {
      id: "clos_7",
      topic: "Clostridium - Histotoxic",
      type: "mcq",
      question: "Melyik kórokozó okozza a sertések 'sercegő üszög' (blackleg-like) betegségét?",
      options: ["C. septicum", "C. novyi", "C. chauvoei", "C. sordellii"],
      correctAnswer: 2,
      explanation: "Bár ritka sertésben, a C. chauvoei okozza a sercegő üszögöt."
    },
    {
      id: "clos_8",
      topic: "Clostridium - Histotoxic",
      type: "mcq",
      question: "Milyen szerv elváltozása jellemző a C. novyi fertőzésre?",
      options: ["Tüdővizenyő", "Lépduzzanat", "Nekrotizáló hepatitis (májelhalás)", "Veseelégtelenség"],
      correctAnswer: 2,
      explanation: "A máj megnagyobbodott, omlós, csokoládébarna színű és szivacsos tapintatú."
    },
    {
      id: "clos_9",
      topic: "Clostridium - Neurotoxic",
      type: "mcq",
      question: "Mi a tetanusz jellemző klinikai tünete sertésben?",
      options: ["Petyhüdt bénulás", "Fűrészbak állás", "Véres hasmenés", "Körkörös mozgás"],
      correctAnswer: 1,
      explanation: "A merevgörcs miatti 'fűrészbak állás' és a szájzár a jellemző."
    },
    {
      id: "clos_10",
      topic: "Clostridium - Neurotoxic",
      type: "bool",
      question: "A botulizmus toxinja gátolja az acetilkolin felszabadulását, petyhüdt bénulást okozva.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Ez a botulinum toxin hatásmechanizmusa."
    },
    {
      id: "clos_11",
      topic: "Clostridium - Neurotoxic",
      type: "mcq",
      question: "Hogyan fertőződnek leggyakrabban botulizmussal a sertések?",
      options: ["Sebfertőzéssel", "Kullancscsípéssel", "Toxin tartalmú takarmány (dög, romlott szilázs) felvételével", "Cseppfertőzéssel"],
      correctAnswer: 2,
      explanation: "A botulizmus intoxikáció, nem valódi fertőzés; a toxint veszik fel a környezetből."
    },
    {
      id: "clos_12",
      topic: "Clostridium - Treatment",
      type: "mcq",
      question: "Melyik antibiotikum csoport hatástalan a Clostridiumok ellen?",
      options: ["Penicillinek", "Aminoglikozidok (pl. gentamicin)", "Makrolidok", "Tetraciklinek"],
      correctAnswer: 1,
      explanation: "Az aminoglikozidok (és quinolonok) hatástalanok, mivel felvételük oxigénigényes."
    },
    {
      id: "clos_13",
      topic: "Clostridium - Treatment",
      type: "bool",
      question: "A C. perfringens C típusú enteritis megelőzésére a kocákat vakcinázzák.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. A kocák vakcinázása kolosztrális védelmet biztosít a malacoknak."
    },
    {
      id: "clos_14",
      topic: "Clostridium - General",
      type: "mcq",
      question: "Milyen hemolízist mutatnak gyakran a Clostridiumok véres agaron?",
      options: ["Alfa (zöldítő)", "Nincs hemolízis", "Kettős (céltábla alakú) hemolízis", "Gamma hemolízis"],
      correctAnswer: 2,
      explanation: "Jellegzetes a kettős hemolízis zóna."
    },
    {
      id: "clos_15",
      topic: "Clostridium - Enteric",
      type: "mcq",
      question: "Melyik állatcsoport a legfogékonyabb a C. perfringens C okozta elhullásra?",
      options: ["Hízósertések", "Választási malacok", "Újszülött malacok (1 hetes korig)", "Kocák"],
      correctAnswer: 2,
      explanation: "A tripszin inhibíció hiánya miatt az első napokban/héten a legfogékonyabbak."
    },
    {
      id: "clos_16",
      topic: "Clostridium - Histotoxic",
      type: "bool",
      question: "A malignus ödéma (gázödéma) kórokozói soha nem jutnak be sebzéseken keresztül.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis. Az exogén fertőzés éppen sebzéseken (injekció, harapás) keresztül történik."
    },
    {
      id: "clos_17",
      topic: "Clostridium - Neurotoxic",
      type: "mcq",
      question: "Melyik a tetanusz lappangási ideje általában?",
      options: ["1-2 óra", "1-3 hét", "2-3 hónap", "Fél év"],
      correctAnswer: 1,
      explanation: "A lappangási idő általában 1-3 hét."
    },
    {
      id: "clos_18",
      topic: "Clostridium - Treatment",
      type: "mcq",
      question: "Milyen preventív intézkedés javasolt botulizmus ellen?",
      options: ["Kocák vakcinázása", "Döghús és romlott takarmány etetésének kerülése", "Antibiotikumos profilaxis", "Farokkurtítás"],
      correctAnswer: 1,
      explanation: "A legfontosabb a toxinforrások (dög, romlott szilázs) kizárása."
    },
    {
      id: "clos_19",
      topic: "Clostridium - General",
      type: "bool",
      question: "A Clostridiumok obligát aerob baktériumok.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis. A Clostridiumok anaerob (többségében obligát anaerob) baktériumok."
    },
    {
      id: "clos_20",
      topic: "Clostridium - Enteric",
      type: "mcq",
      question: "A C. difficile melyik két toxint termeli?",
      options: ["Alfa és Béta", "A és B toxin", "Tetanospazmin és Botulinum", "Epsilon és Iota"],
      correctAnswer: 1,
      explanation: "A C. difficile fő virulenciafaktorai az A (enterotoxin) és B (citotoxin) toxinok."
    }
  ]
};