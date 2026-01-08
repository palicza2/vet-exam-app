// 1. Először definiáljuk az adatokat (latinTerms)
export const latinTerms = [
  {
    term: "Streptococcus suis",
    translation: "Streptococcus suis (baktériumfaj)",
    description: "Gram-pozitív, láncokban elhelyezkedő coccus, fakultatív anaerob, alfa-hemolízist okoz."
  },
  {
    term: "Gram-pozitív",
    translation: "Gram-pozitív (festődési tulajdonság)",
    description: "A Gram-festés során lila színt mutat, vastag peptidoglikán sejtfala van."
  },
  {
    term: "Coccus",
    translation: "Gömb alakú baktérium",
    description: "A baktériumok morfológiai csoportja, melynek tagjai gömb alakúak."
  },
  {
    term: "Fakultatív anaerob",
    translation: "Képes oxigénnel és anélkül is élni",
    description: "Olyan mikroorganizmus, amely mind oxigénes, mind oxigénmentes környezetben képes szaporodni."
  },
  {
    term: "Alfa-hemolízis",
    translation: "Zöldülő hemolízis",
    description: "A vörösvértestek részleges lebontása, mely zöldes elszíneződést okoz a véres agaron."
  },
  {
    term: "Poliszacharid tok (CPS)",
    translation: "Kapszula",
    description: "A baktérium külső rétege, mely poliszacharidokból áll, és fontos virulenciafaktor."
  },
  {
    term: "Szerotípus",
    translation: "Szerológiai típus",
    description: "A baktériumok antigénszerkezete alapján történő csoportosítása."
  },
  {
    term: "Tonsillák",
    translation: "Mandulák",
    description: "A felső légutakban található nyirokszervi képletek."
  },
  {
    term: "Zoonózis",
    translation: "Állatról emberre terjedő betegség",
    description: "Olyan fertőző betegség, amely természetes körülmények között gerinces állatok és ember között terjed."
  },
  {
    term: "Meningitis",
    translation: "Agyhártyagyulladás",
    description: "Az agyat és gerincvelőt borító hártyák (agyburkok) gyulladása."
  },
  {
    term: "Perakut szeptikémia",
    translation: "Hirtelen fellépő, súlyos vérfertőzés",
    description: "Rövid lefolyású, fulmináns szeptikus állapot, gyors elhullással járhat."
  },
  {
    term: "Cianózis",
    translation: "Elkékülés",
    description: "A bőr vagy nyálkahártyák kékes elszíneződése az oxigénhiány miatt."
  },
  {
    term: "Opisthotonus",
    translation: "Hátrahajló fejtartás",
    description: "A tarkó- és hátizmok merevsége miatti hátrahajló testtartás, idegrendszeri tünet."
  },
  {
    term: "Nystagmus",
    translation: "Szemtekerezgés",
    description: "A szemek ritmikus, ismétlődő, akaratlan mozgása."
  },
  {
    term: "Hyperaesthesia",
    translation: "Túlérzékenység",
    description: "Fokozott érzékenység a tapintásra, fájdalomra."
  },
  {
    term: "Arthritis",
    translation: "Ízületgyulladás",
    description: "Az ízületek gyulladása, fájdalommal és duzzanattal jár."
  },
  {
    term: "Kutyaszerű ülés",
    translation: "Kutyaszerű ülés (klinikai tünet)",
    description: "Jellemző testtartás, amikor az állat a hátsó lábaira ül, elülső végtagjait előre nyújtva, ízületi fájdalomra utal."
  },
  {
    term: "Endocarditis",
    translation: "Szívbelhártya-gyulladás",
    description: "A szívbelhártya, különösen a szívbillentyűk gyulladása."
  },
  {
    term: "Veseinfarktus",
    translation: "A vese egy részének elhalása",
    description: "Az artériás vérellátás elégtelensége miatt kialakuló szövetelhalás a vesében."
  },
  {
    term: "Liquor",
    translation: "Agyvíz",
    description: "Az agyat és gerincvelőt körülvevő folyadék (liquor cerebrospinalis)."
  },
  {
    term: "Polyserositis",
    translation: "Több savóshártya gyulladása",
    description: "A mellhártya (pleura), szívburok (pericardium) és/vagy hashártya (peritoneum) együttes gyulladása."
  },
  {
    term: "Antibiogram",
    translation: "Antibiotikum-érzékenységi vizsgálat",
    description: "Laboratóriumi teszt, mely meghatározza, hogy mely antibiotikumok hatékonyak egy adott baktériumtörzs ellen."
  },
  {
    term: "Béta-laktámok",
    translation: "Béta-laktám antibiotikumok",
    description: "Antibiotikum-csoport, melynek tagjai a sejtfalszintézist gátolják (pl. penicillinek, cefalosporinok)."
  },
  {
    term: "Aminopenicillinek",
    translation: "Aminopenicillinek",
    description: "A penicillinek egy csoportja, melyek szélesebb spektrumúak (pl. amoxicillin, ampicillin)."
  },
  {
    term: "Cefalosporinok",
    translation: "Cefalosporinok",
    description: "Antibiotikum-csoport, mely a béta-laktámok közé tartozik, sejtfalszintézist gátol."
  },
  {
    term: "HPCIA",
    translation: "Kritikusan fontos antibiotikum",
    description: "Highly Important Critically Important Antimicrobial - olyan antibiotikumok, melyek az emberi gyógyászatban kiemelt fontosságúak, ezért használatuk korlátozott állatokban."
  },
  {
    term: "Florfenikol",
    translation: "Florfenikol (antibiotikum)",
    description: "Széles spektrumú antibiotikum, mely a fehérjeszintézist gátolja."
  },
  {
    term: "Trimetoprim-szulfonamid",
    translation: "Trimetoprim-szulfonamid (antibiotikum-kombináció)",
    description: "Két szer kombinációja, melyek a folsavszintézis két különböző lépését gátolják, szinergista hatást eredményezve."
  },
  {
    term: "Tetraciklinek",
    translation: "Tetraciklinek (antibiotikum-csoport)",
    description: "Széles spektrumú, bakteriosztatikus antibiotikumok, melyek a fehérjeszintézist gátolják."
  },
  {
    term: "Makrolidok",
    translation: "Makrolidok (antibiotikum-csoport)",
    description: "Antibiotikum-csoport, melyek a fehérjeszintézist gátolják (pl. tilozin, tulatromicin)."
  },
  {
    term: "Linkózamidok",
    translation: "Linkózamidok (antibiotikum-csoport)",
    description: "Antibiotikum-csoport, melyek a fehérjeszintézist gátolják (pl. linkomicin)."
  },
  {
    term: "Multirezisztencia (MDR)",
    translation: "Multirezisztencia",
    description: "Egy baktériumtörzs ellenálló képessége három vagy több különböző antibiotikum-csoporttal szemben."
  },
  {
    term: "Autogén vakcina",
    translation: "Telepspecifikus oltóanyag",
    description: "Egy adott telepről izolált kórokozókból készült vakcina, amely az adott állományban hatékony védelmet nyújt."
  },
  {
    term: "All-in/All-out",
    translation: "Mindent be-mindent ki rendszer",
    description: "Járványvédelmi menedzsment rendszer, ahol egy egységben (pl. fiaztató) egyszerre ürítik és töltik fel az állatokat, majd alaposan fertőtlenítenek."
  },
  {
    term: "PRRS",
    translation: "Sertés reprodukciós és légzőszervi szindróma",
    description: "Vírus okozta betegség sertésekben, mely szaporodási zavarokat és légzőszervi tüneteket okoz, immunszuppresszív hatású."
  },
  {
    term: "PCV2",
    translation: "Sertés circovírus 2. típus",
    description: "Vírusos betegség, mely immunszuppressziót és különböző klinikai tüneteket okoz sertésekben."
  },
  {
    term: "SIV",
    translation: "Sertésinfluenza vírus",
    description: "Influenza vírus, mely légzőszervi betegséget okoz sertésekben."
  },
  {
    term: "PCR",
    translation: "Polimeráz-láncreakció",
    description: "Molekuláris biológiai módszer, mely specifikus DNS szakaszok sokszorosítására szolgál."
  },
  {
    term: "MALDI-TOF MS",
    translation: "Tömegspektrometria",
    description: "Matrix-Assisted Laser Desorption/Ionization Time-of-Flight Mass Spectrometry - fehérjék azonosítására szolgáló gyors analitikai módszer."
  },
  {
    term: "MIC",
    translation: "Minimális Gátló Koncentráció",
    description: "Az antibiotikumnak az a legalacsonyabb koncentrációja, amely még gátolja a baktérium látható szaporodását in vitro."
  },
  {
    term: "Parenterális",
    translation: "Injekciós beadási mód",
    description: "A gyógyszer beadása a tápcsatornát megkerülve (pl. izomba, vénába, bőr alá)."
  },
  {
    term: "Dexametazon",
    translation: "Dexametazon (szteroid gyulladáscsökkentő)",
    description: "Erőteljes gyulladáscsökkentő hatású kortikoszteroid."
  },
  {
    term: "Metafilaxis",
    translation: "Csoportos gyógykezelés",
    description: "Egy adott állatcsoport egyidejű gyógyszeres kezelése, melynek célja a betegség megelőzése vagy terjedésének megállítása az állatok között."
  },
  {
    term: "Dysbacteriosis",
    translation: "Bélflóra egyensúlyának felborulása",
    description: "A bélrendszerben élő mikroorganizmusok összetételének és arányának zavara."
  },
  {
    term: "Exotoxin",
    translation: "Exotoxin",
    description: "Baktériumok által a környezetbe ürített, sejtekre káros hatású méreganyag."
  },
  {
    term: "Endospóra",
    translation: "Endospóra",
    description: "A baktériumok által képzett rendkívül ellenálló, nyugalmi állapotú képlet, mely kedvezőtlen körülmények között védi a sejtet."
  },
  {
    term: "Obligát anaerob",
    translation: "Csak oxigénmentes környezetben él",
    description: "Olyan mikroorganizmus, amely csak oxigén hiányában képes szaporodni és élni."
  },
  {
    term: "Necrosis",
    translation: "Szövetelhalás",
    description: "A sejtek és szövetek irreverzibilis károsodása és elhalása."
  },
  {
    term: "Toxémia",
    translation: "Mérgezés (toxinok a vérben)",
    description: "A vérben keringő toxinok okozta szisztémás megbetegedés."
  },
  {
    term: "Colitis",
    translation: "Vastagbélgyulladás",
    description: "A vastagbél gyulladása."
  },
  {
    term: "Clostridioides difficile",
    translation: "Clostridioides difficile (baktériumfaj)",
    description: "Baktérium, mely antibiotikum-kúra után vastagbélgyulladást (colitist) okozhat."
  },
  {
    term: "Enteritis Necroticans",
    translation: "Elhalásos bélgyulladás",
    description: "A bél súlyos, elhalással járó gyulladása, gyakran Clostridium perfringens C típus okozza."
  },
  {
    term: "Crepitatio",
    translation: "Gázos sercegés/ropogás (tapintáskor)",
    description: "A bőr alatti gázgyülem tapintásakor érezhető jellegzetes ropogó hang."
  },
  {
    term: "Tetanus (Clostridium tetani)",
    translation: "Tetanusz",
    description: "A Clostridium tetani által termelt toxin (tetanospazmin) okozta merevgörcsös bénulás."
  },
  {
    term: "Botulizmus (Clostridium botulinum)",
    translation: "Botulizmus",
    description: "A Clostridium botulinum által termelt toxin (botulinum toxin) okozta petyhüdt bénulással járó mérgezés."
  },
  {
    term: "Intoxikáció",
    translation: "Mérgezés",
    description: "Mérgező anyagok (pl. toxinok) bejutása a szervezetbe és azok káros hatása."
  },
  {
    term: "Spasztikus bénulás",
    translation: "Merevgörcsös bénulás",
    description: "Az izmok tartós összehúzódása és merevsége, mely mozgásképtelenséghez vezet."
  },
  {
    term: "Petyhüdt bénulás",
    translation: "Petyhüdt bénulás",
    description: "Az izmok tónusának elvesztése, elernyedése és mozgásképtelensége."
  },
  {
    term: "Erysipelothrix rhusiopathiae",
    translation: "Erysipelothrix rhusiopathiae (baktériumfaj)",
    description: "A sertésorbánc (Erysipelas suis) kórokozója, Gram-pozitív pálca."
  },
  {
    term: "Erysipelas suis",
    translation: "Sertésorbánc",
    description: "Az Erysipelothrix rhusiopathiae okozta fertőző betegség sertésekben, mely bőr-, ízületi és szívtünetekkel járhat."
  },
  {
    term: "Neuraminidáz",
    translation: "Neuraminidáz (enzim)",
    description: "Az E. rhusiopathiae által termelt virulenciafaktor, mely érkárosodást okoz."
  },
  {
    term: "Erysipeloid",
    translation: "Erysipeloid (emberi orbánc)",
    description: "Az Erysipelothrix rhusiopathiae által emberben okozott bőrfertőzés, mely vörös, fájdalmas elváltozásokkal jár."
  },
  {
    term: "Ankylosis",
    translation: "Ízületi merevség/összecsontosodás",
    description: "Az ízület mozgásterjedelmének korlátozottsága vagy teljes elvesztése a gyulladás vagy degeneráció miatt."
  },
  {
    term: "Endocarditis vegetativa",
    translation: "Vegetatív endocarditis",
    description: "A szívbillentyűkön kialakuló, karfiolszerű felrakódásokkal (vegetációkkal) járó szívbelhártya-gyulladás."
  },
  {
    term: "Splenomegalia",
    translation: "Lépduzzanat",
    description: "A lép megnagyobbodása."
  },
  {
    term: "Mycoplasma hyorhinis",
    translation: "Mycoplasma hyorhinis (baktériumfaj)",
    description: "Sejtfal nélküli baktérium, mely sertésekben polyserositist és arthritist okoz."
  },
  {
    term: "Mycoplasma hyosynoviae",
    translation: "Mycoplasma hyosynoviae (baktériumfaj)",
    description: "Sejtfal nélküli baktérium, mely sertésekben ízületgyulladást (arthritist) okoz, jellemzően idősebb hízókban."
  },
  {
    term: "Mollicutes",
    translation: "Mollicutes (baktériumosztály)",
    description: "A legkisebb ismert, önállóan szaporodni képes prokarióták, melyeknek nincs sejtfaluk (ide tartoznak a Mycoplasmák)."
  },
  {
    term: "Pleuromutilinek",
    translation: "Pleuromutilin antibiotikumok",
    description: "Antibiotikum-csoport, melyek a fehérjeszintézist gátolják, hatékonyak Mycoplasmák és Brachyspira ellen (pl. tiamulin, valnemulin)."
  },
  {
    term: "NSAID",
    translation: "Nem szteroid gyulladáscsökkentő",
    description: "Non-Steroidal Anti-Inflammatory Drug - gyulladást, fájdalmat és lázat csillapító gyógyszerek."
  },
  {
    term: "Synovia",
    translation: "Ízületi folyadék",
    description: "Az ízületi üreget kitöltő, síkosító folyadék."
  },
  {
    term: "Polyserositis fibrinosa",
    translation: "Fibrines savóshártya-gyulladás",
    description: "Több savóshártya gyulladása, mely fibrinkiválással jár (pl. Glässer-kór, Mycoplasma hyorhinis)."
  },
  {
    term: "Pericarditis fibrinosa",
    translation: "Fibrines szívburokgyulladás",
    description: "A szívburok gyulladása, mely fibrinkiválással jár, makroszkóposan gyakran 'bundás szív' vagy 'vajas kenyér szív' képét mutatja."
  },
  {
    term: "Glaesserella parasuis",
    translation: "Glaesserella parasuis (baktériumfaj)",
    description: "A Glässer-betegség (fertőző polyserositis) kórokozója, Gram-negatív pálca, NAD-igényes."
  },
  {
    term: "NAD",
    translation: "NAD (V-faktor)",
    description: "Nikotinamid-adenin-dinukleotid - a baktériumok növekedéséhez szükséges koenzim."
  },
  {
    term: "Szatellita növekedés",
    translation: "Szatellita növekedés",
    description: "Bizonyos baktériumok (pl. G. parasuis) növekedése csak más baktériumok (pl. S. aureus) közelében lehetséges, melyek biztosítják számukra a szükséges növekedési faktorokat."
  },
  {
    term: "vtaA gének",
    translation: "vtaA gének (virulencia-asszociált gének)",
    description: "A Glaesserella parasuis virulenciájáért felelős gének, melyek invazív tulajdonságokat kódolnak."
  },
  {
    term: "PRDC",
    translation: "Sertés Légzőszervi Betegség Komplex",
    description: "Porcine Respiratory Disease Complex - több kórokozó (vírusok és baktériumok) együttes hatására kialakuló légzőszervi megbetegedés sertésekben."
  },
  {
    term: "Szeptikémia",
    translation: "Vérfertőzés",
    description: "A kórokozók vagy azok toxinjai a véráramba jutnak és testszerte szaporodnak, súlyos szisztémás gyulladást okozva."
  },
  {
    term: "Meningitis purulenta/fibrinosa",
    translation: "Gennyes/fibrines agyhártyagyulladás",
    description: "Az agyburkok gyulladása, mely gennyes vagy fibrines izzadmánnyal jár."
  },
  {
    term: "Cyanosis",
    translation: "Elkékülés",
    description: "A bőr vagy nyálkahártyák kékes elszíneződése az oxigénhiány miatt (ugyanaz, mint a cianózis, csak máshogy írva)."
  },
  {
    term: "Staphylococcus hyicus",
    translation: "Staphylococcus hyicus (baktériumfaj)",
    description: "A kenőcsös bőrgyulladás (exudatív epidermitis) fő kórokozója sertésekben."
  },
  {
    term: "Staphylococcus aureus",
    translation: "Staphylococcus aureus (baktériumfaj)",
    description: "Sárgás pigmentet termelő, béta-hemolitikus Staphylococcus faj, mely számos fertőzést okozhat (pl. tőgygyulladás, szeptikémia)."
  },
  {
    term: "Exudatív epidermitis",
    translation: "Kenőcsös bőrgyulladás",
    description: "A Staphylococcus hyicus által okozott bőrbetegség fiatal malacokban, mely zsíros, barnás pörkökkel és nedvezéssel jár, láz és viszketés nélkül."
  },
  {
    term: "MRSA",
    translation: "Meticillin-rezisztens Staphylococcus aureus",
    description: "Meticillinre (és sok más béta-laktámra) rezisztens Staphylococcus aureus törzs, komoly humán- és állategészségügyi probléma."
  },
  {
    term: "LA-MRSA",
    translation: "Haszonállatokhoz köthető MRSA",
    description: "Livestock-Associated MRSA - meticillin-rezisztens Staphylococcus aureus törzsek, melyek haszonállatokban (főleg sertésben) fordulnak elő és zoonózist jelentenek."
  },
  {
    term: "Dequamatio",
    translation: "Hámleválás",
    description: "A hámsejtek leválása, hámlás."
  },
  {
    term: "Hematogén",
    translation: "Vér útján terjedő",
    description: "Olyan fertőzés vagy folyamat, melynek során a kórokozók a véráramba jutva terjednek a szervezetben."
  },
  {
    term: "Mastitis",
    translation: "Tőgygyulladás",
    description: "Az emlőmirigy gyulladása."
  },
  {
    term: "Agalactia",
    translation: "Tejhiány",
    description: "A tejelválasztás hiánya vagy elégtelensége."
  },
  {
    term: "Metasztatikus tályogok",
    translation: "Metasztatikus tályogok",
    description: "A véráram útján a szervezet különböző részeibe eljutó baktériumok által okozott gennyes gócok (tályogok)."
  },
  {
    term: "Kataláz-teszt",
    translation: "Kataláz-teszt",
    description: "Laboratóriumi teszt, mely a kataláz enzim jelenlétét mutatja ki (hidrogén-peroxid bontása). A Staphylococcusok pozitívak, a Streptococcusok negatívak."
  },
  {
    term: "Koaguláz-teszt",
    translation: "Koaguláz-teszt",
    description: "Laboratóriumi teszt, mely a koaguláz enzim jelenlétét mutatja ki (vérplazma koagulációja). A patogén S. aureus törzsek általában pozitívak."
  },
  {
    term: "Escherichia coli",
    translation: "Escherichia coli (baktériumfaj)",
    description: "Gram-negatív pálca alakú baktérium, a bélflóra normális tagja is lehet, de számos betegséget is okozhat."
  },
  {
    term: "ETEC",
    translation: "Enterotoxint termelő E. coli",
    description: "Enterotoxigenic E. coli - olyan E. coli törzsek, melyek toxinokat termelnek, szekréciós hasmenést okozva."
  },
  {
    term: "EPEC",
    translation: "Enteropatogén E. coli",
    description: "Enteropathogenic E. coli - olyan E. coli törzsek, melyek a bélbolyhokhoz tapadva károsítják azokat (attaching-and-effacing elváltozás)."
  },
  {
    term: "VTEC / EDEC",
    translation: "Verotoxint termelő E. coli / Ödémabetegség E. coli",
    description: "Verotoxin-producing E. coli / Edema Disease E. coli - olyan E. coli törzsek, melyek Shiga-toxint (verotoxint) termelnek, ödémabetegséget okozva."
  },
  {
    term: "ExPEC",
    translation: "Bélcsatornán kívüli patogén E. coli",
    description: "Extraintestinal Pathogenic E. coli - olyan E. coli törzsek, melyek a bélcsatornán kívül okoznak fertőzéseket (pl. szepszis, meningitis, húgyúti fertőzés)."
  },
  {
    term: "Fimbriák",
    translation: "Fimbriák (adléziós faktorok)",
    description: "A baktériumok felszínén található hajszerű képletek, melyek a sejtekhez való tapadást segítik."
  },
  {
    term: "LT (Hőlabilis toxin)",
    translation: "Hőlabilis toxin (LT)",
    description: "Az ETEC által termelt toxin, mely hőlabilis és a cAMP szintet emelve szekréciós hasmenést okoz."
  },
  {
    term: "STa, STb (Hőstabil toxinok)",
    translation: "Hőstabil toxinok (STa, STb)",
    description: "Az ETEC által termelt toxinok, melyek hőstabilak és a cGMP szintet emelve vagy Ca-felszabadulást okozva hasmenést váltanak ki."
  },
  {
    term: "Stx2e (Shiga-toxin / Verotoxin)",
    translation: "Shiga-toxin / Verotoxin (Stx2e)",
    description: "Az EDEC által termelt toxin, mely az érfalakat károsítja (fibrinoid nekrózis), ödémabetegséget okozva."
  },
  {
    term: "Colibacillosis",
    translation: "Colibacillosis",
    description: "Az E. coli baktériumok által okozott betegségek gyűjtőneve, főleg hasmenéses kórképek."
  },
  {
    term: "PWD",
    translation: "Választás utáni hasmenés",
    description: "Post-weaning diarrhea - az E. coli okozta hasmenés, mely a malacok választása után jelentkezik."
  },
  {
    term: "Ataxia",
    translation: "Mozgászavar",
    description: "A mozgás koordinációjának zavara."
  },
  {
    term: "Paresis",
    translation: "Részleges bénulás",
    description: "Az izomerő csökkenése, gyengülése."
  },
  {
    term: "Bénulás",
    translation: "Bénulás",
    description: "Az izmok mozgásképességének teljes elvesztése."
  },
  {
    term: "Ödéma",
    translation: "Vizenyő",
    description: "A szövetek közötti folyadék felszaporodása, duzzanatot okozva."
  },
  {
    term: "Curvatura major",
    translation: "A gyomor nagyobb görbülete",
    description: "A gyomor külső, hosszabb íve."
  },
  {
    term: "Elektrolitpótlás",
    translation: "Elektrolitpótlás",
    description: "Az ionok (pl. nátrium, kálium) pótlása a szervezetben, melyek elveszhetnek hányás vagy hasmenés során."
  },
  {
    term: "ESBL",
    translation: "Kiterjesztett Spektrumú Béta-Laktamáz",
    description: "Extended-Spectrum Beta-Lactamase - olyan béta-laktamáz enzim, amely képes lebontani a 3. generációs cefalosporinokat is."
  },
  {
    term: "Genetikai rezisztencia",
    translation: "Genetikai rezisztencia",
    description: "Olyan ellenállás (pl. kórokozóval szemben), melynek genetikai alapja van (pl. hiányzó receptorok)."
  },
  {
    term: "Kompetitív kizárás",
    translation: "Kompetitív kizárás",
    description: "Az az elv, miszerint a jótékony baktériumok elfoglalják a helyet és/vagy erőforrásokat, megakadályozva a patogén baktériumok megtelepedését."
  },
  {
    term: "Transzkriptomika",
    translation: "Transzkriptomika",
    description: "A génkifejezés vizsgálata az RNS molekulák szintjén, azaz mely gének aktívak egy adott pillanatban."
  },
  {
    term: "Proteomika",
    translation: "Proteomika",
    description: "A sejtekben vagy szövetekben expresszálódó összes fehérje (proteom) vizsgálata."
  },
  {
    term: "Metagenomika",
    translation: "Metagenomika",
    description: "A környezeti vagy klinikai mintákban (pl. talaj, víz, bélsár) található összes mikroorganizmus genetikai anyagának (DNS-ének) közvetlen vizsgálata, tenyésztés nélkül."
  },
  {
    term: "SNP",
    translation: "Egyetlen Nukleotid Polimorfizmus",
    description: "Single Nucleotide Polymorphism - egyetlen bázis eltérése a DNS-szekvenciában két egyed vagy törzs között."
  },
  {
    term: "Filogenetika (phylogeny)",
    translation: "Törzsfejlődés",
    description: "A fajok vagy törzsek evolúciós kapcsolatainak vizsgálata és ábrázolása (törzsfa)."
  },
  {
    term: "Reference genome",
    translation: "Referencia genom",
    description: "Egy adott faj vagy törzs jól szekvenált, annotált genomja, melyet összehasonlítási alapként használnak új szekvenciák elemzésekor."
  },
  {
    term: "Phred score",
    translation: "Phred score (minőségi pontszám)",
    description: "A DNS szekvenálás során a bázismeghatározás megbízhatóságát jelző logaritmikus skálájú pontszám."
  },
  {
    term: "Core genome",
    translation: "Core genome (közös genom)",
    description: "Egy adott fajon belül minden törzsben megtalálható gének összessége."
  },
  {
    term: "Accessory genome",
    translation: "Accessory genome (kiegészítő genom)",
    description: "Egy adott fajon belül a törzsek között változó gének összessége, melyek nem minden törzsben találhatók meg (pl. virulencia- vagy rezisztenciagének)."
  },
  {
    term: "Bioinformatika",
    translation: "Bioinformatika",
    description: "Interdiszciplináris tudományág, mely a biológiai adatok (pl. szekvenciák) gyűjtésével, tárolásával, elemzésével és értelmezésével foglalkozik számítógépes módszerekkel."
  },
  {
    term: "Illumina (Short-read)",
    translation: "Illumina szekvenálás (rövid olvasatok)",
    description: "Nagy áteresztőképességű, rendkívül pontos szekvenálási technológia, mely rövid (általában 50-300 bázispár) DNS szakaszokat olvas le."
  },
  {
    term: "Oxford Nanopore (Long-read)",
    translation: "Oxford Nanopore szekvenálás (hosszú olvasatok)",
    description: "Szekvenálási technológia, mely hosszú (akár több 100 kbp) DNS szakaszokat képes leolvasni, valós időben, hordozható eszközökkel is."
  },
  {
    term: "Sanger szekvenálás",
    translation: "Sanger szekvenálás",
    description: "Az első generációs DNS szekvenálási módszer, mely pontosságáról ismert, de lassú és drága nagyszabású projektekhez."
  },
  {
    term: "NGS",
    translation: "Következő Generációs Szekvenálás",
    description: "Next-Generation Sequencing - nagy áteresztőképességű, párhuzamosított szekvenálási technológiák gyűjtőneve, melyek forradalmasították a genomikai kutatásokat."
  },
  {
    term: "Contig",
    translation: "Contig (összefüggő DNS szakasz)",
    description: "A rövid szekvenált olvasatok (reads) számítógépes összeillesztésével kapott, folyamatos, átfedő DNS szakasz."
  },
  {
    term: "Scaffold",
    translation: "Scaffold (állványzat)",
    description: "Contig-ok csoportja, melyeknek ismert az egymáshoz viszonyított iránya és távolsága, de közöttük lehetnek szekvenálatlan (gap) régiók."
  },
  {
    term: "Annotation",
    translation: "Annotáció (genomanalízis)",
    description: "A szekvenált genomban lévő gének, szabályozó elemek és egyéb funkcionális régiók azonosítása és funkciójuk meghatározása."
  },
  {
    term: "Reverse vaccinology",
    translation: "Reverz vakcinológia",
    description: "Genomikai adatok (pl. WGS) alapján történő vakcinajelölt fehérjék azonosítása és vakcinafejlesztés."
  },
  {
    term: "Hybrid assembly",
    translation: "Hibrid összeállítás",
    description: "A short-read (Illumina) és long-read (Nanopore) szekvenálási adatok együttes felhasználása egy genom minél pontosabb és teljesebb összerakásához."
  },
  {
    term: "Pan-genom",
    translation: "Pan-genom",
    description: "Egy adott baktériumfajon belül az összes törzsben megtalálható összes gén összessége (core és accessory genome együtt)."
  },
  {
    term: "Phenotype",
    translation: "Fenotípus",
    description: "Egy organizmus megfigyelhető tulajdonságainak összessége, mely a genotípus és a környezeti hatások kölcsönhatásaként alakul ki."
  },
  {
    term: "Genotype",
    translation: "Genotípus",
    description: "Egy organizmus teljes genetikai állománya vagy egy adott génjeinek összessége."
  },
  {
    term: "AMR",
    translation: "Antimikrobiális Rezisztencia",
    description: "Antimicrobial Resistance - a mikroorganizmusok azon képessége, hogy ellenállnak az antimikrobiális szerek (pl. antibiotikumok) hatásának."
  },
  {
    term: "One Health",
    translation: "Egy Egészség (megközelítés)",
    description: "Az az elv, miszerint az ember, az állat és a környezet egészsége elválaszthatatlanul összefügg, és a komplex egészségügyi kihívásokat csak interdiszciplináris együttműködéssel lehet megoldani."
  },
  {
    term: "Horizontális géntranszfer (HGT)",
    translation: "Horizontális géntranszfer",
    description: "Gének átadása baktériumok között, nem vertikális (szülő-utód) úton (pl. konjugáció, transzdukció, transzformáció)."
  },
  {
    term: "Konjugáció",
    translation: "Konjugáció",
    description: "Gének átvitele baktériumok között közvetlen sejt-sejt kontaktussal, egy pilus (híd) segítségével."
  },
  {
    term: "Transzdukció",
    translation: "Transzdukció",
    description: "Gének átvitele baktériumok között bakteriofágok (baktériumvírusok) segítségével."
  },
  {
    term: "Transzformáció",
    translation: "Transzformáció",
    description: "Gének felvétele a baktériumok által a környezetben lévő szabad DNS darabokból."
  },
  {
    term: "R-plazmidok",
    translation: "R-plazmidok (rezisztencia plazmidok)",
    description: "Plazmidok, melyek antibiotikum-rezisztenciát kódoló géneket hordoznak, és gyakran konjugatívak."
  },
  {
    term: "Integronok",
    translation: "Integronok",
    description: "Moduláris géngyűjtő rendszerek, melyek képesek génkazettákat (gyakran rezisztenciagént) befogadni és kifejezni."
  },
  {
    term: "IS elemek",
    translation: "IS elemek (Inzerciós szekvenciák)",
    description: "A legegyszerűbb transzpozálható elemek, melyek csak a transzpozícióhoz szükséges géneket (transzpozázt) tartalmazzák, és képesek géneket mobilizálni."
  },
  {
    term: "SCCmec kazetta",
    translation: "SCCmec kazetta",
    description: "Staphylococcal Cassette Chromosome mec - kromoszómális mobilis genetikai elem Staphylococcusokban, mely a mecA gént (MRSA) hordozza."
  },
  {
    term: "ICE",
    translation: "ICE (Integratív és Konjugatív Elemek)",
    description: "Integrative and Conjugative Elements - a baktérium kromoszómájába integrált mobilis elemek, melyek képesek kivágódni és konjugációval átjutni más sejtekbe."
  },
  {
    term: "blaCTX-M",
    translation: "blaCTX-M gén",
    description: "Az ESBL (Extended-Spectrum Beta-Lactamase) enzimeket kódoló géncsalád, mely a 3. generációs cefalosporinokat is bontja, és plazmidokon terjed."
  },
  {
    term: "mcr-1",
    translation: "mcr-1 gén",
    description: "Plazmidon terjedő gén, mely kolisztin-rezisztenciát kódol (lipid A módosításával)."
  },
  {
    term: "blaNDM-1",
    translation: "blaNDM-1 gén",
    description: "New Delhi Metallo-beta-lactamase - karbapenemáz enzimet kódoló gén, mely a legutolsó tartalék antibiotikumokat (karbapenemeket) is hatástalanítja."
  },
  {
    term: "Karbapenemázok",
    translation: "Karbapenemázok",
    description: "Béta-laktamáz enzimek, melyek a karbapenem antibiotikumokat is képesek hidrolizálni (lebontani)."
  },
  {
    term: "Aminoglikozid-módosító enzimek (AME)",
    translation: "Aminoglikozid-módosító enzimek",
    description: "Enzimek, melyek kémiailag módosítják az aminoglikozid antibiotikumokat, így azok nem tudnak a riboszómához kötődni."
  },
  {
    term: "mecA gén",
    translation: "mecA gén",
    description: "A meticillin-rezisztens Staphylococcus aureus (MRSA) rezisztenciájáért felelős gén, mely egy alternatív penicillin-kötő fehérjét (PBP2a) kódol."
  },
  {
    term: "vanA gén",
    translation: "vanA gén",
    description: "A vankomicin-rezisztens Enterococcusok (VRE) rezisztenciájáért felelős gén, mely a sejtfal prekurzorának módosítását okozza."
  },
  {
    term: "D-Ala-D-Lac",
    translation: "D-Alanin-D-Laktát",
    description: "A sejtfal-prekurzor végződésének megváltozása a D-Ala-D-Ala helyett a vanA gén hatására, melyhez a vankomicin nem tud kötődni."
  },
  {
    term: "erm gének",
    translation: "erm gének",
    description: "Erythromycin ribosomal methylase - gének, melyek riboszóma metilációt okozva rezisztenciát biztosítanak a makrolidok, linkózamidok és streptograminok (MLS) ellen."
  },
  {
    term: "MLS rezisztencia",
    translation: "MLS rezisztencia",
    description: "Makrolid-Linkózamid-Streptogramin rezisztencia - keresztrezisztencia ezen antibiotikum-csoportok között a riboszóma metilációja miatt."
  },
  {
    term: "QRDR mutációk",
    translation: "QRDR mutációk",
    description: "Quinolone Resistance-Determining Region - a DNS-giráz és topoizomeráz IV enzimek azon kritikus régiói, ahol a mutációk fluorokinolon rezisztenciát okoznak."
  },
  {
    term: "qnr gének",
    translation: "qnr gének",
    description: "Gének, melyek olyan fehérjéket kódolnak, amelyek fizikailag védik a DNS-giráz enzimet a kinolonok hatásától."
  },
  {
    term: "Efflux pumpák",
    translation: "Efflux pumpák",
    description: "A baktérium sejtmembránjában elhelyezkedő fehérjekomplexek, melyek aktívan kiszivattyúzzák az antibiotikumokat a sejtből."
  },
  {
    term: "RND család",
    translation: "RND család (efflux pumpa)",
    description: "Resistance-Nodulation-Cell Division - egy komplex, többkomponensű efflux pumpa család Gram-negatív baktériumokban, mely széles spektrumú multirezisztenciát okozhat."
  },
  {
    term: "MFS család",
    translation: "MFS család (efflux pumpa)",
    description: "Major Facilitator Superfamily - egyszerűbb efflux pumpa család, mely gyakran specifikus egy-egy antibiotikumra (pl. tetraciklin efflux)."
  },
  {
    term: "Porinok",
    translation: "Porinok",
    description: "A Gram-negatív baktériumok külső membránjában található csatornafehérjék, melyek a hidrofil molekulák (pl. béta-laktámok) bejutását teszik lehetővé."
  },
  {
    term: "Co-szelekció",
    translation: "Ko-szelekció",
    description: "A jelenség, amikor egy rezisztencia (pl. nehézfémre) fenntartja vagy szelektálja egy másik rezisztencia (pl. antibiotikumra) génjét is, mivel azok fizikailag közel helyezkednek el (pl. ugyanazon a plazmidon)."
  },
  {
    term: "Stewardship",
    translation: "Antibiotikum-stewardship (felelős antibiotikum-használat)",
    description: "Az antibiotikumok optimális kiválasztása, adagolása és alkalmazási időtartamának biztosítása, a rezisztencia kialakulásának minimalizálása érdekében."
  },
  {
    term: "Surveillance",
    translation: "Járványügyi felügyelet",
    description: "A betegségek és kórokozók (pl. rezisztens baktériumok) folyamatos gyűjtése, elemzése és terjedésének nyomon követése."
  },
  {
    term: "Bakteriofág terápia",
    translation: "Bakteriofág terápia",
    description: "Specifikus baktériumokat fertőző vírusok (bakteriofágok) felhasználása antibiotikum-rezisztens bakteriális fertőzések kezelésére."
  },
  {
    term: "Pilus",
    translation: "Pilus (szex-pilus)",
    description: "A baktériumok felszínén található hajszerű képlet, mely a konjugáció során a donor és recipiens sejt közötti kapcsolatot hozza létre."
  },
  {
    term: "oriT",
    translation: "oriT (origin of transfer)",
    description: "Az átviteli kezdőpont a konjugatív plazmidokon, ahonnan a DNS replikációja és átvitele elindul a konjugáció során."
  },
  {
    term: "tra-gének",
    translation: "tra-gének (transzfer gének)",
    description: "Plazmidokon található gének, melyek a konjugációhoz szükséges fehérjéket (pl. pilus) kódolják, és lehetővé teszik a plazmid átadását másik sejtbe."
  },
  {
    term: "Kompetencia",
    translation: "Kompetencia (mikrobiológiai)",
    description: "A baktérium azon fiziológiai állapota, amikor képes felvenni a környezetben lévő szabad DNS-t (transzformáció)."
  },
  {
    term: "Replikatív transzpozíció",
    translation: "Replikatív transzpozíció",
    description: "A transzpozon mozgásának olyan formája, amikor a transzpozon lemásolja magát, és a másolat új helyre illeszkedik be, miközben az eredeti példány a helyén marad."
  },
  {
    term: "Plasmid curing",
    translation: "Plasmid curing (plazmid elvesztés)",
    description: "A baktériumsejtek plazmidjainak elvesztése, mely bekövetkezhet spontán módon vagy bizonyos fizikai/kémiai kezelések hatására."
  },
  {
    term: "Fitness cost",
    translation: "Fitness cost (életképességi költség)",
    description: "A rezisztenciagének hordozásával járó biológiai hátrány a baktérium számára, mely lassabb növekedésben, csökkent szaporodási sebességben nyilvánulhat meg antibiotikum-mentes környezetben."
  }
];

