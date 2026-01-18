// Recovery Journey Page
import { Metadata } from 'next';
import RecoveryFlowchart from '@/components/RecoveryFlowchart';
import Link from 'next/link';
import { Heart, Users, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Recovery Journey: 5 Stages from Detox to Maintenance | Bio-Reclaim',
  description: 'Navigate your recovery journey through 5 stages: Detox, Therapy, Mental Health, Nutrition, and Maintenance. Evidence-based protocols with Philippine foods, supplements, and Yakap Bayan resources.',
  keywords: 'recovery stages, detox Philippines, addiction therapy, mental health support, nutritional psychiatry, Yakap Bayan, shabu recovery timeline',
  openGraph: {
    title: 'Recovery Journey: 5 Stages | Bio-Reclaim Philippines',
    description: 'Navigate recovery from detox to long-term maintenance with Filipino resources',
    type: 'article',
  },
};

export default function RecoveryPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Navigate Recovery from Substance Use Disorder',
            description: '5-stage recovery journey with evidence-based protocols',
            step: [
              {
                '@type': 'HowToStep',
                name: 'Detox Phase (Week 1-2)',
                text: 'Medical supervision, hydration, magnesium supplementation, and establishing routine',
                itemListElement: [
                  { '@type': 'HowToDirection', text: 'Seek medical supervision for safe withdrawal' },
                  { '@type': 'HowToDirection', text: 'Take Magnesium Glycinate 300-400mg nightly' },
                  { '@type': 'HowToDirection', text: 'Hydrate with 3-4 liters of coconut water daily' },
                ],
              },
              {
                '@type': 'HowToStep',
                name: 'Therapy Phase (Month 1-3)',
                text: 'Cognitive Behavioral Therapy, trigger identification, and building coping strategies',
              },
              {
                '@type': 'HowToStep',
                name: 'Mental Health Support (Month 3-6)',
                text: 'Address co-occurring disorders, stress management, and emotional regulation',
              },
              {
                '@type': 'HowToStep',
                name: 'Nutrition & Exercise (Month 6-12)',
                text: 'Brain-healing foods, supplements, and physical activity for neuroplasticity',
              },
              {
                '@type': 'HowToStep',
                name: 'Long-Term Maintenance (Year 1+)',
                text: 'Relapse prevention, community involvement, and giving back through Yakap Bayan',
              },
            ],
          }),
        }}
      />

      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Your Recovery Journey
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-6">
              Recovery is not a straight line—it's a series of stages. Navigate from detox to long-term
              maintenance with evidence-based protocols, Philippine foods, and community support.
            </p>
          </div>

          {/* Flowchart Component */}
          <RecoveryFlowchart />

          {/* Key Principles */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Core Recovery Principles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-cyan-500/20">
                <div className="w-12 h-12 mb-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Gracious Redundancy</h3>
                <p className="text-slate-300 text-sm">
                  Build strict routines to externalize executive function while your brain heals.
                  Wake, eat, sleep at the same times daily to create "good redundancy."
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-green-500/20">
                <div className="w-12 h-12 mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Holistic Healing</h3>
                <p className="text-slate-300 text-sm">
                  Recovery requires healing body, mind, and relationships. Combine pharmacological
                  treatments, therapy, nutrition, and social support for best outcomes.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-purple-500/20">
                <div className="w-12 h-12 mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Kapwa (Shared Identity)</h3>
                <p className="text-slate-300 text-sm">
                  "Hindi ka nag-iisa" (You are not alone). Filipino cultural values of Kapwa and
                  Bayanihan emphasize community support through programs like Yakap Bayan.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Overview */}
          <div className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20">
            <h2 className="text-2xl font-bold mb-6 text-center">Recovery Timeline</h2>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-start gap-4">
                <div className="w-24 flex-shrink-0 font-bold text-cyan-400">Week 1-2</div>
                <div>
                  <strong>Detox:</strong> Acute withdrawal symptoms. Focus on medical supervision,
                  hydration, magnesium, and establishing routine.
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-24 flex-shrink-0 font-bold text-green-400">Month 1-3</div>
                <div>
                  <strong>Therapy:</strong> CBT sessions, trigger identification, building coping strategies.
                  Start L-Tyrosine for dopamine restoration.
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-24 flex-shrink-0 font-bold text-purple-400">Month 3-6</div>
                <div>
                  <strong>Mental Health:</strong> Address co-occurring disorders (depression, anxiety, PTSD).
                  Stress management and emotional regulation.
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-24 flex-shrink-0 font-bold text-orange-400">Month 6-12</div>
                <div>
                  <strong>Nutrition:</strong> Dopamine receptors regenerate. Focus on brain-healing foods
                  (Balut, Malunggay, Bangus), exercise, and neuroplasticity.
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-24 flex-shrink-0 font-bold text-blue-400">Year 1+</div>
                <div>
                  <strong>Maintenance:</strong> Full cognitive recovery possible. Continue therapy,
                  maintain support systems, give back to community (Yakap Bayan volunteers).
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/recovery/personalized"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Get Your Personalized Recovery Plan →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
