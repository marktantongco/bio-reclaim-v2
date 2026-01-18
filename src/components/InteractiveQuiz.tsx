// Interactive Quiz Component for Bio-Reclaim v2.0
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'misconception' | 'knowledge' | 'recovery';
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "True or False: Meth users can never fully recover.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "FALSE. Recovery is possible! While methamphetamine causes significant brain changes, neuroplasticity allows the brain to heal. With proper treatment, nutrition (like L-Tyrosine for dopamine restoration), and support, users can achieve full recovery. The ADAPT-2 protocol shows 27% reduction in meth use with Naltrexone + Bupropion.",
    category: 'misconception'
  },
  {
    id: 2,
    question: "Recovery only involves quitting drugs.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "FALSE. Recovery is holistic! It involves: 1) Physical healing (detox, nutrition), 2) Mental health therapy (CBT, trauma processing), 3) Social reintegration (Yakap Bayan program), 4) Neuroplasticity (building new habits through 'Gracious Redundancy'), and 5) Nutritional psychiatry (Balut for dopamine, Malunggay for serotonin).",
    category: 'misconception'
  },
  {
    id: 3,
    question: "Which of the following is the MOST important part of recovery?",
    options: ["Detox", "Mental health therapy", "Nutrition", "All of the above"],
    correctAnswer: 3,
    explanation: "ALL OF THE ABOVE. Recovery requires a multi-faceted approach: Detox removes substances, therapy rewires thought patterns, and nutrition rebuilds neurotransmitters. The 2025 research shows that combining pharmacological (GLP-1 agonists), psychological (CBT), and nutritional (Tyrosine-rich foods) interventions yields the best outcomes.",
    category: 'knowledge'
  },
  {
    id: 4,
    question: "Which supplement helps restore dopamine during recovery?",
    options: ["Magnesium", "NAC", "B-Complex", "L-Tyrosine"],
    correctAnswer: 3,
    explanation: "L-TYROSINE. Dopamine is synthesized from L-Tyrosine → L-DOPA → Dopamine. Philippine sources include Balut (duck embryo), peanuts (mani), tofu, and bangus. Meth depletes dopamine by up to 1,000x normal levels, so rebuilding these stores is critical for alleviating cravings and restoring motivation.",
    category: 'knowledge'
  },
  {
    id: 5,
    question: "What's the first stage of recovery?",
    options: ["Detox", "Therapy", "Mental health support", "Nutrition"],
    correctAnswer: 0,
    explanation: "DETOX. The first step is removing substances from the body. During detox, Magnesium Glycinate (300-400mg nightly) helps with muscle cramps and anxiety. Hydration with coconut water restores electrolytes. The 'Gracious Redundancy' concept means establishing a strict routine to externalize executive function while the brain heals.",
    category: 'recovery'
  },
  {
    id: 6,
    question: "Which food helps restore neurotransmitter function during recovery?",
    options: ["Avocados", "Sugar", "Processed meats", "Fried foods"],
    correctAnswer: 0,
    explanation: "AVOCADOS. Rich in healthy fats and Tyrosine, avocados support brain health. AVOID: Sugar (causes insulin crashes that mimic withdrawal), processed meats (nitrates increase inflammation), and Pomelo/Suha (CYP3A4 inhibitor that causes drug toxicity). Instead, eat: Malunggay (serotonin), Kamote (stable blood sugar), Calamansi (liver detox).",
    category: 'knowledge'
  },
  {
    id: 7,
    question: "Mental health therapy is only needed in the early stages of recovery.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "FALSE. Ongoing therapy is essential! The brain's shift from goal-directed to habitual control means that stress can instantly trigger relapse even after months of sobriety. Cortisol acts as a 'switch' that disables the prefrontal cortex. Continuous CBT, MDMA-assisted therapy for trauma, and digital therapeutics (reSET app) provide 24/7 support.",
    category: 'misconception'
  },
  {
    id: 8,
    question: "What's the most important supplement during the detox phase?",
    options: ["Magnesium", "Creatine", "Omega-3s", "Zinc"],
    correctAnswer: 0,
    explanation: "MAGNESIUM GLYCINATE. Meth drains magnesium, leaving users anxious and unable to sleep. Magnesium relaxes muscles, soothes nerves, and supports GABA (brain's 'brake pedal'). Dosage: 300-400mg nightly. Philippine sources: Peanuts, leafy greens (malunggay). Also critical: NAC (600-1200mg/day) for glutathione production and craving reduction.",
    category: 'recovery'
  },
  {
    id: 9,
    question: "How long does recovery from meth addiction typically take?",
    options: ["Weeks", "Months", "Years", "A few days"],
    correctAnswer: 1,
    explanation: "MONTHS TO YEARS. Recovery timeline: Week 1-2 (acute withdrawal), Month 1-3 (PAWS - Post-Acute Withdrawal Syndrome), Month 3-6 (neuroplasticity begins), Month 6-12 (dopamine receptors regenerate), Year 1+ (full cognitive recovery). The 2025 ASCME trial uses Vyvanse as substitution therapy to stabilize brain chemistry during this process.",
    category: 'recovery'
  },
  {
    id: 10,
    question: "Nutrition plays a role in supporting the brain during recovery.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "TRUE! Nutritional psychiatry is critical. The brain needs: 1) Tyrosine (Balut, tofu) for dopamine, 2) Tryptophan (bananas, malunggay) for serotonin, 3) Omega-3s (bangus) for membrane repair, 4) MCTs from Virgin Coconut Oil for brain fuel. AVOID: Grape juice (sugar spike), Pomelo/Suha (drug interaction), alcohol (cross-fading risk).",
    category: 'knowledge'
  }
];

