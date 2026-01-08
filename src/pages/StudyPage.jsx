import React, { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, ChevronRight, RotateCcw, Book } from 'lucide-react';
import StudyCard from '../components/StudyCard';
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useTranslation } from 'react-i18next';

const StudyPage = ({ selectedTopicId, setSelectedTopicId, ALL_TOPICS, setView, handleTopicSelect, setSelectionMode }) => {
  const { t } = useTranslation();
  const [loadedTopicData, setLoadedTopicData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTopicData = async () => {
      setIsLoading(true);
      const topicMetadata = ALL_TOPICS.find(t_item => t_item.id === selectedTopicId);

      if (!topicMetadata) {
        setLoadedTopicData(null);
        setIsLoading(false);
        return;
      }

      if (topicMetadata.isLazy) {
        // Dynamically import the full topic data
        const { getLatinTermsData } = await import('../data/topics/latin_terms.js');
        setLoadedTopicData(getLatinTermsData());
      } else {
        setLoadedTopicData(topicMetadata);
      }
      setIsLoading(false);
    };

    if (selectedTopicId) {
      loadTopicData();
    } else {
      setLoadedTopicData(null);
      setIsLoading(false);
    }
  }, [selectedTopicId, ALL_TOPICS]);

  // If a topic is selected, show its content
  if (selectedTopicId) {
    if (isLoading) {
      return <div className="p-12 text-center">{t("common.loading")}</div>;
    }

    if (!loadedTopicData) {
      return <div className="p-12 text-center">{t("study.error")} {t("study.not_found")}</div>;
    }

    return (
      <div className="max-w-3xl mx-auto px-4 py-6 md:py-8">
        <div className="flex items-center mb-6 md:mb-8">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setSelectedTopicId(null)}
            className="text-slate-400 hover:text-indigo-600 pl-0 text-xs font-bold uppercase tracking-wider"
          >
            <ArrowLeft className="mr-1.5" size={14} />
            {t("study.back_to_list")}
          </Button>
        </div>
        
        <div className="mb-10 md:mb-12">
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <div className="p-2 md:p-3 bg-indigo-600 text-white rounded-xl shadow-md">
              <BookOpen size={20} className="md:w-8 md:h-8" />
            </div>
            <h2 className="text-xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">
              {loadedTopicData.title}
            </h2>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            {loadedTopicData.studyMaterial.map((section, idx) => (
              <StudyCard key={idx} data={section} />
            ))}
          </div>
        </div>

        {/* Gyakorlás indítása ebből a témából */}
        <div className="flex justify-center mt-10 mb-12 md:mb-16">
          <Button 
            size="lg"
            onClick={() => {
              setSelectionMode('practice');
              handleTopicSelect(loadedTopicData);
            }} 
            className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 md:px-10 py-5 md:py-7 text-sm md:text-lg rounded-xl md:rounded-2xl font-black shadow-lg transition-all group h-auto"
          >
            {t("study.start_practice")} <ChevronRight className="ml-1.5 md:ml-2 group-hover:translate-x-1 transition-transform md:w-6 md:h-6" size={18} />
          </Button>
        </div>
      </div>
    );
  }

  // If nothing is selected, show the list
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-12">
      <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
        <Button variant="ghost" size="icon" onClick={() => setView('landing')} className="rounded-full w-8 h-8 md:w-10 md:h-10">
          <RotateCcw size={16} className="text-slate-400 md:w-5 md:h-5" />
        </Button>
        <div>
          <h2 className="text-xl md:text-3xl font-black text-slate-900 tracking-tight leading-none">{t("study.title")}</h2>
          <p className="text-[10px] md:text-sm text-slate-500 font-bold uppercase tracking-wider mt-1">{t("study.subtitle")}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {ALL_TOPICS.map((topic) => (
          <Card 
            key={topic.id}
            onClick={() => setSelectedTopicId(topic.id)}
            className="group cursor-pointer hover:bg-slate-50 transition-all duration-200 border-slate-100 shadow-none"
          >
            <CardHeader className="p-4 md:p-6 flex flex-row items-center gap-4 space-y-0">
              <div className="p-2.5 bg-white text-slate-400 border border-slate-100 rounded-xl shrink-0 group-hover:text-indigo-600 transition-colors">
                <Book size={18} className="md:w-6 md:h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <CardTitle className="text-sm md:text-lg font-bold text-slate-800 group-hover:text-indigo-700 transition-colors leading-tight">
                  {topic.title}
                </CardTitle>
                <CardDescription className="text-[10px] md:text-xs text-slate-400 font-medium">
                  {topic.questions ? `${topic.questions.length} ${t("common.questions")}` : t("study.title")}
                </CardDescription>
              </div>
              <ChevronRight className="text-slate-200 group-hover:text-indigo-400 transition-colors shrink-0" size={16} />
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StudyPage;
