export const streptococcus_suis = {
  id: "streptococcus_suis",
  title: "3. Streptococcus suis",
  shortTitle: "S. suis",
  description: "A Streptococcus suis jellemzői, klinikai formái, modern diagnosztikája és rezisztencia-alapú terápiája.",
  studyMaterial: [
    {
      title: "1. Kóroktan és Taxonómiai Változások",
      icon: "microscope",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
      sections: [
        {
          header: "A Kórokozó Jellemzői",
          points: [
            "**Gram-pozitív**, láncokban elhelyezkedő coccus, fakultatív anaerob.",
            "Véres agaron általában **alfa-hemolízist** (zöldülést) okoz, de egyes törzsek béta-hemolitikusak is lehetnek.",
            "A szerotipizálás alapja a **tokpoliszacharid (CPS)**; korábban 35 szerotípust különítettek el."
          ]
        },
        {
          header: "Taxonómiai Változások",
          points: [
            "A korábbi 20, 22, 26-os szerotípusokat ma már a **Streptococcus parasuis** fajba sorolják.",
            "A 32 és 34-es szerotípusokat a **Streptococcus orisratti** fajba sorolták át."
          ]
        },
        {
          header: "Magyarországi Szerotípus Eloszlás (2020-2023)",
          points: [
            "**9-es szerotípus:** 19,6% (leggyakoribb hazánkban!).",
            "**2-es szerotípus:** 19,3% (globálisan ez a legdominánsabb).",
            "**1/2-es szerotípus:** 18,9%.",
            "**7-es szerotípus:** 14,5%."
          ]
        },
        {
          header: "Legfontosabb Virulenciafaktorok",
          points: [
            "**Tokpoliszacharid (CPS):** Gátolja a fagocitózist; sziálsav-tartalma miatt \"álcázza\" a baktériumot.",
            "**Suilysin (SLY):** Pórusképző toxin, citotoxikus hatású, segíti a vér-agy gát átlépését.",
            "**MRP (Muramidáz-release protein)** és **EF (Extracelluláris faktor)**: Virulencia markerek.",
            "**Biofilm-képzés:** Növeli az ellenálló képességet az antibiotikumokkal szemben."
          ]
        }
      ]
    },
    {
      title: "2. Járványtan és Zoonózis",
      icon: "users",
      color: "bg-amber-50 border-amber-200",
      iconColor: "text-amber-600",
      sections: [
        {
          header: "Terjedés",
          points: [
            "**Vertikális:** A malacok a szülőcsatornában vagy közvetlenül születés után a koca váladékaival fertőződnek.",
            "**Horizontális:** Választás után orr-orr kontaktussal vagy aeroszol útján.",
            "**Hordozás:** A tonsillák kriptáiban és az orrüregben perzisztál."
          ]
        },
        {
          header: "Hajlamosító Tényezők (PRDC)",
          points: [
            "Környezeti stressz: rossz szellőzés, ammónia, nagy hőingadozás (>10 °C).",
            "**Társfertőzések:** PRRS (makrofág gátlás), Sertésinfluenza (hámkárosítás), Mycoplasma hyopneumoniae."
          ]
        },
        {
          header: "⚠️ Zoonózis",
          points: [
            "Főleg a **2-es szerotípus** (ST1, ST7) veszélyes az emberre.",
            "**Tünetek:** Gennyes meningitis, szeptikémia, maradandó süketség.",
            "**Kockázat:** Sertéstartók, vágóhídi dolgozók, állatorvosi boncolás (bőrsebzéseken át)."
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
            "**Perakut szeptikémia:** Hirtelen elhullás, cianózis, lépduzzanat.",
            "**Meningitis (Agyhártyagyulladás):** Magas láz (40,5-42 °C), inkoordináció, evező mozgás, opisthotonus, nystagmus, hyperaesthesia (túlérzékenység).",
            "**Arthritis (Ízületgyulladás):** Duzzadt, forró ízületek, sántaság, \"kutyaszerű ülés\".",
            "**Endocarditis:** Karfiolszerű felrakódások a szívbillentyűkön, keringési elégtelenség, hirtelen halál."
          ]
        },
        {
          header: "Kórbonctan",
          points: [
            "**Meningitis:** Vérbő agyburkok, zavaros/gennyes liquor.",
            "**Polyserositis:** Fibrines-gennyes gyulladás a mellhártyán, szívburkon (sárgás-zöldes fibrin).",
            "**Endocarditis:** Trombotikus felrakódások, melyek embolizálódhatnak (pl. veseinfarktus)."
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
          header: "Mintavétel Szabályai",
          points: [
            "Kizárólag **kezeletlen, akut tünetes** állatból!",
            "**Diagnosztikus minták:** Liquor, ízületi folyadék, parenchymás szervek (lép, máj), szívvér.",
            "**NEM diagnosztikus:** Az orr- és garatminta (mivel az egészséges állatok is hordozzák!)."
          ]
        },
        {
          header: "Laboratóriumi Módszerek",
          points: [
            "**Tenyésztés:** Véres agar, alfa-hemolízis.",
            "**Azonosítás:** MALDI-TOF MS, PCR (cps gén, virulencia gének: mrp, epf, sly).",
            "**Antibiotikum-érzékenység:** MIC meghatározás (alapvető a célzott terápiához)."
          ]
        },
        {
          header: "Differenciáldiagnózis",
          points: [
            "**Glässer-kór (G. parasuis):** Hasonló polyserositis, de Gram-negatív.",
            "**Mycoplasma hyorhinis:** Nincs idegrendszeri tünet!",
            "**Sómérgezés, Ödémabetegség:** Idegrendszeri tünetek láz nélkül."
          ]
        }
      ]
    },
    {
      title: "5. Kezelés és Rezisztencia",
      icon: "syringe",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
      sections: [
        {
          header: "Terápiás Protokoll",
          points: [
            "**Egyedi kezelés:** Injekciós antibiotikum + **Szteroid (dexametazon)** az agyödéma csökkentésére.",
            "**Csoportos kezelés (Metafilaxis):** Ivóvízben (a takarmányozás túl lassú és a beteg állat nem eszik)."
          ]
        },
        {
          header: "Antibiotikum Választás",
          points: [
            "**Első választás (Béta-laktámok):** Amoxicillin, Ampicillin (90% feletti érzékenység Magyarországon).",
            "**Ceftiofur:** 3. generációs cefalosporin, kiváló hatékonyság (HPCIA - csak indokolt esetben).",
            "**Florfenikol:** Kiváló szöveti és ízületi penetráció.",
            "**Trimetoprim-szulfonamid:** Költséghatékony ivóvízkezelés."
          ]
        },
        {
          header: "⚠️ Magas Rezisztencia (Kerülendő szerek)",
          points: [
            "**Tetraciklinek:** 80-90%-os rezisztencia (tetO, tetW gének).",
            "**Makrolidok (Tilozin, Tilmikozin) és Linkózamidok:** Szintén nagyon magas rezisztencia (ermB gén)."
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "suis_new_1",
      topic: "Streptococcus suis",
      question: "Melyik szerotípus volt a leggyakoribb a magyarországi diagnosztikai mintákban 2020-2023 között?",
      options: ["2-es szerotípus", "9-es szerotípus", "1/2-es szerotípus", "7-es szerotípus"],
      correctAnswer: 1
    },
    {
      id: "suis_new_2",
      topic: "Streptococcus suis",
      question: "Hová sorolták át a korábbi 20, 22 és 26-os S. suis szerotípusokat?",
      options: ["Streptococcus parasuis", "Streptococcus orisratti", "Glaesserella parasuis", "Streptococcus dysgalactiae"],
      correctAnswer: 0
    },
    {
      id: "suis_new_3",
      topic: "Streptococcus suis",
      question: "Mi a S. suis legfontosabb virulenciafaktora, amely gátolja a fagocitózist?",
      options: ["Suilysin (SLY)", "Tokpoliszacharid (CPS)", "Muramidáz-release protein (MRP)", "Hialuronidáz"],
      correctAnswer: 1
    },
    {
      id: "suis_new_4",
      topic: "Streptococcus suis",
      question: "Milyen kiegészítő gyógyszer adása javasolt meningitis esetén az agyödéma csökkentésére?",
      options: ["NSAID (pl. Meloxicam)", "Szteroid (pl. Dexametazon)", "Vitamin B12", "Vízhajtó"],
      correctAnswer: 1
    },
    {
      id: "suis_new_5",
      topic: "Streptococcus suis",
      question: "Melyik antibiotikum csoporttal szemben mérnek 80-90%-os rezisztenciát S. suis esetén Magyarországon?",
      options: ["Béta-laktámok", "Tetraciklinek", "Pleuromutilinek", "Fenikolok"],
      correctAnswer: 1
    },
    {
      id: "suis_new_6",
      topic: "Streptococcus suis",
      question: "Miért NEM diagnosztikai értékű az orr- vagy garatminta S. suis fertőzés esetén?",
      options: ["Mert a baktérium ott hamar elpusztul", "Mert az egészséges állatok is hordozzák a mandulákban", "Mert technikailag nehéz mintát venni", "Mert ott csak a 2-es szerotípus található meg"],
      correctAnswer: 1
    },
    {
      id: "suis_new_7",
      topic: "Streptococcus suis",
      question: "Melyik állítás igaz a Suilysinre (SLY)?",
      options: ["Egy sejtfal elem", "Pórusképző toxin, ami segíti a vér-agy gát átlépését", "Egy enzim, ami lebontja az antibiotikumokat", "A tok egyik alkotóeleme"],
      correctAnswer: 1
    },
    {
      id: "suis_new_8",
      topic: "Streptococcus suis",
      question: "Melyik szerotípus felelős elsősorban a zoonotikus megbetegedésekért emberben?",
      options: ["9-es", "2-es", "7-es", "3-as"],
      correctAnswer: 1
    },
    {
      id: "suis_new_9",
      topic: "Streptococcus suis",
      question: "Melyik kórforma jellemzője a 'kutyaszerű ülés' és a duzzadt ízületek?",
      options: ["Meningitis", "Arthritis", "Endocarditis", "Pneumonia"],
      correctAnswer: 1
    },
    {
      id: "suis_new_10",
      topic: "Streptococcus suis",
      question: "Hogyan javasolt a csoportos gyógykezelés (metafilaxis) végrehajtása heveny járvány esetén?",
      options: ["Takarmányba keverve", "Ivóvízbe keverve", "Egyedi injekciókkal minden állatnak", "Nincs szükség csoportos kezelésre"],
      correctAnswer: 1
    }
  ]
};
