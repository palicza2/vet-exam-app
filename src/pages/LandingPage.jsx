import React from 'react';
import { Brain, LogOut, Book, CheckCircle, Activity, PieChart } from 'lucide-react';
import { useAuthContext } from '../contexts/AuthContext';
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useTranslation } from 'react-i18next';

const LandingPage = ({ setView, setSelectedTopicId, initiateSelection }) => {
  const { t } = useTranslation();
  const { handleSignOut } = useAuthContext();
  
  const menuItems = [
    {
      title: t("landing.study_title"),
      description: t("landing.study_desc"),
      icon: Book,
      color: "bg-blue-50 text-blue-600",
      action: () => { setView('study'); setSelectedTopicId(null); }
    },
    {
      title: t("landing.practice_title"),
      description: t("landing.practice_desc"),
      icon: CheckCircle,
      color: "bg-green-50 text-green-600",
      action: () => initiateSelection('practice')
    },
    {
      title: t("landing.exam_title"),
      description: t("landing.exam_desc"),
      icon: Activity,
      color: "bg-purple-50 text-purple-600",
      action: () => initiateSelection('exam')
    },
    {
      title: t("landing.stats_title"),
      description: t("landing.stats_desc"),
      icon: PieChart,
      color: "bg-orange-50 text-orange-600",
      action: () => setView('stats')
    }
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 md:py-12">
      <div className="flex justify-end mb-4 md:mb-8">
         <Button variant="ghost" size="sm" onClick={handleSignOut} className="text-slate-400 hover:text-red-500 text-xs">
           <LogOut className="mr-1.5" size={14} /> {t("common.sign_out")}
         </Button>
      </div>

      <div className="text-center mb-8 md:mb-16">
        <div className="bg-indigo-600 w-14 h-14 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-8 text-white shadow-lg animate-in zoom-in duration-500">
          <Brain size={28} className="md:w-10 md:h-10" />
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">{t("common.app_name")}</h1>
        <p className="text-sm md:text-lg text-slate-500 max-w-md mx-auto leading-relaxed">
          {t("landing.tagline")}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 md:gap-6">
        {menuItems.map((item, idx) => (
          <Card 
            key={idx}
            className="group cursor-pointer hover:bg-slate-50 transition-all border-slate-100 shadow-none hover:shadow-sm"
            onClick={item.action}
          >
            <CardHeader className="p-4 md:p-6 flex flex-row items-center gap-4 space-y-0">
              <div className={`p-3 rounded-xl ${item.color} shrink-0`}>
                <item.icon size={20} className="md:w-7 md:h-7" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-base md:text-xl font-bold text-slate-800">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-xs md:text-sm line-clamp-1 mt-0.5">
                  {item.description}
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      <footer className="mt-12 md:mt-20 text-center text-slate-300 text-[10px] md:text-xs">
        <p>&copy; 2026 {t("common.app_name")}</p>
      </footer>
    </div>
  );
};

export default LandingPage;
