import React from 'react';
import { AnalyticsData } from '@/types';
import { StatCard } from '@/components/ui/StatCard';
import { ProcessingChart } from './ProcessingChart';
import { FileText, Cpu, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';

interface AnalyticsOverviewProps {
  analytics: AnalyticsData;
}

export const AnalyticsOverview: React.FC<AnalyticsOverviewProps> = ({ analytics }) => {
  return (
    <div className="space-y-6">
      {/* Top Metrics Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard
          title="Documents Processed"
          value={analytics.totalProcessed}
          description="Total volume"
          icon={FileText}
          iconColor="text-indigo-400 bg-indigo-500/10 border-indigo-500/20"
        />
        <StatCard
          title="Automation Rate"
          value={`${analytics.automationRate}%`}
          description="Touchless processing"
          icon={Cpu}
          trend={{ value: '+5.2%', isPositive: true }}
          iconColor="text-blue-400 bg-blue-500/10 border-blue-500/20"
        />
        <StatCard
          title="Auto Approved"
          value={analytics.autoApproved}
          description="Cleared automatically"
          icon={CheckCircle2}
          iconColor="text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
        />
        <StatCard
          title="Manual Reviews"
          value={analytics.manualReviews}
          description="Escalated to queue"
          icon={AlertTriangle}
          iconColor="text-amber-400 bg-amber-500/10 border-amber-500/20"
        />
        <StatCard
          title="Rejected"
          value={analytics.rejected}
          description="Rule failures"
          icon={XCircle}
          iconColor="text-rose-400 bg-rose-500/10 border-rose-500/20"
        />
      </div>

      {/* SVG Trend Chart */}
      <ProcessingChart data={analytics.monthlyTrend} />
    </div>
  );
};
