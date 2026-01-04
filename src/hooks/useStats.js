import { useState, useEffect } from 'react';
import { subscribeToStats, updateStatsInDB, configError } from '../services/firebase';

export const useStats = (user) => {
  const [stats, setStats] = useState({
    totalAnswered: 0,
    totalCorrect: 0,
    byTopic: {}, 
    examHistory: [],
    dailyActivity: {}
  });

  useEffect(() => {
    if (!user || configError) return;
    
    const unsubscribe = subscribeToStats(user.uid, (data) => {
      setStats(data);
    });

    return () => unsubscribe();
  }, [user]);

  const getTodayDateString = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const updateStats = async (isCorrect, topic, isExam = false, examScoreVal = 0, examTotal = 0) => {
    if (!user || configError) return;
    
    const newStats = { ...stats };
    const today = getTodayDateString();
    
    if (!newStats.dailyActivity) newStats.dailyActivity = {};
    if (!newStats.dailyActivity[today]) newStats.dailyActivity[today] = 0;
    
    if (!isExam) {
       newStats.totalAnswered += 1;
       if (isCorrect) newStats.totalCorrect += 1;

       if (!newStats.byTopic[topic]) newStats.byTopic[topic] = { total: 0, correct: 0 };
       newStats.byTopic[topic].total += 1;
       if (isCorrect) newStats.byTopic[topic].correct += 1;
       
       newStats.dailyActivity[today] += 1;
    } else {
      const historyEntry = {
        date: new Date().toISOString(),
        score: examScoreVal,
        total: examTotal
      };
      newStats.examHistory = [...(newStats.examHistory || []), historyEntry];
      
      // Also update aggregate stats for exam questions
      // (This logic was missing in the original updateStats but present in submitExam)
      // For consistency with the original code, I'll keep them separate or merge them.
      // The original submitExam manually updated the stats object.
    }

    await updateStatsInDB(user.uid, newStats);
  };

  const updateBulkStats = async (newStats) => {
    if (!user || configError) return;
    await updateStatsInDB(user.uid, newStats);
  };

  return { stats, updateStats, updateBulkStats, getTodayDateString };
};
