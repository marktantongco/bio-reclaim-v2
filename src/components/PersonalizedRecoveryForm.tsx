// Personalized Recovery Journey Form
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User, Calendar, Heart, CheckCircle2, ArrowRight,
  Download, Share2, Pill, Apple, Brain
} from 'lucide-react';

interface FormData {
  substances: string[];
  sobrietyDuration: string;
  recoveryStage: string;
  supportSystem: boolean;
  coOccurringDisorders: string[];
  goals: string[];
}

interface Recommendation {
  category: string;
  icon: React.ReactNode;
  items: string[];
  color: string;
}

export default function PersonalizedRecoveryForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    substances: [],
    sobrietyDuration: '',
    recoveryStage: '',
    supportSystem: false,
    coOccurringDisorders: [],
    goals: []
  });
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [showResults, setShowResults] = useState(false);

  const substances = [
    { id: 'meth', label: 'Methamphetamine (Shabu)', neurotransmitter: 'Dopamine' },
    { id: 'mdma', label: 'Ecstasy (MDMA)', neurotransmitter: 'Serotonin' },
    { id: 'marijuana', label: 'Marijuana (Cannabis)', neurotransmitter: 'Endocannabinoid' },
    { id: 'ghb', label: 'GHB (Liquid G)', neurotransmitter: 'GABA' },
    { id: 'cocaine', label: 'Cocaine', neurotransmitter: 'Dopamine' },
    { id: 'alcohol', label: 'Alcohol', neurotransmitter: 'GABA' }
  ];

  const sobrietyOptions = [
    { value: 'less-1-month', label: 'Less than 1 month' },
    { value: '1-3-months', label: '1-3 months' },
    { value: '3-6-months', label: '3-6 months' },
    { value: '6-12-months', label: '6-12 months' },
    { value: 'over-1-year', label: 'Over 1 year' }
  ];

  const recoveryStages = [
    { value: 'detox', label: 'Detox Phase (Week 1-2)' },
    { value: 'therapy', label: 'Therapy Phase (Month 1-3)' },
    { value: 'mental-health', label: 'Mental Health Support (Month 3-6)' },
    { value: 'nutrition', label: 'Nutrition & Exercise (Month 6-12)' },
    { value: 'maintenance', label: 'Long-Term Maintenance (Year 1+)' }
  ];

  const disorders = [
    { id: 'depression', label: 'Depression' },
    { id: 'anxiety', label: 'Anxiety' },
    { id: 'ptsd', label: 'PTSD/Trauma' },
    { id: 'bipolar', label: 'Bipolar Disorder' },
    { id: 'none', label: 'None' }
  ];

  const goals = [
    { id: 'physical-health', label: 'Improve Physical Health' },
    { id: 'mental-health', label: 'Stabilize Mental Health' },
    { id: 'relationships', label: 'Rebuild Relationships' },
    { id: 'employment', label: 'Find/Maintain Employment' },
    { id: 'education', label: 'Continue Education' }
  ];

  const generateRecommendations = () => {
    const recs: Recommendation[] = [];

    // Supplement recommendations based on substances
    const supplementRec: Recommendation = {
      category: 'Supplements',
      icon: <Pill className="w-6 h-6" />,
      items: [],
      color: 'from-blue-500 to-cyan-500'
    };

    if (formData.substances.includes('meth') || formData.substances.includes('cocaine')) {
      supplementRec.items.push(
        'L-Tyrosine (500-1000mg/day) - Dopamine restoration',
        'NAC (600-1200mg/day) - Craving reduction, glutathione production',
        'Magnesium Glycinate (300-400mg nightly) - Anxiety, sleep'
      );
    }

    if (formData.substances.includes('mdma') || formData.coOccurringDisorders.includes('depression')) {
      supplementRec.items.push(
        '5-HTP (50-100mg) - Serotonin production',
        'Omega-3s (2000mg EPA/DHA) - Mood stability, brain repair'
      );
    }

    if (formData.substances.includes('alcohol') || formData.substances.includes('ghb')) {
      supplementRec.items.push(
        'Thiamine (B1) - Prevents Wernicke-Korsakoff syndrome',
        'Magnesium - GABA support, withdrawal relief'
      );
    }

    // Universal supplements
    supplementRec.items.push(
      'Creatine Monohydrate (5g/day) - Cognitive function, energy',
      'Vitamin D3 (2000-5000 IU) - Mood regulation, immune function'
    );

    recs.push(supplementRec);

    // Food recommendations
    const foodRec: Recommendation = {
      category: 'Brain-Healing Foods (Philippine Sources)',
      icon: <Apple className="w-6 h-6" />,
      items: [],
      color: 'from-green-500 to-emerald-500'
    };

    if (formData.substances.includes('meth') || formData.substances.includes('cocaine')) {
      foodRec.items.push(
        'Balut (Duck Embryo) - High protein, Tyrosine, Zinc',
        'Peanuts (Mani) - Tyrosine for dopamine, accessible snack',
        'Bangus (Milkfish) - Omega-3s for brain repair'
      );
    }

    if (formData.substances.includes('mdma') || formData.coOccurringDisorders.includes('depression')) {
      foodRec.items.push(
        'Bananas (Saging) - Tryptophan + B6 for serotonin',
        'Malunggay (Moringa) - "Miracle tree" with 92 nutrients'
      );
    }

    // Universal foods
    foodRec.items.push(
      'Kamote (Sweet Potato) - Stable blood sugar, mood regulation',
      'Coconut Water - Electrolyte restoration',
      'Calamansi Juice - Vitamin C, liver detox (better than grape juice!)',
      'Virgin Coconut Oil - MCTs for brain fuel'
    );

    // Foods to AVOID
    foodRec.items.push(
      '⚠️ AVOID: Pomelo/Suha (CYP3A4 inhibitor - drug toxicity risk)',
      '⚠️ AVOID: Grape juice, soda (sugar crashes mimic withdrawal)'
    );

    recs.push(foodRec);

    // Therapy recommendations
    const therapyRec: Recommendation = {
      category: 'Therapy & Support',
      icon: <Brain className="w-6 h-6" />,
      items: [],
      color: 'from-purple-500 to-pink-500'
    };

    if (formData.recoveryStage === 'detox') {
      therapyRec.items.push(
        'Medical detox supervision (especially for GHB/alcohol)',
        'Establish strict routine (Gracious Redundancy)',
        'Barangay Health Center support'
      );
    }

    if (formData.recoveryStage === 'therapy' || formData.coOccurringDisorders.length > 0) {
      therapyRec.items.push(
        'Cognitive Behavioral Therapy (CBT) - 2-3x per week',
        'Digital therapeutics: reSET app (FDA-approved)',
        'Yakap Bayan program - Free group therapy'
      );
    }

    if (formData.coOccurringDisorders.includes('ptsd')) {
      therapyRec.items.push(
        'EMDR (Eye Movement Desensitization and Reprocessing)',
        'MDMA-assisted therapy (research phase, not yet widely available in PH)'
      );
    }

    if (!formData.supportSystem) {
      therapyRec.items.push(
        '🚨 PRIORITY: Build support system - AA, NA, or Yakap Bayan',
        'Family involvement (Kapwa principle)',
        'Community volunteer work (removes social redundancy)'
      );
    }

    recs.push(therapyRec);

    // 2025 Treatment Innovations
    const innovationRec: Recommendation = {
      category: '2025 Treatment Innovations',
      icon: <Heart className="w-6 h-6" />,
      items: [],
      color: 'from-red-500 to-orange-500'
    };

    if (formData.substances.includes('meth')) {
      innovationRec.items.push(
        'ADAPT-2 Protocol: Naltrexone + Bupropion (27% reduction in use)',
        'TNF-alpha immunotherapy (research phase)',
        'Focused ultrasound neuromodulation (non-invasive brain reset)'
      );
    }

    if (formData.substances.includes('cocaine')) {
      innovationRec.items.push(
        'GLP-1 agonists (Ozempic/Semaglutide) - Reduces cravings (clinical trials 2025)'
      );
    }

    if (formData.substances.includes('ghb')) {
      innovationRec.items.push(
        'Baclofen protocol for safer GHB withdrawal'
      );
    }

    innovationRec.items.push(
      'Ibogaine for rapid withdrawal interruption (Stanford studies)',
      'Psilocybin-assisted therapy for neuroplasticity'
    );

    recs.push(innovationRec);

    setRecommendations(recs);
    setShowResults(true);
  };

  const handleSubmit = () => {
    generateRecommendations();
  };

  if (showResults) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-cyan-500/20"
        >
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold mb-2">Your Personalized Recovery Plan</h2>
            <p className="text-slate-300">
              Based on your responses, here are evidence-based recommendations tailored to your journey
            </p>
          </div>

          {/* Recommendations */}
          <div className="space-y-6">
            {recommendations.map((rec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl bg-gradient-to-r ${rec.color} bg-opacity-10 border border-opacity-20`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${rec.color} flex items-center justify-center`}>
                    {rec.icon}
                  </div>
                  <h3 className="text-xl font-bold">{rec.category}</h3>
                </div>
                <ul className="space-y-2">
                  {rec.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={() => window.print()}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 rounded-lg font-semibold hover:bg-slate-700 transition-all"
            >
              <Download className="w-5 h-5" />
              Download Plan
            </button>
            <button
              onClick={() => {
                setShowResults(false);
                setStep(1);
                setFormData({
                  substances: [],
                  sobrietyDuration: '',
                  recoveryStage: '',
                  supportSystem: false,
                  coOccurringDisorders: [],
                  goals: []
                });
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Start New Assessment
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Personalized Recovery Journey
        </h2>
        <p className="text-slate-300">
          Answer a few questions to receive tailored recommendations based on your unique situation
        </p>
      </div>

      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-slate-400">Step {step} of 5</span>
          <span className="text-sm font-semibold text-cyan-400">{Math.round((step / 5) * 100)}% Complete</span>
        </div>
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(step / 5) * 100}%` }}
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
          />
        </div>
      </div>

      {/* Form Steps */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-cyan-500/20"
        >
          {step === 1 && (
            <div>
              <h3 className="text-2xl font-bold mb-6">Which substances have you struggled with?</h3>
              <div className="space-y-3">
                {substances.map((substance) => (
                  <label
                    key={substance.id}
                    className="flex items-center gap-3 p-4 rounded-xl border-2 border-slate-700 hover:border-slate-600 cursor-pointer transition-all"
                  >
                    <input
                      type="checkbox"
                      checked={formData.substances.includes(substance.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({ ...formData, substances: [...formData.substances, substance.id] });
                        } else {
                          setFormData({ ...formData, substances: formData.substances.filter(s => s !== substance.id) });
                        }
                      }}
                      className="w-5 h-5 text-cyan-500"
                    />
                    <div className="flex-1">
                      <p className="font-semibold">{substance.label}</p>
                      <p className="text-sm text-slate-400">Primary target: {substance.neurotransmitter}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-2xl font-bold mb-6">How long have you been sober?</h3>
              <div className="space-y-3">
                {sobrietyOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.sobrietyDuration === option.value
                        ? 'border-cyan-500 bg-cyan-500/10'
                        : 'border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <input
                      type="radio"
                      name="sobriety"
                      checked={formData.sobrietyDuration === option.value}
                      onChange={() => setFormData({ ...formData, sobrietyDuration: option.value })}
                      className="w-5 h-5 text-cyan-500"
                    />
                    <p className="font-semibold">{option.label}</p>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-2xl font-bold mb-6">What phase of recovery are you in?</h3>
              <div className="space-y-3">
                {recoveryStages.map((stage) => (
                  <label
                    key={stage.value}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.recoveryStage === stage.value
                        ? 'border-cyan-500 bg-cyan-500/10'
                        : 'border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <input
                      type="radio"
                      name="stage"
                      checked={formData.recoveryStage === stage.value}
                      onChange={() => setFormData({ ...formData, recoveryStage: stage.value })}
                      className="w-5 h-5 text-cyan-500"
                    />
                    <p className="font-semibold">{stage.label}</p>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h3 className="text-2xl font-bold mb-6">Do you have any co-occurring mental health conditions?</h3>
              <div className="space-y-3">
                {disorders.map((disorder) => (
                  <label
                    key={disorder.id}
                    className="flex items-center gap-3 p-4 rounded-xl border-2 border-slate-700 hover:border-slate-600 cursor-pointer transition-all"
                  >
                    <input
                      type="checkbox"
                      checked={formData.coOccurringDisorders.includes(disorder.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({ ...formData, coOccurringDisorders: [...formData.coOccurringDisorders, disorder.id] });
                        } else {
                          setFormData({ ...formData, coOccurringDisorders: formData.coOccurringDisorders.filter(d => d !== disorder.id) });
                        }
                      }}
                      className="w-5 h-5 text-cyan-500"
                    />
                    <p className="font-semibold">{disorder.label}</p>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <h3 className="text-2xl font-bold mb-6">What are your recovery goals?</h3>
              <div className="space-y-3 mb-6">
                {goals.map((goal) => (
                  <label
                    key={goal.id}
                    className="flex items-center gap-3 p-4 rounded-xl border-2 border-slate-700 hover:border-slate-600 cursor-pointer transition-all"
                  >
                    <input
                      type="checkbox"
                      checked={formData.goals.includes(goal.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({ ...formData, goals: [...formData.goals, goal.id] });
                        } else {
                          setFormData({ ...formData, goals: formData.goals.filter(g => g !== goal.id) });
                        }
                      }}
                      className="w-5 h-5 text-cyan-500"
                    />
                    <p className="font-semibold">{goal.label}</p>
                  </label>
                ))}
              </div>

              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.supportSystem}
                    onChange={(e) => setFormData({ ...formData, supportSystem: e.target.checked })}
                    className="w-5 h-5 text-cyan-500"
                  />
                  <p className="font-semibold">I have a support system (family, friends, support group)</p>
                </label>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 bg-slate-800 rounded-lg font-semibold hover:bg-slate-700 transition-all"
              >
                Back
              </button>
            )}
            {step < 5 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
              >
                Continue
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all"
              >
                Generate My Plan
                <CheckCircle2 className="w-5 h-5" />
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
