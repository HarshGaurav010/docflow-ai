import React from 'react';
import Link from 'next/link';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { formatCurrency } from '@/lib/utils';
import { MOCK_DOCUMENTS, MOCK_STATS } from '@/lib/mock-data';
import { ArrowRight, LayoutDashboard, FileText, AlertTriangle, CheckCircle2, TrendingUp, Cpu } from 'lucide-react';

export const DashboardPreview: React.FC = () => {
  const previewDocs = MOCK_DOCUMENTS.slice(0, 5);

  return (
    <section className="gsap-section py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[200px] bg-gradient-to-b from-indigo-600/5 to-transparent blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-900/60 px-3.5 py-1 text-xs font-semibold text-slate-400 mb-4">
            Live Dashboard Experience
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
            Built for Modern<br />
            <span className="gradient-text">Finance Operations</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Real-time metrics, automated validation flags, and direct approval actions — all in one clean interface.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="gsap-dashboard-preview relative rounded-2xl overflow-hidden border border-slate-800/80 shadow-2xl shadow-black/50">
          {/* Outer glow effect */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent pointer-events-none z-10" />

          {/* Browser Chrome Bar */}
          <div className="relative flex items-center justify-between px-5 py-3.5 border-b border-slate-800/80 bg-[#080b14]">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
              <div className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
              <div className="ml-3 hidden sm:flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900/80 px-3 py-1 text-[10px] text-slate-500">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400/60" />
                <span>app.docflow.ai/dashboard</span>
              </div>
            </div>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <span className="hidden sm:inline">Explore Interactive App</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* App body */}
          <div className="flex bg-[#06080f] min-h-[520px]">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-[180px] shrink-0 border-r border-slate-800/60 p-4 bg-[#080c18]">
              <div className="flex items-center gap-2 mb-6 px-1">
                <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-indigo-600 to-blue-500 flex items-center justify-center">
                  <div className="h-3 w-3 text-white font-black text-[8px] flex items-center justify-center">⚡</div>
                </div>
                <span className="text-[11px] font-bold text-white">DocFlow AI</span>
              </div>
              <nav className="space-y-0.5">
                {[
                  { icon: LayoutDashboard, label: 'Dashboard', active: true },
                  { icon: FileText, label: 'Documents' },
                  { icon: AlertTriangle, label: 'Review Queue', badge: '17' },
                  { icon: CheckCircle2, label: 'Approvals' },
                  { icon: TrendingUp, label: 'Analytics' },
                ].map(({ icon: Icon, label, active, badge }) => (
                  <div
                    key={label}
                    className={`flex items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-[10px] font-medium cursor-default ${
                      active
                        ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/20'
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="h-3 w-3" />
                      <span>{label}</span>
                    </div>
                    {badge && (
                      <span className="text-[8px] bg-amber-500/20 text-amber-400 border border-amber-500/20 px-1.5 py-0.5 rounded-full font-bold">
                        {badge}
                      </span>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-5 overflow-x-auto">
              {/* Stats row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
                {[
                  { label: 'Total Documents', value: MOCK_STATS.totalDocuments, color: 'text-white', border: 'border-slate-800' },
                  { label: 'Processed', value: MOCK_STATS.processed, color: 'text-white', border: 'border-slate-800' },
                  { label: 'Pending Review', value: MOCK_STATS.pendingReview, color: 'text-amber-400', border: 'border-amber-500/15 bg-amber-500/3' },
                  { label: 'Approved', value: MOCK_STATS.approved, color: 'text-emerald-400', border: 'border-emerald-500/15 bg-emerald-500/3' },
                ].map(({ label, value, color, border }) => (
                  <div key={label} className={`rounded-xl border ${border} bg-slate-900/50 p-3.5`}>
                    <div className="text-[9px] text-slate-500 font-medium mb-1.5 uppercase tracking-widest">{label}</div>
                    <div className={`text-xl font-black ${color}`}>{value}</div>
                  </div>
                ))}
              </div>

              {/* Chart mini preview */}
              <div className="rounded-xl border border-slate-800/70 bg-slate-900/40 p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-[10px] font-bold text-white">Document Processing</div>
                    <div className="text-[9px] text-slate-500">Monthly trend</div>
                  </div>
                  <div className="flex gap-2 text-[8px] text-slate-500">
                    <span className="flex items-center gap-1"><span className="h-1.5 w-3 bg-indigo-500 rounded" />Total</span>
                    <span className="flex items-center gap-1"><span className="h-1.5 w-3 bg-emerald-400 rounded" />Approved</span>
                  </div>
                </div>
                {/* SVG mini chart */}
                <svg viewBox="0 0 320 60" className="w-full h-auto">
                  <polyline
                    points="0,45 53,38 106,42 160,28 213,33 267,18 320,22"
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="0,52 53,46 106,50 160,36 213,40 267,24 320,28"
                    fill="none"
                    stroke="#34d399"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polygon
                    points="0,45 53,38 106,42 160,28 213,33 267,18 320,22 320,60 0,60"
                    fill="url(#chartFill)"
                    opacity="0.15"
                  />
                  <defs>
                    <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Invoice Table */}
              <div className="rounded-xl border border-slate-800/70 bg-slate-900/40 overflow-hidden">
                <div className="px-4 py-2.5 border-b border-slate-800/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Cpu className="h-3 w-3 text-indigo-400" />
                    <span className="text-[10px] font-bold text-slate-200">Recent Invoices</span>
                  </div>
                  <span className="text-[9px] text-slate-500">AI Confidence & Status</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-[10px]">
                    <thead className="text-slate-500 border-b border-slate-800/40 bg-slate-950/50">
                      <tr>
                        <th className="px-4 py-2.5 font-semibold">Invoice</th>
                        <th className="px-4 py-2.5 font-semibold hidden md:table-cell">Vendor</th>
                        <th className="px-4 py-2.5 font-semibold">Amount</th>
                        <th className="px-4 py-2.5 font-semibold">Status</th>
                        <th className="px-4 py-2.5 font-semibold hidden lg:table-cell">Confidence</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/40 text-slate-400">
                      {previewDocs.map((doc) => (
                        <tr key={doc.id} className="hover:bg-slate-800/30 transition-colors">
                          <td className="px-4 py-2.5 font-semibold text-slate-200">{doc.invoiceNumber}</td>
                          <td className="px-4 py-2.5 hidden md:table-cell">{doc.vendor.split(' ').slice(0, 2).join(' ')}</td>
                          <td className="px-4 py-2.5 font-bold text-white">{formatCurrency(doc.amount, doc.currency)}</td>
                          <td className="px-4 py-2.5">
                            <StatusBadge status={doc.status} />
                          </td>
                          <td className="px-4 py-2.5 hidden lg:table-cell">
                            <div className="flex items-center gap-1.5">
                              <div className="w-12 h-1 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${doc.aiConfidence}%` }} />
                              </div>
                              <span className="text-indigo-300 font-semibold">{doc.aiConfidence}%</span>
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
        </div>
      </div>
    </section>
  );
};
