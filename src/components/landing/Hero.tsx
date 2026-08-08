import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Sparkles, CheckCircle2, Cpu, ShieldCheck, GitBranch } from 'lucide-react';

// Floating AI card data — shown around the invoice visualization
const aiCards = [
  {
    id: 'extraction',
    label: 'AI Extraction',
    value: 'Processing…',
    color: 'text-indigo-400',
    bg: 'from-indigo-500/10 to-indigo-500/5',
    border: 'border-indigo-500/25',
    dot: 'bg-indigo-400',
    icon: Cpu,
    position: 'top-[6%] left-[-2%] md:left-[2%]',
  },
  {
    id: 'validation',
    label: 'Validation',
    value: 'Passed ✓',
    color: 'text-emerald-400',
    bg: 'from-emerald-500/10 to-emerald-500/5',
    border: 'border-emerald-500/25',
    dot: 'bg-emerald-400',
    icon: ShieldCheck,
    position: 'top-[38%] right-[-2%] md:right-[0%]',
  },
  {
    id: 'confidence',
    label: 'Confidence Score',
    value: '96%',
    color: 'text-blue-400',
    bg: 'from-blue-500/10 to-blue-500/5',
    border: 'border-blue-500/25',
    dot: 'bg-blue-400',
    icon: Sparkles,
    position: 'bottom-[20%] left-[-2%] md:left-[1%]',
  },
  {
    id: 'workflow',
    label: 'Workflow',
    value: 'Auto Approve',
    color: 'text-cyan-400',
    bg: 'from-cyan-500/10 to-cyan-500/5',
    border: 'border-cyan-500/25',
    dot: 'bg-cyan-400',
    icon: GitBranch,
    position: 'bottom-[4%] right-[-2%] md:right-[0%]',
  },
];

