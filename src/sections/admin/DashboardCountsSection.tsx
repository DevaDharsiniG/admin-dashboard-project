// "use client";

// import { useEffect, useState } from "react";
// import {
//   Users,
//   Code,
//   Layers,
//   PenTool,
//   Brain,
// } from "lucide-react";

// type Counts = {
//   total: number;
//   web: number;
//   webApp: number;
//   uiux: number;
//   dsml: number;
// };

// export default function DashboardCountsSection({
//   counts,
// }: {
//   counts: Counts;
// }) {
//   const [animated, setAnimated] = useState<Counts>({
//     total: 0,
//     web: 0,
//     webApp: 0,
//     uiux: 0,
//     dsml: 0,
//   });

//   useEffect(() => {
//     let step = 0;
//     const maxSteps = 25;

//     const timer = setInterval(() => {
//       step++;

//       setAnimated({
//         total: Math.round((counts.total / maxSteps) * step),
//         web: Math.round((counts.web / maxSteps) * step),
//         webApp: Math.round((counts.webApp / maxSteps) * step),
//         uiux: Math.round((counts.uiux / maxSteps) * step),
//         dsml: Math.round((counts.dsml / maxSteps) * step),
//       });

//       if (step >= maxSteps) clearInterval(timer);
//     }, 35);

//     return () => clearInterval(timer);
//   }, [counts]);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6">
//       <Stat
//         title="Total Applications"
//         value={animated.total}
//         icon={<Users />}
//         gradient="from-emerald-600 to-green-400"
//       />

//       <Stat
//         title="Web Development"
//         value={animated.web}
//         icon={<Code />}
//         gradient="from-green-700 to-emerald-500"
//       />

//       <Stat
//         title="Web App Development"
//         value={animated.webApp}
//         icon={<Layers />}
//         gradient="from-emerald-700 to-green-500"
//       />

//       <Stat
//         title="UI / UX"
//         value={animated.uiux}
//         icon={<PenTool />}
//         gradient="from-green-600 to-lime-400"
//       />

//       <Stat
//         title="DS / ML"
//         value={animated.dsml}
//         icon={<Brain />}
//         gradient="from-emerald-800 to-green-600"
//       />
//     </div>
//   );
// }

// /* ========= STAT CARD ========= */

// function Stat({
//   title,
//   value,
//   icon,
//   gradient,
// }: {
//   title: string;
//   value: number;
//   icon: React.ReactNode;
//   gradient: string;
// }) {
//   return (
//     <div
//       className={`
//         rounded-2xl p-6 text-white
//         bg-gradient-to-br ${gradient}
//         shadow-lg hover:shadow-2xl
//         hover:-translate-y-1 transition-all duration-300
//       `}
//     >
//       <div className="flex items-center justify-between">
//         <p className="text-sm font-medium opacity-90">
//           {title}
//         </p>

//         <div className="p-2 rounded-lg bg-white/20">
//           {icon}
//         </div>
//       </div>

//       <p className="mt-4 text-4xl font-bold tracking-tight">
//         {value}
//       </p>
//     </div>
//   );
// }




"use client";

import { useEffect, useState } from "react";
import {
  Users,
  Code,
  Layers,
  PenTool,
  Brain,
} from "lucide-react";

const stats = [
  { label: "Total Applications", key: "total", icon: Users },
  { label: "Web Development", key: "web", icon: Code },
  { label: "Web App", key: "webApp", icon: Layers },
  { label: "UI / UX", key: "uiux", icon: PenTool },
  { label: "DS / ML", key: "dsml", icon: Brain },
];

function CountUp({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 800;
    const stepTime = 20;
    const increment = Math.ceil(value / (duration / stepTime));

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return <>{count}</>;
}

export default function DashboardCountsSection({
  counts,
}: {
  counts: any;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.key}
            className="
              rounded-xl p-4
              bg-gradient-to-br from-green-500 to-emerald-600
              text-white shadow-md
              hover:scale-[1.03] transition-all duration-200
            "
          >
            <div className="flex items-center justify-between">
              <p className="text-sm opacity-90">
                {item.label}
              </p>
              <Icon className="w-5 h-5 opacity-90" />
            </div>

            <h2 className="mt-2 text-3xl font-bold">
              <CountUp value={counts[item.key]} />
            </h2>
          </div>
        );
      })}
    </div>
  );
}






// //3rd try


// // "use client";

// // import { useEffect, useState } from "react";
// // import {
// //   PieChart,
// //   Pie,
// //   Cell,
// //   ResponsiveContainer,
// //   BarChart,
// //   Bar,
// //   XAxis,
// //   YAxis,
// //   Tooltip,
// // } from "recharts";

// // const TYPES = [
// //   {
// //     label: "Web Development",
// //     value: "Web Development",
// //     color: "#22c55e",
// //   },
// //   {
// //     label: "Web App Development",
// //     value: "Web App Development",
// //     color: "#16a34a",
// //   },
// //   {
// //     label: "UI / UX",
// //     value: "UI/UX",
// //     color: "#4ade80",
// //   },
// //   {
// //     label: "DS / ML",
// //     value: "Data Science/ Machine Learning",
// //     color: "#15803d",
// //   },
// // ];

