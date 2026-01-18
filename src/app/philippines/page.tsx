// Philippines Analytics & Resources Page
import { Metadata } from 'next';
import PhilippineAnalyticsDashboard from '@/components/PhilippineAnalyticsDashboard';
import Link from 'next/link';
import { Phone, MapPin, Users, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Philippine Recovery Statistics & Resources | Bio-Reclaim',
  description: 'Comprehensive analysis of substance use recovery in the Philippines. Compare PH to global best practices, explore Yakap Bayan impact, regional data, and access local resources including crisis hotlines and treatment centers.',
  keywords: 'Philippines drug statistics, Yakap Bayan program, PDEA data, substance abuse Philippines, recovery resources Manila, Barangay health centers, Filipino addiction treatment',
  openGraph: {
    title: 'Philippine Recovery Analytics | Bio-Reclaim',
    description: 'Data-driven analysis of recovery efforts in the Philippines with actionable recommendations',
    type: 'article',
  },
};

const crisisHotlines = [
  { name: 'National Crisis Hotline (NCMH)', number: '1553', available: '24/7' },
  { name: 'DOH Health Hotline', number: '1555', available: '24/7' },
  { name: 'PDEA Drug Abuse Hotline', number: '1356', available: '24/7' },
  { name: 'Emergency Services', number: '911', available: '24/7' },
  { name: 'Hopeline (Crisis Support)', number: '(02) 8804-4673', available: '24/7' },
  { name: 'In Touch Crisis Line', number: '(02) 8893-7603', available: '24/7' },
];

const treatmentCenters = [
  {
    name: 'Tahanan Sta. Luisa',
    location: 'Quezon City, NCR',
    type: 'Residential Treatment',
    contact: '(02) 8921-0751'
  },
  {
    name: 'The Cabin Manila',
    location: 'Makati, NCR',
    type: 'Outpatient & Residential',
    contact: '(02) 8403-6680'
  },
  {
    name: 'Serenity Wellness Center',
    location: 'Pasig, NCR',
    type: 'Holistic Treatment',
    contact: '(02) 8631-1680'
  },
  {
    name: 'We Care Treatment Center',
    location: 'Antipolo, Rizal',
    type: 'Faith-Based Residential',
    contact: '(02) 8697-4116'
  },
];

