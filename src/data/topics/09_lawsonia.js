export const lawsoniaData = {
  id: "lawsonia",
  title: "9. Proliferatív enteropátia (Ileitis)",
  studyMaterial: [
    {
      "title": "1. Etiológia és Kórokozó",
      "icon": "microscope",
      "color": "bg-blue-50 border-blue-200",
      "iconColor": "text-blue-500",
      "sections": [
        {
          "header": "1.1. Lawsonia intracellularis",
          "points": [
            "**Obligát intracelluláris** baktérium (csak a gazdasejtben szaporodik)",
            "Gram-negatív, ívelt pálca",
            "Hagyományos táptalajon **nem tenyészthető**, csak sejtkultúrában",
            "Bélsárban 2-3 hétig fertőzőképes marad"
          ]
        }
      ]
    },
    {
      "title": "2. Patomechanizmus",
      "icon": "zap",
      "color": "bg-yellow-50 border-yellow-200",
      "iconColor": "text-yellow-600",
      "sections": [
        {
          "header": "2.1. Mirigyes hiperplázia",
          "points": [
            "A baktérium a vékonybél (**ileum**) kriptáinak éretlen hámsejtjeiben telepszik meg",
            "Serkenti a sejtek osztódását, de gátolja az érésüket",
            "A nyálkahártya megvastagszik, a kehelysejtek eltűnnek",
            "Következmény: **malabszorpciós hasmenés** (felszívódási zavar)"
          ]
        }
      ]
    },
    {
      "title": "3. Klinikai formák",
      "icon": "alert-triangle",
      "color": "bg-orange-50 border-orange-200",
      "iconColor": "text-orange-500",
      "sections": [
        {
          "header": "3.1. Krónikus ileitis (Adenomatosis)",
          "points": [
            "Leggyakoribb forma (6–20 hetes kor között)",
            "**Tünet:** Pépes, félig folyékony hasmenés (emésztetlen takarmánnyal)",
            "**Gazdasági kár:** Romló takarmányhasznosulás, egyenetlen állomány, lesoványodás"
          ]
        },
        {
          "header": "3.2. Heveny vérzéses forma (PHE)",
          "points": [
            "Idősebb hízókban és kocasüldőkben (4–12 hónapos kor)",
            "**Tünet:** Sötétvörös vagy szurokfekete (emésztett vér) hasmenés",
            "Hirtelen elhullás a belső vérzés miatt (mortalitás magas!)"
          ]
        }
      ]
    },
    {
      "title": "4. Kórbonctan",
      "icon": "search",
      "color": "bg-slate-50 border-slate-200",
      "iconColor": "text-slate-500",
      "sections": [
        {
          "header": "4.1. Jellegzetes elváltozások",
          "points": [
            "A bélfal megvastagodott, merev (**locsolótömlő** tapintat - 'hosepipe gut')",
            "A nyálkahártya barázdált, **agyvelőszerű** rajzolatot mutat",
            "PHE esetén a bél lumenében nagy mennyiségű vér található"
          ]
        }
      ]
    },
    {
      "title": "5. Terápia és Megelőzés",
      "icon": "pill",
      "color": "bg-emerald-50 border-emerald-200",
      "iconColor": "text-emerald-500",
      "sections": [
        {
          "header": "5.1. Antibiotikum-kezelés",
          "points": [
            "Csak a sejtbe jól penetráló szerek hatásosak!",
            "**Leghatásosabb:** Pleuromutilinek (**Tiamulin**, Valnemulin) és Makrolidok (**Tilozin**, Tilmikozin)",
            "Penicillinek és aminoglikozidok HATÁSTALANOK!"
          ]
        },
        {
          "header": "5.2. Vakcinázás",
          "points": [
            "**Élő, attenuált orális vakcina:** malacoknak választás környékén (ivóvízben)",
            "Jelentősen javítja a takarmányértékesítést és súlygyarapodást"
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "law_1",
      topic: "Lawsonia",
      type: "mcq",
      question: "Mi a proliferatív enteropátia kórokozója?",
      options: ["Brachyspira hyodysenteriae", "Lawsonia intracellularis", "Salmonella Typhimurium", "E. coli"],
      correctAnswer: 1,
      explanation: "A betegséget a Lawsonia intracellularis nevű obligát intracelluláris baktérium okozza."
    },
    {
      id: "law_2",
      topic: "Lawsonia",
      type: "mcq",
      question: "Hol telepszik meg a baktérium a szervezetben?",
      options: ["Tüdőben", "A vékonybél (ileum) hámkriptáinak osztódó sejtjeiben", "Májban", "Vesében"],
      correctAnswer: 1,
      explanation: "A Lawsonia speciálisan az ileum éretlen hámsejtjeit fertőzi meg."
    },
    {
      id: "law_3",
      topic: "Lawsonia",
      type: "mcq",
      question: "Mit jelent az 'obligát intracelluláris' kifejezés?",
      options: ["Csak levegőn él meg", "Kizárólag az élő gazdasejtek belsejében képes szaporodni", "Csak a bél üregében él", "Spórát képez"],
      correctAnswer: 1,
      explanation: "A Lawsonia nem képes mesterséges táptalajon szaporodni, csak élő sejtekben."
    },
    {
      id: "law_4",
      topic: "Lawsonia",
      type: "mcq",
      question: "Melyik kórbonctani hasonlat jellemző az ileitisre?",
      options: ["Vulkán lézió", "Locsolótömlő-szerű bélfal (hosepipe gut)", "Eper-máj", "Zongorabillentyű-fogak"],
      correctAnswer: 1,
      explanation: "A bélfal extrém megvastagodása és merevsége miatt locsolótömlőhöz hasonlít."
    },
    {
      id: "law_5",
      topic: "Lawsonia",
      type: "mcq",
      question: "Milyen jellegű rajzolat látható a nyálkahártyán?",
      options: ["Sima", "Agyvelőszerűen barázdált", "Pontszerű", "Csíkos"],
      correctAnswer: 1,
      explanation: "A hámsejtek burjánzása (proliferációja) miatt a felület agyvelőhöz hasonlóan redőzött lesz."
    },
    {
      id: "law_6",
      topic: "Lawsonia",
      type: "mcq",
      question: "Melyik antibiotikum csoport hatástalan a Lawsonia ellen?",
      options: ["Pleuromutilinek", "Béta-laktámok (penicillinek)", "Makrolidok", "Tetraciklinek"],
      correctAnswer: 1,
      explanation: "A béta-laktámok nem jutnak be a sejtbe megfelelő koncentrációban, ahol a baktérium él."
    },
    {
      id: "law_7",
      topic: "Lawsonia",
      type: "mcq",
      question: "Milyen típusú hasmenést okoz a krónikus ileitis?",
      options: ["Szekréciós", "Malabszorpciós (felszívódási zavar miatti)", "Csak véres", "Nincs hasmenés"],
      correctAnswer: 1,
      explanation: "A megvastagodott, éretlen hámsejtek nem képesek a tápanyagok felszívására."
    },
    {
      id: "law_8",
      topic: "Lawsonia",
      type: "mcq",
      question: "Hogyan adagolják általában az ileitis elleni vakcinát?",
      options: ["Injekcióban", "Orálisan (szájon át, pl. ivóvízbe keverve)", "Szemcseppként", "Sehogy"],
      correctAnswer: 1,
      explanation: "Az élő vakcinát szájon át adják a helyi immunitás kialakítása érdekében."
    },
    {
      id: "law_9",
      topic: "Lawsonia",
      type: "mcq",
      question: "Melyik kórforma érinti az idősebb kocasüldőket és okozhat hirtelen elhullást?",
      options: ["Intestinális adenomatosis", "Heveny vérzéses enteropátia (PHE)", "Regionális ileitis", "Nekrotizáló enteritis"],
      correctAnswer: 1,
      explanation: "A PHE (Proliferative Haemorrhagic Enteropathy) a Lawsonia-fertőzés akut, vérzéses formája."
    },
    {
      id: "law_10",
      topic: "Lawsonia",
      type: "mcq",
      question: "Melyik antibiotikum hatóanyag az egyik leghatékonyabb az ileitis kezelésére?",
      options: ["Penicillin", "Tiamulin", "Sztreptomicin", "Gentamicin"],
      correctAnswer: 1,
      explanation: "A tiamulin (pleuromutilin) kiválóan felhalmozódik a sejtben és hatékony a Lawsonia ellen."
    },
    {
      id: "law_11",
      topic: "Lawsonia",
      type: "bool",
      question: "A Lawsonia intracellularis Gram-pozitív baktérium.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis, a Lawsonia Gram-negatív."
    },
    {
      id: "law_12",
      topic: "Lawsonia",
      type: "bool",
      question: "A cink-oxid (ZnO) korábban segített visszaszorítani a Lawsoniát is.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, a terápiás dózisú ZnO-nak volt némi gátló hatása, betiltása után több lett az ileitis."
    },
    {
      id: "law_13",
      topic: "Lawsonia",
      type: "mcq",
      question: "Melyik életkorra jellemző a krónikus adenomatosis?",
      options: ["1-3 napos kor", "6-20 hetes növendék/hízó kor", "Csak 2 évesen", "Soha"],
      correctAnswer: 1,
      explanation: "A választás utáni időszak és a hizlalás eleje a legkritikusabb."
    },
    {
      id: "law_14",
      topic: "Lawsonia",
      type: "mcq",
      question: "Mi történik a kehelysejtekkel a fertőzött bélterületen?",
      options: ["Megsokszorozódnak", "Eltűnnek", "Nagyobbak lesznek", "Nem változnak"],
      correctAnswer: 1,
      explanation: "A kóros sejtburjánzás kiszorítja a speciális sejteket, pl. a mucintermelő kehelysejteket is."
    },
    {
      id: "law_15",
      topic: "Lawsonia",
      type: "mcq",
      question: "Milyen színű az ürülék PHE (heveny forma) esetén?",
      options: ["Hófehér", "Sötétvörös vagy szurokfekete (emésztett vér)", "Zöld", "Kék"],
      correctAnswer: 1,
      explanation: "A masszív bélvérzés miatt a bélsár sötétvörös vagy fekete lesz."
    },
    {
      id: "law_16",
      topic: "Lawsonia",
      type: "mcq",
      question: "Hogyan diagnosztizálható a Lawsonia élő állatból legbiztosabban?",
      options: ["Hőmérőzéssel", "Bélsárból végzett PCR vizsgálattal", "Röntgennel", "Szaglás alapján"],
      correctAnswer: 1,
      explanation: "A PCR kimutatja a baktérium DNS-ét a bélsárban."
    },
    {
      id: "law_17",
      topic: "Lawsonia",
      type: "mcq",
      question: "Mit jelent a 'szubklinikai fertőzés'?",
      options: ["Minden állat meghal", "Nincsenek látható tünetek, de romlik a termelés", "Csak a laborban létezik", "Nagyon súlyos tünetek"],
      correctAnswer: 1,
      explanation: "A sertés nem tűnik betegnek, de lassabban hízik és több takarmányt eszik (hordozó)."
    },
    {
      id: "law_18",
      topic: "Lawsonia",
      type: "mcq",
      question: "Melyik makrolid antibiotikum használható PHE esetén injekcióban?",
      options: ["Penicillin", "Tilozin", "Gentamicin", "Neomicin"],
      correctAnswer: 1,
      explanation: "A tilozin injekció gyors segítséget nyújt az akut vérzéses formában."
    },
    {
      id: "law_19",
      topic: "Lawsonia",
      type: "mcq",
      question: "Mi a 'hosepipe gut' magyar megfelelője?",
      options: ["Gumicsizma bél", "Locsolótömlő bél", "Vékony bél", "Zsíros bél"],
      correctAnswer: 1,
      explanation: "A megvastagodott, merev bélfalra utaló szakkifejezés."
    },
    {
      id: "law_20",
      topic: "Lawsonia",
      type: "bool",
      question: "A Lawsonia intracellularis zoonózis (embert is betegít).",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis, a Lawsoniának nincs közegészségügyi jelentősége."
    },
    {
      id: "law_21",
      topic: "Lawsonia",
      type: "mcq",
      question: "Meddig marad fertőzőképes a Lawsonia a bélsárban?",
            options: ["1 óráig", "2-3 hétig", "10 évig", "Soha nem fertőz"],
      correctAnswer: 1,
      explanation: "A környezetben pár hétig képes életben maradni a baktérium."
    },
    {
      id: "law_22",
      topic: "Lawsonia",
      type: "mcq",
      question: "Mi a Lawsonia elleni vakcinázás fő gazdasági előnye?",
      options: ["Szebb lesz a sertés színe", "Javul a takarmányértékesítés és a súlygyarapodás", "Nem kell többet takarítani", "Nincs előnye"],
      correctAnswer: 1,
      explanation: "A bélhám épségének megőrzésével a tápanyagok jobban felszívódnak."
    },
    {
      id: "law_23",
      topic: "Lawsonia",
      type: "mcq",
      question: "Hogyan terjed a fertőzés a telepen belül?",
      options: ["Csak a levegőben", "Fekál-orális úton (bélsárral szennyezett eszközök, alom)", "Csak vérszívókkal", "Sehogy"],
      correctAnswer: 1,
      explanation: "A fertőzött bélsárral való érintkezés a fő terjedési mód."
    },
    {
      id: "law_24",
      topic: "Lawsonia",
      type: "mcq",
      question: "Melyik kórkép nem tartozik az ileitis kórformái közé?",
      options: ["Intestinális adenomatosis", "Sertésorbánc", "Heveny vérzéses enteropátia", "Regionális ileitis"],
      correctAnswer: 1,
      explanation: "A sertésorbáncot egy másik baktérium (Erysipelothrix) okozza."
    },
    {
      id: "law_25",
      topic: "Lawsonia",
      type: "mcq",
      question: "Mit okoz a Lawsonia a kriptasejtekkel?",
      options: ["Elpusztítja őket", "Burjánzásra (proliferációra) készteti őket", "Nem hat rájuk", "Csökkenti a számukat"],
      correctAnswer: 1,
      explanation: "A betegség neve is (proliferatív) a sejtek kóros osztódására utal."
    },
    {
      id: "law_26",
      topic: "Lawsonia",
      type: "mcq",
      question: "Hogyan hat a túl finomra őrölt takarmány az ileitisre?",
      options: ["Gyógyítja", "Hajlamosíthat a kialakulására", "Nincs hatása", "Megállítja"],
      correctAnswer: 1,
      explanation: "A takarmány szerkezete befolyásolja a bélflórát és a Lawsonia kártételét."
    },
    {
      id: "law_27",
      topic: "Lawsonia",
      type: "mcq",
      question: "Milyen állagú a bélsár krónikus ileitis esetén?",
      options: ["Vízszerű", "Pépes vagy félig folyékony (emésztetlen takarmánnyal)", "Kemény golyók", "Nincs"],
      correctAnswer: 1,
      explanation: "A pépes, de nem nyálkás bélsár a malabszorpció jele."
    },
    {
      id: "law_28",
      topic: "Lawsonia",
      type: "bool",
      question: "Az immunrendszer képes legyőzni a Lawsonia fertőzést néhány hét alatt.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, a fertőzés önkorlátozó, és a sertések védettséget szereznek."
    },
    {
      id: "law_29",
      topic: "Lawsonia",
      type: "mcq",
      question: "Melyik sejtbe jut be a Lawsonia a kriptákon belül?",
      options: ["Csak az elhaltakba", "Az osztódó (mitotikus) éretlen hámsejtekbe", "Csak a vörösvértestekbe", "Idegsejtekbe"],
      correctAnswer: 1,
      explanation: "Specifikusan az osztódó fázisban lévő hámsejteket fertőzi meg."
    },
    {
      id: "law_30",
      topic: "Lawsonia",
      type: "mcq",
      question: "Mi a teendő a PHE-ben (akut forma) megbetegedett süldővel?",
      options: ["Kivárni", "Azonnali injekciós antibiotikumos kezelés (pl. tilozin)", "Sok mozgás", "Semmi"],
      correctAnswer: 1,
      explanation: "A gyors beavatkozás nélkül az állat elvérzik a saját bélcsatornájába."
    },
    {
      id: "law_31",
      topic: "Lawsonia",
      type: "mcq",
      question: "Milyen antibiotikum-csoportba tartozik a tiamulin?",
      options: ["Penicillin", "Pleuromutilin", "Aminoglikozid", "Szulfonamid"],
      correctAnswer: 1,
      explanation: "A tiamulin a pleuromutilinek csoportjának legismertebb tagja az állatgyógyászatban."
    },
    {
      id: "law_32",
      topic: "Lawsonia",
      type: "mcq",
      question: "Melyik szerv érintett elsődlegesen az ileitis során?",
      options: ["Gyomor", "Csípőbél (ileum)", "Vese", "Máj"],
      correctAnswer: 1,
      explanation: "Bár a vastagbél eleje is érintett lehet, a fő helyszín az ileum."
    },
    {
      id: "law_33",
      topic: "Lawsonia",
      type: "mcq",
      question: "Hogyan befolyásolja az ileitis az állomány növekedését?",
      options: ["Mindenki egyformán nő", "Egyenlőtlen növekedés és lesoványodott egyedek jelennek meg", "Mindenki gyorsabban hízik", "Nem befolyásolja"],
      correctAnswer: 1,
      explanation: "A különböző mértékű felszívódási zavar miatt szétnő az állomány."
    },
    {
      id: "law_34",
      topic: "Lawsonia",
      type: "mcq",
      question: "Milyen festődésű a Lawsonia?",
      options: ["Gram-pozitív", "Gram-negatív", "Zöld", "Nem festődik"],
      correctAnswer: 1,
      explanation: "Gram-negatív festődésű baktérium."
    },
    {
      id: "law_35",
      topic: "Lawsonia",
      type: "bool",
      question: "A Lawsonia fertőzés megelőzésében a rágcsálóirtás is fontos.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, a rágcsálók hordozhatják és terjeszthetik a baktériumot."
    },
    {
      id: "law_36",
      topic: "Lawsonia",
      type: "mcq",
      question: "Hány hetes korban jelennek meg leggyakrabban a krónikus tünetek?",
      options: ["1 napos", "6-20 hetes", "Csak 1 éves", "Soha"],
      correctAnswer: 1,
      explanation: "Ez a választás utáni növendék- és hízókor."
    },
    {
      id: "law_37",
      topic: "Lawsonia",
      type: "mcq",
      question: "Mi történik a bélfal tapintatával krónikus esetben?",
      options: ["Puhább lesz", "Megkeményedik, merev lesz", "Elfolyik", "Nincs változás"],
      correctAnswer: 1,
      explanation: "A burjánzó hám és a kötőszövet felszaporodása miatt a bélfal merevvé válik."
    },
    {
      id: "law_38",
      topic: "Lawsonia",
      type: "mcq",
      question: "Melyik vizsgálat alkalmas az állomány átfertőzöttségének felmérésére?",
      options: ["Csak a lázmérés", "ELISA (ellenanyag-kimutatás)", "Szemrevételezés", "Nincs ilyen"],
      correctAnswer: 1,
      explanation: "A szerológiai vizsgálattal meghatározható, hogy az állomány találkozott-e már a kórokozóval."
    },
    {
      id: "law_39",
      topic: "Lawsonia",
      type: "mcq",
      question: "Mi a teendő a mosás-fertőtlenítés során?",
      options: ["Csak vízzel leöblíteni", "Alapos mosás után hatékony szerek (pl. jódos vagy kvaterner ammónium) használata", "Semmi", "Befesteni az ólat"],
      correctAnswer: 1,
      explanation: "A higiénia csökkenti a környezeti fertőzési nyomást."
    },
    {
      id: "law_40",
      topic: "Lawsonia",
      type: "bool",
      question: "A Lawsonia intracellularis széles fajspektrummal rendelkezik (más állatokat is fertőz).",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, sertésen kívül lovakban, kutyákban és más fajokban is okozhat betegséget."
    },
    {
      id: "law_41",
      topic: "Lawsonia",
      type: "mcq",
      question: "Mi a 'nekrotizáló enteritis' az ileitis összefüggésében?",
      options: ["Amikor a malac meggyógyul", "Amikor a proliferatív hám elhal és elülne az opportunista baktériumok által", "Egy új betegség", "Sosem fordul elő"],
      correctAnswer: 1,
      explanation: "A károsodott hámfelületen másodlagos baktériumok okoznak mélyebb elhalást."
    },
    {
      id: "law_42",
      topic: "Lawsonia",
      type: "mcq",
      question: "Hogyan hat a vakcinázás a Lawsonia-ürítésre?",
      options: ["Növeli", "Csökkenti az ürítés mértékét és időtartamát", "Nincs hatása", "Megszünteti azonnal"],
      correctAnswer: 1,
      explanation: "Az immunizált állatok kevesebb baktériumot ürítenek a környezetbe."
    },
    {
      id: "law_43",
      topic: "Lawsonia",
      type: "mcq",
      question: "Melyik táptalajon tenyészthető a Lawsonia?",
      options: ["Véres agar", "MacConkey agar", "Csak élő sejttenyészetben", "Bármelyiken"],
      correctAnswer: 2,
      explanation: "Obligát intracelluláris volta miatt csak élő sejtekben szaporodik."
    },
    {
      id: "law_44",
      topic: "Lawsonia",
      type: "mcq",
      question: "Mit okoz a Lawsonia a bélboholy-csúcsokkal?",
      options: ["Nagyobbak lesznek", "Gátolja a sejtek leválását a csúcsról (torlódás)", "Lemosódnak", "Semmit"],
      correctAnswer: 1,
      explanation: "A sejtek nem érnek be és nem válnak le, ami a hám megvastagodásához vezet."
    },
    {
      id: "law_45",
      topic: "Lawsonia",
      type: "mcq",
      question: "Melyik korosztályban a leggyakoribb a PHE (heveny forma)?",
      options: ["Újszülött", "Idősebb hízó és kocasüldő", "Csak az öreg kan", "Nincs ilyen"],
      correctAnswer: 1,
      explanation: "A heveny vérzéses forma az idősebb állatokra jellemző."
    },
    {
      id: "law_46",
      topic: "Lawsonia",
      type: "mcq",
      question: "Milyen kiegészítő takarmányozási tanács van ileitis ellen?",
      options: ["Sok cukor", "Rostban gazdag, mérsékelt energiájú takarmány", "Sok zsír", "Semmi"],
      correctAnswer: 1,
      explanation: "A rostosabb takarmány segíti a bélműködés egyensúlyát."
    },
    {
      id: "law_47",
      topic: "Lawsonia",
      type: "mcq",
      question: "Miért gyanús az ileitis, ha féregtelenített állományban van hasmenés?",
      options: ["Mert a férgek szeretik a Lawsoniát", "Mert így kizárható a parazitás eredetű bélgyulladás", "Nincs összefüggés", "Csak véletlen"],
      correctAnswer: 1,
      explanation: "A paraziták elleni védekezés mellett jelentkező tünetek bakteriális okot sugallnak."
    },
    {
      id: "law_48",
      topic: "Lawsonia",
      type: "mcq",
      question: "Melyik antitest jelenik meg a fertőzés után 2-3 héttel?",
      options: ["Csak az IgE", "IgG (ELISA-val mérhető)", "Nincs ellenanyag", "Csak a hormonok"],
      correctAnswer: 1,
      explanation: "A szerokonverzió (ellenanyag megjelenés) időt igényel a fertőzés után."
    },
    {
      id: "law_49",
      topic: "Lawsonia",
      type: "bool",
      question: "Az ileitis a sertéstelepek döntő többségében jelen van.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, világszerte az egyik legelterjedtebb sertésbetegség."
    },
    {
      id: "law_50",
      topic: "Lawsonia",
      type: "mcq",
      question: "Mi az ileitis összefoglaló lényege?",
      options: ["Nem gyógyítható", "Bélhám-burjánzással járó, gazdaságilag jelentős betegség, vakcinázással jól kontrollálható", "Csak tüdőgyulladást okoz", "Könnyen kiirtható"],
      correctAnswer: 1,
      explanation: "A növekedés-visszaesés miatti kár jelentős, de a védekezés megoldott."
    }
  ]
};
