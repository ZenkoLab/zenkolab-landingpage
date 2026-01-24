"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Stethoscope, 
  Server, 
  BrainCircuit, 
  Siren, 
  ShieldCheck, 
  PlayCircle, 
  RotateCcw,
  Activity
} from 'lucide-react';
import { PipelineStage } from './types';
import { AnimatedIcon } from './icon-wrappers';
import { PipelineCard } from './pipeline-card';
import { ConnectingLine } from './connecting-line';

export function HomePipeline() {
  const [stage, setStage] = useState<PipelineStage>(PipelineStage.IDLE);
  const [isHighRisk, setIsHighRisk] = useState<boolean>(true);
  const [autoPlay, setAutoPlay] = useState<boolean>(false);

  // Define the strict order of stages
  const stagesOrder = [
    PipelineStage.CENTER_VISIT,
    PipelineStage.MEASUREMENTS,
    PipelineStage.DATA_TRANSFER,
    PipelineStage.AI_ANALYSIS,
    PipelineStage.RISK_ALERT,
    PipelineStage.CARE_TAKEN
  ];

  const getStageDuration = (s: PipelineStage) => {
    return s === PipelineStage.AI_ANALYSIS ? 3000 : 2000;
  };

  const advanceStage = useCallback(() => {
    setStage((current) => {
      const currentIndex = stagesOrder.indexOf(current);
      if (currentIndex === -1) return stagesOrder[0];
      if (currentIndex === stagesOrder.length - 1) return PipelineStage.COMPLETE;
      
      // Logic branch: If not high risk, skip alert/care specific to risk and go to complete (or healthy state)
      // For this demo, we focus on the "High Risk" path as requested in prompt.
      if (!isHighRisk && current === PipelineStage.AI_ANALYSIS) {
         return PipelineStage.COMPLETE; 
      }

      return stagesOrder[currentIndex + 1];
    });
  }, [isHighRisk, stagesOrder]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (autoPlay && stage !== PipelineStage.COMPLETE && stage !== PipelineStage.IDLE) {
      // Timing for each step
      const duration = getStageDuration(stage); 
      timer = setTimeout(advanceStage, duration);
    } else if (autoPlay && stage === PipelineStage.COMPLETE) {
      setAutoPlay(false);
    }
    return () => clearTimeout(timer);
  }, [stage, autoPlay, advanceStage]);

  const startSimulation = () => {
    setStage(PipelineStage.CENTER_VISIT);
    setAutoPlay(true);
  };

  const resetSimulation = () => {
    setStage(PipelineStage.IDLE);
    setAutoPlay(false);
  };

  const handleScenarioChange = (riskScenario: boolean) => {
    if (isHighRisk !== riskScenario) {
        setIsHighRisk(riskScenario);
        resetSimulation();
    }
  };

  const isStageActive = (s: PipelineStage) => stage === s;
  const isStageCompleted = (s: PipelineStage) => {
    if (stage === PipelineStage.COMPLETE) return true;
    const currentIndex = stagesOrder.indexOf(stage);
    const targetIndex = stagesOrder.indexOf(s);
    return currentIndex > targetIndex;
  };

  return (
    <section className="py-20 md:py-28 bg-background text-foreground px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <span className="inline-block text-sm font-medium text-brand mb-3">
            Processus
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
            Le Parcours de Soin <span className="text-gradient">Simplifié</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            De la prise de mesures au compte-rendu : comment ZenkoLab s&apos;intègre à votre cabinet.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-2 mb-12"
        >
          <div className="bg-muted p-1.5 rounded-full inline-flex">
            <button
              onClick={() => handleScenarioChange(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                isHighRisk 
                  ? 'bg-foreground text-background shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Scénario : Risque Élevé
            </button>
            <button
              onClick={() => handleScenarioChange(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                !isHighRisk 
                  ? 'bg-brand text-brand-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Scénario : Patient Sain
            </button>
          </div>
        </motion.div>

        {/* Main Pipeline Container */}
        <div className="w-fit mx-auto relative pl-4 md:pl-0">
          
          {/* 1. Center Visit */}
          <div className="relative flex items-start pb-12">
            <ConnectingLine 
              isActive={isStageActive(PipelineStage.CENTER_VISIT)} 
              isCompleted={isStageCompleted(PipelineStage.CENTER_VISIT)} 
              duration={getStageDuration(PipelineStage.CENTER_VISIT)}
            />
            <AnimatedIcon 
              icon={MapPin} 
              isActive={isStageActive(PipelineStage.CENTER_VISIT)} 
              isCompleted={isStageCompleted(PipelineStage.CENTER_VISIT)}
            />
            <PipelineCard
              title="Centre de Mesure"
              description="Le patient se rend chez l'orthoptiste ou dans un centre partenaire pour un bilan visuel."
              tags={['Orthoptiste', 'Opticien', 'MSP']}
              isActive={isStageActive(PipelineStage.CENTER_VISIT)}
              isCompleted={isStageCompleted(PipelineStage.CENTER_VISIT)}
            />
          </div>

          {/* 2. Measurements */}
          <div className="relative flex items-start pb-12">
            <ConnectingLine 
              isActive={isStageActive(PipelineStage.MEASUREMENTS)} 
              isCompleted={isStageCompleted(PipelineStage.MEASUREMENTS)} 
              duration={getStageDuration(PipelineStage.MEASUREMENTS)}
            />
            <AnimatedIcon 
              icon={Stethoscope} 
              isActive={isStageActive(PipelineStage.MEASUREMENTS)} 
              isCompleted={isStageCompleted(PipelineStage.MEASUREMENTS)}
            />
            <PipelineCard
              title="Prise de Mesures"
              description="L'orthoptiste réalise les examens : fond d'œil, OCT, réfraction, tonométrie."
              tags={['Rétinographie', 'OCT', 'Tonométrie']}
              isActive={isStageActive(PipelineStage.MEASUREMENTS)}
              isCompleted={isStageCompleted(PipelineStage.MEASUREMENTS)}
            />
          </div>

          {/* 3. Secure Transfer */}
          <div className="relative flex items-start pb-12">
            <ConnectingLine 
              isActive={isStageActive(PipelineStage.DATA_TRANSFER)} 
              isCompleted={isStageCompleted(PipelineStage.DATA_TRANSFER)} 
              duration={getStageDuration(PipelineStage.DATA_TRANSFER)}
            />
            <AnimatedIcon 
              icon={Server} 
              isActive={isStageActive(PipelineStage.DATA_TRANSFER)} 
              isCompleted={isStageCompleted(PipelineStage.DATA_TRANSFER)}
            />
            <PipelineCard
              title="Envoi Sécurisé"
              description="Les images sont transmises de façon chiffrée vers les serveurs ZenkoLab hébergés en France."
              tags={['HDS', 'RGPD', 'Chiffré']}
              isActive={isStageActive(PipelineStage.DATA_TRANSFER)}
              isCompleted={isStageCompleted(PipelineStage.DATA_TRANSFER)}
            />
          </div>

          {/* 4. AI Analysis */}
          <div className="relative flex items-start pb-12">
            <ConnectingLine 
              isActive={isStageActive(PipelineStage.AI_ANALYSIS)} 
              isCompleted={isStageCompleted(PipelineStage.AI_ANALYSIS)} 
              duration={getStageDuration(PipelineStage.AI_ANALYSIS)}
            />
            <AnimatedIcon 
              icon={BrainCircuit} 
              isActive={isStageActive(PipelineStage.AI_ANALYSIS)} 
              isCompleted={isStageCompleted(PipelineStage.AI_ANALYSIS)}
              color="text-brand"
            />
            <PipelineCard
              title="Analyse ZenkoLab"
              description="Le logiciel examine les images et identifie les signes évocateurs de pathologie rétinienne."
              tags={['DMLA', 'Rétinopathie', 'Glaucome']}
              isActive={isStageActive(PipelineStage.AI_ANALYSIS)}
              isCompleted={isStageCompleted(PipelineStage.AI_ANALYSIS)}
            />
          </div>

          {/* 5. Outcome (Risk or Healthy) */}
          <AnimatePresence mode="wait">
              {isHighRisk ? (
                  <motion.div
                      key="risk-outcome"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                  >
                      <div className="relative flex items-start pb-12">
                      <ConnectingLine 
                          isActive={isStageActive(PipelineStage.RISK_ALERT)} 
                          isCompleted={isStageCompleted(PipelineStage.RISK_ALERT)} 
                          duration={getStageDuration(PipelineStage.RISK_ALERT)}
                      />
                      <AnimatedIcon 
                          icon={Siren} 
                          isActive={isStageActive(PipelineStage.RISK_ALERT)} 
                          isCompleted={isStageCompleted(PipelineStage.RISK_ALERT)}
                          isAlert={true}
                          color="text-red-500"
                      />
                      <PipelineCard
                          title="Anomalie Détectée"
                          description="Le dossier est signalé comme prioritaire. L'ophtalmologiste est notifié pour validation."
                          tags={['Prioritaire', 'À valider']}
                          isActive={isStageActive(PipelineStage.RISK_ALERT)}
                          isCompleted={isStageCompleted(PipelineStage.RISK_ALERT)}
                          isAlert={true}
                      />
                      </div>

                      <div className="relative flex items-start">
                      <AnimatedIcon 
                          icon={Activity} 
                          isActive={isStageActive(PipelineStage.CARE_TAKEN)} 
                          isCompleted={isStageCompleted(PipelineStage.CARE_TAKEN)}
                          color="text-foreground"
                      />
                      <PipelineCard
                          title="Prise en Charge"
                          description="Le patient est rapidement orienté vers une consultation spécialisée."
                          tags={['RDV accéléré', 'Suivi']}
                          isActive={isStageActive(PipelineStage.CARE_TAKEN)}
                          isCompleted={isStageCompleted(PipelineStage.CARE_TAKEN)}
                      />
                      </div>
                  </motion.div>
              ) : (
                  <motion.div
                      key="healthy-outcome"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                  >
                      <div className="relative flex items-start">
                          <AnimatedIcon 
                              icon={ShieldCheck} 
                              isActive={stage === PipelineStage.COMPLETE} 
                              isCompleted={stage === PipelineStage.COMPLETE}
                              color="text-green-600"
                          />
                          <PipelineCard
                              title="Bilan Normal"
                              description="Pas d'anomalie détectée. Le patient poursuit son suivi habituel."
                              tags={['R.A.S.', 'Suivi annuel']}
                              isActive={stage === PipelineStage.COMPLETE}
                              isCompleted={stage === PipelineStage.COMPLETE}
                          />
                      </div>
                  </motion.div>
              )}
          </AnimatePresence>

        </div>

        {/* Floating Action Button */}
        <AnimatePresence>
          {(stage === PipelineStage.IDLE || stage === PipelineStage.COMPLETE) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-12 flex justify-center"
            >
              <button
                onClick={startSimulation}
                className="flex items-center gap-3 bg-brand hover:bg-brand/90 text-brand-foreground px-8 py-4 rounded-full shadow-lg shadow-brand/25 hover:shadow-xl hover:shadow-brand/30 transition-all font-semibold text-lg"
              >
                <PlayCircle size={24} />
                Lancer la Simulation
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
