import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { ApprovalsList } from '@/components/approvals/ApprovalsList';
import { MOCK_DOCUMENTS } from '@/lib/mock-data';

export const metadata = {
  title: 'Approvals Management | DocFlow AI',
};

export default function ApprovalsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Approvals Management"
        description="Filter and action pending, auto-approved, or rejected invoice workflows."
      />

      <ApprovalsList documents={MOCK_DOCUMENTS} />
    </div>
  );
}
