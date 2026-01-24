"use client";

import React from 'react';
import { Eye, Activity, TrendingUp, CheckCircle2, AlertCircle, PlusCircle } from 'lucide-react';
import { PathologyData } from './types';
import { AnimatedCounter } from './animated-counter';

interface MetricCardProps {
  data: PathologyData;
  index: number;
  onClick: (data: PathologyData) => void;
}

export const MetricCard: React.FC<MetricCardProps> = ({ data, index, onClick }) => {
  return (
    <div 
      onClick={() => onClick(data)}
      className="group relative bg-white rounded-3xl p-6 md:p-8 shadow-[0_0_15px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-200 overflow-hidden cursor-pointer"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-slate-900 scale-x-100 md:scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      
      {/* Header */}
      <div className="flex justify-between items-start mb-6 md:mb-10">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {data.name}
          </h3>
          <p className="text-slate-500 text-sm mt-2 font-medium">{data.description}</p>
        </div>
        <div className="bg-slate-50 p-3 rounded-2xl group-hover:bg-blue-600 transition-colors duration-500">
          <Eye className="w-5 h-5 md:w-6 md:h-6 text-slate-900 group-hover:text-white transition-colors" />
        </div>
      </div>

      {/* Main Metric: AUC */}
      <div className="mb-8 md:mb-10 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
        <div className="flex items-center gap-2 mb-2 text-blue-600 font-semibold text-xs md:text-sm uppercase tracking-wide">
          <Activity className="w-4 h-4" />
          <span>Score Global (AUC)</span>
        </div>
        <div className="flex items-baseline gap-2">
            <AnimatedCounter 
                end={data.metrics.auc} 
                decimals={3} 
                className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight"
            />
            <span className="text-slate-400 font-medium">/ 1.000</span>
        </div>
        <div className="mt-3 text-xs font-medium text-slate-700 bg-white inline-flex items-center px-2.5 py-1 rounded-md border border-slate-200 shadow-sm">
          <TrendingUp className="w-3 h-3 mr-1.5 text-green-600" />
          Excellence Clinique
        </div>
      </div>

      {/* Secondary Metrics Grid */}
      <div className="grid grid-cols-2 gap-4 md:gap-6 pt-6 border-t border-slate-100 mb-2">
        
        {/* Sensitivity */}
        <div>
          <div className="flex items-center gap-1.5 mb-1 text-slate-500 text-xs font-bold uppercase tracking-wider">
            <AlertCircle className="w-3.5 h-3.5" />
            Sensibilité
          </div>
          <div className="text-2xl font-bold text-slate-900">
            <AnimatedCounter end={data.metrics.sensitivity} suffix="%" />
          </div>
          <div className="text-xs text-blue-600 mt-1 font-medium">
            vs {data.humanMetrics.sensitivity}% (Humain)
          </div>
        </div>

        {/* Specificity */}
        <div>
          <div className="flex items-center gap-1.5 mb-1 text-slate-500 text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Spécificité
          </div>
          <div className="text-2xl font-bold text-slate-900">
            <AnimatedCounter end={data.metrics.specificity} suffix="%" />
          </div>
          <div className="text-xs text-blue-600 mt-1 font-medium">
            vs {data.humanMetrics.specificity}% (Humain)
          </div>
        </div>

      </div>

      {/* Click Hint */}
      <div className="flex items-center justify-center gap-2 text-slate-400 text-sm font-medium group-hover:text-blue-600 transition-colors mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <PlusCircle className="w-4 h-4" />
        Voir l&apos;analyse détaillée
      </div>
    </div>
  );
};
