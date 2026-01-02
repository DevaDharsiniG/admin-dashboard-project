

// "use client";
// import { useEffect, useState } from "react";

// const TYPES = [
//   { label: "Web Development", value: "Web Development" },
//   { label: "Web App Development", value: "Web App Development" },
//   { label: "UI / UX", value: "UI/UX" },
//   { label: "DS / ML", value: "Data Science/ Machine Learning" },
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
//     <div className="p-8 bg-emerald-50 min-h-screen">
//       {/* TITLE */}
//       <h1 className="text-3xl font-bold mb-8 text-emerald-900">
//         Internship Applications
//       </h1>

//       {/* FILTER CARDS */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
//         {TYPES.map((t) => (
//           <div
//             key={t.value}
//             onClick={() => setSelectedType(t.value)}
//             className={`
//               cursor-pointer rounded-xl p-5 shadow-sm
//               transition-all duration-200
//               ${
//                 selectedType === t.value
//                   ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white scale-[1.03]"
//                   : "bg-white hover:shadow-md"
//               }
//             `}
//           >
//             <p className="text-sm opacity-90">{t.label}</p>
//             <p className="text-3xl font-bold mt-2">
//               {count(t.value)}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* RESET */}
//       {selectedType !== "ALL" && (
//         <button
//           onClick={() => setSelectedType("ALL")}
//           className="mb-6 text-sm text-emerald-700 font-semibold hover:underline"
//         >
//           Reset Filter
//         </button>
//       )}

//       {/* TABLE */}
//       <div className="bg-white rounded-2xl shadow-md overflow-hidden">
//         <table className="w-full text-sm">
//           <thead className="bg-emerald-600 text-white">
//             <tr>
//               <th className="p-4 text-left">Name</th>
//               <th className="p-4">Email</th>
//               <th className="p-4">College</th>
//               <th className="p-4">Department</th>
//               <th className="p-4">Duration</th>
//               <th className="p-4">From</th>
//               <th className="p-4">To</th>
//               <th className="p-4">Type</th>
//             </tr>
//           </thead>

//           <tbody>
//             {filtered.map((d, i) => (
//               <tr
//                 key={i}
//                 className="border-b hover:bg-emerald-50 transition"
//               >
//                 <td className="p-4 font-medium">{d.name}</td>
//                 <td className="p-4">{d.email}</td>
//                 <td className="p-4">{d.college}</td>
//                 <td className="p-4">{d.department}</td>
//                 <td className="p-4">{d.duration}</td>
//                 <td className="p-4">
//                   {new Date(d.fromDate).toLocaleDateString()}
//                 </td>
//                 <td className="p-4">
//                   {new Date(d.toDate).toLocaleDateString()}
//                 </td>
//                 <td className="p-4 font-semibold text-emerald-700">
//                   {d.internshipType}
//                 </td>
//               </tr>
//             ))}

//             {filtered.length === 0 && (
//               <tr>
//                 <td
//                   colSpan={8}
//                   className="p-6 text-center text-gray-500"
//                 >
//                   No applications found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }




"use client";
import { useEffect, useState } from "react";
import { 
  Users, 
  Globe, 
  Code, 
  Palette, 
  Cpu,
  Filter,
  X,
  Calendar,
  Mail,
  Building,
  GraduationCap,
  Clock,
  ChevronRight
} from "lucide-react";

const TYPES = [
  { 
    label: "Web Development", 
    value: "Web Development",
    icon: Globe,
    color: "from-emerald-400 to-emerald-600"
  },
  { 
    label: "Web App", 
    value: "Web App Development",
    icon: Code,
    color: "from-teal-400 to-teal-600"
  },
  { 
    label: "UI / UX", 
    value: "UI/UX",
    icon: Palette,
    color: "from-green-400 to-green-600"
  },
  { 
    label: "DS / ML", 
    value: "Data Science/ Machine Learning",
    icon: Cpu,
    color: "from-emerald-500 to-teal-700"
  },
];

