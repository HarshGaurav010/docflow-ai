import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/80 via-slate-900 to-slate-950 p-10 md:p-16 text-center shadow-2xl overflow-hidden">
          {/* Decorative radial lighting */}
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-300">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Ready to automate your document workflow?</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Start Automating Your Invoices Today.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
              Join forward-thinking small businesses saving time and eliminating manual billing errors with DocFlow AI.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-indigo-600/30 hover:bg-indigo-500 transition-all hover:scale-105"
              >
                <span>Get Started Now</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/dashboard"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900 px-8 py-4 text-base font-semibold text-slate-200 hover:bg-slate-800"
              >
                Open Demo Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
