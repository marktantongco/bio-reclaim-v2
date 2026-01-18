// Interactive Quiz Page
import { Metadata } from 'next';
import InteractiveQuiz from '@/components/InteractiveQuiz';

export const metadata: Metadata = {
  title: 'Recovery Knowledge Quiz | Test Your Understanding | Bio-Reclaim',
  description: 'Test your knowledge about substance use disorders, recovery pathways, and treatment options. 10 evidence-based questions with detailed explanations from 337+ research citations.',
  keywords: 'addiction quiz, recovery knowledge test, substance abuse education, shabu recovery quiz Philippines',
  openGraph: {
    title: 'Recovery Knowledge Quiz | Bio-Reclaim',
    description: 'Challenge yourself with 10 questions about addiction science and recovery',
    type: 'website',
  },
};

export default function QuizPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Quiz',
            name: 'Recovery Knowledge Quiz',
            description: 'Interactive quiz covering substance use disorders, recovery pathways, and treatment innovations',
            educationalLevel: 'Beginner to Advanced',
            assesses: 'Knowledge of addiction science, recovery protocols, and Filipino resources',
            educationalUse: 'Self-assessment',
            inLanguage: 'en-PH',
          }),
        }}
      />

      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Recovery Knowledge Quiz
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Challenge yourself with 10 evidence-based questions. Learn from detailed explanations
              backed by the latest 2024-2025 research.
            </p>
          </div>

          {/* Quiz Component */}
          <InteractiveQuiz />

          {/* Footer Info */}
          <div className="mt-12 p-6 bg-slate-900/50 rounded-xl border border-slate-800">
            <h3 className="font-bold mb-3 text-cyan-400">About This Quiz</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• 10 questions covering misconceptions, recovery science, and treatment options</li>
              <li>• Detailed explanations with research citations from 337+ sources</li>
              <li>• Philippine-specific context (Yakap Bayan, Balut, Malunggay, Pomelo warnings)</li>
              <li>• 2025 medical discoveries (GLP-1 agonists, TNF-alpha immunotherapy)</li>
              <li>• Retake as many times as you want to improve your score</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
