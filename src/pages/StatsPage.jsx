import React, { useMemo } from 'react';
import { RotateCcw, Flame, Trophy, Target, AlertCircle } from 'lucide-react';
import { useStatsContext } from '../contexts/StatsContext';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, PieChart, Pie
} from 'recharts';

const StatsPage = ({ setView }) => {
  const { t } = useTranslation();
  const { stats, getTodayDateString } = useStatsContext();
  
  // Basic stats
  const overallRate = useMemo(() => 
    stats.totalAnswered > 0 ? (stats.totalCorrect / stats.totalAnswered) * 100 : 0
  , [stats]);

  // Topic analysis
  const topicData = useMemo(() => {
    return Object.entries(stats.byTopic).map(([topic, data]) => ({
      name: topic.length > 30 ? topic.substring(0, 27) + '...' : topic,
      fullName: topic,
      correct: data.correct,
      total: data.total,
      wrong: data.total - data.correct,
      rate: data.total > 0 ? (data.correct / data.total) * 100 : 0
    })).sort((a, b) => b.rate - a.rate);
  }, [stats]);

  const mistakesData = useMemo(() => {
    return [...topicData]
      .filter(d => d.wrong > 0)
      .sort((a, b) => b.wrong - a.wrong)
      .slice(0, 5);
  }, [topicData]);

  const weakness = useMemo(() => 
    topicData.length > 0 ? topicData[topicData.length - 1] : null
  , [topicData]);

  // Activity Processing
  const { last30Days, streak, maxDaily } = useMemo(() => {
    const dailyActivity = stats.dailyActivity || {};
    const today = new Date();
    const days = [];
    let currentStreak = 0;
    let streakBroken = false;
    let max = 0;

    for (let i = 29; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateString = date.toISOString().split('T')[0];
      const count = dailyActivity[dateString] || 0;
      
      if (count > max) max = count;
      
      days.push({
        date: dateString,
        displayDate: date.toLocaleDateString('hu-HU', { month: 'short', day: 'numeric' }),
        count: count
      });
    }

    // Calc streak
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateString = date.toISOString().split('T')[0];
      if (dailyActivity[dateString] > 0) {
        currentStreak++;
      } else if (i > 0) { // Allow 0 for today
        break;
      }
    }

    return { last30Days: days, streak: currentStreak, maxDaily: max };
  }, [stats]);

  // Exam Progress Data
  const examTrendData = useMemo(() => {
    if (!stats.examHistory || stats.examHistory.length === 0) return [];
    return stats.examHistory.slice(-10).map((exam, idx) => ({
      name: idx + 1,
      score: Math.round((exam.score / exam.total) * 100),
      date: new Date(exam.date).toLocaleDateString()
    }));
  }, [stats]);

  const bestExam = useMemo(() => {
    if (!stats.examHistory || stats.examHistory.length === 0) return null;
    return Math.max(...stats.examHistory.map(e => Math.round((e.score / e.total) * 100)));
  }, [stats]);

  const COLORS = ['#6366f1', '#f43f5e', '#22c55e', '#eab308', '#a855f7', '#ec4899'];

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10 space-y-6 md:space-y-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 md:gap-4">
          <Button variant="ghost" size="icon" onClick={() => setView('landing')} className="rounded-full w-9 h-9 md:w-12 md:h-12 hover:bg-slate-100">
            <RotateCcw size={18} className="text-slate-500 md:w-6 md:h-6" />
          </Button>
          <div>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight leading-none">{t("stats.title")}</h2>
            <p className="text-slate-500 text-xs md:text-sm font-medium mt-1 md:mt-2">Összesített teljesítmény és aktivitás</p>
          </div>
        </div>
        
        {streak > 0 && (
          <div className="flex items-center gap-2 bg-orange-50 px-3 py-1.5 md:px-5 md:py-2.5 rounded-full border border-orange-100 animate-in fade-in slide-in-from-right-4 duration-500">
            <Flame className="text-orange-500 w-4 h-4 md:w-6 md:h-6 fill-orange-500" />
            <span className="text-orange-700 font-black text-sm md:text-xl leading-none">{streak} {t("stats.days")}</span>
          </div>
        )}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        <Card className="p-4 md:p-6 border-slate-100 bg-white shadow-sm flex flex-col justify-center">
          <div className="text-slate-400 text-[10px] md:text-xs font-black uppercase tracking-widest mb-1">{t("stats.total_questions")}</div>
          <div className="text-2xl md:text-4xl font-black text-slate-800">{stats.totalAnswered}</div>
        </Card>
        
        <Card className="p-4 md:p-6 border-slate-100 bg-white shadow-sm flex flex-col justify-center">
          <div className="text-slate-400 text-[10px] md:text-xs font-black uppercase tracking-widest mb-1">{t("stats.success_rate")}</div>
          <div className={`text-2xl md:text-4xl font-black ${overallRate >= 80 ? 'text-green-500' : overallRate >= 50 ? 'text-indigo-600' : 'text-orange-500'}`}>
            {Math.round(overallRate)}%
          </div>
        </Card>

        <Card className="p-4 md:p-6 border-slate-100 bg-white shadow-sm flex flex-col justify-center">
          <div className="text-slate-400 text-[10px] md:text-xs font-black uppercase tracking-widest mb-1">{t("stats.best_exam")}</div>
          <div className="text-2xl md:text-4xl font-black text-emerald-500">{bestExam ? `${bestExam}%` : '-'}</div>
        </Card>

        <Card className="p-4 md:p-6 border-slate-100 bg-white shadow-sm flex flex-col justify-center">
          <div className="text-slate-400 text-[10px] md:text-xs font-black uppercase tracking-widest mb-1">{t("stats.average_per_day")}</div>
          <div className="text-2xl md:text-4xl font-black text-slate-800">
            {Math.round(last30Days.reduce((sum, d) => sum + d.count, 0) / 30)}
          </div>
        </Card>
      </div>

      {/* Charts Section 1: Activity & Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Daily Activity Chart */}
        <Card className="lg:col-span-2 p-4 md:p-6 border-slate-100 bg-white shadow-sm">
          <h3 className="text-sm md:text-lg font-black text-slate-800 mb-6 uppercase tracking-widest flex items-center gap-2">
            <Target className="w-4 h-4 text-indigo-500" /> {t("stats.daily_activity")}
          </h3>
          <div className="h-64 md:h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={last30Days}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="displayDate" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fontSize: 10, fill: '#94a3b8', fontWeight: 600}} 
                  interval={Math.floor(last30Days.length / 5)}
                />
                <YAxis hide />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                />
                <Bar dataKey="count" fill="#6366f1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Mistake Distribution (Pie) */}
        <Card className="p-4 md:p-6 border-slate-100 bg-white shadow-sm flex flex-col">
          <h3 className="text-sm md:text-lg font-black text-slate-800 mb-6 uppercase tracking-widest flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-500" /> {t("stats.mistake_dist")}
          </h3>
          <div className="h-64 md:h-72 w-full min-h-[256px]">
            {mistakesData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={mistakesData}
                    innerRadius={65}
                    outerRadius={85}
                    paddingAngle={5}
                    dataKey="wrong"
                  >
                    {mistakesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                  />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex items-center justify-center text-slate-300 italic text-sm">
                Nincs rögzített hiba
              </div>
            )}
          </div>
          <div className="mt-6 space-y-3">
            {mistakesData.map((d, i) => (
              <div key={i} className="flex items-start justify-between gap-3 text-xs md:text-sm">
                <div className="flex items-start gap-2 pt-1">
                  <div className="w-2.5 h-2.5 rounded-full mt-1 shrink-0" style={{backgroundColor: COLORS[i % COLORS.length]}} />
                  <span className="text-slate-600 font-bold leading-tight">{d.fullName}</span>
                </div>
                <span className="text-slate-400 font-black shrink-0">{d.wrong}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Charts Section 2: Exam Trends & Mastery */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Exam Trends */}
        <Card className="p-4 md:p-6 border-slate-100 bg-white shadow-sm">
          <h3 className="text-sm md:text-lg font-black text-slate-800 mb-6 uppercase tracking-widest flex items-center gap-2">
            <Trophy className="w-4 h-4 text-yellow-500" /> {t("stats.exam_trends")}
          </h3>
          <div className="h-64 md:h-80 w-full">
            {examTrendData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={examTrendData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" hide />
                  <YAxis domain={[0, 100]} axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} />
                  <Tooltip 
                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                    labelFormatter={(val) => `Vizsga #${val}`}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#6366f1" 
                    strokeWidth={4} 
                    dot={{fill: '#6366f1', strokeWidth: 2, r: 4}} 
                    activeDot={{r: 6, strokeWidth: 0}}
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex items-center justify-center text-slate-300 italic text-sm">
                Még nincs vizsgaeredmény
              </div>
            )}
          </div>
        </Card>

        {/* Topic Breakdown Progress */}
        <Card className="p-4 md:p-6 border-slate-100 bg-white shadow-sm overflow-hidden">
          <h3 className="text-sm md:text-lg font-black text-slate-800 mb-6 uppercase tracking-widest">{t("stats.topics_breakdown")}</h3>
          <div className="space-y-4 md:space-y-6 max-h-[320px] overflow-y-auto pr-2 custom-scrollbar">
            {topicData.length > 0 ? (
              topicData.map((item, idx) => (
                <div key={idx} className="space-y-1.5 md:space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] md:text-xs font-black text-slate-700 truncate max-w-[70%]">{item.fullName}</span>
                    <span className="text-[10px] md:text-xs font-black text-slate-400">{Math.round(item.rate)}%</span>
                  </div>
                  <div className="h-1.5 md:h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-1000 ${
                        item.rate >= 80 ? 'bg-green-500' : item.rate >= 50 ? 'bg-indigo-500' : 'bg-orange-400'
                      }`}
                      style={{ width: `${item.rate}%` }}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="py-12 text-center text-slate-300 italic text-sm">
                {t("stats.answer_questions_for_stats")}
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Exam History Table (Simplified) */}
      <Card className="p-4 md:p-6 border-slate-100 bg-white shadow-sm">
        <h3 className="text-sm md:text-lg font-black text-slate-800 mb-6 uppercase tracking-widest">{t("stats.exam_history")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {stats.examHistory && stats.examHistory.length > 0 ? (
            [...stats.examHistory].reverse().slice(0, 6).map((exam, i) => {
              const percent = Math.round((exam.score / exam.total) * 100);
              return (
                <div key={i} className="flex items-center justify-between p-3 md:p-4 bg-slate-50/50 rounded-xl border border-slate-100 hover:border-indigo-100 transition-colors">
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{new Date(exam.date).toLocaleDateString('hu-HU')}</div>
                    <div className="text-xs font-bold text-slate-600">Vizsga eredmény</div>
                  </div>
                  <div className={`text-xl md:text-2xl font-black ${percent >= 80 ? 'text-green-500' : 'text-indigo-600'}`}>
                    {percent}%
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full py-8 text-center text-slate-300 italic text-sm">{t("stats.no_exam_history")}</div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default StatsPage;
