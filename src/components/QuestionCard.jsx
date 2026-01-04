import React from 'react';
import { Check, X, CheckCircle, BookOpen, Activity, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useTranslation } from 'react-i18next';

const QuestionCard = ({ question, onAnswer, showFeedback, userAnswer, onGetAI, aiExplanation, loadingAI }) => {
  const { t } = useTranslation();
  const isCorrect = userAnswer === question.correctAnswer;
  
  return (
    <Card className="max-w-xl mx-auto shadow-none border-slate-100 bg-white">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 md:p-6 pb-2 md:pb-4">
        <div className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md text-[10px] font-bold uppercase tracking-tight">
          {question.topic}
        </div>
        <span className="text-slate-300 text-[10px] font-mono">#{question.id}</span>
      </CardHeader>
      
      <CardContent className="p-4 md:p-6 pt-2 md:pt-0 space-y-4 md:space-y-6">
        <h3 className="text-base md:text-lg font-bold text-slate-800 leading-tight md:leading-snug">{question.question}</h3>
        
        <div className="space-y-2">
          {question.options.map((option, idx) => {
            let className = "w-full justify-start text-left p-3 md:p-4 h-auto whitespace-normal text-xs md:text-sm font-medium transition-all duration-150 border ";
            
            if (showFeedback) {
              if (idx === question.correctAnswer) {
                className += "border-green-500 bg-green-50/50 text-green-700 hover:bg-green-50/50";
              } else if (idx === userAnswer) {
                className += "border-red-400 bg-red-50/50 text-red-600 hover:bg-red-50/50";
              } else {
                className += "border-slate-100 text-slate-400 opacity-40";
              }
            } else {
              if (userAnswer === idx) {
                className += "border-indigo-500 bg-indigo-50 text-indigo-700 hover:bg-indigo-50";
              } else {
                className += "border-slate-200 hover:bg-slate-50 text-slate-600 shadow-sm";
              }
            }

            return (
              <Button
                key={idx}
                variant="ghost"
                onClick={() => !showFeedback && onAnswer(idx)}
                disabled={showFeedback}
                className={className}
              >
                <div className="flex items-center w-full">
                  <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full border mr-3 flex items-center justify-center shrink-0 transition-colors
                    ${showFeedback && idx === question.correctAnswer ? 'border-green-500 bg-green-500 text-white' : 
                      showFeedback && idx === userAnswer ? 'border-red-400 bg-red-400 text-white' : 
                      userAnswer === idx ? 'border-indigo-500 bg-indigo-500' : 'border-slate-300'}`}>
                    {showFeedback && idx === question.correctAnswer && <Check size={10} className="md:w-3 md:h-3" />}
                    {showFeedback && idx === userAnswer && idx !== question.correctAnswer && <X size={10} className="md:w-3 md:h-3" />}
                  </div>
                  <span className="flex-1">{option}</span>
                </div>
              </Button>
            );
          })}
        </div>

        {showFeedback && (
          <div className="mt-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
            <Alert className={`p-3 md:p-4 border-none ${isCorrect ? "bg-green-50 text-green-900" : "bg-red-50 text-red-900"}`}>
              <div className="flex items-start gap-2.5">
                {isCorrect ? <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" /> : <BookOpen className="h-4 w-4 text-red-500 mt-0.5" />}
                <div className="text-xs md:text-sm">
                  <span className="font-bold block mb-0.5">{isCorrect ? t("practice.correct") : t("practice.explanation")}</span>
                  <p className="text-slate-600 leading-normal">{question.explanation}</p>
                </div>
              </div>
            </Alert>

            {onGetAI && !aiExplanation && (
              <Button 
                onClick={onGetAI}
                disabled={loadingAI}
                variant="outline"
                size="sm"
                className="w-full h-9 md:h-11 border-indigo-100 text-indigo-600 text-xs font-bold hover:bg-indigo-50"
              >
                {loadingAI ? <Activity className="animate-spin mr-2" size={14} /> : <Brain className="mr-2" size={14} />}
                {loadingAI ? t("practice.ai_thinking") : t("practice.ai_get_explanation")}
              </Button>
            )}

            {aiExplanation && (
              <div className="p-3 md:p-4 bg-purple-50/50 rounded-xl border border-purple-100/50">
                <div className="flex items-center gap-2 mb-1.5 text-purple-700">
                  <Brain size={14} />
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-wider">{t("practice.ai_analysis")}</span>
                </div>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">
                  {aiExplanation}
                </p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
