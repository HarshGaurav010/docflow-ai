import React from 'react';
import { Zap, ShieldCheck, CopyCheck, History } from 'lucide-react';

const benefits = [
  {
    title: '10x Faster Processing',
    description: 'Ditch manual keying. Process hundreds of invoices in minutes rather than hours.',
    icon: Zap,
    accentColor: 'text-amber-400',
    bg: 'from-amber-500/10 to-amber-500/4',
    border: 'border-amber-500/20',
    glow: 'shadow-amber-500/15',
    hoverGlow: 'group-hover:shadow-amber-500/25',
    dotColor: 'bg-amber-400',
    stat: '10x',
    statLabel: 'faster',
  },
  {
    title: '98%+ Extraction Accuracy',
    description: 'Advanced AI field parsing ensures totals, line items, and taxes are accurately captured.',
    icon: ShieldCheck,
    accentColor: 'text-indigo-400',
    bg: 'from-indigo-500/10 to-indigo-500/4',
    border: 'border-indigo-500/20',
    glow: 'shadow-indigo-500/15',
    hoverGlow: 'group-hover:shadow-indigo-500/25',
    dotColor: 'bg-indigo-400',
    stat: '98%+',
    statLabel: 'accuracy',
  },
  {
    title: 'Zero Duplicate Payments',
    description: 'Real-time duplicate detection stops double-billing and vendor mismatches automatically.',
    icon: CopyCheck,
    accentColor: 'text-emerald-400',
    bg: 'from-emerald-500/10 to-emerald-500/4',
    border: 'border-emerald-500/20',
    glow: 'shadow-emerald-500/15',
    hoverGlow: 'group-hover:shadow-emerald-500/25',
    dotColor: 'bg-emerald-400',
    stat: '0',
    statLabel: 'duplicates',
  },
  {
    title: 'Complete Audit Trail',
    description: 'Every edit, approval, and workflow decision is timestamped for full compliance.',
    icon: History,
    accentColor: 'text-cyan-400',
    bg: 'from-cyan-500/10 to-cyan-500/4',
    border: 'border-cyan-500/20',
    glow: 'shadow-cyan-500/15',
    hoverGlow: 'group-hover:shadow-cyan-500/25',
    dotColor: 'bg-cyan-400',
    stat: '100%',
    statLabel: 'traceable',
  },
];

export const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="gsap-section py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-900/60 px-3.5 py-1 text-xs font-semibold text-slate-400 mb-4">
            Why DocFlow AI
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
            Built for Growth-Minded<br />
            <span className="gradient-text">Business Teams</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Empower your finance team with automated confidence and effortless document management.
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className={`gsap-benefit-card group relative rounded-2xl border ${b.border} bg-gradient-to-br ${b.bg} p-6 backdrop-blur-sm overflow-hidden hover:-translate-y-1.5 hover:border-opacity-60 transition-all duration-300 shadow-lg ${b.glow} ${b.hoverGlow}`}
              >
                {/* Subtle corner glow */}
                <div className={`absolute -top-8 -right-8 w-24 h-24 ${b.dotColor.replace('bg-', 'bg-')}/8 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative">
                  {/* Stat display */}
                  <div className="mb-5 flex items-start justify-between">
                    <div className={`p-2.5 rounded-xl border ${b.border} bg-slate-900/60`}>
                      <Icon className={`h-5 w-5 ${b.accentColor}`} />
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-black ${b.accentColor} leading-none`}>{b.stat}</div>
                      <div className="text-[9px] text-slate-500 uppercase tracking-widest font-semibold mt-0.5">{b.statLabel}</div>
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-2 leading-snug">{b.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{b.description}</p>

                  {/* Bottom accent line */}
                  <div className={`mt-5 h-px w-full bg-gradient-to-r from-transparent via-${b.dotColor.replace('bg-', '')} to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
