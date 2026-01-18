export const horizontalisgentranszfervizsgalatametagenomikaiData = {
  "id": "horizontalis_gentranszfer_vizsgalata_metagenomikai",
  "title": "Horizontális géntranszfer vizsgálata metagenomikai megközelítéssel",
  "studyMaterial": [
    {
      "title": "Horizontális géntranszfer vizsgálata metagenomikai megközelítéssel",
      "icon": "book",
      "color": "bg-blue-50 border-blue-200",
      "iconColor": "text-blue-500",
      "sections": [
        {
          "header": "A horizontális géntranszfer",
          "points": [
            "azt a folyamatot jelenti, amikor egy gén reprodukció nélkül, egyik baktériumból a másikba jut át és beépül a befogadó genomjába.",
            "A rezisztenciagének gyors és széleskörű elterjedésének fő oka éppen ez a HGT-vezérelt géncsere."
          ]
        },
        {
          "header": "Mobilis genetikai elemek",
          "points": [
            "plazmidok, transzpozonok, integronok stb. közvetítik az ARG-ek átadását, és így hirtelen multirezisztens baktériumtörzsek megjelenését eredményezhetik."
          ]
        },
        {
          "header": "Pl. az antibiotikum-rezisztencia elterjedtsége jelentős mértékben függ össze az ARG-ek plazmidok általi horizontális terjedésével",
          "points": [
            "a klinikai kórokozók rezisztenciájához vezető gének nagy része környezeti vagy állati eredetű baktériumplazmidokról került be.",
            "Különösen kritikusak a többféle rezisztenciagént egyszerre hordozó plazmidok, amelyek átadása azonnal multirezisztenssé teheti a befogadó sejtet.",
            "A kutatások szerint a rezisztenciagének gyors proliferációjában a HGT játszik fő szerepet, és a környezet (talaj, vizek, microbiomok) kulcsfontosságú terep a génátadásoknak.",
            "Plazmidok: Önállóan replikálódó DNS-molekulák, amelyek gyakran több antibiotikum-rezisztencia gént hordoznak, és konjugáció révén hatékonyan terjesztik a multirezisztenciát baktériumok között.",
            "Transzpozonok és inserciós szekvenciák (IS): Saját transzpozáz enzimmel rendelkező mobil DNS-elemek, amelyek a genomon belül vagy plazmid és kromoszóma között mozogva rezisztenciagéneket képesek áthelyezni.",
            "Integronok: Génkazetták befogadására specializálódott genetikai elemek, amelyek önmagukban nem mobilisak, de plazmidokra vagy transzpozonokra kapcsolódva hatékonyan gyűjtik és terjesztik az antibiotikum-rezisztencia géneket.",
            "Genomszigetek (genomic islands, GI): A kromoszómába beépült, nagyobb DNS-szakaszok, amelyek gyakran idegen eredetű géneket – például rezisztencia- vagy virulenciagéneket – hordoznak, és a baktérium alkalmazkodását segítik.",
            "ICE/IME elemek (integratív konjugációs és integratív mobilizálható elemek): A baktérium kromoszómájába integrálódó, de konjugációval átvihető genetikai elemek, amelyek saját vagy segített mobilitás révén rezisztenciagéneket terjeszthetnek.",
            "Bakteriofágok: Baktériumokat fertőző vírusok, amelyek a gazdasejt DNS-ébe beépülve vagy csomagolási hibák révén képesek géneket – köztük antibiotikum-rezisztencia géneket – egyik baktériumból a másikba átjuttatni.",
            "HGT kimutatásának kihívásai metagenomikus kontextusban",
            "Rövid- és hosszú olvasatú szekvenálás a HGT szempontjából",
            "Amikor horizontális géntranszfert szeretnénk kimutatni metagenomikai adatokból, az egyik legfontosabb kérdés az, hogy milyen hosszú DNS-darabokat tudunk leolvasni a szekvenálás során.",
            "Ez alapvetően meghatározza, hogy mennyire tudjuk összekötni az antibiotikum-rezisztencia géneket azokkal a genetikai elemekkel vagy baktériumokkal, amelyek hordozzák őket.",
            "Rövid olvasatú szekvenálás (pl. Illumina) – miért korlátozott?"
          ]
        },
        {
          "header": "A rövid olvasatú szekvenálás során a DNS-t nagyon sok, rövid darabra bontják (tipikusan 100–300 bázispár hosszúak), és ezeket olvassák be. Ennek nagy előnye, hogy",
          "points": [
            "a leolvasások nagyon pontosak,",
            "olcsón lehet velük nagy mennyiségű adatot előállítani,",
            "és magas lefedettséget kapunk, vagyis ugyanazt a régiót sokszor látjuk."
          ]
        },
        {
          "header": "A probléma ott kezdődik, hogy a mobil genetikai elemek, mint a plazmidok vagy integronok, gyakran",
          "points": [
            "ismétlődő szekvenciákat tartalmaznak,",
            "mozaikos felépítésűek,",
            "és nagyon hasonló részekből állnak."
          ]
        },
        {
          "header": "Ezeket a rövid DNS-darabkákból nehéz helyesen összerakni, mert a bioinformatikai program nem tudja eldönteni, hogy az ismétlődő szakaszok hova tartoznak. Emiatt",
          "points": [
            "a plazmidok, integronok, génszigetek gyakran szétesnek sok apró contigra."
          ]
        },
        {
          "header": "Ennek következménye az, hogy",
          "points": [
            "ugyan megtaláljuk az ARG-t,",
            "de nem látjuk mellette a teljes környezetét,",
            "nem tudjuk biztosan megmondani, hogy:",
            "plazmidon van-e,",
            "integronban van-e,",
            "vagy melyik baktérium hordozza.",
            "Ezért rövid olvasatokkal a HGT-re inkább csak következtetni tudunk, de ritkán tudjuk egyértelműen bizonyítani.",
            "Hosszú olvasatú szekvenálás (pl. PacBio, Oxford Nanopore) – miért segít?"
          ]
        },
        {
          "header": "A hosszú olvasatú szekvenálás ezzel szemben nagyon hosszú DNS-darabokat olvas be, akár több tíz vagy több mint száz kilobázis hosszban. Ez azt jelenti, hogy",
          "points": [
            "egyetlen olvasat átfoghat:",
            "egy teljes plazmidot,",
            "egy integront az összes génkazettájával,",
            "vagy akár egy teljes fággenomot."
          ]
        },
        {
          "header": "Ez óriási előny a HGT vizsgálatában, mert",
          "points": [
            "az ARG egyben látható a környezetével,",
            "megmondható, hogy:",
            "milyen mobil elemhez kapcsolódik,",
            "milyen más gének vannak mellette,",
            "milyen szerkezetben helyezkedik el."
          ]
        },
        {
          "header": "Ennek köszönhetően",
          "points": [
            "sokkal folytonosabb összeállítások készülnek,",
            "olyan változékony régiók is megjelennek, amelyeket rövid olvasatokkal gyakran elveszítünk,",
            "új, korábban nem ismert plazmidok és vírusok is kimutathatók."
          ]
        },
        {
          "header": "A hátrány viszont az, hogy",
          "points": [
            "a hosszú olvasatok pontatlanabbak lehetnek (több hiba),",
            "általában kevesebb adat készül belőlük,",
            "drágábbak,",
            "és több, jó minőségű DNS-t igényelnek.",
            "Miért használják gyakran együtt a kettőt?"
          ]
        },
        {
          "header": "A gyakorlatban ezért sok kutatásban hibrid megközelítést alkalmaznak",
          "points": [
            "a rövid olvasatok adják a pontosságot,",
            "a hosszú olvasatok adják a szerkezeti információt."
          ]
        },
        {
          "header": "Így",
          "points": [
            "a hosszú olvasatok megmutatják az ARG-k genetikai környezetét,",
            "a rövid olvasatok „kijavítják” a hibákat.",
            "Bioinformatikai eszközök a mobil elemek és az ARG-k HGT-kapcsolatának vizsgálatára",
            "Az IntegronFinder kifejezetten az integronok azonosítására szolgál.",
            "A program a metagenomikus contigeken megkeresi az integráz enzimet kódoló gént és a génkazetták beépüléséhez szükséges rekombinációs helyeket.",
            "Ennek segítségével megállapítható, hogy egy adott rezisztenciagén integronhoz kapcsolódik-e, ami fontos jelzés a mobilitás szempontjából.",
            "A PlasFlow azt becsüli meg, hogy egy adott DNS-szakasz plazmidról vagy a baktérium kromoszómájáról származik-e.",
            "Ez különösen hasznos metagenomikai mintákban, ahol a plazmidok gyakran csak részlegesen állnak össze.",
            "A módszer lehetővé teszi a plazmid eredetű szekvenciák elkülönítését, ami segít az ARG-k mobil hordozóinak azonosításában.",
            "A MOB-suite egy összetettebb eszközkészlet, amely a plazmidok részletesebb vizsgálatára alkalmas.",
            "Segítségével nemcsak azonosíthatók a plazmidok, hanem az is megállapítható, hogy milyen típusba tartoznak, például milyen replikációs vagy mobilitási csoport jellemzi őket.",
            "Ez fontos információt ad a plazmidok HGT-potenciáljának megítéléséhez.",
            "Egy általánosabb megközelítés a metagenomikus binning, amely során a metagenomikus contigeket feltételezett genomokba rendezik, úgynevezett metagenom-összeállított genomokká (MAG-ok).",
            "Ennek segítségével közelítőleg rekonstruálhatók a mintában jelen lévő baktériumok genomjai, és így összekapcsolhatók az ARG-k és egyes mobil elemek a lehetséges gazdabaktériumokkal.",
            "Bár a plazmidok gyakran nem kerülnek egyértelműen egyetlen binbe, a módszer mégis segít a rezisztenciagének gazdaszervezethez kötésében.",
            "Ezen túlmenően léteznek speciális HGT-felismerő módszerek is, amelyek a szekvenciák összetétele vagy mintázatai alapján próbálják meg azonosítani a génátviteli eseményeket.",
            "A hosszú olvasatos metagenomika szerepe",
            "A hosszú olvasatok segítségével nagy, összefüggő DNS-szakaszok válhatnak láthatóvá."
          ]
        },
        {
          "header": "Ez különösen fontos akkor, amikor azt szeretnénk megérteni, hogy egy antibiotikum-rezisztencia gén pontosan milyen genetikai környezetben helyezkedik el. A hosszú olvasatok képesek egyetlen darabban lefedni",
          "points": [
            "teljes plazmidokat,",
            "integronokat az összes génkazettájukkal,",
            "transzpozonokat és azok határait,",
            "valamint a szabályozó régiókat (például promótereket)."
          ]
        },
        {
          "header": "Ennek köszönhetően nemcsak azt látjuk, hogy egy rezisztenciagén jelen van, hanem azt is, hogy",
          "points": [
            "melyik mobil genetikai elem része,",
            "milyen más gének találhatók mellette,",
            "és hogy kromoszómán vagy plazmidon helyezkedik el.",
            "A hosszú olvasatok egyik legnagyobb előnye, hogy olyan összefüggéseket is feltárnak, amelyek rövid olvasatokkal rejtve maradnak.",
            "Például előfordulhat, hogy egy rezisztenciagén közvetlen közelében konjugációhoz szükséges gének találhatók.",
            "Ha ezek egyetlen hosszú contigra kerülnek, az erős bizonyítéka annak, hogy az adott ARG plazmidon keresztül, horizontális géntranszferrel terjedhet.",
            "Rövid olvasatok esetén ezek a gének gyakran külön contigokon jelennek meg, így a kapcsolatuk nem egyértelmű.",
            "Összességében a hosszú olvasatos metagenomika lehetővé teszi a mobil genetikai elemek és a hozzájuk kapcsolódó génkörnyezetek részletes, szerkezeti szintű rekonstruálását. Ez kulcsfontosságú a horizontális géntranszfer megértésében, mert nemcsak a rezisztenciagének jelenlétét mutatja meg, hanem azok terjedési mechanizmusait és genetikai hátterét is."
          ]
        }
      ]
    }
  ],
  "questions": [
    {
      "id": "horizontalis_gentranszfer_vizsgalata_metagenomikai_0",
      "topic": "Horizontális géntranszfer vizsgálata metagenomikai megközelítéssel",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'azt a folyamatot jelenti, amikor egy gén reprodukció nélkül, egyik baktériumból a másikba jut át és beépül a befogadó genomjába.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "horizontalis_gentranszfer_vizsgalata_metagenomikai_1",
      "topic": "Horizontális géntranszfer vizsgálata metagenomikai megközelítéssel",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'A rezisztenciagének gyors és széleskörű elterjedésének fő oka éppen ez a HGT-vezérelt géncsere.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "horizontalis_gentranszfer_vizsgalata_metagenomikai_2",
      "topic": "Horizontális géntranszfer vizsgálata metagenomikai megközelítéssel",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'a klinikai kórokozók rezisztenciájához vezető gének nagy része környezeti vagy állati eredetű baktériumplazmidokról került be.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "horizontalis_gentranszfer_vizsgalata_metagenomikai_3",
      "topic": "Horizontális géntranszfer vizsgálata metagenomikai megközelítéssel",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'Különösen kritikusak a többféle rezisztenciagént egyszerre hordozó plazmidok, amelyek átadása azonnal multirezisztenssé teheti a befogadó sejtet.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "horizontalis_gentranszfer_vizsgalata_metagenomikai_4",
      "topic": "Horizontális géntranszfer vizsgálata metagenomikai megközelítéssel",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'HGT kimutatásának kihívásai metagenomikus kontextusban'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "horizontalis_gentranszfer_vizsgalata_metagenomikai_5",
      "topic": "Horizontális géntranszfer vizsgálata metagenomikai megközelítéssel",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'Rövid- és hosszú olvasatú szekvenálás a HGT szempontjából'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "horizontalis_gentranszfer_vizsgalata_metagenomikai_6",
      "topic": "Horizontális géntranszfer vizsgálata metagenomikai megközelítéssel",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'a leolvasások nagyon pontosak,'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "horizontalis_gentranszfer_vizsgalata_metagenomikai_7",
      "topic": "Horizontális géntranszfer vizsgálata metagenomikai megközelítéssel",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'olcsón lehet velük nagy mennyiségű adatot előállítani,'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "horizontalis_gentranszfer_vizsgalata_metagenomikai_8",
      "topic": "Horizontális géntranszfer vizsgálata metagenomikai megközelítéssel",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'és magas lefedettséget kapunk, vagyis ugyanazt a régiót sokszor látjuk.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "horizontalis_gentranszfer_vizsgalata_metagenomikai_9",
      "topic": "Horizontális géntranszfer vizsgálata metagenomikai megközelítéssel",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'ismétlődő szekvenciákat tartalmaznak,'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "horizontalis_gentranszfer_vizsgalata_metagenomikai_10",
      "topic": "Horizontális géntranszfer vizsgálata metagenomikai megközelítéssel",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'mozaikos felépítésűek,'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "horizontalis_gentranszfer_vizsgalata_metagenomikai_11",
      "topic": "Horizontális géntranszfer vizsgálata metagenomikai megközelítéssel",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'és nagyon hasonló részekből állnak.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "horizontalis_gentranszfer_vizsgalata_metagenomikai_12",
      "topic": "Horizontális géntranszfer vizsgálata metagenomikai megközelítéssel",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'a plazmidok, integronok, génszigetek gyakran szétesnek sok apró contigra.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "horizontalis_gentranszfer_vizsgalata_metagenomikai_13",
      "topic": "Horizontális géntranszfer vizsgálata metagenomikai megközelítéssel",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'ugyan megtaláljuk az ARG-t,'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "horizontalis_gentranszfer_vizsgalata_metagenomikai_14",
      "topic": "Horizontális géntranszfer vizsgálata metagenomikai megközelítéssel",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'de nem látjuk mellette a teljes környezetét,'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "horizontalis_gentranszfer_vizsgalata_metagenomikai_15",
      "topic": "Horizontális géntranszfer vizsgálata metagenomikai megközelítéssel",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'nem tudjuk biztosan megmondani, hogy:'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "horizontalis_gentranszfer_vizsgalata_metagenomikai_16",
      "topic": "Horizontális géntranszfer vizsgálata metagenomikai megközelítéssel",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'vagy melyik baktérium hordozza.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "horizontalis_gentranszfer_vizsgalata_metagenomikai_17",
      "topic": "Horizontális géntranszfer vizsgálata metagenomikai megközelítéssel",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'Ezért rövid olvasatokkal a HGT-re inkább csak következtetni tudunk, de ritkán tudjuk egyértelműen bizonyítani.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "horizontalis_gentranszfer_vizsgalata_metagenomikai_18",
      "topic": "Horizontális géntranszfer vizsgálata metagenomikai megközelítéssel",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'egyetlen olvasat átfoghat:'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "horizontalis_gentranszfer_vizsgalata_metagenomikai_19",
      "topic": "Horizontális géntranszfer vizsgálata metagenomikai megközelítéssel",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'egy teljes plazmidot,'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    }
  ]
};