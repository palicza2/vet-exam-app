export const amrOneHealthData = {
  id: "amr_one_health",
  title: "17. AMR jelentősége és One Health",
  studyMaterial: [
    {
      title: "1. Az AMR Globális Jelentősége",
      icon: "alertTriangle",
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-500",
      sections: [
        {
          header: "Egy fenyegető válság",
          points: [
            "Az antimikrobiális rezisztencia (AMR) miatt évente több millió ember halála várható 2050-re (becslés: 10 millió/év).",
            "Veszélyezteti a modern orvosi beavatkozásokat (műtétek, kemoterápia).",
            "Gazdasági hatás: Hatalmas egészségügyi többletköltségek és kieső termelékenység."
          ]
        },
        {
          header: "Állategészségügyi vonatkozások",
          points: [
            "Az állományok kezelhetetlensége miatti veszteségek.",
            "Zoonotikus rezisztens kórokozók (pl. MRSA, Salmonella) átadása az embernek.",
            "Élelmiszerbiztonsági kockázatok a vágóhídi feldolgozás során."
          ]
        }
      ]
    },
    {
      title: "2. A Rezisztencia Kialakulása",
      icon: "bug",
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-500",
      sections: [
        {
          header: "Mechanizmusok",
          points: [
            "**Veleszületett (intrinsic):** A faj természetes adottsága (pl. Mycoplasma és a sejtfalgátlók).",
            "**Szerzett:** Spontán mutáció vagy **horizontális géntranszfer (HGT)** útján.",
            "**HGT formái:** Konjugáció (plazmidok), Transzdukció (bakteriofágok), Transzformáció (szabad DNS felvétele)."
          ]
        },
        {
          header: "Multirezisztencia",
          points: [
            "Több hatóanyagcsoportnak is ellenálló 'szuperbaktériumok' kialakulása.",
            "Integronok szerepe: több rezisztenciagén 'csomagban' való átadása."
          ]
        }
      ]
    },
    {
      title: "3. Környezeti Rezisztom",
      icon: "microscope",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-500",
      sections: [
        {
          header: "A természet, mint rezervoár",
          points: [
            "**Rezisztom:** Az összes létező rezisztenciagén összessége a környezetben.",
            "A környezeti mikrobák természetes módon is termelnek antibiotikumokat (védekezés).",
            "Az emberi tevékenység (szennyvíz, hígtrágya) felgyorsítja ezek mobilizációját."
          ]
        },
        {
          header: "Ko-szelekció",
          points: [
            "A nehézfémekkel vagy fertőtlenítőszerekkel szembeni ellenállás gyakran ugyanazon a plazmidon van, mint az antibiotikum-rezisztencia.",
            "Így a környezeti szennyezés közvetve az AMR terjedését is segíti."
          ]
        }
      ]
    },
    {
      title: "4. One Health (Egy Egészség) Megközelítés",
      icon: "heart",
      color: "bg-emerald-50 border-emerald-200",
      iconColor: "text-emerald-500",
      sections: [
        {
          header: "Alapelv",
          points: [
            "Az ember, az állat és a környezet egészsége elválaszthatatlan egységet alkot.",
            "A rezisztencia elleni küzdelem csak interdiszciplináris (orvos, állatorvos, ökológus) összefogással lehet sikeres."
          ]
        },
        {
          header: "Gyakorlati lépések",
          points: [
            "**Surveillance:** Egységes adatok gyűjtése emberi és állati rezisztenciáról (pl. ECDC, EFSA jelentések).",
            "**Stewardship:** Felelős antibiotikum-használat (csak ha indokolt, megfelelő dózisban).",
            "Szigorúbb szabályozás: Hozamfokozók tilalma, kritikus humán antibiotikumok kivonása az állatgyógyászatból."
          ]
        }
      ]
    },
    {
      title: "5. Stratégiák és Jövő",
      icon: "brain",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-500",
      sections: [
        {
          header: "Alternatívák",
          points: [
            "**Bakteriofág terápia:** Specifikus vírusok használata a baktériumok ellen.",
            "**Vakcinázás:** A fertőzések megelőzése csökkenti az antibiotikum-igényt.",
            "**Gyors diagnosztika:** Point-of-care tesztek a célzottabb kezelés érdekében."
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "amr_1",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Mit jelent a 'One Health' megközelítés?",
      options: [
        "Csak az emberi egészségre koncentrál",
        "Az ember, az állat és a környezet egészségének kölcsönös összefüggését ismeri fel",
        "Kizárólag az állatok gyógyítását jelenti",
        "Egy újfajta antibiotikum neve"
      ],
      correctAnswer: 1,
      explanation: "A One Health szemlélet szerint az emberi, állati és környezeti egészség egységes rendszer."
    },
    {
      id: "amr_2",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Melyik folyamat NEM tartozik a horizontális géntranszfer (HGT) mechanizmusai közé?",
      options: ["Konjugáció", "Transzformáció", "Transzdukció", "Bináris hasadás (osztódás)"],
      correctAnswer: 3,
      explanation: "A bináris hasadás vertikális öröklődés, míg a többi horizontális (egyedek közötti) géntranszfer."
    },
    {
      id: "amr_3",
      topic: "AMR és One Health",
      type: "bool",
      question: "Az Európai Unióban tilos az antibiotikumokat hozamfokozóként alkalmazni.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Az EU 2006-ban betiltotta az antibiotikumok növekedésserkentő célú használatát."
    },
    {
      id: "amr_4",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Mi a 'rezisztom' fogalma?",
      options: [
        "Egy baktérium összes génje",
        "A környezetben jelen lévő összes rezisztenciagén összessége",
        "Az antibiotikumok lebomlási terméke",
        "Egy új diagnosztikai eszköz"
      ],
      correctAnswer: 1,
      explanation: "A rezisztom a környezeti és patogén mikrobákban található összes rezisztenciagént jelenti."
    },
    {
      id: "amr_5",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Mit jelent a 'ko-szelekció' jelensége?",
      options: [
        "Két állat egyszerre betegszik meg",
        "Két különböző antibiotikumot adunk egyszerre",
        "A nehézfém-rezisztencia vagy fertőtlenítőszer-rezisztencia segíti az antibiotikum-rezisztencia megmaradását",
        "A baktériumok együttműködnek a gazdaszervezet ellen"
      ],
      correctAnswer: 2,
      explanation: "Ha a rezisztenciagének egy genetikai elemen vannak, bármelyikre ható szelekciós nyomás megőrzi a többit is."
    },
    {
      id: "amr_6",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Mely szervezetek alkotják az AMR elleni 'Kvartett' együttműködést?",
      options: [
        "WHO, FAO, WOAH, UNEP",
        "CIA, FBI, KGB, MI6",
        "UNESCO, UNICEF, WTO, NATO",
        "Csak a WHO és a FAO"
      ],
      correctAnswer: 0,
      explanation: "A WHO (egészségügy), FAO (mezőgazdaság), WOAH (állategészségügy) és UNEP (környezetvédelem) alkotja."
    },
    {
      id: "amr_7",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Mi a 'stewardship' lényege az antibiotikum-használatban?",
      options: [
        "Minden állatnak adni kell antibiotikumot megelőzésre",
        "Az antibiotikumok felelős, megfontolt és szakszerű alkalmazása",
        "Az antibiotikumok teljes betiltása",
        "Az antibiotikumok árának növelése"
      ],
      correctAnswer: 1,
      explanation: "A stewardship a gyógyszerek optimális kiválasztását, adagolását és alkalmazási időtartamát jelenti."
    },
    {
      id: "amr_8",
      topic: "AMR és One Health",
      type: "bool",
      question: "A rezisztens baktériumok a trágyázott termőföldekről a növényekre is átkerülhetnek.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Az élelmiszerláncban a zöldségek is közvetítői lehetnek a rezisztens mikrobáknak."
    },
    {
      id: "amr_9",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Melyik technológia segítheti a jövőben a célzottabb antibiotikum-használatot?",
      options: ["Hagyományos tenyésztés (3 nap)", "Gyors, point-of-care diagnosztikai tesztek", "Több vitamin adása", "A higiénia elhanyagolása"],
      correctAnswer: 1,
      explanation: "A percek alatt eredményt adó tesztekkel elkerülhető a felesleges, széles spektrumú kezelés."
    },
    {
      id: "amr_10",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Becslések szerint hány ember halhat meg évente AMR következtében 2050-re, ha nem változtatunk?",
      options: ["100 ezer", "1 millió", "10 millió", "1 milliárd"],
      correctAnswer: 2,
      explanation: "A jelenlegi trendek alapján 2050-re évi 10 millió haláleset várható világszerte."
    },
    {
      id: "amr_11",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Melyik állatfajban jelent meg először a mcr-1 kolisztin-rezisztencia gén nagy számban?",
      options: ["Kutya", "Ló", "Sertés (és baromfi)", "Macska"],
      correctAnswer: 2,
      explanation: "A kolisztin mezőgazdasági használata miatt sertésekben és baromfikban mutatták ki először széles körben."
    },
    {
      id: "amr_12",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Mit jelent a 'kritikusan fontos antibiotikum' (CIA) fogalma?",
      options: [
        "Olcsó gyógyszerek",
        "Olyan szerek, amelyek elengedhetetlenek súlyos emberi fertőzések kezeléséhez és nincs alternatívájuk",
        "Csak állatoknak adható szerek",
        "Régi, már nem használt szerek"
      ],
      correctAnswer: 1,
      explanation: "A CIA (Critically Important Antimicrobials) listáját a WHO tartja fenn az emberi élet védelmében."
    },
    {
      id: "amr_13",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Melyik folyamat segíti az AMR gének bejutását az ivóvízbázisokba?",
      options: ["Párolgás", "Szennyvíztisztítás hiányosságai és hígtrágya-kijuttatás", "Esőzés", "Halászat"],
      correctAnswer: 1,
      explanation: "A kezeletlen emberi és állati hulladék az egyik fő útja a rezisztencia környezetbe kerülésének."
    },
    {
      id: "amr_14",
      topic: "AMR és One Health",
      type: "bool",
      question: "A vadon élő állatok (pl. vonuló madarak) is terjeszthetik a rezisztens baktériumokat.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. A vadon élő állatok rezisztencia-rezervoárként és vektorként is működhetnek."
    },
    {
      id: "amr_15",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Mit kódolnak általában a 'kazettás' integronok?",
      options: ["Csak egyféle rezisztenciát", "Gyakran több, különböző osztályba tartozó antibiotikum-rezisztenciát egyszerre", "A baktérium mozgását", "A baktérium színét"],
      correctAnswer: 1,
      explanation: "Az integronok képesek sorba rendezni és egyszerre kifejezni több rezisztenciagént."
    },
    {
      id: "amr_16",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Mi a célja az antibiotikum-fogyasztási adatok gyűjtésének (ESVAC)?",
      options: [
        "Hogy adót vessenek ki rá",
        "A használat és a rezisztencia közötti összefüggések elemzése és a szakpolitikai döntések megalapozása",
        "Hogy reklámozzák a gyógyszereket",
        "Nincs célja"
      ],
      correctAnswer: 1,
      explanation: "Az adatgyűjtés segít látni, hol használnak túl sok vagy nem megfelelő antibiotikumot."
    },
    {
      id: "amr_17",
      topic: "AMR és One Health",
      type: "bool",
      question: "A biológiai biztonság (biosecurity) növelése csökkenti az antibiotikum-használat szükségességét.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Ha kevesebb a fertőzés a telepen, kevesebb gyógyszerre van szükség."
    },
    {
      id: "amr_18",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Melyik állítás igaz a baktériumfágokra?",
      options: [
        "Baktériumokat fertőző vírusok, amelyek alternatívát jelenthetnek az antibiotikumokkal szemben",
        "Apró baktériumok",
        "Antibiotikum-termelő gombák",
        "Emberi sejteket pusztító vírusok"
      ],
      correctAnswer: 0,
      explanation: "A fágterápia a rezisztens baktériumok elleni küzdelem egyik ígéretes iránya."
    },
    {
      id: "amr_19",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Mi a baj az antibiotikumok profilaktikus (megelőző) használatával?",
      options: [
        "Túl drága",
        "Felesleges szelekciós nyomást gyakorol, elősegítve a rezisztencia kialakulását",
        "Megöli az állatot",
        "Semmi baj nincs vele"
      ],
      correctAnswer: 1,
      explanation: "A preventív tömegkezelés a rezisztencia kialakulásának egyik legfőbb hajtóereje."
    },
    {
      id: "amr_20",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Melyik szerotípusú Salmonella ismert kiemelkedő multirezisztenciájáról (pl. DT104)?",
      options: ["S. Enteritidis", "S. Typhimurium", "S. Choleraesuis", "S. Gallinarum"],
      correctAnswer: 1,
      explanation: "A Salmonella Typhimurium bizonyos törzsei (pl. DT104) klasszikus példái a multirezisztenciának."
    },
    {
      id: "amr_21",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Mit jelent a 'metaszelekció' az AMR összefüggésében?",
      options: [
        "Amikor egyetlen antibiotikum több baktériumfajt is rezisztenssé tesz",
        "A baktériumok méretének növekedése",
        "Az antibiotikumok lebomlása",
        "Nincs ilyen fogalom"
      ],
      correctAnswer: 0,
      explanation: "Egyetlen kezelés hatással van a szervezet teljes mikrobiótájára, nem csak a célkórokozóra."
    },
    {
      id: "amr_22",
      topic: "AMR és One Health",
      type: "bool",
      question: "A kutyák és macskák (társállatok) is átadhatnak rezisztens baktériumokat a gazdáiknak.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. A közeli kontaktus miatt a rezisztencia-átvitel lehetősége fennáll."
    },
    {
      id: "amr_23",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Mi a feladata az EFSA-nak az AMR elleni küzdelemben?",
      options: [
        "Gyógyszerek gyártása",
        "Élelmiszerbiztonsági kockázatok értékelése és jelentéstétel a rezisztenciáról",
        "Kórházak irányítása",
        "Állatok oltása"
      ],
      correctAnswer: 1,
      explanation: "Az European Food Safety Authority (EFSA) felügyeli a rezisztenciát az élelmiszerláncban."
    },
    {
      id: "amr_24",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Melyik antibiotikum-használati mód a LEGVESZÉLYESEBB a rezisztencia szempontjából?",
      options: [
        "Egyedi injekciós kezelés",
        "Alacsony dózisú, tartós adagolás a takarmányban/vízben",
        "Rövid, nagy dózisú kúra",
        "Helyi kenőcsös kezelés"
      ],
      correctAnswer: 1,
      explanation: "Az alacsony (szub-inhibitoros) dózisok ideális feltételeket teremtenek a rezisztens mutánsok kiválogatódásához."
    },
    {
      id: "amr_25",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Milyen szerepe van a hígtrágyának az AMR terjedésében?",
      options: [
        "Trágyázza a földet",
        "Antibiotikum-maradványokat és rezisztens baktériumokat juttat ki a környezetbe",
        "Megöli a baktériumokat",
        "Semmilyen szerepe nincs"
      ],
      correctAnswer: 1,
      explanation: "A hígtrágya kijuttatása a rezisztenciagének és mikrobák mobilizációjának egyik legfontosabb útvonala."
    },
    {
      id: "amr_26",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Mit jelent a 'zoonózis' kifejezés?",
      options: [
        "Csak állatokban előforduló betegség",
        "Állatról emberre (és fordítva) terjedő betegség",
        "Növényi betegség",
        "Állatkerti orvoslás"
      ],
      correctAnswer: 1,
      explanation: "A rezisztens baktériumok (pl. Campylobacter, Salmonella) zoonotikus úton kerülhetnek az emberbe."
    },
    {
      id: "amr_27",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Melyik élelmiszer-biztonsági lépés csökkenti az AMR mikrobák átvitelét a konyhában?",
      options: [
        "A hús alapos hőkezelése és a keresztszennyeződés (pl. vágódeszka) elkerülése",
        "Sok fűszer használata",
        "A hús megmosása csapvízzel",
        "A hús lefagyasztása"
      ],
      correctAnswer: 0,
      explanation: "A megfelelő konyhai higiénia és a sütés/főzés elpusztítja a rezisztens baktériumokat is."
    },
    {
      id: "amr_28",
      topic: "AMR és One Health",
      type: "bool",
      question: "Az antibiotikumok túlzott használata az állattenyésztésben közvetlen hatással van az emberi gyógyítás sikerére.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. A közös antibiotikum-osztályok miatti kereszt-rezisztencia veszélyezteti a humán terápiát."
    },
    {
      id: "amr_29",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Mit jelent a 'meta-analízis' a rezisztencia kutatásban?",
      options: [
        "Sok korábbi kutatás adatainak együttes, statisztikai elemzése",
        "Egyetlen baktérium vizsgálata",
        "A levegő elemzése",
        "A talaj mélyfúrása"
      ],
      correctAnswer: 0,
      explanation: "A meta-analízisek segítenek látni a globális trendeket és összefüggéseket."
    },
    {
      id: "amr_30",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Melyik állítás igaz a 'rezisztencia fitnesz-költségére' (fitness cost)?",
      options: [
        "A rezisztens baktériumok mindig erősebbek",
        "A rezisztencia hordozása gyakran lassabb szaporodással vagy gyengébb életképességgel jár antibiotikum-mentes környezetben",
        "A baktériumoknak nem kerül energiába a rezisztencia",
        "A rezisztens baktériumok gyorsabban mozognak"
      ],
      correctAnswer: 1,
      explanation: "Ezért fontos az antibiotikum-nyomás csökkentése: hogy az érzékeny törzsek visszanyerjék az előnyüket."
    },
    {
      id: "amr_31",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Mi a célja az állatgyógyászati receptkötelességnek?",
      options: [
        "Hogy drágább legyen a gyógyszer",
        "Hogy csak szakember (állatorvos) dönthessen az antibiotikum szükségességéről és típusáról",
        "Hogy többet kelljen adminisztrálni",
        "Hogy korlátozzák a gazdák szabadságát"
      ],
      correctAnswer: 1,
      explanation: "A szigorú felügyelet gátat szab a felesleges és szakszerűtlen gyógyszerhasználatnak."
    },
    {
      id: "amr_32",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Melyik hatóság felelős az emberi gyógyszerek és antibiotikumok engedélyezéséért az EU-ban?",
      options: ["EMA (European Medicines Agency)", "EASA", "Europol", "Frontex"],
      correctAnswer: 0,
      explanation: "Az EMA felügyeli a gyógyszerek biztonságát és hatékonyságát, beleértve az állatgyógyászati készítményeket is."
    },
    {
      id: "amr_33",
      topic: "AMR és One Health",
      type: "bool",
      question: "A rezisztenciagének jelenléte természetes jelenség, már az antibiotikumok felfedezése előtt is léteztek a természetben.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. A talajban élő mikrobák évmilliók óta versengenek egymással antibiotikumok és rezisztencia segítségével."
    },
    {
      id: "amr_34",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Milyen hatással van a globális kereskedelem és utazás az AMR-re?",
      options: [
        "Nincs hatással",
        "Segíti a rezisztens törzsek és gének gyors, világméretű elterjedését",
        "Csökkenti a rezisztenciát a keveredés miatt",
        "Csak a vírusokra hat"
      ],
      correctAnswer: 1,
      explanation: "Egy Indiában megjelent rezisztenciagén napok alatt eljuthat Európába az utazók révén."
    },
    {
      id: "amr_35",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Melyik állatcsoport antibiotikum-használatát követi az ESVAC projekt?",
      options: ["Csak a kutyákat", "Élelmiszer-termelő haszonállatokat", "Csak a méheket", "Csak a halakat"],
      correctAnswer: 1,
      explanation: "Az European Surveillance of Veterinary Antimicrobial Consumption (ESVAC) a haszonállatokra fókuszál."
    },
    {
      id: "amr_36",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Mi a 'metagenomika' előnye a rezisztencia-kutatásban?",
      options: [
        "Olcsóbb, mint a PCR",
        "Lehetővé teszi a nem tenyészthető baktériumok rezisztenciagénjeinek vizsgálatát is",
        "Képeket készít a baktériumokról",
        "Megmutatja a baktériumok súlyát"
      ],
      correctAnswer: 1,
      explanation: "A baktériumok nagy része laborban nem tenyészthető, de a DNS-ük metagenomikai módszerrel elemezhető."
    },
    {
      id: "amr_37",
      topic: "AMR és One Health",
      type: "bool",
      question: "Az antibiotikum-rezisztencia elleni küzdelemnek gazdasági vonatkozásai is vannak.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. A hosszabb kórházi kezelések és a munkakiesés hatalmas költséget jelentenek a társadalomnak."
    },
    {
      id: "amr_38",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Mit jelent a 'biosecurity' (biológiai biztonság) egy állattartó telepen?",
      options: [
        "Sok biztonsági őr",
        "Olyan intézkedések összessége, amelyek megakadályozzák a kórokozók bejutását és terjedését (pl. fertőtlenítés, belépési korlátok)",
        "Kamerarendszer",
        "Az állatok megjelölése"
      ],
      correctAnswer: 1,
      explanation: "A jó biológiai biztonság a megelőzés alapja, ami kevesebb antibiotikumot jelent."
    },
    {
      id: "amr_39",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Hogyan segíthetnek a probiotikumok az AMR elleni harcban?",
      options: [
        "Megölik az összes baktériumot",
        "A bélflóra stabilizálásával csökkentik a fertőzések esélyét, így kevesebb gyógyszerre van szükség",
        "Probiotikumokból lesz az antibiotikum",
        "Semmilyen hatásuk nincs"
      ],
      correctAnswer: 1,
      explanation: "A jótékony baktériumok erősítik az immunrendszert és gátolják a kórokozók megtelepedését."
    },
    {
      id: "amr_40",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Melyik nemzetközi nap hívja fel a figyelmet az antibiotikum-rezisztenciára?",
      options: [
        "Víz Világnapja",
        "Európai Antibiotikum Nap (november 18.)",
        "Anyák Napja",
        "Karácsony"
      ],
      correctAnswer: 1,
      explanation: "Ezen a napon és a hozzá kapcsolódó héten világszerte kampányok indulnak a tudatosság növelésére."
    },
    {
      id: "amr_41",
      topic: "AMR és One Health",
      type: "bool",
      question: "A vadon élő halakban is találtak már emberi eredetű rezisztenciagéneket.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. A folyókba és tengerekbe jutó szennyvíz révén a vízi ökoszisztéma is érintetté vált."
    },
    {
      id: "amr_42",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Melyik állítás igaz a 'kritikusan fontos' (CIA) antibiotikumok állategészségügyi használatára?",
      options: [
        "Bármikor szabadon használhatók",
        "Csak szigorú korlátozások mellett, végszükség esetén, diagnosztikai tesztek után alkalmazhatók",
        "Olcsóbbak a többinél",
        "Sosem hatnak az állatokra"
      ],
      correctAnswer: 1,
      explanation: "Ezeket a szereket (pl. 3. generációs cefalosporinok, kinolonok) meg kell őrizni az emberi gyógyítás számára."
    },
    {
      id: "amr_43",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Mi a 'szociális felelősség' szerepe az AMR-ben?",
      options: [
        "Hogy ne dobjunk ki gyógyszert a szemétbe",
        "Hogy az orvos utasításait pontosan betartsuk (dózis, időtartam)",
        "Hogy ne kérjünk feleslegesen antibiotikumot vírusos betegségre",
        "Mindegyik válasz helyes"
      ],
      correctAnswer: 3,
      explanation: "A lakosság tudatossága és felelős viselkedése elengedhetetlen a rezisztencia lassításához."
    },
    {
      id: "amr_44",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Hogyan juthatnak be antibiotikum-maradványok a talajba?",
      options: [
        "Közvetlenül a levegőből",
        "Trágyázással, ha a kezelt állatok ürítik a le nem bomlott hatóanyagot",
        "Az esővízzel",
        "Nincs ilyen"
      ],
      correctAnswer: 1,
      explanation: "Sok antibiotikum jelentős része változatlan formában ürül ki a szervezetből."
    },
    {
      id: "amr_45",
      topic: "AMR és One Health",
      type: "bool",
      question: "Az antibiotikum-rezisztencia csendes világjárványnak (silent pandemic) nevezhető.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Lassan és észrevétlenül terjed, de globális szinten egyre súlyosabb problémát okoz."
    },
    {
      id: "amr_46",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Mit jelent a 'cross-sectoral' együttműködés a One Health-ben?",
      options: [
        "Csak az orvosok beszélgetnek",
        "Különböző szektorok (humán, állat, környezet) szakembereinek közös munkája",
        "Mindenki külön dolgozik",
        "Az állatok és növények keresztezése"
      ],
      correctAnswer: 1,
      explanation: "A komplex problémákat csak az érintett területek együttműködésével lehet megoldani."
    },
    {
      id: "amr_47",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Mi a szerepe a vakcinázásnak az AMR elleni küzdelemben?",
      options: [
        "A vakcinák maguk az antibiotikumok",
        "A megelőzés révén kevesebb állat betegszik meg, így drasztikusan csökken az antibiotikum-igény",
        "A vakcinák elpusztítják a rezisztenciagéneket",
        "Nincs szerepe"
      ],
      correctAnswer: 1,
      explanation: "A hatékony immunizálás a legjobb módja a gyógyszerhasználat minimalizálásának."
    },
    {
      id: "amr_48",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Melyik állítás igaz az antibiotikum-érzékenységi vizsgálatokra?",
      options: [
        "Felesleges időpazarlás",
        "Segítenek a legmegfelelőbb és legszűkebb spektrumú szer kiválasztásában",
        "Csak laborban működnek, a valóságban nem",
        "Minden baktériumra ugyanaz az eredmény"
      ],
      correctAnswer: 1,
      explanation: "A diagnosztika alapú célzott kezelés a stewardship egyik alappillére."
    },
    {
      id: "amr_49",
      topic: "AMR és One Health",
      type: "bool",
      question: "A jövőben az antibiotikumok hatástalanná válhatnak az egyszerűbb műtétek esetén is.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Ha nincs hatékony profilaktikus antibiotikum, a rutinszerű műtétek kockázata óriásira nő."
    },
    {
      id: "amr_50",
      topic: "AMR és One Health",
      type: "mcq",
      question: "Mi az 'állatorvos' legfontosabb feladata a One Health-ben az AMR kapcsán?",
      options: [
        "Minél több gyógyszert eladni",
        "A felelős gyógyszerhasználat felügyelete és a járványvédelem javítása",
        "Csak a háziállatok kezelése",
        "Az adók beszedése"
      ],
      correctAnswer: 1,
      explanation: "Az állatorvosok kulcsszereplői az élelmiszerlánc-biztonságnak és a felelős gyógyszeralkalmazásnak."
    }
  ]
};
