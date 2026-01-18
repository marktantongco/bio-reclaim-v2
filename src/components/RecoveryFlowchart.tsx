// Recovery Path Flowchart Component
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Droplets, Brain, Heart, Apple, Users,
  CheckCircle2, ArrowRight, X, Info
} from 'lucide-react';

interface RecoveryStage {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  duration: string;
  description: string;
  whatHappens: string[];
  supplements: string[];
  foods: string[];
  tips: string[];
  philippineContext?: string;
}

const recoveryStages: RecoveryStage[] = [
  {
    id: 'detox',
    title: 'Detox Phase',
    icon: <Droplets className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-500',
    duration: 'Week 1-2',
    description: 'The body clears substances, leading to withdrawal symptoms. This is the most physically challenging phase.',
    whatHappens: [
      'Acute withdrawal symptoms (anxiety, tremors, insomnia)',
      'Dopamine depletion causes severe anhedonia (inability to feel pleasure)',
      'Physical symptoms: sweating, nausea, muscle cramps',
      'Psychological: intense cravings, irritability, depression'
    ],
    supplements: [
      'Magnesium Glycinate (300-400mg nightly) - Muscle relaxation, anxiety relief',
      'NAC (600-1200mg/day) - Glutathione production, reduces cravings',
      'Vitamin B-Complex - Energy production, nerve function',
      'L-Glutamine (5g/day) - Gut healing, reduces sugar cravings'
    ],
    foods: [
      'Coconut Water - Electrolyte restoration (potassium, magnesium)',
      'Bananas (Saging) - Potassium, Vitamin B6 for serotonin',
      'Leafy Greens (Malunggay) - Magnesium, antioxidants',
      'Bone Broth - Collagen, amino acids for gut repair'
    ],
    tips: [
      'Establish strict routine (Gracious Redundancy) - wake, eat, sleep at same times',
      'Hydrate with 3-4 liters of water daily',
      'Avoid caffeine and sugar (mimics withdrawal symptoms)',
      'Hot/cold showers for symptom relief'
    ],
    philippineContext: 'In the Philippines, community-based detox through Barangay Health Centers provides accessible support. Family involvement (Kapwa principle) is crucial during this phase.'
  },
  {
    id: 'therapy',
    title: 'Therapy Phase',
    icon: <Brain className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500',
    duration: 'Month 1-3',
    description: 'Cognitive Behavioral Therapy (CBT) helps rewire thought patterns and identify triggers.',
    whatHappens: [
      'Learn to identify triggers (stress, people, places)',
      'Develop coping strategies for cravings',
      'Process underlying trauma (often drives addiction)',
      'Build new neural pathways (neuroplasticity)'
    ],
    supplements: [
      'L-Tyrosine (500-1000mg/day) - Dopamine precursor, motivation',
      'Omega-3s (2000mg EPA/DHA) - Brain membrane repair, mood stability',
      '5-HTP (50-100mg) - Serotonin production, emotional regulation',
      'Rhodiola Rosea - Stress adaptation, cortisol management'
    ],
    foods: [
      'Balut (Duck Embryo) - High protein, Tyrosine, Zinc for synaptic plasticity',
      'Bangus (Milkfish) - Omega-3s for cognitive function',
      'Eggs - Complete protein, choline for memory',
      'Tofu/Tempeh - Tyrosine, probiotics for gut-brain axis'
    ],
    tips: [
      'Attend CBT sessions 2-3x per week',
      'Use digital therapeutics (reSET app) for 24/7 support',
      'Practice mindfulness meditation (10-15 min daily)',
      'Journal triggers and emotional patterns'
    ],
    philippineContext: 'Yakap Bayan program provides free group therapy. MDMA-assisted therapy for trauma is emerging in research settings (not yet widely available in PH).'
  },
  {
    id: 'mental-health',
    title: 'Mental Health Support',
    icon: <Heart className="w-8 h-8" />,
    color: 'from-red-500 to-orange-500',
    duration: 'Month 3-6',
    description: 'Long-term emotional healing and building resilience against stress-induced relapse.',
    whatHappens: [
      'Address co-occurring disorders (depression, anxiety, PTSD)',
      'Stress acts as "switch" - high cortisol disables prefrontal cortex',
      'Build emotional regulation skills',
      'Develop healthy relationships and social support'
    ],
    supplements: [
      'Ashwagandha (300-500mg) - Cortisol reduction, stress resilience',
      'Magnesium L-Threonate - Crosses blood-brain barrier, anxiety relief',
      'Vitamin D3 (2000-5000 IU) - Mood regulation, immune function',
      'Probiotics (50B CFU) - Gut-brain axis, 95% of serotonin made in gut'
    ],
    foods: [
      'Malunggay (Moringa) - "Miracle tree" with 92 nutrients, 46 antioxidants',
      'Kamote (Sweet Potato) - Complex carbs for stable blood sugar/mood',
      'Fermented Foods (Kimchi, Yogurt) - Probiotics for gut health',
      'Dark Chocolate (70%+) - Flavonoids for mood, magnesium'
    ],
    tips: [
      'Build "Recovery Capital" - social and economic resources',
      'Join support groups (AA, NA, or Yakap Bayan)',
      'Practice stress management (exercise, meditation, nature)',
      'Identify and avoid high-risk situations'
    ],
    philippineContext: 'Stigma remains a barrier - healthcare workers need training. Economic redundancy (job loss) creates relapse risk. Yakap Bayan transforms "surrenderers" into community volunteers, removing social redundancy.'
  },
  {
    id: 'nutrition',
    title: 'Nutrition & Exercise',
    icon: <Apple className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500',
    duration: 'Month 6-12',
    description: 'Brain healing through targeted nutrition and physical activity. Neuroplasticity accelerates.',
    whatHappens: [
      'Dopamine receptors begin to regenerate',
      'Cognitive function improves (memory, focus, decision-making)',
      'Physical health restoration (weight, skin, teeth)',
      'Exercise releases endorphins, builds new neural pathways'
    ],
    supplements: [
      'Creatine Monohydrate (5g/day) - Cognitive function, energy, muscle recovery',
      'Coenzyme Q10 (100-200mg) - Mitochondrial energy, heart health',
      'Curcumin/Turmeric - Anti-inflammatory, neuro-protection',
      'Lion\'s Mane Mushroom - Nerve growth factor, neurogenesis'
    ],
    foods: [
      'Peanuts (Mani) - Tyrosine, magnesium, accessible street snack',
      'Virgin Coconut Oil - MCTs for brain fuel (bypasses insulin resistance)',
      'Calamansi Juice - Vitamin C, liver detox (BETTER than grape juice)',
      'Avocados - Healthy fats, Tyrosine, brain health'
    ],
    tips: [
      'Exercise 30-45 min daily (walking, jogging, farm work)',
      'Avoid: Pomelo/Suha (CYP3A4 inhibitor - drug toxicity risk)',
      'Avoid: Grape juice, soda (sugar crashes mimic withdrawal)',
      'Meal prep to maintain stable blood sugar'
    ],
    philippineContext: 'Farm therapy model (The Farm at San Benito) - planting, harvesting reconnects users to "slow rewards" vs. instant drug gratification. Rebuilds patience and work ethic.'
  },
  {
    id: 'maintenance',
    title: 'Long-Term Maintenance',
    icon: <Users className="w-8 h-8" />,
    color: 'from-cyan-500 to-blue-500',
    duration: 'Year 1+',
    description: 'Preventing relapse, maintaining support systems, and thriving in recovery.',
    whatHappens: [
      'Full cognitive recovery (if no permanent damage)',
      'Relapse risk decreases but never zero (stress is lifelong trigger)',
      'Social reintegration - employment, relationships, purpose',
      'Giving back to community (Yakap Bayan volunteers)'
    ],
    supplements: [
      'Maintenance doses of Omega-3s, Magnesium, Vitamin D',
      'Adaptogenic herbs (Ashwagandha, Rhodiola) for stress',
      'Probiotics for ongoing gut-brain health',
      'NAC as needed for craving management'
    ],
    foods: [
      'Mediterranean-style diet - fish, olive oil, vegetables, whole grains',
      'Continued avoidance of Pomelo/Suha if on medications',
      'Limit sugar and processed foods',
      'Focus on whole, nutrient-dense Philippine foods'
    ],
    tips: [
      'Continue therapy or support groups (relapse is a feature, not a bug)',
      'Build meaningful life purpose (work, hobbies, relationships)',
      'Help others in recovery (reinforces own sobriety)',
      'Celebrate milestones (30 days, 90 days, 1 year, etc.)'
    ],
    philippineContext: 'Yakap Bayan success stories show that when users are given community roles (disaster response, livelihood training), relapse rates drop. Converting "burden" into community asset.'
  }
];

