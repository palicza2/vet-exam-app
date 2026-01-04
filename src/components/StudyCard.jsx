import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { getIcon } from '../utils/iconMapper';
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const StudyCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(true);

  const renderText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold text-slate-800">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <Card className={cn("mb-3 md:mb-6 border-slate-100 shadow-none overflow-hidden bg-white transition-all", data.color)}>
      <Button 
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 md:p-6 h-auto hover:bg-slate-50 transition-colors rounded-none border-b border-slate-50"
      >
        <div className="flex items-center gap-3 md:gap-4">
          <div className="p-1.5 md:p-2.5 bg-white rounded-lg shadow-sm border border-slate-100">
            {getIcon(data.icon, { size: 16, className: cn("md:w-6 md:h-6", data.iconColor) })}
          </div>
          <h3 className="text-sm md:text-xl font-bold text-slate-800 text-left leading-tight">{data.title}</h3>
        </div>
        <div className="text-slate-300 ml-2">
          {isOpen ? <ChevronUp size={16} className="md:w-6 md:h-6" /> : <ChevronDown size={16} className="md:w-6 md:h-6" />}
        </div>
      </Button>

      {isOpen && (
        <CardContent className="p-3 md:p-6 space-y-3 md:space-y-6 bg-slate-50/30">
          {data.sections.map((section, idx) => (
            <div key={idx} className="bg-white rounded-lg md:rounded-xl p-3 md:p-6 shadow-sm border border-slate-100/50">
              <h4 className="text-xs md:text-base font-black text-slate-900 mb-2 md:mb-4 border-b border-slate-50 pb-2 flex items-center gap-2">
                <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-indigo-500"></div>
                {section.header}
              </h4>
              <ul className="space-y-2 md:space-y-4">
                {section.points.map((point, pIdx) => (
                  <li key={pIdx} className="text-xs md:text-[15px] text-slate-600 leading-relaxed flex items-start gap-2 md:gap-3">
                    <div className="mt-1.5 min-w-[3px] h-[3px] rounded-full bg-slate-300 shrink-0" />
                    <span>{renderText(point)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      )}
    </Card>
  );
};

export default StudyCard;
