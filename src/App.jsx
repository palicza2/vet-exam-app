import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithCustomToken } from 'firebase/auth';
import { getFirestore, doc, setDoc, updateDoc, onSnapshot } from 'firebase/firestore';
import { 
  BookOpen, CheckCircle, PieChart, Activity, RotateCcw, ChevronRight, Check, X, 
  Brain, LogOut, Lock, Mail, Microscope, AlertTriangle, Pill, ShieldAlert,
  ChevronDown, ChevronUp
} from 'lucide-react';

// --- Firebase Configuration Setup ---
// We wrap this in a try-catch to prevent the app from crashing white if variables are missing.
let app, auth, db;
let configError = false;
const appId = typeof __app_id !== 'undefined' ? __app_id : 'vet-exam-app';

try {
  // 1. Try to use the Preview Environment config (Works in this Chat)
  const firebaseConfig = JSON.parse(__firebase_config);
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
} catch (e) {
  // 2. If that fails (e.g. on Vercel), we check if you have replaced the keys yet.
  // REPLACE THE OBJECT BELOW WITH YOUR OWN KEYS FROM FIREBASE CONSOLE
  const myRealConfig = {
  apiKey: "AIzaSyDY0pJFOZl2qvBldGqdpY8hDvBKryEhE-w",
  authDomain: "vet-exam-app.firebaseapp.com",
  projectId: "vet-exam-app",
  storageBucket: "vet-exam-app.firebasestorage.app",
  messagingSenderId: "667121013022",
  appId: "1:667121013022:web:d12599eb4250315c21f90f",
  measurementId: "G-84Z79H0EMC"
  };

  try {
    // Check if user has actually updated the placeholder values
    if (myRealConfig.apiKey === "AIzaSyDY0pJFOZl2qvBldGqdpY8hDvBKryEhE-w") {
      throw new Error("Config not set");
    }
    app = initializeApp(myRealConfig);
    auth = getAuth(app);
    db = getFirestore(app);
  } catch (err) {
    configError = true; // Flag to show the setup screen
  }
}

// --- Structured Data & Content ---

