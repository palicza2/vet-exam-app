import React from 'react';
import { RotateCcw, ChevronRight } from 'lucide-react';
import QuestionCard from '../components/QuestionCard';
import { Button } from "@/components/ui/button"
import { useTranslation } from 'react-i18next';

const PracticePage = ({ 
  practicePool, 
  currentPracticeQ, 
  practiceUserAnswer, 
  practiceFeedback, 
  handlePracticeAnswer, 
  handleGetAIExplanation, 
  aiExplanation, 
  loadingAI, 
  nextPracticeQuestion, 
  setView 
}) => {
  const { t } = useTranslation();

  if (!currentPracticeQ) return (
    <div className="min-h-screen flex items-center justify-center p-6 text-center">
      <div>
        <h2 className="text-xl md:text-2xl font-black text-slate-800 mb-4">{t("practice.no_questions")}</h2>
        <Button variant="outline" onClick={() => setView('landing')}>{t("practice.back_home")}</Button>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-12">
      <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
        <Button variant="ghost" size="icon" onClick={() => setView('topic-selection')} className="rounded-full w-8 h-8 md:w-10 md:h-10">
          <RotateCcw size={16} className="text-slate-400 md:w-5 md:h-5" />
        </Button>
        <div>
          <h2 className="text-xl md:text-3xl font-black text-slate-900 tracking-tight leading-none">{t("practice.title")}</h2>
          <p className="text-[10px] md:text-sm text-slate-500 font-bold uppercase tracking-wider mt-1">{t("practice.subtitle")}</p>
        </div>
      </div>

      <div className="mb-8 md:mb-12">
        <QuestionCard 
          question={currentPracticeQ}
          onAnswer={handlePracticeAnswer}
          showFeedback={practiceFeedback}
          userAnswer={practiceUserAnswer}
          onGetAI={handleGetAIExplanation}
          aiExplanation={aiExplanation}
          loadingAI={loadingAI}
        />
      </div>

      {practiceFeedback && (
        <div className="flex justify-center animate-in fade-in slide-in-from-bottom-2 duration-300 pb-16 md:pb-20">
          <Button 
            size="lg"
            onClick={nextPracticeQuestion}
            className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 md:px-10 py-5 md:py-7 text-sm md:text-lg rounded-xl md:rounded-2xl font-black shadow-lg transition-all group h-auto"
          >
            {t("practice.next_question")} <ChevronRight className="ml-1.5 md:ml-2 group-hover:translate-x-1 transition-transform md:w-6 md:h-6" size={18} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default PracticePage;
