import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { AnalyticsOverview } from '@/components/analytics/AnalyticsOverview';
import { MOCK_ANALYTICS } from '@/lib/mock-data';

export const metadata = {
  title: 'Analytics & Insights | DocFlow AI',
};

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Analytics & Automation Metrics"
        description="Monitor touchless automation rates, monthly document throughput, and exception distribution."
      />

      <AnalyticsOverview analytics={MOCK_ANALYTICS} />
    </div>
  );
}
