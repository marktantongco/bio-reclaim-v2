'use client';

import { useState } from 'react';
import { Moon, Sunrise, Coffee, CloudMoon, Clock, RefreshCw, Loader2, Sparkles } from 'lucide-react';
import { callGeminiFlash } from '@/lib/gemini';
import { marked } from 'marked';

interface SleepState {
  quality: number;
  chronotype: string;
  struggle: string;
  caffeine: string;
}

export function SleepRepair() {
  const [state, setState] = useState<SleepState>({
    quality: 5,
    chronotype: 'Variable',
    struggle: 'Falling Asleep',
    caffeine: 'Morning Only'
  });
  const [generatedPlan, setGeneratedPlan] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const chronotypes = ['Early Bird', 'Night Owl', 'Variable'];
  const struggles = ['Falling Asleep', 'Staying Asleep', 'Waking Up', 'Nightmares', 'Inconsistent Schedule'];
  const caffeineHabits = ['None', 'Morning Only', 'Until Afternoon', 'Throughout Day'];

  const handleGeneratePlan = async () => {
    setIsLoading(true);
    setGeneratedPlan('');

    try {
      const prompt = `Generate a customized Circadian Repair Protocol (Sleep Hygiene Plan) for someone in recovery.

      User Profile:
      - Current Sleep Quality: ${state.quality}/10
      - Chronotype: ${state.chronotype}
      - Main Struggle: ${state.struggle}
      - Caffeine Intake: ${state.caffeine}

      Please provide a structured plan with these specific sections:
      1. ### Evening Wind-Down Routine
      (Specific actions for the hour before bed, tailored to their struggle)
      2. ### Morning Light Protocol
      (How to use light to anchor circadian rhythm upon waking)
      3. ### Caffeine & Environment Rules
      (Specific cutoff times and bedroom optimization tips)

      Tone: Scientific but accessible, empathetic to recovery context (sleep is often disrupted in early recovery).
      Format: Clear Markdown with bullet points and bold text for key times/actions.`;

      const response = await callGeminiFlash(prompt);
      if (response) {
        setGeneratedPlan(response);
      }
    } catch (error) {
      console.error('Sleep plan generation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Input Section */}
      <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-indigo-950/50 flex items-center justify-center border border-indigo-500/30">
            <Moon className="w-6 h-6 text-indigo-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Sleep Repair</h2>
            <p className="text-slate-400">Circadian rhythm tools for deep restorative rest.</p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Sleep Quality Slider */}
          <div className="space-y-4">
             <label className="flex justify-between text-sm font-medium text-slate-300">
              <div className="flex items-center space-x-2">
                 <CloudMoon className="w-4 h-4 text-indigo-400" />
                 <span>Current Sleep Quality</span>
              </div>
              <span className="font-bold text-indigo-400">{state.quality}/10</span>
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={state.quality}
              onChange={(e) => setState({ ...state, quality: parseInt(e.target.value) })}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
             <div className="flex justify-between text-xs text-slate-500 font-mono">
              <span>Insomnia</span>
              <span>Restful</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Chronotype */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-slate-300 flex items-center space-x-2">
                <Sunrise className="w-4 h-4 text-amber-500" />
                <span>Chronotype</span>
              </label>
              <select
                value={state.chronotype}
                onChange={(e) => setState({ ...state, chronotype: e.target.value })}
                className="w-full bg-slate-800 border-slate-700 text-white rounded-xl p-3 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all"
              >
                {chronotypes.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            {/* Main Struggle */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-slate-300 flex items-center space-x-2">
                <Clock className="w-4 h-4 text-rose-400" />
                <span>Main Struggle</span>
              </label>
              <select
                value={state.struggle}
                onChange={(e) => setState({ ...state, struggle: e.target.value })}
                className="w-full bg-slate-800 border-slate-700 text-white rounded-xl p-3 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all"
              >
                {struggles.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            {/* Caffeine */}
             <div className="space-y-3">
              <label className="text-sm font-medium text-slate-300 flex items-center space-x-2">
                <Coffee className="w-4 h-4 text-amber-700" />
                <span>Caffeine</span>
              </label>
              <select
                value={state.caffeine}
                onChange={(e) => setState({ ...state, caffeine: e.target.value })}
                className="w-full bg-slate-800 border-slate-700 text-white rounded-xl p-3 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all"
              >
                {caffeineHabits.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={handleGeneratePlan}
            disabled={isLoading}
            className="w-full p-4 rounded-xl bg-gradient-to-r from-indigo-900 to-violet-800 text-white font-bold text-lg shadow-lg shadow-indigo-900/30 hover:shadow-indigo-900/50 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 border border-indigo-500/30"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Analyzing Sleep Architecture...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Generate Sleep Protocol</span>
              </>
            )}
          </button>
        </div>
      </div>

       {/* Results Section */}
       {generatedPlan && (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
           <div className="bg-slate-900/80 p-8 rounded-3xl border border-indigo-900/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                 <Moon className="w-64 h-64" />
              </div>
              <div className="prose prose-invert prose-lg max-w-none prose-headings:text-indigo-300 prose-p:text-slate-300 prose-li:text-slate-300 relative z-10">
                 <div dangerouslySetInnerHTML={{ __html: marked.parse(generatedPlan) as string }} />
              </div>
           </div>
        </div>
      )}
    </div>
  );
}
