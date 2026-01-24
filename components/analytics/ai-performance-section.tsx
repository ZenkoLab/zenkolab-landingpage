"use client";

import React, { useState } from 'react';
import { Activity, ArrowRight, Brain, Eye, ShieldCheck, Mail, Zap } from 'lucide-react';
import { PATHOLOGIES, DEFINITIONS } from './constants';
import { PathologyData } from './types';
import { MetricCard } from './metric-card';
import { ComparisonChart } from './comparison-chart';
import { PathologyModal } from './pathology-modal';
import { motion } from 'framer-motion';

export const AiPerformanceSection = () => {
  const [selectedPathology, setSelectedPathology] = useState<PathologyData | null>(null);

  const handleCardClick = (pathology: PathologyData) => {
    setSelectedPathology(pathology);
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:text-left"
        >
          <span className="inline-block text-sm font-medium text-brand mb-3">
            Performances
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Des performances <span className="text-gradient">validées cliniquement</span>.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
            Notre algorithme a été entraîné et évalué sur des jeux de données de référence en ophtalmologie. Voici les résultats obtenus lors de nos validations internes.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button 
              onClick={() => document.getElementById('metrics')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-brand-foreground bg-brand hover:bg-brand/90 rounded-full transition-all shadow-lg shadow-brand/25 hover:shadow-brand/40"
            >
              Voir les résultats
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            
            <button 
              onClick={() => document.getElementById('glossary')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-foreground bg-background border border-border hover:bg-muted rounded-full transition-all"
            >
              Comprendre l&apos;IA
            </button>
          </div>
        </motion.div>

        {/* Metrics Grid */}
        <section id="metrics" className="mb-16 md:mb-24 scroll-mt-28">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Résultats par Pathologie</h3>
              <p className="text-muted-foreground text-base">Performances mesurées sur des datasets de validation. Cliquez sur une carte pour en savoir plus.</p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="comparison" 
          className="scroll-mt-28"
        >
          <div className="bg-foreground dark:bg-muted rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 overflow-hidden shadow-2xl relative">
             {/* Background decorative blob */}
            <div className="absolute top-0 right-0 w-72 md:w-[500px] h-72 md:h-[500px] bg-brand/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-background dark:text-foreground">
                  Un second regard, pas un remplacement
                </h3>
                <p className="text-background/70 dark:text-muted-foreground text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                  ZenkoLab aide à repérer ce qui pourrait passer inaperçu. La décision finale reste toujours entre les mains du médecin.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-brand rounded-xl flex items-center justify-center shadow-lg text-brand-foreground shrink-0">
                      <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-background dark:text-foreground text-base md:text-lg">Filet de sécurité</h4>
                      <p className="text-sm text-background/60 dark:text-muted-foreground mt-1">Haute sensibilité pour minimiser le risque de passer à côté d&apos;un cas pathologique.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-background dark:bg-foreground rounded-xl flex items-center justify-center shadow-lg text-foreground dark:text-background shrink-0">
                      <Zap className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-background dark:text-foreground text-base md:text-lg">Résultat en quelques secondes</h4>
                      <p className="text-sm text-background/60 dark:text-muted-foreground mt-1">Le pré-diagnostic s&apos;affiche avant même que le patient ait quitté le cabinet.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background dark:bg-card p-4 md:p-6 lg:p-8 rounded-2xl shadow-2xl h-full flex flex-col justify-center">
                <ComparisonChart />
              </div>
            </div>
          </div>
        </motion.section>

      </div>
      
      {/* Modal */}
      {selectedPathology && (
        <PathologyModal 
            data={selectedPathology} 
            onClose={() => setSelectedPathology(null)} 
        />
      )}
    </section>
  );
};
