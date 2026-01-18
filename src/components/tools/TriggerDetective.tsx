'use client';

import { useState } from 'react';
import { Search, AlertTriangle, Battery, Heart, Utensils, Zap, Loader2, ArrowRight, FileSearch } from 'lucide-react';
import { callGeminiFlash } from '@/lib/gemini';
import { marked } from 'marked';

interface DetectiveState {
  sensation: string;
  halt: {
    hungry: boolean;
    angry: boolean;
    lonely: boolean;
    tired: boolean;
  };
  intensity: number;
}

export function TriggerDetective() {
  const [state, setState] = useState<DetectiveState>({
    sensation: '',
    halt: {
      hungry: false,
      angry: false,
      lonely: false,
      tired: false,
    },
    intensity: 5
  });
  const [analysis, setAnalysis] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const toggleHalt = (key: keyof DetectiveState['halt']) => {
    setState(prev => ({
      ...prev,
      halt: { ...prev.halt, [key]: !prev.halt[key] }
    }));
  };

  const handleAnalyze = async () => {
    if (!state.sensation) return;

    setIsLoading(true);
    setAnalysis('');

    try {
      const activeHalt = Object.entries(state.halt)
        .filter(([_, isActive]) => isActive)
        .map(([key]) => key.toUpperCase())
        .join(', ');

      const prompt = `Perform a "Root Cause Analysis" for a user in addiction recovery experiencing a craving or emotional trigger.

      User Report: "${state.sensation}"
      Self-Identified H.A.L.T. Factors: ${activeHalt || 'None identified yet'}
      Intensity: ${state.intensity}/10

      Please analyze this situation and provide 3 specific "Detective Findings":
      1. ### 🔍 The Underlying Need
      (Connect the physical/emotional sensation to a valid human need using the H.A.L.T. framework. E.g., "Your chest tightness combined with hunger suggests physiological stress...")

      2. ### ⚡ Immediate Fix
      (A quick, actionable step to reduce intensity right now. Less than 5 mins.)

      3. ### 🛠️ Long-Term Adjustment
      (A habit shift to prevent this specific trigger pattern.)

      Tone: Analytical but compassionate, like a wise detective helping them solve a mystery, not judging a crime.
      Format: Clear Markdown.`;

      const response = await callGeminiFlash(prompt);
      if (response) {
        setAnalysis(response);
      }
    } catch (error) {
      console.error('Trigger analysis error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Input Section */}
      <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-rose-950/50 flex items-center justify-center border border-rose-500/30">
            <Search className="w-6 h-6 text-rose-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Trigger Detective</h2>
            <p className="text-slate-400">Investigate the root cause of your cravings.</p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Sensation Input */}
          <div className="space-y-4">
            <label className="text-sm font-medium text-slate-300">
              What are you feeling right now? (Physical or Emotional)
            </label>
            <textarea
              value={state.sensation}
              onChange={(e) => setState({ ...state, sensation: e.target.value })}
              placeholder="E.g., I feel tight in my chest and anxious, and I just want to escape..."
              className="w-full bg-slate-800 border-slate-700 text-white rounded-xl p-4 focus:ring-2 focus:ring-rose-500/50 outline-none transition-all resize-none h-32 placeholder:text-slate-600"
            />
          </div>

          {/* H.A.L.T. Check */}
          <div className="space-y-4">
            <label className="text-sm font-medium text-slate-300 flex items-center space-x-2">
              <FileSearch className="w-4 h-4 text-amber-500" />
              <span>H.A.L.T. Quick Scan (Check all that apply)</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button
                onClick={() => toggleHalt('hungry')}
                className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${
                  state.halt.hungry
                    ? 'bg-amber-950/30 border-amber-500 text-amber-400 shadow-neon-amber'
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600'
                }`}
              >
                <Utensils className="w-6 h-6" />
                <span className="font-bold">Hungry</span>
              </button>

              <button
                onClick={() => toggleHalt('angry')}
                className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${
                  state.halt.angry
                    ? 'bg-red-950/30 border-red-500 text-red-400 shadow-neon-rose'
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600'
                }`}
              >
                <Zap className="w-6 h-6" />
                <span className="font-bold">Angry</span>
              </button>

              <button
                onClick={() => toggleHalt('lonely')}
                className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${
                  state.halt.lonely
                    ? 'bg-blue-950/30 border-blue-500 text-blue-400 shadow-neon-cyan'
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600'
                }`}
              >
                <Heart className="w-6 h-6" />
                <span className="font-bold">Lonely</span>
              </button>

              <button
                onClick={() => toggleHalt('tired')}
                className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${
                  state.halt.tired
                    ? 'bg-indigo-950/30 border-indigo-500 text-indigo-400 shadow-indigo-500/50'
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600'
                }`}
              >
                <Battery className="w-6 h-6" />
                <span className="font-bold">Tired</span>
              </button>
            </div>
          </div>

          {/* Intensity Slider */}
          <div className="space-y-4">
            <label className="flex justify-between text-sm font-medium text-slate-300">
              <span>Urge Intensity</span>
              <span className={`font-bold ${state.intensity > 7 ? 'text-rose-500' : 'text-emerald-400'}`}>
                {state.intensity}/10
              </span>
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={state.intensity}
              onChange={(e) => setState({ ...state, intensity: parseInt(e.target.value) })}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
            />
          </div>

          <button
            onClick={handleAnalyze}
            disabled={isLoading || !state.sensation}
            className="w-full p-4 rounded-xl bg-gradient-to-r from-rose-700 to-pink-600 text-white font-bold text-lg shadow-lg shadow-rose-900/30 hover:shadow-rose-900/50 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Investigating Clues...</span>
              </>
            ) : (
              <>
                <Search className="w-5 h-5" />
                <span>Analyze Trigger</span>
              </>
            )}
          </button>
        </div>
      </div>

       {/* Results Section */}
       {analysis && (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
           <div className="bg-slate-900/80 p-8 rounded-3xl border border-rose-900/30 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                 <AlertTriangle className="w-48 h-48" />
              </div>
              <div className="flex items-center space-x-3 mb-6 border-b border-slate-800 pb-4">
                 <FileSearch className="w-6 h-6 text-rose-400" />
                 <h3 className="text-xl font-bold text-white">Case Findings</h3>
              </div>
              <div className="prose prose-invert prose-lg max-w-none prose-headings:text-rose-300 prose-p:text-slate-300 prose-li:text-slate-300 relative z-10">
                 <div dangerouslySetInnerHTML={{ __html: marked.parse(analysis) as string }} />
              </div>
           </div>
        </div>
      )}
    </div>
  );
}
