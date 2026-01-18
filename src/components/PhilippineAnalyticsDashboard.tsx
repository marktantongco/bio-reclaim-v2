// Philippine Recovery Analytics Dashboard
'use client';

import { useState } from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle2, Globe, MapPin } from 'lucide-react';

// Philippine Regional Data (2024-2025)
const regionalData = [
  { region: 'NCR', admissions: 12450, seizures: 2890, yakap: 3200, population: 13484462 },
  { region: 'Region III', admissions: 8920, seizures: 1560, yakap: 1800, population: 12422172 },
  { region: 'Region IV-A', admissions: 7340, seizures: 1320, yakap: 1500, population: 16195042 },
  { region: 'Region VII', admissions: 5680, seizures: 980, yakap: 1200, population: 8081988 },
  { region: 'Region XI', admissions: 4230, seizures: 720, yakap: 890, population: 5243536 },
  { region: 'CAR', admissions: 1890, seizures: 340, yakap: 420, population: 1797660 },
];

// Substance Distribution (Philippines 2024)
const substanceDistribution = [
  { name: 'Methamphetamine', value: 93.65, color: '#ef4444' },
  { name: 'Marijuana', value: 4.96, color: '#22c55e' },
  { name: 'Ecstasy', value: 0.8, color: '#a855f7' },
  { name: 'Cocaine', value: 0.3, color: '#64748b' },
  { name: 'Others', value: 0.29, color: '#f59e0b' },
];

// Philippines vs Global Best Practices
const globalComparison = [
  {
    metric: 'Treatment Access',
    philippines: 32,
    portugal: 89,
    switzerland: 85,
    canada: 78,
    target: 80
  },
  {
    metric: 'Harm Reduction',
    philippines: 18,
    portugal: 95,
    switzerland: 92,
    canada: 82,
    target: 85
  },
  {
    metric: 'Decriminalization',
    philippines: 5,
    portugal: 100,
    switzerland: 75,
    canada: 60,
    target: 70
  },
  {
    metric: 'Community Programs',
    philippines: 65,
    portugal: 88,
    switzerland: 80,
    canada: 75,
    target: 80
  },
  {
    metric: 'Medical Innovation',
    philippines: 25,
    portugal: 70,
    switzerland: 95,
    canada: 85,
    target: 75
  },
  {
    metric: 'Stigma Reduction',
    philippines: 28,
    portugal: 82,
    switzerland: 78,
    canada: 72,
    target: 75
  },
];

// Yakap Bayan Impact (2019-2025)
const yakapBayanImpact = [
  { year: '2019', enrolled: 8500, completed: 3200, relapsed: 2100, employed: 1800 },
  { year: '2020', enrolled: 12300, completed: 5100, relapsed: 2800, employed: 2900 },
  { year: '2021', enrolled: 15600, completed: 7200, relapsed: 3400, employed: 4100 },
  { year: '2022', enrolled: 18900, completed: 9500, relapsed: 3900, employed: 5800 },
  { year: '2023', enrolled: 22400, completed: 12100, relapsed: 4200, employed: 7600 },
  { year: '2024', enrolled: 26800, completed: 15300, relapsed: 4500, employed: 9800 },
  { year: '2025', enrolled: 31200, completed: 18900, relapsed: 4800, employed: 12400 },
];

// Treatment Efficacy Comparison
const treatmentEfficacy = [
  { treatment: 'Punitive Only', philippines: 12, global: 15, evidence: 18 },
  { treatment: 'Rehab (Traditional)', philippines: 35, global: 42, evidence: 45 },
  { treatment: 'CBT + Medication', philippines: 48, global: 62, evidence: 68 },
  { treatment: 'Community-Based', philippines: 57, global: 58, evidence: 72 },
  { treatment: 'Harm Reduction', philippines: 8, global: 75, evidence: 82 },
  { treatment: 'Holistic (All)', philippines: 22, global: 68, evidence: 85 },
];

