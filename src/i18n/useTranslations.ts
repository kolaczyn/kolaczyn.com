import type { AstroGlobal } from "astro";
import type { DefaultLanguage, Language } from "./types";
import { translations } from "./translations";
import type { Section } from "./sections";

export const defaultLanuage: DefaultLanguage = "en";

const getLanguageFromURL = (pathname: string): Language => {
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

  const t = (key: Section) => dict[key] ?? fallback[key];
  return { t, lang };
};
