'use client';

import React from 'react';
import Link from 'next/link';
import { DocumentItem } from '@/types';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { formatCurrency, formatDate } from '@/lib/utils';
import { Eye, Trash2, FileText } from 'lucide-react';
import { EmptyState } from '@/components/ui/EmptyState';

interface DocumentTableProps {
  documents: DocumentItem[];
  onDelete?: (id: string) => void;
}

export const DocumentTable: React.FC<DocumentTableProps> = ({ documents, onDelete }) => {
  if (documents.length === 0) {
    return (
      <EmptyState
        title="No documents found"
        description="No invoice documents match your current filter or search criteria."
        icon={FileText}
      />
    );
  }

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden backdrop-blur-md">
      <div className="table-container">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-950/80 text-slate-400 border-b border-slate-800">
            <tr>
              <th className="px-5 py-3.5 font-semibold">Invoice Number</th>
              <th className="px-5 py-3.5 font-semibold">Vendor</th>
              <th className="px-5 py-3.5 font-semibold">Amount</th>
              <th className="px-5 py-3.5 font-semibold">Status</th>
              <th className="px-5 py-3.5 font-semibold">Date</th>
              <th className="px-5 py-3.5 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-300">
            {documents.map((doc) => (
              <tr key={doc.id} className="hover:bg-slate-800/40 transition-colors">
                <td className="px-5 py-4 font-semibold text-white">
                  <Link
                    href={`/documents/${doc.id}`}
                    className="hover:text-indigo-400 transition-colors"
                  >
                    {doc.invoiceNumber}
                  </Link>
                </td>
                <td className="px-5 py-4 font-medium">{doc.vendor}</td>
                <td className="px-5 py-4 font-semibold text-white">
                  {formatCurrency(doc.amount, doc.currency)}
                </td>
                <td className="px-5 py-4">
                  <StatusBadge status={doc.status} />
                </td>
                <td className="px-5 py-4 text-slate-400">{formatDate(doc.date)}</td>
                <td className="px-5 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/documents/${doc.id}`}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-950/80 px-2.5 py-1 text-xs font-semibold text-slate-300 hover:border-indigo-500/40 hover:text-indigo-400 transition-all"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      <span>View</span>
                    </Link>
                    <button
                      onClick={() => onDelete?.(doc.id)}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-rose-500/20 bg-rose-500/10 px-2 py-1 text-xs font-semibold text-rose-400 hover:bg-rose-500/20 transition-all"
                      title="Delete invoice"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
