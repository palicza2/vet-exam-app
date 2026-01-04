import { useState } from 'react';
import { generateExplanation } from '../utils/gemini';

export const usePractice = () => {
  const [currentPracticeQ, setCurrentPracticeQ] = useState(null);
  const [practicePool, setPracticePool] = useState([]);
  const [practiceFeedback, setPracticeFeedback] = useState(false);
  const [practiceUserAnswer, setPracticeUserAnswer] = useState(null);
  const [aiExplanation, setAiExplanation] = useState(null);
  const [loadingAI, setLoadingAI] = useState(false);

  const startPractice = (questions) => {
    setPracticePool(questions);
    const randomQ = questions[Math.floor(Math.random() * questions.length)];
    setCurrentPracticeQ(randomQ);
    setPracticeFeedback(false);
    setPracticeUserAnswer(null);
    setAiExplanation(null);
    setLoadingAI(false);
  };

  const handlePracticeAnswer = (idx) => {
    setPracticeUserAnswer(idx);
    setPracticeFeedback(true);
  };

  const nextQuestion = () => {
    if (practicePool.length === 0) return;
    let newQ;
    let attempts = 0;
    do {
      newQ = practicePool[Math.floor(Math.random() * practicePool.length)];
      attempts++;
    } while (newQ && currentPracticeQ && newQ.id === currentPracticeQ.id && practicePool.length > 1 && attempts < 10);
    
    setCurrentPracticeQ(newQ);
    setPracticeFeedback(false);
    setPracticeUserAnswer(null);
    setAiExplanation(null);
    setLoadingAI(false);
  };

  const getAIExplanation = async () => {
    if (!currentPracticeQ || loadingAI) return;
    
    setLoadingAI(true);
    const explanation = await generateExplanation(
      currentPracticeQ.topic,
      currentPracticeQ.question,
      currentPracticeQ.options[practiceUserAnswer],
      currentPracticeQ.options[currentPracticeQ.correctAnswer]
    );
    setAiExplanation(explanation || "Sajnos nem sikerült magyarázatot generálni. Kérlek próbáld újra később.");
    setLoadingAI(false);
  };

  return {
    currentPracticeQ,
    practicePool,
    practiceFeedback,
    practiceUserAnswer,
    aiExplanation,
    loadingAI,
    startPractice,
    handlePracticeAnswer,
    nextQuestion,
    getAIExplanation
  };
};
