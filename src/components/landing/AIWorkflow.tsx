import React from 'react';
import { Upload, Sparkles, Database, CheckCircle2, CopyCheck, GitBranch, UserCheck } from 'lucide-react';

const nodes = [
  {
    label: 'Upload Invoice',
    icon: Upload,
    desc: 'PDF / PNG / JPG',
    color: 'text-blue-400',
    bg: 'from-blue-500/15 to-blue-500/5',
    border: 'border-blue-500/25',
    glow: 'shadow-blue-500/20',
  },
  {
    label: 'AI Analysis',
    icon: Sparkles,
    desc: 'Optical & Semantic',
    color: 'text-indigo-400',
    bg: 'from-indigo-500/15 to-indigo-500/5',
    border: 'border-indigo-500/25',
    glow: 'shadow-indigo-500/20',
  },
  {
    label: 'Data Extraction',
    icon: Database,
    desc: 'Fields & Line Items',
    color: 'text-violet-400',
    bg: 'from-violet-500/15 to-violet-500/5',
    border: 'border-violet-500/25',
    glow: 'shadow-violet-500/20',
  },
  {
    label: 'Validation',
    icon: CheckCircle2,
    desc: 'Tax & Totals Check',
    color: 'text-purple-400',
    bg: 'from-purple-500/15 to-purple-500/5',
    border: 'border-purple-500/25',
    glow: 'shadow-purple-500/20',
  },
  {
    label: 'Duplicate Detection',
    icon: CopyCheck,
    desc: 'Hash & Vendor Match',
    color: 'text-cyan-400',
    bg: 'from-cyan-500/15 to-cyan-500/5',
    border: 'border-cyan-500/25',
    glow: 'shadow-cyan-500/20',
  },
  {
    label: 'Workflow Decision',
    icon: GitBranch,
    desc: 'Rule Evaluation',
    color: 'text-teal-400',
    bg: 'from-teal-500/15 to-teal-500/5',
    border: 'border-teal-500/25',
    glow: 'shadow-teal-500/20',
  },
  {
    label: 'Approval Route',
    icon: UserCheck,
    desc: 'Auto Approve or Review',
    color: 'text-emerald-400',
    bg: 'from-emerald-500/15 to-emerald-500/5',
    border: 'border-emerald-500/25',
    glow: 'shadow-emerald-500/20',
  },
];

export const AIWorkflow: React.FC = () => {
  return (
    <section id="product" className="gsap-section py-24 relative overflow-hidden">
      {/* Section bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[250px] bg-indigo-600/6 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-900/60 px-3.5 py-1 text-xs font-semibold text-slate-400 mb-4">
            Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
            Intelligent<br />
            <span className="gradient-text">Automated Pipeline</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Every document passes through an end-to-end automated verification pipeline before reaching your books.
          </p>
        </div>

        {/* Pipeline Container */}
        <div className="relative rounded-2xl border border-slate-800/70 bg-gradient-to-br from-slate-900/80 via-slate-950/90 to-slate-900/80 p-7 md:p-10 backdrop-blur-xl shadow-2xl shadow-black/30 overflow-hidden">
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/3 to-transparent pointer-events-none" />

          {/* Desktop horizontal pipeline */}
          <div className="hidden lg:block">
            {/* Glowing connection line */}
            <div className="relative mb-8">
              <div className="absolute top-[44px] left-[6.5%] right-[6.5%] h-px pipeline-line z-0" />
              <div className="absolute top-[42px] left-[6.5%] right-[6.5%] h-[3px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent blur-sm z-0" />

              <div className="grid grid-cols-7 gap-3 relative z-10">
                {nodes.map((node, i) => {
                  const Icon = node.icon;
                  return (
                    <div key={node.label} className="gsap-pipeline-node flex flex-col items-center text-center group">
                      {/* Node icon */}
                      <div
                        className={`h-[88px] w-[88px] flex items-center justify-center rounded-2xl border ${node.border} bg-gradient-to-br ${node.bg} shadow-lg ${node.glow} hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-default mb-4 relative`}
                      >
                        <Icon className={`h-6 w-6 ${node.color}`} />
                        {/* Connector dot */}
                        {i < nodes.length - 1 && (
                          <div className="pipeline-dot absolute -right-[18px] top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-indigo-500/50 border border-indigo-500/40" />
                        )}
                      </div>
                      <span className={`text-xs font-bold ${node.color} mb-1 leading-tight`}>{node.label}</span>
                      <span className="text-[10px] text-slate-500 leading-tight">{node.desc}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet vertical pipeline */}
          <div className="lg:hidden">
            <div className="relative pl-12">
              {/* Vertical line */}
              <div className="absolute left-[22px] top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-indigo-500/40 to-transparent" />

              <div className="space-y-5">
                {nodes.map((node) => {
                  const Icon = node.icon;
                  return (
                    <div key={node.label} className="gsap-pipeline-node flex items-center gap-4 group">
                      {/* Node icon — positioned over the vertical line */}
                      <div
                        className={`flex h-[32px] w-[32px] items-center justify-center rounded-xl border ${node.border} bg-gradient-to-br ${node.bg} shadow-md ${node.glow}`}
                      >
                        <Icon className={`h-4 w-4 ${node.color}`} />
                      </div>
                      <div>
                        <span className={`text-sm font-bold ${node.color}`}>{node.label}</span>
                        <span className="ml-2 text-xs text-slate-500">{node.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