// The invoice document visualization component
const InvoiceVisualization: React.FC = () => {
  const steps = [
    { label: 'Upload Invoice', done: true },
    { label: 'AI Extraction', done: true, active: false },
    { label: 'Validation', done: true },
    { label: 'Duplicate Check', done: true },
    { label: 'Workflow Decision', active: true },
    { label: 'Approval', done: false },
  ];

  return (
    <div className="gsap-hero-visual relative w-full max-w-sm mx-auto lg:mx-0 lg:max-w-none">
      {/* Ambient glow behind the document */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-cyan-600/10 blur-[80px] rounded-full scale-110 pointer-events-none" />

      {/* Floating AI Cards */}
      {aiCards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.id}
            className={`gsap-hero-card absolute z-20 ${card.position} hidden sm:flex`}
          >
            <div
              className={`float-card flex items-center gap-2.5 rounded-xl border ${card.border} bg-gradient-to-br ${card.bg} backdrop-blur-xl px-3 py-2.5 shadow-xl shadow-black/20`}
            >
              <div className={`p-1.5 rounded-lg bg-slate-900/60`}>
                <Icon className={`h-3.5 w-3.5 ${card.color}`} />
              </div>
              <div>
                <div className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest leading-none">
                  {card.label}
                </div>
                <div className={`text-xs font-bold ${card.color} mt-0.5 leading-none`}>
                  {card.value}
                </div>
              </div>
              <div className={`h-1.5 w-1.5 rounded-full ${card.dot} ml-1 animate-pulse`} />
            </div>
          </div>
        );
      })}

      {/* Main Invoice Document Card */}
      <div className="relative z-10 mx-auto w-full max-w-[300px] lg:max-w-[320px]">
        <div className="rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-950/95 backdrop-blur-2xl shadow-2xl shadow-black/40 overflow-hidden">
          {/* Document header bar */}
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-800/80 bg-slate-950/50">
            <div className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
            <span className="ml-2 text-[10px] text-slate-500 font-medium">INV-2024-001.pdf</span>
          </div>

          {/* Document content */}
          <div className="p-5 space-y-4">
            {/* Invoice header */}
            <div className="flex justify-between items-start">
              <div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Invoice</div>
                <div className="text-base font-bold text-white mt-0.5">Acme Solutions</div>
                <div className="text-[10px] text-slate-500 mt-0.5">billing@acmesolutions.com</div>
              </div>
              <div className="text-right">
                <div className="text-[9px] text-slate-500 uppercase tracking-widest">Total</div>
                <div className="text-lg font-black text-indigo-400 mt-0.5">₹42,500</div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-800/60" />

            {/* AI Pipeline steps */}
            <div className="space-y-2">
              {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div
                    className={`h-4 w-4 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      step.active
                        ? 'bg-indigo-500/20 border border-indigo-400 shadow-sm shadow-indigo-400/30'
                        : step.done
                        ? 'bg-emerald-500/15 border border-emerald-500/40'
                        : 'bg-slate-800/80 border border-slate-700/50'
                    }`}
                  >
                    {step.done && !step.active && (
                      <CheckCircle2 className="h-2.5 w-2.5 text-emerald-400" />
                    )}
                    {step.active && (
                      <div className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                    )}
                  </div>
                  <span
                    className={`text-[10px] font-medium leading-tight ${
                      step.active
                        ? 'text-indigo-300'
                        : step.done
                        ? 'text-slate-300'
                        : 'text-slate-600'
                    }`}
                  >
                    {step.label}
                  </span>
                  {step.active && (
                    <span className="ml-auto text-[9px] text-indigo-400 font-semibold bg-indigo-500/10 border border-indigo-500/20 px-1.5 py-0.5 rounded-full">
                      Active
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* AI confidence bar */}
            <div className="border-t border-slate-800/60 pt-3">
              <div className="flex justify-between text-[9px] text-slate-500 mb-1.5">
                <span>AI Confidence</span>
                <span className="text-indigo-400 font-bold">96%</span>
              </div>
              <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full"
                  style={{ width: '96%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-28 lg:pb-36">
      {/* Deep background radial gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] left-[20%] w-[600px] h-[500px] bg-indigo-600/12 blur-[140px] rounded-full" />
        <div className="absolute -top-[10%] right-[5%] w-[400px] h-[400px] bg-purple-600/8 blur-[120px] rounded-full" />
        <div className="absolute bottom-[0%] left-[5%] w-[500px] h-[300px] bg-blue-600/8 blur-[100px] rounded-full" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left — Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            {/* Eyebrow badge */}
            <div className="gsap-hero-badge inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/8 px-4 py-1.5 text-xs font-semibold text-indigo-300 backdrop-blur-md mb-8 shadow-sm shadow-indigo-500/10">
              <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
              <span>Next-Gen Document Automation for Small Businesses</span>
            </div>

            {/* Headline */}
            <h1 className="gsap-hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Turn Documents Into{' '}
              <br className="hidden sm:block" />
              <span className="gradient-text">Automated Actions.</span>
            </h1>

            {/* Supporting paragraph */}
            <p className="gsap-hero-subtext mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              DocFlow AI helps small businesses automatically process invoices,
              extract critical information, validate documents, and route them for
              auto-approval or human review — all in seconds.
            </p>

            {/* CTAs */}
            <div className="gsap-hero-cta mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link
                href="/signup"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-600/30 hover:bg-indigo-500 hover:shadow-indigo-500/40 transition-all duration-200"
              >
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
              <a
                href="#how-it-works"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-800/80 bg-slate-900/60 px-7 py-3.5 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 hover:border-slate-700 transition-all duration-200 backdrop-blur-sm"
              >
                <div className="h-6 w-6 flex items-center justify-center rounded-full bg-indigo-500/15 border border-indigo-500/25">
                  <Play className="h-2.5 w-2.5 text-indigo-400 fill-indigo-400/60" />
                </div>
                <span>See How It Works</span>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="gsap-hero-trust mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                <span>No code setup</span>
              </div>
              <div className="h-3 w-px bg-slate-800 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                <span>98%+ AI accuracy</span>
              </div>
              <div className="h-3 w-px bg-slate-800 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                <span>Real-time duplicate detection</span>
              </div>
            </div>
          </div>

          {/* Right — Invoice Visualization */}
          <div className="flex-1 w-full max-w-sm lg:max-w-md xl:max-w-lg relative">
            <InvoiceVisualization />
          </div>
        </div>
      </div>
    </section>
  );
};
