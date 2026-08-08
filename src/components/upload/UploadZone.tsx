'use client';

import React, { useState, useRef } from 'react';
import { Upload, FileText, Image as ImageIcon } from 'lucide-react';
import { MockProcessingState, StepKey } from './MockProcessingState';

export const UploadZone: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [processingStep, setProcessingStep] = useState<StepKey | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const simulateProcessing = () => {
    const steps: StepKey[] = ['uploading', 'analyzing', 'extracting', 'validating', 'complete'];
    let idx = 0;
    setProcessingStep(steps[0]);

    const interval = setInterval(() => {
      idx++;
      if (idx < steps.length) {
        setProcessingStep(steps[idx]);
      } else {
        clearInterval(interval);
      }
    }, 1200);
  };

  const handleFileSelect = (files: FileList | null) => {
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFile(file);
      simulateProcessing();
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const resetUpload = () => {
    setSelectedFile(null);
    setProcessingStep(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  if (selectedFile && processingStep) {
    return (
      <MockProcessingState
        currentStep={processingStep}
        fileName={selectedFile.name}
        onReset={resetUpload}
      />
    );
  }

  return (
    <div className="space-y-6">
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.jpg,.jpeg,.png"
        className="hidden"
        onChange={(e) => handleFileSelect(e.target.files)}
      />

      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-10 md:p-16 text-center cursor-pointer transition-all ${
          isDragging
            ? 'border-indigo-500 bg-indigo-500/10 scale-[1.01]'
            : 'border-slate-800 bg-slate-900/40 hover:border-indigo-500/40 hover:bg-slate-900/80'
        }`}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-6 shadow-lg shadow-indigo-500/10">
          <Upload className="h-8 w-8" />
        </div>

        <h3 className="text-lg font-bold text-white mb-1">
          Drag & Drop your invoice here
        </h3>
        <p className="text-xs text-slate-400 max-w-sm mb-6">
          Drop your PDF, PNG, or JPG invoice files to trigger AI analysis and rule validation.
        </p>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            fileInputRef.current?.click();
          }}
          className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 transition-all"
        >
          <span>Browse Files</span>
        </button>

        {/* Accepted Formats */}
        <div className="mt-8 flex items-center justify-center gap-6 border-t border-slate-800/80 pt-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <FileText className="h-4 w-4 text-indigo-400" />
            <span>PDF Documents</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ImageIcon className="h-4 w-4 text-blue-400" />
            <span>JPG Images</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ImageIcon className="h-4 w-4 text-purple-400" />
            <span>PNG Scans</span>
          </div>
        </div>
      </div>
    </div>
  );
};
