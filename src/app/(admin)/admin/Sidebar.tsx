"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, ClipboardList, LogOut } from "lucide-react";

const menu = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Internship Applications",
    href: "/admin/dashboard/internships",
    icon: ClipboardList,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    document.cookie =
      "admin-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    router.push("/admin");
  };

  return (
    <aside className="w-64 bg-white border-r min-h-screen px-4 py-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-8">
        Admin Panel
      </h1>

      {/* Menu */}
      <nav className="space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg
              transition
              ${
                active
                  ? "bg-green-100 text-green-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="mt-10 flex items-center gap-3 px-4 py-2
        text-red-600 hover:bg-red-50 rounded-lg w-full"
      >
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  );
}
