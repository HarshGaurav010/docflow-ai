import React from 'react';
import { Zap, ShieldCheck, TrendingUp, History } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      title: '10x Faster Processing',
      description: 'Ditch manual keying. Process hundreds of invoices in minutes rather than hours.',
      icon: Zap,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    },
    {
      title: '98%+ Extraction Accuracy',
      description: 'Advanced OCR & field parsing ensures totals, line items, and taxes are accurately captured.',
      icon: ShieldCheck,
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    },
    {
      title: 'Zero Duplicate Payments',
      description: 'Real-time duplicate detection stops double-billing and vendor mismatches automatically.',
      icon: TrendingUp,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      title: 'Complete Audit Trail',
      description: 'Every edit, approval, and workflow decision is timestamped for complete compliance.',
      icon: History,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    },
  ];

  return (
    <section id="benefits" className="py-24 border-b border-slate-800/60 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400">Why DocFlow AI</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
            Built for Growth-Minded Business Teams
          </p>
          <p className="mt-4 text-slate-400 text-base">
            Empower your finance team with automated confidence and effortless document management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md hover:border-slate-700 transition-colors"
              >
                <div className={`p-3 rounded-xl border w-fit ${b.color} mb-5`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{b.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
