import React from 'react';
import { ActivityItem } from '@/types';
import { Clock } from 'lucide-react';

interface ActivityTimelineProps {
  activities: ActivityItem[];
}

export const ActivityTimeline: React.FC<ActivityTimelineProps> = ({ activities }) => {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-md">
      <h3 className="text-sm font-bold text-white mb-4">Document Audit Timeline</h3>
      <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
        {activities.map((act) => (
          <div key={act.id} className="relative flex items-start justify-between gap-4">
            <div className="absolute -left-6 top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-indigo-400">
              <Clock className="h-3 w-3" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">{act.action}</p>
              <p className="text-[11px] text-slate-400 mt-0.5">By {act.user}</p>
            </div>
            <span className="text-[10px] text-slate-500 font-medium whitespace-nowrap">
              {act.timestamp}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
