"use client";

import React from 'react';
import { X, FileText, CheckCircle2, AlertCircle, Activity } from 'lucide-react';
import { PathologyData } from './types';

interface PathologyModalProps {
  data: PathologyData;
  onClose: () => void;
}

export const PathologyModal: React.FC<PathologyModalProps> = ({ data, onClose }) => {
  // Close on Escape key
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-enter visible flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-slate-50 p-6 md:p-8 border-b border-slate-100 flex justify-between items-start shrink-0">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{data.name}</h2>
            <p className="text-slate-500 mt-2 font-medium">{data.description}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-white hover:bg-slate-200 transition-colors border border-slate-200 text-slate-500 hover:text-slate-900"
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Scrollable Content */}
        <div className="p-6 md:p-8 space-y-8 overflow-y-auto">
          {/* Analysis Text */}
          <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
            <div className="flex items-center gap-2 text-blue-700 font-bold text-sm uppercase tracking-wide mb-3">
              <FileText className="w-4 h-4" />
              Rapport d&apos;analyse IA
            </div>
            <p className="text-slate-700 leading-relaxed text-lg">
              {data.detailedAnalysis}
            </p>
          </div>

          {/* Deep Metrics Grid */}
          <div>
             <h3 className="text-slate-900 font-bold mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-600" />
                Performance sur dataset de test
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="text-slate-500 text-xs font-bold uppercase mb-2">AUC (Global)</div>
                    <div className="text-3xl font-bold text-slate-900">{data.metrics.auc}</div>
                    <div className="text-xs text-slate-400 mt-1">Score de discrimination</div>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                    <div className="text-slate-500 text-xs font-bold uppercase mb-2 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        Sensibilité
                    </div>
                    <div className="text-3xl font-bold text-blue-700">{data.metrics.sensitivity}%</div>
                    <div className="text-xs text-blue-600/70 mt-1">Taux de détection</div>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="text-slate-500 text-xs font-bold uppercase mb-2 flex items-center gap-1">
                         <CheckCircle2 className="w-3 h-3" />
                         Spécificité
                    </div>
                    <div className="text-3xl font-bold text-slate-900">{data.metrics.specificity}%</div>
                    <div className="text-xs text-slate-400 mt-1">Précision des sains</div>
                </div>
            </div>
          </div>
        </div>
        
        {/* Footer CTA */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 text-center shrink-0">
          <button 
            onClick={onClose}
            className="w-full md:w-auto px-6 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-semibold hover:bg-slate-100 transition-colors shadow-sm"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
