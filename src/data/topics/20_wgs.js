export const wgsData = {
  id: "wgs_amr",
  title: "20. Teljes genomszekvenálás (WGS)",
  studyMaterial: [
    {
      title: "1. A Diagnosztika Új Korszak",
      icon: "microscope",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-500",
      sections: [
        {
          header: "Minden információ egyben",
          points: [
            "A teljes genomszekvenálás (WGS) során a baktérium teljes DNS állományát meghatározzuk.",
            "Kiváltja a hagyományos típusmeghatározást (szerotipizálás), a rezisztencia-vizsgálatot és a rokonsági vizsgálatokat.",
            "**Gold standard:** A járványügyi nyomon követés legpontosabb eszköze."
          ]
        }
      ]
    },
    {
      title: "2. Munkafolyamat",
      icon: "activity",
      color: "bg-emerald-50 border-emerald-200",
      iconColor: "text-emerald-500",
      sections: [
        {
          header: "A laboratóriumtól az adatig",
          points: [
            "**Izolálás:** Tiszta baktériumtenyészetből DNS kinyerése.",
            "**Könyvtárkészítés:** A DNS feldarabolása és jelölése.",
            "**Szekvenálás:** A bázissorrend leolvasása (pl. Illumina vagy Oxford Nanopore technológia).",
            "**Bioinformatika:** Az adatok elemzése szoftverekkel."
          ]
        }
      ]
    },
    {
      title: "3. AMR Meghatározás WGS-sel",
      icon: "shieldAlert",
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-500",
      sections: [
        {
          header: "Gének keresése",
          points: [
            "**Adatbázisok:** A leolvasott szekvenciákat összevetjük ismert rezisztenciagén-adatbázisokkal (pl. ResFinder, CARD).",
            "**Genotípus vs. Fenotípus:** A legtöbb baktériumnál a WGS 95-99%-os pontossággal megjósolja a laboratóriumi antibiotikum-érzékenységet.",
            "**Előny:** Olyan mechanizmusokat is látunk, amelyeket a rutin tesztek nem (pl. néma gének)."
          ]
        }
      ]
    },
    {
      title: "4. Járványügyi Nyomon Követés",
      icon: "brain",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
      sections: [
        {
          header: "A 'bűnöző' azonosítása",
          points: [
            "**SNP elemzés:** A legkisebb különbségek (egybázisú eltérések) alapján megmondható, hogy két törzs ugyanabból a fertőzési forrásból származik-e.",
            "**Globális hálózat:** A szekvenciák megoszthatók nemzetközi adatbázisokban, így látható a rezisztens törzsek világméretű terjedése."
          ]
        }
      ]
    },
    {
      title: "5. Technológiák: Short-read vs. Long-read",
      icon: "bug",
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-500",
      sections: [
        {
          header: "Melyiket válasszuk?",
          points: [
            "**Illumina (Short-read):** Nagyon pontos, de rövid darabokat olvas. Nehéz vele a plazmidokat összeilleszteni.",
            "**Nanopore (Long-read):** Hosszú DNS szakaszokat olvas. Kiváló a mobilis genetikai elemek (plazmidok) pontos feltérképezésére és 'zárt genom' készítésére."
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "wgs_1",
      topic: "WGS",
      type: "mcq",
      question: "Mit jelent a WGS rövidítés?",
      options: ["Wide Gene Study", "Whole Genome Sequencing", "World Germ Statistics", "Wound Genomic Search"],
      correctAnswer: 1,
      explanation: "A Whole Genome Sequencing a teljes genom szekvenálását jelenti."
    },
    {
      id: "wgs_2",
      topic: "WGS",
      type: "mcq",
      question: "Melyik adatbázis használt kifejezetten rezisztenciagének keresésére?",
      options: ["Facebook", "ResFinder", "GenBank", "PubMed"],
      correctAnswer: 1,
      explanation: "A ResFinder egy széles körben használt bioinformatikai eszköz az AMR gének azonosítására."
    },
    {
      id: "wgs_3",
      topic: "WGS",
      type: "mcq",
      question: "Melyik technológia alkalmasabb a plazmidok pontos, egybefüggő feltérképezésére?",
      options: ["Illumina (short-read)", "Oxford Nanopore (long-read)", "PCR", "Gram-festés"],
      correctAnswer: 1,
      explanation: "A long-read technológiák (mint a Nanopore) képesek áthidalni az ismétlődő szakaszokat, így a plazmidok szerkezete pontosan láthatóvá válik."
    },
    {
      id: "wgs_4",
      topic: "WGS",
      type: "mcq",
      question: "Milyen pontossággal jósolja meg a WGS a fenotípusos rezisztenciát a legtöbb faj esetében?",
      options: ["10-20%", "50%", "95% felett", "Csak 5%"],
      correctAnswer: 2,
      explanation: "A genotípus és fenotípus közötti konkordancia (egyezés) ma már kiemelkedően magas."
    },
    {
      id: "wgs_5",
      topic: "WGS",
      type: "mcq",
      question: "Mi a legnagyobb előnye a WGS-nek a járványügyi nyomon követésben?",
      options: [
        "Olcsóbb, mint a tenyésztés",
        "A törzsek közötti legkisebb rokonsági kapcsolatok (SNP) is kimutathatók",
        "Nem kell hozzá áram",
        "Minden baktériumot megöl"
      ],
      correctAnswer: 1,
      explanation: "Az SNP (Single Nucleotide Polymorphism) elemzés lehetővé teszi a fertőzési láncolatok pontos felderítését."
    },
    {
      id: "wgs_6",
      topic: "WGS",
      type: "bool",
      question: "A WGS vizsgálathoz mindenképpen szükség van a baktérium tiszta tenyészetére.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Bár létezik metagenomika, a standard WGS izolátum-alapú, tehát tiszta tenyészet szükséges hozzá."
    },
    {
      id: "wgs_7",
      topic: "WGS",
      type: "mcq",
      question: "Mit értünk 'bioinformatika' alatt a WGS munkafolyamatban?",
      options: [
        "A laboratóriumi eszközök tisztítását",
        "A szekvenált adatok számítógépes elemzését",
        "Új baktériumok kitenyésztését",
        "A minták postázását"
      ],
      correctAnswer: 1,
      explanation: "A bioinformatika a biológiai adatok feldolgozása matematikai és informatikai módszerekkel."
    },
    {
      id: "wgs_8",
      topic: "WGS",
      type: "mcq",
      question: "Melyik állítás igaz az Illumina szekvenálásra?",
      options: [
        "Nagyon hosszú darabokat olvas",
        "Kicsi a pontossága",
        "Nagy áteresztőképességű és rendkívül pontos, de rövid darabokat (short-read) produkál",
        "Csak vírusokat tud szekvenálni"
      ],
      correctAnswer: 2,
      explanation: "Az Illumina a legelterjedtebb short-read technológia a nagy pontossága miatt."
    },
    {
      id: "wgs_9",
      topic: "WGS",
      type: "mcq",
      question: "Mire használható még a WGS a rezisztencia keresésen kívül?",
      options: [
        "Virulenciagének azonosítására",
        "Törzsfejlődési (filogenetikai) vizsgálatokra",
        "Szerotipizálás kiváltására",
        "Mindegyik válasz helyes"
      ],
      correctAnswer: 3,
      explanation: "A WGS egyetlen vizsgálattal minden genetikai információt felszínre hoz."
    },
    {
      id: "wgs_10",
      topic: "WGS",
      type: "bool",
      question: "A WGS adatok globális megosztása segíthet megállítani a rezisztens 'szuperbaktériumok' terjedését.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "A nemzetközi surveillance (felügyelet) alapja az adatok gyors és nyílt megosztása."
    },
    {
      id: "wgs_11",
      topic: "WGS",
      type: "mcq",
      question: "Mit jelent a 'coverage' (lefedettség) a WGS szekvenálásnál?",
      options: [
        "Hány bázist olvastunk le összesen",
        "Átlagosan hányszor olvastunk le egy-egy bázist a genomban (pl. 50x)",
        "Milyen színű a gép",
        "Mennyi ideig tartott a munka"
      ],
      correctAnswer: 1,
      explanation: "A magasabb lefedettség (mélyebb szekvenálás) nagyobb pontosságot és megbízhatóságot jelent."
    },
    {
      id: "wgs_12",
      topic: "WGS",
      type: "mcq",
      question: "Melyik fájlformátum tartalmazza a szekvenálógép által leolvasott nyers szekvenciákat?",
      options: ["PDF", "FASTQ", "Excel", "Word"],
      correctAnswer: 1,
      explanation: "A FASTQ fájl tartalmazza a bázissorrendet és a leolvasás minőségére vonatkozó pontszámokat (Phred score)."
    },
    {
      id: "wgs_13",
      topic: "WGS",
      type: "mcq",
      question: "Mi a különbség a 'de novo assembly' és a 'mapping' között?",
      options: [
        "A de novo assembly referenciagenom nélkül illeszti össze a darabokat, a mapping egy ismert genomhoz hasonlítja őket",
        "Nincs különbség",
        "A mapping drágább",
        "A de novo assembly csak vírusokra jó"
      ],
      correctAnswer: 0,
      explanation: "A de novo assembly akkor szükséges, ha nincs közeli rokon referenciagenomunk."
    },
    {
      id: "wgs_14",
      topic: "WGS",
      type: "mcq",
      question: "Mit jelent az 'MLST' a bioinformatikai elemzésben?",
      options: [
        "Multilocus Sequence Typing (törzs-szintű tipizálás néhány kulcsgén alapján)",
        "Magyar Laboratóriumi Szövetségi Tagság",
        "Maximum Limit Szekvencia",
        "Minden Lánc Szakadás"
      ],
      correctAnswer: 0,
      explanation: "A WGS-adatokból könnyen kinyerhető az MLST profil (pl. S. suis ST1)."
    },
    {
      id: "wgs_15",
      topic: "WGS",
      type: "mcq",
      question: "Hogyan segíti a WGS az antibiotikum-stewardshipet?",
      options: [
        "Nem segíti",
        "Gyors és pontos rezisztencia-profilt ad, így elkerülhető a felesleges kezelés",
        "Megöli a baktériumokat",
        "Mindenre rezisztenssé teszi az állatot"
      ],
      correctAnswer: 1,
      explanation: "A pontos genotípus-meghatározás segít a legmegfelelőbb gyógyszer kiválasztásában."
    },
    {
      id: "wgs_16",
      topic: "WGS",
      type: "mcq",
      question: "Melyik technológia képes 'real-time' (valós idejű) szekvenálásra akár egy hordozható eszközön (MinION)?",
      options: ["Illumina", "Oxford Nanopore", "Sanger", "PacBio"],
      correctAnswer: 1,
      explanation: "A Nanopore eszközök kicsik, hordozhatóak és valós időben szolgáltatják az adatokat."
    },
    {
      id: "wgs_17",
      topic: "WGS",
      type: "mcq",
      question: "Mit jelent a 'néma gén' (silent gene) a rezisztencia-vizsgálatban?",
      options: [
        "A baktérium nem beszél",
        "A gén jelen van, de valamiért nem fejeződik ki (fenotípusosan érzékeny)",
        "A gén hibás",
        "Nincs ilyen"
      ],
      correctAnswer: 1,
      explanation: "WGS-sel látható a gén, de laboratóriumi tesztben a baktérium mégis érzékenynek tűnhet."
    },
    {
      id: "wgs_18",
      topic: "WGS",
      type: "mcq",
      question: "Melyik elemzés alkalmas a baktériumok evolúciós kapcsolatainak (törzsfa) ábrázolására?",
      options: ["Súlyméret", "Filogenetikai fa (phylogeny)", "Létszámellenőrzés", "Hőmérsékletmérés"],
      correctAnswer: 1,
      explanation: "A genom-szintű különbségek alapján felállítható a baktériumok leszármazási rendje."
    },
    {
      id: "wgs_19",
      topic: "WGS",
      type: "mcq",
      question: "Milyen mintából indul ki a 'metagenomikai' WGS?",
      options: [
        "Tiszta baktériumtenyészetből",
        "Közvetlen környezeti vagy klinikai mintából (pl. bélsár, víz, váladék), ami sokféle mikrobát tartalmaz",
        "Csak vérből",
        "Csak vízből"
      ],
      correctAnswer: 1,
      explanation: "A metagenomika a teljes mikrobiális közösséget vizsgálja egyszerre, tenyésztés nélkül."
    },
    {
      id: "wgs_20",
      topic: "WGS",
      type: "bool",
      question: "A WGS technológia ára az elmúlt évtizedben drasztikusan csökkent.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Ez tette lehetővé a módszer bevezetését a rutin diagnosztikába."
    },
    {
      id: "wgs_21",
      topic: "WGS",
      type: "mcq",
      question: "Mi a 'contig' a bioinformatikában?",
      options: [
        "Egy fajta baktérium",
        "Összefüggő DNS szakasz, amelyet a rövid olvasatokból (reads) illesztettek össze",
        "Egy vegyszer",
        "A gép egyik alkatrésze"
      ],
      correctAnswer: 1,
      explanation: "A contig-ok a szekvenált darabkákból összeállított hosszabb egységek."
    },
    {
      id: "wgs_22",
      topic: "WGS",
      type: "mcq",
      question: "Melyik állítás igaz a 'Sanger szekvenálásra'?",
      options: [
        "Ez a legmodernebb technológia",
        "Régi, megbízható módszer egyedi DNS szakaszok leolvasására, de nem alkalmas teljes genomra ilyen léptékben",
        "Csak állatokon működik",
        "Nem használják már"
      ],
      correctAnswer: 1,
      explanation: "Az első generációs szekvenálás ma is hasznos kisebb feladatokra, de a WGS-t a NGS (Next Gen) végzi."
    },
    {
      id: "wgs_23",
      topic: "WGS",
      type: "mcq",
      question: "Mit jelent a 'virulom' kifejezés?",
      options: [
        "A baktérium összes vírusa",
        "A baktérium virulenciagénjeinek (toxinok, tapadás, vasfelvétel) összessége",
        "A baktérium súlya",
        "A baktérium színe"
      ],
      correctAnswer: 1,
      explanation: "WGS-sel a rezisztenciagének mellett a kórfolyamatot segítő géneket is látjuk."
    },
    {
      id: "wgs_24",
      topic: "WGS",
      type: "mcq",
      question: "Melyik nemzetközi hálózat foglalkozik az élelmiszereredetű járványok WGS alapú nyomon követésével?",
      options: ["Interpol", "PulseNet", "UNICEF", "Greenpeace"],
      correctAnswer: 1,
      explanation: "A PulseNet International a WGS segítségével azonosítja az összetartozó fertőzéses eseteket."
    },
    {
      id: "wgs_25",
      topic: "WGS",
      type: "mcq",
      question: "Mi a legnagyobb informatikai kihívás a WGS-nél?",
      options: [
        "A gép bekapcsolása",
        "A hatalmas adatmennyiség tárolása, feldolgozása és értelmezése",
        "A képernyő fényereje",
        "Nincs kihívás"
      ],
      correctAnswer: 1,
      explanation: "A bioinformatika ma már az egész folyamat legidő- és erőforrás-igényesebb része."
    },
    {
      id: "wgs_26",
      topic: "WGS",
      type: "mcq",
      question: "Mit jelent a 'Next-Generation Sequencing' (NGS) kifejezés?",
      options: [
        "A jövő héten induló szekvenálás",
        "Nagy áteresztőképességű, párhuzamosított szekvenálási technológiák gyűjtőneve",
        "Csak a vírusok vizsgálata",
        "Egy újfajta mikroszkóp"
      ],
      correctAnswer: 1,
      explanation: "Az NGS (vagy második/harmadik generációs szekvenálás) tette lehetővé a teljes genomok olcsó és gyors meghatározását."
    },
    {
      id: "wgs_27",
      topic: "WGS",
      type: "mcq",
      question: "Melyik lépés előzi meg közvetlenül a szekvenálást a munkafolyamatban?",
      options: ["Adatbázis keresés", "Library preparation (könyvtárkészítés)", "SNP elemzés", "Filogenetikai fa rajzolás"],
      correctAnswer: 1,
      explanation: "A DNS-t darabolni kell és adapterekkel kell ellátni, mielőtt a gépbe kerül."
    },
    {
      id: "wgs_28",
      topic: "WGS",
      type: "bool",
      question: "A WGS képes kimutatni a pontmutációkat a rezisztenciáért felelős génekben.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. A WGS nukleotid-szintű felbontást ad, így a legkisebb változások is láthatók."
    },
    {
      id: "wgs_29",
      topic: "WGS",
      type: "mcq",
      question: "Milyen előnye van a 'Nanopore' szekvenálásnak a terepen?",
      options: [
        "Nagyon nehéz a gép",
        "Hordozható, kisméretű és valós időben ad eredményt",
        "Csak laborban működik",
        "Nem kell hozzá DNS"
      ],
      correctAnswer: 1,
      explanation: "A MinION eszköz akár egy USB-portról is működtethető, így bárhol bevethető."
    },
    {
      id: "wgs_30",
      topic: "WGS",
      type: "mcq",
      question: "Mi a 'reference genome' szerepe a mapping során?",
      options: [
        "A baktérium fényképe",
        "Egy jól ismert, korábban összeszerelt genom, amihez a nyers olvasatokat hasonlítjuk",
        "A baktérium tápláléka",
        "Nincs szerepe"
      ],
      correctAnswer: 1,
      explanation: "A referenciához való illesztés gyorsabb és pontosabb elemzést tesz lehetővé."
    },
    {
      id: "wgs_31",
      topic: "WGS",
      type: "mcq",
      question: "Mit jelent a 'phred score' a szekvenálási adatoknál?",
      options: [
        "A baktérium súlya",
        "A bázismeghatározás minőségét/megbízhatóságát jelző pontszám",
        "A gép hőmérséklete",
        "A kutató neve"
      ],
      correctAnswer: 1,
      explanation: "A Phred score (pl. Q30) megadja, mekkora az esélye annak, hogy a gép tévesen azonosított egy bázist."
    },
    {
      id: "wgs_32",
      topic: "WGS",
      type: "mcq",
      question: "Melyik központ kezeli a globális szekvencia-adatbázisokat (pl. GenBank)?",
      options: ["WHO", "NCBI", "FBI", "UNESCO"],
      correctAnswer: 1,
      explanation: "A National Center for Biotechnology Information (NCBI) az egyik legfontosabb adattár világszerte."
    },
    {
      id: "wgs_33",
      topic: "WGS",
      type: "bool",
      question: "A WGS adatok alapján megállapítható, hogy egy fertőzés kórházi eredetű-e.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. A nagyfokú rokonság (kevés SNP különbség) bizonyítja a közös forrást."
    },
    {
      id: "wgs_34",
      topic: "WGS",
      type: "mcq",
      question: "Mit jelent a 'pan-genom' fogalma?",
      options: [
        "Egy faj összes törzsében megtalálható összes gén összessége",
        "A legkisebb baktérium génje",
        "Egyetlen sejt DNS-e",
        "Nincs ilyen"
      ],
      correctAnswer: 0,
      explanation: "A pan-genom tartalmazza a közös 'core' géneket és a törzsspecifikus 'accessory' géneket is."
    },
    {
      id: "wgs_35",
      topic: "WGS",
      type: "mcq",
      question: "Mi a 'scaffold' a genom-összeszerelés során?",
      options: [
        "A baktérium váza",
        "Contig-ok csoportja, amelyeknek ismert az egymáshoz viszonyított iránya és távolsága",
        "A gép tartója",
        "Egyfajta enzim"
      ],
      correctAnswer: 1,
      explanation: "A scaffold-ok segítenek a genom nagyobb egységeinek összerakásában."
    },
    {
      id: "wgs_36",
      topic: "WGS",
      type: "mcq",
      question: "Melyik technológia használ 'szekvenálás szintézissel' (sequencing by synthesis) elvet?",
      options: ["Nanopore", "Illumina", "Sanger", "Mikroszkópia"],
      correctAnswer: 1,
      explanation: "Az Illumina technológia során a DNS-szál építése közben olvassuk le a beépülő fluoreszcens bázisokat."
    },
    {
      id: "wgs_37",
      topic: "WGS",
      type: "bool",
      question: "A WGS alkalmas a baktériumok szerotipizálására is (in silico serotyping).",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. A genetikai adatokból következtetni lehet a felszíni antigénekre, kiváltva a lassú laboratóriumi teszteket."
    },
    {
      id: "wgs_38",
      topic: "WGS",
      type: "mcq",
      question: "Melyik bioinformatikai eszköz ismert a rezisztenciagének gyors kereséséről?",
      options: ["Facebook", "ResFinder", "Photoshop", "Excel"],
      correctAnswer: 1,
      explanation: "A ResFinder egy standardizált eszköz az AMR gének azonosítására."
    },
    {
      id: "wgs_39",
      topic: "WGS",
      type: "mcq",
      question: "Mit jelent a 'SNP' (Single Nucleotide Polymorphism)?",
      options: [
        "Szuper Nagy Probléma",
        "Egyetlen bázis eltérése a DNS-szekvenciában",
        "Egy új baktérium neve",
        "Szekvenálási hiba"
      ],
      correctAnswer: 1,
      explanation: "Az SNP-k elemzése a legpontosabb módszer a törzsek közötti apró különbségek kimutatására."
    },
    {
      id: "wgs_40",
      topic: "WGS",
      type: "mcq",
      question: "Melyik állítás igaz a 'long-read' technológiákra?",
      options: [
        "Pontatlanabbak, mint a short-read, de segítenek a genom szerkezetének (pl. plazmidok) tisztázásában",
        "Sosem használják őket",
        "Csak vírusokra jók",
        "Nagyon olcsók"
      ],
      correctAnswer: 0,
      explanation: "A hosszú olvasatokkal áthidalhatók az ismétlődő régiók, így teljes, zárt genomot kaphatunk."
    },
    {
      id: "wgs_41",
      topic: "WGS",
      type: "bool",
      question: "A metagenomika lehetővé teszi az antibiotikum-maradványok közvetlen kimutatását a vízből.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis. A metagenomika a DNS-t (géneket) mutatja ki, nem a kémiai vegyületeket."
    },
    {
      id: "wgs_42",
      topic: "WGS",
      type: "mcq",
      question: "Melyik szektorban használják a LEGTÖBB WGS-t jelenleg?",
      options: [
        "Közegészségügyi és élelmiszer-biztonsági surveillance",
        "Autógyártás",
        "Divatipar",
        "Építőipar"
      ],
      correctAnswer: 0,
      explanation: "A járványok nyomon követése és az AMR monitorozás a fő alkalmazási terület."
    },
    {
      id: "wgs_43",
      topic: "WGS",
      type: "mcq",
      question: "Mit jelent az 'annotation' (annotáció) a genomanalízisben?",
      options: [
        "A DNS kidobása",
        "A gének helyének és funkciójának meghatározása a szekvenciában",
        "A baktérium elnevezése",
        "A gép tisztítása"
      ],
      correctAnswer: 1,
      explanation: "Annotáció során szoftverek keresik meg a kódoló régiókat és rendelik hozzájuk a funkciókat."
    },
    {
      id: "wgs_44",
      topic: "WGS",
      type: "mcq",
      question: "Milyen adatot NEM kapunk meg a hagyományos WGS-sel?",
      options: [
        "A rezisztenciagének listáját",
        "A baktérium pontos faját",
        "A baktérium aktuális anyagcsere-állapotát (mire használja éppen a géneket)",
        "A filogenetikai helyzetet"
      ],
      correctAnswer: 2,
      explanation: "A WGS a lehetőségeket (genom) mutatja meg; a tényleges működéshez transzkriptomika vagy proteomika kell."
    },
    {
      id: "wgs_45",
      topic: "WGS",
      type: "bool",
      question: "A WGS adatok felhasználhatók új vakcinák tervezéséhez (reverse vaccinology).",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. A genomból azonosíthatók azok a fehérjék, amelyek jó antigének lehetnek."
    },
    {
      id: "wgs_46",
      topic: "WGS",
      type: "mcq",
      question: "Mit jelent a 'hybrid assembly'?",
      options: [
        "Két baktérium összeolvadása",
        "Short-read (pontos) és long-read (szerkezeti) adatok együttes használata a genom összerakásához",
        "Vegyes táptalaj",
        "Nincs ilyen"
      ],
      correctAnswer: 1,
      explanation: "Ez a módszer adja a legjobb minőségű, teljes baktériumgenomokat."
    },
    {
      id: "wgs_47",
      topic: "WGS",
      type: "mcq",
      question: "Melyik technológia méri az elektromos áram változását, ahogy a DNS áthalad egy póruson?",
      options: ["Illumina", "Oxford Nanopore", "Sanger", "PCR"],
      correctAnswer: 1,
      explanation: "Ez a Nanopore technológia alapelve."
    },
    {
      id: "wgs_48",
      topic: "WGS",
      type: "mcq",
      question: "Mi a 'One Health WGS' célja?",
      options: [
        "Csak az emberek gyógyítása",
        "Összekapcsolni az emberi, állati és környezeti szekvencia-adatokat a terjedés megértéséhez",
        "Egyetlen géppel szekvenálni mindent",
        "Drágítani a vizsgálatokat"
      ],
      correctAnswer: 1,
      explanation: "A közös adatbázisok segítenek látni a rezisztencia vándorlását a szektorok között."
    },
    {
      id: "wgs_49",
      topic: "WGS",
      type: "bool",
      question: "A WGS-sel végzett rezisztencia-jóslás minden baktériumfajnál ugyanolyan megbízható.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis. Egyes fajoknál (pl. E. coli, Staph) kiváló, másoknál (pl. Pseudomonas) a komplex szabályozás miatt nehezebb."
    },
    {
      id: "wgs_50",
      topic: "WGS",
      type: "mcq",
      question: "Melyik eszköz alkalmas a 'FASTQ' fájlok elemzésére?",
      options: ["Zenelejátszó", "Bioinformatikai pipeline-ok (pl. Galaxy, BWA, SPAdes)", "Számológép", "Térkép"],
      correctAnswer: 1,
      explanation: "Speciális algoritmusok kellenek a milliárdnyi rövid szekvencia feldolgozásához."
    }
  ]
};
