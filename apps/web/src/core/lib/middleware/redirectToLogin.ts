import { NextResponse } from "next/server";

export function redirectToLogin() {
  const response = NextResponse.next();
  response.cookies.delete("X-ACCESS");
  response.cookies.delete("X-REFRESH");

  return response;
}
