import React from 'react';
import Link from 'next/link';
import { DocumentItem } from '@/types';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { formatCurrency, formatDate } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

interface RecentDocumentsTableProps {
  documents: DocumentItem[];
}

export const RecentDocumentsTable: React.FC<RecentDocumentsTableProps> = ({ documents }) => {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden backdrop-blur-md">
      <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-white">Recent Documents</h3>
          <p className="text-xs text-slate-400">Latest invoice uploads & processing statuses</p>
        </div>
        <Link
          href="/documents"
          className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          View All ({documents.length})
        </Link>
      </div>

      <div className="table-container">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-950/60 text-slate-400 border-b border-slate-800">
            <tr>
              <th className="px-5 py-3 font-semibold">Invoice Number</th>
              <th className="px-5 py-3 font-semibold">Vendor</th>
              <th className="px-5 py-3 font-semibold">Amount</th>
              <th className="px-5 py-3 font-semibold">Status</th>
              <th className="px-5 py-3 font-semibold">Date</th>
              <th className="px-5 py-3 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-300">
            {documents.map((doc) => (
              <tr key={doc.id} className="hover:bg-slate-800/40 transition-colors">
                <td className="px-5 py-3.5 font-semibold text-white">{doc.invoiceNumber}</td>
                <td className="px-5 py-3.5 font-medium">{doc.vendor}</td>
                <td className="px-5 py-3.5 font-semibold text-white">
                  {formatCurrency(doc.amount, doc.currency)}
                </td>
                <td className="px-5 py-3.5">
                  <StatusBadge status={doc.status} />
                </td>
                <td className="px-5 py-3.5 text-slate-400">{formatDate(doc.date)}</td>
                <td className="px-5 py-3.5 text-right">
                  <Link
                    href={`/documents/${doc.id}`}
                    className="inline-flex items-center gap-1 text-xs font-medium text-indigo-400 hover:text-indigo-300 hover:underline"
                  >
                    <span>Details</span>
                    <ExternalLink className="h-3 w-3" />
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
