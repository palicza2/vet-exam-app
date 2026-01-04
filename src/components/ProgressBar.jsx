import React from 'react';
import { Progress } from "@/components/ui/progress"

const ProgressBar = ({ value, max, label }) => {
  const percentage = Math.round((value / max) * 100);
  
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-slate-700">{label}</span>
        <span className="text-sm font-medium text-slate-700">{percentage}%</span>
      </div>
      <Progress value={percentage} className="h-2.5" />
    </div>
  );
};

export default ProgressBar;
