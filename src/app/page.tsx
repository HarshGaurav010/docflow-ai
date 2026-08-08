import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/landing/Hero';
import { ProblemSection } from '@/components/landing/ProblemSection';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { AIWorkflow } from '@/components/landing/AIWorkflow';
import { DashboardPreview } from '@/components/landing/DashboardPreview';
import { Benefits } from '@/components/landing/Benefits';
import { CTA } from '@/components/landing/CTA';
import { LandingAnimations } from '@/components/landing/LandingAnimations';

export const metadata = {
  title: 'DocFlow AI — Turn Documents Into Automated Actions',
  description: 'Intelligent document workflow automation platform for small businesses. Automatically process invoices, extract fields, validate rules, and route approvals.',
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main>
        <LandingAnimations>
          <Hero />
          <ProblemSection />
          <HowItWorks />
          <AIWorkflow />
          <DashboardPreview />
          <Benefits />
          <CTA />
        </LandingAnimations>
      </main>
      <Footer />
    </div>
  );
}
