import { SocialShield } from '@/components/tools/SocialShield';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Shield - Bio-Reclaim',
  description: 'Generate confident refusal scripts for social situations.',
};

export default function SocialShieldPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SocialShield />
      </div>
    </main>
  );
}