// 3. Ezután definiáljuk a kérdéseket (latinTermsQuestions)
export const latinTermsQuestions = [
  {
    id: "latin_1",
    topic: "latin-terms",
    question: "Mi a 'Streptococcus suis' magyar jelentése?",
    options: [
      "Streptococcus suis (baktériumfaj)",
      "Sejtfal nélküli baktérium",
      "Antimikrobiális Rezisztencia",
      "Sertés reprodukciós és légzőszervi szindróma"
    ],
    correctAnswer: "Streptococcus suis (baktériumfaj)"
  },
  {
    id: "latin_2",
    topic: "latin-terms",
    question: "Mi a 'Gram-pozitív' magyar jelentése?",
    options: [
      "Gram-pozitív (festődési tulajdonság)",
      "Több savóshártya gyulladása",
      "Sejtfal nélküli baktériumok osztálya",
      "Sejtfal nélküli baktérium"
    ],
    correctAnswer: "Gram-pozitív (festődési tulajdonság)"
  },
  {
    id: "latin_3",
    topic: "latin-terms",
    question: "Mi a 'Coccus' magyar jelentése?",
    options: [
      "Gömb alakú baktérium",
      "Mandulák",
      "Hirtelen fellépő, súlyos vérfertőzés",
      "Antimikrobiális Rezisztencia"
    ],
    correctAnswer: "Gömb alakú baktérium"
  },
  {
    id: "latin_4",
    topic: "latin-terms",
    question: "Mi a 'Fakultatív anaerob' magyar jelentése?",
    options: [
      "Képes oxigénnel és anélkül is élni",
      "Hátrahajló fejtartás",
      "Szemtekerezgés",
      "Fokozott érzékenység a tapintásra, fájdalomra"
    ],
    correctAnswer: "Képes oxigénnel és anélkül is élni"
  },
  {
    id: "latin_5",
    topic: "latin-terms",
    question: "Mi az 'Alfa-hemolízis' magyar jelentése?",
    options: [
      "Zöldülő hemolízis",
      "Elkékülés",
      "Ízületgyulladás",
      "Lépduzzanat"
    ],
    correctAnswer: "Zöldülő hemolízis"
  },
  {
    id: "latin_6",
    topic: "latin-terms",
    question: "Mi a 'Poliszacharid tok (CPS)' magyar jelentése?",
    options: [
      "Kapszula",
      "Mandulák",
      "Állatról emberre terjedő betegség",
      "Hátrahajló fejtartás"
    ],
    correctAnswer: "Kapszula"
  },
  {
    id: "latin_7",
    topic: "latin-terms",
    question: "Mi a 'Szerotípus' magyar jelentése?",
    options: [
      "Szerológiai típus",
      "Perakut szeptikémia",
      "Agyvíz",
      "Szívbelhártya-gyulladás"
    ],
    correctAnswer: "Szerológiai típus"
  },
  {
    id: "latin_8",
    topic: "latin-terms",
    question: "Mi a 'Tonsillák' magyar jelentése?",
    options: [
      "Mandulák",
      "Több savóshártya gyulladása",
      "Hátrahajló fejtartás",
      "Szemtekerezgés"
    ],
    correctAnswer: "Mandulák"
  },
  {
    id: "latin_9",
    topic: "latin-terms",
    question: "Mi a 'Zoonózis' magyar jelentése?",
    options: [
      "Állatról emberre terjedő betegség",
      "Elkékülés",
      "Perakut szeptikémia",
      "Agyhártyagyulladás"
    ],
    correctAnswer: "Állatról emberre terjedő betegség"
  },
  {
    id: "latin_10",
    topic: "latin-terms",
    question: "Mi a 'Meningitis' magyar jelentése?",
    options: [
      "Agyhártyagyulladás",
      "Kapszula",
      "Állatról emberre terjedő betegség",
      "Szemtekerezgés"
    ],
    correctAnswer: "Agyhártyagyulladás"
  },
  {
    id: "latin_11",
    topic: "latin-terms",
    question: "Mi a 'Perakut szeptikémia' magyar jelentése?",
    options: [
      "Hirtelen fellépő, súlyos vérfertőzés",
      "Elkékülés",
      "Fokozott érzékenység a tapintásra, fájdalomra",
      "Ízületgyulladás"
    ],
    correctAnswer: "Hirtelen fellépő, súlyos vérfertőzés"
  },
  {
    id: "latin_12",
    topic: "latin-terms",
    question: "Mi a 'Cianózis' magyar jelentése?",
    options: [
      "Elkékülés",
      "Hátrahajló fejtartás",
      "Szívbelhártya-gyulladás",
      "A vese egy részének elhalása"
    ],
    correctAnswer: "Elkékülés"
  },
  {
    id: "latin_13",
    topic: "latin-terms",
    question: "Mi az 'Opisthotonus' magyar jelentése?",
    options: [
      "Hátrahajló fejtartás",
      "Szemtekerezgés",
      "Ízületgyulladás",
      "Agyvíz"
    ],
    correctAnswer: "Hátrahajló fejtartás"
  },
  {
    id: "latin_14",
    topic: "latin-terms",
    question: "Mi a 'Nystagmus' magyar jelentése?",
    options: [
      "Szemtekerezgés",
      "Fokozott érzékenység a tapintásra, fájdalomra",
      "A vese egy részének elhalása",
      "Több savóshártya gyulladása"
    ],
    correctAnswer: "Szemtekerezgés"
  },
  {
    id: "latin_15",
    topic: "latin-terms",
    question: "Mi a 'Hyperaesthesia' magyar jelentése?",
    options: [
      "Túlérzékenység",
      "Ízületgyulladás",
      "Antibiotikum-érzékenységi vizsgálat",
      "Béta-laktám antibiotikumok"
    ],
    correctAnswer: "Túlérzékenység"
  },
  {
    id: "latin_16",
    topic: "latin-terms",
    question: "Mi az 'Arthritis' magyar jelentése?",
    options: [
      "Ízületgyulladás",
      "Kutyaszerű ülés (klinikai tünet)",
      "Szívbelhártya-gyulladás",
      "Dexametazon (szteroid gyulladáscsökkentő)"
    ],
    correctAnswer: "Ízületgyulladás"
  },
  {
    id: "latin_17",
    topic: "latin-terms",
    question: "Mi a 'Kutyaszerű ülés' magyar jelentése?",
    options: [
      "Kutyaszerű ülés (klinikai tünet)",
      "A vese egy részének elhalása",
      "Parenterális",
      "Csoportos gyógykezelés"
    ],
    correctAnswer: "Kutyaszerű ülés (klinikai tünet)"
  },
  {
    id: "latin_18",
    topic: "latin-terms",
    question: "Mi az 'Endocarditis' magyar jelentése?",
    options: [
      "Szívbelhártya-gyulladás",
      "Agyvíz",
      "Bélflóra egyensúlyának felborulása",
      "Baktériumok által a környezetbe ürített, sejtekre káros hatású méreganyag"
    ],
    correctAnswer: "Szívbelhártya-gyulladás"
  },
  {
    id: "latin_19",
    topic: "latin-terms",
    question: "Mi a 'Veseinfarktus' magyar jelentése?",
    options: [
      "A vese egy részének elhalása",
      "Több savóshártya gyulladása",
      "Szövetelhalás",
      "Parenterális"
    ],
    correctAnswer: "A vese egy részének elhalása"
  },
  {
    id: "latin_20",
    topic: "latin-terms",
    question: "Mi a 'Liquor' magyar jelentése?",
    options: [
      "Agyvíz",
      "Antibiotikum-érzékenységi vizsgálat",
      "Béta-laktám antibiotikumok",
      "Florfenikol (antibiotikum)"
    ],
    correctAnswer: "Agyvíz"
  },
  {
    id: "latin_21",
    topic: "latin-terms",
    question: "Mi a 'Polyserositis' magyar jelentése?",
    options: [
      "Több savóshártya gyulladása",
      "Trimetoprim-szulfonamid (antibiotikum-kombináció)",
      "Kritikusan fontos antibiotikum",
      "Multirezisztencia"
    ],
    correctAnswer: "Több savóshártya gyulladása"
  },
  {
    id: "latin_22",
    topic: "latin-terms",
    question: "Mi az 'Antibiogram' magyar jelentése?",
    options: [
      "Antibiotikum-érzékenységi vizsgálat",
      "Telepspecifikus oltóanyag",
      "Mindent be-mindent ki rendszer",
      "Sertés reprodukciós és légzőszervi szindróma"
    ],
    correctAnswer: "Antibiotikum-érzékenységi vizsgálat"
  },
  {
    id: "latin_23",
    topic: "latin-terms",
    question: "Mi a 'Béta-laktámok' magyar jelentése?",
    options: [
      "Béta-laktám antibiotikumok",
      "Sertés circovírus 2. típus",
      "Influenza vírus, mely légzőszervi betegséget okoz sertésekben",
      "Polimeráz-láncreakció"
    ],
    correctAnswer: "Béta-laktám antibiotikumok"
  },
  {
    id: "latin_24",
    topic: "latin-terms",
    question: "Mi az 'Aminopenicillinek' magyar jelentése?",
    options: [
      "Aminopenicillinek",
      "Tömegspektrometria",
      "Minimális Gátló Koncentráció",
      "Injekciós beadási mód"
    ],
    correctAnswer: "Aminopenicillinek"
  },
  {
    id: "latin_25",
    topic: "latin-terms",
    question: "Mi a 'Cefalosporinok' magyar jelentése?",
    options: [
      "Cefalosporinok",
      "Dexametazon (szteroid gyulladáscsökkentő)",
      "Csoportos gyógykezelés",
      "Bélflóra egyensúlyának felborulása"
    ],
    correctAnswer: "Cefalosporinok"
  },
  {
    id: "latin_26",
    topic: "latin-terms",
    question: "Mi a 'HPCIA' magyar jelentése?",
    options: [
      "Kritikusan fontos antibiotikum",
      "Toxinok a vérben",
      "Kenőcsös bőrgyulladás",
      "Gram-pozitív pálca"
    ],
    correctAnswer: "Kritikusan fontos antibiotikum"
  },
  {
    id: "latin_27",
    topic: "latin-terms",
    question: "Mi a 'Florfenikol' magyar jelentése?",
    options: [
      "Florfenikol (antibiotikum)",
      "Mérgezés",
      "Petyhüdt bénulás",
      "A Glässer-betegség (fertőző polyserositis) kórokozója, Gram-negatív pálca, NAD-igényes."
    ],
    correctAnswer: "Florfenikol (antibiotikum)"
  },
  {
    id: "latin_28",
    topic: "latin-terms",
    question: "Mi a 'Trimetoprim-szulfonamid' magyar jelentése?",
    options: [
      "Trimetoprim-szulfonamid (antibiotikum-kombináció)",
      "Baktériumok által a környezetbe ürített, sejtekre káros hatású méreganyag",
      "Baktériumok által képzett rendkívül ellenálló, nyugalmi állapotú képlet, mely kedvezőtlen körülmények között védi a sejtet.",
      "Csak oxigénmentes környezetben él"
    ],
    correctAnswer: "Trimetoprim-szulfonamid (antibiotikum-kombináció)"
  },
  {
    id: "latin_29",
    topic: "latin-terms",
    question: "Mi a 'Tetraciklinek' magyar jelentése?",
    options: [
      "Tetraciklinek (antibiotikum-csoport)",
      "Szövetelhalás",
      "Vastagbélgyulladás",
      "Clostridioides difficile (baktériumfaj)"
    ],
    correctAnswer: "Tetraciklinek (antibiotikum-csoport)"
  },
  {
    id: "latin_30",
    topic: "latin-terms",
    question: "Mi a 'Makrolidok' magyar jelentése?",
    options: [
      "Makrolidok (antibiotikum-csoport)",
      "Gázos sercegés/ropogás (tapintáskor)",
      "Merevgörcsös bénulás",
      "Petyhüdt bénulás"
    ],
    correctAnswer: "Makrolidok (antibiotikum-csoport)"
  },
  {
    id: "latin_31",
    topic: "latin-terms",
    question: "Mi a 'Linkózamidok' magyar jelentése?",
    options: [
      "Linkózamidok (antibiotikum-csoport)",
      "Sertésorbánc",
      "Neuraminidáz (enzim)",
      "Erysipeloid (emberi orbánc)"
    ],
    correctAnswer: "Linkózamidok (antibiotikum-csoport)"
  },
  {
    id: "latin_32",
    topic: "latin-terms",
    question: "Mi a 'Multirezisztencia (MDR)' magyar jelentése?",
    options: [
      "Multirezisztencia",
      "Ízületi merevség/összecsontosodás",
      "Lépduzzanat",
      "Sejtfal nélküli baktérium"
    ],
    correctAnswer: "Multirezisztencia"
  },
  {
    id: "latin_33",
    topic: "latin-terms",
    question: "Mi az 'Autogén vakcina' magyar jelentése?",
    options: [
      "Telepspecifikus oltóanyag",
      "Sejtfal nélküli baktériumok osztálya",
      "Nem szteroid gyulladáscsökkentő",
      "Ízületi folyadék"
    ],
    correctAnswer: "Telepspecifikus oltóanyag"
  },
  {
    id: "latin_34",
    topic: "latin-terms",
    question: "Mi az 'All-in/All-out' magyar jelentése?",
    options: [
      "Mindent be-mindent ki rendszer",
      "Fibrines savóshártya-gyulladás",
      "Nikotinamid-adenin-dinukleotid - a baktériumok növekedéséhez szükséges koenzim.",
      "Szatellita növekedés"
    ],
    correctAnswer: "Mindent be-mindent ki rendszer"
  },
  {
    id: "latin_35",
    topic: "latin-terms",
    question: "Mi a 'PRRS' magyar jelentése?",
    options: [
      "Sertés reprodukciós és légzőszervi szindróma",
      "Gennyes/fibrines agyhártyagyulladás",
      "Vérfertőzés",
      "A Glaesserella parasuis virulenciájáért felelős gének, melyek invazív tulajdonságokat kódolnak."
    ],
    correctAnswer: "Sertés reprodukciós és légzőszervi szindróma"
  },
  {
    id: "latin_36",
    topic: "latin-terms",
    question: "Mi a 'PCV2' magyar jelentése?",
    options: [
      "Sertés circovírus 2. típus",
      "Kenőcsös bőrgyulladás",
      "Meticillin-rezisztens Staphylococcus aureus",
      "Vér útján terjedő"
    ],
    correctAnswer: "Sertés circovírus 2. típus"
  },
  {
    id: "latin_37",
    topic: "latin-terms",
    question: "Mi a 'SIV' magyar jelentése?",
    options: [
      "Influenza vírus, mely légzőszervi betegséget okoz sertésekben",
      "Tejhiány",
      "Metasztatikus tályogok",
      "Kataláz-teszt"
    ],
    correctAnswer: "Influenza vírus, mely légzőszervi betegséget okoz sertésekben"
  },
  {
    id: "latin_38",
    topic: "latin-terms",
    question: "Mi a 'PCR' magyar jelentése?",
    options: [
      "Polimeráz-láncreakció",
      "Koaguláz-teszt",
      "Enterotoxint termelő E. coli",
      "Enteropatogén E. coli"
    ],
    correctAnswer: "Polimeráz-láncreakció"
  },
  {
    id: "latin_39",
    topic: "latin-terms",
    question: "Mi a 'MALDI-TOF MS' magyar jelentése?",
    options: [
      "Tömegspektrometria",
      "Verotoxint termelő E. coli / Ödémabetegség E. coli",
      "Bélcsatornán kívüli patogén E. coli",
      "Hőlabilis toxin (LT)"
    ],
    correctAnswer: "Tömegspektrometria"
  },
  {
    id: "latin_40",
    topic: "latin-terms",
    question: "Mi a 'MIC' magyar jelentése?",
    options: [
      "Minimális Gátló Koncentráció",
      "Hőstabil toxinok (STa, STb)",
      "Shiga-toxin / Verotoxin (Stx2e)",
      "Választás utáni hasmenés"
    ],
    correctAnswer: "Minimális Gátló Koncentráció"
  },
  {
    id: "latin_41",
    topic: "latin-terms",
    question: "Mi a 'Parenterális' magyar jelentése?",
    options: [
      "Injekciós beadási mód",
      "Mozgászavar",
      "Részleges bénulás",
      "Bénulás"
    ],
    correctAnswer: "Injekciós beadási mód"
  },
  {
    id: "latin_42",
    topic: "latin-terms",
    question: "Mi a 'Dexametazon' magyar jelentése?",
    options: [
      "Dexametazon (szteroid gyulladáscsökkentő)",
      "Vizenyő",
      "A gyomor nagyobb görbülete",
      "Elektrolitpótlás"
    ],
    correctAnswer: "Dexametazon (szteroid gyulladáscsökkentő)"
  },
  {
    id: "latin_43",
    topic: "latin-terms",
    question: "Mi a 'Metafilaxis' magyar jelentése?",
    options: [
      "Csoportos gyógykezelés",
      "Genetikai rezisztencia",
      "Kiterjesztett Spektrumú Béta-Laktamáz",
      "Kompetitív kizárás"
    ],
    correctAnswer: "Csoportos gyógykezelés"
  },
  {
    id: "latin_44",
    topic: "latin-terms",
    question: "Mi a 'Dysbacteriosis' magyar jelentése?",
    options: [
      "Bélflóra egyensúlyának felborulása",
      "Transzkriptomika",
      "Proteomika",
      "Metagenomika"
    ],
    correctAnswer: "Bélflóra egyensúlyának felborulása"
  },
  {
    id: "latin_45",
    topic: "latin-terms",
    question: "Mi az 'Exotoxin' magyar jelentése?",
    options: [
      "Exotoxin",
      "Egyetlen Nukleotid Polimorfizmus",
      "Törzsfejlődés",
      "Referencia genom"
    ],
    correctAnswer: "Exotoxin"
  },
  {
    id: "latin_46",
    topic: "latin-terms",
    question: "Mi az 'Endospóra' magyar jelentése?",
    options: [
      "Endospóra",
      "Phred score (minőségi pontszám)",
      "Core genome (közös genom)",
      "Accessory genome (kiegészítő genom)"
    ],
    correctAnswer: "Endospóra"
  },
  {
    id: "latin_47",
    topic: "latin-terms",
    question: "Mi az 'Obligát anaerob' magyar jelentése?",
    options: [
      "Csak oxigénmentes környezetben él",
      "Bioinformatika",
      "Illumina szekvenálás (rövid olvasatok)",
      "Oxford Nanopore szekvenálás (hosszú olvasatok)"
    ],
    correctAnswer: "Csak oxigénmentes környezetben él"
  },
  {
    id: "latin_48",
    topic: "latin-terms",
    question: "Mi a 'Necrosis' magyar jelentése?",
    options: [
      "Szövetelhalás",
      "Sanger szekvenálás",
      "Következő Generációs Szekvenálás",
      "Contig (összefüggő DNS szakasz)"
    ],
    correctAnswer: "Szövetelhalás"
  },
  {
    id: "latin_49",
    topic: "latin-terms",
    question: "Mi a 'Toxémia' magyar jelentése?",
    options: [
      "Mérgezés (toxinok a vérben)",
      "Scaffold (állványzat)",
      "Annotáció (genomanalízis)",
      "Reverz vakcinológia"
    ],
    correctAnswer: "Mérgezés (toxinok a vérben)"
  },
  {
    id: "latin_50",
    topic: "latin-terms",
    question: "Mi a 'Colitis' magyar jelentése?",
    options: [
      "Vastagbélgyulladás",
      "Hibrid összeállítás",
      "Pan-genom",
      "Fenotípus"
    ],
    correctAnswer: "Vastagbélgyulladás"
  },
  {
    id: "latin_51",
    topic: "latin-terms",
    question: "Mi a 'Clostridioides difficile' magyar jelentése?",
    options: [
      "Clostridioides difficile (baktériumfaj)",
      "Genotípus",
      "Antimikrobiális Rezisztencia",
      "Egy Egészség (megközelítés)"
    ],
    correctAnswer: "Clostridioides difficile (baktériumfaj)"
  },
  {
    id: "latin_52",
    topic: "latin-terms",
    question: "Mi az 'Enteritis Necroticans' magyar jelentése?",
    options: [
      "Elhalásos bélgyulladás",
      "Horizontális géntranszfer",
      "Konjugáció",
      "Transzdukció"
    ],
    correctAnswer: "Elhalásos bélgyulladás"
  },
  {
    id: "latin_53",
    topic: "latin-terms",
    question: "Mi a 'Crepitatio' magyar jelentése?",
    options: [
      "Gázos sercegés/ropogás (tapintáskor)",
      "Transzformáció",
      "R-plazmidok (rezisztencia plazmidok)",
      "Integronok"
    ],
    correctAnswer: "Gázos sercegés/ropogás (tapintáskor)"
  },
  {
    id: "latin_54",
    topic: "latin-terms",
    question: "Mi a 'Tetanus (Clostridium tetani)' magyar jelentése?",
    options: [
      "Tetanusz",
      "IS elemek (Inzerciós szekvenciák)",
      "SCCmec kazetta",
      "ICE (Integratív és Konjugatív Elemek)"
    ],
    correctAnswer: "Tetanusz"
  },
  {
    id: "latin_55",
    topic: "latin-terms",
    question: "Mi a 'Botulizmus (Clostridium botulinum)' magyar jelentése?",
    options: [
      "Botulizmus",
      "blaCTX-M gén",
      "mcr-1 gén",
      "blaNDM-1 gén"
    ],
    correctAnswer: "Botulizmus"
  },
  {
    id: "latin_56",
    topic: "latin-terms",
    question: "Mi az 'Intoxikáció' magyar jelentése?",
    options: [
      "Mérgezés",
      "Karbapenemázok",
      "Aminoglikozid-módosító enzimek",
      "mecA gén"
    ],
    correctAnswer: "Mérgezés"
  },
  {
    id: "latin_57",
    topic: "latin-terms",
    question: "Mi a 'Spasztikus bénulás' magyar jelentése?",
    options: [
      "Merevgörcsös bénulás",
      "vanA gén",
      "D-Alanin-D-Laktát",
      "erm gének"
    ],
    correctAnswer: "Merevgörcsös bénulás"
  },
  {
    id: "latin_58",
    topic: "latin-terms",
    question: "Mi a 'Petyhüdt bénulás' magyar jelentése?",
    options: [
      "Petyhüdt bénulás",
      "MLS rezisztencia",
      "QRDR mutációk",
      "qnr gének"
    ],
    correctAnswer: "Petyhüdt bénulás"
  },
  {
    id: "latin_59",
    topic: "latin-terms",
    question: "Mi az 'Erysipelothrix rhusiopathiae' magyar jelentése?",
    options: [
      "Erysipelothrix rhusiopathiae (baktériumfaj)",
      "Efflux pumpák",
      "RND család (efflux pumpa)",
      "MFS család (efflux pumpa)"
    ],
    correctAnswer: "Erysipelothrix rhusiopathiae (baktériumfaj)"
  },
  {
    id: "latin_60",
    topic: "latin-terms",
    question: "Mi az 'Erysipelas suis' magyar jelentése?",
    options: [
      "Sertésorbánc",
      "Porinok",
      "Ko-szelekció",
      "Antibiotikum-stewardship (felelős antibiotikum-használat)"
    ],
    correctAnswer: "Sertésorbánc"
  },
  {
    id: "latin_61",
    topic: "latin-terms",
    question: "Mi a 'Neuraminidáz' magyar jelentése?",
    options: [
      "Neuraminidáz (enzim)",
      "Járványügyi felügyelet",
      "Bakteriofág terápia",
      "Pilus (szex-pilus)"
    ],
    correctAnswer: "Neuraminidáz (enzim)"
  },
  {
    id: "latin_62",
    topic: "latin-terms",
    question: "Mi az 'Erysipeloid' magyar jelentése?",
    options: [
      "Erysipeloid (emberi orbánc)",
      "oriT (origin of transfer)",
      "tra-gének (transzfer gének)",
      "Kompetencia (mikrobiológiai)"
    ],
    correctAnswer: "Erysipeloid (emberi orbánc)"
  },
  {
    id: "latin_63",
    topic: "latin-terms",
    question: "Mi az 'Ankylosis' magyar jelentése?",
    options: [
      "Ízületi merevség/összecsontosodás",
      "Replikatív transzpozíció",
      "Plasmid curing (plazmid elvesztés)",
      "Fitness cost (életképességi költség)"
    ],
    correctAnswer: "Ízületi merevség/összecsontosodás"
  },
  {
    id: "latin_64",
    topic: "latin-terms",
    question: "Mi az 'Endocarditis vegetativa' magyar jelentése?",
    options: [
      "Vegetatív endocarditis",
      "Streptococcus suis (baktériumfaj)",
      "Gram-pozitív (festődési tulajdonság)",
      "Gömb alakú baktérium"
    ],
    correctAnswer: "Vegetatív endocarditis"
  },
  {
    id: "latin_65",
    topic: "latin-terms",
    question: "Mi a 'Splenomegalia' magyar jelentése?",
    options: [
      "Lépduzzanat",
      "Képes oxigénnel és anélkül is élni",
      "Zöldülő hemolízis",
      "Kapszula"
    ],
    correctAnswer: "Lépduzzanat"
  },
  {
    id: "latin_66",
    topic: "latin-terms",
    question: "Mi a 'Mycoplasma hyorhinis' magyar jelentése?",
    options: [
      "Mycoplasma hyorhinis (baktériumfaj)",
      "Szerológiai típus",
      "Mandulák",
      "Állatról emberre terjedő betegség"
    ],
    correctAnswer: "Mycoplasma hyorhinis (baktériumfaj)"
  },
  {
    id: "latin_67",
    topic: "latin-terms",
    question: "Mi a 'Mycoplasma hyosynoviae' magyar jelentése?",
    options: [
      "Mycoplasma hyosynoviae (baktériumfaj)",
      "Agyhártyagyulladás",
      "Hirtelen fellépő, súlyos vérfertőzés",
      "Elkékülés"
    ],
    correctAnswer: "Mycoplasma hyosynoviae (baktériumfaj)"
  },
  {
    id: "latin_68",
    topic: "latin-terms",
    question: "Mi a 'Mollicutes' magyar jelentése?",
    options: [
      "Mollicutes (baktériumosztály)",
      "Hátrahajló fejtartás",
      "Szemtekerezgés",
      "Fokozott érzékenység a tapintásra, fájdalomra"
    ],
    correctAnswer: "Mollicutes (baktériumosztály)"
  },
  {
    id: "latin_69",
    topic: "latin-terms",
    question: "Mi a 'Pleuromutilinek' magyar jelentése?",
    options: [
      "Pleuromutilin antibiotikumok",
      "Ízületgyulladás",
      "Kutyaszerű ülés (klinikai tünet)",
      "Szívbelhártya-gyulladás"
    ],
    correctAnswer: "Pleuromutilin antibiotikumok"
  },
  {
    id: "latin_70",
    topic: "latin-terms",
    question: "Mi a 'NSAID' magyar jelentése?",
    options: [
      "Nem szteroid gyulladáscsökkentő",
      "A vese egy részének elhalása",
      "Agyvíz",
      "Több savóshártya gyulladása"
    ],
    correctAnswer: "Nem szteroid gyulladáscsökkentő"
  },
  {
    id: "latin_71",
    topic: "latin-terms",
    question: "Mi a 'Synovia' magyar jelentése?",
    options: [
      "Ízületi folyadék",
      "Antibiotikum-érzékenységi vizsgálat",
      "Béta-laktám antibiotikumok",
      "Aminopenicillinek"
    ],
    correctAnswer: "Ízületi folyadék"
  },
  {
    id: "latin_72",
    topic: "latin-terms",
    question: "Mi a 'Polyserositis fibrinosa' magyar jelentése?",
    options: [
      "Fibrines savóshártya-gyulladás",
      "Cefalosporinok",
      "Kritikusan fontos antibiotikum",
      "Florfenikol (antibiotikum)"
    ],
    correctAnswer: "Fibrines savóshártya-gyulladás"
  },
  {
    id: "latin_73",
    topic: "latin-terms",
    question: "Mi a 'Pericarditis fibrinosa' magyar jelentése?",
    options: [
      "Fibrines szívburokgyulladás",
      "Trimetoprim-szulfonamid (antibiotikum-kombináció)",
      "Tetraciklinek (antibiotikum-csoport)",
      "Makrolidok (antibiotikum-csoport)"
    ],
    correctAnswer: "Fibrines szívburokgyulladás"
  },
  {
    id: "latin_74",
    topic: "latin-terms",
    question: "Mi a 'Glaesserella parasuis' magyar jelentése?",
    options: [
      "Glaesserella parasuis (baktériumfaj)",
      "Linkózamidok (antibiotikum-csoport)",
      "Multirezisztencia",
      "Telepspecifikus oltóanyag"
    ],
    correctAnswer: "Glaesserella parasuis (baktériumfaj)"
  },
  {
    id: "latin_75",
    topic: "latin-terms",
    question: "Mi a 'NAD' magyar jelentése?",
    options: [
      "NAD (V-faktor)",
      "Mindent be-mindent ki rendszer",
      "Sertés reprodukciós és légzőszervi szindróma",
      "Sertés circovírus 2. típus"
    ],
    correctAnswer: "NAD (V-faktor)"
  },
  {
    id: "latin_76",
    topic: "latin-terms",
    question: "Mi a 'Szatellita növekedés' magyar jelentése?",
    options: [
      "Szatellita növekedés",
      "Influenza vírus, mely légzőszervi betegséget okoz sertésekben",
      "Polimeráz-láncreakció",
      "Tömegspektrometria"
    ],
    correctAnswer: "Szatellita növekedés"
  },
  {
    id: "latin_77",
    topic: "latin-terms",
    question: "Mi a 'vtaA gének' magyar jelentése?",
    options: [
      "vtaA gének (virulencia-asszociált gének)",
      "Minimális Gátló Koncentráció",
      "Injekciós beadási mód",
      "Dexametazon (szteroid gyulladáscsökkentő)"
    ],
    correctAnswer: "vtaA gének (virulencia-asszociált gének)"
  },
  {
    id: "latin_78",
    topic: "latin-terms",
    question: "Mi a 'PRDC' magyar jelentése?",
    options: [
      "Sertés Légzőszervi Betegség Komplex",
      "Csoportos gyógykezelés",
      "Bélflóra egyensúlyának felborulása",
      "Exotoxin"
    ],
    correctAnswer: "Sertés Légzőszervi Betegség Komplex"
  },
  {
    id: "latin_79",
    topic: "latin-terms",
    question: "Mi a 'Szeptikémia' magyar jelentése?",
    options: [
      "Vérfertőzés",
      "Endospóra",
      "Csak oxigénmentes környezetben él",
      "Szövetelhalás"
    ],
    correctAnswer: "Vérfertőzés"
  },
  {
    id: "latin_80",
    topic: "latin-terms",
    question: "Mi a 'Meningitis purulenta/fibrinosa' magyar jelentése?",
    options: [
      "Gennyes/fibrines agyhártyagyulladás",
      "Mérgezés (toxinok a vérben)",
      "Vastagbélgyulladás",
      "Clostridioides difficile (baktériumfaj)"
    ],
    correctAnswer: "Gennyes/fibrines agyhártyagyulladás"
  },
  {
    id: "latin_81",
    topic: "latin-terms",
    question: "Mi a 'Cyanosis' magyar jelentése?",
    options: [
      "Elkékülés",
      "Elhalásos bélgyulladás",
      "Gázos sercegés/ropogás (tapintáskor)",
      "Tetanusz"
    ],
    correctAnswer: "Elkékülés"
  },
  {
    id: "latin_82",
    topic: "latin-terms",
    question: "Mi a 'Staphylococcus hyicus' magyar jelentése?",
    options: [
      "Staphylococcus hyicus (baktériumfaj)",
      "Botulizmus",
      "Mérgezés",
      "Merevgörcsös bénulás"
    ],
    correctAnswer: "Staphylococcus hyicus (baktériumfaj)"
  },
  {
    id: "latin_83",
    topic: "latin-terms",
    question: "Mi a 'Staphylococcus aureus' magyar jelentése?",
    options: [
      "Staphylococcus aureus (baktériumfaj)",
      "Petyhüdt bénulás",
      "Erysipelothrix rhusiopathiae (baktériumfaj)",
      "Sertésorbánc"
    ],
    correctAnswer: "Staphylococcus aureus (baktériumfaj)"
  },
  {
    id: "latin_84",
    topic: "latin-terms",
    question: "Mi az 'Exudatív epidermitis' magyar jelentése?",
    options: [
      "Kenőcsös bőrgyulladás",
      "Neuraminidáz (enzim)",
      "Erysipeloid (emberi orbánc)",
      "Ízületi merevség/összecsontosodás"
    ],
    correctAnswer: "Kenőcsös bőrgyulladás"
  },
  {
    id: "latin_85",
    topic: "latin-terms",
    question: "Mi az 'MRSA' magyar jelentése?",
    options: [
      "Meticillin-rezisztens Staphylococcus aureus",
      "Vegetatív endocarditis",
      "Lépduzzanat",
      "Mycoplasma hyorhinis (baktériumfaj)"
    ],
    correctAnswer: "Meticillin-rezisztens Staphylococcus aureus"
  },
  {
    id: "latin_86",
    topic: "latin-terms",
    question: "Mi az 'LA-MRSA' magyar jelentése?",
    options: [
      "Haszonállatokhoz köthető MRSA",
      "Mycoplasma hyosynoviae (baktériumfaj)",
      "Mollicutes (baktériumosztály)",
      "Pleuromutilin antibiotikumok"
    ],
    correctAnswer: "Haszonállatokhoz köthető MRSA"
  },
  {
    id: "latin_87",
    topic: "latin-terms",
    question: "Mi a 'Dequamatio' magyar jelentése?",
    options: [
      "Hámleválás",
      "Nem szteroid gyulladáscsökkentő",
      "Ízületi folyadék",
      "Fibrines savóshártya-gyulladás"
    ],
    correctAnswer: "Hámleválás"
  },
  {
    id: "latin_88",
    topic: "latin-terms",
    question: "Mi a 'Hematogén' magyar jelentése?",
    options: [
      "Vér útján terjedő",
      "Fibrines szívburokgyulladás",
      "Glaesserella parasuis (baktériumfaj)",
      "NAD (V-faktor)"
    ],
    correctAnswer: "Vér útján terjedő"
  },
  {
    id: "latin_89",
    topic: "latin-terms",
    question: "Mi a 'Mastitis' magyar jelentése?",
    options: [
      "Tőgygyulladás",
      "Szatellita növekedés",
      "vtaA gének (virulencia-asszociált gének)",
      "Sertés Légzőszervi Betegség Komplex"
    ],
    correctAnswer: "Tőgygyulladás"
  },
  {
    id: "latin_90",
    topic: "latin-terms",
    question: "Mi az 'Agalactia' magyar jelentése?",
    options: [
      "Tejhiány",
      "Vérfertőzés",
      "Gennyes/fibrines agyhártyagyulladás",
      "Elkékülés"
    ],
    correctAnswer: "Tejhiány"
  },
  {
    id: "latin_91",
    topic: "latin-terms",
    question: "Mi a 'Metasztatikus tályogok' magyar jelentése?",
    options: [
      "Metasztatikus tályogok",
      "Staphylococcus hyicus (baktériumfaj)",
      "Staphylococcus aureus (baktériumfaj)",
      "Kenőcsös bőrgyulladás"
    ],
    correctAnswer: "Metasztatikus tályogok"
  },
  {
    id: "latin_92",
    topic: "latin-terms",
    question: "Mi a 'Kataláz-teszt' magyar jelentése?",
    options: [
      "Kataláz-teszt",
      "Meticillin-rezisztens Staphylococcus aureus",
      "Haszonállatokhoz köthető MRSA",
      "Hámleválás"
    ],
    correctAnswer: "Kataláz-teszt"
  },
  {
    id: "latin_93",
    topic: "latin-terms",
    question: "Mi a 'Koaguláz-teszt' magyar jelentése?",
    options: [
      "Koaguláz-teszt",
      "Vér útján terjedő",
      "Tőgygyulladás",
      "Tejhiány"
    ],
    correctAnswer: "Koaguláz-teszt"
  },
  {
    id: "latin_94",
    topic: "latin-terms",
    question: "Mi az 'Escherichia coli' magyar jelentése?",
    options: [
      "Escherichia coli (baktériumfaj)",
      "Metasztatikus tályogok",
      "Kataláz-teszt",
      "Koaguláz-teszt"
    ],
    correctAnswer: "Escherichia coli (baktériumfaj)"
  },
  {
    id: "latin_95",
    topic: "latin-terms",
    question: "Mi az 'ETEC' magyar jelentése?",
    options: [
      "Enterotoxint termelő E. coli",
      "Enteropatogén E. coli",
      "Verotoxint termelő E. coli / Ödémabetegség E. coli",
      "Bélcsatornán kívüli patogén E. coli"
    ],
    correctAnswer: "Enterotoxint termelő E. coli"
  },
  {
    id: "latin_96",
    topic: "latin-terms",
    question: "Mi az 'EPEC' magyar jelentése?",
    options: [
      "Enteropatogén E. coli",
      "Fimbriák (adléziós faktorok)",
      "Hőlabilis toxin (LT)",
      "Hőstabil toxinok (STa, STb)"
    ],
    correctAnswer: "Enteropatogén E. coli"
  },
  {
    id: "latin_97",
    topic: "latin-terms",
    question: "Mi a 'VTEC / EDEC' magyar jelentése?",
    options: [
      "Verotoxint termelő E. coli / Ödémabetegség E. coli",
      "Shiga-toxin / Verotoxin (Stx2e)",
      "Colibacillosis",
      "Választás utáni hasmenés"
    ],
    correctAnswer: "Verotoxint termelő E. coli / Ödémabetegség E. coli"
  },
  {
    id: "latin_98",
    topic: "latin-terms",
    question: "Mi az 'ExPEC' magyar jelentése?",
    options: [
      "Bélcsatornán kívüli patogén E. coli",
      "Mozgászavar",
      "Részleges bénulás",
      "Bénulás"
    ],
    correctAnswer: "Bélcsatornán kívüli patogén E. coli"
  },
  {
    id: "latin_99",
    topic: "latin-terms",
    question: "Mi a 'Fimbriák' magyar jelentése?",
    options: [
      "Fimbriák (adléziós faktorok)",
      "Vizenyő",
      "A gyomor nagyobb görbülete",
      "Elektrolitpótlás"
    ],
    correctAnswer: "Fimbriák (adléziós faktorok)"
  },
  {
    id: "latin_100",
    topic: "latin-terms",
    question: "Mi az 'LT (Hőlabilis toxin)' magyar jelentése?",
    options: [
      "Hőlabilis toxin (LT)",
      "Kiterjesztett Spektrumú Béta-Laktamáz",
      "Genetikai rezisztencia",
      "Kompetitív kizárás"
    ],
    correctAnswer: "Hőlabilis toxin (LT)"
  },
  {
    id: "latin_101",
    topic: "latin-terms",
    question: "Mi a 'STa, STb (Hőstabil toxinok)' magyar jelentése?",
    options: [
      "Hőstabil toxinok (STa, STb)",
      "Transzkriptomika",
      "Proteomika",
      "Metagenomika"
    ],
    correctAnswer: "Hőstabil toxinok (STa, STb)"
  },
  {
    id: "latin_102",
    topic: "latin-terms",
    question: "Mi a 'Stx2e (Shiga-toxin / Verotoxin)' magyar jelentése?",
    options: [
      "Shiga-toxin / Verotoxin (Stx2e)",
      "Egyetlen Nukleotid Polimorfizmus",
      "Törzsfejlődés",
      "Referencia genom"
    ],
    correctAnswer: "Shiga-toxin / Verotoxin (Stx2e)"
  },
  {
    id: "latin_103",
    topic: "latin-terms",
    question: "Mi a 'Colibacillosis' magyar jelentése?",
    options: [
      "Colibacillosis",
      "Phred score (minőségi pontszám)",
      "Core genome (közös genom)",
      "Accessory genome (kiegészítő genom)"
    ],
    correctAnswer: "Colibacillosis"
  },
  {
    id: "latin_104",
    topic: "latin-terms",
    question: "Mi a 'PWD' magyar jelentése?",
    options: [
      "Választás utáni hasmenés",
      "Bioinformatika",
      "Illumina szekvenálás (rövid olvasatok)",
      "Oxford Nanopore szekvenálás (hosszú olvasatok)"
    ],
    correctAnswer: "Választás utáni hasmenés"
  },
  {
    id: "latin_105",
    topic: "latin-terms",
    question: "Mi az 'Ataxia' magyar jelentése?",
    options: [
      "Mozgászavar",
      "Sanger szekvenálás",
      "Következő Generációs Szekvenálás",
      "Contig (összefüggő DNS szakasz)"
    ],
    correctAnswer: "Mozgászavar"
  },
  {
    id: "latin_106",
    topic: "latin-terms",
    question: "Mi a 'Paresis' magyar jelentése?",
    options: [
      "Részleges bénulás",
      "Scaffold (állványzat)",
      "Annotáció (genomanalízis)",
      "Reverz vakcinológia"
    ],
    correctAnswer: "Részleges bénulás"
  },
  {
    id: "latin_107",
    topic: "latin-terms",
    question: "Mi a 'Bénulás' magyar jelentése?",
    options: [
      "Bénulás",
      "Hibrid összeállítás",
      "Pan-genom",
      "Fenotípus"
    ],
    correctAnswer: "Bénulás"
  },
  {
    id: "latin_108",
    topic: "latin-terms",
    question: "Mi az 'Ödéma' magyar jelentése?",
    options: [
      "Vizenyő",
      "Genotípus",
      "Antimikrobiális Rezisztencia",
      "Egy Egészség (megközelítés)"
    ],
    correctAnswer: "Vizenyő"
  },
  {
    id: "latin_109",
    topic: "latin-terms",
    question: "Mi a 'Curvatura major' magyar jelentése?",
    options: [
      "A gyomor nagyobb görbülete",
      "Horizontális géntranszfer",
      "Konjugáció",
      "Transzdukció"
    ],
    correctAnswer: "A gyomor nagyobb görbülete"
  },
  {
    id: "latin_110",
    topic: "latin-terms",
    question: "Mi az 'Elektrolitpótlás' magyar jelentése?",
    options: [
      "Elektrolitpótlás",
      "Transzformáció",
      "R-plazmidok (rezisztencia plazmidok)",
      "Integronok"
    ],
    correctAnswer: "Elektrolitpótlás"
  },
  {
    id: "latin_111",
    topic: "latin-terms",
    question: "Mi az 'ESBL' magyar jelentése?",
    options: [
      "Kiterjesztett Spektrumú Béta-Laktamáz",
      "IS elemek (Inzerciós szekvenciák)",
      "SCCmec kazetta",
      "ICE (Integratív és Konjugatív Elemek)"
    ],
    correctAnswer: "Kiterjesztett Spektrumú Béta-Laktamáz"
  },
  {
    id: "latin_112",
    topic: "latin-terms",
    question: "Mi a 'Genetikai rezisztencia' magyar jelentése?",
    options: [
      "Genetikai rezisztencia",
      "blaCTX-M gén",
      "mcr-1 gén",
      "blaNDM-1 gén"
    ],
    correctAnswer: "Genetikai rezisztencia"
  },
  {
    id: "latin_113",
    topic: "latin-terms",
    question: "Mi a 'Kompetitív kizárás' magyar jelentése?",
    options: [
      "Kompetitív kizárás",
      "Karbapenemázok",
      "Aminoglikozid-módosító enzimek",
      "mecA gén"
    ],
    correctAnswer: "Kompetitív kizárás"
  },
  {
    id: "latin_114",
    topic: "latin-terms",
    question: "Mi a 'Transzkriptomika' magyar jelentése?",
    options: [
      "Transzkriptomika",
      "vanA gén",
      "D-Alanin-D-Laktát",
      "erm gének"
    ],
    correctAnswer: "Transzkriptomika"
  },
  {
    id: "latin_115",
    topic: "latin-terms",
    question: "Mi a 'Proteomika' magyar jelentése?",
    options: [
      "Proteomika",
      "MLS rezisztencia",
      "QRDR mutációk",
      "qnr gének"
    ],
    correctAnswer: "Proteomika"
  },
  {
    id: "latin_116",
    topic: "latin-terms",
    question: "Mi a 'Metagenomika' magyar jelentése?",
    options: [
      "Metagenomika",
      "Efflux pumpák",
      "RND család (efflux pumpa)",
      "MFS család (efflux pumpa)"
    ],
    correctAnswer: "Metagenomika"
  },
  {
    id: "latin_117",
    topic: "latin-terms",
    question: "Mi a 'SNP' magyar jelentése?",
    options: [
      "Egyetlen Nukleotid Polimorfizmus",
      "Porinok",
      "Ko-szelekció",
      "Antibiotikum-stewardship (felelős antibiotikum-használat)"
    ],
    correctAnswer: "Egyetlen Nukleotid Polimorfizmus"
  },
  {
    id: "latin_118",
    topic: "latin-terms",
    question: "Mi a 'Filogenetika (phylogeny)' magyar jelentése?",
    options: [
      "Törzsfejlődés",
      "Járványügyi felügyelet",
      "Bakteriofág terápia",
      "Pilus (szex-pilus)"
    ],
    correctAnswer: "Törzsfejlődés"
  },
  {
    id: "latin_119",
    topic: "latin-terms",
    question: "Mi a 'Reference genome' magyar jelentése?",
    options: [
      "Referencia genom",
      "oriT (origin of transfer)",
      "tra-gének (transzfer gének)",
      "Kompetencia (mikrobiológiai)"
    ],
    correctAnswer: "Referencia genom"
  },
  {
    id: "latin_120",
    topic: "latin-terms",
    question: "Mi a 'Phred score' magyar jelentése?",
    options: [
      "Phred score (minőségi pontszám)",
      "Replikatív transzpozíció",
      "Plasmid curing (plazmid elvesztés)",
      "Fitness cost (életképességi költség)"
    ],
    correctAnswer: "Phred score (minőségi pontszám)"
  },
  {
    id: "latin_121",
    topic: "latin-terms",
    question: "Mi a 'Core genome' magyar jelentése?",
    options: [
      "Core genome (közös genom)",
      "Streptococcus suis (baktériumfaj)",
      "Gram-pozitív (festődési tulajdonság)",
      "Gömb alakú baktérium"
    ],
    correctAnswer: "Core genome (közös genom)"
  },
  {
    id: "latin_122",
    topic: "latin-terms",
    question: "Mi az 'Accessory genome' magyar jelentése?",
    options: [
      "Accessory genome (kiegészítő genom)",
      "Képes oxigénnel és anélkül is élni",
      "Zöldülő hemolízis",
      "Kapszula"
    ],
    correctAnswer: "Accessory genome (kiegészítő genom)"
  },
  {
    id: "latin_123",
    topic: "latin-terms",
    question: "Mi a 'Bioinformatika' magyar jelentése?",
    options: [
      "Bioinformatika",
      "Szerológiai típus",
      "Mandulák",
      "Állatról emberre terjedő betegség"
    ],
    correctAnswer: "Bioinformatika"
  },
  {
    id: "latin_124",
    topic: "latin-terms",
    question: "Mi az 'Illumina (Short-read)' magyar jelentése?",
    options: [
      "Illumina szekvenálás (rövid olvasatok)",
      "Agyhártyagyulladás",
      "Hirtelen fellépő, súlyos vérfertőzés",
      "Elkékülés"
    ],
    correctAnswer: "Illumina szekvenálás (rövid olvasatok)"
  },
  {
    id: "latin_125",
    topic: "latin-terms",
    question: "Mi az 'Oxford Nanopore (Long-read)' magyar jelentése?",
    options: [
      "Oxford Nanopore szekvenálás (hosszú olvasatok)",
      "Hátrahajló fejtartás",
      "Szemtekerezgés",
      "Fokozott érzékenység a tapintásra, fájdalomra"
    ],
    correctAnswer: "Oxford Nanopore szekvenálás (hosszú olvasatok)"
  },
  {
    id: "latin_126",
    topic: "latin-terms",
    question: "Mi a 'Sanger szekvenálás' magyar jelentése?",
    options: [
      "Sanger szekvenálás",
      "Ízületgyulladás",
      "Kutyaszerű ülés (klinikai tünet)",
      "Szívbelhártya-gyulladás"
    ],
    correctAnswer: "Sanger szekvenálás"
  },
  {
    id: "latin_127",
    topic: "latin-terms",
    question: "Mi az 'NGS' magyar jelentése?",
    options: [
      "Következő Generációs Szekvenálás",
      "A vese egy részének elhalása",
      "Agyvíz",
      "Több savóshártya gyulladása"
    ],
    correctAnswer: "Következő Generációs Szekvenálás"
  },
  {
    id: "latin_128",
    topic: "latin-terms",
    question: "Mi a 'Contig' magyar jelentése?",
    options: [
      "Contig (összefüggő DNS szakasz)",
      "Antibiotikum-érzékenységi vizsgálat",
      "Béta-laktám antibiotikumok",
      "Aminopenicillinek"
    ],
    correctAnswer: "Contig (összefüggő DNS szakasz)"
  },
  {
    id: "latin_129",
    topic: "latin-terms",
    question: "Mi a 'Scaffold' magyar jelentése?",
    options: [
      "Scaffold (állványzat)",
      "Cefalosporinok",
      "Kritikusan fontos antibiotikum",
      "Florfenikol (antibiotikum)"
    ],
    correctAnswer: "Scaffold (állványzat)"
  },
  {
    id: "latin_130",
    topic: "latin-terms",
    question: "Mi az 'Annotation' magyar jelentése?",
    options: [
      "Annotáció (genomanalízis)",
      "Trimetoprim-szulfonamid (antibiotikum-kombináció)",
      "Tetraciklinek (antibiotikum-csoport)",
      "Makrolidok (antibiotikum-csoport)"
    ],
    correctAnswer: "Annotáció (genomanalízis)"
  },
  {
    id: "latin_131",
    topic: "latin-terms",
    question: "Mi a 'Reverse vaccinology' magyar jelentése?",
    options: [
      "Reverz vakcinológia",
      "Linkózamidok (antibiotikum-csoport)",
      "Multirezisztencia",
      "Telepspecifikus oltóanyag"
    ],
    correctAnswer: "Reverz vakcinológia"
  },
  {
    id: "latin_132",
    topic: "latin-terms",
    question: "Mi a 'Hybrid assembly' magyar jelentése?",
    options: [
      "Hibrid összeállítás",
      "Mindent be-mindent ki rendszer",
      "Sertés reprodukciós és légzőszervi szindróma",
      "Sertés circovírus 2. típus"
    ],
    correctAnswer: "Hibrid összeállítás"
  },
  {
    id: "latin_133",
    topic: "latin-terms",
    question: "Mi a 'Pan-genom' magyar jelentése?",
    options: [
      "Pan-genom",
      "Influenza vírus, mely légzőszervi betegséget okoz sertésekben",
      "Polimeráz-láncreakció",
      "Tömegspektrometria"
    ],
    correctAnswer: "Pan-genom"
  },
  {
    id: "latin_134",
    topic: "latin-terms",
    question: "Mi a 'Phenotype' magyar jelentése?",
    options: [
      "Fenotípus",
      "Minimális Gátló Koncentráció",
      "Injekciós beadási mód",
      "Dexametazon (szteroid gyulladáscsökkentő)"
    ],
    correctAnswer: "Fenotípus"
  },
  {
    id: "latin_135",
    topic: "latin-terms",
    question: "Mi a 'Genotype' magyar jelentése?",
    options: [
      "Genotípus",
      "Csoportos gyógykezelés",
      "Bélflóra egyensúlyának felborulása",
      "Exotoxin"
    ],
    correctAnswer: "Genotípus"
  },
  {
    id: "latin_136",
    topic: "latin-terms",
    question: "Mi az 'AMR' magyar jelentése?",
    options: [
      "Antimikrobiális Rezisztencia",
      "Endospóra",
      "Csak oxigénmentes környezetben él",
      "Szövetelhalás"
    ],
    correctAnswer: "Antimikrobiális Rezisztencia"
  },
  {
    id: "latin_137",
    topic: "latin-terms",
    question: "Mi az 'One Health' magyar jelentése?",
    options: [
      "Egy Egészség (megközelítés)",
      "Mérgezés (toxinok a vérben)",
      "Vastagbélgyulladás",
      "Clostridioides difficile (baktériumfaj)"
    ],
    correctAnswer: "Egy Egészség (megközelítés)"
  },
  {
    id: "latin_138",
    topic: "latin-terms",
    question: "Mi a 'Horizontális géntranszfer (HGT)' magyar jelentése?",
    options: [
      "Horizontális géntranszfer",
      "Elhalásos bélgyulladás",
      "Gázos sercegés/ropogás (tapintáskor)",
      "Tetanusz"
    ],
    correctAnswer: "Horizontális géntranszfer"
  },
  {
    id: "latin_139",
    topic: "latin-terms",
    question: "Mi a 'Konjugáció' magyar jelentése?",
    options: [
      "Konjugáció",
      "Botulizmus",
      "Mérgezés",
      "Merevgörcsös bénulás"
    ],
    correctAnswer: "Konjugáció"
  },
  {
    id: "latin_140",
    topic: "latin-terms",
    question: "Mi a 'Transzdukció' magyar jelentése?",
    options: [
      "Transzdukció",
      "Petyhüdt bénulás",
      "Erysipelothrix rhusiopathiae (baktériumfaj)",
      "Sertésorbánc"
    ],
    correctAnswer: "Transzdukció"
  },
  {
    id: "latin_141",
    topic: "latin-terms",
    question: "Mi a 'Transzformáció' magyar jelentése?",
    options: [
      "Transzformáció",
      "Neuraminidáz (enzim)",
      "Erysipeloid (emberi orbánc)",
      "Ízületi merevség/összecsontosodás"
    ],
    correctAnswer: "Transzformáció"
  },
  {
    id: "latin_142",
    topic: "latin-terms",
    question: "Mi az 'R-plazmidok' magyar jelentése?",
    options: [
      "R-plazmidok (rezisztencia plazmidok)",
      "Vegetatív endocarditis",
      "Lépduzzanat",
      "Mycoplasma hyorhinis (baktériumfaj)"
    ],
    correctAnswer: "R-plazmidok (rezisztencia plazmidok)"
  },
  {
    id: "latin_143",
    topic: "latin-terms",
    question: "Mi az 'Integronok' magyar jelentése?",
    options: [
      "Integronok",
      "Mycoplasma hyosynoviae (baktériumfaj)",
      "Mollicutes (baktériumosztály)",
      "Pleuromutilin antibiotikumok"
    ],
    correctAnswer: "Integronok"
  },
  {
    id: "latin_144",
    topic: "latin-terms",
    question: "Mi az 'IS elemek' magyar jelentése?",
    options: [
      "IS elemek (Inzerciós szekvenciák)",
      "Nem szteroid gyulladáscsökkentő",
      "Ízületi folyadék",
      "Fibrines savóshártya-gyulladás"
    ],
    correctAnswer: "IS elemek (Inzerciós szekvenciák)"
  },
  {
    id: "latin_145",
    topic: "latin-terms",
    question: "Mi az 'SCCmec kazetta' magyar jelentése?",
    options: [
      "SCCmec kazetta",
      "Fibrines szívburokgyulladás",
      "Glaesserella parasuis (baktériumfaj)",
      "NAD (V-faktor)"
    ],
    correctAnswer: "SCCmec kazetta"
  },
  {
    id: "latin_146",
    topic: "latin-terms",
    question: "Mi az 'ICE' magyar jelentése?",
    options: [
      "ICE (Integratív és Konjugatív Elemek)",
      "Szatellita növekedés",
      "vtaA gének (virulencia-asszociált gének)",
      "Sertés Légzőszervi Betegség Komplex"
    ],
    correctAnswer: "ICE (Integratív és Konjugatív Elemek)"
  },
  {
    id: "latin_147",
    topic: "latin-terms",
    question: "Mi a 'blaCTX-M' magyar jelentése?",
    options: [
      "blaCTX-M gén",
      "Vérfertőzés",
      "Gennyes/fibrines agyhártyagyulladás",
      "Elkékülés"
    ],
    correctAnswer: "blaCTX-M gén"
  },
  {
    id: "latin_148",
    topic: "latin-terms",
    question: "Mi az 'mcr-1' magyar jelentése?",
    options: [
      "mcr-1 gén",
      "Staphylococcus hyicus (baktériumfaj)",
      "Staphylococcus aureus (baktériumfaj)",
      "Kenőcsös bőrgyulladás"
    ],
    correctAnswer: "mcr-1 gén"
  },
  {
    id: "latin_149",
    topic: "latin-terms",
    question: "Mi a 'blaNDM-1' magyar jelentése?",
    options: [
      "blaNDM-1 gén",
      "Meticillin-rezisztens Staphylococcus aureus",
      "Haszonállatokhoz köthető MRSA",
      "Hámleválás"
    ],
    correctAnswer: "blaNDM-1 gén"
  },
  {
    id: "latin_150",
    topic: "latin-terms",
    question: "Mi a 'Karbapenemázok' magyar jelentése?",
    options: [
      "Karbapenemázok",
      "Vér útján terjedő",
      "Tőgygyulladás",
      "Tejhiány"
    ],
    correctAnswer: "Karbapenemázok"
  },
  {
    id: "latin_151",
    topic: "latin-terms",
    question: "Mi az 'Aminoglikozid-módosító enzimek (AME)' magyar jelentése?िजन",
    options: [
      "Aminoglikozid-módosító enzimek",
      "Metasztatikus tályogok",
      "Kataláz-teszt",
      "Koaguláz-teszt"
    ],
    correctAnswer: "Aminoglikozid-módosító enzimek"
  },
  {
    id: "latin_152",
    topic: "latin-terms",
    question: "Mi a 'mecA gén' magyar jelentése?",
    options: [
      "mecA gén",
      "Escherichia coli (baktériumfaj)",
      "Enterotoxint termelő E. coli",
      "Enteropatogén E. coli"
    ],
    correctAnswer: "mecA gén"
  },
  {
    id: "latin_153",
    topic: "latin-terms",
    question: "Mi a 'vanA gén' magyar jelentése?",
    options: [
      "vanA gén",
      "Verotoxint termelő E. coli / Ödémabetegség E. coli",
      "Bélcsatornán kívüli patogén E. coli",
      "Fimbriák (adléziós faktorok)"
    ],
    correctAnswer: "vanA gén"
  },
  {
    id: "latin_154",
    topic: "latin-terms",
    question: "Mi a 'D-Ala-D-Lac' magyar jelentése?",
    options: [
      "D-Alanin-D-Laktát",
      "Hőlabilis toxin (LT)",
      "Hőstabil toxinok (STa, STb)",
      "Shiga-toxin / Verotoxin (Stx2e)"
    ],
    correctAnswer: "D-Alanin-D-Laktát"
  },
  {
    id: "latin_155",
    topic: "latin-terms",
    question: "Mi az 'erm gének' magyar jelentése?",
    options: [
      "erm gének",
      "Colibacillosis",
      "Választás utáni hasmenés",
      "Mozgászavar"
    ],
    correctAnswer: "erm gének"
  },
  {
    id: "latin_156",
    topic: "latin-terms",
    question: "Mi az 'MLS rezisztencia' magyar jelentése?",
    options: [
      "MLS rezisztencia",
      "Részleges bénulás",
      "Bénulás",
      "Vizenyő"
    ],
    correctAnswer: "MLS rezisztencia"
  },
  {
    id: "latin_157",
    topic: "latin-terms",
    question: "Mi a 'QRDR mutációk' magyar jelentése?",
    options: [
      "QRDR mutációk",
      "A gyomor nagyobb görbülete",
      "Elektrolitpótlás",
      "Kiterjesztett Spektrumú Béta-Laktamáz"
    ],
    correctAnswer: "QRDR mutációk"
  },
  {
    id: "latin_158",
    topic: "latin-terms",
    question: "Mi a 'qnr gének' magyar jelentése?",
    options: [
      "qnr gének",
      "Genetikai rezisztencia",
      "Kompetitív kizárás",
      "Transzkriptomika"
    ],
    correctAnswer: "qnr gének"
  },
  {
    id: "latin_159",
    topic: "latin-terms",
    question: "Mi az 'Efflux pumpák' magyar jelentése?",
    options: [
      "Efflux pumpák",
      "Proteomika",
      "Metagenomika",
      "Egyetlen Nukleotid Polimorfizmus"
    ],
    correctAnswer: "Efflux pumpák"
  },
  {
    id: "latin_160",
    topic: "latin-terms",
    question: "Mi az 'RND család' magyar jelentése?",
    options: [
      "RND család (efflux pumpa)",
      "Törzsfejlődés",
      "Referencia genom",
      "Phred score (minőségi pontszám)"
    ],
    correctAnswer: "RND család (efflux pumpa)"
  },
  {
    id: "latin_161",
    topic: "latin-terms",
    question: "Mi az 'MFS család' magyar jelentése?",
    options: [
      "MFS család (efflux pumpa)",
      "Core genome (közös genom)",
      "Accessory genome (kiegészítő genom)",
      "Bioinformatika"
    ],
    correctAnswer: "MFS család (efflux pumpa)"
  },
  {
    id: "latin_162",
    topic: "latin-terms",
    question: "Mi a 'Porinok' magyar jelentése?",
    options: [
      "Porinok",
      "Illumina szekvenálás (rövid olvasatok)",
      "Oxford Nanopore szekvenálás (hosszú olvasatok)",
      "Sanger szekvenálás"
    ],
    correctAnswer: "Porinok"
  },
  {
    id: "latin_163",
    topic: "latin-terms",
    question: "Mi a 'Co-szelekció' magyar jelentése?",
    options: [
      "Ko-szelekció",
      "Következő Generációs Szekvenálás",
      "Contig (összefüggő DNS szakasz)",
      "Scaffold (állványzat)"
    ],
    correctAnswer: "Ko-szelekció"
  },
  {
    id: "latin_164",
    topic: "latin-terms",
    question: "Mi a 'Stewardship' magyar jelentése?",
    options: [
      "Antibiotikum-stewardship (felelős antibiotikum-használat)",
      "Annotáció (genomanalízis)",
      "Reverz vakcinológia",
      "Hibrid összeállítás"
    ],
    correctAnswer: "Antibiotikum-stewardship (felelős antibiotikum-használat)"
  },
  {
    id: "latin_165",
    topic: "latin-terms",
    question: "Mi a 'Surveillance' magyar jelentése?",
    options: [
      "Járványügyi felügyelet",
      "Pan-genom",
      "Fenotípus",
      "Genotípus"
    ],
    correctAnswer: "Járványügyi felügyelet"
  },
  {
    id: "latin_166",
    topic: "latin-terms",
    question: "Mi a 'Bakteriofág terápia' magyar jelentése?",
    options: [
      "Bakteriofág terápia",
      "Antimikrobiális Rezisztencia",
      "Egy Egészség (megközelítés)",
      "Horizontális géntranszfer"
    ],
    correctAnswer: "Bakteriofág terápia"
  },
  {
    id: "latin_167",
    topic: "latin-terms",
    question: "Mi a 'Pilus' magyar jelentése?",
    options: [
      "Pilus (szex-pilus)",
      "Konjugáció",
      "Transzdukció",
      "Transzformáció"
    ],
    correctAnswer: "Pilus (szex-pilus)"
  },
  {
    id: "latin_168",
    topic: "latin-terms",
    question: "Mi az 'oriT' magyar jelentése?",
    options: [
      "oriT (origin of transfer)",
      "R-plazmidok (rezisztencia plazmidok)",
      "Integronok",
      "IS elemek (Inzerciós szekvenciák)"
    ],
    correctAnswer: "oriT (origin of transfer)"
  },
  {
    id: "latin_169",
    topic: "latin-terms",
    question: "Mi a 'tra-gének' magyar jelentése?",
    options: [
      "tra-gének (transzfer gének)",
      "SCCmec kazetta",
      "ICE (Integratív és Konjugatív Elemek)",
      "blaCTX-M gén"
    ],
    correctAnswer: "tra-gének (transzfer gének)"
  },
  {
    id: "latin_170",
    topic: "latin-terms",
    question: "Mi a 'Kompetencia' magyar jelentése?",
    options: [
      "Kompetencia (mikrobiológiai)",
      "mcr-1 gén",
      "blaNDM-1 gén",
      "Karbapenemázok"
    ],
    correctAnswer: "Kompetencia (mikrobiológiai)"
  },
  {
    id: "latin_171",
    topic: "latin-terms",
    question: "Mi a 'Replikatív transzpozíció' magyar jelentése?",
    options: [
      "Replikatív transzpozíció",
      "Aminoglikozid-módosító enzimek",
      "mecA gén",
      "vanA gén"
    ],
    correctAnswer: "Replikatív transzpozíció"
  },
  {
    id: "latin_172",
    topic: "latin-terms",
    question: "Mi a 'Plasmid curing' magyar jelentése?",
    options: [
      "Plasmid curing (plazmid elvesztés)",
      "D-Alanin-D-Laktát",
      "erm gének",
      "MLS rezisztencia"
    ],
    correctAnswer: "Plasmid curing (plazmid elvesztés)"
  },
  {
    id: "latin_173",
    topic: "latin-terms",
    question: "Mi a 'Fitness cost' magyar jelentése?",
    options: [
      "Fitness cost (életképességi költség)",
      "QRDR mutációk",
      "qnr gének",
      "Efflux pumpák"
    ],
    correctAnswer: "Fitness cost (életképességi költség)"
  }
];

// 4. Végül definiáljuk a latinTermsData-t, ami használja a fenti adatokat
export const getLatinTermsData = () => ({
  id: "latin-terms",
  title: "Latin kifejezések",
  shortTitle: "Latin",
  description: "A fontosabb latin kifejezések és magyar jelentésük, definíciójuk.",
  studyMaterial: latinTerms.map(term => ({
    title: term.term,
    icon: "Book", // You can choose an appropriate icon
    color: "text-amber-600", // You can choose an appropriate color
    iconColor: "#FFFFFF",
    sections: [
      {
        header: "Jelentés és Definíció",
        points: [
          `**Jelentés**: ${term.translation}`,
          `**Definíció**: _${term.description}_`
        ]
      },
    ],
  })),
  questions: latinTermsQuestions,
});
