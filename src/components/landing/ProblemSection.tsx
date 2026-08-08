import React from 'react';
import { XCircle, CheckCircle2, Clock, AlertTriangle, FileCheck, Layers } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 border-b border-slate-800/60 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400">The Problem & Solution</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
            Stop losing hours to manual invoice data entry.
          </p>
          <p className="mt-4 text-slate-400 text-base">
            Small business teams waste up to 15 hours a week typing invoice numbers, chasing approvals, and catching accidental double-payments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Traditional Manual Process */}
          <div className="rounded-2xl border border-rose-500/20 bg-rose-950/10 p-8 backdrop-blur-md relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
                <XCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Manual Invoice Processing</h3>
            </div>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-rose-400 shrink-0 mt-0.5" />
                <span>Manual typing of vendor line items, totals, and tax breakdowns.</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-rose-400 shrink-0 mt-0.5" />
                <span>Risk of paying duplicate invoices or mismatched billing details.</span>
              </li>
              <li className="flex items-start gap-3">
                <Layers className="h-5 w-5 text-rose-400 shrink-0 mt-0.5" />
                <span>Endless email chains for approval sign-offs and missing info.</span>
              </li>
            </ul>
          </div>

          {/* DocFlow Automated Way */}
          <div className="rounded-2xl border border-indigo-500/30 bg-indigo-950/20 p-8 backdrop-blur-md relative overflow-hidden shadow-xl shadow-indigo-950/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">The DocFlow AI Way</h3>
            </div>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <FileCheck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Instant document ingestion and precision AI field extraction.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Automated validation rules and real-time duplicate detection.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Smart approval routing: Auto-approve small invoices, queue exceptions.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
