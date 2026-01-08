export const mycoplasmaData = {
  id: "mycoplasma",
  title: "14. Mycoplasma hyorhinis és M. hyosynoviae",
  shortTitle: "Mycoplasma sántaság",
  description: "A sertések Mycoplasma hyorhinis és M. hyosynoviae okozta polyserositise és arthritise.",
  studyMaterial: [
    {
      title: "1. Kóroktan és Általános Jellemzők",
      icon: "microscope",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
      sections: [
        {
          header: "A Mycoplasma Nemzetség",
          points: [
            "A Mollicutes osztályba tartoznak; a legkisebb önállóan szaporodni képes prokarióták.",
            "**Nincs sejtfaluk!** Csak egy háromrétegű membrán határolja őket.",
            "**Terápiás következmény:** Természetes (intrinszik) rezisztencia minden **béta-laktám** (penicillinek, cefalosporinok) antibiotikummal szemben!",
            "Tenyésztésük nehéz, speciális táptalajt igényelnek, ezért a diagnosztika a **PCR-re** épül."
          ]
        }
      ]
    },
    {
      title: "2. Mycoplasma hyorhinis",
      icon: "activity",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
      sections: [
        {
          header: "Járványtan",
          points: [
            "Érintett korosztály: **választott malacok és növendékek (3-10 hetes kor)**.",
            "A légutakban hordozott baktérium stresszhatásra (választás, hideg) vagy társfertőzésekre (PRRS) a véráramba jut."
          ]
        },
        {
          header: "Klinikai Tünetek és Kórbonctan",
          points: [
            "**Vezető tünet:** Sántaság, duzzadt ízületek, púposított hát (fájdalom).",
            "**Kórbonctan:** Fibrines-savós **polyserositis** (mellhártya, szívburok, hashártya gyulladás).",
            "**Vajas kenyér szív:** Fibrines felrakódás a szívburokban."
          ]
        }
      ]
    },
    {
      title: "3. Mycoplasma hyosynoviae",
      icon: "alert-circle",
      color: "bg-amber-50 border-amber-200",
      iconColor: "text-amber-600",
      sections: [
        {
          header: "Járványtan",
          points: [
            "Érintett korosztály: **idősebb hízók (12-24 hetes kor)** és kocasüldők.",
            "A baktérium a tonsillákban perzisztál, cseppfertőzéssel terjed."
          ]
        },
        {
          header: "Klinikai Tünetek és Kórbonctan",
          points: [
            "**Vezető tünet:** Hirtelen fellépő, gyakran \"vándorló\" sántaság.",
            "**\"Kutyaszerű ülés\"**: Az állatok nehezen állnak fel a végtagfájdalom miatt.",
            "**Kórbonctan:** Kizárólag az ízületeket érinti (**nincs polyserositis!**).",
            "Az ízületi nedv megszaporodott, **szalmasárga**, tiszta vagy enyhén zavaros."
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
            "A legmegfelelőbb minta az **ízületi punktátum (synovia)** vagy a fibrin az érintett savóshártyákról.",
            "A tonsilla/orr-tampon csak a hordozást igazolja, a betegséget nem!"
          ]
        },
        {
          header: "Differenciáldiagnózis",
          points: [
            "**G. parasuis:** Fibrines polyserositis fiatalabb korban, lázzal.",
            "**S. suis:** Gennyes arthritis és meningitis.",
            "**Sertésorbánc:** Idült arthritis, de bőr- vagy szívtünetek is lehetnek."
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
          header: "Hatékony Antibiotikumok",
          points: [
            "**Pleuromutilinek (Tiamulin, Valnemulin):** Kiemelkedően hatékonyak, jól penetrálnak az ízületekbe.",
            "**Tetraciklinek (Doxiciklin):** Jó szöveti eloszlás, költséghatékony.",
            "**Linkózamidok (Linkomicin):** Kiváló ízületi penetráció, de a rezisztencia terjedőben van.",
            "**Fluorokinolonok (Enrofloxacin):** In vitro hatékony, de használatuk korlátozott."
          ]
        },
        {
          header: "Kezelési Szabály",
          points: [
            "**TILOS a béta-laktámok** (Penicillin, Amoxicillin, Ceftiofur) használata, mert hatástalanok a sejtfal hiánya miatt!",
            "Kiegészítő kezelés: **NSAID** (pl. Meloxicam) a fájdalom és gyulladás csökkentésére."
          ]
        },
        {
          header: "Megelőzés",
          points: [
            "Autogén vakcinák (telepspecifikus) készítése.",
            "PRRS és PCV2 kontroll (immunszuppresszió elkerülése).",
            "Menedzsment: megfelelő padozat, zsúfoltság elkerülése."
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "myco_1",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      question: "Mi a legfontosabb biológiai tulajdonsága a Mycoplasma nemzetségnek, ami meghatározza az antibiotikum érzékenységüket?",
      options: ["Gram-pozitív festődés", "Sejtfal hiánya", "Tokképzés", "NAD-igényes növekedés"],
      correctAnswer: 1
    },
    {
      id: "myco_2",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      question: "Melyik antibiotikum csoport használata szigorúan TILOS és hatástalan Mycoplasma fertőzés esetén?",
      options: ["Pleuromutilinek", "Béta-laktámok (pl. Penicillinek)", "Tetraciklinek", "Linkózamidok"],
      correctAnswer: 1
    },
    {
      id: "myco_3",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      question: "Melyik Mycoplasma faj okoz polyserositist és arthritist a választott malacokban (3-10 hetes kor)?",
      options: ["Mycoplasma hyopneumoniae", "Mycoplasma hyorhinis", "Mycoplasma hyosynoviae", "Mycoplasma suis"],
      correctAnswer: 1
    },
    {
      id: "myco_4",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      question: "Melyik korosztályt érinti jellemzően a Mycoplasma hyosynoviae okozta sántaság?",
      options: ["Szopós malacok", "Választott malacok (4-6 hét)", "Idősebb hízók (12-24 hét) és süldők", "Kizárólag öreg tenyészkocák"],
      correctAnswer: 2
    },
    {
      id: "myco_5",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      question: "Milyen kórbonctani elváltozás jellemző a Mycoplasma hyosynoviae fertőzésre?",
      points: ["Fibrines polyserositis (bundás szív)", "Gennyes meningitis", "Kizárólag ízületi elváltozások (szalmasárga nedv)", "Elhalásos tüdőgyulladás"],
      options: ["Fibrines polyserositis", "Gennyes meningitis", "Kizárólag ízületi elváltozások (szalmasárga nedv)", "Elhalásos tüdőgyulladás"],
      correctAnswer: 2
    },
    {
      id: "myco_6",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      question: "Mi a 'vajas kenyér szív' (fibrines pericarditis) a sertés-patológiában?",
      options: ["Vitaminhiány jele", "Mycoplasma hyorhinis vagy G. parasuis okozta fibrines felrakódás", "Csak S. suis okozhatja", "A takarmányozási hiba következménye"],
      correctAnswer: 1
    },
    {
      id: "myco_7",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      question: "Melyik antibiotikum kiemelkedően hatékony a Mycoplasmák ellen és rendelkezik alacsony MIC értékkel?",
      options: ["Penicillin", "Tiamulin", "Ceftiofur", "Amoxicillin"],
      correctAnswer: 1
    },
    {
      id: "myco_8",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      question: "Milyen kiegészítő terápia javasolt a sánta állatoknak a fájdalom csillapítására?",
      options: ["NSAID (nem szteroid gyulladáscsökkentő)", "Szteroid", "Antibiotikum emelt dózisban", "Altató"],
      correctAnswer: 0
    },
    {
      id: "myco_9",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      question: "Honnan kell mintát venni a Mycoplasma okozta sántaság biztos igazolásához?",
      options: ["Orr-tampon", "Bélsár", "Ízületi punktátum (synovia)", "Vizelet"],
      correctAnswer: 2
    },
    {
      id: "myco_10",
      topic: "Mycoplasma hyorhinis / hyosynoviae",
      question: "Melyik diagnosztikai módszer a legmegbízhatóbb a Mycoplasma fajok azonosítására?",
      options: ["Gram-festés", "PCR", "Hagyományos tenyésztés", "Röntgen"],
      correctAnswer: 1
    }
  ]
};
