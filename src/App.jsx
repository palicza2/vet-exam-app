import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Activity, Brain } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// --- SERVICE & HOOK IMPORTS ---
import { configError } from './services/firebase';
import { useExam } from './hooks/useExam';
import { usePractice } from './hooks/usePractice';

// --- CONTEXT IMPORTS ---
import { AuthProvider, useAuthContext } from './contexts/AuthContext';
import { StatsProvider, useStatsContext } from './contexts/StatsContext';

// --- PAGE IMPORTS ---
import AuthPage from './pages/AuthPage';
import LandingPage from './pages/LandingPage';
import TopicSelectionPage from './pages/TopicSelectionPage';
import StudyPage from './pages/StudyPage';
import PracticePage from './pages/PracticePage';
import ExamPage from './pages/ExamPage';
import StatsPage from './pages/StatsPage';

// --- DATA IMPORTÁLÁSA ---
import { ALL_TOPICS, GET_TOPIC_QUESTIONS_ASYNC } from './data/index.js';

// Wrapper for routing logic
function AppRoutes() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { handleSignOut } = useAuthContext();
  const { stats, updateStats, updateBulkStats, getTodayDateString } = useStatsContext();
  
  const [selectionMode, setSelectionMode] = useState(null);
  const [selectedTopicId, setSelectedTopicId] = useState(null);

  const {
    examQuestions,
    examAnswers,
    examSubmitted,
    examScore,
    startExam,
    handleExamSelect,
    calculateResults
  } = useExam();

  const {
    currentPracticeQ,
    practicePool,
    practiceFeedback,
    practiceUserAnswer,
    aiExplanation,
    loadingAI,
    startPractice,
    handlePracticeAnswer,
    nextQuestion: nextPracticeQuestion,
    getAIExplanation: handleGetAIExplanation
  } = usePractice();

  const getQuestionsForTopic = (topic) => {
    const allQuestions = GET_ALL_QUESTIONS();
    if (!topic) return allQuestions;
    return topic.questions && topic.questions.length > 0 
      ? topic.questions 
      : allQuestions.filter(q => q.topic === topic.title);
  };

  const initiateSelection = (mode) => {
    setSelectionMode(mode);
    navigate('/select-topic');
  };

  const handleTopicSelect = async (topic) => {
    const questions = await GET_TOPIC_QUESTIONS_ASYNC(topic.id);
    console.log("Questions in handleTopicSelect:", questions);
    if (questions.length === 0) {
      alert("Nincsenek elérhető kérdések ebben a témakörben!");
      console.log("No questions available for the selected topic.");
      return;
    }

    if (selectionMode === 'practice') {
      startPractice(questions);
      navigate('/practice');
    } else if (selectionMode === 'exam') {
      startExam(questions);
      navigate('/exam');
    }
  };

  const onExamSubmit = async () => {
    const correctCount = calculateResults();
    const today = getTodayDateString();
    const newStats = { ...stats };
    if (!newStats.dailyActivity) newStats.dailyActivity = {};
    if (!newStats.dailyActivity[today]) newStats.dailyActivity[today] = 0;
    
    examQuestions.forEach(q => {
      const isCorrect = examAnswers[q.id] === q.correctAnswer;
      if (!newStats.byTopic[q.topic]) newStats.byTopic[q.topic] = { total: 0, correct: 0 };
      newStats.byTopic[q.topic].total += 1;
      if (isCorrect) newStats.byTopic[q.topic].correct += 1;
    });

    newStats.totalAnswered += examQuestions.length;
    newStats.totalCorrect += correctCount;
    newStats.dailyActivity[today] += examQuestions.length;
    newStats.examHistory = [...(newStats.examHistory || []), {
       date: new Date().toISOString(),
       score: correctCount,
       total: examQuestions.length
    }];
    await updateBulkStats(newStats);
  };

  return (
    <Routes>
      <Route path="/" element={
        <LandingPage 
          handleSignOut={handleSignOut} 
          setView={(v) => navigate(`/${v}`)} 
          setSelectedTopicId={setSelectedTopicId} 
          initiateSelection={initiateSelection} 
        />
      } />
      <Route path="/select-topic" element={
        <TopicSelectionPage 
          selectionMode={selectionMode} 
          handleTopicSelect={handleTopicSelect} 
          setView={() => navigate('/')} 
          ALL_TOPICS={ALL_TOPICS} 
        />
      } />
      <Route path="/study" element={
        <StudyPage 
          selectedTopicId={selectedTopicId} 
          setSelectedTopicId={setSelectedTopicId} 
          ALL_TOPICS={ALL_TOPICS} 
          setView={() => navigate('/')} 
          handleTopicSelect={handleTopicSelect} 
          setSelectionMode={setSelectionMode} 
        />
      } />
      <Route path="/practice" element={
        <PracticePage 
          practicePool={practicePool} 
          currentPracticeQ={currentPracticeQ} 
          practiceUserAnswer={practiceUserAnswer} 
          practiceFeedback={practiceFeedback} 
          handlePracticeAnswer={(idx) => {
            handlePracticeAnswer(idx);
            updateStats(idx === currentPracticeQ.correctAnswer, currentPracticeQ.topic);
          }} 
          handleGetAIExplanation={handleGetAIExplanation} 
          aiExplanation={aiExplanation} 
          loadingAI={loadingAI} 
          nextPracticeQuestion={nextPracticeQuestion} 
          setView={() => navigate('/select-topic')} 
        />
      } />
      <Route path="/exam" element={
        <ExamPage 
          examQuestions={examQuestions} 
          examAnswers={examAnswers} 
          examSubmitted={examSubmitted} 
          examScore={examScore} 
          handleExamSelect={handleExamSelect} 
          submitExam={onExamSubmit} 
          setView={() => navigate('/')} 
          initiateSelection={initiateSelection} 
        />
      } />
      <Route path="/stats" element={
        <StatsPage 
          setView={() => navigate('/')} 
        />
      } />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function AuthGuard({ children }) {
  const { user, loading: authLoading, error: authError, setAuthError, handleSignIn, handleRegister } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const onAuthSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        await handleRegister(email, password);
      } else {
        await handleSignIn(email, password);
      }
    } catch (err) {
      // Handle error in UI, maybe setAuthError
      console.error("Auth submission error:", err);
    }
  };

  if (authLoading) return <div className="min-h-screen flex items-center justify-center bg-slate-50"><Activity className="animate-spin text-indigo-600" size={32} /></div>;

  if (!user) {
    return (
      <AuthPage 
        isRegistering={isRegistering}
        setIsRegistering={setIsRegistering}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        authError={authError}
        setAuthError={setAuthError}
        handleAuth={onAuthSubmit}
      />
    );
  }

  return children;
}

export default function App() {
  const { t } = useTranslation();

  if (configError) {
    return <div>{t('firebase_config_error', 'Firebase Configuration Error')}</div>;
  }

  return (
    <AuthProvider>
      <StatsProvider>
        <Router>
          <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            <AuthGuard>
              <AppRoutes />
            </AuthGuard>
          </div>
        </Router>
      </StatsProvider>
    </AuthProvider>
  );
}