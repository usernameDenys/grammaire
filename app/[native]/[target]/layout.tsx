import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import LangSync from "@/components/LangSync";
import { LANGS, hasMap as pairHasMap, isLang } from "@/lib/i18n/config";

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((target) => ({ target }));
}

export default async function PairLayout({ children, params }: LayoutProps<"/[native]/[target]">) {
  const { native, target } = await params;
  if (!isLang(native) || !isLang(target)) notFound();
  const hasMap = pairHasMap(native, target);
  return (
    <>
      <LangSync target={target} />
      <SiteHeader native={native} target={target} sections={hasMap} />
      <main id="main">{children}</main>
      <SiteFooter native={native} sections={hasMap} />
    </>
  );
}
