"use client";

import Link from "next/link";

export default function AnnouncementBar() {
  return (
   <Link
  href="/contact"
  className="
    relative z-10 w-full h-9 sm:h-11
    flex items-center justify-center
    overflow-hidden
    bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400
    text-white text-[11px] sm:text-sm font-semibold
    px-2 hover:brightness-110
  "
>
  {/* Shine */}
  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />

  {/* Text */}
  <span className="relative flex items-center gap-2 max-w-5xl mx-auto whitespace-nowrap overflow-hidden text-ellipsis">
    <span className="hidden sm:inline animate-bounce">🚀</span> Transforming small business into smart business — Tech Vaseegrah
    <span className="hidden sm:inline animate-bounce">🚀</span>
  </span>
</Link>

  );
}
