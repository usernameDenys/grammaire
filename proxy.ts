import { NextResponse, type NextRequest } from "next/server";
import {
  DEFAULT_NATIVE,
  DEFAULT_TARGET,
  NATIVE_COOKIE,
  TARGET_COOKIE,
  isLang,
  mapPath,
  matchLang,
  parseAcceptLanguage,
} from "@/lib/i18n/config";

// "/" has no page of its own. The interface (native) language comes from the system
// (Accept-Language) unless the user explicitly chose one; the target is the last opened map.
export function proxy(request: NextRequest) {
  const chosen = request.cookies.get(NATIVE_COOKIE)?.value;
  const native = isLang(chosen)
    ? chosen
    : (matchLang(parseAcceptLanguage(request.headers.get("accept-language"))) ?? DEFAULT_NATIVE);

  const last = request.cookies.get(TARGET_COOKIE)?.value;
  const target = isLang(last) ? last : DEFAULT_TARGET;

  return NextResponse.redirect(new URL(mapPath(native, target), request.url));
}

export const config = { matcher: "/" };
