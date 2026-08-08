import React from 'react';
import Link from 'next/link';
import { Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <Zap className="h-4 w-4 fill-current" />
              </div>
              <span className="text-lg font-bold text-white">DocFlow AI</span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              Intelligent document workflow automation platform empowering small businesses to turn invoice processing into automated actions.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">Product</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#how-it-works" className="hover:text-indigo-400 transition-colors">How It Works</a></li>
              <li><a href="#benefits" className="hover:text-indigo-400 transition-colors">Benefits</a></li>
              <li><Link href="/dashboard" className="hover:text-indigo-400 transition-colors">Interactive Demo</Link></li>
              <li><Link href="/upload" className="hover:text-indigo-400 transition-colors">Invoice Upload</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">App Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/dashboard" className="hover:text-indigo-400 transition-colors">Dashboard</Link></li>
              <li><Link href="/documents" className="hover:text-indigo-400 transition-colors">Document Library</Link></li>
              <li><Link href="/review" className="hover:text-indigo-400 transition-colors">Review Queue</Link></li>
              <li><Link href="/approvals" className="hover:text-indigo-400 transition-colors">Approvals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">Legal & Security</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="hover:text-indigo-400 cursor-pointer">Privacy Policy</span></li>
              <li><span className="hover:text-indigo-400 cursor-pointer">Terms of Service</span></li>
              <li><span className="hover:text-indigo-400 cursor-pointer">Security Compliance</span></li>
              <li><span className="hover:text-indigo-400 cursor-pointer">SOC2 Certified</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} DocFlow AI Inc. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Built for modern small business automation.</p>
        </div>
      </div>
    </footer>
  );
};
