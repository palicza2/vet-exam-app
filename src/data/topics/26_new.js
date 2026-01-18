export const t26_arg_k_azonositasat_szolgalo_adatbazisok_es_eszkData = {
  "id": "26_arg_k_azonositasat_szolgalo_adatbazisok_es_eszk",
  "title": "26. ARG-k azonosítását szolgáló adatbázisok és eszközök",
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
      "title": "Mobil genetikai elemek detektálása",
      "icon": "book",
      "color": "bg-indigo-50 border-indigo-200",
      "iconColor": "text-indigo-500",
      "sections": [
        {
          "header": "Általános",
          "points": [
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
            "A mobil elemek azonosítása ezért nemcsak azt mutatja meg, milyen rezisztenciagének vannak jelen, hanem azt is, mennyire mobilisak, és milyen kockázatot jelenthetnek a rezisztencia további terjedése szempontjából."
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
      "id": "q_26_1",
      "topic": "26_arg_k_azonositasat_szolgalo_adatbazisok_es_eszk",
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
      "id": "q_26_2",
      "topic": "26_arg_k_azonositasat_szolgalo_adatbazisok_es_eszk",
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
      "id": "q_26_3",
      "topic": "26_arg_k_azonositasat_szolgalo_adatbazisok_es_eszk",
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
      "id": "q_26_4",
      "topic": "26_arg_k_azonositasat_szolgalo_adatbazisok_es_eszk",
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
      "id": "q_26_5",
      "topic": "26_arg_k_azonositasat_szolgalo_adatbazisok_es_eszk",
      "type": "bool",
      "question": "Igaz-e az állítás: Ennek segítségével nemcsak az integron megléte állapítható meg, hanem az is, hogy milyen génkazetták kapcsolódnak hozzá, ami fontos információ a rezisztenciagének mobilitásának megértéséhez.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "Ennek segítségével nemcsak az integron megléte állapítható meg, hanem az is, hogy milyen génkazetták kapcsolódnak hozzá, ami fontos információ a rezisztenciagének mobilitásának megértéséhez."
    },
    {
      "id": "q_26_6",
      "topic": "26_arg_k_azonositasat_szolgalo_adatbazisok_es_eszk",
      "type": "bool",
      "question": "Igaz-e az állítás: Ennek segítségével megállapítható, hogy egy adott plazmid mely ismert plazmidcsaládhoz hasonlít, ami fontos információ a rezisztencia terjedési útvonalainak feltérképezéséhez.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "Ennek segítségével megállapítható, hogy egy adott plazmid mely ismert plazmidcsaládhoz hasonlít, ami fontos információ a rezisztencia terjedési útvonalainak feltérképezéséhez."
    },
    {
      "id": "q_26_7",
      "topic": "26_arg_k_azonositasat_szolgalo_adatbazisok_es_eszk",
      "type": "bool",
      "question": "Igaz-e az állítás: A mobil elemek azonosítása ezért nemcsak azt mutatja meg, milyen rezisztenciagének vannak jelen, hanem azt is, mennyire mobilisak, és milyen kockázatot jelenthetnek a rezisztencia további terjedése szempontjából.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A mobil elemek azonosítása ezért nemcsak azt mutatja meg, milyen rezisztenciagének vannak jelen, hanem azt is, mennyire mobilisak, és milyen kockázatot jelenthetnek a rezisztencia további terjedése szempontjából."
    },
    {
      "id": "q_26_8",
      "topic": "26_arg_k_azonositasat_szolgalo_adatbazisok_es_eszk",
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