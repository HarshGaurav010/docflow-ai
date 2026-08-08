import React from 'react';
import { Upload, Sparkles, Database, CheckCircle2, CopyCheck, GitBranch, UserCheck } from 'lucide-react';

export const AIWorkflow: React.FC = () => {
  const nodes = [
    { label: 'Upload Invoice', icon: Upload, desc: 'PDF / PNG / JPG' },
    { label: 'AI Analysis', icon: Sparkles, desc: 'Optical & Semantic' },
    { label: 'Data Extraction', icon: Database, desc: 'Fields & Line Items' },
    { label: 'Validation', icon: CheckCircle2, desc: 'Tax & Totals Check' },
    { label: 'Duplicate Detection', icon: CopyCheck, desc: 'Hash & Vendor Match' },
    { label: 'Workflow Decision', icon: GitBranch, desc: 'Rule Evaluation' },
    { label: 'Approval Route', icon: UserCheck, desc: 'Auto Approve or Review' },
  ];

  return (
    <section id="product" className="py-24 border-b border-slate-800/60 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400">Architecture</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
            Intelligent Automated Pipeline
          </p>
          <p className="mt-4 text-slate-400 text-base">
            Every document passes through an end-to-end automated verification pipeline before posting to your books.
          </p>
        </div>

        {/* Pipeline visual diagram */}
        <div className="relative rounded-2xl border border-slate-800 bg-slate-900/80 p-6 md:p-10 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 items-center">
            {nodes.map((node) => {
              const Icon = node.icon;
              return (
                <React.Fragment key={node.label}>
                  <div className="flex flex-col items-center text-center p-4 rounded-xl border border-slate-800 bg-slate-950/60 hover:border-indigo-500/40 transition-colors">
                    <div className="h-10 w-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-3">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold text-white mb-1">{node.label}</span>
                    <span className="text-[10px] text-slate-400">{node.desc}</span>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
