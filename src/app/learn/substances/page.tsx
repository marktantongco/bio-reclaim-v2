// Substances Education Page
import { Metadata } from 'next';
import SubstanceCarousel from '@/components/SubstanceCarousel';
import Link from 'next/link';
import { AlertTriangle, Brain, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Understanding Substances: Shabu, Ecstasy, Marijuana, GHB, Cocaine | Bio-Reclaim',
  description: 'Learn about methamphetamine (shabu), ecstasy, marijuana, GHB, and cocaine. Understand mechanisms, effects, risks, and Philippine statistics. Evidence-based education with 2025 discoveries.',
  keywords: 'shabu education Philippines, methamphetamine effects, ecstasy MDMA, marijuana cannabis, GHB liquid G, cocaine, substance abuse education, drug awareness',
  openGraph: {
    title: 'Understanding Substances | Bio-Reclaim Philippines',
    description: 'Evidence-based education on 5 key substances with Philippine context',
    type: 'article',
  },
};

export default function SubstancesPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            name: 'Understanding Substances',
            description: 'Educational content on substance use disorders',
            medicalAudience: [
              { '@type': 'MedicalAudience', audienceType: 'Patient' },
              { '@type': 'MedicalAudience', audienceType: 'HealthcareProvider' },
            ],
            about: [
              {
                '@type': 'MedicalCondition',
                name: 'Methamphetamine Use Disorder',
                alternateName: 'Shabu Addiction',
              },
              {
                '@type': 'MedicalCondition',
                name: 'MDMA Use Disorder',
                alternateName: 'Ecstasy Addiction',
              },
            ],
          }),
        }}
      />

      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Understanding Substances
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-6">
              Explore the science behind 5 key substances. Learn how they affect the brain,
              understand the risks, and discover Philippine-specific data and 2025 medical breakthroughs.
            </p>

            {/* Warning Banner */}
            <div className="max-w-2xl mx-auto p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div className="text-left">
                  <p className="font-semibold text-red-400 mb-1">Educational Purpose Only</p>
                  <p className="text-sm text-slate-300">
                    This information is for education and harm reduction. If you or someone you know
                    is struggling with substance use, please seek professional help.
                    <Link href="/philippines" className="text-cyan-400 hover:underline ml-1">
                      View Philippine resources →
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Component */}
          <SubstanceCarousel />

          {/* Key Insights */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-cyan-500/20">
              <div className="w-12 h-12 mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Neuroscience</h3>
              <p className="text-slate-300 text-sm">
                All substances hijack the brain's reward system by flooding it with dopamine,
                serotonin, or other neurotransmitters—up to 1,000x normal levels for meth.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-green-500/20">
              <div className="w-12 h-12 mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Philippine Context</h3>
              <p className="text-slate-300 text-sm">
                93.65% of treatment admissions in the Philippines are methamphetamine-related.
                6,590 kg of shabu was seized in 2025, valued at ₱45 billion.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-purple-500/20">
              <div className="w-12 h-12 mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">2025 Discoveries</h3>
              <p className="text-slate-300 text-sm">
                New treatments include GLP-1 agonists (Ozempic) for cocaine addiction,
                TNF-alpha immunotherapy for meth, and MDMA-assisted therapy for trauma.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/learn/recovery"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Learn About Recovery Pathways →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
