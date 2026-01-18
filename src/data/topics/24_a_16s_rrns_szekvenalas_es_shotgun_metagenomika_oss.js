export const a16srrnsszekvenalasesshotgunmetagenomikaossData = {
  "id": "a_16s_rrns_szekvenalas_es_shotgun_metagenomika_oss",
  "title": "A 16S rRNS szekvenálás és shotgun metagenomika összehasonlítása",
  "studyMaterial": [
    {
      "title": "A 16S rRNS szekvenálás és shotgun metagenomika összehasonlítása",
      "icon": "book",
      "color": "bg-blue-50 border-blue-200",
      "iconColor": "text-blue-500",
      "sections": [
        {
          "header": "Általános",
          "points": [
            "A mikrobiológia a 21. században paradigmaváltáson ment keresztül: a klasszikus, Pasteur-i tenyésztéses eljárásokról a molekuláris, DNS-alapú technikák felé tolódott a hangsúly.",
            "Ez a váltás lehetővé tette a nem tenyészthető mikroorganizmusok vizsgálatát, amelyek a humán és környezeti mikrobiom jelentős részét alkotják.",
            "Ezen vizsgálatok két domináns technológiája a célzott amplikon szekvenálás (16S) és a teljes metagenom szekvenálás (Shotgun)."
          ]
        }
      ]
    },
    {
      "title": "Alapfogalmak és definíciók",
      "icon": "book",
      "color": "bg-blue-50 border-blue-200",
      "iconColor": "text-blue-500",
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
            "a V3–V4 régiót, vagy",
            "csak a V4 régiót vizsgálják,",
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
      "title": "Technikai különbségek",
      "icon": "book",
      "color": "bg-blue-50 border-blue-200",
      "iconColor": "text-blue-500",
      "sections": [
        {
          "header": "Általános",
          "points": [
            "Mintavétel és DNS-kivonás",
            "Alapelveiben hasonló mindkét módszernél: az alapmintából (talaj, szennyvíz, stb.) DNS-t vonnak ki. A sejtfalszerkezetekhez igazodó nukleinsav kivonó-készleteket alkalmaznak.",
            "A különbség nem itt, hanem a könyvtárkészítésnél jelentkezik.",
            "Könyvtárkészítés",
            "16S rRNS:",
            "a DNS-ből először 16S-specifikus primerek segítségével PCR-rel sokszorozzák a kiválasztott 16S hipervariábilis régiót (például V3–V4 vagy V4 régiót).",
            "A PCR-termékekhez adaptereket és indexeket ligálnak, és a könyvtárat standard Illumina protokoll szerint szekvenálják."
          ]
        },
        {
          "header": "Shotgun",
          "points": [
            "a teljes DNS-fragmens(eke)t véletlenszerűen fragmentálják (mechanikusan vagy enzimekkel), majd adaptereket ligálnak, így minden DNS-darabka bekerül a szekvenálandó könyvtárba.",
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
            "a PCR-primerek csak bakteriális 16S génhez kötődnek,",
            "az emberi / állati / növényi DNS-nek nincs 16S génje",
            "ezért a gazda-DNS nem szaporodik fel, nem kerül be a szekvenálásba."
          ]
        },
        {
          "header": "Shotgun",
          "points": [
            "a teljes DNS-állomány részeként zavarhatja a mikrobiális jel detektálását.",
            "DNS-mennyiség igény a könyvtárkészítéshez",
            "16S: nagyon kevés DNS is elég (<1 ng)",
            "Shotgun: több DNS szükséges (általában ≥1 ng/µl)"
          ]
        }
      ]
    },
    {
      "title": "Szekvenálási mélység, költség, idő",
      "icon": "book",
      "color": "bg-blue-50 border-blue-200",
      "iconColor": "text-blue-500",
      "sections": [
        {
          "header": "Általános",
          "points": [
            "a lefedettség és adatmennyiség nagyságrendekkel nagyobb: míg egy 16S-minta néhány tízezer – százezer readet igényel, shotgunnál gyakran milliós olvasatokra van szükség a teljes közösség lefedéséhez",
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
      "title": "Mikrobiális diverzitás vizsgálata",
      "icon": "book",
      "color": "bg-blue-50 border-blue-200",
      "iconColor": "text-blue-500",
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
      "title": "Taxonómiai felbontás",
      "icon": "book",
      "color": "bg-blue-50 border-blue-200",
      "iconColor": "text-blue-500",
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
      "title": "Funkcionális információ",
      "icon": "book",
      "color": "bg-blue-50 border-blue-200",
      "iconColor": "text-blue-500",
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
            "baktériumok anyagcsere útvonalait",
            "virulenciagéneket",
            "rezisztenciagéneket (ARG-k)"
          ]
        }
      ]
    },
    {
      "title": "Antibiotikum-rezisztencia gének (ARG) vizsgálata",
      "icon": "book",
      "color": "bg-blue-50 border-blue-200",
      "iconColor": "text-blue-500",
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
      "id": "a_16s_rrns_szekvenalas_es_shotgun_metagenomika_oss_0",
      "topic": "A 16S rRNS szekvenálás és shotgun metagenomika összehasonlítása",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'Ez a váltás lehetővé tette a nem tenyészthető mikroorganizmusok vizsgálatát, amelyek a humán és környezeti mikrobiom jelentős részét alkotják.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "a_16s_rrns_szekvenalas_es_shotgun_metagenomika_oss_1",
      "topic": "A 16S rRNS szekvenálás és shotgun metagenomika összehasonlítása",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'Ezen vizsgálatok két domináns technológiája a célzott amplikon szekvenálás (16S) és a teljes metagenom szekvenálás (Shotgun).'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "a_16s_rrns_szekvenalas_es_shotgun_metagenomika_oss_2",
      "topic": "A 16S rRNS szekvenálás és shotgun metagenomika összehasonlítása",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'Ez azért fontos, mert így a különböző baktériumok 16S génjei összehasonlíthatók egymással.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "a_16s_rrns_szekvenalas_es_shotgun_metagenomika_oss_3",
      "topic": "A 16S rRNS szekvenálás és shotgun metagenomika összehasonlítása",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'vannak benne állandó szakaszok,'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "a_16s_rrns_szekvenalas_es_shotgun_metagenomika_oss_4",
      "topic": "A 16S rRNS szekvenálás és shotgun metagenomika összehasonlítása",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'és vannak változékony részek.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "a_16s_rrns_szekvenalas_es_shotgun_metagenomika_oss_5",
      "topic": "A 16S rRNS szekvenálás és shotgun metagenomika összehasonlítása",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'Az állandó részekhez olyan PCR primereket lehet tervezni, amelyek szinte minden baktériumnál működnek.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "a_16s_rrns_szekvenalas_es_shotgun_metagenomika_oss_6",
      "topic": "A 16S rRNS szekvenálás és shotgun metagenomika összehasonlítása",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'A változékony részek pedig eltérnek baktériumról baktériumra, ezért ezek alapján meg lehet különböztetni őket.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "a_16s_rrns_szekvenalas_es_shotgun_metagenomika_oss_7",
      "topic": "A 16S rRNS szekvenálás és shotgun metagenomika összehasonlítása",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'Ezeket a változékony részeket V1–V9 régióknak hívják.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "a_16s_rrns_szekvenalas_es_shotgun_metagenomika_oss_8",
      "topic": "A 16S rRNS szekvenálás és shotgun metagenomika összehasonlítása",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'Minél hasonlóbb két baktérium 16S szekvenciája, annál közelebbi rokonok.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "a_16s_rrns_szekvenalas_es_shotgun_metagenomika_oss_9",
      "topic": "A 16S rRNS szekvenálás és shotgun metagenomika összehasonlítása",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'csak a V4 régiót vizsgálják,'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "a_16s_rrns_szekvenalas_es_shotgun_metagenomika_oss_10",
      "topic": "A 16S rRNS szekvenálás és shotgun metagenomika összehasonlítása",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'sok baktériumot lefednek,'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "a_16s_rrns_szekvenalas_es_shotgun_metagenomika_oss_11",
      "topic": "A 16S rRNS szekvenálás és shotgun metagenomika összehasonlítása",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'és elég információt adnak a csoportosításhoz.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "a_16s_rrns_szekvenalas_es_shotgun_metagenomika_oss_12",
      "topic": "A 16S rRNS szekvenálás és shotgun metagenomika összehasonlítása",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'A minta teljes DNS-tartalmának véletlenszerű fragmentálását és szekvenálását jelenti.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "a_16s_rrns_szekvenalas_es_shotgun_metagenomika_oss_13",
      "topic": "A 16S rRNS szekvenálás és shotgun metagenomika összehasonlítása",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'A könyvtárkészítés során a DNS-t fizikai (ultrahang) vagy enzimatikus úton darabolják, majd adaptereket kapcsolnak a végekre a szekvenáláshoz.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "a_16s_rrns_szekvenalas_es_shotgun_metagenomika_oss_14",
      "topic": "A 16S rRNS szekvenálás és shotgun metagenomika összehasonlítása",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'Mintavétel és DNS-kivonás'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "a_16s_rrns_szekvenalas_es_shotgun_metagenomika_oss_15",
      "topic": "A 16S rRNS szekvenálás és shotgun metagenomika összehasonlítása",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'A különbség nem itt, hanem a könyvtárkészítésnél jelentkezik.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "a_16s_rrns_szekvenalas_es_shotgun_metagenomika_oss_16",
      "topic": "A 16S rRNS szekvenálás és shotgun metagenomika összehasonlítása",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'a DNS-ből először 16S-specifikus primerek segítségével PCR-rel sokszorozzák a kiválasztott 16S hipervariábilis régiót (például V3–V4 vagy V4 régiót).'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "a_16s_rrns_szekvenalas_es_shotgun_metagenomika_oss_17",
      "topic": "A 16S rRNS szekvenálás és shotgun metagenomika összehasonlítása",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'A PCR-termékekhez adaptereket és indexeket ligálnak, és a könyvtárat standard Illumina protokoll szerint szekvenálják.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "a_16s_rrns_szekvenalas_es_shotgun_metagenomika_oss_18",
      "topic": "A 16S rRNS szekvenálás és shotgun metagenomika összehasonlítása",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'A könyvtár készítése után mindkét módszerben Illumina vagy egyéb NGS-platformon folyik a szekvenálás.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "a_16s_rrns_szekvenalas_es_shotgun_metagenomika_oss_19",
      "topic": "A 16S rRNS szekvenálás és shotgun metagenomika összehasonlítása",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'Nincs primer → nincs primer-torzítás'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    }
  ]
};