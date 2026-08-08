import React from 'react';
import { AnalyticsData } from '@/types';

interface ProcessingChartProps {
  data: AnalyticsData['monthlyTrend'];
}

export const ProcessingChart: React.FC<ProcessingChartProps> = ({ data }) => {
  const maxTotal = Math.max(...data.map((d) => d.total), 300);
  const chartHeight = 220;
  const width = 600;

  // Calculate coordinates for total line and autoApproved line
  const pointsTotal = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * (width - 60) + 30;
      const y = chartHeight - (d.total / maxTotal) * (chartHeight - 40) - 20;
      return `${x},${y}`;
    })
    .join(' ');

  const pointsAutoApproved = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * (width - 60) + 30;
      const y = chartHeight - (d.autoApproved / maxTotal) * (chartHeight - 40) - 20;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-white">Document Processing Trend</h3>
          <p className="text-xs text-slate-400">Monthly breakdown of ingested documents vs automated approvals</p>
        </div>
        <div className="flex items-center gap-4 text-xs font-semibold">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-indigo-500" />
            <span className="text-slate-300">Total Ingested</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="text-slate-300">Auto Approved</span>
          </div>
        </div>
      </div>

      {/* Responsive Custom SVG Area */}
      <div className="w-full overflow-x-auto pt-4">
        <svg viewBox={`0 0 ${width} ${chartHeight}`} className="w-full h-auto min-w-[500px]">
          {/* Horizontal grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
            const y = chartHeight - ratio * (chartHeight - 40) - 20;
            const val = Math.round(ratio * maxTotal);
            return (
              <g key={ratio}>
                <line x1="30" y1={y} x2={width - 30} y2={y} stroke="#1e293b" strokeDasharray="4 4" />
                <text x="5" y={y + 4} fill="#64748b" fontSize="10">
                  {val}
                </text>
              </g>
            );
          })}

          {/* Area glow fill for total */}
          <polygon
            points={`30,${chartHeight - 20} ${pointsTotal} ${width - 30},${chartHeight - 20}`}
            fill="url(#indigoGradient)"
            opacity="0.15"
          />

          {/* Total trend line */}
          <polyline
            fill="none"
            stroke="#6366f1"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={pointsTotal}
          />

          {/* Auto approved trend line */}
          <polyline
            fill="none"
            stroke="#34d399"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={pointsAutoApproved}
          />

          {/* Data point markers */}
          {data.map((d, i) => {
            const x = (i / (data.length - 1)) * (width - 60) + 30;
            const yTotal = chartHeight - (d.total / maxTotal) * (chartHeight - 40) - 20;
            const yAuto = chartHeight - (d.autoApproved / maxTotal) * (chartHeight - 40) - 20;
            return (
              <g key={d.month}>
                <circle cx={x} cy={yTotal} r="4" fill="#6366f1" />
                <circle cx={x} cy={yAuto} r="4" fill="#34d399" />
                <text x={x} y={chartHeight - 2} fill="#94a3b8" fontSize="11" textAnchor="middle">
                  {d.month}
                </text>
              </g>
            );
          })}

          <defs>
            <linearGradient id="indigoGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};
