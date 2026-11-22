import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import GrammarMap from "@/components/GrammarMap";
import { LANGS, hasMap, isLang, mapPath, pairPath } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/ui";

export async function generateMetadata({ params }: PageProps<"/[native]/[target]">): Promise<Metadata> {
  const { native, target } = await params;
  if (!isLang(native) || !isLang(target)) return {};
  const d = getDict(native);
  return {
    title: d.meta.title(target),
    description: d.meta.description(target),
    applicationName: "Grammar Maps",
    alternates: {
      canonical: pairPath(native, target),
      // Only interface languages that have a map for this target.
      languages: Object.fromEntries(LANGS.filter((l) => hasMap(l, target)).map((l) => [l, pairPath(l, target)])),
    },
  };
}

export default async function Page({ params }: PageProps<"/[native]/[target]">) {
  const { native, target } = await params;
  if (!isLang(native) || !isLang(target)) notFound();
  // Normally handled by the redirects in next.config.ts; kept as a safety net.
  if (!hasMap(native, target)) redirect(mapPath(native, target));
  return <GrammarMap native={native} target={target} />;
}
