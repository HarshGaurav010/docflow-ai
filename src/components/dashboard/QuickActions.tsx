import React from 'react';
import Link from 'next/link';
import { Upload, AlertTriangle, ArrowRight } from 'lucide-react';

export const QuickActions: React.FC = () => {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-md">
      <h3 className="text-sm font-bold text-white mb-3">Quick Actions</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Link
          href="/upload"
          className="group flex items-center justify-between rounded-lg border border-indigo-500/30 bg-indigo-500/10 p-3.5 hover:bg-indigo-500/20 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-600 text-white">
              <Upload className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white">Upload Invoice</span>
              <span className="text-[10px] text-indigo-300">Ingest PDF, JPG, PNG</span>
            </div>
          </div>
          <ArrowRight className="h-4 w-4 text-indigo-400 group-hover:translate-x-0.5 transition-transform" />
        </Link>

        <Link
          href="/review"
          className="group flex items-center justify-between rounded-lg border border-amber-500/30 bg-amber-500/10 p-3.5 hover:bg-amber-500/20 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-600 text-white">
              <AlertTriangle className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white">Review Documents</span>
              <span className="text-[10px] text-amber-300">17 items need attention</span>
            </div>
          </div>
          <ArrowRight className="h-4 w-4 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
