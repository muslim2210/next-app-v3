import withAuth from "./middlewares/withAuth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// membatasi halaman mana saja yang di redirect ke login dahulu
export function mainMiddleware(request: NextRequest) {
  const res = NextResponse.next();
  return res;
}

export default withAuth(mainMiddleware, [
  "/dashboard",
  "/profile",
  "/login",
  "/register",
]);
