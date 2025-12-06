import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithCustomToken } from 'firebase/auth';
import { getFirestore, doc, setDoc, updateDoc, onSnapshot } from 'firebase/firestore';
import { 
  BookOpen, CheckCircle, PieChart, Activity, RotateCcw, ChevronRight, Check, X, 
  Brain, LogOut, Lock, Mail, ShieldAlert, ChevronDown, ChevronUp, Book, ArrowLeft, Layers
} from 'lucide-react';

// --- ADATOK IMPORTÁLÁSA ---
import { ALL_TOPICS, GET_ALL_QUESTIONS } from './data/index.js';

// --- Firebase Configuration Setup ---
let app, auth, db;
let configError = false;
const appId = typeof __app_id !== 'undefined' ? __app_id : 'vet-exam-app';

try {
  // 1. Fejlesztői környezet (Chat Preview)
  const firebaseConfig = JSON.parse(__firebase_config);
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
} catch (e) {
  // 2. Éles környezet (Vercel) - A Te saját kulcsaid
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
    app = initializeApp(myRealConfig);
    auth = getAuth(app);
    db = getFirestore(app);
  } catch (err) {
    console.error("Firebase init error:", err);
    configError = true;
  }
}

// --- Components ---

const StudyCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(true);

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
        <span className="text-slate-400 text-sm">ID: {question.id}</span>
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
  const [authLoading, setAuthLoading] = useState(!configError);
  
  // Views: 'landing', 'study', 'practice', 'exam', 'stats', 'topic-selection'
  const [view, setView] = useState('landing'); 
  
  // Selection Logic
  const [selectionMode, setSelectionMode] = useState(null); // 'practice' or 'exam'
  const [selectedTopicId, setSelectedTopicId] = useState(null); // For study mode specific
  
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
    examHistory: [],
    dailyActivity: {} // { "2024-01-15": 5, "2024-01-16": 12, ... }
  });

  // Practice State
  const [currentPracticeQ, setCurrentPracticeQ] = useState(null);
  const [practicePool, setPracticePool] = useState([]); // A kiválasztott témakör kérdései
  const [practiceFeedback, setPracticeFeedback] = useState(false);
  const [practiceUserAnswer, setPracticeUserAnswer] = useState(null);

  // Exam State
  const [examQuestions, setExamQuestions] = useState([]);
  const [examAnswers, setExamAnswers] = useState({}); 
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [examScore, setExamScore] = useState(0);

  // --- Auth & Init ---
  useEffect(() => {
    if (configError) return;

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
        const initialStats = { totalAnswered: 0, totalCorrect: 0, byTopic: {}, examHistory: [], dailyActivity: {} };
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
    setStats({ totalAnswered: 0, totalCorrect: 0, byTopic: {}, examHistory: [], dailyActivity: {} });
    setView('landing');
  };

  // --- Helpers ---
  
  // Helper function to get today's date string (YYYY-MM-DD)
  const getTodayDateString = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };
  
  // Segédfüggvény a kérdések szűrésére
  const getQuestionsForTopic = (topic) => {
    const allQuestions = GET_ALL_QUESTIONS();
    
    // Ha nincs téma (Mixed) vagy a témának nincsenek direkt kérdései
    if (!topic) return allQuestions;

    // 1. Próbáljuk a topic objektumból kinyerni, ha ott van
    if (topic.questions && topic.questions.length > 0) {
      return topic.questions;
    }
    
    // 2. Ha nincs, szűrjünk név/cím alapján a nagy listából
    return allQuestions.filter(q => q.topic === topic.title);
  };

  const updateStats = async (isCorrect, topic, isExam = false, examScoreVal = 0, examTotal = 0) => {
    if (!user || configError) return;
    const statsRef = doc(db, 'artifacts', appId, 'users', user.uid, 'data', 'stats');
    
    const newStats = { ...stats };
    const today = getTodayDateString();
    
    // Initialize dailyActivity if it doesn't exist
    if (!newStats.dailyActivity) newStats.dailyActivity = {};
    if (!newStats.dailyActivity[today]) newStats.dailyActivity[today] = 0;
    
    if (!isExam) {
       newStats.totalAnswered += 1;
       if (isCorrect) newStats.totalCorrect += 1;

       if (!newStats.byTopic[topic]) newStats.byTopic[topic] = { total: 0, correct: 0 };
       newStats.byTopic[topic].total += 1;
       if (isCorrect) newStats.byTopic[topic].correct += 1;
       
       // Track daily activity for practice questions
       newStats.dailyActivity[today] += 1;
    } else {
      const historyEntry = {
        date: new Date().toISOString(),
        score: examScoreVal,
        total: examTotal
      };
      newStats.examHistory = [...(newStats.examHistory || []), historyEntry];
    }

    await updateDoc(statsRef, newStats);
  };

  // --- Selection Flow ---

  const initiateSelection = (mode) => {
    setSelectionMode(mode);
    setView('topic-selection');
  };

  const handleTopicSelect = (topic) => {
    // topic can be null (for Mixed/All) or a topic object
    const questions = getQuestionsForTopic(topic);
    
    if (questions.length === 0) {
      alert("Nincsenek elérhető kérdések ebben a témakörben!");
      return;
    }

    if (selectionMode === 'practice') {
      startPracticeWithQuestions(questions);
    } else if (selectionMode === 'exam') {
      startExamWithQuestions(questions);
    }
  };

  // --- Practice Logic ---

  const startPracticeWithQuestions = (questions) => {
    setPracticePool(questions); // Elmentjük a pool-t, hogy ebből sorsoljunk
    
    const randomQ = questions[Math.floor(Math.random() * questions.length)];
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
    // A practicePool-ból választunk, nem az összesből
    if (practicePool.length === 0) return;

    let newQ;
    // Megpróbálunk új kérdést adni, de ha csak 1 van, akkor marad ugyanaz
    let attempts = 0;
    do {
      newQ = practicePool[Math.floor(Math.random() * practicePool.length)];
      attempts++;
    } while (newQ.id === currentPracticeQ.id && practicePool.length > 1 && attempts < 10);
    
    setCurrentPracticeQ(newQ);
    setPracticeFeedback(false);
    setPracticeUserAnswer(null);
  };

  // --- Exam Logic ---

  const startExamWithQuestions = (questions) => {
    const EXAM_LENGTH = 40; // MÓDOSÍTVA 40-re
    
    let selected = [];
    if (questions.length <= EXAM_LENGTH) {
        // Ha kevesebb kérdés van mint 40, vegyük az összeset véletlenszerű sorrendben
        selected = [...questions].sort(() => 0.5 - Math.random());
    } else {
        // Vegyünk 40 véletlenszerűt
        const shuffled = [...questions].sort(() => 0.5 - Math.random());
        selected = shuffled.slice(0, EXAM_LENGTH);
    }
    
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
    const today = getTodayDateString();
    
    // Initialize dailyActivity if it doesn't exist
    if (!newStats.dailyActivity) newStats.dailyActivity = {};
    if (!newStats.dailyActivity[today]) newStats.dailyActivity[today] = 0;
    
    examQuestions.forEach(q => {
      const isCorrect = examAnswers[q.id] === q.correctAnswer;
      if (isCorrect) correctCount++;
      
      if (!newStats.byTopic[q.topic]) newStats.byTopic[q.topic] = { total: 0, correct: 0 };
      newStats.byTopic[q.topic].total += 1;
      if (isCorrect) newStats.byTopic[q.topic].correct += 1;
    });

    newStats.totalAnswered += examQuestions.length;
    newStats.totalCorrect += correctCount;
    
    // Track daily activity for exam questions
    newStats.dailyActivity[today] += examQuestions.length;
    
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

  if (configError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50 p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full text-center border-2 border-red-100">
          <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldAlert className="text-red-600" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-3">Database Setup Required</h2>
          <p className="text-slate-600 mb-6">
            The app cannot connect to Firebase.
          </p>
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
          Állatorvosi vizsgafelkészítő. Tanuld meg a tételeket, gyakorolj azonnali visszajelzéssel, 
          vagy teszteld tudásod vizsga módban.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <button 
          onClick={() => { setView('study'); setSelectedTopicId(null); }} 
          className="group p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-indigo-200 transition-all text-left"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:scale-110 transition-transform">
              <Book size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Tananyagok</h3>
          </div>
          <p className="text-slate-500">Vizsgatételek áttekintése kidolgozott anyagokkal.</p>
        </button>

        <button onClick={() => initiateSelection('practice')} className="group p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-indigo-200 transition-all text-left">
          <div className="flex items-center gap-4 mb-3">
            <div className="p-3 bg-green-50 text-green-600 rounded-lg group-hover:scale-110 transition-transform">
              <CheckCircle size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Gyakorlás</h3>
          </div>
          <p className="text-slate-500">Válassz témakört vagy gyakorolj mindből.</p>
        </button>

        <button onClick={() => initiateSelection('exam')} className="group p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-indigo-200 transition-all text-left">
          <div className="flex items-center gap-4 mb-3">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-lg group-hover:scale-110 transition-transform">
              <Activity size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Vizsga</h3>
          </div>
          <p className="text-slate-500">40 kérdéses teszt. Válassz témát vagy vegyeset.</p>
        </button>

        <button onClick={() => setView('stats')} className="group p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-indigo-200 transition-all text-left">
          <div className="flex items-center gap-4 mb-3">
            <div className="p-3 bg-orange-50 text-orange-600 rounded-lg group-hover:scale-110 transition-transform">
              <PieChart size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Statisztikák</h3>
          </div>
          <p className="text-slate-500">Kövesd nyomon a haladásodat és a gyenge pontjaidat.</p>
        </button>
      </div>
    </div>
  );

  // --- ÚJ TÉMA VÁLASZTÓ NÉZET (Gyakorlás/Vizsga előtt) ---
  const renderTopicSelection = () => (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => setView('landing')} className="p-2 hover:bg-slate-100 rounded-full transition-colors flex items-center gap-2 text-slate-500 hover:text-slate-800">
          <ArrowLeft size={20} />
          <span className="font-medium">Vissza a főoldalra</span>
        </button>
      </div>
      
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">
          {selectionMode === 'practice' ? 'Gyakorlás indítása' : 'Vizsga indítása'}
        </h2>
        <p className="text-slate-500 text-lg">
          Válassz egy konkrét témakört, vagy teszteld tudásod mindegyikből egyszerre.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* MIXED / ÖSSZES OPCIÓ */}
        <button 
          onClick={() => handleTopicSelect(null)} // null = vegyes
          className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-left group h-full flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 text-white rounded-lg backdrop-blur-sm">
                <Layers size={24} />
              </div>
              <ChevronRight className="text-indigo-200 group-hover:text-white transition-colors" size={20} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Vegyes / Összes Téma
            </h3>
            <p className="text-indigo-100 text-sm">
              Kérdések válogatása az összes elérhető témakörből. A legátfogóbb teszt.
            </p>
          </div>
        </button>

        {/* EGYÉNI TÉMÁK */}
        {ALL_TOPICS.map((topic) => (
          <button 
            key={topic.id}
            onClick={() => handleTopicSelect(topic)}
            className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-lg hover:-translate-y-1 transition-all text-left group h-full flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Book size={24} />
                </div>
                <ChevronRight className="text-slate-300 group-hover:text-indigo-400 transition-colors" size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-indigo-700 transition-colors line-clamp-2">
                {topic.title}
              </h3>
            </div>
            <div className="pt-4 mt-2 border-t border-slate-100">
              <span className="text-slate-500 text-xs font-semibold uppercase tracking-wide">
                {topic.questions ? `${topic.questions.length} kérdés` : 'Választható'}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderStudy = () => {
    // 1. Ha van kiválasztott téma, mutassuk a tartalmát
    if (selectedTopicId) {
      const topic = ALL_TOPICS.find(t => t.id === selectedTopicId);
      
      if (!topic) return <div>Hiba: A téma nem található.</div>;

      return (
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-8">
            <button 
              onClick={() => setSelectedTopicId(null)}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors flex items-center gap-2 text-slate-500 hover:text-indigo-600"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Vissza a listához</span>
            </button>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                <BookOpen size={32} />
              </div>
              {topic.title}
            </h2>
            
            <div className="space-y-4">
              {topic.studyMaterial.map((section, idx) => (
                <StudyCard key={idx} data={section} />
              ))}
            </div>
          </div>

          {/* Gyakorlás indítása ebből a témából */}
          <div className="flex justify-center mt-12 mb-8">
            <button 
              onClick={() => {
                setSelectionMode('practice');
                handleTopicSelect(topic);
              }} 
              className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-700 hover:shadow-indigo-200/50 transition-all flex items-center gap-2"
            >
              Gyakorlás indítása <ChevronRight size={20} />
            </button>
          </div>
        </div>
      );
    }

    // 2. Ha nincs kiválasztva semmi, mutassuk a CSEMPÉKET (Témaválasztó)
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => setView('landing')} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <RotateCcw size={20} className="text-slate-500" />
          </button>
          <h2 className="text-2xl font-bold text-slate-800">Tananyagok</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_TOPICS.map((topic) => (
            <button 
              key={topic.id}
              onClick={() => setSelectedTopicId(topic.id)}
              className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-lg hover:-translate-y-1 transition-all text-left group h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg group-hover:scale-110 transition-transform">
                    <Book size={24} />
                  </div>
                  <ChevronRight className="text-slate-300 group-hover:text-indigo-400 transition-colors" size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-indigo-700 transition-colors line-clamp-2">
                  {topic.title}
                </h3>
              </div>
              <div className="pt-4 mt-2 border-t border-slate-100">
                <span className="text-slate-500 text-xs font-semibold uppercase tracking-wide">
                  {topic.questions ? `${topic.questions.length} kérdés` : 'Tananyag'}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderPractice = () => (
    <div className="max-w-3xl mx-auto px-4 py-8 min-h-screen flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <button onClick={() => setView('topic-selection')} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-medium">
          <ArrowLeft size={18} /> Vissza a választáshoz
        </button>
        <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
           Gyakorló Mód {practicePool.length > 0 && `(${practicePool.length} kérdés)`}
        </div>
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
              Következő kérdés <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const renderExam = () => (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8 sticky top-0 bg-slate-50/90 backdrop-blur-sm py-4 z-10 border-b border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800">Vizsga</h2>
        {!examSubmitted ? (
           <div className="text-slate-600 font-medium">
             Megválaszolva: {Object.keys(examAnswers).length} / {examQuestions.length}
           </div>
        ) : (
           <div className="text-2xl font-bold text-indigo-600">
             Eredmény: {Math.round((examScore / examQuestions.length) * 100)}%
           </div>
        )}
      </div>

      {examSubmitted && (
        <div className="bg-indigo-900 text-white p-8 rounded-2xl shadow-xl mb-8 text-center">
          <h3 className="text-3xl font-bold mb-2">
            {examScore / examQuestions.length >= 0.8 ? 'Kiváló munka!' : examScore / examQuestions.length >= 0.6 ? 'Szép teljesítmény!' : 'Gyakorolj még!'}
          </h3>
          <p className="text-indigo-200 mb-6">
            {examScore} helyes válasz a {examQuestions.length}-ből.
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={() => setView('landing')} className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-lg font-medium transition-colors">
              Vissza a főoldalra
            </button>
            <button onClick={() => initiateSelection('exam')} className="bg-white text-indigo-900 px-6 py-2 rounded-lg font-bold hover:bg-indigo-50 transition-colors">
              Új vizsga indítása
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
                    <span className="font-bold">Magyarázat:</span> {q.explanation}
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
            Vizsga Beküldése
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
    
    // Process daily activity for timeline
    const dailyActivity = stats.dailyActivity || {};
    const today = new Date();
    const last30Days = [];
    
    for (let i = 29; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateString = date.toISOString().split('T')[0];
      const count = dailyActivity[dateString] || 0;
      last30Days.push({
        date: dateString,
        dateObj: date,
        count: count
      });
    }
    
    const maxCount = Math.max(...last30Days.map(d => d.count), 1);

    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => setView('landing')} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <RotateCcw size={20} className="text-slate-500" />
          </button>
          <h2 className="text-2xl font-bold text-slate-800">Előrehaladás</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <div className="text-slate-500 text-sm font-medium uppercase tracking-wide mb-2">Összes Kérdés</div>
            <div className="text-4xl font-bold text-slate-800">{stats.totalAnswered}</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <div className="text-slate-500 text-sm font-medium uppercase tracking-wide mb-2">Sikerességi Ráta</div>
            <div className={`text-4xl font-bold ${overallRate >= 80 ? 'text-green-600' : overallRate >= 50 ? 'text-indigo-600' : 'text-orange-600'}`}>
              {Math.round(overallRate)}%
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <div className="text-slate-500 text-sm font-medium uppercase tracking-wide mb-2">Fejlesztendő</div>
            <div className="text-xl font-bold text-red-500">
              {weakness ? `${weakness.topic} (${Math.round(weakness.rate)}%)` : "Nincs adat"}
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm mb-8">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Napi Aktivítás (Utolsó 30 nap)</h3>
          {maxCount > 0 ? (
            <div className="space-y-4">
              <div className="flex items-end gap-1 h-48 pb-4 border-b border-slate-200">
                {last30Days.map((day, idx) => {
                  const heightPercent = (day.count / maxCount) * 100;
                  const isToday = day.date === getTodayDateString();
                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center group relative">
                      <div 
                        className={`w-full rounded-t transition-all hover:opacity-80 cursor-pointer ${
                          isToday ? 'bg-indigo-600' : 'bg-indigo-400'
                        }`}
                        style={{ height: `${Math.max(heightPercent, 2)}%` }}
                        title={`${day.dateObj.toLocaleDateString('hu-HU', { month: 'short', day: 'numeric' })}: ${day.count} kérdés`}
                      />
                      {idx % 5 === 0 && (
                        <span className="text-xs text-slate-500 mt-1 transform -rotate-45 origin-top-left whitespace-nowrap">
                          {day.dateObj.toLocaleDateString('hu-HU', { month: 'short', day: 'numeric' })}
                        </span>
                      )}
                      <div className="absolute bottom-full mb-2 hidden group-hover:block bg-slate-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10">
                        {day.dateObj.toLocaleDateString('hu-HU', { year: 'numeric', month: 'long', day: 'numeric' })}: {day.count} kérdés
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between items-center text-sm text-slate-600">
                <span>Összesen: {last30Days.reduce((sum, d) => sum + d.count, 0)} kérdés</span>
                <span>Átlag: {Math.round(last30Days.reduce((sum, d) => sum + d.count, 0) / 30)} kérdés/nap</span>
              </div>
            </div>
          ) : (
            <p className="text-slate-400 italic">Még nincs napi aktivitás adat.</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Témakörök bontása</h3>
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
              <p className="text-slate-400 italic">Válaszolj kérdésekre a statisztikákhoz.</p>
            )}
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Vizsga Előzmények</h3>
            <div className="space-y-4">
              {stats.examHistory && stats.examHistory.length > 0 ? (
                [...stats.examHistory].reverse().slice(0, 5).map((exam, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className="text-slate-600 text-sm">{new Date(exam.date).toLocaleDateString()}</span>
                    <span className={`font-bold ${exam.score / exam.total >= 0.8 ? 'text-green-600' : 'text-slate-700'}`}>
                      {exam.score} / {exam.total}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-slate-400 italic">Nincs még befejezett vizsga.</p>
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
      {view === 'topic-selection' && renderTopicSelection()}
    </div>
  );
}