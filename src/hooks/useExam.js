import { useState } from 'react';

export const useExam = (allQuestions) => {
  const [examQuestions, setExamQuestions] = useState([]);
  const [examAnswers, setExamAnswers] = useState({}); 
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [examScore, setExamScore] = useState(0);

  const startExam = (questions, length = 40) => {
    let selected = [];
    if (questions.length <= length) {
        selected = [...questions].sort(() => 0.5 - Math.random());
    } else {
        const shuffled = [...questions].sort(() => 0.5 - Math.random());
        selected = shuffled.slice(0, length);
    }
    
    setExamQuestions(selected);
    setExamAnswers({});
    setExamSubmitted(false);
    setExamScore(0);
  };

  const handleExamSelect = (qId, optionIdx) => {
    if (examSubmitted) return;
    setExamAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateResults = () => {
    let correctCount = 0;
    examQuestions.forEach(q => {
      if (examAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });
    setExamScore(correctCount);
    setExamSubmitted(true);
    return correctCount;
  };

  return { 
    examQuestions, 
    examAnswers, 
    examSubmitted, 
    examScore, 
    startExam, 
    handleExamSelect, 
    calculateResults 
  };
};
