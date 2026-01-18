// Substance Overview Carousel Component
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, AlertTriangle, Brain, Heart, TrendingUp } from 'lucide-react';

interface Substance {
  id: string;
  name: string;
  streetNames: string[];
  classification: string;
  primaryNeurotransmitter: string;
  mechanism: string;
  effects: string[];
  risks: string[];
  philippineStats: {
    prevalence: string;
    seizures2025: string;
    demographics: string;
  };
  didYouKnow: string;
  color: string;
}

const substances: Substance[] = [
  {
    id: 'meth',
    name: 'Methamphetamine',
    streetNames: ['Shabu', 'Bato', 'Ice', 'Crystal', 'Glass'],
    classification: 'Schedule II Stimulant',
    primaryNeurotransmitter: 'Dopamine (1,000x normal levels)',
    mechanism: 'VMAT2 reversal - forces dopamine out of storage vesicles, reverses transporter direction',
    effects: [
      'Intense euphoria and hyper-alertness (20 min "rush")',
      'Increased energy and focus (18-24 hour "high")',
      'Suppressed appetite and fatigue ("pampagilas" myth)',
      'Paranoia, psychosis, hallucinations ("tweaking" phase)'
    ],
    risks: [
      'Neurotoxicity - 50% of dopamine-producing cells destroyed',
      'Meth mouth - vasoconstriction cuts blood flow to gums',
      'Cardiovascular collapse, stroke risk',
      'Severe cognitive decline, Parkinson\'s risk'
    ],
    philippineStats: {
      prevalence: '93.65% of treatment admissions (2024 DDB)',
      seizures2025: '6,590 kg seized (₱45 billion value)',
      demographics: '58% employed, avg income ₱13,287/month'
    },
    didYouKnow: '2025 Discovery: TNF-alpha (immune protein) reinforces meth addiction. Immunotherapy could "vaccinate" the brain!',
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 'mdma',
    name: 'Ecstasy (MDMA)',
    streetNames: ['Ecstasy', 'X', 'XTC', 'Molly', 'Party Pill'],
    classification: 'Schedule I Empathogen',
    primaryNeurotransmitter: 'Serotonin + Oxytocin',
    mechanism: 'Serotonin releasing agent - dumps brain\'s serotonin reserves, releases oxytocin (bonding hormone)',
    effects: [
      'Intense empathy and emotional closeness ("hug drug")',
      'Enhanced sensory perception and tactile sensitivity',
      'Euphoria and reduced inhibitions',
      'Increased energy for dancing/socializing'
    ],
    risks: [
      '"Suicide Tuesday" - severe depression 2-3 days after use',
      'Serotonin syndrome - potentially fatal',
      'Hyperthermia (heat stroke) in club environments',
      'Hyponatremia (water toxicity) from over-hydration',
      'Long-term serotonergic axon damage'
    ],
    philippineStats: {
      prevalence: '1.3% of in-school adolescents (2019)',
      seizures2025: '121,000 tablets (2022-2025)',
      demographics: 'Popular in urban nightlife, music festivals'
    },
    didYouKnow: '2024-2025 Pivot: MDMA-assisted therapy for PTSD shows promise, but FDA rejected initial application. Still being researched!',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'marijuana',
    name: 'Marijuana (Cannabis)',
    streetNames: ['Jutes', 'Maryjane', 'Kush', 'Weed', 'Pot'],
    classification: 'Schedule I Cannabinoid',
    primaryNeurotransmitter: 'Anandamide (Endocannabinoid)',
    mechanism: 'CB1 receptor agonism - mimics natural endocannabinoids, disrupts mood, memory, appetite regulation',
    effects: [
      'Relaxation and altered perception',
      'Increased appetite ("munchies")',
      'Euphoria and sensory enhancement',
      'Impaired memory and coordination'
    ],
    risks: [
      'Adolescent brain damage - disrupts prefrontal cortex development',
      'Cannabinoid Hyperemesis Syndrome (CHS) - cyclical vomiting',
      'Diagnostic clue: Scalding hot showers relieve nausea',
      'Cross-sensitization - primes brain for other drugs',
      'Amotivation syndrome with chronic use'
    ],
    philippineStats: {
      prevalence: '24.96% of treatment admissions',
      seizures2025: '546,000g kush + millions of plants',
      demographics: 'Shift to high-potency concentrates (80-90% THC)'
    },
    didYouKnow: 'High-potency cannabis (dabs, vapes) is NOT the same as 1970s marijuana. THC levels 6-9x higher!',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'ghb',
    name: 'GHB (Liquid G)',
    streetNames: ['Liquid G', 'G-Water', 'Fantasy', 'Gina'],
    classification: 'Schedule I Depressant',
    primaryNeurotransmitter: 'GABA',
    mechanism: 'GABA-B receptor agonism - central nervous system depression, similar to alcohol',
    effects: [
      'Relaxation and euphoria',
      'Increased libido and disinhibition',
      'Sedation and drowsiness',
      'Enhanced sociability'
    ],
    risks: [
      'Narrow therapeutic index - 1ml difference between high and coma',
      '"G-Nap" - sudden unconsciousness, users wake feeling refreshed (reinforces addiction)',
      'Fatal withdrawal - delirium, seizures (medical emergency)',
      'Chemsex context - blurred consent, STI transmission risk',
      'Respiratory depression, death'
    ],
    philippineStats: {
      prevalence: '<1% admissions, rising in urban MSM community',
      seizures2025: 'Limited data, underground market',
      demographics: 'Metro Manila chemsex scene (Tina + Gina combo)'
    },
    didYouKnow: '2025 Protocol: Baclofen (GABA-B agonist) for safer GHB withdrawal - mimics GHB action without danger!',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'cocaine',
    name: 'Cocaine',
    streetNames: ['Coke', 'White', 'Snow', 'Blow'],
    classification: 'Schedule II Stimulant',
    primaryNeurotransmitter: 'Dopamine',
    mechanism: 'Reuptake inhibition - blocks dopamine transporter, accumulates neurotransmitters in synapse',
    effects: [
      'Short, intense euphoria (15-30 min)',
      'Increased energy and confidence',
      'Hyper-alertness and focus',
      'Reduced appetite'
    ],
    risks: [
      'Cardiac arrest and stroke',
      'Severe paranoia and psychosis',
      '"Speedballing" (cocaine + opioids) - high overdose risk',
      'Cocaethylene formation (cocaine + alcohol) - 20x more toxic',
      'Nasal septum perforation (snorting)'
    ],
    philippineStats: {
      prevalence: '<1% admissions',
      seizures2025: '174kg seized (rising trend)',
      demographics: 'High-cost limits reach, transshipment hub concern'
    },
    didYouKnow: '2025 Discovery: GLP-1 receptors (Ozempic target) in lateral habenula reduce cocaine cravings. Diabetes drugs as addiction treatment!',
    color: 'from-slate-500 to-gray-500'
  }
];

