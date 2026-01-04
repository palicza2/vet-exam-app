export const amrMechanismsData = {
  id: "amr_mechanisms",
  title: "18. AMR molekuláris mechanizmusai",
  studyMaterial: [
    {
      title: "1. A Rezisztencia Négy Fő Oszlopa",
      icon: "microscope",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-500",
      sections: [
        {
          header: "Molekuláris stratégiák",
          points: [
            "**Enzimatikus inaktiváció:** A baktérium lebontja vagy módosítja az antibiotikumot.",
            "**Célmolekula módosítása:** Megváltozik a struktúra, amihez az antibiotikum kötődne.",
            "**Csökkent permeabilitás:** A baktérium 'bezárja a kapukat' (porinok csökkentése).",
            "**Efflux pumpák:** A baktérium aktívan kiszivattyúzza a bejutott gyógyszert."
          ]
        }
      ]
    },
    {
      title: "2. Enzimatikus Inaktiváció",
      icon: "bug",
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-500",
      sections: [
        {
          header: "Béta-laktamázok",
          points: [
            "**Penicillinázok:** Csak a korai penicillineket bontják.",
            "**ESBL (Kiterjesztett spektrumú):** Cefalosporinokat is bontanak (pl. CTX-M család).",
            "**Karbapenemázok:** A legvégső tartalék béta-laktámokat is hatástalanítják (pl. NDM, KPC)."
          ]
        },
        {
          header: "Aminoglikozid-módosító enzimek (AME)",
          points: [
            "Kémiai csoportokat (acetil, foszfát, adenil) kapcsolnak a szerhez, így az nem tud a riboszómához kötődni."
          ]
        }
      ]
    },
    {
      title: "3. Célmolekula Módosítás és Védelem",
      icon: "shieldAlert",
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-500",
      sections: [
        {
          header: "Strukturális változások",
          points: [
            "**mecA gén (MRSA):** Egy alternatív PBP2a fehérjét kódol, amihez nem kötődnek a béta-laktámok.",
            "**vanA gén (VRE):** Megváltoztatja a sejtfal prekurzorát (D-Ala-D-Lac), így a vankomicin nem ismeri fel.",
            "**Riboszóma metiláció (erm gének):** A riboszóma módosításával alakul ki az MLS (Makrolid-Linkózamid-Streptogramin) rezisztencia."
          ]
        },
        {
          header: "DNS-szintű védelem",
          points: [
            "**QRDR mutációk:** A DNS-giráz enzim mutációja fluorokinolon rezisztenciát okoz.",
            "**qnr gének:** Olyan fehérjét kódolnak, amely fizikailag védi a DNS-giráz enzimet a kinolonoktól."
          ]
        }
      ]
    },
    {
      title: "4. Transzport-alapú Rezisztencia",
      icon: "activity",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-500",
      sections: [
        {
          header: "Efflux pumpák",
          points: [
            "**RND család:** Komplex, többkomponensű rendszerek Gram-negatívokban (pl. AcrAB-TolC). Széles spektrumúak (több gyógyszercsoportot is ürítenek).",
            "**MFS család:** Egyszerűbb pumpák, gyakran specifikusak (pl. tetraciklin efflux)."
          ]
        },
        {
          header: "Porinok",
          points: [
            "A Gram-negatív baktériumok külső membránjában lévő csatornák száma csökken vagy szerkezetük változik, így a hidrofil szerek (pl. béta-laktámok) bejutása gátolt."
          ]
        }
      ]
    },
    {
      title: "5. Fontos Rezisztenciagének",
      icon: "microscope",
      color: "bg-emerald-50 border-emerald-200",
      iconColor: "text-emerald-500",
      sections: [
        {
          header: "Klinikai jelentőség",
          points: [
            "**blaCTX-M:** A legelterjedtebb ESBL gén plazmidokon.",
            "**mcr-1:** Plazmidon terjedő kolisztin-rezisztencia (nagy veszély!).",
            "**blaNDM-1:** Multirezisztens 'szuperbaktériumok' karbapenemáz génje."
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "mol_1",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Melyik mechanizmus jellemző a béta-laktám rezisztencia legtöbb esetére?",
      options: ["Efflux pumpa", "Enzimatikus inaktiváció (béta-laktamázok)", "DNS mutáció", "Vese kiválasztás"],
      correctAnswer: 1,
      explanation: "A baktériumok leggyakrabban béta-laktamáz enzimek termelésével bontják le ezeket az antibiotikumokat."
    },
    {
      id: "mol_2",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Mit kódol a mecA gén Staphylococcus aureusban?",
      options: ["Egy méreganyagot", "Egy alternatív penicillin-kötő fehérjét (PBP2a)", "Egy porin csatornát", "Egy béta-laktamázt"],
      correctAnswer: 1,
      explanation: "A mecA gén az alacsony affinitású PBP2a fehérjét kódolja, ami rezisztenciát ad szinte minden béta-laktámra."
    },
    {
      id: "mol_3",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Hogyan okoznak rezisztenciát az erm gének?",
      options: ["Lebontják az eritromicint", "Metilálják a riboszómát, megakadályozva a kötődést", "Kiszivattyúzzák a szert", "Gátolják a DNS girázt"],
      correctAnswer: 1,
      explanation: "Az erm (erythromycin ribosomal methylase) gének a riboszóma 50S alegységét módosítják."
    },
    {
      id: "mol_4",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Melyik típusú efflux pumpa okoz leggyakrabban multirezisztenciát Gram-negatívokban?",
      options: ["ABC transzporterek", "RND család (pl. AcrAB-TolC)", "MFS család", "SMR család"],
      correctAnswer: 1,
      explanation: "Az RND család pumpái rendkívül széles szubsztrát-specifitással bírnak, több antibiotikumot is képesek kiüríteni."
    },
    {
      id: "mol_5",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Mit jelent az ESBL rövidítés?",
      options: [
        "Extra Erős Baktericid Lipáz",
        "Kiterjesztett Spektrumú Béta-Laktamáz",
        "Egyszerű Sejtfal Bontó Lipid",
        "Európai Standard Bakteriológiai Lista"
      ],
      correctAnswer: 1,
      explanation: "Extended-Spectrum Beta-Lactamase, amely a 3. generációs cefalosporinokat is bontja."
    },
    {
      id: "mol_6",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Milyen változást okoz a vanA gén az enterococcusokban?",
      options: [
        "Megvastagítja a sejtfalat",
        "D-Ala-D-Ala helyett D-Ala-D-Lac prekurzort hoz létre",
        "Kilyukasztja a membránt",
        "Lebontja a vankomicint"
      ],
      correctAnswer: 1,
      explanation: "A célmolekula (prekurzor) megváltoztatásával a vankomicin nem tud kötődni a sejtfalépítő egységekhez."
    },
    {
      id: "mol_7",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Mi a feladata a qnr fehérjéknek?",
      options: [
        "Antibiotikum lebontás",
        "A DNS-giráz fizikai védelme a kinolonoktól",
        "Porin csatornák elzárása",
        "Bakteriofágok elleni védekezés"
      ],
      correctAnswer: 1,
      explanation: "A qnr fehérjék hozzákötődnek a DNS-girázhoz, megvédve azt a fluorokinolonok hatásától."
    },
    {
      id: "mol_8",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Mi az oka a 'csökkent permeabilitás' miatti rezisztenciának Gram-negatívokban?",
      options: [
        "Túl sok porin fehérje",
        "Porin csatornák elvesztése vagy módosulása",
        "A sejtfal teljes hiánya",
        "A baktérium mozgásképtelensége"
      ],
      correctAnswer: 1,
      explanation: "A porinok hiánya vagy szűkülése megakadályozza az antibiotikum bejutását a periplazmába."
    },
    {
      id: "mol_9",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Melyik gén felelős a plazmidon terjedő kolisztin-rezisztenciáért?",
      options: ["blaCTX-M", "mcr-1", "tetA", "mecA"],
      correctAnswer: 1,
      explanation: "Az mcr-1 gén felfedezése mérföldkő volt, mert a kolisztin-rezisztencia mobilissá vált."
    },
    {
      id: "mol_10",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Melyik csoportba tartoznak az NDM-1 és KPC enzimek?",
      options: ["Tetraciklin-efflux pumpák", "Karbapenemázok", "Folsavszintézis gátlók", "Porin fehérjék"],
      correctAnswer: 1,
      explanation: "Ezek az enzimek a legmodernebb karbapenem antibiotikumokat is képesek lebontani."
    },
    {
      id: "mol_11",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Hogyan módosítják az AME enzimek az aminoglikozidokat?",
      options: [
        "Kilyukasztják őket",
        "Kémiai csoportokat (pl. acetil, foszfát) kapcsolnak hozzájuk",
        "Bázisokat cserélnek bennük",
        "Oxidálják őket"
      ],
      correctAnswer: 1,
      explanation: "Az Aminoglikozid-Módosító Enzimek módosítják a szert, így az nem tud a riboszómához kötődni."
    },
    {
      id: "mol_12",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Mit jelent a 'target protection' (célmolekula védelem)?",
      options: [
        "A baktérium elszalad",
        "Fehérjék akadályozzák meg az antibiotikum kötődését a célponthoz anélkül, hogy a célpont megváltozna",
        "A sejtmembrán megvastagodik",
        "A DNS feltekeredik"
      ],
      correctAnswer: 1,
      explanation: "Például a qnr fehérjék védik a DNS-girázt a kinolonoktól."
    },
    {
      id: "mol_13",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Melyik mechanizmus okozza a tetraciklin-rezisztenciát a tetA gén esetében?",
      options: ["Lebontás", "Efflux (kiszivattyúzás)", "DNS mutáció", "Sejtfal vastagodás"],
      correctAnswer: 1,
      explanation: "A tetA egy specifikus efflux pumpát kódol, ami eltávolítja a tetraciklint a sejtből."
    },
    {
      id: "mol_14",
      topic: "Molekuláris AMR",
      type: "bool",
      question: "A Gram-negatív baktériumok porin csatornáinak elvesztése rezisztenciát okozhat a béta-laktámokra.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Ha az antibiotikum nem tud bejutni a porinokon át, nem éri el a célmolekulát (PBP)."
    },
    {
      id: "mol_15",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Mit jelent a 'kereszt-rezisztencia'?",
      options: [
        "Egyazon mechanizmus több hasonló felépítésű antibiotikum ellen is védelmet nyújt",
        "A baktérium keresztezi a DNS-ét",
        "Két állat fertőzi egymást",
        "Nincs ilyen fogalom"
      ],
      correctAnswer: 0,
      explanation: "Például egy béta-laktamáz több különböző penicillint is hatástalanít."
    },
    {
      id: "mol_16",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Melyik gén okoz kolisztin-rezisztenciát a sejtfal módosításával?",
      options: ["mcr-1", "mecA", "vanA", "ctx-m"],
      correctAnswer: 0,
      explanation: "Az mcr-1 enzim módosítja a lipid-A részt, csökkentve az affinitást a kolisztinhez."
    },
    {
      id: "mol_17",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Hogyan működnek a béta-laktamáz gátlók (pl. klavulánsav)?",
      options: [
        "Megölik a baktériumot",
        "Visszafordíthatatlanul kötődnek a béta-laktamáz enzimhez, így az nem tudja bontani az antibiotikumot",
        "Segítik a sejtosztódást",
        "Roncsolják a DNS-t"
      ],
      correctAnswer: 1,
      explanation: "A gátlók 'öngyilkos szubsztrátok', amelyek hatástalanítják a rezisztencia-enzimet."
    },
    {
      id: "mol_18",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Mit jelent a 'MIC' érték?",
      options: [
        "Maximális Injekciós Csomag",
        "Minimális Gátló Koncentráció",
        "Magyar Immunológiai Centrum",
        "Molekuláris Integrált Ciklus"
      ],
      correctAnswer: 1,
      explanation: "Minimal Inhibitory Concentration: a legkisebb hatóanyag-koncentráció, ami még gátolja a baktérium látható szaporodását."
    },
    {
      id: "mol_19",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Melyik mechanizmus jellemző a fluorokinolon rezisztencia kialakulására?",
      options: [
        "Enzimatikus bontás",
        "DNS-giráz vagy topoizomeráz IV mutációja (QRDR)",
        "Riboszóma metiláció",
        "PBP2a termelés"
      ],
      correctAnswer: 1,
      explanation: "A leggyakoribb mechanizmus a célmolekula (enzim) mutációja a kritikus régiókban."
    },
    {
      id: "mol_20",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Hogyan terjednek leggyakrabban az ESBL gének a törzsek között?",
      options: ["Osztódással", "Konjugatív plazmidok útján", "Vírusokkal", "Széllel"],
      correctAnswer: 1,
      explanation: "Az ESBL (pl. CTX-M) gének rendkívül mobilisak, plazmidokon terjednek horizontálisan."
    },
    {
      id: "mol_21",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Mit jelent az 'ABC transzporter' az efflux rendszereknél?",
      options: [
        "Abcúg baktérium",
        "ATP-Binding Cassette (ATP-t használnak a pumpáláshoz)",
        "Amerikai Baktérium Centrum",
        "Alapvető Biológiai Csatorna"
      ],
      correctAnswer: 1,
      explanation: "Ezek a pumpák az ATP hidrolíziséből nyerik az energiát a gyógyszer kiürítéséhez."
    },
    {
      id: "mol_22",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Mi a különbség a konstitutív és az indukálható rezisztencia között?",
      options: [
        "Nincs különbség",
        "A konstitutív mindig jelen van, az indukálható csak az antibiotikum jelenlétében kapcsol be",
        "A konstitutív csak éjjel hat",
        "Az indukálható örökletes"
      ],
      correctAnswer: 1,
      explanation: "Bizonyos gének (pl. erm) kifejezése csak akkor indul el, ha a baktérium találkozik a szerrel."
    },
    {
      id: "mol_23",
      topic: "Molekuláris AMR",
      type: "bool",
      question: "A béta-laktamáz enzimek a periplazmatikus térben (Gram-negatívoknál) vagy a környezetbe ürítve fejtik ki hatásukat.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Gram-negatívoknál a periplazmában koncentrálódnak, Gram-pozitívoknál gyakran kiürülnek."
    },
    {
      id: "mol_24",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Melyik mechanizmus okozza az MLS rezisztenciát?",
      options: ["PBP módosítás", "23S rRNS metiláció", "DNS giráz gátlás", "Sejtfal lebontás"],
      correctAnswer: 1,
      explanation: "A riboszóma módosítása rezisztenciát ad a Makrolidok, Linkózamidok és Streptograminok ellen is."
    },
    {
      id: "mol_25",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Melyik baktériumnál jelent a LEGNAGYOBB problémát a multirezisztencia (MDR)?",
      options: [
        "Acinetobacter baumannii, Pseudomonas aeruginosa, Klebsiella pneumoniae",
        "Lactobacillus",
        "Bifidobacterium",
        "Bacillus subtilis"
      ],
      correctAnswer: 0,
      explanation: "Ezek a Gram-negatív pálcák (gyakran ESBL vagy karbapenemáz termelők) a legveszélyesebb kórházi mikrobák."
    },
    {
      id: "mol_26",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Melyik gén felelős az MRSA béta-laktám rezisztenciájáért?",
      options: ["mecA", "blaCTX-M", "tetA", "mcr-1"],
      correctAnswer: 0,
      explanation: "A mecA gén kódolja a PBP2a fehérjét, ami nem kötődik a béta-laktámokhoz."
    },
    {
      id: "mol_27",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Mit csinálnak a béta-laktamáz enzimek?",
      options: [
        "Megváltoztatják a riboszómát",
        "Hidrolizálják (felbontják) a béta-laktám gyűrűt",
        "Kiszivattyúzzák az antibiotikumot",
        "Gátolják a DNS girázt"
      ],
      correctAnswer: 1,
      explanation: "A béta-laktám gyűrű felbontásával az antibiotikum elveszíti hatását."
    },
    {
      id: "mol_28",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Mi a jellemzője a 'plazmid-mediált' rezisztenciának?",
      options: [
        "Csak az utódoknak adódik át",
        "Gyorsan terjedhet horizontálisan más baktériumokra is",
        "Mindig gyenge hatású",
        "Csak hidegben működik"
      ],
      correctAnswer: 1,
      explanation: "A plazmidok a horizontális géntranszfer fő eszközei, lehetővé téve a rezisztencia járványszerű terjedését."
    },
    {
      id: "mol_29",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Hogyan okoz rezisztenciát a 'célmolekula módosítása'?",
      options: [
        "A baktérium új célpontot választ",
        "A mutáció megváltoztatja az antibiotikum kötőhelyét, de a sejt funkciója megmarad",
        "A sejt elpusztítja a célmolekulát",
        "Nincs ilyen mechanizmus"
      ],
      correctAnswer: 1,
      explanation: "Például a DNS-giráz mutációja megakadályozza a kinolonok kötődését."
    },
    {
      id: "mol_30",
      topic: "Molekuláris AMR",
      type: "bool",
      question: "Az efflux pumpák egyidejűleg több különböző osztályba tartozó antibiotikumot is kiüríthetnek.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. A multirezisztencia pumpák (pl. AcrAB-TolC) nagyon széles spektrumúak."
    },
    {
      id: "mol_31",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Melyik mechanizmus okozza a vankomicin-rezisztenciát (VRE)?",
      options: [
        "Lebontó enzim",
        "A sejtfal-prekurzor végződésének megváltoztatása (D-Ala-D-Lac)",
        "DNS giráz gátlás",
        "Efflux pumpa"
      ],
      correctAnswer: 1,
      explanation: "A vanA/vanB gének megváltoztatják a peptidoglikán prekurzort, így a vankomicin nem tud kötődni hozzá."
    },
    {
      id: "mol_32",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Melyik szerotípusú béta-laktamáz bontja a 3. generációs cefalosporinokat?",
      options: ["Penicillináz", "ESBL", "Laktáz", "Proteáz"],
      correctAnswer: 1,
      explanation: "Az ESBL (Extended-Spectrum Beta-Lactamase) kiterjesztett spektrummal bír."
    },
    {
      id: "mol_33",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Mit jelent a 'intrinsic' (veleszületett) rezisztencia?",
      options: [
        "A baktérium mutációval szerezte",
        "A faj minden egyedére jellemző természetes tulajdonság (pl. Gram-negatívok és a vancomycin)",
        "Vírusok hozták",
        "Csak laborban létezik"
      ],
      correctAnswer: 1,
      explanation: "Bizonyos baktériumok szerkezetükből adódóan eleve ellenállnak egyes szereknek."
    },
    {
      id: "mol_34",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Hogyan hatnak az aminoglikozid-módosító enzimek (AME)?",
      options: [
        "Megeszik az antibiotikumot",
        "Acetil-, foszfát- vagy adenil-csoportot kapcsolnak a szerhez",
        "Kilyukasztják a membránt",
        "Gátolják a folsavszintézist"
      ],
      correctAnswer: 1,
      explanation: "A módosított antibiotikum nem tud hozzákapcsolódni a 30S riboszómához."
    },
    {
      id: "mol_35",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Melyik gén ismert a 'plazmidon terjedő karbapenem-rezisztenciáról'?",
      options: ["blaNDM-1", "tetA", "mecA", "mcr-1"],
      correctAnswer: 0,
      explanation: "A New Delhi Metallo-beta-lactamase (NDM) az egyik legveszélyesebb rezisztenciagén."
    },
    {
      id: "mol_36",
      topic: "Molekuláris AMR",
      type: "bool",
      question: "A rezisztencia mutációk kialakulása független az antibiotikum jelenlététől (spontán folyamat).",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Az antibiotikum csak kiválogatja (szelektálja) a már meglévő rezisztens mutánsokat."
    },
    {
      id: "mol_37",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Mit jelent a 'co-resistance' (ko-rezisztencia)?",
      options: [
        "Két baktérium barátsága",
        "Több rezisztenciagén fizikai közelsége (pl. egy plazmidon), így együtt szelektálódnak",
        "Gyenge rezisztencia",
        "Ellenállás a hidegnek"
      ],
      correctAnswer: 1,
      explanation: "Ha egy plazmidon van a tetraciklin és a szulfonamid génje, bármelyik szer használata fenntartja mindkét rezisztenciát."
    },
    {
      id: "mol_38",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Melyik mechanizmus okozza a linkomicin-rezisztenciát az erm gének esetében?",
      options: ["Efflux", "Riboszóma metiláció", "Enzimatikus bontás", "Sejtfal vastagodás"],
      correctAnswer: 1,
      explanation: "A riboszóma 50S alegységének módosítása (metilálása) akadályozza a kötődést."
    },
    {
      id: "mol_39",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Mi a feladata a 'transzpozáz' enzimnek?",
      options: [
        "Antibiotikum bontás",
        "Segíti a transzpozonok (ugráló gének) áthelyeződését a genomban",
        "DNS másolás",
        "Energia termelés"
      ],
      correctAnswer: 1,
      explanation: "Ez az enzim végzi a DNS-szakasz kivágását és beillesztését."
    },
    {
      id: "mol_40",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Mit jelent a 'QRDR' rövidítés a kinolon rezisztenciánál?",
      options: [
        "Quick Resistance DNS Region",
        "Quinolone Resistance-Determining Region (a DNS-giráz kritikus része)",
        "Quality Robot DNS Repair",
        "Nincs ilyen"
      ],
      correctAnswer: 1,
      explanation: "Ezen a szakaszon történő mutációk okozzák a leggyakrabban a kinolon-rezisztenciát."
    },
    {
      id: "mol_41",
      topic: "Molekuláris AMR",
      type: "bool",
      question: "Egyes baktériumok képesek 'biofilmet' képezni, ami fizikai védelmet nyújt az antibiotikumok ellen.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. A biofilm mátrix gátolja a gyógyszer bejutását a mélyebb rétegekbe."
    },
    {
      id: "mol_42",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Melyik béta-laktamáz típus bontja a legtöbb fajta béta-laktámot (beleértve a karbapenemeket is)?",
      options: ["A osztályú penicillináz", "Metallo-béta-laktamázok (B osztály)", "C osztályú cefalosporináz", "Nincs ilyen"],
      correctAnswer: 1,
      explanation: "A metallo-enzimek (pl. NDM) rendkívül széles spektrumúak és cink-iont igényelnek a működéshez."
    },
    {
      id: "mol_43",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Mi a 'szuperbaktérium' köznyelvi jelentése?",
      options: [
        "Nagyon nagy baktérium",
        "Multirezisztens (sok antibiotikumnak ellenálló) kórokozó",
        "Hasznos baktérium",
        "Gyorsan mozgó baktérium"
      ],
      correctAnswer: 1,
      explanation: "Olyan törzsek, amelyek ellen alig marad hatékony gyógyszer."
    },
    {
      id: "mol_44",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Melyik mechanizmus jellemző a szulfonamid rezisztenciára?",
      options: [
        "Alternatív dihidropteroát-szintetáz enzim szerzése (sul gének)",
        "DNS giráz mutáció",
        "Riboszóma roncsolás",
        "Efflux pumpa"
      ],
      correctAnswer: 0,
      explanation: "A baktérium egy olyan új enzimet szerez (sul1, sul2), amelyre nem hat a szulfonamid."
    },
    {
      id: "mol_45",
      topic: "Molekuláris AMR",
      type: "bool",
      question: "Az integronok önmagukban nem képesek a sejtek közötti mozgásra (nem mobilisak), de plazmidokon utazhatnak.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Az integronok 'géngyűjtők', de a mozgáshoz plazmidra vagy transzpozonra van szükségük."
    },
    {
      id: "mol_46",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Hogyan befolyásolja a 'porin-csökkenés' a rezisztenciát?",
      options: [
        "Gyorsítja a bejutást",
        "Szűkíti a behatolási kaput a hidrofil antibiotikumok (pl. béta-laktámok) számára",
        "Megöli a baktériumot",
        "Nincs hatása"
      ],
      correctAnswer: 1,
      explanation: "Kevesebb porin csatorna = kevesebb bejutó gyógyszermolekula."
    },
    {
      id: "mol_47",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Melyik technológiával mutatható ki a LEGGYORSABBAN egy ismert rezisztenciagén jelenléte?",
      options: ["Tenyésztés", "PCR", "WGS", "Mikroszkópia"],
      correctAnswer: 1,
      explanation: "A PCR pár óra alatt választ ad egy-egy konkrét gén jelenlétére."
    },
    {
      id: "mol_48",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Mit kódolnak a tet gének?",
      options: ["Toxinokat", "Tetraciklin-rezisztencia mechanizmusokat (gyakran efflux pumpát)", "Tokot", "Csillót"],
      correctAnswer: 1,
      explanation: "A tet gének (pl. tetA, tetB) a leggyakoribb tetraciklin-ellenes védelmi vonalak."
    },
    {
      id: "mol_49",
      topic: "Molekuláris AMR",
      type: "bool",
      question: "A rezisztenciagének 'kazettákba' rendeződése lehetővé teszi több gén együttes átírását.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz. Az integronok egyetlen közös promóterrel működtetik a begyűjtött géneket."
    },
    {
      id: "mol_50",
      topic: "Molekuláris AMR",
      type: "mcq",
      question: "Melyik baktériumfajban fedezték fel először a plazmidon terjedő kolisztin-rezisztenciát (mcr-1)?",
      options: ["E. coli", "Staphylococcus aureus", "Bacillus anthracis", "Streptococcus pyogenes"],
      correctAnswer: 0,
      explanation: "Kínában, sertésekből izolált E. coli törzsekben találták meg először 2015-ben."
    }
  ]
};
