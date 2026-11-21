import { type Lang, firstMapFor, pairPath } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/ui";

export default function ComingSoon({ native, target }: { native: Lang; target: Lang }) {
  const d = getDict(native);
  // Offer a working map in the same interface language, if there is one.
  const fallback = firstMapFor(native);
  return (
    <div className="wrap">
      <section className="soon">
        <span className="badge">
          <i />
          {d.soon.eyebrow}
        </span>
        <h1 dangerouslySetInnerHTML={{ __html: d.soon.titleHtml(target) }} />
        <p>
          {d.soon.text}
          {fallback && ` ${d.soon.textAlt}`}
        </p>
        {fallback && (
          // Plain <a>: switching maps reloads the page so the map script starts fresh.
          <a className="btn primary" href={pairPath(native, fallback)}>
            {d.soon.cta} →
          </a>
        )}
      </section>
    </div>
  );
}