export default function InteractiveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return; // Prevent changing answer after submission
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    setShowExplanation(true);
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizComplete(false);
  };

  const currentQ = quizQuestions[currentQuestion];
  const isCorrect = selectedAnswer === currentQ.correctAnswer;

  if (quizComplete) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    const passed = percentage >= 70;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-cyan-500/20"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className={`w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center ${
              passed ? 'bg-green-500/20' : 'bg-orange-500/20'
            }`}
          >
            <span className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {percentage}%
            </span>
          </motion.div>

          <h2 className="text-3xl font-bold mb-4">
            {passed ? '🎉 Excellent Work!' : '💪 Keep Learning!'}
          </h2>

          <p className="text-slate-300 mb-2">
            You scored <span className="font-bold text-cyan-400">{score} out of {quizQuestions.length}</span>
          </p>

          <div className="my-8 p-6 bg-slate-800/50 rounded-xl border border-slate-700">
            <h3 className="font-semibold mb-3 text-cyan-400">Your Recovery Knowledge Level:</h3>
            {percentage >= 90 && (
              <p className="text-slate-300">
                <strong className="text-green-400">Expert Level!</strong> You have exceptional understanding of recovery science.
                Consider sharing this knowledge with others in the Yakap Bayan program.
              </p>
            )}
            {percentage >= 70 && percentage < 90 && (
              <p className="text-slate-300">
                <strong className="text-cyan-400">Advanced!</strong> You have solid knowledge of recovery principles.
                Review the explanations to fill in any gaps.
              </p>
            )}
            {percentage >= 50 && percentage < 70 && (
              <p className="text-slate-300">
                <strong className="text-orange-400">Intermediate.</strong> You're on the right track!
                Spend more time with our educational resources to deepen your understanding.
              </p>
            )}
            {percentage < 50 && (
              <p className="text-slate-300">
                <strong className="text-red-400">Beginner.</strong> Don't worry - recovery is complex!
                Read through our comprehensive guides and retake the quiz.
              </p>
            )}
          </div>

          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
          >
            <RotateCcw className="w-5 h-5" />
            Retake Quiz
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-slate-400">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </span>
          <span className="text-sm font-semibold text-cyan-400">
            Score: {score}/{quizQuestions.length}
          </span>
        </div>
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
          />
        </div>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-cyan-500/20"
        >
          {/* Category Badge */}
          <div className="mb-4">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
              currentQ.category === 'misconception' ? 'bg-red-500/20 text-red-400' :
              currentQ.category === 'knowledge' ? 'bg-blue-500/20 text-blue-400' :
              'bg-green-500/20 text-green-400'
            }`}>
              {currentQ.category === 'misconception' ? '🔍 Myth Buster' :
               currentQ.category === 'knowledge' ? '🧠 Knowledge Check' :
               '🛤️ Recovery Path'}
            </span>
          </div>

          {/* Question */}
          <h3 className="text-2xl font-bold mb-6 text-slate-100">
            {currentQ.question}
          </h3>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {currentQ.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrectAnswer = index === currentQ.correctAnswer;
              const showResult = showExplanation;

              return (
                <motion.button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                  whileHover={{ scale: showExplanation ? 1 : 1.02 }}
                  whileTap={{ scale: showExplanation ? 1 : 0.98 }}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                    showResult && isCorrectAnswer
                      ? 'border-green-500 bg-green-500/10'
                      : showResult && isSelected && !isCorrectAnswer
                      ? 'border-red-500 bg-red-500/10'
                      : isSelected
                      ? 'border-cyan-500 bg-cyan-500/10'
                      : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{option}</span>
                    {showResult && isCorrectAnswer && (
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    )}
                    {showResult && isSelected && !isCorrectAnswer && (
                      <XCircle className="w-6 h-6 text-red-500" />
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className={`p-4 rounded-xl mb-6 ${
                  isCorrect ? 'bg-green-500/10 border border-green-500/20' : 'bg-orange-500/10 border border-orange-500/20'
                }`}
              >
                <div className="flex items-start gap-3">
                  {isCorrect ? (
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  ) : (
                    <XCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  )}
                  <div>
                    <p className="font-semibold mb-2 text-slate-100">
                      {isCorrect ? '✅ Correct!' : '📚 Learn More:'}
                    </p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {currentQ.explanation}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {!showExplanation ? (
              <button
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
              >
                {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'See Results'}
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
