'use client';

import React, { useState } from 'react';
import { MOCK_SETTINGS } from '@/lib/mock-data';
import { Save, CheckCircle2, Cpu, CopyCheck } from 'lucide-react';

export const WorkflowSettingsForm: React.FC = () => {
  const [approvalThreshold, setApprovalThreshold] = useState(MOCK_SETTINGS.automaticApprovalThreshold);
  const [confidenceThreshold, setConfidenceThreshold] = useState(MOCK_SETTINGS.aiConfidenceThreshold);
  const [duplicateDetection, setDuplicateDetection] = useState(MOCK_SETTINGS.duplicateDetectionEnabled);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <form onSubmit={handleSave} className="space-y-6 max-w-3xl">
      {savedSuccess && (
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs font-semibold text-emerald-300 flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          <span>Workflow settings updated successfully (Phase 1 UI state saved).</span>
        </div>
      )}

      {/* Workflow Settings Card */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Cpu className="h-5 w-5 text-indigo-400" />
            <span>Workflow & Auto-Approval Thresholds</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Configure rules governing automated document approvals and review escalations.
          </p>
        </div>

        <div className="space-y-6">
          {/* Automatic approval threshold */}
          <div>
            <label className="block text-xs font-bold text-slate-200 mb-1">
              Automatic Approval Threshold (INR)
            </label>
            <p className="text-[11px] text-slate-400 mb-2">
              Invoices under this amount with high confidence auto-approve without human intervention.
            </p>
            <div className="relative max-w-sm">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                ₹
              </span>
              <input
                type="number"
                value={approvalThreshold}
                onChange={(e) => setApprovalThreshold(Number(e.target.value))}
                className="w-full rounded-xl border border-slate-800 bg-slate-950/80 pl-8 pr-4 py-2.5 text-sm font-semibold text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* AI confidence threshold */}
          <div>
            <div className="flex items-center justify-between max-w-sm mb-1">
              <label className="text-xs font-bold text-slate-200">
                AI Confidence Threshold
              </label>
              <span className="text-xs font-bold text-indigo-400">{confidenceThreshold}%</span>
            </div>
            <p className="text-[11px] text-slate-400 mb-2">
              Minimum AI parsing confidence score required to bypass human review queue.
            </p>
            <div className="max-w-sm flex items-center gap-4">
              <input
                type="range"
                min="50"
                max="99"
                value={confidenceThreshold}
                onChange={(e) => setConfidenceThreshold(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Duplicate detection */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between max-w-lg">
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                <CopyCheck className="h-4 w-4 text-emerald-400" />
                <span>Duplicate Detection</span>
              </span>
              <p className="text-[11px] text-slate-400">
                Automatically flag invoices matching vendor, invoice number, or total amount.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setDuplicateDetection(!duplicateDetection)}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                duplicateDetection ? 'bg-indigo-600' : 'bg-slate-800'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  duplicateDetection ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Save Action */}
        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-2.5 text-xs font-semibold text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 transition-all"
          >
            <Save className="h-4 w-4" />
            <span>Save Workflow Settings</span>
          </button>
        </div>
      </div>
    </form>
  );
};
