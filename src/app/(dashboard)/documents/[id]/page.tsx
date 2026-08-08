import React from 'react';
import { MOCK_DOCUMENTS, MOCK_ACTIVITIES } from '@/lib/mock-data';
import { InvoiceDetailView } from '@/components/documents/InvoiceDetailView';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Document Details | DocFlow AI',
};

export default async function DocumentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const doc = MOCK_DOCUMENTS.find((d) => d.id === resolvedParams.id || d.invoiceNumber === resolvedParams.id) || MOCK_DOCUMENTS[0];

  if (!doc) {
    notFound();
  }

  const docActivities = MOCK_ACTIVITIES.filter((a) => a.documentId === doc.id || a.invoiceNumber === doc.invoiceNumber);

  return <InvoiceDetailView document={doc} activities={docActivities.length > 0 ? docActivities : MOCK_ACTIVITIES} />;
}
