import React from 'react';
import Link from 'next/link';
import { DocumentItem } from '@/types';
import { formatDate } from '@/lib/utils';
import { ArrowRight, Sparkles, AlertTriangle } from 'lucide-react';
import { EmptyState } from '@/components/ui/EmptyState';

interface ReviewQueueTableProps {
  documents: DocumentItem[];
}

export const ReviewQueueTable: React.FC<ReviewQueueTableProps> = ({ documents }) => {
  const reviewDocs = documents.filter(
    (d) => d.status === 'Review' || d.workflowDecision === 'Requires Human Review'
  );

  if (reviewDocs.length === 0) {
    return (
      <EmptyState
        title="Review Queue Clear!"
        description="All ingested invoices have passed automatic approval criteria. No documents require manual attention right now."
        icon={AlertTriangle}
      />
    );
  }

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden backdrop-blur-md">
      <div className="table-container">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-950/80 text-slate-400 border-b border-slate-800">
            <tr>
              <th className="px-5 py-3.5 font-semibold">Invoice</th>
              <th className="px-5 py-3.5 font-semibold">Issue Reason</th>
              <th className="px-5 py-3.5 font-semibold">AI Confidence</th>
              <th className="px-5 py-3.5 font-semibold">Date</th>
              <th className="px-5 py-3.5 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-300">
            {reviewDocs.map((doc) => (
              <tr key={doc.id} className="hover:bg-slate-800/40 transition-colors">
                <td className="px-5 py-4">
                  <div className="flex flex-col">
                    <span className="font-bold text-white">{doc.invoiceNumber}</span>
                    <span className="text-[11px] text-slate-400">{doc.vendor}</span>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
                    <span>{doc.issue || doc.reviewReason || 'Manual Review Required'}</span>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
                    <span className="font-bold text-white">{doc.aiConfidence}%</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-slate-400">{formatDate(doc.date)}</td>
                <td className="px-5 py-4 text-right">
                  <Link
                    href={`/documents/${doc.id}`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-amber-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-amber-600/20 hover:bg-amber-500 transition-all"
                  >
                    <span>Review</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
