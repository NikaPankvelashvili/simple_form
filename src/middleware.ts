// middleware.ts
import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "ka"],
  defaultLocale: "en",
  urlMappingStrategy: "rewrite",
});

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
