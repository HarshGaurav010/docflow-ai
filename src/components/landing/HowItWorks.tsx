import React from 'react';
import { Upload, Cpu, ShieldCheck, CheckSquare } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Upload Invoice',
      description: 'Drag & drop PDF, PNG, or JPG invoices. Bulk processing supported.',
      icon: Upload,
      color: 'from-blue-500/20 to-indigo-500/10 text-blue-400 border-blue-500/30',
    },
    {
      num: '02',
      title: 'AI Analysis & Extraction',
      description: 'AI extracts vendor, dates, subtotal, tax, currency, and line items instantly.',
      icon: Cpu,
      color: 'from-indigo-500/20 to-purple-500/10 text-indigo-400 border-indigo-500/30',
    },
    {
      num: '03',
      title: 'Validation & Duplicate Check',
      description: 'Rules check tax compliance, vendor validity, and flags duplicates.',
      icon: ShieldCheck,
      color: 'from-purple-500/20 to-pink-500/10 text-purple-400 border-purple-500/30',
    },
    {
      num: '04',
      title: 'Auto Approval or Review',
      description: 'Clean invoices under threshold auto-approve. Exceptions route for review.',
      icon: CheckSquare,
      color: 'from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/30',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400">Step-by-Step Workflow</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
            How DocFlow AI Automates Your Invoices
          </p>
          <p className="mt-4 text-slate-400 text-base">
            From raw document drop to approved payout in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="gsap-workflow-card rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md relative flex flex-col justify-between hover:border-indigo-500/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl border bg-gradient-to-br ${step.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-700 group-hover:text-indigo-400/40 transition-colors">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
