import { type Lang, mapsFor, pairPath } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/ui";

export default function ComingSoon({ native, target }: { native: Lang; target: Lang }) {
  const d = getDict(native);
  // Offer every working map in the same interface language.
  const available = mapsFor(native);
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
          {available.length > 0 && ` ${d.soon.textAlt}`}
        </p>
        {available.length > 0 && (
          <div className="soon-maps">
            {available.map((t, i) => (
              // Plain <a>: switching maps reloads the page so the map script starts fresh.
              <a key={t} className={`btn${i === 0 ? " primary" : ""}`} href={pairPath(native, t)}>
                {d.soon.cta(t)} →
              </a>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
