import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// membatasi halaman mana saja yang di redirect ke login dahulu
export function middleware(request: NextRequest) {
  const isLogin = true;
  if (!isLogin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/about/:path*"],
};