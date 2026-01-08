import React from 'react';
import { RotateCcw, ChevronRight, Book, GraduationCap, Brain } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useTranslation } from 'react-i18next';

const TopicSelectionPage = ({ selectionMode, handleTopicSelect, setView, ALL_TOPICS }) => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-12">
      <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
        <Button variant="ghost" size="icon" onClick={() => setView('landing')} className="rounded-full w-8 h-8 md:w-10 md:h-10">
          <RotateCcw size={16} className="text-slate-400 md:w-5 md:h-5" />
        </Button>
        <div>
          <h2 className="text-xl md:text-3xl font-black text-slate-900 tracking-tight leading-none">
            {selectionMode === 'practice' ? t("topic_selection.title_practice") : t("topic_selection.title_exam")}
          </h2>
          <p className="text-[10px] md:text-sm text-slate-500 font-bold uppercase tracking-wider mt-1">{t("topic_selection.subtitle")}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {/* Minden témakör kártya */}
        <Card 
          className="group cursor-pointer border-indigo-100 bg-indigo-50/30 hover:bg-indigo-50 transition-all duration-200 shadow-none border-dashed"
          onClick={() => handleTopicSelect(null)}
        >
          <CardHeader className="p-4 md:p-6 flex flex-row items-center gap-4 space-y-0">
            <div className="p-2.5 bg-indigo-600 text-white rounded-xl shadow-md shrink-0">
              <Brain size={18} className="md:w-6 md:h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-sm md:text-xl font-bold text-slate-800 leading-tight">{t("topic_selection.all_topics")}</CardTitle>
              <CardDescription className="text-[10px] md:text-sm text-indigo-600 font-bold leading-tight">
                {t("topic_selection.mixed_questions")}
              </CardDescription>
            </div>
            <ChevronRight className="text-indigo-200 group-hover:text-indigo-600 transition-colors shrink-0" size={16} />
          </CardHeader>
        </Card>

        {/* Egyedi témakörök */}
        {ALL_TOPICS.map((topic) => (
          <Card 
            key={topic.id}
            className="group cursor-pointer hover:bg-slate-50 transition-all duration-200 border-slate-100 shadow-none"
            onClick={() => handleTopicSelect(topic)}
          >
            <CardHeader className="p-4 md:p-6 flex flex-row items-center gap-4 space-y-0">
              <div className="p-2.5 bg-white text-slate-400 border border-slate-100 rounded-xl shrink-0 group-hover:text-indigo-500 transition-colors">
                <Book size={18} className="md:w-6 md:h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <CardTitle className="text-sm md:text-lg font-bold text-slate-800 leading-tight">
                  {topic.title}
                </CardTitle>
                <CardDescription className="text-[10px] md:text-xs text-slate-400 font-medium">
                  {topic.questions ? `${topic.questions.length} ${t("common.questions")}` : `0 ${t("common.questions")}`}
                </CardDescription>
              </div>
              <ChevronRight className="text-slate-200 group-hover:text-indigo-400 transition-colors shrink-0" size={16} />
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="mt-12 md:mt-16 p-6 md:p-8 bg-slate-900 rounded-2xl md:rounded-3xl text-white overflow-hidden relative">
        <div className="relative z-10">
          <h3 className="text-base md:text-2xl font-black mb-1 md:mb-2 leading-none">{t("topic_selection.how_it_works")}</h3>
          <p className="text-[10px] md:text-sm text-slate-400 max-w-xs md:max-w-lg leading-relaxed">
            {selectionMode === 'practice' 
              ? t("topic_selection.practice_how")
              : t("topic_selection.exam_how")
            }
          </p>
        </div>
        <GraduationCap className="absolute -right-4 -bottom-4 md:-right-8 md:-bottom-8 text-white/5 w-24 h-24 md:w-48 md:h-48 transform -rotate-12" />
      </div>
    </div>
  );
};

export default TopicSelectionPage;
