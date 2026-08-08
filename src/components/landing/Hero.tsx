import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Sparkles, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-800/60">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-blue-500/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <div className="gsap-hero-badge inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-300 backdrop-blur-md mb-8">
          <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
          <span>Next-Gen Document Automation for Small Businesses</span>
        </div>

        {/* Headline */}
        <h1 className="gsap-hero-title text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]">
          Turn Documents Into{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Automated Actions.
          </span>
        </h1>

        {/* Supporting text */}
        <p className="gsap-hero-subtext mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          DocFlow AI helps small businesses automatically process invoices, extract critical information, validate document rules, and route them for auto-approval or human review in seconds.
        </p>

        {/* Hero CTAs */}
        <div className="gsap-hero-cta mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-indigo-600/25 hover:bg-indigo-500 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Get Started</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-8 py-4 text-base font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition-all"
          >
            <Play className="h-4 w-4 text-indigo-400 fill-indigo-400/20" />
            <span>See How It Works</span>
          </a>
        </div>

        {/* Key Feature Pills */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>No Code Setup</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>98%+ AI Accuracy</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>Instant Duplicate Detection</span>
          </div>
        </div>
      </div>
    </section>
  );
};
