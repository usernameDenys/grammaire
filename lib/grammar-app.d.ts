import type { Dict } from "./i18n/ui";
import type { MapContent } from "@/content";

export function initApp(strings: Dict["app"], content: MapContent, hooks?: { onSave?: (key: string) => void; mailto?: (subject: string, body?: string) => string }): void;
