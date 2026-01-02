// import type { Metadata } from "next";
// import {Space_Grotesk, Space_Mono, DM_Sans} from "next/font/google";
// import "./globals.css";
// import { twMerge } from "tailwind-merge";
// import Header from "@/sections/Header";
// import {Footer} from "@/sections/Footer";
// import CookieConsent from "@/sections/CookieConsent";

// import AnnouncementBar from "@/components/AnnouncementBar";



// const spaceGrotesk = Space_Grotesk({
//   subsets:["latin"],
//   weight: ["400","500","600","700"],
//   variable:"--font-space-grotesk",
// });

// const spaceMono = Space_Mono({
//   subsets: ["latin"],
//   weight: ["400"], // We only need the 400 weight
//   variable: "--font-space-mono",
// })

// const dmSans = DM_Sans({
//   subsets: ["latin"],
//   weight: ["400", "500"], // Regular and Medium
//   variable: "--font-dm-sans",
// });;

// export const metadata: Metadata = {
//   title: "Tech Vaseegrah",
//   description: "Transforming small businesses into smart businesses",
//   icons: {
//     icon: [
//       { url: "/tech-v.png", sizes: "32x32", type: "image/png" },
//       { url: "/tech-v.png", sizes: "16x16", type: "image/png" },
//     ],
//     apple: "/tech-v.png",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className="relative">
//       <body className={twMerge(spaceGrotesk.variable, spaceMono.variable,dmSans.variable,
//                                 "font-sans antialiased bg-[#FFF]")}>      
//         <AnnouncementBar />
//         <Header />
//         <main>{children}</main>
//         <CookieConsent /> {/* 👈 Inserted here */}
//         <Footer  />
//         {/* This will only show in the source code */}
//         <div
//           dangerouslySetInnerHTML={{
//             __html: `
// <!--
// p
//   r
//     e 
//       m 
//         *t(-_-t) *
//  -->
//   `,
//           }}
//         />
//       </body>
//     </html>
//   );
// }





import "./globals.css";

import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";

/* ✅ GOOGLE FONTS – SAME AS LIVE SITE */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tech Vaseegrah",
  description: "Automate your business with smart digital solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable}`}
    >
      <body className="font-body antialiased">
       

        <main>{children}</main>

       
      </body>
    </html>
  );
}
