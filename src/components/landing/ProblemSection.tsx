import React from 'react';
import { XCircle, CheckCircle2, Clock, AlertTriangle, FileCheck, Layers, ArrowRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="gsap-section py-24 relative overflow-hidden">
      {/* Subtle section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-900/60 px-3.5 py-1 text-xs font-semibold text-slate-400 mb-4">
            The Problem & Solution
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
            Stop losing hours to manual<br />
            <span className="gradient-text">invoice data entry.</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Small business finance teams waste up to 15 hours a week typing invoice data, chasing approvals, and catching double-payments.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Manual Process — Left */}
          <div className="gsap-problem-card relative rounded-2xl border border-rose-500/15 bg-gradient-to-br from-rose-950/20 via-slate-950/80 to-slate-950/90 p-7 overflow-hidden group hover:border-rose-500/25 transition-all duration-300">
            {/* Background glow */}
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-rose-600/8 rounded-full blur-3xl group-hover:bg-rose-600/12 transition-colors duration-500 pointer-events-none" />

            <div className="relative">
              <div className="flex items-start gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 mt-0.5">
                  <XCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-rose-400/70 mb-1">Before DocFlow</div>
                  <h3 className="text-lg font-bold text-white">Manual Invoice Processing</h3>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  { icon: Clock, text: 'Manual typing of vendor line items, totals, and tax breakdowns.' },
                  { icon: AlertTriangle, text: 'Risk of paying duplicate invoices or mismatched billing details.' },
                  { icon: Layers, text: 'Endless email chains for approval sign-offs and missing information.' },
                ].map(({ icon: Icon, text }, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                    <Icon className="h-4 w-4 text-rose-400/80 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>

              {/* Status indicator */}
              <div className="mt-6 pt-5 border-t border-slate-800/60 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-rose-500" />
                <span className="text-xs text-slate-500 font-medium">15+ hrs/week wasted</span>
              </div>
            </div>
          </div>

          {/* DocFlow Way — Right */}
          <div className="gsap-problem-card relative rounded-2xl border border-indigo-500/25 bg-gradient-to-br from-indigo-950/25 via-slate-950/80 to-slate-950/90 p-7 overflow-hidden group hover:border-indigo-500/40 transition-all duration-300 shadow-xl shadow-indigo-950/30">
            {/* Background glow */}
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl group-hover:bg-indigo-600/15 transition-colors duration-500 pointer-events-none" />

            <div className="relative">
              <div className="flex items-start gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-400 border border-indigo-500/25 mt-0.5">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-indigo-400/70 mb-1">With DocFlow AI</div>
                  <h3 className="text-lg font-bold text-white">The DocFlow AI Way</h3>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  { icon: FileCheck, text: 'Instant document ingestion and precision AI field extraction.', color: 'text-emerald-400' },
                  { icon: CheckCircle2, text: 'Automated validation rules and real-time duplicate detection.', color: 'text-indigo-400' },
                  { icon: CheckCircle2, text: 'Smart approval routing — auto-approve small invoices, queue exceptions.', color: 'text-cyan-400' },
                ].map(({ icon: Icon, text, color }, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <Icon className={`h-4 w-4 ${color} shrink-0 mt-0.5`} />
                    <span className="leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>

              {/* Status indicator */}
              <div className="mt-6 pt-5 border-t border-slate-800/60 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-slate-400 font-medium">82% automation rate achieved</span>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow transition between cards */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-rose-500/40" />
            <span>manual workflow</span>
            <ArrowRight className="h-3.5 w-3.5 text-indigo-400" />
            <span className="text-indigo-400">AI transformation</span>
            <ArrowRight className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-emerald-400">automated workflow</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-500/40" />
          </div>
        </div>
      </div>
    </section>
  );
};
