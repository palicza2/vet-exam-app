export const t24_a_16s_rrns_szekvenalas_es_shotgun_metagenomikaData = {
  "id": "24_a_16s_rrns_szekvenalas_es_shotgun_metagenomika",
  "title": "24. A 16S rRNS szekvenálás és shotgun metagenomika összehasonlítása",
  "studyMaterial": [
    {
      "title": "1. Alapfogalmak és definíciók",
      "icon": "book",
      "color": "bg-indigo-50 border-indigo-200",
      "iconColor": "text-indigo-500",
      "sections": [
        {
          "header": "Általános",
          "points": [
            "16S rRNS szekvenálás",
            "A 16S rRNS gén egy olyan DNS-szakasz, amely minden baktériumban és archaeában megtalálható, és a fehérjeszintézishez nélkülözhetetlen riboszóma 30S alegységének RNS komponensét kódolja.",
            "Ez azért fontos, mert így a különböző baktériumok 16S génjei összehasonlíthatók egymással."
          ]
        },
        {
          "header": "A 16S rRNS gén kb. 1500 bázispár hosszú, és nem minden része egyformán változékony",
          "points": [
            "vannak benne állandó szakaszok,",
            "és vannak változékony részek.",
            "Az állandó részekhez olyan PCR primereket lehet tervezni, amelyek szinte minden baktériumnál működnek.",
            "A változékony részek pedig eltérnek baktériumról baktériumra, ezért ezek alapján meg lehet különböztetni őket.",
            "Ezeket a változékony részeket V1–V9 régióknak hívják.",
            "Minél hasonlóbb két baktérium 16S szekvenciája, annál közelebbi rokonok."
          ]
        },
        {
          "header": "A gyakorlatban nem az egész gént szekvenálják, hanem csak egy rövidebb, jól működő részét. Leggyakrabban",
          "points": [
            "V3–V4 régiót, vagy",
            "sak a V4 régiót vizsgálják,",
            "mert ezek:",
            "sok baktériumot lefednek,",
            "és elég információt adnak a csoportosításhoz.",
            "Shotgun metagenomika",
            "A minta teljes DNS-tartalmának véletlenszerű fragmentálását és szekvenálását jelenti.",
            "Ez a megközelítés megkerüli a PCR-alapú szelekciót, és elméletileg minden jelenlévő élőlény (baktériumok, archaeák, vírusok, gombák és mikroszkopikus eukarióták) genomjába betekintést nyújt.",
            "A könyvtárkészítés során a DNS-t fizikai (ultrahang) vagy enzimatikus úton darabolják, majd adaptereket kapcsolnak a végekre a szekvenáláshoz."
          ]
        }
      ]
    },
    {
      "title": "2. Technikai különbségek",
      "icon": "book",
      "color": "bg-indigo-50 border-indigo-200",
      "iconColor": "text-indigo-500",
      "sections": [
        {
          "header": "Általános",
          "points": [
            "Mintavétel és DNS-kivonás",
            "Alapelveiben hasonló mindkét módszernél: az alapmintából (talaj, szennyvíz, stb.) DNS-t vonnak ki. A sejtfalszerkezetekhez igazodó nukleinsav kivonó-készleteket alkalmaznak.",
            "A különbség nem itt, hanem a könyvtárkészítésnél jelentkezik.",
            "Könyvtárkészítés",
            "16S rRNS:",
            "DNS-ből először 16S-specifikus primerek segítségével PCR-rel sokszorozzák a kiválasztott 16S hipervariábilis régiót (például V3–V4 vagy V4 régiót).",
            "A PCR-termékekhez adaptereket és indexeket ligálnak, és a könyvtárat standard Illumina protokoll szerint szekvenálják."
          ]
        },
        {
          "header": "Shotgun",
          "points": [
            "teljes DNS-fragmens(eke)t véletlenszerűen fragmentálják (mechanikusan vagy enzimekkel), majd adaptereket ligálnak, így minden DNS-darabka bekerül a szekvenálandó könyvtárba.",
            "A könyvtár készítése után mindkét módszerben Illumina vagy egyéb NGS-platformon folyik a szekvenálás.",
            "Primer-torzítás",
            "16S:",
            "Az „univerzális” primerek nem minden taxont erősítenek fel egyforma hatékonysággal. Bizonyos csoportok alulreprezentáltak lehetnek, míg mások felülreprezentáltak."
          ]
        },
        {
          "header": "Shotgun",
          "points": [
            "Nincs primer → nincs primer-torzítás",
            "Gazda-DNS jelenléte",
            "16S:",
            "PCR-primerek csak bakteriális 16S génhez kötődnek,",
            "z emberi / állati / növényi DNS-nek nincs 16S génje",
            "ezért a gazda-DNS nem szaporodik fel, nem kerül be a szekvenálásba."
          ]
        },
        {
          "header": "Shotgun",
          "points": [
            "teljes DNS-állomány részeként zavarhatja a mikrobiális jel detektálását.",
            "DNS-mennyiség igény a könyvtárkészítéshez",
            "16S: nagyon kevés DNS is elég (<1 ng)",
            "Shotgun: több DNS szükséges (általában ≥1 ng/µl)"
          ]
        }
      ]
    },
    {
      "title": "3. Szekvenálási mélység, költség, idő",
      "icon": "book",
      "color": "bg-indigo-50 border-indigo-200",
      "iconColor": "text-indigo-500",
      "sections": [
        {
          "header": "Általános",
          "points": [
            "lefedettség és adatmennyiség nagyságrendekkel nagyobb: míg egy 16S-minta néhány tízezer – százezer readet igényel, shotgunnál gyakran milliós olvasatokra van szükség a teljes közösség lefedéséhez",
            "16S rRNS",
            "Gyors és olcsó",
            "Ideális nagy mintaszámhoz",
            "Shotgun",
            "Drágább",
            "Hosszabb bioinformatikai feldolgozás"
          ]
        }
      ]
    },
    {
      "title": "4. Mikrobiális diverzitás vizsgálata",
      "icon": "book",
      "color": "bg-indigo-50 border-indigo-200",
      "iconColor": "text-indigo-500",
      "sections": [
        {
          "header": "Általános",
          "points": [
            "A mikrobiális diverzitás vizsgálatára mind a 16S szekvenálás, mind a shotgun metagenomika alkalmas, azonban nem ugyanazt és nem ugyanolyan részletességgel mutatják meg.",
            "16S rRNS",
            "A 16S rRNS gén szekvenálása elsősorban arra használható, hogy összehasonlítsuk, mennyire változatosak a baktériumközösségek egy-egy mintán belül, illetve különböző minták között.",
            "Ennek segítségével meg lehet becsülni, hányféle baktérium található egy mintában, és hogy ezek mennyire egyenletesen oszlanak el.",
            "A szekvenálás során nagyszámú, egymáshoz nagyon hasonló 16S szekvencia keletkezik, ezért az adatok értelmezéséhez klaszterezésre van szükség, amelynek célja az egymáshoz hasonló szekvenciák csoportosítása.",
            "Ezt a csoportosítást OTU- vagy ASV-alapú megközelítéssel végzik.",
            "Az OTU-k hasonlósági küszöbérték alapján jönnek létre,",
            "míg az ASV-k egyedi, hibakorrigált szekvenciákat képviselnek, ezáltal nagyobb taxonómiai felbontást biztosítanak.",
            "A kialakított OTU-k vagy ASV-k szolgálnak alapul a baktériumközösségek diverzitásának számszerű jellemzéséhez és összehasonlításához.",
            "A módszer alkalmas arra is, hogy több minta baktériumösszetételét gyorsan összehasonlítsuk egymással.",
            "Ugyanakkor a 16S szekvenálás csak egyetlen gén egy rövid szakaszát vizsgálja, ezért előfordulhat, hogy ritka vagy nagyon kis mennyiségben jelen lévő baktériumfajok nem jelennek meg az eredményekben.",
            "Shotgun",
            "A shotgun metagenomika további előnye, hogy nemcsak baktériumokat, hanem más mikroorganizmusokat is képes kimutatni, például vírusokat és eukarióta mikrobákat, mint a gombák vagy egysejtű élőlények.",
            "Ezek az élőlénycsoportok a 16S szekvenálással egyáltalán nem láthatók. Ezért különösen összetett környezetekben, például talajban vagy vízi ökoszisztémákban, a shotgun módszer teljesebb képet ad a mikrobiális közösségről.",
            "A két módszer tehát nem egymás helyettesítői, hanem különböző kérdések megválaszolására alkalmasak: a 16S a baktérium-diverzitásra fókuszál, míg a shotgun a teljes mikrobiális változatosság feltárására."
          ]
        }
      ]
    },
    {
      "title": "5. Taxonómiai felbontás",
      "icon": "book",
      "color": "bg-indigo-50 border-indigo-200",
      "iconColor": "text-indigo-500",
      "sections": [
        {
          "header": "Általános",
          "points": [
            "16S rRNS",
            "A 16S szekvenálás révén kapott adatokból a baktériumközösség taxonómiai összetétele állapítható meg.",
            "Általában a család- vagy nemzetségszintű azonosítás megbízható, fajszint elérés csak ideális esetben vagy specifikus törzseknél lehetséges.",
            "Például hasonló 16S-szekvenciájú fajokat nem mindig lehet különválasztani.",
            "Bizonyos közeli rokon nemzetségek, mint például az Escherichia és a Shigella, 16S szekvenciái csaknem azonosak, így ezek elkülönítése ezzel a módszerrel lehetetlen.",
            "Shotgun",
            "Faj- és törzsszintű azonosítás"
          ]
        }
      ]
    },
    {
      "title": "6. Funkcionális információ",
      "icon": "book",
      "color": "bg-indigo-50 border-indigo-200",
      "iconColor": "text-indigo-500",
      "sections": [
        {
          "header": "Általános",
          "points": [
            "16S rRNS",
            "Nincs közvetlen funkcionális információ",
            "Mivel csak a 16S rRNS génre korlátozódik, ezzel önmagában nem határozható meg a közösség anyagcsere-potenciálja vagy a benne lévő gének funkciója.",
            "Nem alkalmas gének kimutatására",
            "Shotgun"
          ]
        },
        {
          "header": "Közvetlenül kimutat",
          "points": [
            "ktériumok anyagcsere útvonalait",
            "virulenciagéneket",
            "rezisztenciagéneket (ARG-k)"
          ]
        }
      ]
    },
    {
      "title": "7. Antibiotikum-rezisztencia gének (ARG) vizsgálata",
      "icon": "book",
      "color": "bg-indigo-50 border-indigo-200",
      "iconColor": "text-indigo-500",
      "sections": [
        {
          "header": "Általános",
          "points": [
            "16S rRNS",
            "ARG-k nem mutathatók ki",
            "Csak közvetett következtetés lehetséges: például ismert rezisztenciát hordozó nemzetségek jelen vannak-e",
            "Shotgun",
            "ARG-k közvetlen detektálása"
          ]
        },
        {
          "header": "Mobilis genetikai elemek",
          "points": [
            "plazmidok",
            "transzpozonok",
            "integronok",
            "ARG-adatbázisokkal összevethető (CARD, ResFinder)",
            "Összefoglaló vizsgamondat",
            "A 16S rRNS szekvenálás költséghatékony módszer a bakteriális közösségek taxonómiai jellemzésére, míg a shotgun metagenomika átfogó képet ad a mikrobiális diverzitásról és funkcionális potenciálról, különösen az antimikrobiális rezisztenciagének és mobilis genetikai elemek vizsgálatában."
          ]
        }
      ]
    }
  ],
  "questions": [
    {
      "id": "q_24_1",
      "topic": "24_a_16s_rrns_szekvenalas_es_shotgun_metagenomika",
      "type": "bool",
      "question": "Igaz-e az állítás: Ez azért fontos, mert így a különböző baktériumok 16S génjei összehasonlíthatók egymással.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "Ez azért fontos, mert így a különböző baktériumok 16S génjei összehasonlíthatók egymással."
    },
    {
      "id": "q_24_2",
      "topic": "24_a_16s_rrns_szekvenalas_es_shotgun_metagenomika",
      "type": "bool",
      "question": "Igaz-e az állítás: A különbség nem itt, hanem a könyvtárkészítésnél jelentkezik.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A különbség nem itt, hanem a könyvtárkészítésnél jelentkezik."
    },
    {
      "id": "q_24_3",
      "topic": "24_a_16s_rrns_szekvenalas_es_shotgun_metagenomika",
      "type": "bool",
      "question": "Igaz-e az állítás: Az „univerzális” primerek nem minden taxont erősítenek fel egyforma hatékonysággal. Bizonyos csoportok alulreprezentáltak lehetnek, míg mások felülreprezentáltak.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "Az „univerzális” primerek nem minden taxont erősítenek fel egyforma hatékonysággal. Bizonyos csoportok alulreprezentáltak lehetnek, míg mások felülreprezentáltak."
    },
    {
      "id": "q_24_4",
      "topic": "24_a_16s_rrns_szekvenalas_es_shotgun_metagenomika",
      "type": "bool",
      "question": "Igaz-e az állítás: PCR-primerek csak bakteriális 16S génhez kötődnek,",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "PCR-primerek csak bakteriális 16S génhez kötődnek,"
    },
    {
      "id": "q_24_5",
      "topic": "24_a_16s_rrns_szekvenalas_es_shotgun_metagenomika",
      "type": "bool",
      "question": "Igaz-e az állítás: ezért a gazda-DNS nem szaporodik fel, nem kerül be a szekvenálásba.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "ezért a gazda-DNS nem szaporodik fel, nem kerül be a szekvenálásba."
    },
    {
      "id": "q_24_6",
      "topic": "24_a_16s_rrns_szekvenalas_es_shotgun_metagenomika",
      "type": "bool",
      "question": "Igaz-e az állítás: A mikrobiális diverzitás vizsgálatára mind a 16S szekvenálás, mind a shotgun metagenomika alkalmas, azonban nem ugyanazt és nem ugyanolyan részletességgel mutatják meg.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A mikrobiális diverzitás vizsgálatára mind a 16S szekvenálás, mind a shotgun metagenomika alkalmas, azonban nem ugyanazt és nem ugyanolyan részletességgel mutatják meg."
    },
    {
      "id": "q_24_7",
      "topic": "24_a_16s_rrns_szekvenalas_es_shotgun_metagenomika",
      "type": "bool",
      "question": "Igaz-e az állítás: Ugyanakkor a 16S szekvenálás csak egyetlen gén egy rövid szakaszát vizsgálja, ezért előfordulhat, hogy ritka vagy nagyon kis mennyiségben jelen lévő baktériumfajok nem jelennek meg az eredményekben.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "Ugyanakkor a 16S szekvenálás csak egyetlen gén egy rövid szakaszát vizsgálja, ezért előfordulhat, hogy ritka vagy nagyon kis mennyiségben jelen lévő baktériumfajok nem jelennek meg az eredményekben."
    },
    {
      "id": "q_24_8",
      "topic": "24_a_16s_rrns_szekvenalas_es_shotgun_metagenomika",
      "type": "bool",
      "question": "Igaz-e az állítás: A shotgun metagenomika további előnye, hogy nemcsak baktériumokat, hanem más mikroorganizmusokat is képes kimutatni, például vírusokat és eukarióta mikrobákat, mint a gombák vagy egysejtű élőlények.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A shotgun metagenomika további előnye, hogy nemcsak baktériumokat, hanem más mikroorganizmusokat is képes kimutatni, például vírusokat és eukarióta mikrobákat, mint a gombák vagy egysejtű élőlények."
    },
    {
      "id": "q_24_9",
      "topic": "24_a_16s_rrns_szekvenalas_es_shotgun_metagenomika",
      "type": "bool",
      "question": "Igaz-e az állítás: Ezek az élőlénycsoportok a 16S szekvenálással egyáltalán nem láthatók. Ezért különösen összetett környezetekben, például talajban vagy vízi ökoszisztémákban, a shotgun módszer teljesebb képet ad a mikrobiális közösségről.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "Ezek az élőlénycsoportok a 16S szekvenálással egyáltalán nem láthatók. Ezért különösen összetett környezetekben, például talajban vagy vízi ökoszisztémákban, a shotgun módszer teljesebb képet ad a mikrobiális közösségről."
    },
    {
      "id": "q_24_10",
      "topic": "24_a_16s_rrns_szekvenalas_es_shotgun_metagenomika",
      "type": "bool",
      "question": "Igaz-e az állítás: A két módszer tehát nem egymás helyettesítői, hanem különböző kérdések megválaszolására alkalmasak: a 16S a baktérium-diverzitásra fókuszál, míg a shotgun a teljes mikrobiális változatosság feltárására.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A két módszer tehát nem egymás helyettesítői, hanem különböző kérdések megválaszolására alkalmasak: a 16S a baktérium-diverzitásra fókuszál, míg a shotgun a teljes mikrobiális változatosság feltárására."
    },
    {
      "id": "q_24_11",
      "topic": "24_a_16s_rrns_szekvenalas_es_shotgun_metagenomika",
      "type": "bool",
      "question": "Igaz-e az állítás: Általában a család- vagy nemzetségszintű azonosítás megbízható, fajszint elérés csak ideális esetben vagy specifikus törzseknél lehetséges.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "Általában a család- vagy nemzetségszintű azonosítás megbízható, fajszint elérés csak ideális esetben vagy specifikus törzseknél lehetséges."
    },
    {
      "id": "q_24_12",
      "topic": "24_a_16s_rrns_szekvenalas_es_shotgun_metagenomika",
      "type": "bool",
      "question": "Igaz-e az állítás: Például hasonló 16S-szekvenciájú fajokat nem mindig lehet különválasztani.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "Például hasonló 16S-szekvenciájú fajokat nem mindig lehet különválasztani."
    },
    {
      "id": "q_24_13",
      "topic": "24_a_16s_rrns_szekvenalas_es_shotgun_metagenomika",
      "type": "bool",
      "question": "Igaz-e az állítás: Bizonyos közeli rokon nemzetségek, mint például az Escherichia és a Shigella, 16S szekvenciái csaknem azonosak, így ezek elkülönítése ezzel a módszerrel lehetetlen.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "Bizonyos közeli rokon nemzetségek, mint például az Escherichia és a Shigella, 16S szekvenciái csaknem azonosak, így ezek elkülönítése ezzel a módszerrel lehetetlen."
    },
    {
      "id": "q_24_14",
      "topic": "24_a_16s_rrns_szekvenalas_es_shotgun_metagenomika",
      "type": "bool",
      "question": "Igaz-e az állítás: Mivel csak a 16S rRNS génre korlátozódik, ezzel önmagában nem határozható meg a közösség anyagcsere-potenciálja vagy a benne lévő gének funkciója.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "Mivel csak a 16S rRNS génre korlátozódik, ezzel önmagában nem határozható meg a közösség anyagcsere-potenciálja vagy a benne lévő gének funkciója."
    },
    {
      "id": "q_24_15",
      "topic": "24_a_16s_rrns_szekvenalas_es_shotgun_metagenomika",
      "type": "bool",
      "question": "Igaz-e az állítás: Nem alkalmas gének kimutatására",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "Nem alkalmas gének kimutatására"
    },
    {
      "id": "q_24_16",
      "topic": "24_a_16s_rrns_szekvenalas_es_shotgun_metagenomika",
      "type": "bool",
      "question": "Igaz-e az állítás: ARG-k nem mutathatók ki",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "ARG-k nem mutathatók ki"
    },
    {
      "id": "q_24_17",
      "topic": "24_a_16s_rrns_szekvenalas_es_shotgun_metagenomika",
      "type": "bool",
      "question": "Igaz-e az állítás: Csak közvetett következtetés lehetséges: például ismert rezisztenciát hordozó nemzetségek jelen vannak-e",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "Csak közvetett következtetés lehetséges: például ismert rezisztenciát hordozó nemzetségek jelen vannak-e"
    }
  ]
};