export default function RecoveryFlowchart() {
  const [selectedStage, setSelectedStage] = useState<string | null>(null);

  const selectedStageData = recoveryStages.find(s => s.id === selectedStage);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Your Recovery Journey
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Recovery is not a straight line—it's a series of stages. Click each phase to explore what happens,
          what supplements help, and Filipino-specific resources.
        </p>
      </div>

      {/* Flowchart */}
      <div className="relative mb-12">
        {/* Connection Lines */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-red-500 via-green-500 to-cyan-500 opacity-20 -translate-y-1/2 hidden lg:block" />

        {/* Stages */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
          {recoveryStages.map((stage, index) => (
            <motion.button
              key={stage.id}
              onClick={() => setSelectedStage(stage.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-6 rounded-2xl border-2 transition-all ${
                selectedStage === stage.id
                  ? 'border-cyan-500 bg-slate-800'
                  : 'border-slate-700 bg-slate-900 hover:border-slate-600'
              }`}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center`}>
                {stage.icon}
              </div>
              <h3 className="font-bold mb-2">{stage.title}</h3>
              <p className="text-sm text-slate-400">{stage.duration}</p>
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-cyan-400">
                <Info className="w-4 h-4" />
                <span>Click to explore</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Stage Details Modal */}
      <AnimatePresence>
        {selectedStageData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedStage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-cyan-500/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className={`p-6 bg-gradient-to-r ${selectedStageData.color} rounded-t-2xl`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      {selectedStageData.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{selectedStageData.title}</h3>
                      <p className="text-white/80">{selectedStageData.duration}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedStage(null)}
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Description */}
                <div>
                  <p className="text-slate-300 text-lg">{selectedStageData.description}</p>
                </div>

                {/* What Happens */}
                <div>
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Brain className="w-5 h-5 text-cyan-400" />
                    What Happens During This Phase
                  </h4>
                  <ul className="space-y-2">
                    {selectedStageData.whatHappens.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Supplements */}
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-blue-400" />
                    Recommended Supplements
                  </h4>
                  <ul className="space-y-2">
                    {selectedStageData.supplements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300">
                        <ArrowRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Foods */}
                <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Apple className="w-5 h-5 text-green-400" />
                    Brain-Healing Foods (Philippine Sources)
                  </h4>
                  <ul className="space-y-2">
                    {selectedStageData.foods.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tips */}
                <div>
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-400" />
                    Practical Tips
                  </h4>
                  <ul className="space-y-2">
                    {selectedStageData.tips.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300">
                        <ArrowRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Philippine Context */}
                {selectedStageData.philippineContext && (
                  <div className="bg-cyan-500/10 rounded-xl p-4 border border-cyan-500/20">
                    <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-cyan-400" />
                      Philippine Context
                    </h4>
                    <p className="text-slate-300">{selectedStageData.philippineContext}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
