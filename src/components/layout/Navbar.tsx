'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Zap, Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-800/60 bg-[#06080f]/90 backdrop-blur-2xl shadow-lg shadow-black/20'
          : 'border-b border-transparent bg-transparent backdrop-blur-xl'
      }`}
    >
      <div className="max-w-7xl mx-auto flex h-[68px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-blue-400 text-white shadow-lg shadow-indigo-600/30 group-hover:shadow-indigo-600/50 transition-all duration-300">
            <Zap className="h-4.5 w-4.5 fill-current" />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-indigo-500/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex items-baseline gap-0.5">
            <span className="text-lg font-bold tracking-tight text-white">DocFlow</span>
            <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              AI
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1" role="navigation">
          {[
            { label: 'Product', href: '#product' },
            { label: 'How It Works', href: '#how-it-works' },
            { label: 'Benefits', href: '#benefits' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative px-3.5 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 px-3 py-2"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="group inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 hover:bg-indigo-500 hover:shadow-indigo-500/30 transition-all duration-200"
          >
            <span>Get Started</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg border border-slate-800 p-2 text-slate-400 hover:bg-slate-900/80 hover:text-white md:hidden transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800/80 bg-[#06080f]/98 backdrop-blur-xl px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            {[
              { label: 'Product', href: '#product' },
              { label: 'How It Works', href: '#how-it-works' },
              { label: 'Benefits', href: '#benefits' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 text-base font-medium text-slate-300 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-800/60 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center rounded-xl border border-slate-800 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-900 transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center rounded-xl bg-indigo-600 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
