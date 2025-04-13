// components/DonutBreakdownChart.tsx
"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
  { name: "Monday", value: 4 },
  { name: "Tuesday", value: 6 },
  { name: "Wednesday", value: 2 },
  { name: "Thursday", value: 5 },
  { name: "Friday", value: 3 },
  { name: "Saturday", value: 7 },
  { name: "Sunday", value: 1 },
];

const COLORS = [
  "#6366f1",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#3b82f6",
  "#8b5cf6",
  "#14b8a6",
];

export default function DonutBreakdownChart() {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-4">
      <h2 className="text-lg font-semibold text-center mb-4">
        Weekly Electricity Breakdowns
      </h2>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