const STUDY_CONTENT = [
  {
    title: "1. A Clostridium fajok jellemzői",
    icon: <Microscope size={24} className="text-blue-500" />,
    color: "bg-blue-50 border-blue-200",
    sections: [
      {
        header: "Morfológia és Életmód",
        points: [
          "**Gram-pozitív**, pálca alakú, **endospórát** képző baktériumok.",
          "Többségük **obligát (szigorúan) anaerob**.",
          "**Spórák:** A sejten belül terminálisan, szubterminálisan vagy centrálisan. Gyakran deformálják a sejtet (pl. C. tetani \"dobverő\" alak).",
          "**Ellenálló képesség:** A spórák évekig túlélnek a talajban, trágyában.",
          "**Előfordulás:** Szaprofita (környezet) és normál bélflóra része."
        ]
      },
      {
        header: "Patogenitás és Toxinok",
        points: [
          "Fő fegyverük az **exotoxin** termelés.",
          "**C. perfringens típusok (A–E):** Fő toxinok alapján (alfa, béta, epsilon, iota).",
          "Sertésben jelentős: **A** és **C** típus.",
          "**Hatásmechanizmusok:** Szövetbontó (pl. foszfolipáz), Enterotoxin (bél), Neurotoxin (ideg).",
          "**Szöveti hatás:** Gázképződés (H₂S), szövetelhalás (necrosis), toxémia.",
          "**Labor:** Véres agaron jellegzetes **kettős hemolízis** (\"céltábla\")."
        ]
      }
    ]
  },
  {
    title: "2. Enterális kórképek (Bél)",
    icon: <AlertTriangle size={24} className="text-orange-500" />,
    color: "bg-orange-50 border-orange-200",
    sections: [
      {
        header: "C. perfringens C típus (Enteritis Necroticans)",
        points: [
          "**Célcsoport:** Újszülött malacok (1-3 napos kor).",
          "**Kórkép:** Hemorrágiás-elhalásos vékonybélgyulladást okoz.",
          "**Oka:** **Béta-toxin**. Ez tripszinérzékeny, ezért csak az első héten veszélyes (amíg alacsony a tripszin szint).",
          "**Tünetek:** Véres hasmenés, hirtelen elhullás, gázos belek.",
          "**Megelőzés:** Koca vakcinázása (kolosztrális védelem)."
        ]
      },
      {
        header: "C. perfringens A típus",
        points: [
          "**Kórkép:** Enyhébb **dysbacteriosis**, hasmenés.",
          "**Tünetek:** Sárgás/szürkés, híg (nem véres) bélsár. Lassú növekedés.",
          "**Ok:** Béta2-toxin termelő törzsek elszaporodása (pl. antibiotikum után)."
        ]
      },
      {
        header: "C. difficile colitis",
        points: [
          "**Jellemző:** Antibiotikum-kúra utáni (dysbacteriosis) vastagbélgyulladás.",
          "**Toxinok:** A (enterotoxin) és B (citotoxin).",
          "**Elváltozás:** Fibrines-álhártyás gyulladás, **\"Vulkán lézió\"**, mesocolon ödéma."
        ]
      }
    ]
  },
  {
    title: "3. Hisztotoxikus (Gázödémás) Fertőzések",
    icon: <ShieldAlert size={24} className="text-red-500" />,
    color: "bg-red-50 border-red-200",
    sections: [
      {
        header: "Általános Mechanizmus",
        points: [
          "Spórák bejutása sebbe (exogén) vagy bélből az izomba (endogén).",
          "Anaerob környezet (zúzódás) -> Aktiválódás -> Gázgangréna."
        ]
      },
      {
        header: "Specifikus Kórképek",
        points: [
          "**C. chauvoei ('Sercegő üszög'):** Ritka. Izomelhalás, fekete izom, **crepitatio** (gázos ropogás tapintásra).",
          "**C. novyi:** Heveny májelhalás (kocák hirtelen elhullása). Máj: sötét, omlós, szivacsos."
        ]
      }
    ]
  },
  {
    title: "4. Neurotoxikus Kórképek",
    icon: <Brain size={24} className="text-purple-500" />,
    color: "bg-purple-50 border-purple-200",
    sections: [
      {
        header: "Tetanusz (C. tetani)",
        points: [
          "**Fertőzés:** Mély, szennyezett seb (kasztrálás, köldök).",
          "**Toxin:** Tetanospazmin (gátolja a gátló neurotranszmittereket).",
          "**Tünet:** **Merevgörcsös (spasztikus) bénulás**.",
          "**Jelek:** Szájzár, **\"fűrészbak állás\"**, mimikai torzulás."
        ]
      },
      {
        header: "Botulizmus (C. botulinum)",
        points: [
          "**Jelleg:** Intoxikáció (Mérgezés), nem fertőzés!",
          "**Forrás:** Dög, romlott szilázs toxinja.",
          "**Toxin:** Gátolja az acetilkolin felszabadulását.",
          "**Tünet:** **Petyhüdt bénulás** (lefelé terjed).",
          "**Jelek:** Támolygás, nyelészavar, elfekvés."
        ]
      }
    ]
  },
  {
    title: "5. Terápia és Megelőzés",
    icon: <Pill size={24} className="text-emerald-500" />,
    color: "bg-emerald-50 border-emerald-200",
    sections: [
      {
        header: "Kezelés (Antibiotikum)",
        points: [
          "**JÓ:** Penicillinek, Lincosamidok, Makrolidok, Tetraciklinek.",
          "**TILOS (Hatástalan):** Aminoglikozidok (pl. gentamicin), Quinolonok. (Mert oxigénigényes a felvételük)."
        ]
      },
      {
        header: "Megelőzés (Kulcsfontosságú)",
        points: [
          "**Vakcina:** Kocák C. perfringens C (kolosztrális védelem).",
          "**Higiénia:** Steril műtétek, tiszta fialó, fertőtlenítés (spóraölő szerek).",
          "**Takarmány:** Fokozatos váltás, dögök távoltartása.",
          "**Adalékok:** Probiotikumok, szerves savak, cink-oxid (ZnO)."
        ]
      }
    ]
  }
];

