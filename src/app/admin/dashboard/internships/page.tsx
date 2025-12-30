// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
// import AdminDashboardSection from "@/sections/admin/AdminDashboardSection";

// export default async function AdminInternshipsPage() {
//   const cookieStore = await cookies();
//   const isLoggedIn = cookieStore.get("admin-auth")?.value;

//   if (isLoggedIn !== "true") {
//     redirect("/admin");
//   }

//   return <AdminDashboardSection />;
// }


import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminDashboardSection from "@/sections/admin/AdminDashboardSection";

export default async function AdminInternshipsPage() {
  const isLoggedIn = (await cookies()).get("admin-auth")?.value;

  if (isLoggedIn !== "true") {
    redirect("/admin");
  }

  return <AdminDashboardSection />;
}
