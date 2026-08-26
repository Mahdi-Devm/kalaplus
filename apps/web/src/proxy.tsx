import { NextResponse } from "next/server";

export function proxy() {
  console.log("hi mati");
  return NextResponse.next();
}

export const config = {
  matcher: "/ali",
};
