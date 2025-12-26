import type { Metadata } from "next";
import {Space_Grotesk, Space_Mono, DM_Sans} from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Header from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import CookieConsent from "@/sections/CookieConsent";

const spaceGrotesk = Space_Grotesk({
  subsets:["latin"],
  weight: ["400","500","600","700"],
  variable:"--font-space-grotesk",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400"], // We only need the 400 weight
  variable: "--font-space-mono",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"], // Regular and Medium
  variable: "--font-dm-sans",
});;

export const metadata: Metadata = {
  title: "Tech Vaseegrah",
  description: "Transforming small businesses into smart businesses",
  icons: {
    icon: [
      { url: "/tech-v.png", sizes: "32x32", type: "image/png" },
      { url: "/tech-v.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/tech-v.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?\'&l=\'+l:\'\';j.async=true;j.src=
\'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,\'script\',\'dataLayer\',\'GTM-MS7KVRWV\');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={twMerge(spaceGrotesk.variable, spaceMono.variable,dmSans.variable,
                                "font-sans antialiased bg-[#FFF]")}>   
                                
                                    
        <Header />
        <main>{children}</main>
        <CookieConsent /> {/* 👈 Inserted here */}
        <Footer  />
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MS7KVRWV"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* This will only show in the source code */}
        <div
          dangerouslySetInnerHTML={{
            __html: `
<!--
p
  r
    e 
      m 
        *t(-_-t) *
 -->
  `,
          }}
        />
      </body>
    </html>
  );
}