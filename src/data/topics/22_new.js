export const t22_nukleinsav_izolalasi_modszerek_kornyezeti_mintaData = {
  "id": "22_nukleinsav_izolalasi_modszerek_kornyezeti_minta",
  "title": "22. Nukleinsav izolálási módszerek környezeti mintákból",
  "studyMaterial": [
    {
      "title": "4. Mintafeldolgozás és DNS-kivonás",
      "icon": "book",
      "color": "bg-indigo-50 border-indigo-200",
      "iconColor": "text-indigo-500",
      "sections": [
        {
          "header": "Általános",
          "points": [
            "mintákat a laboratóriumba érve azonnal feldolgozzuk vagy mélyhűtjük",
            "Miután a mintát megfelelően begyűjtöttük és stabilizáltuk, a következő lépés a mikrobiális DNS kinyerése. Ez a szakasz határozza meg a metagenomikai adatok jel/zaj arányát.",
            "A DNS-kivonás célja a sejtfal és sejthártya fizikai felbontása (lízis), valamint a fehérjék lebontása, hogy a nukleinsav szabaddá váljon."
          ]
        }
      ]
    },
    {
      "title": "4.1. Homogenizálás",
      "icon": "book",
      "color": "bg-indigo-50 border-indigo-200",
      "iconColor": "text-indigo-500",
      "sections": [
        {
          "header": "Általános",
          "points": [
            "minden mintatípusnál kulcsfontosságú, a sejtekből a DNS csak akkor oldódik ki egyenletesen.",
            "Szilárd mintáknál pl. bélsár vagy talaj → szuszpenzióvá kell alakítani, savmentes vízzel vagy fizikai úton (például mozsárban tördeléssel)",
            "Folyékony minták → alapos keverés",
            "A zsíros vagy olajos szennyeződéseket centrifugálással eltávolíthatjuk"
          ]
        }
      ]
    },
    {
      "title": "4.2. DNS-kivonás elvi alapjai",
      "icon": "book",
      "color": "bg-indigo-50 border-indigo-200",
      "iconColor": "text-indigo-500",
      "sections": [
        {
          "header": "Cél",
          "points": [
            "A DNS extrakció a metagenomika \"fekete doboza\".",
            "A cél az, hogy minden sejtből (beleértve a rezisztens spórákat és gombákat is) kinyerjük a DNS-t anélkül, hogy túlságosan fragmentálnánk azt.",
            "megfelelő mennyiségű és tisztaságú DNS-t kapjunk",
            "Ezt általában kereskedelmi DNS-kivonó készletekkel végezzük, mert ezek sok mintatípust lefednek és magas hozamot adnak.",
            "Ezek az oszlopos vagy mágneses gyöngyös rendszerek lízistől a tiszta nukleinsav kinyeréséig standardizált lépéseket tartalmaznak, általában szilíciummembránra kötnek, és két mosással eltávolítják a szennyezőket",
            "Előnyük az egyszerűség és megbízhatóság, a cégek sok protokollt optimalizáltak különböző mintákhoz.",
            "Ugyanakkor hátrányuk a költség és, hogy mint minden módszer, torzításokat visz be: bizonyos kitek többet vonhatnak ki Gram-negatív, mások pedig a Gram-pozitív vagy gombás DNS-ből",
            "Ezért metagenomikában gyakori a módszerek párhuzamos tesztelése, hogy kiválasszák a célnak legmegfelelőbbet."
          ]
        },
        {
          "header": "A kivonás során a sejtek lízise általában több lépcsős",
          "points": [
            "kémiai lízis: lizáló oldat (enzimek, detergensek, sók) hozzáadásával: elősegíti a sejtek fellazulását",
            "mechanikai lízis: elektromos vagy mechanikus (mágneses shaker, vortex) rázással, aprítással, üveggyöngyökön (bead beating) történő homogenizálással.",
            "hatékonyan tárja fel a nehezen lizálható sejteket is.",
            "enzimatikus lízis: egyes protokollokban már a mechanikai lízis előtt hozzáadnak lysozymet (a baktériumok peptidoglikánját bontja, főleg Gram-pozitívokra hat), proteázokat (pl. Proteinase K – eltávolítja a mikrobális és gazda fehérjéket), illetve amidázokat (pl. lizozimok). Az enzimek segítenek felpuhítani a sejtfalakat és a bonyolult komplexeket, mielőtt a mechanikai vagy kémiai kezelés hatása teljes lenne.",
            "általában ezt követi a centrifugálás, majd szűrés, amivel eltávolítjuk a durva törmelékeket",
            "kémiai lízis pufferek hozzáadása: tovább bontja a sejthártyákat, sejtmagokat és fehérjéket, valamint inaktiválja a DNÁz (nukleáz) enzimeket, megvédve a kinyerendő DNS-t",
            "DNS mosás, szűrés: eltávolítjuk a fehérje szennyeződést és más szerves melléktermékeket",
            "PCR inhibítorok eltávolítása egy újabb szűréssel."
          ]
        },
        {
          "header": "PCR inhibitorok",
          "points": [
            "szerves savak és fenolok",
            "fehérjék és proteázok",
            "lipidek",
            "poliszacharidok és nukleinsav-származékok",
            "Az így kapott végleges szűrt eluens teljesen mentes minden PCR-gátlótól, így a DNS 16S rRNA amplikonozásra, metagenomikus szekvenálásra elvileg azonnal alkalmas."
          ]
        }
      ]
    },
    {
      "title": "4.3. Minőség-ellenőrzés",
      "icon": "book",
      "color": "bg-indigo-50 border-indigo-200",
      "iconColor": "text-indigo-500",
      "sections": [
        {
          "header": "Általános",
          "points": [
            "A kinyert DNS minőségét mindig spektrofotometriával és/vagy elektrometriás eszközökkel (Qubit) megmérjük, ellenőrizzük a tisztasági arányokat, majd egy kis mennyiséget lefuttatunk gélen. Csak az „optimális” bevizsgált mintákat használjuk tovább metagenomikai könyvtár előkészítésre."
          ]
        }
      ]
    },
    {
      "title": "5. Könyvtárkészítés és szekvenálás",
      "icon": "book",
      "color": "bg-indigo-50 border-indigo-200",
      "iconColor": "text-indigo-500",
      "sections": [
        {
          "header": "Általános",
          "points": [
            "A tiszta DNS önmagában nem szekvenálható; először \"könyvtárrá\" kell alakítani",
            "Az izolált DNS- vagy RNS-mintát darabokra vágja, adaptereket illeszt a végére (rövid, ismert szekvenciák) és amplifikálja (sokszorosítja), így jön létre a \"könyvtár\", amelyből a szekvenáló gép olvashatja a nukleotidokat.",
            "A módszer előnye, hogy nem csak a mikrobiális összetételt, hanem az antibiotikum-rezisztenciagéneket, mobil genetikai elemeket (pl. plazmidok, transzpozonok), illetve azok genetikai környezetét is azonosítani tudjuk.",
            "Illumina platformokon rövid olvasatokat (150–300 bp) alkalmaznak, míg PacBio vagy Nanopore hosszabb, akár több ezer bp-es olvasatokkal dolgozik, utóbbiak előnyösebbek a gének kontextusának feltérképezésében (pl. ARG + integráz együtt)."
          ]
        }
      ]
    },
    {
      "title": "5.1. Bioinformatika: Normalizálás és ARG detektálás",
      "icon": "book",
      "color": "bg-indigo-50 border-indigo-200",
      "iconColor": "text-indigo-500",
      "sections": [
        {
          "header": "Általános",
          "points": [
            "A nyers adatokból (\"reads\") bioinformatikai munkafolyamatok segítségével nyerünk biológiai információt."
          ]
        }
      ]
    },
    {
      "title": "6. RNS Izolálás és Metatranszkriptomika",
      "icon": "book",
      "color": "bg-indigo-50 border-indigo-200",
      "iconColor": "text-indigo-500",
      "sections": [
        {
          "header": "Általános",
          "points": [
            "Míg a DNS megmutatja a \"potenciált\" (kik vannak ott), az RNS megmutatja az \"aktivitást\" (mit csinálnak éppen). Az RNS izolálása nagyságrendekkel nehezebb feladat.",
            "Az RNS kémiailag instabil (a ribóz 2'-OH csoportja miatt hajlamos a hidrolízisre), és a környezetben mindenhol jelenlévő RNáz enzimek rendkívül gyorsan lebontják."
          ]
        },
        {
          "header": "Védekezés",
          "points": [
            "Azonnali fagyasztás folyékony nitrogénben a mintavételkor, vagy RNS-stabilizáló reagensek használata.",
            "A lízispuffernek erős denaturálószereket kell tartalmaznia az RNázok azonnali inaktiválására.",
            "A teljes bakteriális RNS több mint 95%-a riboszómális RNS (rRNS). A funkcionális géneket kódoló hírvivő RNS (mRNS) aránya elenyésző. A szekvenálás hatékonyságának növelése érdekében az rRNS-t el kell távolítani."
          ]
        }
      ]
    }
  ],
  "questions": [
    {
      "id": "q_22_1",
      "topic": "22_nukleinsav_izolalasi_modszerek_kornyezeti_minta",
      "type": "bool",
      "question": "Igaz-e az állítás: minden mintatípusnál kulcsfontosságú, a sejtekből a DNS csak akkor oldódik ki egyenletesen.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "minden mintatípusnál kulcsfontosságú, a sejtekből a DNS csak akkor oldódik ki egyenletesen."
    },
    {
      "id": "q_22_2",
      "topic": "22_nukleinsav_izolalasi_modszerek_kornyezeti_minta",
      "type": "bool",
      "question": "Igaz-e az állítás: A kinyert DNS minőségét mindig spektrofotometriával és/vagy elektrometriás eszközökkel (Qubit) megmérjük, ellenőrizzük a tisztasági arányokat, majd egy kis mennyiséget lefuttatunk gélen. Csak az „optimális” bevizsgált mintákat használjuk tovább metagenomikai könyvtár előkészítésre.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A kinyert DNS minőségét mindig spektrofotometriával és/vagy elektrometriás eszközökkel (Qubit) megmérjük, ellenőrizzük a tisztasági arányokat, majd egy kis mennyiséget lefuttatunk gélen. Csak az „optimális” bevizsgált mintákat használjuk tovább metagenomikai könyvtár előkészítésre."
    },
    {
      "id": "q_22_3",
      "topic": "22_nukleinsav_izolalasi_modszerek_kornyezeti_minta",
      "type": "bool",
      "question": "Igaz-e az állítás: A tiszta DNS önmagában nem szekvenálható; először \"könyvtárrá\" kell alakítani",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A tiszta DNS önmagában nem szekvenálható; először \"könyvtárrá\" kell alakítani"
    },
    {
      "id": "q_22_4",
      "topic": "22_nukleinsav_izolalasi_modszerek_kornyezeti_minta",
      "type": "bool",
      "question": "Igaz-e az állítás: A módszer előnye, hogy nem csak a mikrobiális összetételt, hanem az antibiotikum-rezisztenciagéneket, mobil genetikai elemeket (pl. plazmidok, transzpozonok), illetve azok genetikai környezetét is azonosítani tudjuk.",
      "options": [
        "Igaz",
        "Hamis"
      ],
      "correctAnswer": 0,
      "explanation": "A módszer előnye, hogy nem csak a mikrobiális összetételt, hanem az antibiotikum-rezisztenciagéneket, mobil genetikai elemeket (pl. plazmidok, transzpozonok), illetve azok genetikai környezetét is azonosítani tudjuk."
    }
  ]
};