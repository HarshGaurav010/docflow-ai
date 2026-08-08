'use client';

import React, { useState, useMemo } from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { DocumentFilters } from '@/components/documents/DocumentFilters';
import { DocumentTable } from '@/components/documents/DocumentTable';
import { MOCK_DOCUMENTS } from '@/lib/mock-data';
import { Upload } from 'lucide-react';
import Link from 'next/link';

export default function DocumentsPage() {
  const [documents, setDocuments] = useState(MOCK_DOCUMENTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleDelete = (id: string) => {
    setDocuments((prev) => prev.filter((d) => d.id !== id));
  };

  const counts = useMemo(() => {
    return {
      All: documents.length,
      Processing: documents.filter((d) => d.status === 'Processing').length,
      Approved: documents.filter((d) => d.status === 'Approved').length,
      Review: documents.filter((d) => d.status === 'Review').length,
      Rejected: documents.filter((d) => d.status === 'Rejected').length,
    };
  }, [documents]);

  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      const matchesSearch =
        doc.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.vendor.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = selectedFilter === 'All' || doc.status === selectedFilter;
      return matchesSearch && matchesFilter;
    });
  }, [documents, searchTerm, selectedFilter]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Document Library"
        description="Search, filter, and review all ingested invoices and billing documents."
      >
        <Link
          href="/upload"
          className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 transition-all"
        >
          <Upload className="h-4 w-4" />
          <span>Upload Invoice</span>
        </Link>
      </PageHeader>

      <DocumentFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
        counts={counts}
      />

      <DocumentTable documents={filteredDocuments} onDelete={handleDelete} />
    </div>
  );
}
