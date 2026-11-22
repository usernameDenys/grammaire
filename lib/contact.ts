/** Where feedback and error reports go (footer and the "report a mistake" link in every topic). */
export const CONTACT_EMAIL = "contact@denys-holenko.com";

/** mailto: link with a prefilled subject and body. */
export const mailto = (subject: string, body = "") =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`;
