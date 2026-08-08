'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  Upload,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  Settings,
  LogOut,
  Zap,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { signOutUser } from '@/lib/supabase/auth';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const router = useRouter();

  const mainNav = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Documents', href: '/documents', icon: FileText },
    { name: 'Upload', href: '/upload', icon: Upload },
    { name: 'Review Queue', href: '/review', icon: AlertTriangle, badge: '17' },
    { name: 'Approvals', href: '/approvals', icon: CheckCircle },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  ];

  const secondaryNav = [
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          'fixed top-0 bottom-0 left-0 z-50 flex w-64 flex-col border-r border-slate-800 bg-slate-950/95 backdrop-blur-xl transition-transform duration-300 md:static md:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center gap-3 px-6 border-b border-slate-800/80">
          <Link href="/dashboard" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-500 text-white shadow-lg shadow-indigo-500/20">
              <Zap className="h-5 w-5 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white">DocFlow AI</span>
              <span className="text-[10px] font-medium tracking-wider text-indigo-400 uppercase">Automation</span>
            </div>
          </Link>
        </div>

        {/* Navigation links */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-3 mb-2">
            Main Menu
          </div>
          <nav className="space-y-1">
            {mainNav.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href));
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    'group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-all',
                    isActive
                      ? 'bg-indigo-600/15 text-indigo-400 border border-indigo-500/30'
                      : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={cn('h-4 w-4', isActive ? 'text-indigo-400' : 'text-slate-400 group-hover:text-slate-200')} />
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <span className="inline-flex items-center rounded-full bg-amber-500/10 px-2 py-0.5 text-xs font-semibold text-amber-400 border border-amber-500/20">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="my-6 border-t border-slate-800/80 px-3" />

          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-3 mb-2">
            System
          </div>
          <nav className="space-y-1">
            {secondaryNav.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    'group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all',
                    isActive
                      ? 'bg-indigo-600/15 text-indigo-400 border border-indigo-500/30'
                      : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                  )}
                >
                  <Icon className={cn('h-4 w-4', isActive ? 'text-indigo-400' : 'text-slate-400 group-hover:text-slate-200')} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User profile & Logout */}
        <div className="border-t border-slate-800/80 p-4">
          <div className="flex items-center justify-between rounded-lg bg-slate-900/60 p-3 border border-slate-800">
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 font-semibold border border-indigo-500/30 text-sm">
                HM
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-medium text-white truncate">Harsh Mehta</span>
                <span className="text-xs text-slate-400 truncate">harsh@acme.com</span>
              </div>
            </div>
            <button
              onClick={async () => {
                await signOutUser();
                router.push('/login');
              }}
              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
              title="Log Out"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
