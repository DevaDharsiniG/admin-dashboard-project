


import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Sidebar from "@/sections/admin/Sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLoggedIn = (await cookies()).get("admin-auth")?.value;

  if (isLoggedIn !== "true") {
    redirect("/admin");
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
