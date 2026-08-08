import React from 'react';
import { Upload, Cpu, ShieldCheck, CheckSquare } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Upload Invoice',
    description: 'Drag & drop PDF, PNG, or JPG invoices. Bulk processing also supported.',
    icon: Upload,
    accentColor: 'text-blue-400',
    accentBg: 'from-blue-500/15 to-blue-500/5',
    accentBorder: 'border-blue-500/25',
    glowColor: 'bg-blue-500/8',
  },
  {
    num: '02',
    title: 'AI Analysis & Extraction',
    description: 'AI extracts vendor, dates, subtotal, tax, currency, and line items instantly.',
    icon: Cpu,
    accentColor: 'text-indigo-400',
    accentBg: 'from-indigo-500/15 to-indigo-500/5',
    accentBorder: 'border-indigo-500/25',
    glowColor: 'bg-indigo-500/8',
  },
  {
    num: '03',
    title: 'Validation & Duplicate Check',
    description: 'Rules check tax compliance, vendor validity, and flags duplicate invoices.',
    icon: ShieldCheck,
    accentColor: 'text-purple-400',
    accentBg: 'from-purple-500/15 to-purple-500/5',
    accentBorder: 'border-purple-500/25',
    glowColor: 'bg-purple-500/8',
  },
  {
    num: '04',
    title: 'Auto Approval or Review',
    description: 'Clean invoices under threshold auto-approve. Exceptions route for human review.',
    icon: CheckSquare,
    accentColor: 'text-emerald-400',
    accentBg: 'from-emerald-500/15 to-emerald-500/5',
    accentBorder: 'border-emerald-500/25',
    glowColor: 'bg-emerald-500/8',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="gsap-section py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-indigo-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-900/60 px-3.5 py-1 text-xs font-semibold text-slate-400 mb-4">
            Step-by-Step Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
            How DocFlow AI<br />
            <span className="gradient-text">Automates Your Invoices</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            From raw document drop to approved payout — in seconds.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connecting line on large screens */}
          <div className="hidden lg:block absolute top-[60px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="gsap-workflow-card group relative rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 backdrop-blur-sm hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Corner glow on hover */}
                  <div className={`absolute -bottom-8 -right-8 w-24 h-24 ${step.glowColor} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  <div className="relative">
                    {/* Step number + icon row */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`p-2.5 rounded-xl border ${step.accentBorder} bg-gradient-to-br ${step.accentBg}`}>
                        <Icon className={`h-5 w-5 ${step.accentColor}`} />
                      </div>
                      <span className="text-3xl font-black text-slate-800 group-hover:text-slate-700 transition-colors duration-300 select-none">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-2 leading-snug">{step.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>

                    {/* Bottom status dot */}
                    <div className="mt-5 flex items-center gap-1.5">
                      <div className={`h-1.5 w-1.5 rounded-full ${step.accentColor.replace('text-', 'bg-')} opacity-60 group-hover:opacity-100 transition-opacity`} />
                      <div className={`h-1 w-6 rounded-full ${step.accentColor.replace('text-', 'bg-')}/20 group-hover:${step.accentColor.replace('text-', 'bg-')}/40 transition-colors`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
