// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
// import Sidebar from "@/sections/admin/Sidebar";

// export default async function AdminDashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const isLoggedIn = (await cookies()).get("admin-auth")?.value;

//   // 🔐 HARD SECURITY
//   if (isLoggedIn !== "true") {
//     redirect("/admin"); // login page
//   }

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       <Sidebar />
//       <main className="flex-1 p-6 overflow-y-auto">
//         {children}
//       </main>
//     </div>
//   );
// }


// export default function AdminLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="min-h-screen bg-slate-100">
//       {children}
//     </div>
//   );
// }


//
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}



