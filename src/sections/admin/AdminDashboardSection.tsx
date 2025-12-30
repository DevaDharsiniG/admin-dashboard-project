// "use client";
// import { useEffect, useState } from "react";

// const TYPES = [
//   { label: "Web Development", value: "Web Development" },
//   { label: "Web App Development", value: "Web App Development" },
//   { label: "UI / UX", value: "UI/UX" },
//   { label: "DSML", value: "Data Science/ Machine Learning" },
// ];

// export default function AdminDashboardSection() {
//   const [data, setData] = useState<any[]>([]);
//   const [selectedType, setSelectedType] = useState("ALL");

//   useEffect(() => {
//     fetch("/api/internship", { cache: "no-store" })
//       .then((res) => res.json())
//       .then(setData);
//   }, []);

//   const filtered =
//     selectedType === "ALL"
//       ? data
//       : data.filter((d) => d.internshipType === selectedType);

//   const count = (type: string) =>
//     data.filter((d) => d.internshipType === type).length;

//   return (
//     <div className="p-10 bg-emerald-50 min-h-screen">
//       <h1 className="text-3xl font-bold mb-8">
//         Internship Applications Dashboard
//       </h1>

//       {/* CARDS */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//         {TYPES.map((t) => (
//           <div
//             key={t.value}
//             onClick={() => setSelectedType(t.value)}
//             className={`cursor-pointer p-6 rounded-xl shadow
//               ${
//                 selectedType === t.value
//                   ? "bg-emerald-600 text-white"
//                   : "bg-white"
//               }`}
//           >
//             <h2 className="font-semibold">{t.label}</h2>
//             <p className="text-3xl font-bold mt-2">{count(t.value)}</p>
//           </div>
//         ))}
//       </div>

//       <button
//         onClick={() => setSelectedType("ALL")}
//         className="mb-6 px-4 py-2 bg-white rounded shadow"
//       >
//         Show All
//       </button>

//       {/* TABLE */}
//       <div className="bg-white rounded-xl shadow overflow-x-auto">
//         <table className="w-full text-sm">
//           <thead className="bg-emerald-600 text-white">
//             <tr>
//               <th className="p-3">Name</th>
//               <th className="p-3">Email</th>
//               <th className="p-3">College</th>
//               <th className="p-3">Department</th>
//               <th className="p-3">Duration</th>
//               <th className="p-3">From</th>
//               <th className="p-3">To</th>
//               <th className="p-3">Type</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filtered.map((d, i) => (
//               <tr key={i} className="border-b">
//                 <td className="p-3">{d.name}</td>
//                 <td className="p-3">{d.email}</td>
//                 <td className="p-3">{d.college}</td>
//                 <td className="p-3">{d.department}</td>
//                 <td className="p-3">{d.duration}</td>
//                 <td className="p-3">
//                   {new Date(d.fromDate).toLocaleDateString()}
//                 </td>
//                 <td className="p-3">
//                   {new Date(d.toDate).toLocaleDateString()}
//                 </td>
//                 <td className="p-3 font-semibold text-emerald-700">
//                   {d.internshipType}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }





// // "use client";
// // import { useEffect, useState } from "react";

// // const TYPES = [
// //   { label: "Web Development", value: "Web Development", color: "bg-blue-500" },
// //   { label: "Web App Dev", value: "Web App Development", color: "bg-purple-500" },
// //   { label: "UI / UX", value: "UI/UX", color: "bg-pink-500" },
// //   { label: "DS / ML", value: "Data Science/ Machine Learning", color: "bg-orange-500" },
// // ];

// // export default function AdminDashboardSection() {
// //   const [data, setData] = useState<any[]>([]);
// //   const [selected, setSelected] = useState("ALL");

// //   useEffect(() => {
// //     fetch("/api/internship", { cache: "no-store" })
// //       .then(res => res.json())
// //       .then(setData);
// //   }, []);

// //   const filtered =
// //     selected === "ALL"
// //       ? data
// //       : data.filter(d => d.internshipType === selected);

// //   const count = (type: string) =>
// //     data.filter(d => d.internshipType === type).length;

// //   return (
// //     <div className="p-10 bg-slate-100 min-h-screen">
// //       <h1 className="text-3xl font-bold mb-8 text-slate-800">
// //         📊 Internship Dashboard
// //       </h1>

// //       {/* ===== STAT CARDS ===== */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
// //         <Card
// //           title="Total Applications"
// //           value={data.length}
// //           color="bg-emerald-600"
// //           onClick={() => setSelected("ALL")}
// //         />

