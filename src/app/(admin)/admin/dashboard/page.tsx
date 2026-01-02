

import DashboardCountsSection from "@/sections/admin/DashboardCountsSection";
import DashboardChartsSection from "@/sections/admin/DashboardChartsSection";

export const dynamic = "force-dynamic";

async function getCounts() {
  const res = await fetch("http://localhost:3000/api/internship", {
    cache: "no-store",
  });

  if (!res.ok) {
    return {
      web: 0,
      webApp: 0,
      uiux: 0,
      dsml: 0,
      total: 0,
    };
  }

  const data = await res.json();

  return {
    web: data.filter(
      (d: any) => d.internshipType === "Web Development"
    ).length,

    webApp: data.filter(
      (d: any) => d.internshipType === "Web App Development"
    ).length,

    uiux: data.filter(
      (d: any) => d.internshipType === "UI/UX"
    ).length,

    dsml: data.filter(
      (d: any) =>
        d.internshipType === "Data Science/ Machine Learning"
    ).length,

    total: data.length,
  };
}

export default async function DashboardPage() {
  const counts = await getCounts();

  return (
    <div className="space-y-8">
      <DashboardCountsSection counts={counts} />
      <DashboardChartsSection counts={counts} />
    </div>
  );
}
