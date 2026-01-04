import React from 'react';
import { RotateCcw, Send, CheckCircle2, AlertCircle, RefreshCcw } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { useTranslation } from 'react-i18next';

const ExamPage = ({ 
  examQuestions, 
  examAnswers, 
  examSubmitted, 
  examScore, 
  handleExamSelect, 
  submitExam, 
  setView, 
  initiateSelection 
}) => {
  const { t } = useTranslation();
  const answeredCount = Object.keys(examAnswers).length;
  const progress = (answeredCount / examQuestions.length) * 100;

  if (examSubmitted) {
    const percentage = Math.round((examScore / examQuestions.length) * 100);
    const isPassed = percentage >= 80;

    return (
      <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Card className="shadow-none border-slate-100 overflow-hidden bg-white">
          <div className={`h-1.5 md:h-3 w-full ${isPassed ? 'bg-green-500' : 'bg-orange-500'}`} />
          <CardHeader className="text-center pt-8 md:pt-12 pb-4 md:pb-8">
            <div className="flex justify-center mb-4 md:mb-6">
              <div className={`p-3 md:p-4 rounded-2xl md:rounded-3xl ${isPassed ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'} shadow-sm`}>
                {isPassed ? <CheckCircle2 size={32} className="md:w-12 md:h-12" /> : <AlertCircle size={32} className="md:w-12 md:h-12" />}
              </div>
            </div>
            <CardTitle className="text-2xl md:text-4xl font-black text-slate-900 mb-1 md:mb-2">{t("exam.finished")}</CardTitle>
            <CardDescription className="text-sm md:text-lg font-medium text-slate-400">{t("exam.thank_you")}</CardDescription>
          </CardHeader>
          
          <CardContent className="px-4 md:px-12 text-center">
            <div className="bg-slate-50/50 rounded-2xl md:rounded-3xl p-6 md:p-10 border border-slate-100 inline-block w-full">
              <div className="text-[10px] md:text-sm font-black text-slate-400 uppercase tracking-widest mb-1 md:mb-2">{t("exam.result")}</div>
              <div className={`text-5xl md:text-7xl font-black mb-2 md:mb-4 ${isPassed ? 'text-green-600' : 'text-orange-600'}`}>
                {examScore} <span className="text-2xl md:text-3xl text-slate-300 font-medium">/ {examQuestions.length}</span>
              </div>
              <div className="text-lg md:text-2xl font-bold text-slate-800 mb-4 md:mb-6">{percentage}%</div>
              
              <Alert className={`p-3 md:p-4 border-none text-left ${isPassed ? "bg-green-100/50 text-green-900" : "bg-orange-100/50 text-orange-900"}`}>
                <AlertTitle className="font-bold text-xs md:text-lg mb-0.5 md:mb-1">
                  {isPassed ? t("exam.passed") : t("exam.failed")}
                </AlertTitle>
                <AlertDescription className="text-[10px] md:text-sm text-slate-600 leading-tight">
                  {isPassed 
                    ? t("exam.passed_desc") 
                    : t("exam.failed_desc")}
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col sm:flex-row gap-3 md:gap-4 p-6 md:p-12 pt-4 md:pt-8 justify-center">
            <Button 
              variant="outline"
              size="lg"
              onClick={() => setView('landing')}
              className="w-full sm:w-auto h-11 md:h-14 rounded-xl md:rounded-2xl font-black border-slate-200 text-xs md:text-base"
            >
              {t("practice.back_home")}
            </Button>
            <Button 
              size="lg"
              onClick={() => initiateSelection('exam')}
              className="w-full sm:w-auto h-11 md:h-14 rounded-xl md:rounded-2xl font-black bg-indigo-600 hover:bg-indigo-700 text-white shadow-md text-xs md:text-base"
            >
              <RefreshCcw className="mr-1.5 md:mr-2 md:w-5 md:h-5" size={16} /> {t("exam.new_exam")}
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-8 md:mb-12">
        <div className="flex items-center gap-3 md:gap-4">
          <Button variant="ghost" size="icon" onClick={() => setView('topic-selection')} className="rounded-full w-8 h-8 md:w-10 md:h-10">
            <RotateCcw size={16} className="text-slate-400 md:w-5 md:h-5" />
          </Button>
          <div>
            <h2 className="text-xl md:text-3xl font-black text-slate-900 tracking-tight leading-none">{t("exam.title")}</h2>
            <p className="text-[10px] md:text-sm text-slate-500 font-bold uppercase tracking-wider mt-1">{examQuestions.length} {t("exam.subtitle")}</p>
          </div>
        </div>
        
        <div className="w-full md:w-64 space-y-1.5 md:space-y-2">
          <div className="flex justify-between text-[10px] md:text-sm font-black text-slate-400 uppercase tracking-tighter">
            <span>{t("exam.progress")}</span>
            <span>{answeredCount} / {examQuestions.length}</span>
          </div>
          <Progress value={progress} className="h-2 md:h-3" />
        </div>
      </div>

      <div className="space-y-4 md:space-y-8 pb-32 md:pb-40">
        {examQuestions.map((q, qIdx) => (
          <Card key={q.id} className="border-slate-100 shadow-none bg-white">
            <CardHeader className="p-4 md:p-6 pb-2 md:pb-4">
              <div className="flex items-center gap-2 mb-1.5 md:mb-2">
                <span className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-[10px] md:text-sm font-black">
                  {qIdx + 1}
                </span>
                <span className="text-[10px] md:text-xs font-black text-indigo-600 uppercase tracking-widest">{q.topic}</span>
              </div>
              <CardTitle className="text-base md:text-xl font-bold text-slate-800 leading-tight">{q.question}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6 pt-0 md:pt-0 grid gap-2 md:gap-3">
              {q.options.map((option, oIdx) => (
                <Button
                  key={oIdx}
                  variant="ghost"
                  onClick={() => handleExamSelect(q.id, oIdx)}
                  className={`justify-start h-auto p-3 md:p-4 text-left whitespace-normal text-xs md:text-sm font-medium transition-all border
                    ${examAnswers[q.id] === oIdx 
                      ? 'bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-700' 
                      : 'border-slate-100 hover:border-indigo-200 hover:bg-slate-50 text-slate-500 shadow-sm'}`}
                >
                  <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full border mr-3 flex items-center justify-center shrink-0 transition-colors
                    ${examAnswers[q.id] === oIdx ? 'border-white bg-white' : 'border-slate-300'}`}>
                    {examAnswers[q.id] === oIdx && <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-indigo-600" />}
                  </div>
                  <span className="flex-1">{option}</span>
                </Button>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 md:p-6 bg-white/90 backdrop-blur-xl border-t border-slate-100 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t("exam.questions_answered")}</div>
            <div className="text-xl md:text-2xl font-black text-slate-800">{answeredCount} <span className="text-slate-200">/</span> {examQuestions.length}</div>
          </div>
          <Button 
            size="lg"
            disabled={answeredCount < examQuestions.length}
            onClick={submitExam}
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 md:px-12 h-12 md:h-14 rounded-xl md:rounded-2xl font-black shadow-lg transition-all disabled:opacity-30 text-xs md:text-base h-auto py-4"
          >
            <Send className="mr-1.5 md:mr-2 md:w-5 md:h-5" size={16} /> {t("exam.submit_exam")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExamPage;
