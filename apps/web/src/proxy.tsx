import { NextRequest, NextResponse } from "next/server";
import { isPublicPath } from "./core/lib/middleware/isPublicPath";
import { redirectToLogin } from "./core/lib/middleware/redirectToLogin";
import { refreshFromMiddleware } from "./core/lib/middleware/refreshFromMiddleware";
import { isTokenExpired } from "./core/lib/token/token";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }
  const accessToken = request.cookies.get("X-ACCESS")?.value;
  if (!accessToken || isTokenExpired(accessToken)) {
    const refreshed = await refreshFromMiddleware(request);
    if (refreshed) {
      return refreshed;
    }
    return redirectToLogin(request);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
