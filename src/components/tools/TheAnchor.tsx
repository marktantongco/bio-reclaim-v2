'use client';

import { useState } from 'react';
import { Anchor, RefreshCw, Loader2 } from 'lucide-react';
import { callGeminiFlash } from '@/lib/gemini';

export function TheAnchor() {
  const [exercise, setExercise] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  // Removed isSpeaking state (no DOM speech synthesis)

  const generateExercise = async () => {
    setIsLoading(true);
    setExercise('');


    try {
      const prompt = `Generate a short, calming "5-4-3-2-1" grounding exercise or a deep breathing visualization for someone experiencing anxiety or cravings.
      Format it as a clean, step-by-step list.
      Keep it under 100 words.
      Tone: Soothing, direct, simple.`;

      const response = await callGeminiFlash(prompt);
      if (response) {
        setExercise(response);
      }
    } catch (error) {
      console.error('Error generating anchor:', error);
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-xl flex flex-col h-full">
      <div className="p-6 border-b border-slate-800 bg-slate-950 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-amber-900/30 flex items-center justify-center border border-amber-500/30">
            <Anchor className="w-5 h-5 text-amber-500" />
          </div>
          <div>
            <h3 className="font-outfit font-bold text-white">The Anchor</h3>
            <p className="text-xs text-amber-500 font-mono hidden sm:block">GROUNDING EXERCISES</p>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 flex flex-col justify-center items-center text-center space-y-6">
        {!exercise && !isLoading && (
          <div className="text-slate-500">
            <Anchor className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p>Feeling overwhelmed? Generate a quick grounding exercise to center yourself.</p>
          </div>
        )}

        {isLoading && (
          <div className="flex flex-col items-center space-y-3">
            <Loader2 className="w-8 h-8 text-amber-500 animate-spin" />
            <span className="text-slate-400 text-sm animate-pulse">Finding your center...</span>
          </div>
        )}

        {exercise && (
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 w-full animate-in fade-in duration-500">
            <div className="prose prose-invert prose-sm max-w-none text-left">
               <p className="whitespace-pre-line text-slate-300 leading-relaxed font-medium">
                 {exercise}
               </p>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-between items-center gap-4">


        <button
          onClick={generateExercise}
          disabled={isLoading}
          className={`p-3 rounded-xl flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all ${!exercise ? 'col-span-2' : ''}`}
        >
          <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          <span className="text-sm font-bold">{exercise ? 'New Exercise' : 'Start Grounding'}</span>
        </button>
      </div>
    </div>
  );
}
