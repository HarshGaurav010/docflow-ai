export type DocumentStatus = 'Approved' | 'Review' | 'Processing' | 'Rejected';

export type ApprovalStatus = 'Pending' | 'Approved' | 'Rejected';

export type WorkflowDecision = 'Auto Approved' | 'Requires Human Review' | 'Rejected';

export interface DocumentItem {
  id: string;
  invoiceNumber: string;
  vendor: string;
  vendorEmail?: string;
  amount: number;
  currency: string;
  status: DocumentStatus;
  date: string;
  dueDate: string;
  subtotal: number;
  tax: number;
  total: number;
  aiConfidence: number;
  validationStatus: 'Passed' | 'Failed' | 'Warning';
  duplicateDetected: boolean;
  workflowDecision: WorkflowDecision;
  reviewReason?: string;
  issue?: string;
  fileType: 'pdf' | 'png' | 'jpg';
  fileSize: string;
}

export interface ActivityItem {
  id: string;
  documentId: string;
  invoiceNumber: string;
  action: string;
  user: string;
  timestamp: string;
  type: 'upload' | 'process' | 'review' | 'approve' | 'reject';
}

export interface WorkflowSettings {
  automaticApprovalThreshold: number;
  aiConfidenceThreshold: number;
  duplicateDetectionEnabled: boolean;
}

export interface AnalyticsData {
  totalProcessed: number;
  automationRate: number;
  autoApproved: number;
  manualReviews: number;
  rejected: number;
  monthlyTrend: {
    month: string;
    total: number;
    autoApproved: number;
    manualReview: number;
  }[];
}
