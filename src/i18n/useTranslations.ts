import type { AstroGlobal } from "astro";
import type { Language } from "./types";
import { defaultLanuage } from "./constants";
import { translations } from "./translations";
import type { Section } from "./sections";

export const getLanguageFromURL = (pathname: string): Language => {
  // workaround, for now
  if (pathname.startsWith("/blog")) return defaultLanuage;
  const langCodeMatch = pathname.match(/\/([a-z]{2})/)?.[1];
  // not perfect, because we're using `as`, so we lose some type safety
  // but this should do for now
  return (langCodeMatch as Language) ?? defaultLanuage;
};

export const useTranslations = (Astro: Readonly<AstroGlobal>) => {
  const lang = getLanguageFromURL(Astro.url.pathname);

  const dict = translations[lang];
  const fallback = translations[defaultLanuage];
  return { t: (key: Section) => dict[key] ?? fallback[key], lang };
};