export default function AdminDashboardSection() {
  const [data, setData] = useState<any[]>([]);
  const [selectedType, setSelectedType] = useState("ALL");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/internship", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered =
    selectedType === "ALL"
      ? data
      : data.filter((d) => d.internshipType === selectedType);

  const count = (type: string) =>
    data.filter((d) => d.internshipType === type).length;

  return (
    <div className="p-6 bg-gradient-to-br from-emerald-50 via-white to-teal-50 min-h-screen">
      {/* Header Section */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-700 to-teal-900 bg-clip-text text-transparent">
              Internship Applications
            </h1>
            <p className="text-emerald-600 mt-2">
              Manage and track all internship submissions
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-emerald-100">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-600" />
                <span className="font-semibold text-emerald-800">
                  {data.length} Total
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {TYPES.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.value}
                onClick={() => setSelectedType(t.value)}
                className={`
                  relative cursor-pointer rounded-2xl p-6
                  transition-all duration-300 transform hover:scale-[1.02]
                  ${selectedType === t.value
                    ? `bg-gradient-to-r ${t.color} shadow-lg scale-[1.02]`
                    : "bg-white shadow-md hover:shadow-xl border border-emerald-50"
                  }
                  overflow-hidden group
                `}
              >
                {/* Background pattern */}
                <div className={`absolute inset-0 opacity-5 ${selectedType === t.value ? 'bg-white' : 'bg-emerald-500'}`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${selectedType === t.value ? 'bg-white/20' : 'bg-emerald-50'}`}>
                      <Icon className={`w-6 h-6 ${selectedType === t.value ? 'text-white' : 'text-emerald-600'}`} />
                    </div>
                    {selectedType === t.value && (
                      <div className="animate-pulse">
                        <ChevronRight className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                  
                  <p className={`text-sm font-medium ${selectedType === t.value ? 'text-white/90' : 'text-emerald-600'}`}>
                    {t.label}
                  </p>
                  <p className={`text-3xl font-bold mt-2 ${selectedType === t.value ? 'text-white' : 'text-emerald-900'}`}>
                    {count(t.value)}
                  </p>
                  
                  <div className={`h-1 w-12 mt-4 rounded-full transition-all duration-300 ${
                    selectedType === t.value ? 'bg-white' : 'bg-gradient-to-r from-emerald-400 to-teal-400'
                  }`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-emerald-100">
              <Filter className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">
                Filtered by: 
              </span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-lg font-semibold text-sm">
                {selectedType === "ALL" ? "All Types" : selectedType}
              </span>
            </div>
            
            {selectedType !== "ALL" && (
              <button
                onClick={() => setSelectedType("ALL")}
                className="flex items-center gap-2 px-4 py-2 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-all duration-200 shadow-sm border border-emerald-100 hover:shadow"
              >
                <X className="w-4 h-4" />
                Reset Filter
              </button>
            )}
          </div>
          
          <div className="text-sm text-emerald-600 font-medium">
            Showing {filtered.length} of {data.length} applications
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-emerald-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-emerald-600 to-teal-700">
                <th className="p-5 text-left text-white font-semibold text-sm uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Applicant
                  </div>
                </th>
                <th className="p-5 text-left text-white font-semibold text-sm uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Contact
                  </div>
                </th>
                <th className="p-5 text-left text-white font-semibold text-sm uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    Institution
                  </div>
                </th>
                <th className="p-5 text-left text-white font-semibold text-sm uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Duration
                  </div>
                </th>
                <th className="p-5 text-left text-white font-semibold text-sm uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Timeline
                  </div>
                </th>
                <th className="p-5 text-left text-white font-semibold text-sm uppercase tracking-wider">
                  Type
                </th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                // Loading Skeleton
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className="border-b border-emerald-50 animate-pulse">
                    <td className="p-5">
                      <div className="h-4 bg-emerald-100 rounded w-32"></div>
                    </td>
                    <td className="p-5">
                      <div className="h-4 bg-emerald-100 rounded w-40"></div>
                    </td>
                    <td className="p-5">
                      <div className="h-4 bg-emerald-100 rounded w-28"></div>
                    </td>
                    <td className="p-5">
                      <div className="h-4 bg-emerald-100 rounded w-24"></div>
                    </td>
                    <td className="p-5">
                      <div className="h-4 bg-emerald-100 rounded w-36"></div>
                    </td>
                    <td className="p-5">
                      <div className="h-6 bg-emerald-100 rounded w-20"></div>
                    </td>
                  </tr>
                ))
              ) : filtered.length > 0 ? (
                filtered.map((d, i) => (
                  <tr
                    key={i}
                    className="border-b border-emerald-50 hover:bg-gradient-to-r hover:from-emerald-50/50 hover:to-teal-50/50 transition-all duration-200 group"
                  >
                    <td className="p-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-emerald-100 to-teal-100 flex items-center justify-center group-hover:from-emerald-200 group-hover:to-teal-200 transition-all">
                          <span className="font-bold text-emerald-700">
                            {d.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-emerald-900">
                            {d.name}
                          </p>
                          <p className="text-sm text-emerald-600">
                            {d.department}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-5">
                      <div className="space-y-1">
                        <p className="font-medium text-emerald-900">{d.email}</p>
                      </div>
                    </td>
                    <td className="p-5">
                      <div className="space-y-1">
                        <p className="font-medium text-emerald-900">{d.college}</p>
                      </div>
                    </td>
                    <td className="p-5">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-lg">
                        <Clock className="w-4 h-4 text-emerald-600" />
                        <span className="font-semibold text-emerald-800">
                          {d.duration}
                        </span>
                      </div>
                    </td>
                    <td className="p-5">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                          <span className="text-sm font-medium text-emerald-700">
                            {new Date(d.fromDate).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                          <span className="text-sm font-medium text-emerald-700">
                            {new Date(d.toDate).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="p-5">
                      <span className="px-3 py-1.5 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 font-semibold rounded-lg text-sm">
                        {d.internshipType}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="p-10 text-center"
                  >
                    <div className="flex flex-col items-center justify-center gap-4">
                      <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center">
                        <Users className="w-10 h-10 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-emerald-900 mb-2">
                          No applications found
                        </h3>
                        <p className="text-emerald-600 max-w-md">
                          {selectedType === "ALL" 
                            ? "There are no internship applications yet."
                            : `No applications found for "${selectedType}". Try selecting a different filter.`
                          }
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Table Footer */}
        {filtered.length > 0 && (
          <div className="px-5 py-4 bg-emerald-50 border-t border-emerald-100">
            <div className="flex items-center justify-between">
              <div className="text-sm text-emerald-700">
                Showing <span className="font-bold">{filtered.length}</span> applications
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm text-emerald-600">
                  Last updated: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}