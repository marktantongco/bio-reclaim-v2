import { PhilippineAnalyticsDashboard } from '@/components/PhilippineAnalyticsDashboard';

export const metadata = {
  title: 'Dashboard - Bio-Reclaim',
  description: 'Visualize your recovery journey with interactive analytics.',
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Recovery Dashboard</h1>
          <p className="text-slate-400">Your personal recovery insights and analytics.</p>
        </div>
        <PhilippineAnalyticsDashboard />
      </div>
    </main>
  );
}
