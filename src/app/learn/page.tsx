// Main Learning Hub Page
import { Metadata } from 'next';
import Link from 'next/link';
import { Brain, Heart, Apple, TrendingUp, BookOpen, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Learn About Substance Use & Recovery | Bio-Reclaim Philippines',
  description: 'Evidence-based education on methamphetamine (shabu), ecstasy, marijuana, GHB, and cocaine. Learn about recovery pathways, neuroscience, and Filipino resources like Yakap Bayan.',
  keywords: 'substance education Philippines, shabu recovery, drug awareness, addiction science, Yakap Bayan, Filipino recovery resources',
  openGraph: {
    title: 'Learn About Substance Use & Recovery | Bio-Reclaim Philippines',
    description: 'Evidence-based education on substances, recovery pathways, and Filipino resources',
    type: 'website',
    locale: 'en_PH',
    alternateLocale: 'tl_PH',
  },
  alternates: {
    canonical: 'https://bio-reclaim.com/learn',
    languages: {
      'en': 'https://bio-reclaim.com/learn',
      'tl': 'https://bio-reclaim.com/tl/matuto',
    },
  },
};

const learningModules = [
  {
    id: 'substances',
    title: 'Understanding Substances',
    description: 'Learn about 5 key substances, their effects on the brain, risks, and Philippine-specific data',
    icon: <Brain className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-500',
    href: '/learn/substances',
    topics: ['Methamphetamine (Shabu)', 'Ecstasy (MDMA)', 'Marijuana', 'GHB (Liquid G)', 'Cocaine'],
    stats: '93.65% of PH treatment admissions are meth-related'
  },
  {
    id: 'recovery',
    title: 'Recovery Journey',
    description: 'Navigate the 5 stages of recovery from detox to long-term maintenance',
    icon: <TrendingUp className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500',
    href: '/learn/recovery',
    topics: ['Detox Phase', 'Therapy', 'Mental Health', 'Nutrition', 'Maintenance'],
    stats: 'Recovery timeline: Months to years, but healing is possible'
  },
  {
    id: 'nutrition',
    title: 'Nutritional Psychiatry',
    description: 'Brain-healing foods, supplements, and Philippine dietary recommendations',
    icon: <Apple className="w-8 h-8" />,
    color: 'from-orange-500 to-red-500',
    href: '/learn/nutrition',
    topics: ['Balut (Dopamine)', 'Malunggay (92 Nutrients)', 'Kamote (Blood Sugar)', 'Pomelo Warning'],
    stats: 'Nutrition supports 95% of serotonin production in the gut'
  },
  {
    id: 'treatments',
    title: '2025 Treatment Innovations',
    description: 'Latest medical breakthroughs: GLP-1 agonists, focused ultrasound, immunotherapy',
    icon: <Heart className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500',
    href: '/learn/treatments',
    topics: ['GLP-1 for Cocaine', 'TNF-alpha Immunotherapy', 'MDMA Therapy', 'Digital Therapeutics'],
    stats: '2025: FDA trials for Ozempic in cocaine addiction'
  },
  {
    id: 'philippines',
    title: 'Philippine Context',
    description: 'Local statistics, Yakap Bayan program, cultural values, and community resources',
    icon: <Users className="w-8 h-8" />,
    color: 'from-cyan-500 to-blue-500',
    href: '/learn/philippines',
    topics: ['Yakap Bayan', 'Barangay Health Centers', 'Economic Redundancy', 'Kapwa Principle'],
    stats: '6,590 kg shabu seized in 2025 (₱45 billion value)'
  },
  {
    id: 'quiz',
    title: 'Test Your Knowledge',
    description: 'Interactive quiz with 10 questions covering misconceptions, recovery science, and treatment',
    icon: <BookOpen className="w-8 h-8" />,
    color: 'from-yellow-500 to-orange-500',
    href: '/learn/quiz',
    topics: ['Myths vs Facts', 'Recovery Timeline', 'Supplement Knowledge', 'Treatment Options'],
    stats: 'Challenge yourself and learn from detailed explanations'
  }
];

export default function LearnPage() {
  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EducationalOrganization',
            name: 'Bio-Reclaim Learning Hub',
            description: 'Evidence-based education on substance use disorders and recovery',
            url: 'https://bio-reclaim.com/learn',
            areaServed: 'Philippines',
            availableLanguage: ['English', 'Tagalog'],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Learning Modules',
              itemListElement: learningModules.map((module, index) => ({
                '@type': 'Course',
                position: index + 1,
                name: module.title,
                description: module.description,
                url: `https://bio-reclaim.com${module.href}`,
              })),
            },
          }),
        }}
      />

      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Learn About Recovery
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                Evidence-based education on substance use disorders, recovery pathways, and Filipino resources.
                Backed by <strong className="text-cyan-400">337+ research citations</strong> from 2024-2025 studies.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Evidence-Based</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span>Filipino Context</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span>2025 Discoveries</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Modules Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningModules.map((module) => (
              <Link
                key={module.id}
                href={module.href}
                className="group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all hover:scale-105"
              >
                {/* Icon */}
                <div className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center`}>
                  {module.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {module.title}
                </h3>
                <p className="text-slate-400 mb-4">
                  {module.description}
                </p>

                {/* Topics */}
                <div className="mb-4">
                  <p className="text-xs text-slate-500 mb-2">Topics Covered:</p>
                  <div className="flex flex-wrap gap-2">
                    {module.topics.slice(0, 3).map((topic, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300"
                      >
                        {topic}
                      </span>
                    ))}
                    {module.topics.length > 3 && (
                      <span className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400">
                        +{module.topics.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="pt-4 border-t border-slate-700">
                  <p className="text-sm text-cyan-400">
                    💡 {module.stats}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Stats */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-800">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">337+</div>
              <div className="text-slate-400">Research Citations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">5</div>
              <div className="text-slate-400">Comprehensive Documents</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">2025</div>
              <div className="text-slate-400">Latest Medical Discoveries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
              <div className="text-slate-400">Filipino Context</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Recovery Journey?
            </h2>
            <p className="text-slate-300 mb-6">
              Take our personalized assessment to receive tailored recommendations for supplements,
              nutrition, therapy, and Filipino community resources.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/learn/quiz"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
              >
                Take the Quiz
              </Link>
              <Link
                href="/recovery/personalized"
                className="px-6 py-3 bg-slate-800 rounded-lg font-semibold hover:bg-slate-700 transition-all border border-slate-700"
              >
                Get Personalized Plan
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
