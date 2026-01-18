import { SleepRepair } from '@/components/tools/SleepRepair';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sleep Repair - Bio-Reclaim',
  description: 'Restore your circadian rhythm tailored specifically for recovery.',
};

export default function SleepRepairPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SleepRepair />
      </div>
    </main>
  );
}
