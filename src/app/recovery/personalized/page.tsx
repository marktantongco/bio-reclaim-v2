// Personalized Recovery Planner Page
import { Metadata } from 'next';
import PersonalizedRecoveryForm from '@/components/PersonalizedRecoveryForm';
import { Heart, Users, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personalized Recovery Plan Generator | Bio-Reclaim Philippines',
  description: 'Get a customized recovery plan based on your substance use, recovery stage, and mental health. Receive tailored recommendations for supplements, Filipino foods, therapy, and 2025 treatment innovations.',
  keywords: 'personalized recovery plan, custom addiction treatment, shabu recovery Philippines, tailored supplement recommendations, Filipino recovery resources',
  openGraph: {
    title: 'Get Your Personalized Recovery Plan | Bio-Reclaim',
    description: 'Customized recommendations for supplements, nutrition, therapy, and Filipino resources',
    type: 'website',
  },
};

export default function PersonalizedRecoveryPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Personalized Recovery Plan Generator',
            description: 'Generate customized recovery recommendations based on individual circumstances',
            applicationCategory: 'HealthApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'PHP',
            },
          }),
        }}
      />

      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Personalized Recovery Plan
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-6">
              Answer 5 simple questions to receive a customized recovery plan with evidence-based
              recommendations for supplements, Philippine foods, therapy options, and 2025 treatment innovations.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="p-4 bg-slate-900/50 rounded-xl border border-cyan-500/20">
              <div className="flex items-center gap-3 mb-2">
                <Heart className="w-5 h-5 text-cyan-400" />
                <h3 className="font-bold">Evidence-Based</h3>
              </div>
              <p className="text-sm text-slate-400">
                Recommendations backed by 337+ research citations from 2024-2025 studies
              </p>
            </div>

            <div className="p-4 bg-slate-900/50 rounded-xl border border-green-500/20">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-green-400" />
                <h3 className="font-bold">Filipino Context</h3>
              </div>
              <p className="text-sm text-slate-400">
                Includes Yakap Bayan resources, Barangay Health Centers, and local foods
              </p>
            </div>

            <div className="p-4 bg-slate-900/50 rounded-xl border border-purple-500/20">
              <div className="flex items-center gap-3 mb-2">
                <AlertCircle className="w-5 h-5 text-purple-400" />
                <h3 className="font-bold">2025 Innovations</h3>
              </div>
              <p className="text-sm text-slate-400">
                Latest treatments: GLP-1 agonists, TNF-alpha immunotherapy, MDMA therapy
              </p>
            </div>
          </div>

          {/* Form Component */}
          <PersonalizedRecoveryForm />

          {/* Disclaimer */}
          <div className="mt-12 max-w-3xl mx-auto p-6 bg-orange-500/10 border border-orange-500/20 rounded-xl">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-orange-400 mb-2">Medical Disclaimer</h3>
                <p className="text-sm text-slate-300">
                  This personalized plan is for educational purposes only and does not constitute medical advice.
                  Always consult with a qualified healthcare provider before starting any supplement regimen or
                  treatment program. If you're experiencing a medical emergency or crisis, please contact:
                </p>
                <ul className="mt-3 space-y-1 text-sm text-slate-300">
                  <li>• <strong>National Crisis Hotline:</strong> 1553 (NCMH)</li>
                  <li>• <strong>DOH Hotline:</strong> 1555</li>
                  <li>• <strong>PDEA Hotline:</strong> 1356</li>
                  <li>• <strong>Emergency:</strong> 911</li>
                </ul>
              </div>
            </div>
          </div>

          {/* What You'll Receive */}
          <div className="mt-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">What You'll Receive</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-slate-700">
                <h3 className="font-bold mb-3 text-cyan-400">💊 Supplement Recommendations</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Substance-specific supplements (L-Tyrosine for meth, 5-HTP for MDMA)</li>
                  <li>• Dosage guidelines and timing</li>
                  <li>• Philippine market availability (Mercury Drug, Healthy Options)</li>
                  <li>• Drug interaction warnings (Pomelo/Suha alert!)</li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-slate-700">
                <h3 className="font-bold mb-3 text-green-400">🥗 Filipino Food Guide</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Brain-healing foods (Balut, Malunggay, Kamote, Bangus)</li>
                  <li>• Neurotransmitter-specific nutrition (dopamine vs. serotonin)</li>
                  <li>• Foods to avoid (Pomelo, grape juice, sugar)</li>
                  <li>• Budget-friendly meal ideas (₱50-200/day)</li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-slate-700">
                <h3 className="font-bold mb-3 text-purple-400">🧠 Therapy & Support</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Recovery stage-specific therapy (CBT, EMDR, group therapy)</li>
                  <li>• Yakap Bayan program enrollment</li>
                  <li>• Digital therapeutics (reSET app, Affect)</li>
                  <li>• Support group recommendations (AA, NA, local communities)</li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-slate-700">
                <h3 className="font-bold mb-3 text-orange-400">🔬 2025 Treatment Options</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• GLP-1 agonists for cocaine addiction (clinical trials)</li>
                  <li>• TNF-alpha immunotherapy for methamphetamine</li>
                  <li>• MDMA-assisted therapy for PTSD/trauma</li>
                  <li>• Focused ultrasound neuromodulation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
