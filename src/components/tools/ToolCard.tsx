import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface ToolCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: 'cyan' | 'amber' | 'indigo' | 'emerald' | 'rose' | 'violet';
  isComingSoon?: boolean;
}

export function ToolCard({ id, title, description, icon: Icon, color, isComingSoon = false }: ToolCardProps) {
  const colorStyles = {
    cyan: 'text-cyan-400 border-cyan-400/20 hover:border-cyan-400 shadow-neon-cyan',
    amber: 'text-amber-500 border-amber-500/20 hover:border-amber-500 shadow-neon-amber',
    indigo: 'text-indigo-400 border-indigo-400/20 hover:border-indigo-400 shadow-indigo-500/50',
    emerald: 'text-emerald-400 border-emerald-400/20 hover:border-emerald-400 shadow-emerald-500/50',
    rose: 'text-rose-400 border-rose-400/20 hover:border-rose-400 shadow-rose-500/50',
    violet: 'text-violet-400 border-violet-400/20 hover:border-violet-400 shadow-violet-500/50',
  };

  const bgStyles = {
    cyan: 'bg-cyan-950/30',
    amber: 'bg-amber-950/30',
    indigo: 'bg-indigo-950/30',
    emerald: 'bg-emerald-950/30',
    rose: 'bg-rose-950/30',
    violet: 'bg-violet-950/30',
  };

  const CardContent = (
    <div className={`h-full p-6 rounded-3xl border ${isComingSoon ? 'border-slate-800 bg-slate-900/50' : 'bg-slate-950 border-slate-700'} ${!isComingSoon && colorStyles[color].split(' ').filter(c => c.startsWith('hover')).join(' ')} transition-all duration-300 hover:-translate-y-1 group`}>
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${isComingSoon ? 'bg-slate-800 text-slate-600' : `${bgStyles[color]} ${colorStyles[color].split(' ')[0]}`} transition-colors`}>
        <Icon className="w-7 h-7" />
      </div>

      <h3 className={`text-xl font-bold mb-2 ${isComingSoon ? 'text-slate-500' : 'text-white'}`}>
        {title}
      </h3>

      <p className={`text-sm leading-relaxed ${isComingSoon ? 'text-slate-600' : 'text-slate-400 group-hover:text-slate-300'} transition-colors`}>
        {description}
      </p>

      {isComingSoon && (
        <div className="mt-4 inline-block px-2 py-1 rounded bg-slate-800 text-slate-500 text-[10px] font-mono uppercase tracking-wider">
          Coming Soon
        </div>
      )}
    </div>
  );

  if (isComingSoon) {
    return CardContent;
  }

  return (
    <Link href={`/tools/${id}`} className="block h-full">
      {CardContent}
    </Link>
  );
}
