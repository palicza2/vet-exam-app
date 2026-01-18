export const brachyspiraData = {
  id: "brachyspira",
  title: "10. Brachyspira fertőzések",
  studyMaterial: [
    {
      "title": "1. Kóroktan és Taxonómia",
      "icon": "microscope",
      "color": "bg-blue-50 border-blue-200",
      "iconColor": "text-blue-500",
      "sections": [
        {
          "header": "1.1. Erősen β-hemolizáló fajok (Sertésdizentéria)",
          "points": [
            "**Brachyspira hyodysenteriae:** A klasszikus sertésdizentéria kórokozója",
            "**B. hampsonii:** Újabb, hasonló tüneteket okozó faj",
            "Súlyos, nyálkás-véres vastagbélgyulladást okoznak"
          ]
        },
        {
          "header": "1.2. Gyengén β-hemolizáló fajok (Intestinalis spirochaetosis)",
          "points": [
            "**Brachyspira pilosicoli:** Enyhébb lefolyású vastagbélgyulladás",
            "**B. innocens, B. intermedia:** Alacsony patogenitásúak, gyakran kommensálisok"
          ]
        }
      ]
    },
    {
      "title": "2. Sertésdizentéria (B. hyodysenteriae)",
      "icon": "alert-triangle",
      "color": "bg-orange-50 border-orange-200",
      "iconColor": "text-orange-500",
      "sections": [
        {
          "header": "2.1. Terjedés és Patogenezis",
          "points": [
            "Fekál-orális út; tünetmentes hordozókkal hurcolják be",
            "Hűvös, nedves helyen (trágya) hónapokig túlél",
            "**Helyszín:** Kizárólag a **vastagbél** (nem jut túl a bélfalon!)",
            "**Hatás:** Hemolizin toxinok károsítják a hámot és a kapillárisokat → fokozott nyáktermelés és vérzés"
          ]
        },
        {
          "header": "2.2. Klinikai tünetek",
          "points": [
            "Lappangás: 5–10 nap; leginkább a 6–16 hetes süldőket érinti",
            "**Tünet:** Bőséges, **nyálkás-véres**, bűzös hasmenés",
            "Gyors lesoványodás, fokozott szomjúság",
            "Mortalitás: 5–15% (kezeletlenül akár 30%)"
          ]
        },
        {
          "header": "2.3. Kórbonctan",
          "points": [
            "Elváltozás csak a vastagbélben!",
            "Béltartalom: nyálkás, véres ('**vörösbor seprője**' lelet)",
            "Nyálkahártya: vérbő, álhártyás gyulladás (fibrines felrakódás)"
          ]
        }
      ]
    },
    {
      "title": "3. Spirochaetás colitis (B. pilosicoli)",
      "icon": "book",
      "color": "bg-gray-50 border-gray-200",
      "iconColor": "text-gray-500",
      "sections": [
        {
          "header": "3.1. Jellemzők",
          "points": [
            "Enyhébb kórkép, 8–12 hetes malacokban",
            "**Tünet:** Pépes, nyálkás, de **többnyire nem véres** hasmenés",
            "Fő kár: lassabb gyarapodás, termeléscsökkenés"
          ]
        }
      ]
    },
    {
      "title": "4. Diagnosztika és Terápia",
      "icon": "search",
      "color": "bg-slate-50 border-slate-200",
      "iconColor": "text-slate-500",
      "sections": [
        {
          "header": "4.1. Diagnózis",
          "points": [
            "Anaerob tenyésztés (4–6 nap)",
            "**PCR:** Fajspecifikus gének és virulenciafaktorok kimutatása (legfontosabb módszer!)"
          ]
        },
        {
          "header": "4.2. Kezelés",
          "points": [
            "**Leghatékonyabb:** Pleuromutilinok (**Tiamulin**, Valnemulin)",
            "**Alternatíva:** Lincomycin, Tilvalozin",
            "Vakcinázás jelenleg nem áll rendelkezésre!"
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "brach_1",
      topic: "Brachyspira",
      type: "mcq",
      question: "Melyik Brachyspira faj a klasszikus sertésdizentéria kórokozója?",
      options: ["B. pilosicoli", "B. hyodysenteriae", "B. innocens", "B. murdochii"],
      correctAnswer: 1,
      explanation: "A Brachyspira hyodysenteriae okozza a súlyos, nyálkás-véres vastagbélgyulladást."
    },
    {
      id: "brach_2",
      topic: "Brachyspira",
      type: "mcq",
      question: "Melyik bélszakaszra korlátozódik a dizentéria kórbonctani elváltozása?",
      options: ["Vékonybél", "Gyomor", "Vastagbél (colon, coecum)", "Nyelőcső"],
      correctAnswer: 2,
      explanation: "A dizentéria kizárólag a vastagbelet érinti, a vékonybélben nincs elváltozás."
    },
    {
      id: "brach_3",
      topic: "Brachyspira",
      type: "mcq",
      question: "Mi a jellemző hasonlat a dizentériás béltartalomra?",
      options: ["Vulkán lézió", "Vörösbor seprője", "Tejfehér nyirokér", "Gombos fekély"],
      correctAnswer: 1,
      explanation: "A nyálkás, véres, bűzös béltartalom hasonlít a vörösbor seprőjére."
    },
    {
      id: "brach_4",
      topic: "Brachyspira",
      type: "mcq",
      question: "Milyen jellegű a hasmenés B. pilosicoli fertőzés (spirochaetás colitis) esetén?",
      options: ["Hemorrágiás (véres)", "Pépes, nyálkás, többnyire nem véres", "Vízszerű", "Nincs hasmenés"],
      correctAnswer: 1,
      explanation: "A B. pilosicoli enyhébb kórképet okoz, ahol a vérzés ritka."
    },
    {
      id: "brach_5",
      topic: "Brachyspira",
      type: "mcq",
      question: "Melyik antibiotikum-csoport a leghatékonyabb a Brachyspirák ellen?",
      options: ["Penicillinek", "Pleuromutilinok (pl. tiamulin)", "Aminoglikozidok", "Szulfonamidok"],
      correctAnswer: 1,
      explanation: "A pleuromutilinok (tiamulin, valnemulin) a dizentéria elleni védekezés alapszerei."
    },
    {
      id: "brach_6",
      topic: "Brachyspira",
      type: "mcq",
      question: "Létezik-e jelenleg hatékony vakcina a sertésdizentéria ellen?",
      options: ["Igen, minden telepen használják", "Nem áll rendelkezésre hatékony vakcina", "Csak malacoknak van", "Csak kocáknak van"],
      correctAnswer: 1,
      explanation: "A dizentéria ellen jelenleg a higiénia és a gyógyszeres kezelés a fő fegyver, nincs rutin vakcinázás."
    },
    {
      id: "brach_7",
      topic: "Brachyspira",
      type: "mcq",
      question: "Mennyi ideig maradhat életképes a kórokozó hűvös, nedves trágyában?",
      options: ["1 óráig", "Akár 3 hónapig", "10 évig", "Soha nem marad életben"],
      correctAnswer: 1,
      explanation: "A hűvös, nedves környezet kedvez a Brachyspirák túlélésének."
    },
    {
      id: "brach_8",
      topic: "Brachyspira",
      type: "mcq",
      question: "Mi a dizentéria kórokozóinak jellemzője véres agaron?",
      options: ["Zöldítő hemolízis", "Erős béta-hemolízis", "Nincs hemolízis", "Fekete telepek"],
      correctAnswer: 1,
      explanation: "A patogén Brachyspirák (pl. B. hyodysenteriae) erősen hemolizálnak."
    },
    {
      id: "brach_9",
      topic: "Brachyspira",
      type: "mcq",
      question: "Mit okoznak a hemolizin toxinok a bélfalban?",
      options: ["Csökkentik a nyálkát", "Károsítják a hámot és a kapillárisokat", "Javítják a felszívódást", "Megölik a férgeket"],
      correctAnswer: 1,
      explanation: "A toxinok érkárosító hatása vezet a vérzéshez és a savós-fibrines kiváláshoz."
    },
    {
      id: "brach_10",
      topic: "Brachyspira",
      type: "mcq",
      question: "Melyik állatcsoport a legfogékonyabb a dizentériára?",
      options: ["1-2 napos malacok", "6-16 hetes süldők és hízók", "Öreg kocák", "Csak a kanok"],
      correctAnswer: 1,
      explanation: "A növendék és hízó korosztályban okozza a legnagyobb veszteségeket."
    },
    {
      id: "brach_11",
      topic: "Brachyspira",
      type: "bool",
      question: "A sertésdizentéria kórokozója átjut a véráramba és szeptikémiát okoz.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis, a Brachyspira fertőzés lokális, nem jut túl a bélfalon."
    },
    {
      id: "brach_12",
      topic: "Brachyspira",
      type: "bool",
      question: "A sertésdizentéria gyakran tünetmentes hordozókkal hurcolható be.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, a látszólag egészséges hordozók a legfőbb fertőzőforrások."
    },
    {
      id: "brach_13",
      topic: "Brachyspira",
      type: "mcq",
      question: "Mi jellemző a dizentériás bélsár szagára?",
      options: ["Szaglani sem lehet", "Kifejezetten bűzös", "Ibolya illatú", "Szagtalan"],
      correctAnswer: 1,
      explanation: "A fehérje-elbomlás és a vér miatt jellegzetesen bűzös."
    },
    {
      id: "brach_14",
      topic: "Brachyspira",
      type: "mcq",
      question: "Hogyan segíti az ostor a baktériumot?",
      options: ["Élelmet fog vele", "Segít átjutni a vastag nyálkarétegen", "Csak dísz", "Szeptikémiát okoz vele"],
      correctAnswer: 1,
      explanation: "A dugóhúzó-szerű mozgás és az ostorok segítik a haladást a sűrű nyákban."
    },
    {
      id: "brach_15",
      topic: "Brachyspira",
      type: "mcq",
      question: "Melyik gén biztosítja a Brachyspirák oxigéntoleranciáját?",
      options: ["stx2e", "NADH-oxidáz", "tlyA", "mecA"],
      correctAnswer: 1,
      explanation: "Ez az enzim védi az anaerob baktériumot a kevés oxigéntől a bélfelszínen."
    },
    {
      id: "brach_16",
      topic: "Brachyspira",
      type: "mcq",
      question: "Hány napig tart a dizentéria lappangási ideje?",
      options: ["1-2 óra", "5-10 nap", "1 hónap", "1 év"],
      correctAnswer: 1,
      explanation: "A bejutás után körülbelül egy hét kell a tünetek megjelenéséhez."
    },
    {
      id: "brach_17",
      topic: "Brachyspira",
      type: "mcq",
      question: "Milyen vizit mutat a malac dizentéria esetén?",
      options: ["Nem változik", "Fokozott szomjúság (polidipszia)", "Nem iszik", "Sósat kíván"],
      correctAnswer: 1,
      explanation: "A nagy folyadékveszteség miatt az állatok sokat isznak."
    },
    {
      id: "brach_18",
      topic: "Brachyspira",
      type: "mcq",
      question: "Melyik kórbonctani lelet NEM jellemző dizentériára?",
      options: ["Nyálkás-véres béltartalom", "Vérbő vastagbél-nyálkahártya", "Gombos fekélyek", "Fibrines felrakódás"],
      correctAnswer: 2,
      explanation: "A gombos fekély a szalmonellózis jellemzője, a dizentériánál nincsenek fekélyek."
    },
    {
      id: "brach_19",
      topic: "Brachyspira",
      type: "mcq",
      question: "Melyik állatfaj lehet mechanikus vektora a dizentériának?",
      options: ["Csak a bálna", "Rágcsálók és vadmadarak", "Csak a méhek", "Nincs vektor"],
      correctAnswer: 1,
      explanation: "A patkányok és egerek lábukon vagy bélcsatornájukban is átvihetik a kórokozót."
    },
    {
      id: "brach_20",
      topic: "Brachyspira",
      type: "bool",
      question: "A Brachyspirák Gram-festéssel jól azonosíthatók a bélsárból.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis, mivel vékonyak, Gram-festéssel rosszul látszanak, de ezüstözéssel vagy fáziskontraszttal jobbak."
    },
    {
      id: "brach_21",
      topic: "Brachyspira",
      type: "mcq",
      question: "Mi a 'tlyA' gén szerepe?",
      options: ["Ostorfehérje", "Hemolizin toxin termelése", "Antibiotikum rezisztencia", "Fényképzés"],
      correctAnswer: 1,
      explanation: "A tlyA, tlyB és tlyC gének kódolják a dizentéria baktérium toxinjeit."
    },
    {
      id: "brach_22",
      topic: "Brachyspira",
      type: "mcq",
      question: "Milyen állagú a bélsár a betegség kezdetén?",
      options: ["Azonnal véres", "Lágy, majd pépes, fokozatosan válik nyálkássá", "Kemény golyók", "Nincs"],
      correctAnswer: 1,
      explanation: "A folyamat elején még nem feltétlenül látszik a vérzés."
    },
    {
      id: "brach_23",
      topic: "Brachyspira",
      type: "mcq",
      question: "Melyik diagnosztikai módszer adja a leggyorsabb és legpontosabb eredményt ma?",
      options: ["Csak a szagolás", "PCR", "Tenyésztés 10 napig", "Ízlelés"],
      correctAnswer: 1,
      explanation: "A PCR képes gyorsan és fajspecifikusan kimutatni a Brachyspira DNS-t."
    },
    {
      id: "brach_24",
      topic: "Brachyspira",
      type: "mcq",
      question: "Mit okoz a 'B. suanatina'?",
      options: ["Csak tüsszentést", "Sertésdizentériát (eredetileg vadmadarakból)", "Bőrkiütést", "Semmit"],
      correctAnswer: 1,
      explanation: "Ez egy újabb Brachyspira faj, ami a házisertést is megbetegítheti."
    },
    {
      id: "brach_25",
      topic: "Brachyspira",
      type: "mcq",
      question: "Melyik állítás igaz a dizentéria kezelésére?",
      options: ["Minden antibiotikum jó", "Ivóvízbe vagy takarmányba kevert pleuromutilinokkal 5-7 napig", "Csak vitamin", "Sosem gyógyul meg"],
      correctAnswer: 1,
      explanation: "A csoportos kezelés itatással a leghatékonyabb a járvány megállítására."
    },
    {
      id: "brach_26",
      topic: "Brachyspira",
      type: "mcq",
      question: "Mi a 'dysbacteriosis' szerepe a dizentériában?",
      options: ["Megállítja a betegséget", "Hajlamosít (segíti a Brachyspirák elszaporodását)", "Semleges", "Gyógyít"],
      correctAnswer: 1,
      explanation: "A bélflóra egyensúlyának felborulása szükséges a klinikai tünetek kialakulásához."
    },
    {
      id: "brach_27",
      topic: "Brachyspira",
      type: "mcq",
      question: "Melyik kórbonctani hasonlat igaz a dizentériás vastagbélre?",
      options: ["Locsolótömlő bél", "Álhártyás, fibrines felrakódás (korpaszerű)", "Tiszta fal", "Daganatos csomók"],
      correctAnswer: 1,
      explanation: "A súlyos gyulladás miatt a nyálkahártyát szürkésvörös álhártya fedi."
    },
    {
      id: "brach_28",
      topic: "Brachyspira",
      type: "bool",
      question: "A dizentéria során a malacok láza mindig nagyon magas.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis, a láz nem állandó és nem olyan magas, mint pl. orbánc esetén."
    },
    {
      id: "brach_29",
      topic: "Brachyspira",
      type: "mcq",
      question: "Milyen hatással van a nyári napfény a kórokozóra?",
      options: ["Élteti", "Pár óra alatt elpusztítja", "Sárgává teszi", "Semmi"],
      correctAnswer: 1,
      explanation: "Az UV-sugárzás és a kiszáradás gyorsan végez a Brachyspirákkal."
    },
    {
      id: "brach_30",
      topic: "Brachyspira",
      type: "mcq",
      question: "Milyen táptalajt igényel a tenyésztés?",
      options: ["Aerob", "Szigorúan anaerob", "Csak vizes", "Sós"],
      correctAnswer: 1,
      explanation: "A Brachyspirák csak oxigénmentes környezetben szaporodnak."
    },
    {
      id: "brach_31",
      topic: "Brachyspira",
      type: "mcq",
      question: "Melyik szerv nyirokcsomói maradnak többnyire épek dizentériában?",
      options: ["Lágyéki", "Bélfodri (mesenterialis)", "Nyak", "Csak a tüdőé"],
      correctAnswer: 1,
      explanation: "Mivel a folyamat felületi és lokális, a nyirokcsomók kevésbé érintettek."
    },
    {
      id: "brach_32",
      topic: "Brachyspira",
      type: "mcq",
      question: "Mi a 'B. pilosicoli' speciális megtapadási módja?",
      options: ["Csak úszik", "Sugárirányban tapad a hámhoz (bevonatot képezve)", "Bebújik a sejtbe", "Nem tapad"],
      correctAnswer: 1,
      explanation: "Ez a 'false brush border' (ál-kefeszegély) jelenség."
    },
    {
      id: "brach_33",
      topic: "Brachyspira",
      type: "mcq",
      question: "Melyik kiegészítő antibiotikum használható még dizentéria ellen?",
      options: ["Penicillin", "Lincomycin", "Neomicin", "Sztreptomicin"],
      correctAnswer: 1,
      explanation: "A lincomycin egy régebbi, de bizonyos esetekben még hatékony szer."
    },
    {
      id: "brach_34",
      topic: "Brachyspira",
      type: "mcq",
      question: "Mi a teendő egy erősen fertőzött telepen?",
      options: ["Semmi", "Gyakran csak a felszámolás és újratelepítés hoz mentes állapotot", "Több takarmány", "Zenehallgatás"],
      correctAnswer: 1,
      explanation: "A kórokozó környezeti túlélése miatt a mentesítés nagyon nehéz."
    },
    {
      id: "brach_35",
      topic: "Brachyspira",
      type: "mcq",
      question: "Mit okoz a mikotoxinnal szennyezett takarmány?",
      options: ["Segíti a gyógyulást", "Hajlamosíthat a dizentéria fellángolására", "Megöli a baktériumot", "Semmit"],
      correctAnswer: 1,
      explanation: "A bél immunrendszerének gyengítésével utat nyit a fertőzésnek."
    },
    {
      id: "brach_36",
      topic: "Brachyspira",
      type: "mcq",
      question: "Melyik fimbria receptorai hiányoznak? - Bocsánat, ez E. coli kérdés. Brachyspira kérdés: Melyik korosztály mentes általában a dizentériától?",
      options: ["Sosem mentesek", "Szopós malacok (ritkábban betegszenek meg)", "Hízók", "Nincs ilyen"],
      correctAnswer: 1,
      explanation: "A szopós malacokban a kórkép ritkább, mint süldőkorban."
    },
    {
      id: "brach_37",
      topic: "Brachyspira",
      type: "mcq",
      question: "Mi a 'B. hampsonii' jelentősége?",
      options: ["Gyógyítja a malacot", "Súlyos dizentériát okoz, hasonlóan a B. hyodysenteriae-hoz", "Csak kutyákat fertőz", "Nincs jelentősége"],
      correctAnswer: 1,
      explanation: "Ez egy virulens faj, amit Észak-Amerikában és Európában is azonosítottak."
    },
    {
      id: "brach_38",
      topic: "Brachyspira",
      type: "mcq",
      question: "Mit jelent a 'látens hordozó'?",
      options: ["Beteg és látszik is rajta", "Egészségesnek tűnik, de üríti a kórokozót", "Csak hordozza a táskát", "Soha nem fertőz"],
      correctAnswer: 1,
      explanation: "Ezek az állatok a legveszélyesebbek a behurcolás szempontjából."
    },
    {
      id: "brach_39",
      topic: "Brachyspira",
      type: "mcq",
      question: "Hány fokon marad életben legtovább a baci?",
      options: ["100 fokon", "Hűvösben (pl. 5-10 fokos hígtrágyában)", "50 fokon", "0 fokon azonnal meghal"],
      correctAnswer: 1,
      explanation: "A hideg, nedves közeg konzerválja a Brachyspirákat."
    },
    {
      id: "brach_40",
      topic: "Brachyspira",
      type: "bool",
      question: "A Brachyspira fertőzés ellen a zárt állomány tartása a legjobb védekezés.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, a külső fertőzés behurcolásának minimalizálása a legfontosabb."
    },
    {
      id: "brach_41",
      topic: "Brachyspira",
      type: "mcq",
      question: "Mi a 'B. pilosicoli' okozta kórkép neve?",
      options: ["Sertésdizentéria", "Intestinalis spirochaetosis", "Szalmonellózis", "Lépfene"],
      correctAnswer: 1,
      explanation: "A gyengébb virulenciájú Brachyspirák okozta vastagbélgyulladás neve."
    },
    {
      id: "brach_42",
      topic: "Brachyspira",
      type: "mcq",
      question: "Mi történik a kehelysejtekkel dizentéria során?",
      options: ["Eltűnnek", "Fokozott nyáktermelésre serkentődnek", "Kisebbek lesznek", "Nem változnak"],
      correctAnswer: 1,
      explanation: "A baktérium stimulálja a nyáktermelést, ami kedvez a saját szaporodásának."
    },
    {
      id: "brach_43",
      topic: "Brachyspira",
      type: "mcq",
      question: "Melyik állítás igaz a dizentéria mortalitására?",
      options: ["Mindig 100%", "Változó, de súlyos járványban elérheti a 30%-ot", "Mindig 0%", "Csak 1%"],
      correctAnswer: 1,
      explanation: "A veszteség mértéke a törzs virulenciájától és a kezelés sebességétől függ."
    },
    {
      id: "brach_44",
      topic: "Brachyspira",
      type: "mcq",
      question: "Hogyan néz ki a Brachyspira mikroszkóp alatt?",
      options: ["Gömb", "S alakú vagy spirális pálcika", "Kocka", "Hosszú lánc"],
      correctAnswer: 1,
      explanation: "Jellegzetes hajlott, csavart alakú baktériumok."
    },
    {
      id: "brach_45",
      topic: "Brachyspira",
      type: "mcq",
      question: "Melyik módszerrel tipizálják a Brachyspirákat modern laborokban?",
      options: ["Szaglás", "MALDI-TOF és PCR", "Röntgen", "Csak tenyésztés"],
      correctAnswer: 1,
      explanation: "A tömegspektrometria és a molekuláris biológia a legpontosabb."
    },
    {
      id: "brach_46",
      topic: "Brachyspira",
      type: "mcq",
      question: "Mi a teendő a behozott tenyészállatokkal?",
      options: ["Azonnal betenni a többi közé", "Karanténozni és esetleg szűrővizsgálatokat végezni", "Semmi", "Megfürdetni"],
      correctAnswer: 1,
      explanation: "A karantén megvédi az állományt a behurcolt fertőzésektől."
    },
    {
      id: "brach_47",
      topic: "Brachyspira",
      type: "mcq",
      question: "Mit okoz a 'fibrines álhártya' a bélfalon?",
      options: ["Jobb emésztést", "Bélhám-elhalást jelez és akadályozza a felszívódást", "Sárga színt", "Semmit"],
      correctAnswer: 1,
      explanation: "A gyulladásos izzadmány rárakódik a sérült hámra."
    },
    {
      id: "brach_48",
      topic: "Brachyspira",
      type: "mcq",
      question: "Melyik állatfaj nem fogékony a Brachyspira hyodysenteriae-ra?",
      options: ["Sertés", "Kutya", "Szarvasmarha (rendszerint)", "Ember (rendszerint)"],
      correctAnswer: 3,
      explanation: "A klasszikus sertésdizentéria nem veszélyes az emberre."
    },
    {
      id: "brach_49",
      topic: "Brachyspira",
      type: "mcq",
      question: "Mi a MIC vizsgálat?",
      options: ["Malac Index", "Minimális Gátló Koncentráció (antibiotikum érzékenység mérése)", "Vakcina név", "Új tápszer"],
      correctAnswer: 1,
      explanation: "A rezisztencia mérésére szolgáló laboratóriumi eljárás."
    },
    {
      id: "brach_50",
      topic: "Brachyspira",
      type: "mcq",
      question: "Mi az összefoglaló lényege a Brachyspiráknak?",
      options: ["Nem okoznak bajt", "Vastagbélgyulladást okozó baktériumok, a dizentéria a legsúlyosabb forma", "Csak tüdőgyulladást okoznak", "Könnyen kiirthatók"],
      correctAnswer: 1,
      explanation: "A gazdasági kár a hasmenés és az elhullás miatt jelentős."
    }
  ]
};
