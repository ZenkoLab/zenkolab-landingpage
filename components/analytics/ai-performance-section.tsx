"use client";

import React, { useState } from 'react';
import { Activity, ArrowRight, Brain, Eye, ShieldCheck, Mail, Zap } from 'lucide-react';
import { PATHOLOGIES, DEFINITIONS } from './constants';
import { PathologyData } from './types';
import { MetricCard } from './metric-card';
import { ComparisonChart } from './comparison-chart';
import { PathologyModal } from './pathology-modal';

export const AiPerformanceSection = () => {
  const [selectedPathology, setSelectedPathology] = useState<PathologyData | null>(null);

  const handleCardClick = (pathology: PathologyData) => {
    setSelectedPathology(pathology);
  };

  return (
    <div className="bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 py-10 rounded-3xl mt-10 mb-0">
      
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header (Adapted from Hero) */}
        <div className="mb-16 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1] break-words hyphens-auto">
              Des performances <br className="hidden md:block" />
              <span className="text-blue-600">validées cliniquement</span>.
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mb-8">
              Notre algorithme a été entraîné et évalué sur des jeux de données de référence en ophtalmologie. Voici les résultats obtenus lors de nos validations internes.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('metrics')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                Voir les résultats
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              
              <button 
                onClick={() => document.getElementById('glossary')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-all hover:border-slate-300"
              >
                Comprendre l&apos;IA
              </button>
            </div>
        </div>

        {/* Metrics Grid */}
        <section id="metrics" className="mb-20 scroll-mt-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Résultats par Pathologie</h3>
              <p className="text-slate-500 text-lg">Performances mesurées sur des datasets de validation. Cliquez sur une carte pour en savoir plus.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PATHOLOGIES.map((pathology, index) => (
              <MetricCard 
                key={pathology.id} 
                data={pathology} 
                index={index}
                onClick={handleCardClick}
              />
            ))}
          </div>
        </section>

        {/* Comparison Section */}
        <section id="comparison" className="mb-0 scroll-mt-28">
          <div className="bg-slate-900 rounded-3xl p-5 md:p-12 overflow-hidden shadow-2xl relative text-white">
             {/* Background decorative blob */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Un second regard, pas un remplacement
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  ZenkoLab aide à repérer ce qui pourrait passer inaperçu. La décision finale reste toujours entre les mains du médecin.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg text-white shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">Filet de sécurité</h4>
                      <p className="text-sm text-slate-400 mt-1">Haute sensibilité pour minimiser le risque de passer à côté d&apos;un cas pathologique.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg text-slate-900 shrink-0">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">Résultat en quelques secondes</h4>
                      <p className="text-sm text-slate-400 mt-1">Le pré-diagnostic s&apos;affiche avant même que le patient ait quitté le cabinet.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 md:p-8 rounded-3xl shadow-2xl shadow-black/30 h-full flex flex-col justify-center">
                <ComparisonChart />
              </div>
            </div>
          </div>
        </section>



      </div>
      
      {/* Modal */}
      {selectedPathology && (
        <PathologyModal 
            data={selectedPathology} 
            onClose={() => setSelectedPathology(null)} 
        />
      )}
    </div>
  );
};
