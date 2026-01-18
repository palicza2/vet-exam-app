export const t25_bioinformatikai_alapok_a_metagenomikai_adatok_fData = {
  "id": "25_bioinformatikai_alapok_a_metagenomikai_adatok_f",
  "title": "25. Bioinformatikai alapok a metagenomikai adatok feldolgozásában",
  "studyMaterial": [
    {
      "title": "Funkcionális annotáció",
      "icon": "book",
      "color": "bg-indigo-50 border-indigo-200",
      "iconColor": "text-indigo-500",
      "sections": [
        {
          "header": "Általános",
          "points": [
            "A funkcionális annotáció célja annak meghatározása, hogy a metagenomikai adatokban azonosított gének milyen biológiai funkciót látnak el.",
            "A folyamat első lépése a gének felismerése az összeállított DNS-szakaszokon, amit ORF-predikciónak nevezünk.",
            "Ekkor meghatározzák azokat a szakaszokat, amelyek valószínűleg fehérjét kódolnak, és kinyerik ezek aminosavsorrendjét.",
            "A következő lépésben a prediktált fehérjéket ismert adatbázisokkal hasonlítják össze.",
            "A KEGG adatbázis segítségével a fehérjéket anyagcsere-útvonalakhoz és biokémiai funkciókhoz rendelik",
            "Pfam adatbázis a fehérjéket családokba és működési egységekbe sorolja.",
            "Összességében a funkcionális annotáció során a metagenomban azonosított génekhez különböző adatbázisok segítségével funkciókat rendelnek, így következtetni lehet arra, milyen biológiai folyamatokra képes a vizsgált mikrobiális közösség."
          ]
        }
      ]
    },
    {
      "title": "Taxonómiai azonosítás",
      "icon": "book",
      "color": "bg-indigo-50 border-indigo-200",
      "iconColor": "text-indigo-500",
      "sections": [
        {
          "header": "Általános",
          "points": [
            "A metagenomikai minták taxonómiai elemzésének célja annak meghatározása, hogy milyen mikroorganizmusok vannak jelen a mintában, és milyen arányban. Erre többféle bioinformatikai módszer létezik.",
            "Kraken2",
            "A Kraken2 egy nagyon gyors módszer, amely a szekvenálási readeket rövid DNS-darabokra bontja, majd ezeket egy előre elkészített referencia-adatbázissal hasonlítja össze.",
            "A módszer megpróbálja minden readhez azt a taxont hozzárendelni, amely a legjobban magyarázza a találatokat.",
            "Rövid idő alatt, akár fajszintű besorolást is adhat, még nagyon nagy adatmennyiségek esetén is.",
            "Hátránya ugyanakkor, hogy a gyorsaság miatt téves találatok is előfordulhatnak, különösen akkor, ha a referencia-adatbázis nem teljes, vagy ha túl rövid DNS-darabokat használ az összehasonlításhoz. Ezért a Kraken2 eredményeit általában utólag szűrik és küszöbértékekkel tisztítják.",
            "MetaPhlAn",
            "Nem a teljes DNS-t vizsgálja, hanem csak olyan géneket, amelyek kizárólag bizonyos mikroorganizmus-csoportokra jellemzőek.",
            "A szekvenálási readeket ezekhez a speciális „jelző” génekhez illeszti, majd ezek alapján határozza meg, mely taxonok vannak jelen, és milyen arányban.",
            "Ennek előnye, hogy kevesebb a téves azonosítás, ugyanakkor a módszer csak azokat a mikroorganizmusokat képes kimutatni, amelyekhez rendelkezésre áll ilyen jelzőgén az adatbázisban.",
            "Kaiju",
            "Nem a DNS-szekvenciákat, hanem az azokból származtatható fehérjéket vizsgálja.",
            "A DNS-readeket először fehérjeszekvenciává alakítja, majd ezeket hasonlítja össze egy nagy fehérjeadatbázissal.",
            "Ez a megközelítés lehetővé teszi, hogy távolabbi rokonságban álló mikroorganizmusokat, valamint kevésbé ismert vírusokat és baktériumokat is felismerjen.",
            "Cserébe a módszer lassabb, mint a kizárólag DNS-alapú eljárások."
          ]
        }
      ]
    },
    {
      "title": "Antimikrobiális rezisztencia gének azonosítása",
      "icon": "book",
      "color": "bg-indigo-50 border-indigo-200",
      "iconColor": "text-indigo-500",
      "sections": [
        {
          "header": "Általános",
          "points": [
            "A metagenomikai vizsgálatok során különösen fontos szerepet kap az ARG-k azonosítása, mivel ezek a gének kulcsszerepet játszanak az antibiotikum-rezisztencia terjedésében, különösen a horizontális géntranszfer révén.",
            "A rezisztenciagének felismerésére kifejezetten erre a célra kialakított adatbázisok és bioinformatikai eszközök állnak rendelkezésre.",
            "Az egyik legszélesebb körben használt rendszer a CARD, amely egy gondosan karbantartott rezisztenciagén-gyűjtemény.",
            "A hozzá tartozó elemző eszköz a bemeneti szekvenciákat fehérje- és mutációszinten vizsgálja, és különböző összehasonlító módszerekkel keresi meg a legjobb egyezéseket.",
            "Ennek eredményeként pontos információt ad arról, hogy egy adott szekvencia milyen típusú rezisztenciagénhez tartozik, például egy β-laktamázhoz vagy egy effluxpumpához, és milyen antibiotikumokkal szemben okozhat ellenállást.",
            "Egy másik gyakran alkalmazott eszköz a ResFinder, amelyet a dán Genomikai Epidemiológiai Központ fejlesztett ki.",
            "A ResFinder egy manuálisan összeállított rezisztenciagén-adatbázist használ, és elsősorban DNS-szintű összehasonlításokra épül.",
            "A program a bemeneti szekvenciákban megkeresi az ismert rezisztenciagéneket, majd listát készít a talált ARG-kről.",
            "Bizonyos esetekben a rendszer képes arra is, hogy az azonosított gének alapján rezisztencia-fenotípust jelezzen előre, különösen bakteriális izolátumok esetén.",
            "Metagenomikában leggyakrabban összeállított contigeken vagy teljes genom-szegmenseken alkalmazzák.",
            "Szintén elterjedt eszköz az NCBI által fejlesztett AMRFinderPlus.",
            "NCBI rezisztenciagén-referencia adatbázisára épül.",
            "Nemcsak teljes rezisztenciagéneket képes felismerni, hanem olyan kritikus pontmutációkat is, amelyek önmagukban rezisztenciát okozhatnak.",
            "Fehérje és DNS-alapú keresési módszereket egyaránt alkalmaz, és strukturált, jól értelmezhető kimenetet ad, amely elkülöníti az alapvető rezisztenciagéneket és az egyéb, például virulenciához vagy stresszválaszhoz kapcsolódó tényezőket.",
            "A gyakorlatban ezeknek az eszközöknek a futtatása általában a metagenomikai adatok előfeldolgozása után történik. A nyers readek minőségi szűrését és szükség szerinti összeállítását követően az ORF-predikció során kinyert fehérjeszekvenciákat használják bemenetként, mivel a rezisztenciagének funkciója legjobban fehérjeszinten értelmezhető.",
            "Az elemzés eredményeként kapott ARG-listák, valamint ezek relatív gyakorisága a mintában alkotják a rezisztencia-profilt, vagyis a vizsgált minta rezisztomjának alapját.",
            "Fontos ugyanakkor hangsúlyozni, hogy a rezisztenciagén-adatbázisok sem teljesek.",
            "Számos új vagy eddig még nem leírt rezisztenciamechanizmus létezhet, amelyek nem szerepelnek a jelenlegi adatbázisokban. Ezért a rezisztom-elemzés eredményeit mindig azzal a tudattal kell értelmezni, hogy a kimutatott ARG-k a jelenleg ismert rezisztenciakészletet tükrözik, és nem feltétlenül fedik le a teljes, potenciálisan jelen lévő rezisztenciagének körét."
          ]
        }
      ]
    },
    {
      "title": "Vizualizációs eszközök",
      "icon": "book",
      "color": "bg-indigo-50 border-indigo-200",
      "iconColor": "text-indigo-500",
      "sections": [
        {
          "header": "Általános",
          "points": [
            "A metagenomikai vizsgálatok során nagy mennyiségű és összetett adat keletkezik, ezért az eredmények értelmezését különböző vizualizációs eszközök segítik. Ezek lehetővé teszik a mikrobiális közösségek összetételének és funkcionális jellemzőinek áttekinthető megjelenítését.",
            "A Krona elsősorban a taxonómiai összetétel bemutatására szolgál. Interaktív kördiagramjai segítségével a felhasználó könnyen áttekintheti a mikrobiális közösség hierarchikus felépítését, és különböző taxonómiai szintek között böngészhet. Ez az eszköz jól használható a relatív abundanciák gyors szemléltetésére.",
            "A MEGAN a szekvencia-illesztési eredményekből állít elő taxonómiai és funkcionális profilokat. Grafikus felületén lehetőség van a minták közötti összehasonlításra, valamint annak vizsgálatára, hogy az egyes taxonok vagy funkciók milyen arányban vannak jelen a metagenomban.",
            "Az anvi’o egy összetettebb elemző és megjelenítő környezet. Többféle adatot – például lefedettséget, géneket és funkcionális annotációkat – egyetlen interaktív nézetben jelenít meg, megkönnyítve a komplex metagenomikai adatok értelmezését."
          ]
        }
      ]
    }
  ],
  "questions": [
    {
      "id": "q_25_1",
      "topic": "25_bioinformatikai_alapok_a_metagenomikai_adatok_f",
      "type": "bool",
      "question": "Igaz-e az állítás: Hátránya ugyanakkor, hogy a gyorsaság miatt téves találatok is előfordulhatnak, különösen akkor, ha a referencia-adatbázis nem teljes, vagy ha túl rövid DNS-darabokat használ az összehasonlításhoz. Ezért a Kraken2 eredményeit általában utólag szűrik és küszöbértékekkel tisztítják.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "Hátránya ugyanakkor, hogy a gyorsaság miatt téves találatok is előfordulhatnak, különösen akkor, ha a referencia-adatbázis nem teljes, vagy ha túl rövid DNS-darabokat használ az összehasonlításhoz. Ezért a Kraken2 eredményeit általában utólag szűrik és küszöbértékekkel tisztítják."
    },
    {
      "id": "q_25_2",
      "topic": "25_bioinformatikai_alapok_a_metagenomikai_adatok_f",
      "type": "bool",
      "question": "Igaz-e az állítás: Nem a teljes DNS-t vizsgálja, hanem csak olyan géneket, amelyek kizárólag bizonyos mikroorganizmus-csoportokra jellemzőek.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "Nem a teljes DNS-t vizsgálja, hanem csak olyan géneket, amelyek kizárólag bizonyos mikroorganizmus-csoportokra jellemzőek."
    },
    {
      "id": "q_25_3",
      "topic": "25_bioinformatikai_alapok_a_metagenomikai_adatok_f",
      "type": "bool",
      "question": "Igaz-e az állítás: Ennek előnye, hogy kevesebb a téves azonosítás, ugyanakkor a módszer csak azokat a mikroorganizmusokat képes kimutatni, amelyekhez rendelkezésre áll ilyen jelzőgén az adatbázisban.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "Ennek előnye, hogy kevesebb a téves azonosítás, ugyanakkor a módszer csak azokat a mikroorganizmusokat képes kimutatni, amelyekhez rendelkezésre áll ilyen jelzőgén az adatbázisban."
    },
    {
      "id": "q_25_4",
      "topic": "25_bioinformatikai_alapok_a_metagenomikai_adatok_f",
      "type": "bool",
      "question": "Igaz-e az állítás: Nem a DNS-szekvenciákat, hanem az azokból származtatható fehérjéket vizsgálja.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "Nem a DNS-szekvenciákat, hanem az azokból származtatható fehérjéket vizsgálja."
    },
    {
      "id": "q_25_5",
      "topic": "25_bioinformatikai_alapok_a_metagenomikai_adatok_f",
      "type": "bool",
      "question": "Igaz-e az állítás: A metagenomikai vizsgálatok során különösen fontos szerepet kap az ARG-k azonosítása, mivel ezek a gének kulcsszerepet játszanak az antibiotikum-rezisztencia terjedésében, különösen a horizontális géntranszfer révén.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A metagenomikai vizsgálatok során különösen fontos szerepet kap az ARG-k azonosítása, mivel ezek a gének kulcsszerepet játszanak az antibiotikum-rezisztencia terjedésében, különösen a horizontális géntranszfer révén."
    },
    {
      "id": "q_25_6",
      "topic": "25_bioinformatikai_alapok_a_metagenomikai_adatok_f",
      "type": "bool",
      "question": "Igaz-e az állítás: Nemcsak teljes rezisztenciagéneket képes felismerni, hanem olyan kritikus pontmutációkat is, amelyek önmagukban rezisztenciát okozhatnak.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "Nemcsak teljes rezisztenciagéneket képes felismerni, hanem olyan kritikus pontmutációkat is, amelyek önmagukban rezisztenciát okozhatnak."
    },
    {
      "id": "q_25_7",
      "topic": "25_bioinformatikai_alapok_a_metagenomikai_adatok_f",
      "type": "bool",
      "question": "Igaz-e az állítás: Fontos ugyanakkor hangsúlyozni, hogy a rezisztenciagén-adatbázisok sem teljesek.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "Fontos ugyanakkor hangsúlyozni, hogy a rezisztenciagén-adatbázisok sem teljesek."
    },
    {
      "id": "q_25_8",
      "topic": "25_bioinformatikai_alapok_a_metagenomikai_adatok_f",
      "type": "bool",
      "question": "Igaz-e az állítás: Számos új vagy eddig még nem leírt rezisztenciamechanizmus létezhet, amelyek nem szerepelnek a jelenlegi adatbázisokban. Ezért a rezisztom-elemzés eredményeit mindig azzal a tudattal kell értelmezni, hogy a kimutatott ARG-k a jelenleg ismert rezisztenciakészletet tükrözik, és nem feltétlenül fedik le a teljes, potenciálisan jelen lévő rezisztenciagének körét.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "Számos új vagy eddig még nem leírt rezisztenciamechanizmus létezhet, amelyek nem szerepelnek a jelenlegi adatbázisokban. Ezért a rezisztom-elemzés eredményeit mindig azzal a tudattal kell értelmezni, hogy a kimutatott ARG-k a jelenleg ismert rezisztenciakészletet tükrözik, és nem feltétlenül fedik le a teljes, potenciálisan jelen lévő rezisztenciagének körét."
    },
    {
      "id": "q_25_9",
      "topic": "25_bioinformatikai_alapok_a_metagenomikai_adatok_f",
      "type": "bool",
      "question": "Igaz-e az állítás: A metagenomikai vizsgálatok során nagy mennyiségű és összetett adat keletkezik, ezért az eredmények értelmezését különböző vizualizációs eszközök segítik. Ezek lehetővé teszik a mikrobiális közösségek összetételének és funkcionális jellemzőinek áttekinthető megjelenítését.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A metagenomikai vizsgálatok során nagy mennyiségű és összetett adat keletkezik, ezért az eredmények értelmezését különböző vizualizációs eszközök segítik. Ezek lehetővé teszik a mikrobiális közösségek összetételének és funkcionális jellemzőinek áttekinthető megjelenítését."
    }
  ]
};