const QUESTION_BANK = [
  // General / Jellemzők
  {
    id: 1,
    topic: "General",
    type: "mcq",
    question: "Milyen festődésűek és alakúak a Clostridiumok?",
    options: ["Gram-negatív pálcák", "Gram-pozitív pálcák", "Gram-pozitív coccusok", "Gram-negatív coccusok"],
    correctAnswer: 1,
    explanation: "A Clostridiumok Gram-pozitív, pálca alakú, endospórát képző baktériumok."
  },
  {
    id: 2,
    topic: "General",
    type: "bool",
    question: "A Clostridium fajok spórái érzékenyek a környezeti hatásokra és gyorsan elpusztulnak a talajban.",
    options: ["Igaz", "Hamis"],
    correctAnswer: 1,
    explanation: "Hamis. A spórák rendkívül ellenállóak és évekig túlélhetnek a környezetben."
  },
  {
    id: 3,
    topic: "General",
    type: "mcq",
    question: "Melyik toxinérzékenység jellemző a C. perfringens béta-toxinjára?",
    options: ["Hőérzékeny", "Tripszinérzékeny", "Savérzékeny", "Alkoholérzékeny"],
    correctAnswer: 1,
    explanation: "A béta-toxin tripszinérzékeny, ezért okoz betegséget főleg az élet első hetében, amikor a tripszinaktivitás alacsony."
  },
  // Enteric
  {
    id: 4,
    topic: "Enteric",
    type: "mcq",
    question: "Mit okoz a Clostridium perfringens C típus újszülött malacokban?",
    options: ["Idült vastagbélgyulladást", "Hemorrágiás-elhalásos vékonybélgyulladást", "Tüdőgyulladást", "Agyhártyagyulladást"],
    correctAnswer: 1,
    explanation: "Klasszikus enterotoxémiát, véres-elhalásos bélgyulladást okoz."
  },
  {
    id: 5,
    topic: "Enteric",
    type: "mcq",
    question: "Melyik kórképre jellemző a 'vulkán lézió' és a mesocolon ödéma?",
    options: ["C. perfringens A", "C. perfringens C", "C. difficile", "C. tetani"],
    correctAnswer: 2,
    explanation: "Ezek a Clostridioides difficile okozta colitis tipikus kórbonctani jelei."
  },
  {
    id: 6,
    topic: "Enteric",
    type: "bool",
    question: "A C. perfringens A típus csak immunszupprimált felnőtt sertésekben okoz tüneteket.",
    options: ["Igaz", "Hamis"],
    correctAnswer: 1,
    explanation: "Hamis. Szopós malacokban is okozhat dysbacteriosis jellegű, enyhébb hasmenést."
  },
  // Histotoxic
  {
    id: 7,
    topic: "Histotoxic",
    type: "mcq",
    question: "Melyik kórokozó okozza a sertések 'sercegő üszög' (blackleg-like) betegségét?",
    options: ["C. septicum", "C. novyi", "C. chauvoei", "C. sordellii"],
    correctAnswer: 2,
    explanation: "Bár ritka sertésben, a C. chauvoei okozza a sercegő üszögöt."
  },
  {
    id: 8,
    topic: "Histotoxic",
    type: "mcq",
    question: "Milyen szerv elváltozása jellemző a C. novyi fertőzésre?",
    options: ["Tüdővizenyő", "Lépduzzanat", "Nekrotizáló hepatitis (májelhalás)", "Veseelégtelenség"],
    correctAnswer: 2,
    explanation: "A máj megnagyobbodott, omlós, csokoládébarna színű és szivacsos tapintatú."
  },
  // Neurotoxic
  {
    id: 9,
    topic: "Neurotoxic",
    type: "mcq",
    question: "Mi a tetanusz jellemző klinikai tünete sertésben?",
    options: ["Petyhüdt bénulás", "Fűrészbak állás", "Véres hasmenés", "Körkörös mozgás"],
    correctAnswer: 1,
    explanation: "A merevgörcs miatti 'fűrészbak állás' és a szájzár a jellemző."
  },
  {
    id: 10,
    topic: "Neurotoxic",
    type: "bool",
    question: "A botulizmus toxinja gátolja az acetilkolin felszabadulását, petyhüdt bénulást okozva.",
    options: ["Igaz", "Hamis"],
    correctAnswer: 0,
    explanation: "Igaz. Ez a botulinum toxin hatásmechanizmusa."
  },
  {
    id: 11,
    topic: "Neurotoxic",
    type: "mcq",
    question: "Hogyan fertőződnek leggyakrabban botulizmussal a sertések?",
    options: ["Sebfertőzéssel", "Kullancscsípéssel", "Toxin tartalmú takarmány (dög, romlott szilázs) felvételével", "Cseppfertőzéssel"],
    correctAnswer: 2,
    explanation: "A botulizmus intoxikáció, nem valódi fertőzés; a toxint veszik fel a környezetből."
  },
  // Treatment & Prevention
  {
    id: 12,
    topic: "Treatment",
    type: "mcq",
    question: "Melyik antibiotikum csoport hatástalan a Clostridiumok ellen?",
    options: ["Penicillinek", "Aminoglikozidok (pl. gentamicin)", "Makrolidok", "Tetraciklinek"],
    correctAnswer: 1,
    explanation: "Az aminoglikozidok (és quinolonok) hatástalanok, mivel felvételük oxigénigényes."
  },
  {
    id: 13,
    topic: "Treatment",
    type: "bool",
    question: "A C. perfringens C típusú enteritis megelőzésére a kocákat vakcinázzák.",
    options: ["Igaz", "Hamis"],
    correctAnswer: 0,
    explanation: "Igaz. A kocák vakcinázása kolosztrális védelmet biztosít a malacoknak."
  },
  {
    id: 14,
    topic: "General",
    type: "mcq",
    question: "Milyen hemolízist mutatnak gyakran a Clostridiumok véres agaron?",
    options: ["Alfa (zöldítő)", "Nincs hemolízis", "Kettős (céltábla alakú) hemolízis", "Gamma hemolízis"],
    correctAnswer: 2,
    explanation: "Jellegzetes a kettős hemolízis zóna."
  },
  {
    id: 15,
    topic: "Enteric",
    type: "mcq",
    question: "Melyik állatcsoport a legfogékonyabb a C. perfringens C okozta elhullásra?",
    options: ["Hízósertések", "Választási malacok", "Újszülött malacok (1 hetes korig)", "Kocák"],
    correctAnswer: 2,
    explanation: "A tripszin inhibíció hiánya miatt az első napokban/héten a legfogékonyabbak."
  },
  {
    id: 16,
    topic: "Histotoxic",
    type: "bool",
    question: "A malignus ödéma (gázödéma) kórokozói soha nem jutnak be sebzéseken keresztül.",
    options: ["Igaz", "Hamis"],
    correctAnswer: 1,
    explanation: "Hamis. Az exogén fertőzés éppen sebzéseken (injekció, harapás) keresztül történik."
  },
  {
    id: 17,
    topic: "Neurotoxic",
    type: "mcq",
    question: "Melyik a tetanusz lappangási ideje általában?",
    options: ["1-2 óra", "1-3 hét", "2-3 hónap", "Fél év"],
    correctAnswer: 1,
    explanation: "A lappangási idő általában 1-3 hét."
  },
  {
    id: 18,
    topic: "Treatment",
    type: "mcq",
    question: "Milyen preventív intézkedés javasolt botulizmus ellen?",
    options: ["Kocák vakcinázása", "Döghús és romlott takarmány etetésének kerülése", "Antibiotikumos profilaxis", "Farokkurtítás"],
    correctAnswer: 1,
    explanation: "A legfontosabb a toxinforrások (dög, romlott szilázs) kizárása."
  },
  {
    id: 19,
    topic: "General",
    type: "bool",
    question: "A Clostridiumok obligát aerob baktériumok.",
    options: ["Igaz", "Hamis"],
    correctAnswer: 1,
    explanation: "Hamis. A Clostridiumok anaerob (többségében obligát anaerob) baktériumok."
  },
  {
    id: 20,
    topic: "Enteric",
    type: "mcq",
    question: "A C. difficile melyik két toxint termeli?",
    options: ["Alfa és Béta", "A és B toxin", "Tetanospazmin és Botulinum", "Epsilon és Iota"],
    correctAnswer: 1,
    explanation: "A C. difficile fő virulenciafaktorai az A (enterotoxin) és B (citotoxin) toxinok."
  }
];

