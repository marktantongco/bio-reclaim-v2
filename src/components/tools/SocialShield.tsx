'use client';

import { useState } from 'react';
import { Shield, Sparkles, Copy, Check, Users, RefreshCw, Loader2, MessageCircle } from 'lucide-react';
import { callGeminiFlash } from '@/lib/gemini';
import { marked } from 'marked';

interface ShieldState {
  scenario: string;
  relationship: string;
  pressure: number;
  context: string;
}

export function SocialShield() {
  const [state, setState] = useState<ShieldState>({
    scenario: 'Party/Event',
    relationship: 'Acquaintance',
    pressure: 3,
    context: ''
  });
  const [generatedScripts, setGeneratedScripts] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const scenarios = [
    'Party/Event',
    'Family Gathering',
    'Work Function',
    'Date Night',
    'Casual Hangout'
  ];

  const relationships = [
    'Close Friend',
    'Acquaintance',
    'Family Member',
    'Boss/Co-worker',
    'Stranger'
  ];

  const handleGenerateScripts = async () => {
    setIsLoading(true);
    setGeneratedScripts('');

    try {
      const prompt = `Generate 3 distinct refusal scripts for someone in recovery.
      Scenario: ${state.scenario}
      Relationship: ${state.relationship}
      Pressure Level: ${state.pressure}/5 (1=Low, 5=High/Aggressive)
      Additional Context: ${state.context || 'None'}

      Please provide exactly 3 options formatted as distinct sections with these headers:
      1. ### Casual & Polite
      (Low friction, assumes good intent)
      2. ### Firm & Direct
      (Clear boundary, no room for negotiation)
      3. ### The Exit Strategy
      (How to leave the situation gracefully if pushed)

      Tone: Empowering, realistic, and specific to the relationship dynamic.`;

      const response = await callGeminiFlash(prompt);
      if (response) {
        setGeneratedScripts(response);
      }
    } catch (error) {
      console.error('Script generation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Input Section */}
      <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-indigo-900/30 flex items-center justify-center border border-indigo-500/30">
            <Shield className="w-6 h-6 text-indigo-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Social Shield</h2>
            <p className="text-slate-400">Generate confidence-boosting refusal scripts.</p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Scenario Selection */}
          <div className="space-y-4">
            <label className="text-sm font-medium text-slate-300 flex items-center space-x-2">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>The Situation</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {scenarios.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setState({ ...state, scenario: opt })}
                  className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                    state.scenario === opt
                      ? 'bg-cyan-950/30 border-cyan-500 text-cyan-400 shadow-neon-cyan'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600 hover:text-white'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Relationship */}
            <div className="space-y-4">
              <label className="text-sm font-medium text-slate-300">Who is it?</label>
              <select
                value={state.relationship}
                onChange={(e) => setState({ ...state, relationship: e.target.value })}
                className="w-full bg-slate-800 border-slate-700 text-white rounded-xl p-3 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all"
              >
                {relationships.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            {/* Pressure Level */}
            <div className="space-y-4">
              <label className="flex justify-between text-sm font-medium text-slate-300">
                <span>Pressure Level</span>
                <span className={`font-bold ${state.pressure > 3 ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {state.pressure}/5
                </span>
              </label>
              <input
                type="range"
                min="1"
                max="5"
                value={state.pressure}
                onChange={(e) => setState({ ...state, pressure: parseInt(e.target.value) })}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <div className="flex justify-between text-xs text-slate-500 font-mono">
                <span>Low Key</span>
                <span>Aggressive</span>
              </div>
            </div>
          </div>

          {/* Context */}
          <div className="space-y-4">
            <label className="text-sm font-medium text-slate-300 flex items-center space-x-2">
              <MessageCircle className="w-4 h-4 text-violet-400" />
              <span>Additional Context (Optional)</span>
            </label>
            <textarea
              value={state.context}
              onChange={(e) => setState({ ...state, context: e.target.value })}
              placeholder="E.g., They don't know I'm sober, or it's a toast..."
              className="w-full bg-slate-800 border-slate-700 text-white rounded-xl p-3 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all resize-none h-24"
            />
          </div>

          <button
            onClick={handleGenerateScripts}
            disabled={isLoading}
            className="w-full p-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-bold text-lg shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Generating Defense Strategy...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Generate Scripts</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Results Section */}
      {generatedScripts && (
        <div className="grid gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
           <div className="bg-slate-900/80 p-8 rounded-3xl border border-slate-800 shadow-2xl">
              <div className="prose prose-invert prose-lg max-w-none prose-headings:text-indigo-300 prose-p:text-slate-300 prose-li:text-slate-300">
                 <div dangerouslySetInnerHTML={{ __html: marked.parse(generatedScripts) as string }} />
              </div>
           </div>
        </div>
      )}
    </div>
  );
}