export default function SubstanceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentSubstance = substances[currentIndex];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % substances.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + substances.length) % substances.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Understanding Substances
        </h2>
        <p className="text-slate-300">
          Explore the science behind 5 key substances, their effects, risks, and Philippine-specific data
        </p>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="w-full"
          >
            <div className={`bg-gradient-to-br ${currentSubstance.color} p-1 rounded-2xl`}>
              <div className="bg-slate-900 rounded-2xl p-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-bold">{currentSubstance.name}</h3>
                    <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-semibold">
                      {currentSubstance.classification}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentSubstance.streetNames.map((name, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300">
                        {name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mechanism */}
                <div className="mb-6 p-4 bg-slate-800/50 rounded-xl border border-cyan-500/20">
                  <div className="flex items-start gap-3">
                    <Brain className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-2 text-cyan-400">How It Works</h4>
                      <p className="text-sm text-slate-300 mb-2">
                        <strong>Primary Target:</strong> {currentSubstance.primaryNeurotransmitter}
                      </p>
                      <p className="text-sm text-slate-300">{currentSubstance.mechanism}</p>
                    </div>
                  </div>
                </div>

                {/* Grid Layout */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Effects */}
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      Effects
                    </h4>
                    <ul className="space-y-2">
                      {currentSubstance.effects.map((effect, i) => (
                        <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          <span>{effect}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Risks */}
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                      Risks
                    </h4>
                    <ul className="space-y-2">
                      {currentSubstance.risks.map((risk, i) => (
                        <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          <span>{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Philippine Stats */}
                <div className="mb-6 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                  <h4 className="font-bold mb-3 text-blue-400">📊 Philippine Statistics (2024-2025)</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-slate-400 mb-1">Prevalence</p>
                      <p className="font-semibold text-slate-200">{currentSubstance.philippineStats.prevalence}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 mb-1">Seizures 2025</p>
                      <p className="font-semibold text-slate-200">{currentSubstance.philippineStats.seizures2025}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 mb-1">Demographics</p>
                      <p className="font-semibold text-slate-200">{currentSubstance.philippineStats.demographics}</p>
                    </div>
                  </div>
                </div>

                {/* Did You Know */}
                <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
                  <div className="flex items-start gap-3">
                    <Heart className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-2 text-cyan-400">💡 Did You Know?</h4>
                      <p className="text-sm text-slate-300">{currentSubstance.didYouKnow}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors border border-slate-700"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors border border-slate-700"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {substances.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'w-8 bg-cyan-500' : 'bg-slate-700 hover:bg-slate-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
