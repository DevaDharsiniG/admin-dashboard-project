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





// "use client";

// import { useEffect, useState } from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const COLORS = ["#7C3AED", "#22C55E", "#0EA5E9", "#F59E0B"];

// export default function DashboardCards() {
//   const [data, setData] = useState<any>(null);

//   useEffect(() => {
//     fetch("/api/admin/dashboard")
//       .then((res) => res.json())
//       .then(setData);
//   }, []);

//   if (!data) return <p>Loading...</p>;

//   const pieData = [
//     { name: "Web Dev", value: data.web },
//     { name: "Web App", value: data.webApp },
//     { name: "UI / UX", value: data.uiux },
//     { name: "DSML", value: data.dsml },
//   ];

//   const barData = [
//     { name: "Web Dev", count: data.web },
//     { name: "Web App", count: data.webApp },
//     { name: "UI/UX", count: data.uiux },
//     { name: "DSML", count: data.dsml },
//   ];

//   return (
//     <div className="space-y-8">
//       {/* TITLE */}
//       <h1 className="text-2xl font-bold text-gray-800">
//         Admin Dashboard Overview
//       </h1>

//       {/* STATS CARDS */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         <StatCard title="Total Applications" value={data.total} />
//         <StatCard title="Web Development" value={data.web} />
//         <StatCard title="Web App Development" value={data.webApp} />
//         <StatCard title="UI / UX" value={data.uiux} />
//       </div>

//       {/* CHARTS */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* PIE CHART */}
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="font-semibold mb-4 text-gray-700">
//             Application Distribution
//           </h2>

//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={pieData}
//                 dataKey="value"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={100}
//                 label
//               >
//                 {pieData.map((_, index) => (
//                   <Cell key={index} fill={COLORS[index]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         {/* BAR CHART */}
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="font-semibold mb-4 text-gray-700">
//             Applications Count
//           </h2>

//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={barData}>
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="count" fill="#7C3AED" radius={[6, 6, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* SMALL STAT CARD */
// function StatCard({ title, value }: any) {
//   return (
//     <div className="bg-white rounded-xl shadow p-6">
//       <p className="text-sm text-gray-500">{title}</p>
//       <p className="text-3xl font-bold text-violet-600 mt-2">
//         {value}
//       </p>
//     </div>
//   );
// }



// // "use client";

// // import { useEffect, useState } from "react";
// // import DashboardChartsSection from "./DashboardChartsSection";
// // import DashboardCountsSection from "./DashboardCountsSection";

// // export default function AdminDashboard() {
// //   const [counts, setCounts] = useState({
// //     total: 0,
// //     web: 0,
// //     webApp: 0,
// //     uiux: 0,
// //     dsml: 0,
// //   });

// //   useEffect(() => {
// //     fetch("/api/dashboard-counts", { cache: "no-store" })
// //       .then((res) => res.json())
// //       .then(setCounts);
// //   }, []);

// //   return (
// //     <div className="p-8 bg-emerald-50 min-h-screen space-y-10">
// //       {/* HEADER */}
// //       <div>
// //         <h1 className="text-3xl font-bold text-emerald-900">
// //           🌿 Admin Dashboard
// //         </h1>
// //         <p className="text-sm text-emerald-700">
// //           Internship analytics overview
// //         </p>
// //       </div>

// //       {/* CHARTS TOP */}
// //       <DashboardChartsSection counts={counts} />

// //       {/* COUNTS BOTTOM */}
// //       <DashboardCountsSection counts={counts} />
// //     </div>
// //   );
// // }
