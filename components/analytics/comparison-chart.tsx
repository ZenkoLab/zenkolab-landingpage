"use client";

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle
} from 'recharts';
import { PATHOLOGIES } from './constants';

interface TooltipPayloadEntry {
  name: string;
  value: number;
  color: string;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayloadEntry[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 text-white p-4 rounded-xl shadow-2xl border border-slate-800 min-w-[180px]">
        <p className="font-bold text-base mb-3 pb-2 border-b border-slate-700">{label}</p>
        <div className="space-y-3">
          {payload.map((entry: TooltipPayloadEntry, index: number) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-slate-400 font-medium">{entry.name}</span>
                <span className="font-bold">{entry.value}%</span>
              </div>
              {/* Mini visual bar in tooltip */}
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div 
                    className="h-full rounded-full" 
                    style={{ width: `${entry.value}%`, backgroundColor: entry.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export const ComparisonChart: React.FC = () => {
  const data = PATHOLOGIES.map(p => ({
    name: p.name,
    'IA ZenkoLab': p.metrics.sensitivity,
    'Ophtalmologue': p.humanMetrics.sensitivity,
  }));

  return (
    <div className="w-full h-[450px] flex flex-col">
      <div className="flex items-center justify-between mb-6 shrink-0">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Sensibilité : IA vs Humain</h3>
          <p className="text-sm text-slate-500 mt-1">Comparaison du taux de détection sur dataset validé.</p>
        </div>
      </div>

      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: -20, bottom: 30 }}
            barGap={12} // Gap between bars in a group
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              stroke="#e2e8f0" 
            />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#0f172a', fontSize: 12, fontWeight: 600 }}
              dy={15}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748b', fontSize: 11, fontWeight: 500 }}
              domain={[50, 100]} // Zoom in to show difference
              ticks={[50, 60, 70, 80, 90, 100]}
            />
            <Tooltip 
              content={<CustomTooltip />} 
              cursor={{fill: 'rgba(37, 99, 235, 0.04)'}}
            />
            <Legend 
              verticalAlign="top" 
              height={40}
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: '13px', fontWeight: 600, color: '#0f172a', paddingBottom: '20px' }}
            />
            <Bar 
              name="IA ZenkoLab" 
              dataKey="IA ZenkoLab" 
              fill="#2563eb" // Blue 600
              radius={[6, 6, 0, 0]} 
              barSize={45}
              activeBar={<Rectangle fill="#1d4ed8" />}
            />
            <Bar 
              name="Ophtalmologue" 
              dataKey="Ophtalmologue" 
              fill="#0f172a" // Slate 900 (Black-ish)
              radius={[6, 6, 0, 0]} 
              barSize={45}
              activeBar={<Rectangle fill="#334155" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