// // export default function AdminDashboardSection() {
// //   const [data, setData] = useState<any[]>([]);
// //   const [selected, setSelected] = useState("ALL");

// //   useEffect(() => {
// //     fetch("/api/internship", { cache: "no-store" })
// //       .then((res) => res.json())
// //       .then(setData);
// //   }, []);

// //   const filtered =
// //     selected === "ALL"
// //       ? data
// //       : data.filter((d) => d.internshipType === selected);

// //   const count = (type: string) =>
// //     data.filter((d) => d.internshipType === type).length;

// //   const pieData = TYPES.map((t) => ({
// //     name: t.label,
// //     value: count(t.value),
// //     color: t.color,
// //   }));

// //   const barData = TYPES.map((t) => ({
// //     name: t.label,
// //     count: count(t.value),
// //   }));

// //   return (
// //     <div className="p-8 bg-emerald-50 min-h-screen space-y-10">
// //       {/* ===== HEADER ===== */}
// //       <div>
// //         <h1 className="text-3xl font-bold text-emerald-900">
// //           🌿 Internship Admin Dashboard
// //         </h1>
// //         <p className="text-sm text-emerald-700">
// //           Real-time internship application analytics
// //         </p>
// //       </div>

// //       {/* ===== STAT CARDS ===== */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
// //         <StatCard
// //           title="Total Applications"
// //           value={data.length}
// //           gradient="from-emerald-600 to-emerald-400"
// //           onClick={() => setSelected("ALL")}
// //         />

// //         {TYPES.map((t) => (
// //           <StatCard
// //             key={t.value}
// //             title={t.label}
// //             value={count(t.value)}
// //             gradient="from-green-700 to-green-400"
// //             onClick={() => setSelected(t.value)}
// //           />
// //         ))}
// //       </div>

// //       {/* ===== CHARTS ===== */}
// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// //         {/* PIE */}
// //         <ChartCard title="Application Distribution">
// //           <ResponsiveContainer width="100%" height={280}>
// //             <PieChart>
// //               <Pie
// //                 data={pieData}
// //                 dataKey="value"
// //                 nameKey="name"
// //                 outerRadius={100}
// //                 label
// //               >
// //                 {pieData.map((entry, index) => (
// //                   <Cell key={index} fill={entry.color} />
// //                 ))}
// //               </Pie>
// //               <Tooltip />
// //             </PieChart>
// //           </ResponsiveContainer>
// //         </ChartCard>

// //         {/* BAR */}
// //         <ChartCard title="Applications by Category">
// //           <ResponsiveContainer width="100%" height={280}>
// //             <BarChart data={barData}>
// //               <XAxis dataKey="name" />
// //               <YAxis />
// //               <Tooltip />
// //               <Bar dataKey="count" fill="#16a34a" radius={[6, 6, 0, 0]} />
// //             </BarChart>
// //           </ResponsiveContainer>
// //         </ChartCard>
// //       </div>

// //       {/* ===== TABLE ===== */}
// //       <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
// //         <div className="flex justify-between items-center px-6 py-4 border-b">
// //           <h2 className="font-semibold text-lg text-emerald-800">
// //             {selected === "ALL" ? "All Applications" : selected}
// //           </h2>
// //           <button
// //             onClick={() => setSelected("ALL")}
// //             className="text-sm text-emerald-600 hover:underline"
// //           >
// //             Reset Filter
// //           </button>
// //         </div>

// //         <table className="w-full text-sm">
// //           <thead className="bg-emerald-600 text-white">
// //             <tr>
// //               <th className="p-3 text-left">Name</th>
// //               <th className="p-3">Email</th>
// //               <th className="p-3">College</th>
// //               <th className="p-3">Department</th>
// //               <th className="p-3">Type</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {filtered.map((d, i) => (
// //               <tr
// //                 key={i}
// //                 className="border-b hover:bg-emerald-50 transition"
// //               >
// //                 <td className="p-3 font-medium">{d.name}</td>
// //                 <td className="p-3">{d.email}</td>
// //                 <td className="p-3">{d.college}</td>
// //                 <td className="p-3">{d.department}</td>
// //                 <td className="p-3">
// //                   <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
// //                     {d.internshipType}
// //                   </span>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // }

// // /* ===== COMPONENTS ===== */

// // function StatCard({
// //   title,
// //   value,
// //   gradient,
// //   onClick,
// // }: any) {
// //   return (
// //     <div
// //       onClick={onClick}
// //       className={`cursor-pointer rounded-2xl p-6 text-white shadow-lg
// //       bg-gradient-to-br ${gradient} hover:scale-[1.02] transition`}
// //     >
// //       <p className="text-sm opacity-90">{title}</p>
// //       <p className="text-4xl font-bold mt-2">{value}</p>
// //     </div>
// //   );
// // }

// // function ChartCard({ title, children }: any) {
// //   return (
// //     <div className="bg-white rounded-2xl shadow-lg p-6">
// //       <h3 className="font-semibold text-emerald-800 mb-4">
// //         {title}
// //       </h3>
// //       {children}
// //     </div>
// //   );
// // }
