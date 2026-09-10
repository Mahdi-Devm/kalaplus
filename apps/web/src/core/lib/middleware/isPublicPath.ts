export const PUBLIC_PATHS = ["/auth", "/_next", "/favicon.ico", "/api"];

export function isPublicPath(pathname: string) {
  return PUBLIC_PATHS.some((p) => pathname.startsWith(p));
}
