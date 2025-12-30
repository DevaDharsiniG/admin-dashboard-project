"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const TYPES = [
  { label: "Web Development", key: "web", color: "#22c55e" },
  { label: "Web App Development", key: "webApp", color: "#16a34a" },
  { label: "UI / UX", key: "uiux", color: "#4ade80" },
  { label: "DS / ML", key: "dsml", color: "#15803d" },
];

export default function DashboardChartsSection({
  counts,
}: {
  counts: {
    web: number;
    webApp: number;
    uiux: number;
    dsml: number;
  };
}) {
  const pieData = TYPES.map((t) => ({
    name: t.label,
    value: counts[t.key as keyof typeof counts],
    color: t.color,
  }));

  const barData = TYPES.map((t) => ({
    name: t.label,
    count: counts[t.key as keyof typeof counts],
  }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* PIE */}
      <ChartCard title="Applications Distribution">
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" label>
              {pieData.map((e, i) => (
                <Cell key={i} fill={e.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* BAR */}
      <ChartCard title="Applications by Category">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#16a34a" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}

function ChartCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="font-semibold text-emerald-800 mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}
