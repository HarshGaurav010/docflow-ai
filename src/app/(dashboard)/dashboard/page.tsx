import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { StatCard } from '@/components/ui/StatCard';
import { RecentDocumentsTable } from '@/components/dashboard/RecentDocumentsTable';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { ActivityFeed } from '@/components/dashboard/ActivityFeed';
import { MOCK_STATS, MOCK_DOCUMENTS, MOCK_ACTIVITIES } from '@/lib/mock-data';
import { FileText, CheckCircle2, AlertTriangle, Upload } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Dashboard | DocFlow AI',
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Operations Dashboard"
        description="Overview of document automation, recent invoice ingestions, and approval status."
      >
        <Link
          href="/upload"
          className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 transition-all"
        >
          <Upload className="h-4 w-4" />
          <span>Upload Invoice</span>
        </Link>
      </PageHeader>

      {/* Stats Overview Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Documents"
          value={MOCK_STATS.totalDocuments}
          description="Invoices ingested this month"
          icon={FileText}
          trend={{ value: '+14%', isPositive: true }}
          iconColor="text-indigo-400 bg-indigo-500/10 border-indigo-500/20"
        />
        <StatCard
          title="Processed"
          value={MOCK_STATS.processed}
          description="Fully extracted & validated"
          icon={CheckCircle2}
          trend={{ value: '93.1%', isPositive: true }}
          iconColor="text-blue-400 bg-blue-500/10 border-blue-500/20"
        />
        <StatCard
          title="Pending Review"
          value={MOCK_STATS.pendingReview}
          description="Requires human sign-off"
          icon={AlertTriangle}
          iconColor="text-amber-400 bg-amber-500/10 border-amber-500/20"
        />
        <StatCard
          title="Approved"
          value={MOCK_STATS.approved}
          description="Cleared for payment"
          icon={CheckCircle2}
          trend={{ value: '74.5%', isPositive: true }}
          iconColor="text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
        />
      </div>

      {/* Main Grid: Recent Documents & Sidebar Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <RecentDocumentsTable documents={MOCK_DOCUMENTS} />
        </div>
        <div className="space-y-6">
          <QuickActions />
          <ActivityFeed activities={MOCK_ACTIVITIES} />
        </div>
      </div>
    </div>
  );
}
