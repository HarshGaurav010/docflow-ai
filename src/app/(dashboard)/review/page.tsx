import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { ReviewQueueTable } from '@/components/review/ReviewQueueTable';
import { MOCK_DOCUMENTS } from '@/lib/mock-data';

export const metadata = {
  title: 'Review Queue | DocFlow AI',
};

export default function ReviewPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Review Queue"
        description="Documents requiring human verification due to high amount thresholds, low AI confidence, or duplicate flags."
      />

      <ReviewQueueTable documents={MOCK_DOCUMENTS} />
    </div>
  );
}
