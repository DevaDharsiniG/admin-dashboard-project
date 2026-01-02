"use client";
import { useEffect, useState } from "react";

export default function DashboardCards() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/admin/dashboard")
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Admin Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Total Applications" value={data.total} />
        <Card title="Web Development" value={data.web} />
        <Card title="Web App Development" value={data.webApp} />
        <Card title="UI / UX" value={data.uiux} />
        <Card title="DSML" value={data.dsml} />
      </div>
    </div>
  );
}

function Card({ title, value }: any) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-sm text-gray-500">{title}</h2>
      <p className="text-3xl font-bold text-green-600">{value}</p>
    </div>
  );
}



