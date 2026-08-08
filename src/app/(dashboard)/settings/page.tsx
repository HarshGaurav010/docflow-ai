import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { WorkflowSettingsForm } from '@/components/settings/WorkflowSettingsForm';

export const metadata = {
  title: 'Workflow Settings | DocFlow AI',
};

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Workflow Settings"
        description="Manage automatic approval thresholds, AI confidence scores, and duplicate detection policies."
      />

      <WorkflowSettingsForm />
    </div>
  );
}
