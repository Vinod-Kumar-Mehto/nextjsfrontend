import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "de", "es", "fr", "it", "pt", "ja", "pl", "ko", "ru", "zh"],

  // Used when no locale matches
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
