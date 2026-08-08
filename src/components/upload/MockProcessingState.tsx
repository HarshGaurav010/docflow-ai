'use client';

import React from 'react';
import { Upload, Sparkles, Database, ShieldCheck, CheckCircle2, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export type StepKey = 'uploading' | 'analyzing' | 'extracting' | 'validating' | 'complete';

interface MockProcessingStateProps {
  currentStep: StepKey;
  fileName: string;
  onReset: () => void;
}

export const MockProcessingState: React.FC<MockProcessingStateProps> = ({
  currentStep,
  fileName,
  onReset,
}) => {
  const steps: { key: StepKey; label: string; icon: React.ReactNode }[] = [
    { key: 'uploading', label: 'Uploading file', icon: <Upload className="h-4 w-4" /> },
    { key: 'analyzing', label: 'AI Document Analysis', icon: <Sparkles className="h-4 w-4" /> },
    { key: 'extracting', label: 'Extracting Invoice Fields', icon: <Database className="h-4 w-4" /> },
    { key: 'validating', label: 'Rule & Duplicate Validation', icon: <ShieldCheck className="h-4 w-4" /> },
    { key: 'complete', label: 'Processing Complete', icon: <CheckCircle2 className="h-4 w-4 text-emerald-400" /> },
  ];

  const getStepStatus = (stepKey: StepKey) => {
    const order: StepKey[] = ['uploading', 'analyzing', 'extracting', 'validating', 'complete'];
    const currentIndex = order.indexOf(currentStep);
    const stepIndex = order.indexOf(stepKey);

    if (stepIndex < currentIndex) return 'completed';
    if (stepIndex === currentIndex) return 'active';
    return 'pending';
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-base font-bold text-white">Invoice Ingestion Pipeline</h3>
          <p className="text-xs text-slate-400 mt-0.5">Processing {fileName}</p>
        </div>
        {currentStep === 'complete' ? (
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Success
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
            <span>Processing</span>
          </span>
        )}
      </div>

      <div className="space-y-4">
        {steps.map((s) => {
          const status = getStepStatus(s.key);
          return (
            <div
              key={s.key}
              className={cn(
                'flex items-center justify-between p-3.5 rounded-xl border transition-all',
                status === 'completed' && 'bg-slate-950/60 border-slate-800 text-slate-300',
                status === 'active' && 'bg-indigo-500/10 border-indigo-500/30 text-white shadow-md shadow-indigo-500/10',
                status === 'pending' && 'bg-slate-950/20 border-slate-800/40 text-slate-500 opacity-60'
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    'p-2 rounded-lg border',
                    status === 'completed' && 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
                    status === 'active' && 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
                    status === 'pending' && 'bg-slate-900 text-slate-600 border-slate-800'
                  )}
                >
                  {s.icon}
                </div>
                <span className="text-xs font-semibold">{s.label}</span>
              </div>

              {status === 'completed' && (
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              )}
              {status === 'active' && (
                <Loader2 className="h-4 w-4 text-indigo-400 animate-spin" />
              )}
            </div>
          );
        })}
      </div>

      {currentStep === 'complete' && (
        <div className="pt-2 flex gap-3">
          <button
            onClick={onReset}
            className="flex-1 rounded-xl border border-slate-800 bg-slate-950 py-2.5 text-xs font-semibold text-slate-200 hover:bg-slate-800 transition-colors"
          >
            Upload Another File
          </button>
        </div>
      )}
    </div>
  );
};
