import Link from "next/link";
import { ArrowRight, Brain, BarChart3, Users, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-cyan-950/20 to-slate-950">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>100% Free • Privacy-First • Evidence-Based</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Track Recovery with{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI & Analytics
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-slate-400 max-w-3xl mx-auto mb-12">
              Visualize your journey, get AI-powered insights, and connect with a supportive community.
              Your recovery, backed by data and science.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/tools/"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                Start Tracking Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800/50 border border-slate-700 rounded-lg font-semibold text-slate-200 hover:bg-slate-800 transition-colors"
              >
                See How It Works
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 pt-16 border-t border-slate-800">
              <div>
                <div className="text-3xl font-bold text-cyan-400">10K+</div>
                <div className="text-sm text-slate-500 mt-1">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">95%</div>
                <div className="text-sm text-slate-500 mt-1">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">24/7</div>
                <div className="text-sm text-slate-500 mt-1">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need to{" "}
              <span className="text-cyan-400">Succeed</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Modern tools designed for Gen Z & Millennials. Data-driven, AI-powered, community-supported.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1: Interactive Analytics */}
            <div className="group relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Interactive Analytics</h3>
              <p className="text-slate-400 mb-4">
                Visualize your progress with beautiful charts. Filter by demographics, gender, substance type, and more.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                  Real-time mood tracking
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                  Sleep & cravings heatmaps
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                  Export to CSV/PDF
                </li>
              </ul>
            </div>

            {/* Feature 2: AI Companion */}
            <div className="group relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Insights</h3>
              <p className="text-slate-400 mb-4">
                24/7 AI companion that understands your journey. Get personalized coping strategies and crisis support.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-400 rounded-full" />
                  Sentiment analysis
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-400 rounded-full" />
                  Trigger detection
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-400 rounded-full" />
                  Predictive insights
                </li>
              </ul>
            </div>

            {/* Feature 3: Community */}
            <div className="group relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Supportive Community</h3>
              <p className="text-slate-400 mb-4">
                Connect anonymously with others on the same journey. Share wins, get support, stay motivated.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-purple-400 rounded-full" />
                  Anonymous posting
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-purple-400 rounded-full" />
                  Research knowledge base
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-purple-400 rounded-full" />
                  Evidence-based FAQ
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-cyan-950/20 via-slate-950 to-blue-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Start Your Data-Driven Recovery?
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            Join thousands tracking their progress with Bio-Reclaim. Completely free, forever.
          </p>
          <Link
            href="/tools/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-slate-500 text-sm">
            <p>© 2026 Bio-Reclaim. Free recovery tracking with AI & analytics.</p>
            <p className="mt-2">Privacy-first • Evidence-based • Community-driven</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
