import { NextRequest, NextResponse } from "next/server";

export function redirectToLogin(request: NextRequest) {
  const loginUrl = new URL("/auth", request.url);

  loginUrl.searchParams.set("from", request.nextUrl.pathname);

  const response = NextResponse.redirect(loginUrl);

  response.cookies.delete("X-ACCESS");
  response.cookies.delete("X-REFRESH");

  return response;
}
