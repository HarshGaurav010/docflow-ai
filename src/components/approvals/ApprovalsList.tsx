'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DocumentItem } from '@/types';
import { formatCurrency, formatDate } from '@/lib/utils';
import { CheckCircle2, XCircle, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ApprovalsListProps {
  documents: DocumentItem[];
}

export const ApprovalsList: React.FC<ApprovalsListProps> = ({ documents }) => {
  const [activeTab, setActiveTab] = useState<'Pending' | 'Approved' | 'Rejected'>('Pending');
  const [feedback, setFeedback] = useState<string | null>(null);

  const getFilteredDocs = () => {
    switch (activeTab) {
      case 'Pending':
        return documents.filter((d) => d.status === 'Review' || d.status === 'Processing');
      case 'Approved':
        return documents.filter((d) => d.status === 'Approved');
      case 'Rejected':
        return documents.filter((d) => d.status === 'Rejected');
    }
  };

  const filtered = getFilteredDocs();

  const handleAction = (invoiceNum: string, action: 'Approve' | 'Reject') => {
    setFeedback(`Invoice ${invoiceNum} marked as ${action} (Phase 1 UI state update)`);
  };

  return (
    <div className="space-y-6">
      {feedback && (
        <div className="rounded-xl border border-indigo-500/30 bg-indigo-500/10 p-4 text-xs font-semibold text-indigo-300 flex items-center justify-between">
          <span>{feedback}</span>
          <button onClick={() => setFeedback(null)} className="text-slate-400 hover:text-white">✕</button>
        </div>
      )}

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
        {(['Pending', 'Approved', 'Rejected'] as const).map((tab) => {
          const isActive = activeTab === tab;
          const count =
            tab === 'Pending'
              ? documents.filter((d) => d.status === 'Review' || d.status === 'Processing').length
              : tab === 'Approved'
              ? documents.filter((d) => d.status === 'Approved').length
              : documents.filter((d) => d.status === 'Rejected').length;

          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all',
                isActive
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
              )}
            >
              <span>{tab}</span>
              <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-slate-950/60 font-semibold">
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Table */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden backdrop-blur-md">
        <div className="table-container">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/80 text-slate-400 border-b border-slate-800">
              <tr>
                <th className="px-5 py-3.5 font-semibold">Invoice</th>
                <th className="px-5 py-3.5 font-semibold">Vendor</th>
                <th className="px-5 py-3.5 font-semibold">Amount</th>
                <th className="px-5 py-3.5 font-semibold">Date</th>
                <th className="px-5 py-3.5 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {filtered.map((doc) => (
                <tr key={doc.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="px-5 py-4 font-bold text-white">{doc.invoiceNumber}</td>
                  <td className="px-5 py-4 font-medium">{doc.vendor}</td>
                  <td className="px-5 py-4 font-bold text-white">
                    {formatCurrency(doc.amount, doc.currency)}
                  </td>
                  <td className="px-5 py-4 text-slate-400">{formatDate(doc.date)}</td>
                  <td className="px-5 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/documents/${doc.id}`}
                        className="inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        <span>Review</span>
                      </Link>

                      {activeTab === 'Pending' && (
                        <>
                          <button
                            onClick={() => handleAction(doc.invoiceNumber, 'Approve')}
                            className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-emerald-500 transition-colors"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            <span>Approve</span>
                          </button>
                          <button
                            onClick={() => handleAction(doc.invoiceNumber, 'Reject')}
                            className="inline-flex items-center gap-1 rounded-lg bg-rose-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-rose-500 transition-colors"
                          >
                            <XCircle className="h-3.5 w-3.5" />
                            <span>Reject</span>
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
