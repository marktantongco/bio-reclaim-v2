'use client';

import { useState } from 'react';
import { Calendar, RefreshCw, Loader2, Battery, Target, Clock, CheckCircle2 } from 'lucide-react';
import { callGeminiFlash } from '@/lib/gemini';
import { marked } from 'marked';

interface PlanState {
  energy: number;
  focus: string;
  time: string;
}

export function PlanGenerator() {
  const [state, setState] = useState<PlanState>({
    energy: 5,
    focus: 'Managing Cravings',
    time: 'Medium (1-2 hours)',
  });
  const [generatedPlan, setGeneratedPlan] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const focusOptions = [
    'Managing Cravings',
    'Productivity & Work',
    'Rest & Restoration',
    'Social Connection',
    'Physical Health',
    'Emotional Processing'
  ];

  const timeOptions = [
    'Short (< 30 mins)',
    'Medium (1-2 hours)',
    'Long (Half Day)',
    'Full Day'
  ];

  const handleGenerateValues = async () => {
    setIsLoading(true);
    setGeneratedPlan('');

    try {
      const prompt = `Generate a realistic, recovery-focused daily plan/protocol for someone with:
      - Energy Level: ${state.energy}/10
      - Primary Focus: ${state.focus}
      - Available Time: ${state.time}

      Structure the output with clear sections (e.g., Immediate Action, Morning, Afternoon, Evening - adjust based on available time).
      Include specific, actionable micro-steps.
      Tone: Encouraging, non-judgmental, purely actionable.
      Format: Clean Markdown with bullet points.`;

      const response = await callGeminiFlash(prompt);
      if (response) {
        setGeneratedPlan(response);
      }
    } catch (error) {
      console.error('Plan generation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Input Section */}
      <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-violet-900/30 flex items-center justify-center border border-violet-500/30">
            <Calendar className="w-6 h-6 text-violet-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Daily Protocol Generator</h2>
            <p className="text-slate-400">AI-crafted structure for your recovery journey.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Energy Slider */}
          <div className="space-y-4">
            <label className="flex items-center space-x-2 text-sm font-medium text-slate-300">
              <Battery className="w-4 h-4 text-cyan-400" />
              <span>Current Energy Level: <span className="text-cyan-400 font-bold">{state.energy}/10</span></span>
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={state.energy}
              onChange={(e) => setState({ ...state, energy: parseInt(e.target.value) })}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
            <div className="flex justify-between text-xs text-slate-500 font-mono">
              <span>Depleted</span>
              <span>Balanced</span>
              <span>Energized</span>
            </div>
          </div>

          {/* Focus Selection */}
          <div className="space-y-4">
            <label className="flex items-center space-x-2 text-sm font-medium text-slate-300">
              <Target className="w-4 h-4 text-violet-400" />
              <span>Today's Focus</span>
            </label>
            <select
              value={state.focus}
              onChange={(e) => setState({ ...state, focus: e.target.value })}
              className="w-full bg-slate-800 border-slate-700 text-white rounded-xl p-3 focus:ring-2 focus:ring-violet-500/50 outline-none transition-all"
            >
              {focusOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          {/* Time Selection */}
          <div className="space-y-4 md:col-span-2">
             <label className="flex items-center space-x-2 text-sm font-medium text-slate-300">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Available Time</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {timeOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setState({ ...state, time: opt })}
                  className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                    state.time === opt
                      ? 'bg-amber-950/30 border-amber-500 text-amber-400 shadow-neon-amber'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600 hover:text-white'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={handleGenerateValues}
          disabled={isLoading}
          className="mt-8 w-full p-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-lg shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Crafting Your Plan...</span>
            </>
          ) : (
            <>
              <RefreshCw className="w-5 h-5" />
              <span>Generate Protocol</span>
            </>
          )}
        </button>
      </div>

      {/* Results Section */}
      {generatedPlan && (
        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center space-x-3 mb-6 border-b border-slate-800 pb-4">
             <CheckCircle2 className="w-6 h-6 text-emerald-400" />
             <h3 className="text-xl font-bold text-white">Your Personalized Plan</h3>
          </div>

          <div
            className="prose prose-invert prose-lg max-w-none prose-headings:text-violet-300 prose-strong:text-cyan-300 marker:text-slate-500"
            dangerouslySetInnerHTML={{ __html: marked.parse(generatedPlan) as string }}
          />

          <div className="mt-8 pt-6 border-t border-slate-800 flex justify-end">
             <button
               onClick={() => window.print()}
               className="text-slate-400 hover:text-white text-sm font-mono underline decoration-slate-700 hover:decoration-white transition-all"
             >
               Print / Save as PDF
             </button>
          </div>
        </div>
      )}
    </div>
  );
}
