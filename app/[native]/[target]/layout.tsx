import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import LangSync from "@/components/LangSync";
import { isLang, mapsFor } from "@/lib/i18n/config";

export const dynamicParams = false;

// Only pairs with a map are built; the others redirect (see next.config.ts).
export function generateStaticParams({ params }: { params: { native: string } }) {
  return isLang(params.native) ? mapsFor(params.native).map((target) => ({ target })) : [];
}

export default async function PairLayout({ children, params }: LayoutProps<"/[native]/[target]">) {
  const { native, target } = await params;
  if (!isLang(native) || !isLang(target)) notFound();
  // data-map gives every map its own ink colour (see app/globals.css).
  return (
    <div data-map={target}>
      <LangSync target={target} />
      <SiteHeader native={native} target={target} />
      <main id="main">{children}</main>
      <SiteFooter native={native} />
    </div>
  );
}
