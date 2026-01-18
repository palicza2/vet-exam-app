export const ecoliData = {
  id: "ecoli",
  title: "5. Escherichia coli fertőzések",
  studyMaterial: [
    {
      "title": "1. A kórokozó jellemzése",
      "icon": "microscope",
      "color": "bg-blue-50 border-blue-200",
      "iconColor": "text-blue-500",
      "sections": [
        {
          "header": "1.1. Általános jellemzők",
          "points": [
            "**Gram-negatív**, pálca alakú baktérium",
            "A normál bélflóra része, de bizonyos virulenciafaktorokkal rendelkező törzsei megbetegedést okoznak",
            "**Fakultatív anaerob**, 24 óra alatt kiválóan növekszik"
          ]
        },
        {
          "header": "1.2. Főbb patotípusok sertésben",
          "points": [
            "**ETEC (Enterotoxint termelő):** Legfontosabb; hasmenést okoz toxinok útján",
            "**EPEC (Enteropatogén):** Az intimin fehérjével tapad, károsítja a mikrobolyhokat",
            "**STEC/VTEC (Shiga-toxint termelő):** Ödémabetegség okozója",
            "**ExPEC (Extraintestinalis):** Bélből kijutva szeptikémiát, tőgy- vagy méhgyulladást okoz"
          ]
        }
      ]
    },
    {
      "title": "2. Virulenciafaktorok (ETEC)",
      "icon": "zap",
      "color": "bg-yellow-50 border-yellow-200",
      "iconColor": "text-yellow-600",
      "sections": [
        {
          "header": "2.1. Tapadás (Fimbriák)",
          "points": [
            "**Újszülöttkor:** F5 (K99), F6 (987P), F41 fimbriák",
            "**Szopós és választott kor:** F4 (K88), F18 fimbriák",
            "A fimbriák segítségével tapadnak a bélhámsejtek receptoraihoz"
          ]
        },
        {
          "header": "2.2. Toxinok",
          "points": [
            "**Enterotoxinok:** LT (hőlabilis), STa és STb (hőstabil)",
            "**Hatás:** Fokozzák a Cl⁻ szekréciót, gátolják a Na⁺ és víz visszaszívását",
            "**Eredmény:** Szekréciós hasmenés (a bélhám szerkezetileg ép marad!)"
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
          "header": "3.1. Újszülöttkori colihasmenés",
          "points": [
            "Élet első napjaiban; vizes, sárgás hasmenés",
            "**Boncolás:** Híg béltartalom, de a bélfal ép, a bélfodri nyirokerek tejfehérek (felszívódott zsír miatt - a bélhám működik!)",
            "**Ok:** Kolosztrumhiány, hideg környezet"
          ]
        },
        {
          "header": "3.2. Választás utáni colihasmenés",
          "points": [
            "Stressz és takarmányváltás hatására (4–6 hetes korban)",
            "Főleg F4-fimbriás ETEC törzsek",
            "Tünet: híg bélsár, dehidráció, 'csapzott' hát"
          ]
        }
      ]
    },
    {
      "title": "4. Diagnózis és Kezelés",
      "icon": "search",
      "color": "bg-slate-50 border-slate-200",
      "iconColor": "text-slate-500",
      "sections": [
        {
          "header": "4.1. Diagnosztika",
          "points": [
            "Kórtörténet és életkor alapján gyanítható",
            "**PCR:** A virulenciagének (fimbriák, toxinok) kimutatása döntő",
            "Sima E. coli kimutatása nem elég, mert a normál flórában is ott van!"
          ]
        },
        {
          "header": "4.2. Terápia",
          "points": [
            "**Antibiotikum:** Amoxicillin, kolisztin, fluorokinolonok, neomycin",
            "**Rezisztencia:** ESBL-termelés (kiterjesztett spektrumú béta-laktamáz) egyre gyakoribb!",
            "**Szupportív:** Folyadék- és elektrolitpótlás, melegítés"
          ]
        }
      ]
    },
    {
      "title": "5. Megelőzés",
      "icon": "shield-check",
      "color": "bg-emerald-50 border-emerald-200",
      "iconColor": "text-emerald-500",
      "sections": [
        {
          "header": "5.1. Vakcinázás",
          "points": [
            "**Kocák oltása:** A vemhesség végén (fimbria-antigénekkel), kolosztrális védelmet ad",
            "**Malacok orális immunizálása:** Legyengített törzsekkel választás körül"
          ]
        },
        {
          "header": "5.2. Menedzsment",
          "points": [
            "Fialó fertőtlenítése, száraz/meleg fészek, fokozatos választás, cink-oxid használata"
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: "ecoli_1",
      topic: "E. coli",
      type: "mcq",
      question: "Melyik E. coli patotípus a legfontosabb hasmenést okozó csoport sertésben?",
      options: ["ETEC", "EPEC", "STEC", "ExPEC"],
      correctAnswer: 0,
      explanation: "Az ETEC (Enterotoxint termelő E. coli) felelős a legtöbb hasmenéses megbetegedésért."
    },
    {
      id: "ecoli_2",
      topic: "E. coli",
      type: "mcq",
      question: "Hogyan tapadnak az ETEC törzsek a bélhámsejtekhez?",
      options: ["Ostorral", "Fimbriákkal (adhézinekkel)", "Tokkal", "Spórával"],
      correctAnswer: 1,
      explanation: "A fimbriák (pl. F4, F5) teszik lehetővé a specifikus tapadást a receptorokhoz."
    },
    {
      id: "ecoli_3",
      topic: "E. coli",
      type: "mcq",
      question: "Melyik fimbria jellemző az újszülöttkori colihasmenésre?",
      options: ["F18", "F5 (K99)", "P-fimbria", "Nincs fimbriájuk"],
      correctAnswer: 1,
      explanation: "Az újszülött malacokban az F5, F6 és F41 fimbriák a leggyakoribbak."
    },
    {
      id: "ecoli_4",
      topic: "E. coli",
      type: "mcq",
      question: "Milyen típusú hasmenést okoznak az ETEC toxinok?",
      options: ["Malabszorpciós (felszívódási zavar)", "Szekréciós (folyadékkiválasztás fokozódása)", "Véres", "Nem okoznak hasmenést"],
      correctAnswer: 1,
      explanation: "A toxinok a Cl- kiválasztást növelik és gátolják a Na+ visszaszívást, ami szekréciós hasmenést okoz."
    },
    {
      id: "ecoli_5",
      topic: "E. coli",
      type: "mcq",
      question: "Mi látható a bélfodri nyirokerekben újszülöttkori colihasmenésnél boncoláskor?",
      options: ["Vér", "Gázbuborékok", "Tejfehér folyadék (felszívódott zsír)", "Üresek"],
      correctAnswer: 2,
      explanation: "A fehér nyirokerek azt jelzik, hogy a bélhám ép és képes a tápanyagok (zsír) felszívására."
    },
    {
      id: "ecoli_6",
      topic: "E. coli",
      type: "mcq",
      question: "Melyik fehérje segítségével tapad az EPEC patotípus a bélhámhoz?",
      options: ["Exotoxin", "Intimin", "Hemolizin", "Inzulin"],
      correctAnswer: 1,
      explanation: "Az EPEC törzsek az intimin fehérje révén hoznak létre szoros kötődést (attachment/effacement)."
    },
    {
      id: "ecoli_7",
      topic: "E. coli",
      type: "mcq",
      question: "Melyik fimbria játszik szerepet a választás utáni hasmenésben és az ödémabetegségben?",
      options: ["F5", "F6", "F18", "F41"],
      correctAnswer: 2,
      explanation: "Az F18 fimbria receptorai csak idősebb malacokban jelennek meg a bélhám felszínén."
    },
    {
      id: "ecoli_8",
      topic: "E. coli",
      type: "mcq",
      question: "Mit jelent az ESBL rövidítés?",
      options: ["Nagyon Erős Baci", "Kiterjesztett spektrumú béta-laktamáz (antibiotikum rezisztencia enzim)", "Európai Sertés Labor", "Extra Sós Béltartalom"],
      correctAnswer: 1,
      explanation: "Az ESBL-termelő baktériumok rezisztensek a legtöbb béta-laktám antibiotikumra (pl. cefalosporinok)."
    },
    {
      id: "ecoli_9",
      topic: "E. coli",
      type: "mcq",
      question: "Melyik diagnosztikai módszer alkalmas a virulenciagének gyors kimutatására?",
      options: ["Röntgen", "PCR", "Tapintás", "Ízlelés"],
      correctAnswer: 1,
      explanation: "A PCR segítségével azonosíthatók a toxinok és fimbriák génjei a baktériumban."
    },
    {
      id: "ecoli_10",
      topic: "E. coli",
      type: "mcq",
      question: "Mikor a legcélszerűbb a kocák vakcinázása E. coli ellen?",
      options: ["Fedeztetéskor", "A vemhesség utolsó harmadában", "Ellés után közvetlenül", "Soha"],
      correctAnswer: 1,
      explanation: "A vemhesség végén végzett oltás biztosítja a legmagasabb ellenanyagszintet a kolosztrumban."
    },
    {
      id: "ecoli_11",
      topic: "E. coli",
      type: "bool",
      question: "Az E. coli Gram-negatív pálca alakú baktérium.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, az Enterobacteriaceae család tagja."
    },
    {
      id: "ecoli_12",
      topic: "E. coli",
      type: "bool",
      question: "Az ETEC törzsek súlyos bélbolyoh-pusztulást okoznak.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis, az ETEC okozta hasmenés során a bélhám szerkezetileg ép marad."
    },
    {
      id: "ecoli_13",
      topic: "E. coli",
      type: "mcq",
      question: "Melyik a legfontosabb szupportív kezelés colihasmenés esetén?",
      options: ["Altatás", "Folyadék- és elektrolitpótlás", "Vitaminszuri", "Vérátömlesztés"],
      correctAnswer: 1,
      explanation: "A malacok az el nem távozó folyadék és sók hiánya miatt pusztulnak el, így a pótlásuk létfontosságú."
    },
    {
      id: "ecoli_14",
      topic: "E. coli",
      type: "mcq",
      question: "Milyen színű jellemzően a colihasmenéses bélsár?",
      options: ["Véres piros", "Sárgás vagy fehéres, híg/vizes", "Fekete", "Zöld"],
      correctAnswer: 1,
      explanation: "Az újszülöttkori colira a sárgás, vízszerű hasmenés jellemző."
    },
    {
      id: "ecoli_15",
      topic: "E. coli",
      type: "mcq",
      question: "Melyik fimbria receptorai hiányoznak az újszülött malacokból?",
      options: ["F4", "F5", "F18", "F6"],
      correctAnswer: 2,
      explanation: "Az F18 receptorai csak a 3. hét után jelennek meg a bélhámsejteken."
    },
    {
      id: "ecoli_16",
      topic: "E. coli",
      type: "mcq",
      question: "Hogyan hat a hideg környezet a malacok colihasmenésére?",
      options: ["Gyógyítja", "Súlyosbítja (hajlamosító tényező)", "Nincs hatása", "Megállítja a baktériumokat"],
      correctAnswer: 1,
      explanation: "A hideg gyengíti a malacok ellenállását és lassítja a bélmozgást, segítve a colik elszaporodását."
    },
    {
      id: "ecoli_17",
      topic: "E. coli",
      type: "mcq",
      question: "Melyik patotípus felelős a tőgygyulladásért?",
      options: ["ETEC", "EPEC", "ExPEC", "VTEC"],
      correctAnswer: 2,
      explanation: "Az extraintestinalis (bélcsatornán kívüli) törzsek okoznak mastitist."
    },
    {
      id: "ecoli_18",
      topic: "E. coli",
      type: "mcq",
      question: "Mi a kolisztin-szulfát fő jellemzője?",
      options: ["Csak vírusra hat", "Bélből nem szívódik fel, így helyileg hat a colikra", "Mérgező a sertésre", "Mindenre jó"],
      correctAnswer: 1,
      explanation: "A kolisztin kiválóan alkalmas a bélcsatorna fertőtlenítésére szájon át adva."
    },
    {
      id: "ecoli_19",
      topic: "E. coli",
      type: "mcq",
      question: "Mi történik a Na+ felszívódással ETEC fertőzéskor?",
      options: ["Fokozódik", "Gátlódik", "Változatlan", "Azonnal megszűnik"],
      correctAnswer: 1,
      explanation: "A toxinok gátolják a nátrium visszaszívását, ami magával rántja a vizet a bélbe."
    },
    {
      id: "ecoli_20",
      topic: "E. coli",
      type: "bool",
      question: "Az E. coli baktériumok mozgásra képesek (többségük).",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, a legtöbb E. coli törzs rendelkezik peritrich ostorokkal."
    },
    {
      id: "ecoli_21",
      topic: "E. coli",
      type: "mcq",
      question: "Milyen kémhatású jellemzően a colihasmenéses bélsár?",
      options: ["Savanyú", "Lúgos", "Semleges", "Erősen savas"],
      correctAnswer: 1,
      explanation: "A szekréciós hasmenés lúgos kémhatású (szemben pl. a rotavírusos savanyú hasmenéssel)."
    },
    {
      id: "ecoli_22",
      topic: "E. coli",
      type: "mcq",
      question: "Hogyan jut el az ellenanyag a malachoz kocaoltás után?",
      options: ["A méhlepényen át", "A kolosztrummal (föcstejjel)", "A levegőből", "Injekcióval"],
      correctAnswer: 1,
      explanation: "Sertésben nincs transzplacentáris ellenanyag-átvitel, csak a föcstejjel."
    },
    {
      id: "ecoli_23",
      topic: "E. coli",
      type: "mcq",
      question: "Melyik elem adagolása segít megelőzni a választási hasmenést?",
      options: ["Vas", "Cink (Cink-oxid formájában)", "Réz", "Arany"],
      correctAnswer: 1,
      explanation: "A cink-oxid (ZnO) gátolja az E. coli tapadását és szaporodását a bélben."
    },
    {
      id: "ecoli_24",
      topic: "E. coli",
      type: "mcq",
      question: "Mit jelent a 'virulenciagén'?",
      options: ["A baktérium színét kódolja", "A betegségokozó képességért felelős tényezőt (pl. toxint) kódol", "A baktérium halálát okozza", "Semmit"],
      correctAnswer: 1,
      explanation: "Ezek a gének teszik a békés E. colit kórokozóvá."
    },
    {
      id: "ecoli_25",
      topic: "E. coli",
      type: "mcq",
      question: "Mi a teendő ha egy egész alom hasmenéses?",
      options: ["Csak az egyiket kezelni", "Az egész almot kezelni és a környezetet rendbetenni", "Várni", "Kocát eladni"],
      correctAnswer: 1,
      explanation: "A csoportos kezelés és a higiénia javítása elengedhetetlen."
    },
    {
      id: "ecoli_26",
      topic: "E. coli",
      type: "mcq",
      question: "Melyik toxin hőlabilis (LT)?",
      options: ["Hőre érzékeny fehérje", "Hőnek ellenálló zsír", "Cukor", "Vitaminkomplex"],
      correctAnswer: 0,
      explanation: "Az LT toxin hőhatásra elbomlik (denaturálódik)."
    },
    {
      id: "ecoli_27",
      topic: "E. coli",
      type: "mcq",
      question: "Milyen táptalajon nő jól az E. coli?",
      options: ["Csak speciális csokoládé agaron", "Egyszerű táptalajokon is (pl. véres agar, MacConkey)", "Csak vírusokon", "Soha nem nő"],
      correctAnswer: 1,
      explanation: "Az E. coli nem igényes, általános laboratóriumi táptalajokon jól tenyészthető."
    },
    {
      id: "ecoli_28",
      topic: "E. coli",
      type: "bool",
      question: "Minden E. coli törzs betegséget okoz.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 1,
      explanation: "Hamis, a legtöbb E. coli békés lakója a bélcsatornának."
    },
    {
      id: "ecoli_29",
      topic: "E. coli",
      type: "mcq",
      question: "Mi a 'malabszorpció'?",
      options: ["Sok evés", "Felszívódási zavar", "Hányás", "Láz"],
      correctAnswer: 1,
      explanation: "A bélhám károsodása (pl. EPEC esetén) miatt a tápanyagok nem szívódnak fel megfelelően."
    },
    {
      id: "ecoli_30",
      topic: "E. coli",
      type: "mcq",
      question: "Hány óra alatt ad eredményt a tenyésztés?",
      options: ["1 óra", "18-24 óra", "1 hét", "1 hónap"],
      correctAnswer: 1,
      explanation: "Az E. coli gyorsan növő baktérium, egy nap alatt látható telepeket képez."
    },
    {
      id: "ecoli_31",
      topic: "E. coli",
      type: "mcq",
      question: "Melyik fimbria receptorai 'kopnak le' a malacról az életkor előrehaladtával?",
      options: ["F18", "F5 (K99)", "F4", "AIDA"],
      correctAnswer: 1,
      explanation: "Az F5 receptorai csak az élet első napjaiban vannak jelen, ezért az újszülöttekre jellemző."
    },
    {
      id: "ecoli_32",
      topic: "E. coli",
      type: "mcq",
      question: "Milyen hatással van a stressz a választási colihasmenésre?",
      options: ["Csökkenti a kockázatot", "Súlyosbítja a tüneteket és hajlamosít", "Nincs hatása", "Csak a kanokra hat"],
      correctAnswer: 1,
      explanation: "A stressz gyengíti a bélnyálkahártya védelmét."
    },
    {
      id: "ecoli_33",
      topic: "E. coli",
      type: "mcq",
      question: "Miért fontos a köldökfertőtlenítés?",
      options: ["Esztétika", "A szeptikémiát okozó (ExPEC) Colik bejutásának gátlása", "Hogy ne legyen büdös", "Semmiért"],
      correctAnswer: 1,
      explanation: "A friss köldökcsonk nyitott kapu a baktériumok számára a véráram felé."
    },
    {
      id: "ecoli_34",
      topic: "E. coli",
      type: "bool",
      question: "Az E. coli fakultatív anaerob.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, oxigénnel és anélkül is szaporodik."
    },
    {
      id: "ecoli_35",
      topic: "E. coli",
      type: "mcq",
      question: "Mi a 'csapzott' hát oka?",
      options: ["Sok víz", "Dehidráció (kiszáradás) miatt a bőr rugalmassága csökken és a szőr borzolt lesz", "Sár", "Helytelen fésülés"],
      correctAnswer: 1,
      explanation: "A folyadékvesztés tipikus külső jele malacokban."
    },
    {
      id: "ecoli_36",
      topic: "E. coli",
      type: "mcq",
      question: "Mit tartalmaznak a malacoknak szánt orális vakcinák?",
      options: ["Mérget", "Legyengített, nem toxintermelő E. coli törzseket", "Csak vizet", "Antibiotikumot"],
      correctAnswer: 1,
      explanation: "Ezek a törzsek versengenek a patogénekkel a bélben (kompetitív kizárás)."
    },
    {
      id: "ecoli_37",
      topic: "E. coli",
      type: "mcq",
      question: "Melyik enzimcsoport bontja le a penicillineket bizonyos Colikban?",
      options: ["Lipáz", "Béta-laktamázok", "Proteáz", "Amiláz"],
      correctAnswer: 1,
      explanation: "A béta-laktamáz termelés a rezisztencia egyik fő oka."
    },
    {
      id: "ecoli_38",
      topic: "E. coli",
      type: "mcq",
      question: "Mi jellemző a gyomor állapotára boncoláskor újszülött colinál?",
      options: ["Üres", "Tejjel telt (az állat evett, nem az étvágytalanság a baj)", "Vérzik", "Kilyukadt"],
      correctAnswer: 1,
      explanation: "A telt gyomor jelzi, hogy a folyamat olyan gyors, hogy még az emésztésre sem volt idő."
    },
    {
      id: "ecoli_39",
      topic: "E. coli",
      type: "mcq",
      question: "Milyen antibiotikum-csoportba tartozik az enrofloxacin?",
      options: ["Penicillin", "Fluorokinolon", "Aminoglikozid", "Makrolid"],
      correctAnswer: 1,
      explanation: "Széles spektrumú, jól penetráló antibiotikum."
    },
    {
      id: "ecoli_40",
      topic: "E. coli",
      type: "bool",
      question: "Az E. coli szelektiv táptalajon (pl. MacConkey) is tenyészthető.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, a MacConkey agar segít elkülöníteni a laktóz-bontó baktériumokat."
    },
    {
      id: "ecoli_41",
      topic: "E. coli",
      type: "mcq",
      question: "Mit jelent a 'szekréció'?",
      options: ["Felszívás", "Kiválasztás / Kiürítés", "Megállás", "Növekedés"],
      correctAnswer: 1,
      explanation: "A sók és víz sejtből való kiáramlását jelenti ebben a kontextusban."
    },
    {
      id: "ecoli_42",
      topic: "E. coli",
      type: "mcq",
      question: "Melyik patotípus okozhat húgyúti fertőzést kocákban?",
      options: ["ETEC", "EPEC", "ExPEC", "STEC"],
      correctAnswer: 2,
      explanation: "Az ExPEC (UPEC alcsoport) gyakran okoz cystitist."
    },
    {
      id: "ecoli_43",
      topic: "E. coli",
      type: "mcq",
      question: "Mi a fimbria másik neve?",
      options: ["Pilus", "Adhézin", "Burok", "Ostor"],
      correctAnswer: 0,
      explanation: "A fimbria és a pilus gyakran szinonimaként használatos fehérjefonalakat jelöl."
    },
    {
      id: "ecoli_44",
      topic: "E. coli",
      type: "mcq",
      question: "Mi a teendő a malacokkal választás után, ha hűvös van?",
      options: ["Kinyitni az ablakot", "Fűteni / Infralámpát adni", "Leönteni őket vízzel", "Semmi"],
      correctAnswer: 1,
      explanation: "A meleg csökkenti a stresszt és segíti az emésztést."
    },
    {
      id: "ecoli_45",
      topic: "E. coli",
      type: "mcq",
      question: "Mit kódol az stx2e gén?",
      options: ["Fimbriát", "Ödémabetegség toxinát (Shiga-toxin variáns)", "Inzulint", "Színanyagot"],
      correctAnswer: 1,
      explanation: "Ez a toxin felelős az ödémabetegség súlyos tüneteiért."
    },
    {
      id: "ecoli_46",
      topic: "E. coli",
      type: "mcq",
      question: "Melyik antibiotikum adható takarmányba keverve?",
      options: ["Csak a penicillin", "Neomycin", "Semelyik", "Inzulin"],
      correctAnswer: 1,
      explanation: "A neomycin vízben vagy takarmányban is alkalmazható tömegkezelésre."
    },
    {
      id: "ecoli_47",
      topic: "E. coli",
      type: "mcq",
      question: "Hogyan hat az intimin fehérje?",
      options: ["Mérget termel", "Szoros kötődést és mikrobolyoh-pusztulást okoz", "Segíti a mozgást", "Sárgává teszi a bacit"],
      correctAnswer: 1,
      explanation: "Az EPEC törzsek jellemző virulenciafaktora."
    },
    {
      id: "ecoli_48",
      topic: "E. coli",
      type: "mcq",
      question: "Melyik korcsoportban a legritkább a colihasmenés okozta elhullás?",
      options: ["Újszülött", "Hízó (idősebb korban)", "Választás után", "Soha nem ritka"],
      correctAnswer: 1,
      explanation: "Az idősebb állatok ellenállóbbak és ritkábban száradnak ki végzetesen."
    },
    {
      id: "ecoli_49",
      topic: "E. coli",
      type: "bool",
      question: "Az E. coli laktózbontó baktérium.",
      options: ["Igaz", "Hamis"],
      correctAnswer: 0,
      explanation: "Igaz, a legtöbb törzs bontja a laktózt, ami fontos differenciáló bélyeg."
    },
    {
      id: "ecoli_50",
      topic: "E. coli",
      type: "mcq",
      question: "Mi az összefoglalás lényege az E. coli fertőzéseknél?",
      options: ["Nem lehet megelőzni", "Összetett menedzsment, higiénia és vakcinázás szükséges", "Csak az antibiotikum számít", "Minden coli egyforma"],
      correctAnswer: 1,
      explanation: "A sikeres védekezés a technológia és az immunizálás kombinációja."
    }
  ]
};
