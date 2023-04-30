import type { Section } from "./sections";

export type Language = "en" | "pl";
export type DefaultLanguage = "en";

// Only the main language has to have every field specified.
// The other ones inherit the missing fields from the default language.
export type TranslationDict = {
  [key in Language]: key extends DefaultLanguage
    ? Record<Section, string>
    : Partial<Record<Section, string>>;
};
