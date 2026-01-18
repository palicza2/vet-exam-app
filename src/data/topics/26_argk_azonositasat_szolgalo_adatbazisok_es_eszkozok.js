export const argkazonositasatszolgaloadatbazisokeseszkozokData = {
  "id": "argk_azonositasat_szolgalo_adatbazisok_es_eszkozok",
  "title": "ARG-k azonosítását szolgáló adatbázisok és eszközök",
  "studyMaterial": [
    {
      "title": "ARG-k azonosítását szolgáló adatbázisok és eszközök",
      "icon": "book",
      "color": "bg-blue-50 border-blue-200",
      "iconColor": "text-blue-500",
      "sections": [
        {
          "header": "Általános",
          "points": [
            "A metagenomika – a teljes mikrobiális közösségből származó genetikai anyag közvetlen, tenyésztés nélküli szekvenálása és elemzése – lehetővé teszi a \"ki van ott?\" (taxonómiai összetétel) és a \"mit csinálnak?\" (funkcionális potenciál) kérdések egyidejű megválaszolását.",
            "Az NGS technológiák mára lehetővé teszik nemcsak az emberi genom, hanem komplex mikrobiális közösségek (mikrobiom) és patogén kórokozók részletes vizsgálatát is.",
            "Az NGS nem egyetlen módszert takar, hanem több, különböző elven működő technológiát foglal magába, mindegyiknek megvannak a maga előnyei és hátrányai.",
            "Második Generációs Technológiák: Rövid Leolvasások",
            "A második generációs technológiák közös jellemzője, hogy a DNS-t apró fragmensekre törik, majd ezeket amplifikálják (klonális sokszorozás) a jel felerősítése érdekében.",
            "A szekvenálás általában rövid szakaszokat (50-400 bázispár) eredményez, de hatalmas mennyiségben.",
            "Illumina, Ion Torrent",
            "III. Harmadik Generációs Technológiák: A Hosszú Leolvasások",
            "A harmadik generációs technológiák (Long-Read Sequencing) áttörést hoztak a genomikában azzal, hogy képesek hosszú, akár több tízezer vagy százezer bázispáros DNS-molekulák egybefüggő szekvenálására.",
            "Pacific Biosciences (PacBio), Oxford Nanopore Technologies (ONT)",
            "A szekvenálási technológiák fejlődése hatalmas mennyiségű nyers adatot generál, amely önmagában értelmezhetetlen. A valós biológiai információ kinyeréséhez elengedhetetlen a bioinformatika, az a tudományág, amely számítógépes eszközöket és algoritmusokat használ a biológiai adatok tárolására, elemzésére és értelmezésére. Az NGS adatok feldolgozása egy komplex, több lépcsős folyamat.",
            "Minőségellenőrzés",
            "Az első lépés a szekvenáló gépek által generált nyers adatok (fastq fájlok) minőségének ellenőrzése.",
            "fastq fájlok tartalmazzás a readek szekvenciáját és a bázisok minőségi értékeit",
            "Szoftveres eszközökkel eltávolítják az alacsony minőségű bázisokat, adapter szennyeződéseket, és szükség szerint vágják a read-ek végét. (A rossz minőségű vagy technikai szekvenciák eltávolítása: trimming)",
            "Referencia-genomhoz illesztés (alignment)",
            "A minőségileg ellenőrzött rövid DNS-olvasatokat (reads) ezután egy referencia-genomhoz (ha elérhető) illesztik (alignment).",
            "Ez azt jelenti, hogy a rövid szekvenciákat megpróbálják beilleszteni a referencia-genom megfelelő helyére.",
            "A kimenet egy BAM fájl, amely tartalmazza az illesztett olvasatokat és azok pozícióját a referencia-genomon.",
            "Deduplikáció: A PCR során keletkező azonos másolatok (duplikátumok) eltávolítása.",
            "rövid readek esetén gyakori a de novo összeállítás: a szekvenálási readekből referencia-genom nélkül, kizárólag a szekvenciák közötti átfedések alapján állítanak össze hosszabb DNS-szakaszokat",
            "kontingok",
            "Ez a lépés rendkívül számításigényes, és speciális algoritmusokat igényel.",
            "Variánsazonosítás",
            "Az illesztett olvasatok alapján azonosítják a genetikai variánsokat, azaz azokat a különbségeket, amelyek a vizsgált egyed genomja és a referencia-genom között fennállnak.",
            "A variánsazonosítás során statisztikai modelleket alkalmaznak, hogy megkülönböztessék a valódi genetikai variánsokat a szekvenálási hibáktól.",
            "Annotálás",
            "A variánsokhoz biológiai jelentést rendelünk.",
            "Az összeállított kontigokból gén-előrejelző programok génjeit hívják ki, majd funkcionális annotációval hozzárendelik a gének szerepét.",
            "Funkcionális annotáció",
            "A funkcionális annotáció célja annak meghatározása, hogy a metagenomikai adatokban azonosított gének milyen biológiai funkciót látnak el.",
            "A folyamat első lépése a gének felismerése az összeállított DNS-szakaszokon, amit ORF-predikciónak nevezünk.",
            "Ekkor meghatározzák azokat a szakaszokat, amelyek valószínűleg fehérjét kódolnak, és kinyerik ezek aminosavsorrendjét.",
            "A következő lépésben a prediktált fehérjéket ismert adatbázisokkal hasonlítják össze.",
            "A KEGG adatbázis segítségével a fehérjéket anyagcsere-útvonalakhoz és biokémiai funkciókhoz rendelik",
            "a Pfam adatbázis a fehérjéket családokba és működési egységekbe sorolja.",
            "Összességében a funkcionális annotáció során a metagenomban azonosított génekhez különböző adatbázisok segítségével funkciókat rendelnek, így következtetni lehet arra, milyen biológiai folyamatokra képes a vizsgált mikrobiális közösség.",
            "Antimikrobiális rezisztencia gének azonosítása",
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
            "Számos új vagy eddig még nem leírt rezisztenciamechanizmus létezhet, amelyek nem szerepelnek a jelenlegi adatbázisokban. Ezért a rezisztom-elemzés eredményeit mindig azzal a tudattal kell értelmezni, hogy a kimutatott ARG-k a jelenleg ismert rezisztenciakészletet tükrözik, és nem feltétlenül fedik le a teljes, potenciálisan jelen lévő rezisztenciagének körét.",
            "Mobil genetikai elemek detektálása",
            "Az antimikrobiális rezisztencia gének terjedésében kiemelt szerepet játszanak az úgynevezett mobil genetikai elemek, mint például az integronok, a plazmidok vagy egyes génszigetek.",
            "Ezek az elemek képesek egyik baktériumból a másikba átkerülni, ezért kulcsszerepük van a horizontális géntranszferben.",
            "Metagenomikai adatok esetén speciális bioinformatikai eszközökre van szükség ahhoz, hogy ezeket a mobil elemeket elkülönítsük a baktériumok kromoszómális DNS-étől.",
            "Az IntegronFinder kifejezetten az integronok felismerésére szolgál.",
            "Az integronok olyan genetikai egységek, amelyek képesek különböző génkazettákat – gyakran antibiotikum-rezisztencia géneket – befogadni és kifejezni.",
            "Az IntegronFinder olyan jellegzetes szekvenciaelemeket keres a kontigekben, amelyek az integronok jelenlétére utalnak, például az integráz enzimet kódoló gént és a rekombinációs helyeket.",
            "Ennek segítségével nemcsak az integron megléte állapítható meg, hanem az is, hogy milyen génkazetták kapcsolódnak hozzá, ami fontos információ a rezisztenciagének mobilitásának megértéséhez.",
            "A PlasFlow egy másik megközelítést alkalmaz, és azt vizsgálja, hogy egy adott metagenomikus contig plazmidról vagy kromoszómáról származik-e.",
            "A módszer a DNS-szekvenciák nukleotid-összetételére épül, és egy gépi tanuláson alapuló modell segítségével hoz döntést.",
            "Különösen hasznos környezeti minták esetében, ahol a plazmidok gyakran teljesen ismeretlenek, mégis nagy pontossággal képes azonosítani a plazmid eredetű szekvenciákat.",
            "A MOB-suite egy átfogó eszközkészlet, amely a plazmidok részletesebb elemzésére szolgál.",
            "Egyes moduljai megpróbálják rekonstruálni a teljes plazmidokat az összeállított metagenomikus adatokból, míg más modulok a plazmidok típusát határozzák meg, például azt, hogy milyen replikációs vagy mobilitási csoportba tartoznak.",
            "Ennek segítségével megállapítható, hogy egy adott plazmid mely ismert plazmidcsaládhoz hasonlít, ami fontos információ a rezisztencia terjedési útvonalainak feltérképezéséhez.",
            "Ezeknek az eszközöknek az együttes alkalmazásával a metagenomikai adatokban elkülöníthetők a mobil genetikai elemekhez tartozó kontigek a kromoszómális eredetű szekvenciáktól.",
            "Ennek különös jelentősége van az antibiotikum-rezisztencia vizsgálatában, mivel a rezisztenciagének gyakran éppen plazmidokon vagy integronokban helyezkednek el.",
            "A mobil elemek azonosítása ezért nemcsak azt mutatja meg, milyen rezisztenciagének vannak jelen, hanem azt is, mennyire mobilisak, és milyen kockázatot jelenthetnek a rezisztencia további terjedése szempontjából.",
            "Vizualizációs eszközök",
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
      "id": "argk_azonositasat_szolgalo_adatbazisok_es_eszkozok_0",
      "topic": "ARG-k azonosítását szolgáló adatbázisok és eszközök",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'Második Generációs Technológiák: Rövid Leolvasások'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "argk_azonositasat_szolgalo_adatbazisok_es_eszkozok_1",
      "topic": "ARG-k azonosítását szolgáló adatbázisok és eszközök",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'A szekvenálás általában rövid szakaszokat (50-400 bázispár) eredményez, de hatalmas mennyiségben.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "argk_azonositasat_szolgalo_adatbazisok_es_eszkozok_2",
      "topic": "ARG-k azonosítását szolgáló adatbázisok és eszközök",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'Illumina, Ion Torrent'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "argk_azonositasat_szolgalo_adatbazisok_es_eszkozok_3",
      "topic": "ARG-k azonosítását szolgáló adatbázisok és eszközök",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'III. Harmadik Generációs Technológiák: A Hosszú Leolvasások'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "argk_azonositasat_szolgalo_adatbazisok_es_eszkozok_4",
      "topic": "ARG-k azonosítását szolgáló adatbázisok és eszközök",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'Pacific Biosciences (PacBio), Oxford Nanopore Technologies (ONT)'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "argk_azonositasat_szolgalo_adatbazisok_es_eszkozok_5",
      "topic": "ARG-k azonosítását szolgáló adatbázisok és eszközök",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'Az első lépés a szekvenáló gépek által generált nyers adatok (fastq fájlok) minőségének ellenőrzése.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "argk_azonositasat_szolgalo_adatbazisok_es_eszkozok_6",
      "topic": "ARG-k azonosítását szolgáló adatbázisok és eszközök",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'fastq fájlok tartalmazzás a readek szekvenciáját és a bázisok minőségi értékeit'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "argk_azonositasat_szolgalo_adatbazisok_es_eszkozok_7",
      "topic": "ARG-k azonosítását szolgáló adatbázisok és eszközök",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'Referencia-genomhoz illesztés (alignment)'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "argk_azonositasat_szolgalo_adatbazisok_es_eszkozok_8",
      "topic": "ARG-k azonosítását szolgáló adatbázisok és eszközök",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'A minőségileg ellenőrzött rövid DNS-olvasatokat (reads) ezután egy referencia-genomhoz (ha elérhető) illesztik (alignment).'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "argk_azonositasat_szolgalo_adatbazisok_es_eszkozok_9",
      "topic": "ARG-k azonosítását szolgáló adatbázisok és eszközök",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'Ez azt jelenti, hogy a rövid szekvenciákat megpróbálják beilleszteni a referencia-genom megfelelő helyére.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "argk_azonositasat_szolgalo_adatbazisok_es_eszkozok_10",
      "topic": "ARG-k azonosítását szolgáló adatbázisok és eszközök",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'A kimenet egy BAM fájl, amely tartalmazza az illesztett olvasatokat és azok pozícióját a referencia-genomon.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "argk_azonositasat_szolgalo_adatbazisok_es_eszkozok_11",
      "topic": "ARG-k azonosítását szolgáló adatbázisok és eszközök",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'Deduplikáció: A PCR során keletkező azonos másolatok (duplikátumok) eltávolítása.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "argk_azonositasat_szolgalo_adatbazisok_es_eszkozok_12",
      "topic": "ARG-k azonosítását szolgáló adatbázisok és eszközök",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'Ez a lépés rendkívül számításigényes, és speciális algoritmusokat igényel.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "argk_azonositasat_szolgalo_adatbazisok_es_eszkozok_13",
      "topic": "ARG-k azonosítását szolgáló adatbázisok és eszközök",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'A variánsazonosítás során statisztikai modelleket alkalmaznak, hogy megkülönböztessék a valódi genetikai variánsokat a szekvenálási hibáktól.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "argk_azonositasat_szolgalo_adatbazisok_es_eszkozok_14",
      "topic": "ARG-k azonosítását szolgáló adatbázisok és eszközök",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'A variánsokhoz biológiai jelentést rendelünk.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "argk_azonositasat_szolgalo_adatbazisok_es_eszkozok_15",
      "topic": "ARG-k azonosítását szolgáló adatbázisok és eszközök",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'Az összeállított kontigokból gén-előrejelző programok génjeit hívják ki, majd funkcionális annotációval hozzárendelik a gének szerepét.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "argk_azonositasat_szolgalo_adatbazisok_es_eszkozok_16",
      "topic": "ARG-k azonosítását szolgáló adatbázisok és eszközök",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'Funkcionális annotáció'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "argk_azonositasat_szolgalo_adatbazisok_es_eszkozok_17",
      "topic": "ARG-k azonosítását szolgáló adatbázisok és eszközök",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'A funkcionális annotáció célja annak meghatározása, hogy a metagenomikai adatokban azonosított gének milyen biológiai funkciót látnak el.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "argk_azonositasat_szolgalo_adatbazisok_es_eszkozok_18",
      "topic": "ARG-k azonosítását szolgáló adatbázisok és eszközök",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'A folyamat első lépése a gének felismerése az összeállított DNS-szakaszokon, amit ORF-predikciónak nevezünk.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    },
    {
      "id": "argk_azonositasat_szolgalo_adatbazisok_es_eszkozok_19",
      "topic": "ARG-k azonosítását szolgáló adatbázisok és eszközök",
      "type": "mcq",
      "question": "Igaz-e az alábbi állítás: 'Ekkor meghatározzák azokat a szakaszokat, amelyek valószínűleg fehérjét kódolnak, és kinyerik ezek aminosavsorrendjét.'?",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tananyag alapján ez az állítás helyes."
    }
  ]
};