import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { UploadZone } from '@/components/upload/UploadZone';

export const metadata = {
  title: 'Upload Invoice | DocFlow AI',
};

export default function UploadPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <PageHeader
        title="Upload Invoice"
        description="Ingest business invoices for automated field extraction, validation, and approval workflow processing."
      />

      <UploadZone />
    </div>
  );
}