export default function PhilippinesPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            name: 'Philippine Recovery Statistics & Resources',
            description: 'Comprehensive analysis of substance use recovery in the Philippines',
            about: {
              '@type': 'MedicalCondition',
              name: 'Substance Use Disorder',
              relevantSpecialty: 'Addiction Medicine',
            },
            mainEntity: {
              '@type': 'Dataset',
              name: 'Philippine Substance Use Statistics 2024-2025',
              description: 'Regional data, treatment efficacy, and Yakap Bayan impact',
            },
          }),
        }}
      />

      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
              <span className="text-blue-400 font-semibold">🇵🇭 Philippine Context</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Recovery in the Philippines
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Data-driven analysis of where the Philippines stands in the global recovery trajectory,
              what's working, what's not, and how to implement evidence-based best practices.
            </p>
          </div>

          {/* Crisis Hotlines Banner */}
          <div className="mb-12 p-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl border border-red-500/20">
            <div className="flex items-start gap-4">
              <Phone className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-red-400 mb-3">24/7 Crisis Hotlines</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {crisisHotlines.map((hotline, i) => (
                    <div key={i} className="p-3 bg-slate-900/50 rounded-lg">
                      <p className="font-semibold text-sm mb-1">{hotline.name}</p>
                      <p className="text-2xl font-bold text-cyan-400">{hotline.number}</p>
                      <p className="text-xs text-slate-400">{hotline.available}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Analytics Dashboard */}
          <PhilippineAnalyticsDashboard />

          {/* Treatment Centers */}
          <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold">Treatment Centers in Metro Manila</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {treatmentCenters.map((center, i) => (
                <div key={i} className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-bold mb-2">{center.name}</h3>
                  <div className="space-y-2 text-sm text-slate-300">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <span>{center.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-slate-400" />
                      <span>{center.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-slate-400" />
                      <span className="font-semibold text-cyan-400">{center.contact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-sm text-slate-300">
                <strong className="text-blue-400">Note:</strong> This is not an exhaustive list.
                For a complete directory of treatment facilities, contact the Department of Health (DOH)
                at 1555 or visit your local Barangay Health Center.
              </p>
            </div>
          </div>

          {/* Yakap Bayan Program */}
          <div className="mt-16 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-8 border border-green-500/20">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-green-400" />
              <h2 className="text-3xl font-bold">Yakap Bayan Program</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-green-400">What is Yakap Bayan?</h3>
                <p className="text-slate-300 mb-4">
                  Yakap Bayan ("Embrace of the Nation") is the Philippines' flagship community-based
                  recovery program. It transforms "surrenderers" from the drug war into community
                  volunteers, removing social redundancy and building recovery capital.
                </p>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>31,200 enrolled</strong> in 2025 (267% growth since 2019)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>60.6% completion rate</strong> (18,900 completers in 2025)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>65.6% employment rate</strong> among completers (12,400 employed)</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-green-400">How to Enroll</h3>
                <ol className="space-y-3 text-sm text-slate-300 list-decimal list-inside">
                  <li>Visit your <strong>Barangay Hall</strong> and ask for the Yakap Bayan coordinator</li>
                  <li>Complete the <strong>intake assessment</strong> (substance use history, health screening)</li>
                  <li>Attend <strong>orientation session</strong> (program overview, expectations)</li>
                  <li>Begin <strong>community service</strong> (disaster response, livelihood training, peer support)</li>
                  <li>Receive <strong>ongoing support</strong> (counseling, job placement, skills training)</li>
                </ol>
                <div className="mt-4 p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                  <p className="text-sm text-slate-300">
                    <strong className="text-cyan-400">Contact:</strong> For more information,
                    call the Dangerous Drugs Board (DDB) at <strong className="text-cyan-400">(02) 8929-9614</strong>
                    or visit your local Barangay Health Center.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Regional Resources */}
          <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold mb-6">Barangay Health Centers by Region</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <h3 className="font-bold mb-2 text-cyan-400">NCR (Metro Manila)</h3>
                <p className="text-sm text-slate-300 mb-2">
                  Every barangay has a health center. For substance use support, ask for the
                  <strong> Barangay Anti-Drug Abuse Council (BADAC)</strong> coordinator.
                </p>
                <p className="text-xs text-slate-400">
                  Major hubs: Quezon City Health Department, Manila Health Department
                </p>
              </div>

              <div className="p-4 bg-slate-800/50 rounded-lg">
                <h3 className="font-bold mb-2 text-green-400">Region III (Central Luzon)</h3>
                <p className="text-sm text-slate-300 mb-2">
                  Contact your Provincial Health Office for referrals to treatment facilities
                  and Yakap Bayan enrollment.
                </p>
                <p className="text-xs text-slate-400">
                  Major hubs: Pampanga Provincial Hospital, Bulacan Medical Center
                </p>
              </div>

              <div className="p-4 bg-slate-800/50 rounded-lg">
                <h3 className="font-bold mb-2 text-purple-400">Region VII (Visayas)</h3>
                <p className="text-sm text-slate-300 mb-2">
                  Cebu City has dedicated substance abuse treatment units. Contact Vicente Sotto
                  Memorial Medical Center.
                </p>
                <p className="text-xs text-slate-400">
                  Major hubs: Vicente Sotto Memorial, Cebu City Health Department
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/recovery/personalized"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Get Your Personalized Recovery Plan →
            </Link>
            <p className="mt-4 text-sm text-slate-400">
              Receive tailored recommendations based on Philippine resources and evidence-based protocols
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