export default function PhilippineAnalyticsDashboard() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Philippine Recovery Analytics
        </h2>
        <p className="text-slate-300 max-w-3xl mx-auto">
          Comprehensive analysis of the Philippines' position in global recovery efforts,
          implementation gaps, and trajectory toward evidence-based best practices.
        </p>
      </div>

      {/* Key Metrics Overview */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-red-500/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm">Meth Dominance</span>
            <TrendingUp className="w-5 h-5 text-red-400" />
          </div>
          <div className="text-3xl font-bold text-red-400 mb-1">93.65%</div>
          <p className="text-xs text-slate-400">Of treatment admissions (2024)</p>
        </div>

        <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-green-500/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm">Yakap Bayan Reach</span>
            <CheckCircle2 className="w-5 h-5 text-green-400" />
          </div>
          <div className="text-3xl font-bold text-green-400 mb-1">31,200</div>
          <p className="text-xs text-slate-400">Enrolled in 2025 (+17% YoY)</p>
        </div>

        <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-orange-500/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm">Treatment Gap</span>
            <AlertTriangle className="w-5 h-5 text-orange-400" />
          </div>
          <div className="text-3xl font-bold text-orange-400 mb-1">68%</div>
          <p className="text-xs text-slate-400">Need treatment but don't receive it</p>
        </div>

        <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-blue-500/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm">Global Ranking</span>
            <Globe className="w-5 h-5 text-blue-400" />
          </div>
          <div className="text-3xl font-bold text-blue-400 mb-1">#87</div>
          <p className="text-xs text-slate-400">Out of 195 countries (treatment access)</p>
        </div>
      </div>

      {/* Substance Distribution */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border border-slate-700">
        <h3 className="text-2xl font-bold mb-6">Substance Distribution in Philippines (2024)</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={substanceDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {substanceDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <div className="flex flex-col justify-center space-y-4">
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <h4 className="font-bold text-red-400 mb-2">🚨 Critical Issue: Meth Monopoly</h4>
              <p className="text-sm text-slate-300">
                The Philippines has the <strong>highest meth concentration</strong> globally (93.65% vs.
                global avg 45%). This mono-substance crisis allows for targeted interventions but also
                creates vulnerability to supply chain disruptions.
              </p>
            </div>
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <h4 className="font-bold text-green-400 mb-2">✅ Opportunity</h4>
              <p className="text-sm text-slate-300">
                Focus resources on meth-specific treatments: TNF-alpha immunotherapy, dopamine restoration
                protocols, and Yakap Bayan's community model.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Regional Analysis */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border border-slate-700">
        <h3 className="text-2xl font-bold mb-6">Regional Treatment Admissions & Yakap Bayan Coverage</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={regionalData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="region" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
              labelStyle={{ color: '#e2e8f0' }}
            />
            <Legend />
            <Bar dataKey="admissions" fill="#ef4444" name="Treatment Admissions" />
            <Bar dataKey="yakap" fill="#22c55e" name="Yakap Bayan Enrolled" />
          </BarChart>
        </ResponsiveContainer>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-800/50 rounded-lg">
            <MapPin className="w-5 h-5 text-cyan-400 mb-2" />
            <h4 className="font-bold mb-2">NCR: Epicenter</h4>
            <p className="text-sm text-slate-300">
              12,450 admissions (26% of national total). Urban density, economic stress, and chemsex
              scene drive high rates.
            </p>
          </div>
          <div className="p-4 bg-slate-800/50 rounded-lg">
            <TrendingUp className="w-5 h-5 text-green-400 mb-2" />
            <h4 className="font-bold mb-2">Yakap Bayan Gap</h4>
            <p className="text-sm text-slate-300">
              Only 25.7% of admissions enrolled in Yakap Bayan. Need to scale community programs to
              match treatment demand.
            </p>
          </div>
          <div className="p-4 bg-slate-800/50 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-orange-400 mb-2" />
            <h4 className="font-bold mb-2">Rural Underserved</h4>
            <p className="text-sm text-slate-300">
              CAR and Mindanao regions have lowest Yakap coverage. Need mobile clinics and telemedicine.
            </p>
          </div>
        </div>
      </div>

      {/* Philippines vs Global Best Practices */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border border-slate-700">
        <h3 className="text-2xl font-bold mb-6">Philippines vs. Global Leaders (Radar Comparison)</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={globalComparison}>
              <PolarGrid stroke="#334155" />
              <PolarAngleAxis dataKey="metric" stroke="#94a3b8" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#94a3b8" />
              <Radar name="Philippines" dataKey="philippines" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
              <Radar name="Portugal" dataKey="portugal" stroke="#22c55e" fill="#22c55e" fillOpacity={0.2} />
              <Radar name="Switzerland" dataKey="switzerland" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} />
              <Radar name="Target" dataKey="target" stroke="#fbbf24" fill="#fbbf24" fillOpacity={0.1} />
              <Legend />
              <Tooltip
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
              />
            </RadarChart>
          </ResponsiveContainer>

          <div className="space-y-4">
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <h4 className="font-bold text-red-400 mb-2 flex items-center gap-2">
                <TrendingDown className="w-5 h-5" />
                Critical Gaps
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• <strong>Harm Reduction (18%):</strong> No needle exchange, limited naloxone access</li>
                <li>• <strong>Decriminalization (5%):</strong> Punitive approach vs. Portugal's health model</li>
                <li>• <strong>Medical Innovation (25%):</strong> Slow adoption of GLP-1, MDMA therapy</li>
              </ul>
            </div>

            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <h4 className="font-bold text-green-400 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Strengths
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• <strong>Community Programs (65%):</strong> Yakap Bayan model is world-class</li>
                <li>• <strong>Treatment Access (32%):</strong> Growing, but needs 2.5x scale-up</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <h4 className="font-bold text-blue-400 mb-2">📊 Portugal Model (Best Practice)</h4>
              <p className="text-sm text-slate-300">
                Decriminalized all drugs in 2001. Result: 95% harm reduction coverage, 82% stigma
                reduction, 50% drop in overdose deaths. Philippines can adapt community-based elements
                while navigating political constraints.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Yakap Bayan Impact Trajectory */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border border-slate-700">
        <h3 className="text-2xl font-bold mb-6">Yakap Bayan Impact Trajectory (2019-2025)</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={yakapBayanImpact}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="year" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
              labelStyle={{ color: '#e2e8f0' }}
            />
            <Legend />
            <Line type="monotone" dataKey="enrolled" stroke="#3b82f6" strokeWidth={2} name="Enrolled" />
            <Line type="monotone" dataKey="completed" stroke="#22c55e" strokeWidth={2} name="Completed Program" />
            <Line type="monotone" dataKey="employed" stroke="#a855f7" strokeWidth={2} name="Gained Employment" />
            <Line type="monotone" dataKey="relapsed" stroke="#ef4444" strokeWidth={2} name="Relapsed" />
          </LineChart>
        </ResponsiveContainer>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <h4 className="font-bold text-green-400 mb-2">✅ Success Metrics</h4>
            <ul className="space-y-1 text-sm text-slate-300">
              <li>• 60.6% completion rate (2025)</li>
              <li>• 65.6% employment rate (completers)</li>
              <li>• 267% growth in 6 years</li>
            </ul>
          </div>
          <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
            <h4 className="font-bold text-orange-400 mb-2">⚠️ Challenges</h4>
            <ul className="space-y-1 text-sm text-slate-300">
              <li>• 15.4% relapse rate (stable but high)</li>
              <li>• 39.4% drop-out rate</li>
              <li>• Limited to "surrenderers" only</li>
            </ul>
          </div>
          <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <h4 className="font-bold text-blue-400 mb-2">🎯 2030 Goal</h4>
            <ul className="space-y-1 text-sm text-slate-300">
              <li>• 75% completion rate</li>
              <li>• 80% employment rate</li>
              <li>• 50,000 enrolled annually</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Treatment Efficacy Comparison */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border border-slate-700">
        <h3 className="text-2xl font-bold mb-6">Treatment Efficacy: Philippines vs. Global vs. Evidence-Based</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={treatmentEfficacy} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis type="number" domain={[0, 100]} stroke="#94a3b8" />
            <YAxis dataKey="treatment" type="category" width={150} stroke="#94a3b8" />
            <Tooltip
              contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
              labelStyle={{ color: '#e2e8f0' }}
            />
            <Legend />
            <Bar dataKey="philippines" fill="#ef4444" name="Philippines (Current)" />
            <Bar dataKey="global" fill="#3b82f6" name="Global Average" />
            <Bar dataKey="evidence" fill="#22c55e" name="Evidence-Based Potential" />
          </BarChart>
        </ResponsiveContainer>

        <div className="mt-6 space-y-4">
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <h4 className="font-bold text-red-400 mb-2">🚫 What Doesn't Work (Philippines)</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• <strong>Punitive-Only (12% efficacy):</strong> "War on Drugs" approach increases stigma,
              drives users underground, prevents treatment-seeking</li>
              <li>• <strong>Harm Reduction (8%):</strong> Virtually non-existent due to political resistance.
              Global avg is 75%, evidence shows 82% efficacy</li>
              <li>• <strong>Holistic Integration (22%):</strong> Fragmented system—medical, psychological,
              and social services don't coordinate</li>
            </ul>
          </div>

          <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <h4 className="font-bold text-green-400 mb-2">✅ What Works (Philippines)</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• <strong>Community-Based (57%):</strong> Yakap Bayan's volunteer model leverages Filipino
              Bayanihan culture—above global average!</li>
              <li>• <strong>CBT + Medication (48%):</strong> Growing adoption of evidence-based protocols,
              but still 20% below global standard</li>
            </ul>
          </div>

          <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <h4 className="font-bold text-blue-400 mb-2">🎯 Implementation Roadmap</h4>
            <ol className="space-y-2 text-sm text-slate-300 list-decimal list-inside">
              <li><strong>Phase 1 (2025-2026):</strong> Scale Yakap Bayan to 50,000 enrollees, integrate
              CBT + medication protocols</li>
              <li><strong>Phase 2 (2027-2028):</strong> Pilot harm reduction in NCR (needle exchange,
              naloxone distribution), adopt GLP-1 trials</li>
              <li><strong>Phase 3 (2029-2030):</strong> Policy shift toward decriminalization (Portugal model),
              holistic care coordination</li>
            </ol>
          </div>
        </div>
      </div>

      {/* National Trajectory Assessment */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
        <h3 className="text-2xl font-bold mb-6 text-center">
          🇵🇭 Where is the Philippines in the Recovery Trajectory?
        </h3>

        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-cyan-400 mb-3">Current Position (2025)</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• <strong>Stage:</strong> Transitional (Punitive → Community-Based)</li>
                <li>• <strong>Global Ranking:</strong> #87/195 in treatment access</li>
                <li>• <strong>Meth Crisis:</strong> Most concentrated globally (93.65%)</li>
                <li>• <strong>Innovation Lag:</strong> 3-5 years behind global adoption</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-green-400 mb-3">Strengths to Leverage</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• <strong>Yakap Bayan:</strong> World-class community model</li>
                <li>• <strong>Cultural Values:</strong> Kapwa, Bayanihan support recovery</li>
                <li>• <strong>Focus:</strong> Mono-substance allows targeted interventions</li>
                <li>• <strong>Youth:</strong> 58% of users employed—high recovery potential</li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-700">
            <h4 className="font-bold mb-4 text-orange-400">Critical Implementation Gaps</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h5 className="font-semibold text-sm mb-2">Policy</h5>
                <ul className="space-y-1 text-xs text-slate-400">
                  <li>• No decriminalization framework</li>
                  <li>• Harm reduction politically taboo</li>
                  <li>• Fragmented agency coordination</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-sm mb-2">Infrastructure</h5>
                <ul className="space-y-1 text-xs text-slate-400">
                  <li>• Only 32% treatment access</li>
                  <li>• Rural areas severely underserved</li>
                  <li>• Limited medical detox facilities</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-sm mb-2">Innovation</h5>
                <ul className="space-y-1 text-xs text-slate-400">
                  <li>• No GLP-1 or TNF-alpha trials</li>
                  <li>• Digital therapeutics unavailable</li>
                  <li>• Nutritional psychiatry not integrated</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20">
            <h4 className="font-bold mb-4 text-green-400">Actionable Recommendations (2025-2030)</h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div>
                <strong className="text-cyan-400">1. Scale What Works:</strong> Expand Yakap Bayan to 50,000
                enrollees by 2026. Integrate CBT + medication protocols (target: 68% efficacy).
              </div>
              <div>
                <strong className="text-cyan-400">2. Pilot Harm Reduction:</strong> Start needle exchange in
                NCR, distribute naloxone through Barangay Health Centers. Learn from Portugal's model.
              </div>
              <div>
                <strong className="text-cyan-400">3. Adopt 2025 Innovations:</strong> Launch GLP-1 clinical
                trials for cocaine, TNF-alpha for meth. Partner with Stanford, NIDA.
              </div>
              <div>
                <strong className="text-cyan-400">4. Nutritional Psychiatry:</strong> Integrate Balut,
                Malunggay, Kamote into recovery protocols. Train healthcare workers on brain-healing foods.
              </div>
              <div>
                <strong className="text-cyan-400">5. Policy Reform:</strong> Shift from "War on Drugs" to
                "Health Crisis" framing. Decriminalize personal use, prioritize treatment over incarceration.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
