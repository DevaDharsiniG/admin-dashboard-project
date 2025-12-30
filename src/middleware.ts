import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isLoggedIn = req.cookies.get("admin-auth")?.value;
  const path = req.nextUrl.pathname;

  // ❌ dashboard without login
  if (path.startsWith("/admin/dashboard") && isLoggedIn !== "true") {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  // ❌ login page after login
  if (path === "/admin" && isLoggedIn === "true") {
    return NextResponse.redirect(
      new URL("/admin/dashboard", req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
