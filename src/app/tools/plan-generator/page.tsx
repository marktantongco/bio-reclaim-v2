import { PlanGenerator } from '@/components/tools/PlanGenerator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Daily Protocol Generator - Bio-Reclaim',
  description: 'AI-powered daily planner for addiction recovery and mental wellness.',
};

export default function PlanGeneratorPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PlanGenerator />
      </div>
    </main>
  );
}
