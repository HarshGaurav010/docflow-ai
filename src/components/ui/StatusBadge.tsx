import React from 'react';
import { DocumentStatus, ApprovalStatus } from '@/types';
import { CheckCircle2, Clock, AlertTriangle, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  status: DocumentStatus | ApprovalStatus | string;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'Approved':
        return {
          bg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
          icon: <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-400" />,
          label: 'Approved',
        };
      case 'Review':
      case 'Pending':
        return {
          bg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
          icon: <AlertTriangle className="w-3.5 h-3.5 mr-1 text-amber-400" />,
          label: status === 'Pending' ? 'Pending Review' : 'Needs Review',
        };
      case 'Processing':
        return {
          bg: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
          icon: <Clock className="w-3.5 h-3.5 mr-1 text-blue-400 animate-spin" />,
          label: 'Processing',
        };
      case 'Rejected':
        return {
          bg: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
          icon: <XCircle className="w-3.5 h-3.5 mr-1 text-rose-400" />,
          label: 'Rejected',
        };
      default:
        return {
          bg: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
          icon: null,
          label: status,
        };
    }
  };

  const config = getStatusConfig();

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm transition-colors',
        config.bg,
        className
      )}
    >
      {config.icon}
      {config.label}
    </span>
  );
};
