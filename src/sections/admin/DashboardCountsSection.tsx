
// "use client";

// import { useEffect, useState } from "react";
// import {
//   Users,
//   Code,
//   Layers,
//   PenTool,
//   Brain,
// } from "lucide-react";

// const stats = [
//   { label: "Total Applications", key: "total", icon: Users },
//   { label: "Web Development", key: "web", icon: Code },
//   { label: "Web App", key: "webApp", icon: Layers },
//   { label: "UI / UX", key: "uiux", icon: PenTool },
//   { label: "DS / ML", key: "dsml", icon: Brain },
// ];

// function CountUp({ value }: { value: number }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const duration = 800;
//     const stepTime = 20;
//     const increment = Math.ceil(value / (duration / stepTime));

//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= value) {
//         setCount(value);
//         clearInterval(timer);
//       } else {
//         setCount(start);
//       }
//     }, stepTime);

//     return () => clearInterval(timer);
//   }, [value]);

//   return <>{count}</>;
// }

// export default function DashboardCountsSection({
//   counts,
// }: {
//   counts: any;
// }) {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
//       {stats.map((item) => {
//         const Icon = item.icon;

//         return (
//           <div
//             key={item.key}
//             className="
//               rounded-xl p-4
//               bg-gradient-to-br from-green-500 to-emerald-600
//               text-white shadow-md
//               hover:scale-[1.03] transition-all duration-200
//             "
//           >
//             <div className="flex items-center justify-between">
//               <p className="text-sm opacity-90">
//                 {item.label}
//               </p>
//               <Icon className="w-5 h-5 opacity-90" />
//             </div>

//             <h2 className="mt-2 text-3xl font-bold">
//               <CountUp value={counts[item.key]} />
//             </h2>
//           </div>
//         );
//       })}
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

/* ✅ ADD THIS (YOU MISSED THIS PART) */
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
  counts: {
    total: number;
    web: number;
    webApp: number;
    uiux: number;
    dsml: number;
  };
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.key}
            className="
              rounded-2xl p-5
              bg-[#F3FFF9]
              border border-emerald-100
              shadow-sm
              hover:shadow-md hover:-translate-y-1
              transition-all duration-200
            "
          >
            <div className="flex items-center gap-2 text-emerald-700">
              <Icon className="w-5 h-5" />
              <p className="text-sm font-medium">
                {item.label}
              </p>
            </div>

            <h2 className="mt-3 text-3xl font-bold text-emerald-900">
              <CountUp value={counts[item.key as keyof typeof counts]} />
            </h2>

            <div className="mt-3 h-1 w-10 rounded-full bg-emerald-400" />
          </div>
        );
      })}
    </div>
  );
}
