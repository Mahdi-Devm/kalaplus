import { NextRequest, NextResponse } from "next/server";
import { BASE_URL } from "../basic-link/BackendBasicLink";
export async function refreshFromMiddleware(request: NextRequest) {
  try {
    const refreshToken = request.cookies.get("X-REFRESH")?.value;

    if (!refreshToken) {
      return null;
    }

    const refreshRes = await fetch(`${BASE_URL}/auth/refresh-token`, {
      method: "POST",
      headers: {
        Cookie: `X-REFRESH=${refreshToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!refreshRes.ok) {
      return null;
    }

    const setCookie = refreshRes.headers.get("set-cookie");

    if (!setCookie) {
      return NextResponse.next();
    }

    const response = NextResponse.redirect(request.url);

    response.headers.set("Set-Cookie", setCookie);

    return response;
  } catch {
    return null;
  }
}
