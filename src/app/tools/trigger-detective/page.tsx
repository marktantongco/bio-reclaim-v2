import { TriggerDetective } from '@/components/tools/TriggerDetective';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trigger Detective - Bio-Reclaim',
  description: 'Analyze cravings and emotional triggers using the H.A.L.T. framework.',
};

export default function TriggerDetectivePage() {
  return (
    <main className="min-h-screen bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TriggerDetective />
      </div>
    </main>
  );
}
