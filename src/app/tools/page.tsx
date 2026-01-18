import Link from 'next/link';
import { Calendar, Shield, Moon, Search, Sparkles } from 'lucide-react';
import { Metadata } from 'next';
import { RecoveryCompass } from '@/components/tools/RecoveryCompass';
import { TheAnchor } from '@/components/tools/TheAnchor';
import { ToolCard } from '@/components/tools/ToolCard';

export const metadata: Metadata = {
  title: 'AI Recovery Tools | Bio-Reclaim',
  description: 'AI-powered recovery tools including chat support, plan generators, social scripts, and personalized guidance for your recovery journey.',
  keywords: 'recovery tools, AI recovery, addiction support, recovery planning, mental health tools',
};

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 font-outfit">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center text-slate-900 font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Recovery<span className="text-cyan-400">Tools</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
              <Link href="/learn" className="hover:text-cyan-400 transition-colors">Learn</Link>
              <Link href="/philippines" className="hover:text-cyan-400 transition-colors">Resources</Link>
              <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-20 pb-32 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-900/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            AI-Powered Recovery Compass
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Your Recovery <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Toolkit</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10">
            15+ AI-powered tools to support your recovery journey. From personalized plans to social scripts,
            grounding exercises to trigger analysis—your compass for lasting change.
          </p>
        </div>
      </header>

      {/* Tools Grid */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Featured Tool: Recovery Compass (Chat) */}
            <div className="lg:col-span-2">
              <RecoveryCompass />
            </div>

            {/* Side Tool: The Anchor (Grounding) */}
            <div className="lg:col-span-1 h-full min-h-[500px]">
              <TheAnchor />
            </div>

          </div>

          <h2 className="text-3xl font-bold text-white mt-20 mb-10 text-center flex items-center justify-center space-x-3">
             <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-500">More Tools</span>
             <span className="text-sm bg-slate-800 text-cyan-400 px-2 py-1 rounded-md border border-slate-700">Coming Soon</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 opacity-70 hover:opacity-100 transition-opacity duration-500">
            {/* Placeholder Tool Cards */}
            <ToolCard
              id="plan-generator"
              title="Plan Generator"
              description="Create personalized daily recovery protocols."
              icon={Calendar}
              color="indigo"
              isComingSoon
            />
            <ToolCard
              id="social-shield"
              title="Social Shield"
              description="Practice refusal scripts for social situations."
              icon={Shield}
              color="emerald"
              isComingSoon
            />
            <ToolCard
              id="sleep-repair"
              title="Sleep Repair"
              description="Science-backed circadian reset protocols."
              icon={Moon}
              color="violet"
              isComingSoon
            />
            <ToolCard
              id="trigger-detective"
              title="Trigger Detective"
              description="Analyze H.A.L.T. triggers deeply."
              icon={Search}
              color="rose"
              isComingSoon
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p className="mb-2">Powered by evidence-based recovery principles and AI technology.</p>
          <p className="opacity-50">Disclaimer: These tools are for educational purposes. Consult a medical professional for treatment.</p>
        </div>
      </footer>
    </main>
  );
}
