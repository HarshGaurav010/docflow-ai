'use client';

import React, { useState } from 'react';
import { DocumentItem, ActivityItem } from '@/types';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { ActivityTimeline } from '@/components/documents/ActivityTimeline';
import { formatCurrency, formatDate } from '@/lib/utils';
import {
  FileText,
  CheckCircle2,
  XCircle,
  Sparkles,
  ShieldCheck,
  Download,
  Printer,
  ChevronLeft,
} from 'lucide-react';
import Link from 'next/link';

interface InvoiceDetailViewProps {
  document: DocumentItem;
  activities: ActivityItem[];
}

export const InvoiceDetailView: React.FC<InvoiceDetailViewProps> = ({ document: doc, activities }) => {
  const [actionFeedback, setActionFeedback] = useState<string | null>(null);

  const handleApprove = () => {
    setActionFeedback('Invoice marked as Approved (Phase 1 UI action)');
  };

  const handleReject = () => {
    setActionFeedback('Invoice marked as Rejected (Phase 1 UI action)');
  };

  return (
    <div className="space-y-6">
      {/* Top back navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/documents"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Back to Document Library</span>
        </Link>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" title="Download Source File">
            <Download className="h-4 w-4" />
          </button>
          <button className="p-2 rounded-lg border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" title="Print Invoice">
            <Printer className="h-4 w-4" />
          </button>
        </div>
      </div>

      {actionFeedback && (
        <div className="rounded-xl border border-indigo-500/30 bg-indigo-500/10 p-4 text-xs font-semibold text-indigo-300 flex items-center justify-between">
          <span>{actionFeedback}</span>
          <button onClick={() => setActionFeedback(null)} className="text-slate-400 hover:text-white">✕</button>
        </div>
      )}

      {/* Main 2-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Document Preview Placeholder */}
        <div className="lg:col-span-6 space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 backdrop-blur-md min-h-[550px] flex flex-col justify-between relative overflow-hidden">
            {/* Header of Preview */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2 text-slate-300 font-medium text-xs">
                <FileText className="h-4 w-4 text-indigo-400" />
                <span>{doc.invoiceNumber}.pdf</span>
                <span className="text-[10px] text-slate-500">({doc.fileSize})</span>
              </div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                Document Preview Placeholder
              </span>
            </div>

            {/* Visual Invoice Paper Frame */}
            <div className="my-6 rounded-xl border border-slate-800/80 bg-slate-900/80 p-6 flex-1 flex flex-col justify-between shadow-inner">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-white tracking-tight">{doc.vendor}</h4>
                    <p className="text-xs text-slate-400 mt-1">{doc.vendorEmail || 'billing@vendor.com'}</p>
                    <p className="text-xs text-slate-400">GSTIN: 27AAAAA0000A1Z5</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs uppercase font-bold text-slate-500">INVOICE</span>
                    <p className="text-sm font-bold text-indigo-400 mt-0.5">{doc.invoiceNumber}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 border-y border-slate-800 py-4 text-xs">
                  <div>
                    <span className="text-slate-500 font-medium">Invoice Date:</span>
                    <p className="text-slate-200 font-semibold mt-0.5">{formatDate(doc.date)}</p>
                  </div>
                  <div>
                    <span className="text-slate-500 font-medium">Payment Due:</span>
                    <p className="text-slate-200 font-semibold mt-0.5">{formatDate(doc.dueDate)}</p>
                  </div>
                </div>

                {/* Line Items Mock */}
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-slate-400 border-b border-slate-800/60 pb-2 font-semibold">
                    <span>Description</span>
                    <span>Amount</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Software Automation & Cloud Consulting Services</span>
                    <span>{formatCurrency(doc.subtotal, doc.currency)}</span>
                  </div>
                </div>
              </div>

              {/* Total Calculation */}
              <div className="border-t border-slate-800 pt-4 mt-6 space-y-1.5 text-xs text-right">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal:</span>
                  <span>{formatCurrency(doc.subtotal, doc.currency)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>GST / Tax (18%):</span>
                  <span>{formatCurrency(doc.tax, doc.currency)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-slate-800">
                  <span>Total Amount:</span>
                  <span className="text-indigo-400">{formatCurrency(doc.total, doc.currency)}</span>
                </div>
              </div>
            </div>

            <div className="text-center text-[11px] text-slate-500">
              Interactive SVG / Canvas rendering placeholder for document OCR bounding boxes.
            </div>
          </div>
        </div>

        {/* Right Column: Invoice Information & Workflow Decision */}
        <div className="lg:col-span-6 space-y-6">
          {/* Main Info Card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-semibold text-slate-400">Invoice Number</span>
                <h2 className="text-2xl font-bold text-white mt-0.5">{doc.invoiceNumber}</h2>
              </div>
              <StatusBadge status={doc.status} />
            </div>

            {/* Grid details */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="text-slate-400 font-medium">Vendor</span>
                <p className="text-white font-bold mt-1 truncate">{doc.vendor}</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="text-slate-400 font-medium">Invoice Date</span>
                <p className="text-white font-bold mt-1">{formatDate(doc.date)}</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="text-slate-400 font-medium">Due Date</span>
                <p className="text-white font-bold mt-1">{formatDate(doc.dueDate)}</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="text-slate-400 font-medium">Subtotal</span>
                <p className="text-white font-bold mt-1">{formatCurrency(doc.subtotal, doc.currency)}</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="text-slate-400 font-medium">Tax</span>
                <p className="text-white font-bold mt-1">{formatCurrency(doc.tax, doc.currency)}</p>
              </div>
              <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                <span className="text-indigo-300 font-medium">Total Payable</span>
                <p className="text-indigo-400 font-bold mt-1 text-sm">
                  {formatCurrency(doc.total, doc.currency)}
                </p>
              </div>
            </div>

            {/* AI Confidence & Validation */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-950/80">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-slate-400 font-medium">AI Confidence</span>
                  <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
                </div>
                <div className="text-lg font-bold text-white">{doc.aiConfidence}%</div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-1">
                  <div
                    className="bg-indigo-500 h-full rounded-full"
                    style={{ width: `${doc.aiConfidence}%` }}
                  />
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-950/80">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-slate-400 font-medium">Validation</span>
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                </div>
                <div className="text-sm font-bold text-emerald-400 mt-1">
                  {doc.validationStatus}
                </div>
                <span className="text-[10px] text-slate-500">Tax & Math verified</span>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-950/80">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-slate-400 font-medium">Duplicate</span>
                  <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                </div>
                <div className="text-sm font-bold text-slate-200 mt-1">
                  {doc.duplicateDetected ? 'Detected' : 'Not detected'}
                </div>
                <span className="text-[10px] text-slate-500">Unique invoice hash</span>
              </div>
            </div>

            {/* Workflow Decision Banner */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  Workflow Decision
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {doc.workflowDecision}
                </span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-medium">
                Reason: {doc.reviewReason || 'Invoice processing complete.'}
              </p>
            </div>

            {/* Action Buttons Placeholder */}
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={handleApprove}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-xs font-semibold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-500 transition-all"
              >
                <CheckCircle2 className="h-4 w-4" />
                <span>Approve</span>
              </button>
              <button
                onClick={handleReject}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-4 py-3 text-xs font-semibold text-white shadow-lg shadow-rose-600/20 hover:bg-rose-500 transition-all"
              >
                <XCircle className="h-4 w-4" />
                <span>Reject</span>
              </button>
            </div>
          </div>

          {/* Activity Timeline */}
          <ActivityTimeline activities={activities} />
        </div>
      </div>
    </div>
  );
};
