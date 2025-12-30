// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";

// export default function Sidebar() {
//   const pathname = usePathname();
//   const router = useRouter();

//   const linkClass = (path: string) =>
//     `block px-4 py-3 rounded-lg ${
//       pathname === path
//         ? "bg-green-600 text-white"
//         : "text-gray-700 hover:bg-green-100"
//     }`;

//   // 🔴 LOGOUT FUNCTION (REAL LOGOUT)
//   const handleLogout = async () => {
//     await fetch("/api/admin/logout", {
//       method: "POST",
//     });

//     // 🔁 Home page ku redirect
//     router.replace("/");
//     router.refresh();
//   };

//   return (
//     <aside className="w-64 min-h-screen bg-white border-r p-4">
//       <h2 className="text-xl font-bold text-green-700 mb-6">
//         Admin Panel
//       </h2>

//       <nav className="space-y-2">
//         <Link
//           href="/admin/dashboard"
//           className={linkClass("/admin/dashboard")}
//         >
//           Dashboard
//         </Link>

//         <Link
//           href="/admin/dashboard/internships"
//           className={linkClass("/admin/dashboard/internships")}
//         >
//           Internship Applications
//         </Link>

//         {/* 🔴 LOGOUT BUTTON */}
//         <button
//           onClick={handleLogout}
//           className="w-full text-left px-4 py-3 rounded-lg text-red-600 hover:bg-red-100"
//         >
//           Logout
//         </button>
//       </nav>
//     </aside>
//   );
// }




"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const linkClass = (path: string) =>
    `block px-5 py-3 rounded-lg transition ${
      pathname === path
        ? "bg-white/20 text-white"
        : "text-green-100 hover:bg-white/10 hover:text-white"
    }`;

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/");
    router.refresh();
  };

  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-green-800 to-emerald-700 p-6 text-white">
      <h1 className="text-2xl font-bold mb-10 tracking-wide">
        Admin Panel
      </h1>

      <nav className="space-y-3">
        <Link href="/admin/dashboard" className={linkClass("/admin/dashboard")}>
          📊 Dashboard
        </Link>

        <Link
          href="/admin/dashboard/internships"
          className={linkClass("/admin/dashboard/internships")}
        >
          📋 Internship Applications
        </Link>

        <button
          onClick={handleLogout}
          className="w-full text-left px-5 py-3 rounded-lg text-red-200 hover:bg-red-500/20 hover:text-white"
        >
          🚪 Logout
        </button>
      </nav>
    </aside>
  );
}