// --- Components ---

const StudyCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(true);

  // Simple Markdown parser for Bold text
  const renderText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold text-slate-800">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className={`mb-6 rounded-xl border transition-all duration-300 ${data.color} shadow-sm overflow-hidden`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100">
            {data.icon}
          </div>
          <h3 className="text-lg font-bold text-slate-800">{data.title}</h3>
        </div>
        <div className="text-slate-400">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      {isOpen && (
        <div className="p-4 pt-0">
          <div className="grid gap-6 mt-4">
            {data.sections.map((section, idx) => (
              <div key={idx} className="bg-white rounded-lg p-5 shadow-sm border border-slate-100/50">
                <h4 className="font-bold text-slate-700 mb-3 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                  {section.header}
                </h4>
                <ul className="space-y-3">
                  {section.points.map((point, pIdx) => (
                    <li key={pIdx} className="text-slate-600 text-sm leading-relaxed flex items-start gap-2.5">
                      <div className="mt-1.5 min-w-[4px] h-[4px] rounded-full bg-slate-300 shrink-0" />
                      <span>{renderText(point)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ProgressBar = ({ value, max, color = "bg-blue-600", label }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <span className="text-sm font-medium text-slate-700">{Math.round((value / max) * 100)}%</span>
    </div>
    <div className="w-full bg-slate-200 rounded-full h-2.5">
      <div className={`${color} h-2.5 rounded-full transition-all duration-500`} style={{ width: `${Math.min(100, (value / max) * 100)}%` }}></div>
    </div>
  </div>
);

const QuestionCard = ({ question, onAnswer, showFeedback, userAnswer }) => {
  const isCorrect = userAnswer === question.correctAnswer;
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold uppercase tracking-wide">
          {question.topic}
        </span>
        <span className="text-slate-400 text-sm">Question {question.id}</span>
      </div>
      
      <h3 className="text-xl font-semibold text-slate-800 mb-6">{question.question}</h3>
      
      <div className="space-y-3">
        {question.options.map((option, idx) => {
          let btnClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 font-medium ";
          
          if (showFeedback) {
            if (idx === question.correctAnswer) btnClass += "border-green-500 bg-green-50 text-green-700";
            else if (idx === userAnswer) btnClass += "border-red-500 bg-red-50 text-red-700";
            else btnClass += "border-slate-100 text-slate-400 opacity-50";
          } else {
            if (userAnswer === idx) btnClass += "border-indigo-500 bg-indigo-50 text-indigo-700";
            else btnClass += "border-slate-100 hover:border-indigo-200 hover:bg-slate-50 text-slate-600";
          }

          return (
            <button
              key={idx}
              onClick={() => !showFeedback && onAnswer(idx)}
              disabled={showFeedback}
              className={btnClass}
            >
              <div className="flex items-center">
                <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center shrink-0
                  ${showFeedback && idx === question.correctAnswer ? 'border-green-500 bg-green-500 text-white' : 
                    showFeedback && idx === userAnswer ? 'border-red-500 bg-red-500 text-white' : 
                    'border-slate-300'}`}>
                  {showFeedback && idx === question.correctAnswer && <Check size={14} />}
                  {showFeedback && idx === userAnswer && idx !== question.correctAnswer && <X size={14} />}
                </div>
                {option}
              </div>
            </button>
          );
        })}
      </div>

      {showFeedback && (
        <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-100' : 'bg-blue-50 border border-blue-100'}`}>
          <div className="flex items-start gap-3">
            <div className="mt-1 shrink-0">
              {isCorrect ? <CheckCircle className="text-green-600" size={20} /> : <BookOpen className="text-blue-600" size={20} />}
            </div>
            <div>
              <p className={`font-bold mb-1 ${isCorrect ? 'text-green-800' : 'text-blue-800'}`}>
                {isCorrect ? 'Correct!' : 'Explanation:'}
              </p>
              <p className="text-slate-700 text-sm leading-relaxed">{question.explanation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(!configError); // Don't load if config is missing
  const [view, setView] = useState('landing'); 
  
  // Login State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [authError, setAuthError] = useState('');

  // Stats State
  const [stats, setStats] = useState({
    totalAnswered: 0,
    totalCorrect: 0,
    byTopic: {}, 
    examHistory: [] 
  });

  // Practice State
  const [currentPracticeQ, setCurrentPracticeQ] = useState(null);
  const [practiceFeedback, setPracticeFeedback] = useState(false);
  const [practiceUserAnswer, setPracticeUserAnswer] = useState(null);

  // Exam State
  const [examQuestions, setExamQuestions] = useState([]);
  const [examAnswers, setExamAnswers] = useState({}); 
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [examScore, setExamScore] = useState(0);

  // --- Auth & Init ---
  useEffect(() => {
    if (configError) return; // Skip if config is bad

    if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
       signInWithCustomToken(auth, __initial_auth_token)
         .catch(err => console.error("Preview auth failed", err));
    }

    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // --- Firestore Sync ---
  useEffect(() => {
    if (!user || configError) return;
    
    const statsRef = doc(db, 'artifacts', appId, 'users', user.uid, 'data', 'stats');
    const unsub = onSnapshot(statsRef, (docSnap) => {
      if (docSnap.exists()) {
        setStats(docSnap.data());
      } else {
        const initialStats = { totalAnswered: 0, totalCorrect: 0, byTopic: {}, examHistory: [] };
        setDoc(statsRef, initialStats);
        setStats(initialStats);
      }
    }, (err) => console.error("Stats sync error:", err));

    return () => unsub();
  }, [user]);

  // --- Auth Functions ---
  const handleAuth = async (e) => {
    e.preventDefault();
    if (configError) return;
    setAuthError('');
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      setAuthError(err.message.replace('Firebase:', '').trim());
    }
  };

  const handleSignOut = () => {
    if (configError) return;
    signOut(auth);
    setStats({ totalAnswered: 0, totalCorrect: 0, byTopic: {}, examHistory: [] });
    setView('landing');
  };

  // --- App Actions ---

  const updateStats = async (isCorrect, topic, isExam = false, examScoreVal = 0) => {
    if (!user || configError) return;
    const statsRef = doc(db, 'artifacts', appId, 'users', user.uid, 'data', 'stats');
    
    const newStats = { ...stats };
    
    if (!isExam) {
       newStats.totalAnswered += 1;
       if (isCorrect) newStats.totalCorrect += 1;

       if (!newStats.byTopic[topic]) newStats.byTopic[topic] = { total: 0, correct: 0 };
       newStats.byTopic[topic].total += 1;
       if (isCorrect) newStats.byTopic[topic].correct += 1;
    } else {
      const historyEntry = {
        date: new Date().toISOString(),
        score: examScoreVal,
        total: 20
      };
      newStats.examHistory = [...(newStats.examHistory || []), historyEntry];
    }

    await updateDoc(statsRef, newStats);
  };

  const startPractice = () => {
    const randomQ = QUESTION_BANK[Math.floor(Math.random() * QUESTION_BANK.length)];
    setCurrentPracticeQ(randomQ);
    setPracticeFeedback(false);
    setPracticeUserAnswer(null);
    setView('practice');
  };

  const handlePracticeAnswer = (idx) => {
    setPracticeUserAnswer(idx);
    setPracticeFeedback(true);
    const isCorrect = idx === currentPracticeQ.correctAnswer;
    updateStats(isCorrect, currentPracticeQ.topic);
  };

  const nextPracticeQuestion = () => {
    let newQ;
    do {
      newQ = QUESTION_BANK[Math.floor(Math.random() * QUESTION_BANK.length)];
    } while (newQ.id === currentPracticeQ.id && QUESTION_BANK.length > 1);
    
    setCurrentPracticeQ(newQ);
    setPracticeFeedback(false);
    setPracticeUserAnswer(null);
  };

  const startExam = () => {
    const shuffled = [...QUESTION_BANK].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 20);
    setExamQuestions(selected);
    setExamAnswers({});
    setExamSubmitted(false);
    setExamScore(0);
    setView('exam');
  };

  const handleExamSelect = (qId, optionIdx) => {
    if (examSubmitted) return;
    setExamAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const submitExam = async () => {
    let correctCount = 0;
    const newStats = { ...stats }; 
    
    examQuestions.forEach(q => {
      const isCorrect = examAnswers[q.id] === q.correctAnswer;
      if (isCorrect) correctCount++;
      
      if (!newStats.byTopic[q.topic]) newStats.byTopic[q.topic] = { total: 0, correct: 0 };
      newStats.byTopic[q.topic].total += 1;
      if (isCorrect) newStats.byTopic[q.topic].correct += 1;
    });

    newStats.totalAnswered += examQuestions.length;
    newStats.totalCorrect += correctCount;
    
    newStats.examHistory = [...(newStats.examHistory || []), {
       date: new Date().toISOString(),
       score: correctCount,
       total: examQuestions.length
    }];

    setExamScore(correctCount);
    setExamSubmitted(true);
    
    if (user && !configError) {
      const statsRef = doc(db, 'artifacts', appId, 'users', user.uid, 'data', 'stats');
      await updateDoc(statsRef, newStats);
    }
  };

  // --- Views ---

  // Safety Fallback View
  if (configError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50 p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full text-center border-2 border-red-100">
          <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldAlert className="text-red-600" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-3">Database Setup Required</h2>
          <p className="text-slate-600 mb-6">
            The app cannot connect to Firebase. This usually happens on Vercel/GitHub 
            if you haven't replaced the placeholder keys yet.
          </p>
          <div className="text-left bg-slate-50 p-4 rounded-lg border border-slate-200 text-sm font-mono text-slate-600 mb-6">
            1. Open src/App.jsx on GitHub<br/>
            2. Find "const myRealConfig"<br/>
            3. Paste your keys from Firebase Console
          </div>
          <a href="https://console.firebase.google.com" target="_blank" className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-700">
            Go to Firebase Console
          </a>
        </div>
      </div>
    );
  }

  if (authLoading) return <div className="min-h-screen flex items-center justify-center bg-slate-50"><Activity className="animate-spin text-indigo-600" size={32} /></div>;

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-50 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <div className="text-center mb-8">
              <div className="inline-flex p-3 rounded-2xl bg-indigo-600 text-white mb-4 shadow-lg shadow-indigo-200">
                <Brain size={32} />
              </div>
              <h1 className="text-2xl font-bold text-slate-900 mb-2">Welcome Back</h1>
              <p className="text-slate-500">
                {isRegistering ? 'Create an account to track your progress' : 'Sign in to continue your preparation'}
              </p>
            </div>

            <form onSubmit={handleAuth} className="space-y-5">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                <div className="relative group">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                    <Mail size={18} />
                  </div>
                  <input 
                    type="email" 
                    required
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                    placeholder="name@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 ml-1">Password</label>
                <div className="relative group">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                    <Lock size={18} />
                  </div>
                  <input 
                    type="password" 
                    required
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                    placeholder="••••••••"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {authError && (
                <div className="p-4 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl flex items-start gap-3">
                  <div className="shrink-0 mt-0.5"><X size={16} /></div>
                  {authError}
                </div>
              )}

              <button type="submit" className="w-full bg-indigo-600 text-white py-3.5 rounded-xl font-bold hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500/20 transition-all shadow-lg shadow-indigo-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0">
                {isRegistering ? 'Create Account' : 'Sign In'}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
              <p className="text-slate-500 text-sm mb-2">
                {isRegistering ? 'Already have an account?' : "Don't have an account yet?"}
              </p>
              <button 
                onClick={() => { setIsRegistering(!isRegistering); setAuthError(''); }}
                className="text-indigo-600 font-bold hover:text-indigo-700 transition-colors"
              >
                {isRegistering ? 'Sign in instead' : 'Create a free account'}
              </button>
            </div>
          </div>
          
          <p className="text-center text-slate-400 text-xs mt-8">
            © {new Date().getFullYear()} Veterinary Exam Prep
          </p>
        </div>
      </div>
    );
  }

  const renderLanding = () => (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex justify-end mb-4">
         <button onClick={handleSignOut} className="flex items-center gap-2 text-slate-500 hover:text-red-600 text-sm font-medium transition-colors">
           <LogOut size={16} /> Sign Out
         </button>
      </div>

      <div className="text-center mb-16">
        <div className="bg-indigo-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-indigo-600">
          <Brain size={40} />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Veterinary Exam Prep</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Master Clostridial diseases in swine. Study the material, practice with instant feedback, 
          or simulate a full exam to test your readiness.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <button onClick={() => setView('study')} className="group p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-indigo-200 transition-all text-left">
          <div className="flex items-center gap-4 mb-3">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:scale-110 transition-transform">
              <Book size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Study Material</h3>
          </div>
          <p className="text-slate-500">Review the official exam content about Clostridial infections.</p>
        </button>

        <button onClick={startPractice} className="group p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-indigo-200 transition-all text-left">
          <div className="flex items-center gap-4 mb-3">
            <div className="p-3 bg-green-50 text-green-600 rounded-lg group-hover:scale-110 transition-transform">
              <CheckCircle size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Practice Mode</h3>
          </div>
          <p className="text-slate-500">Single questions with immediate feedback and explanations.</p>
        </button>

        <button onClick={startExam} className="group p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-indigo-200 transition-all text-left">
          <div className="flex items-center gap-4 mb-3">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-lg group-hover:scale-110 transition-transform">
              <Activity size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Take Exam</h3>
          </div>
          <p className="text-slate-500">20 random questions. No hints. See your score at the end.</p>
        </button>

        <button onClick={() => setView('stats')} className="group p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-indigo-200 transition-all text-left">
          <div className="flex items-center gap-4 mb-3">
            <div className="p-3 bg-orange-50 text-orange-600 rounded-lg group-hover:scale-110 transition-transform">
              <PieChart size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">My Statistics</h3>
          </div>
          <p className="text-slate-500">Track your progress, history, and identify weak topics.</p>
        </button>
      </div>
    </div>
  );

  const renderStudy = () => (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => setView('landing')} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
          <RotateCcw size={20} className="text-slate-500" />
        </button>
        <h2 className="text-2xl font-bold text-slate-800">Clostridial Diseases in Pigs</h2>
      </div>
      
      <div className="space-y-4">
        {STUDY_CONTENT.map((section, idx) => (
          <StudyCard key={idx} data={section} />
        ))}
      </div>

      <div className="flex justify-center mt-12 mb-8">
        <button 
          onClick={startPractice}
          className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-700 hover:shadow-indigo-200/50 transition-all flex items-center gap-2"
        >
          Start Practicing <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );

  const renderPractice = () => (
    <div className="max-w-3xl mx-auto px-4 py-8 min-h-screen flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <button onClick={() => setView('landing')} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-medium">
          <RotateCcw size={18} /> Exit
        </button>
        <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Practice Mode</div>
      </div>

      <div className="flex-grow flex flex-col justify-center">
        {currentPracticeQ && (
          <QuestionCard 
            question={currentPracticeQ} 
            userAnswer={practiceUserAnswer}
            showFeedback={practiceFeedback}
            onAnswer={handlePracticeAnswer}
          />
        )}
      </div>

      {practiceFeedback && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-4 shadow-lg animate-in slide-in-from-bottom duration-300">
          <div className="max-w-2xl mx-auto flex justify-end">
            <button 
              onClick={nextPracticeQuestion}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold shadow hover:bg-indigo-700 transition-colors flex items-center gap-2"
            >
              Next Question <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const renderExam = () => (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8 sticky top-0 bg-slate-50/90 backdrop-blur-sm py-4 z-10 border-b border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800">Exam Session</h2>
        {!examSubmitted ? (
           <div className="text-slate-600 font-medium">
             Answered: {Object.keys(examAnswers).length} / {examQuestions.length}
           </div>
        ) : (
           <div className="text-2xl font-bold text-indigo-600">
             Score: {Math.round((examScore / examQuestions.length) * 100)}%
           </div>
        )}
      </div>

      {examSubmitted && (
        <div className="bg-indigo-900 text-white p-8 rounded-2xl shadow-xl mb-8 text-center">
          <h3 className="text-3xl font-bold mb-2">
            {examScore >= 16 ? 'Excellent Work!' : examScore >= 12 ? 'Good Job!' : 'Keep Studying!'}
          </h3>
          <p className="text-indigo-200 mb-6">
            You answered {examScore} out of {examQuestions.length} questions correctly.
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={() => setView('landing')} className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-lg font-medium transition-colors">
              Back to Home
            </button>
            <button onClick={startExam} className="bg-white text-indigo-900 px-6 py-2 rounded-lg font-bold hover:bg-indigo-50 transition-colors">
              Try Again
            </button>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {examQuestions.map((q, i) => (
          <div key={i} className={`bg-white p-6 rounded-xl shadow-sm border ${examSubmitted ? (examAnswers[q.id] === q.correctAnswer ? 'border-green-200 bg-green-50/30' : 'border-red-200 bg-red-50/30') : 'border-slate-100'}`}>
            <div className="flex gap-4">
              <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-500 font-bold text-sm">
                {i + 1}
              </span>
              <div className="w-full">
                <p className="text-lg font-semibold text-slate-800 mb-4">{q.question}</p>
                <div className="space-y-2">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = examAnswers[q.id] === optIdx;
                    const isCorrect = q.correctAnswer === optIdx;
                    
                    let style = "p-3 rounded-lg border text-left w-full transition-all ";
                    
                    if (examSubmitted) {
                      if (isCorrect) style += "bg-green-100 border-green-500 text-green-800 font-medium";
                      else if (isSelected && !isCorrect) style += "bg-red-100 border-red-500 text-red-800";
                      else style += "border-slate-100 opacity-60";
                    } else {
                      if (isSelected) style += "bg-indigo-50 border-indigo-500 text-indigo-700";
                      else style += "border-slate-200 hover:bg-slate-50";
                    }

                    return (
                      <button 
                        key={optIdx} 
                        disabled={examSubmitted}
                        onClick={() => handleExamSelect(q.id, optIdx)}
                        className={style}
                      >
                        {opt}
                      </button>
                    )
                  })}
                </div>
                {examSubmitted && (
                  <div className="mt-4 text-sm text-slate-600 bg-white p-3 rounded border border-slate-100">
                    <span className="font-bold">Explanation:</span> {q.explanation}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {!examSubmitted && (
        <div className="mt-8 flex justify-end">
          <button 
            onClick={submitExam}
            disabled={Object.keys(examAnswers).length < examQuestions.length}
            className={`px-8 py-3 rounded-lg font-bold shadow-lg transition-all
              ${Object.keys(examAnswers).length < examQuestions.length 
                ? 'bg-slate-300 text-slate-500 cursor-not-allowed' 
                : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
          >
            Submit Exam
          </button>
        </div>
      )}
    </div>
  );

  const renderStats = () => {
    // Calc logic
    const overallRate = stats.totalAnswered > 0 ? (stats.totalCorrect / stats.totalAnswered) * 100 : 0;
    
    // Process topics
    const topicStats = Object.entries(stats.byTopic).map(([topic, data]) => ({
      topic,
      rate: data.total > 0 ? (data.correct / data.total) * 100 : 0,
      total: data.total
    })).sort((a, b) => b.rate - a.rate); // Best to worst

    const weakness = topicStats.length > 0 ? topicStats[topicStats.length - 1] : null;

    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => setView('landing')} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <RotateCcw size={20} className="text-slate-500" />
          </button>
          <h2 className="text-2xl font-bold text-slate-800">Your Progress</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <div className="text-slate-500 text-sm font-medium uppercase tracking-wide mb-2">Total Questions</div>
            <div className="text-4xl font-bold text-slate-800">{stats.totalAnswered}</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <div className="text-slate-500 text-sm font-medium uppercase tracking-wide mb-2">Success Rate</div>
            <div className={`text-4xl font-bold ${overallRate >= 80 ? 'text-green-600' : overallRate >= 50 ? 'text-indigo-600' : 'text-orange-600'}`}>
              {Math.round(overallRate)}%
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <div className="text-slate-500 text-sm font-medium uppercase tracking-wide mb-2">Needs Focus</div>
            <div className="text-xl font-bold text-red-500">
              {weakness ? `${weakness.topic} (${Math.round(weakness.rate)}%)` : "No data yet"}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Topic Breakdown</h3>
            {topicStats.length > 0 ? (
              topicStats.map((t) => (
                <ProgressBar 
                  key={t.topic} 
                  label={t.topic} 
                  value={t.rate} 
                  max={100} 
                  color={t.rate > 80 ? 'bg-green-500' : t.rate > 50 ? 'bg-indigo-500' : 'bg-orange-500'} 
                />
              ))
            ) : (
              <p className="text-slate-400 italic">Answer questions to see topic breakdown.</p>
            )}
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Exam History</h3>
            <div className="space-y-4">
              {stats.examHistory && stats.examHistory.length > 0 ? (
                [...stats.examHistory].reverse().slice(0, 5).map((exam, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className="text-slate-600 text-sm">{new Date(exam.date).toLocaleDateString()}</span>
                    <span className={`font-bold ${exam.score >= 16 ? 'text-green-600' : 'text-slate-700'}`}>
                      {exam.score} / {exam.total}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-slate-400 italic">No completed exams yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {view === 'landing' && renderLanding()}
      {view === 'study' && renderStudy()}
      {view === 'practice' && renderPractice()}
      {view === 'exam' && renderExam()}
      {view === 'stats' && renderStats()}
    </div>
  );
}
