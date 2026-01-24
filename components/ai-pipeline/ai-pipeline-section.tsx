"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { PIPELINE_STEPS } from './constants';
import { Navigation } from './navigation';
import { PipelineVisual } from './pipeline-visual';
import { StepContent } from './step-content';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

export function AiPipelineSection() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  const currentStep = PIPELINE_STEPS[currentStepIndex];

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentStepIndex((prev) => (prev + 1) % PIPELINE_STEPS.length);
  }, []);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentStepIndex((prev) => (prev - 1 + PIPELINE_STEPS.length) % PIPELINE_STEPS.length);
  }, []);

  const goToStep = (id: number) => {
    const newIndex = PIPELINE_STEPS.findIndex((s) => s.id === id);
    setDirection(newIndex > currentStepIndex ? 1 : -1);
    setCurrentStepIndex(newIndex);
    setIsPlaying(false); // Pause auto-play on interaction
  };

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      goToNext();
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [isPlaying, goToNext]);

  return (
    <section className="pt-0 pb-16 bg-white text-black selection:bg-blue-100 selection:text-blue-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Pipeline IA
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Une technologie de pointe, de l&apos;acquisition à la restitution
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 min-h-[600px]">
          
          {/* Left: Navigation (Desktop) */}
          <div className="hidden lg:flex lg:col-span-3 flex-col justify-center order-2 lg:order-1">
            <Navigation 
              currentStepId={currentStep.id} 
              onStepClick={goToStep} 
            />
          </div>

          {/* Middle: Visual Core */}
          <div className="lg:col-span-5 order-1 lg:order-2 h-[200px] lg:h-auto min-h-[200px]">
            <PipelineVisual activeStep={currentStep} direction={direction} />
          </div>

          {/* Right: Text Content */}
          <div className="lg:col-span-4 flex flex-col justify-center order-3">
             <StepContent activeStep={currentStep} direction={direction} />
             
             {/* Mobile/Tablet Controls (Bottom of text) */}
             <div className="mt-8 flex items-center gap-5">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`
                    w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 ease-out shadow-sm
                    ${isPlaying 
                      ? 'bg-white border-zinc-100 text-blue-600 hover:border-blue-200 hover:shadow-md hover:scale-105 hover:-translate-y-0.5' 
                      : 'bg-blue-600 border-blue-600 text-white hover:bg-blue-700 hover:border-blue-700 hover:shadow-blue-200 hover:shadow-lg hover:scale-105 hover:-translate-y-0.5'}
                  `}
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1"/>}
                </button>
                
                <div className="flex gap-2">
                   <button 
                    onClick={() => { setIsPlaying(false); goToPrev(); }}
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-transparent hover:bg-white hover:border-zinc-100 hover:shadow-md text-zinc-400 hover:text-black transition-all duration-300 active:scale-95 hover:-translate-y-0.5"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={() => { setIsPlaying(false); goToNext(); }}
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-transparent hover:bg-white hover:border-zinc-100 hover:shadow-md text-zinc-400 hover:text-black transition-all duration-300 active:scale-95 hover:-translate-y-0.5"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
                
                <div className="ml-auto text-xs font-medium text-zinc-300 font-mono tracking-wider">
                  {String(currentStepIndex + 1).padStart(2, '0')} / {String(PIPELINE_STEPS.length).padStart(2, '0')}
                </div>
             </div>

             {/* Auto-play Progress Bar */}
             {isPlaying && (
               <div className="w-full h-1 bg-zinc-100 mt-8 rounded-full overflow-hidden">
                 <motion.div 
                    key={currentStepIndex}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="h-full bg-blue-600"
                 />
               </div>
             )}
          </div>

        </div>
      </div>
    </section>
  );
};
