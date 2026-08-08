import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="gsap-section py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-indigo-500/20 overflow-hidden">
          {/* Multi-layer ambient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d1230] via-[#08091a] to-[#040508]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/15 via-transparent to-purple-600/8" />

          {/* Radial glows */}
          <div className="absolute -top-32 left-1/4 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px]" />
          <div className="absolute -bottom-32 right-1/4 w-64 h-64 bg-blue-600/15 rounded-full blur-[80px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-indigo-500/8 rounded-full blur-[60px]" />

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(99,102,241,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.8) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo-500/8 to-transparent rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/8 to-transparent rounded-br-3xl" />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:py-20 text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-300 mb-6 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
              <span>Ready to automate your document workflow?</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              Start Automating Your<br />
              <span className="gradient-text">Invoices Today.</span>
            </h2>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed mb-10">
              Join forward-thinking small businesses saving time and eliminating manual billing errors with DocFlow AI.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-indigo-600/30 hover:bg-indigo-500 hover:shadow-indigo-500/40 transition-all duration-200"
              >
                <Zap className="h-4 w-4 fill-white/40" />
                <span>Get Started Now</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
              <Link
                href="/dashboard"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/60 px-8 py-4 text-base font-semibold text-slate-200 hover:bg-slate-800/80 hover:border-slate-600 hover:text-white transition-all duration-200 backdrop-blur-sm"
              >
                Open Demo Dashboard
              </Link>
            </div>

            {/* Trust note */}
            <p className="mt-8 text-xs text-slate-600 font-medium">
              No credit card required · Free to explore · SOC2 Ready
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
