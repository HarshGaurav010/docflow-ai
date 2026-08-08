'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Search, Bell, Upload } from 'lucide-react';

interface TopbarProps {
  onMenuToggle: () => void;
}

export const Topbar: React.FC<TopbarProps> = ({ onMenuToggle }) => {
  const pathname = usePathname();

  const getBreadcrumb = () => {
    if (pathname === '/dashboard') return 'Dashboard';
    if (pathname.startsWith('/documents/')) return 'Document Details';
    if (pathname === '/documents') return 'Documents';
    if (pathname === '/upload') return 'Upload Invoice';
    if (pathname === '/review') return 'Review Queue';
    if (pathname === '/approvals') return 'Approvals';
    if (pathname === '/analytics') return 'Analytics';
    if (pathname === '/settings') return 'Settings';
    return 'DocFlow AI';
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-800/80 bg-slate-950/80 px-4 md:px-8 backdrop-blur-md">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuToggle}
          className="rounded-lg border border-slate-800 p-2 text-slate-400 hover:bg-slate-900 hover:text-white md:hidden"
          aria-label="Toggle Navigation Sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-medium hidden sm:inline-block">Platform /</span>
          <span className="text-sm font-semibold text-white">{getBreadcrumb()}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Quick Search Input */}
        <div className="relative hidden md:block w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search invoices, vendors..."
            className="w-full rounded-lg border border-slate-800 bg-slate-900/80 pl-9 pr-4 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        {/* Quick Upload Button */}
        <Link
          href="/upload"
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-500 transition-colors shadow-sm shadow-indigo-600/20"
        >
          <Upload className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Upload Invoice</span>
        </Link>

        {/* Notifications */}
        <button
          className="relative rounded-lg border border-slate-800 p-2 text-slate-400 hover:bg-slate-900 hover:text-white transition-colors"
          aria-label="View Notifications"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
        </button>
      </div>
    </header>
  );
};