// //         {TYPES.map(t => (
// //           <Card
// //             key={t.value}
// //             title={t.label}
// //             value={count(t.value)}
// //             color={t.color}
// //             onClick={() => setSelected(t.value)}
// //           />
// //         ))}
// //       </div>

// //       {/* ===== TABLE ===== */}
// //       <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
// //         <div className="px-6 py-4 border-b flex justify-between">
// //           <h2 className="font-semibold text-lg">
// //             {selected === "ALL" ? "All Applications" : selected}
// //           </h2>
// //           <button
// //             onClick={() => setSelected("ALL")}
// //             className="text-sm text-green-600 hover:underline"
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
// //               <tr key={i} className="border-b hover:bg-slate-50">
// //                 <td className="p-3">{d.name}</td>
// //                 <td className="p-3">{d.email}</td>
// //                 <td className="p-3">{d.college}</td>
// //                 <td className="p-3">{d.department}</td>
// //                 <td className="p-3 font-semibold text-emerald-700">
// //                   {d.internshipType}
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // }

// // /* ===== CARD COMPONENT ===== */
// // function Card({
// //   title,
// //   value,
// //   color,
// //   onClick,
// // }: {
// //   title: string;
// //   value: number;
// //   color: string;
// //   onClick?: () => void;
// // }) {
// //   return (
// //     <div
// //       onClick={onClick}
// //       className={`cursor-pointer rounded-2xl text-white p-6 shadow-lg ${color}`}
// //     >
// //       <p className="text-sm opacity-90">{title}</p>
// //       <p className="text-4xl font-bold mt-2">{value}</p>
// //     </div>
// //   );
// // }



//3rd try

"use client";
import { useEffect, useState } from "react";

const TYPES = [
  { label: "Web Development", value: "Web Development" },
  { label: "Web App Development", value: "Web App Development" },
  { label: "UI / UX", value: "UI/UX" },
  { label: "DS / ML", value: "Data Science/ Machine Learning" },
];

export default function AdminDashboardSection() {
  const [data, setData] = useState<any[]>([]);
  const [selectedType, setSelectedType] = useState("ALL");

  useEffect(() => {
    fetch("/api/internship", { cache: "no-store" })
      .then((res) => res.json())
      .then(setData);
  }, []);

  const filtered =
    selectedType === "ALL"
      ? data
      : data.filter((d) => d.internshipType === selectedType);

  const count = (type: string) =>
    data.filter((d) => d.internshipType === type).length;

  return (
    <div className="p-8 bg-emerald-50 min-h-screen">
      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-8 text-emerald-900">
        Internship Applications
      </h1>

      {/* FILTER CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
        {TYPES.map((t) => (
          <div
            key={t.value}
            onClick={() => setSelectedType(t.value)}
            className={`
              cursor-pointer rounded-xl p-5 shadow-sm
              transition-all duration-200
              ${
                selectedType === t.value
                  ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white scale-[1.03]"
                  : "bg-white hover:shadow-md"
              }
            `}
          >
            <p className="text-sm opacity-90">{t.label}</p>
            <p className="text-3xl font-bold mt-2">
              {count(t.value)}
            </p>
          </div>
        ))}
      </div>

      {/* RESET */}
      {selectedType !== "ALL" && (
        <button
          onClick={() => setSelectedType("ALL")}
          className="mb-6 text-sm text-emerald-700 font-semibold hover:underline"
        >
          Reset Filter
        </button>
      )}

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-emerald-600 text-white">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">College</th>
              <th className="p-4">Department</th>
              <th className="p-4">Duration</th>
              <th className="p-4">From</th>
              <th className="p-4">To</th>
              <th className="p-4">Type</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((d, i) => (
              <tr
                key={i}
                className="border-b hover:bg-emerald-50 transition"
              >
                <td className="p-4 font-medium">{d.name}</td>
                <td className="p-4">{d.email}</td>
                <td className="p-4">{d.college}</td>
                <td className="p-4">{d.department}</td>
                <td className="p-4">{d.duration}</td>
                <td className="p-4">
                  {new Date(d.fromDate).toLocaleDateString()}
                </td>
                <td className="p-4">
                  {new Date(d.toDate).toLocaleDateString()}
                </td>
                <td className="p-4 font-semibold text-emerald-700">
                  {d.internshipType}
                </td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={8}
                  className="p-6 text-center text-gray-500"
                >
                  No applications found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
