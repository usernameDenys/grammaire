import type { Lang } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/ui";

const SITE = "https://denys-holenko.com";

export default function SiteFooter({ native, sections }: { native: Lang; sections: boolean }) {
  const { footer: f, site } = getDict(native);
  const year = new Date().getFullYear();
  const links = [
    { href: "#now", label: site.nav.now },
    { href: "#map-section", label: site.nav.map },
    { href: "#road", label: site.nav.road },
    { href: "#practice", label: site.nav.practice },
    { href: "#plan", label: site.nav.plan },
    { href: "#gloss", label: site.nav.gloss },
  ];

  return (
    <footer className="site-footer">
      <div className={`sf-inner${sections ? "" : " no-nav"}`}>
        <div className="sf-brand">
          <a className="sf-name" href={SITE} target="_blank" rel="noopener">
            Denys Holenko<span className="sh-dot">.</span>
          </a>
          <p>{f.about}</p>
          <a className="sf-cta" href={SITE} target="_blank" rel="noopener">
            {f.mySite} <span aria-hidden="true">→</span>
          </a>
        </div>

        {sections && (
          <div className="sf-col">
            <h3>{f.navHeading}</h3>
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
        )}

        <div className="sf-col">
          <h3>{f.contactHeading}</h3>
          <a href="mailto:contact@denys-holenko.com">contact@denys-holenko.com</a>
          <a href={SITE} target="_blank" rel="noopener">denys-holenko.com</a>
          <span className="sf-note">{f.location}</span>
          <div className="sf-social">
            <a href="https://github.com/usernameDenys" target="_blank" rel="noopener" aria-label="GitHub">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/denys-holenko/" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="sf-bottom">
        <span>© {year} Grammar Maps · Denys Holenko</span>
        <span>{f.stored}</span>
      </div>
    </footer>
  );
}
