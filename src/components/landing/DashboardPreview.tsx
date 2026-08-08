import React from 'react';
import Link from 'next/link';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { formatCurrency } from '@/lib/utils';
import { MOCK_DOCUMENTS, MOCK_STATS } from '@/lib/mock-data';
import { ArrowRight } from 'lucide-react';

export const DashboardPreview: React.FC = () => {
  const previewDocs = MOCK_DOCUMENTS.slice(0, 4);

  return (
    <section className="py-24 border-b border-slate-800/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400">Live Dashboard Experience</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
            Designed for Modern Finance Operations
          </p>
          <p className="mt-4 text-slate-400 text-base">
            Clean, real-time metrics, automated validation flags, and direct approval actions.
          </p>
        </div>

        {/* Dashboard Frame Preview */}
        <div className="gsap-dashboard-preview rounded-2xl border border-slate-800 bg-slate-950 p-4 md:p-8 shadow-2xl relative">
          <div className="flex items-center justify-between pb-6 border-b border-slate-800/80 mb-6">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-rose-500/80" />
              <div className="h-3 w-3 rounded-full bg-amber-500/80" />
              <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-medium text-slate-500">app.docflow.ai/dashboard</span>
            </div>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300"
            >
              <span>Explore Interactive App</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Key Stats Mock */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <span className="text-xs text-slate-400">Total Documents</span>
              <div className="text-2xl font-bold text-white mt-1">{MOCK_STATS.totalDocuments}</div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <span className="text-xs text-slate-400">Processed</span>
              <div className="text-2xl font-bold text-white mt-1">{MOCK_STATS.processed}</div>
            </div>
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
              <span className="text-xs text-amber-400">Pending Review</span>
              <div className="text-2xl font-bold text-amber-400 mt-1">{MOCK_STATS.pendingReview}</div>
            </div>
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
              <span className="text-xs text-emerald-400">Approved</span>
              <div className="text-2xl font-bold text-emerald-400 mt-1">{MOCK_STATS.approved}</div>
            </div>
          </div>

          {/* Invoice Table Preview */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden">
            <div className="px-5 py-3 border-b border-slate-800 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-200">Recent Invoices</span>
              <span className="text-xs text-slate-400">AI Confidence & Audit Status</span>
            </div>
            <div className="table-container">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900/80 text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Invoice Number</th>
                    <th className="px-4 py-3 font-semibold">Vendor</th>
                    <th className="px-4 py-3 font-semibold">Amount</th>
                    <th className="px-4 py-3 font-semibold">Status</th>
                    <th className="px-4 py-3 font-semibold">AI Confidence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {previewDocs.map((doc) => (
                    <tr key={doc.id} className="hover:bg-slate-800/40">
                      <td className="px-4 py-3.5 font-medium text-white">{doc.invoiceNumber}</td>
                      <td className="px-4 py-3.5">{doc.vendor}</td>
                      <td className="px-4 py-3.5 font-semibold text-white">
                        {formatCurrency(doc.amount, doc.currency)}
                      </td>
                      <td className="px-4 py-3.5">
                        <StatusBadge status={doc.status} />
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-slate-800 h-1.5 rounded-full overflow-hidden">
                            <div
                              className="bg-indigo-500 h-full rounded-full"
                              style={{ width: `${doc.aiConfidence}%` }}
                            />
                          </div>
                          <span className="font-semibold text-slate-200">{doc.aiConfidence}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
