// // import { cookies } from "next/headers";
// // import { redirect } from "next/navigation";
// // import DashboardCountsSection from "@/sections/admin/DashboardCountsSection";

// // async function getCounts() {
// //   const res = await fetch(
// //     `${process.env.NEXT_PUBLIC_BASE_URL}/api/internship`,
// //     {
// //       cache: "no-store",
// //     }
// //   );

// //   // 🔴 safety check
// //   if (!res.ok) {
// //     return {
// //       web: 0,
// //       webApp: 0,
// //       uiux: 0,
// //       dsml: 0,
// //       total: 0,
// //     };
// //   }

// //   const data = await res.json();

// //   return {
// //     web: data.filter(
// //       (d: any) => d.internshipType === "Web Development"
// //     ).length,

// //     webApp: data.filter(
// //       (d: any) => d.internshipType === "Web App Development"
// //     ).length,

// //     uiux: data.filter(
// //       (d: any) => d.internshipType === "UI/UX"
// //     ).length,

// //     dsml: data.filter(
// //       (d: any) =>
// //         d.internshipType === "Data Science/ Machine Learning"
// //     ).length,

// //     total: data.length,
// //   };
// // }

// // export default async function AdminDashboardPage() {
// //   // ✅ COOKIE CHECK (SERVER SIDE)
// //   const cookieStore = await cookies();
// //   const isLoggedIn = cookieStore.get("admin-auth")?.value;

// //   // 🔒 PROTECTION
// //   if (isLoggedIn !== "true") {
// //     redirect("/admin");
// //   }

// //   const counts = await getCounts();

// //   return <DashboardCountsSection counts={counts} />;
// // }



// import DashboardCountsSection from "@/sections/admin/DashboardCountsSection";

// export const dynamic = "force-dynamic"; // 🔥 IMPORTANT

// async function getCounts() {
//   const res = await fetch("http://localhost:3000/api/internship", {
//     cache: "no-store",
//   });

//   const data = await res.json();

//   console.log("DASHBOARD DATA 👉", data);

//   return {
//     web: data.filter(
//       (d: any) => d.internshipType === "Web Development"
//     ).length,

//     webApp: data.filter(
//       (d: any) => d.internshipType === "Web App Development"
//     ).length,

//     uiux: data.filter(
//       (d: any) => d.internshipType === "UI/UX"
//     ).length,

//     dsml: data.filter(
//       (d: any) =>
//         d.internshipType === "Data Science/ Machine Learning"
//     ).length,

//     total: data.length,
//   };
// }

// export default async function AdminDashboardPage() {
//   const counts = await getCounts();

//   console.log("FINAL COUNTS 👉", counts);

//   return <DashboardCountsSection counts={counts} />;
// }




import DashboardCountsSection from "@/sections/admin/DashboardCountsSection";
import DashboardChartsSection from "@/sections/admin/DashboardChartsSection";

export const dynamic = "force-dynamic";

// ✅ FUNCTION NAME CHANGE
async function getCounts() {
  const res = await fetch("http://localhost:3000/api/internship", {
    cache: "no-store",
  });

  const data = await res.json();

  return {
    web: data.filter(
      (d: any) => d.internshipType === "Web Development"
    ).length,

    webApp: data.filter(
      (d: any) => d.internshipType === "Web App Development"
    ).length,

    uiux: data.filter(
      (d: any) => d.internshipType === "UI/UX"
    ).length,

    dsml: data.filter(
      (d: any) =>
        d.internshipType === "Data Science/ Machine Learning"
    ).length,

    total: data.length,
  };
}

export default async function AdminDashboardPage() {
  // ✅ VARIABLE + FUNCTION CONFUSION FIXED
  const counts = await getCounts();

  return (
    <div className="space-y-8">
      <DashboardCountsSection counts={counts} />
      <DashboardChartsSection counts={counts} />
    </div>
  );
}
