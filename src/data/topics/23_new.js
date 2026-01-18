export const t23_ujgeneracios_szekvenalasi_technologiak_attekintData = {
  "id": "23_ujgeneracios_szekvenalasi_technologiak_attekint",
  "title": "23. Újgenerációs szekvenálási technológiák áttekintése",
  "studyMaterial": [
    {
      "title": "Ion Torrent",
      "icon": "book",
      "color": "bg-indigo-50 border-indigo-200",
      "iconColor": "text-indigo-500",
      "sections": [
        {
          "header": "Általános",
          "points": [
            "A pH-változások detektálásán alapul.",
            "Amikor egy nukleotid beépül a növekvő DNS-szálba, melléktermékként egy proton szabadul fel.",
            "Ezt a pH-változást egy félvezető szenzor detektálja."
          ]
        },
        {
          "header": "Könyvtár-előkészítés és amplifikáció",
          "points": [
            "A könyvtárkészítés után a DNS-fragmenseket mikroszkopikus gyöngyökhöz kötik, majd olaj-víz emulzióban amplifikálják őket.",
            "Minden mikroszkopikus vízcsepp egy reaktorként működik, így a gyöngy felszínét azonos DNS-másolatok milliói borítják be.",
            "A gyöngyöket egy félvezető chipre helyezik, amely ionszelektív szenzorokat tartalmaz és rendkívül érzékeny pH-mérőként funkcionál."
          ]
        },
        {
          "header": "Szekvenálás",
          "points": [
            "A rendszert szekvenciálisan árasztják el a különböző dNTP-kkel.",
            "Ha a nukleotid beépül, H+ szabadul fel, a pH csökken, amit a szenzor feszültségváltozásként érzékel.",
            "A jel nagysága arányos a beépült nukleotidok számával.",
            "Előnyei: legnagyobb előnye a sebesség: mivel nincs szükség lassú optikai képalkotásra, egy futtatás 2-4 óra alatt elkészülhet, ami ideális a sürgősségi klinikai diagnosztikában.",
            "Hátrányai: Pontatlanság a homopolimer régiók (azonos nukleotidok hosszú sorozatai) szekvenálásakor, mivel nehéz megkülönböztetni a 3, 4 vagy 5 azonos nukleotid beépülését. Rövid leolvasási hossz.",
            "III. Harmadik Generációs Technológiák: A Hosszú Leolvasások és a Valós Idejű Analízis",
            "A harmadik generációs technológiák (Long-Read Sequencing) áttörést hoztak a genomikában azzal, hogy képesek hosszú, akár több tízezer vagy százezer bázispáros DNS-molekulák egybefüggő szekvenálására.",
            "Pacific Biosciences (PacBio): Single Molecule Real-Time (SMRT)",
            "A PacBio SMRT szekvenálás egy harmadik generációs, hosszú olvasathosszú szekvenálási technológia, amely egyetlen DNS-molekulát olvas le valós időben."
          ]
        },
        {
          "header": "A módszer lényege",
          "points": [
            "DNS-fragmentumok két végére speciális adaptereket kapcsolnak, így kör alakú DNS-templát jön létre",
            "Ezután egyetlen DNS-polimeráz enzimet egy rendkívül kicsi, nanométeres méretű térbe, az úgynevezett zero-mode waveguide-ba (ZMW) helyeznek.",
            "A ZMW olyan apró „megfigyelőkamra”, amely lehetővé teszi, hogy csak egyetlen DNS-polimeráz működését kövessék nyomon.",
            "Amikor a polimeráz új bázist épít be a DNS-be, rövid fényjel keletkezik, amelyet a ZMW-ben optikailag detektálnak.",
            "Ezekből a fényjelekből a rendszer valós időben állítja össze a DNS szekvenciáját.",
            "A PacBio Sequel II rendszer képes nagyon hosszú DNS-szakaszokat szekvenálni, akár több tízezer bázispár hosszban.",
            "A DNS körkörös szerkezete miatt ugyanazt a szakaszt többször is leolvassa, majd ezekből egy nagyon pontos konszenzus szekvenciát készít (HiFi olvasatok).",
            "Ennek köszönhetően a módszer egyszerre biztosít hosszú olvasathosszt és nagy pontosságot."
          ]
        },
        {
          "header": "A technológia előnye, hogy",
          "points": [
            "hosszú, összefüggő szekvenciákat ad,",
            "nem igényel PCR-amplifikációt,",
            "képes a DNS bizonyos módosításainak (például metiláció) kimutatására."
          ]
        },
        {
          "header": "Hátránya ugyanakkor, hogy",
          "points": [
            "rágább, mint a rövid olvasathosszú módszerek,",
            "jó minőségű, viszonylag nagy mennyiségű kiinduló DNS-t igényel.",
            "Oxford Nanopore Technologies (ONT)",
            "Megközelítése radikálisan eltér minden mástól: nem használ polimerázt a szintézishez, és nem optikai jelet mér.",
            "Harmadik generációs, hosszú olvasathosszú technológia, amely elektromos jelek alapján határozza meg a DNS vagy RNS szekvenciáját."
          ]
        },
        {
          "header": "A módszer lényege",
          "points": [
            "DNS- vagy RNS-molekulát átvezetik egy nanopóruson, amely egy vékony membránban helyezkedik el. A póruson normál esetben ionok áramlanak át, amit a műszer elektromos áramként mér.",
            "Amikor a nukleinsav áthalad a nanopóruson, részben elzárja ezt az ionáramot.",
            "Minden báziskombináció kicsit másképp változtatja meg az áramot, és ezekből az áramváltozásokból a készülék kiszámolja, hogy milyen sorrendben követik egymást a bázisok.",
            "A DNS áthaladását egy speciális fehérje „lassítja”, így a mérés valós időben, folyamatosan történik. A módszer nem igényel PCR-amplifikációt, ezért közvetlenül natív DNS-ből vagy akár RNS-ből is lehet szekvenálni."
          ]
        },
        {
          "header": "A módszer előnyei",
          "points": [
            "rendkívül hosszú olvasathossz,",
            "hordozható eszközök is léteznek,",
            "gyorsan elindítható mérés,",
            "natív DNS és RNS szekvenálása,",
            "DNS-módosítások (pl. metiláció) kimutatása."
          ]
        },
        {
          "header": "Hátrányai",
          "points": [
            "egyetlen olvasat pontossága alacsonyabb, mint az Illumina vagy a PacBio HiFi esetében,",
            "izonyos szekvenciákban (pl. azonos bázisok hosszú ismétlődésekor) több hiba fordulhat elő."
          ]
        }
      ]
    }
  ],
  "questions": [
    {
      "id": "q_23_1",
      "topic": "23_ujgeneracios_szekvenalasi_technologiak_attekint",
      "type": "bool",
      "question": "Igaz-e az állítás: A ZMW olyan apró „megfigyelőkamra”, amely lehetővé teszi, hogy csak egyetlen DNS-polimeráz működését kövessék nyomon.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A ZMW olyan apró „megfigyelőkamra”, amely lehetővé teszi, hogy csak egyetlen DNS-polimeráz működését kövessék nyomon."
    },
    {
      "id": "q_23_2",
      "topic": "23_ujgeneracios_szekvenalasi_technologiak_attekint",
      "type": "bool",
      "question": "Igaz-e az állítás: nem igényel PCR-amplifikációt,",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "nem igényel PCR-amplifikációt,"
    },
    {
      "id": "q_23_3",
      "topic": "23_ujgeneracios_szekvenalasi_technologiak_attekint",
      "type": "bool",
      "question": "Igaz-e az állítás: Megközelítése radikálisan eltér minden mástól: nem használ polimerázt a szintézishez, és nem optikai jelet mér.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "Megközelítése radikálisan eltér minden mástól: nem használ polimerázt a szintézishez, és nem optikai jelet mér."
    },
    {
      "id": "q_23_4",
      "topic": "23_ujgeneracios_szekvenalasi_technologiak_attekint",
      "type": "bool",
      "question": "Igaz-e az állítás: A DNS áthaladását egy speciális fehérje „lassítja”, így a mérés valós időben, folyamatosan történik. A módszer nem igényel PCR-amplifikációt, ezért közvetlenül natív DNS-ből vagy akár RNS-ből is lehet szekvenálni.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A DNS áthaladását egy speciális fehérje „lassítja”, így a mérés valós időben, folyamatosan történik. A módszer nem igényel PCR-amplifikációt, ezért közvetlenül natív DNS-ből vagy akár RNS-ből is lehet szekvenálni."
    }
  ]
};