import React from 'react';
import { ActivityItem } from '@/types';
import { Upload, Cpu, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface ActivityFeedProps {
  activities: ActivityItem[];
}

export const ActivityFeed: React.FC<ActivityFeedProps> = ({ activities }) => {
  const getIcon = (type: ActivityItem['type']) => {
    switch (type) {
      case 'upload':
        return <Upload className="h-3.5 w-3.5 text-blue-400" />;
      case 'process':
        return <Cpu className="h-3.5 w-3.5 text-indigo-400" />;
      case 'review':
        return <AlertTriangle className="h-3.5 w-3.5 text-amber-400" />;
      case 'approve':
        return <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />;
      case 'reject':
        return <XCircle className="h-3.5 w-3.5 text-rose-400" />;
    }
  };

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-md">
      <h3 className="text-sm font-bold text-white mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((act) => (
          <div key={act.id} className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-slate-800 border border-slate-700/60 shrink-0 mt-0.5">
              {getIcon(act.type)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-slate-200 font-medium leading-tight">{act.action}</p>
              <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-400">
                <span>{act.user}</span>
                <span>•</span>
                <span>{act.timestamp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
