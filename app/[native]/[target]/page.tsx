import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GrammarMap from "@/components/GrammarMap";
import ComingSoon from "@/components/ComingSoon";
import { LANGS, hasMap, isLang, pairPath } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/ui";

export async function generateMetadata({ params }: PageProps<"/[native]/[target]">): Promise<Metadata> {
  const { native, target } = await params;
  if (!isLang(native) || !isLang(target)) return {};
  const d = getDict(native);
  return {
    title: d.meta.title(target),
    // A pair without a map gets the "coming soon" text rather than a map description.
    description: hasMap(native, target) ? d.meta.description(target) : d.soon.text,
    applicationName: "Grammar Maps",
    alternates: {
      canonical: pairPath(native, target),
      languages: Object.fromEntries(LANGS.map((l) => [l, pairPath(l, target)])),
    },
  };
}

export default async function Page({ params }: PageProps<"/[native]/[target]">) {
  const { native, target } = await params;
  if (!isLang(native) || !isLang(target)) notFound();
  if (!hasMap(native, target)) return <ComingSoon native={native} target={target} />;
  return <GrammarMap native={native} target={target} />;
}
