"use client";

import React from 'react';
import { MetricDefinition } from './types';
import { Target, ShieldCheck, Award } from 'lucide-react';

interface GlossaryProps {
  definition: MetricDefinition;
  index: number;
}

export const Glossary: React.FC<GlossaryProps> = ({ definition, index }) => {
  
  const getIcon = (idx: number) => {
    switch(idx) {
        case 0: return <Target className="w-6 h-6 text-white" />; // Sensitivity
        case 1: return <ShieldCheck className="w-6 h-6 text-white" />; // Specificity
        case 2: return <Award className="w-6 h-6 text-white" />; // AUC
        default: return <Target className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div className="h-full bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-900/20">
            {getIcon(index)}
        </div>
        <h3 className="text-xl font-bold text-slate-900">{definition.term}</h3>
      </div>

      {/* Simple Definition */}
      <div className="mb-6 flex-grow">
        <p className="text-lg font-medium text-blue-600 leading-snug">
          &quot;{definition.simpleDefinition}&quot;
        </p>
      </div>

      {/* Technical Definition */}
      <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mt-auto">
        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">
            Technique
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          {definition.technicalDefinition}
        </p>
      </div>
    </div>
  );
};
