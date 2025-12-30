// "use client";

// type Counts = {
//   web: number;
//   webApp: number;
//   uiux: number;
//   dsml: number;
//   total: number;
// };

// export default function DashboardCountsSection({
//   counts,
// }: {
//   counts: Counts;
// }) {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       <Card title="Web Development" value={counts.web} />
//       <Card title="Web App Development" value={counts.webApp} />
//       <Card title="UI / UX" value={counts.uiux} />
//       <Card title="DS / ML" value={counts.dsml} />
//       <Card title="Total Applications" value={counts.total} />
//     </div>
//   );
// }

// function Card({ title, value }: { title: string; value: number }) {
//   return (
//     <div className="bg-white rounded-xl shadow p-6 text-center">
//       <p className="text-gray-600">{title}</p>
//       <h2 className="text-3xl font-bold text-green-600">{value}</h2>
//     </div>
//   );
// }





"use client";

import { useEffect, useState } from "react";

type Counts = {
  web: number;
  webApp: number;
  uiux: number;
  dsml: number;
  total: number;
};

type Props = {
  counts: Counts;
};

export default function DashboardCountsSection({ counts }: Props) {
  const [animated, setAnimated] = useState<Counts>({
    web: 0,
    webApp: 0,
    uiux: 0,
    dsml: 0,
    total: 0,
  });

  useEffect(() => {
    if (!counts) return;

    let step = 0;
    const maxSteps = 20;

    const timer = setInterval(() => {
      step++;

      setAnimated({
        web: Math.round((counts.web / maxSteps) * step),
        webApp: Math.round((counts.webApp / maxSteps) * step),
        uiux: Math.round((counts.uiux / maxSteps) * step),
        dsml: Math.round((counts.dsml / maxSteps) * step),
        total: Math.round((counts.total / maxSteps) * step),
      });

      if (step >= maxSteps) {
        clearInterval(timer);
      }
    }, 40);

    return () => clearInterval(timer);
  }, [counts]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Stat title="Total Applications" value={animated.total} />
      <Stat title="Web Development" value={animated.web} />
      <Stat title="Web App Development" value={animated.webApp} />
      <Stat title="UI / UX" value={animated.uiux} />
      <Stat title="DS / ML" value={animated.dsml} />
    </div>
  );
}

function Stat({ title, value }: { title: string; value: number }) {
  return (
    <div className="rounded-2xl bg-white border border-green-200 shadow-md p-6 text-center">
      <p className="text-sm font-medium text-green-700">{title}</p>
      <p className="mt-2 text-4xl font-bold text-green-600">
        {value}
      </p>
    </div>
  );
}
