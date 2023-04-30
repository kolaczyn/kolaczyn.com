import type { AstroGlobal } from "astro";
import { useTranslations } from "./useTranslations";
import { describe, expect, it } from "vitest";

describe("getting language", () => {
  it("extracts language from pathname", () => {
    expect(
      useTranslations({
        url: {
          pathname: "/pl",
        },
      } as AstroGlobal).lang
    ).toBe("pl");
  });
});

describe("getting translation", () => {
  it("returns translation for given key", () => {
    expect(
      useTranslations({
        url: {
          pathname: "/en/howdy",
        },
      } as AstroGlobal).t("meta.testing")
    ).toBe("This is for my unit tests");
  });

  it("uses fallback", () => {
    expect(
      useTranslations({
        url: {
          pathname: "/pl",
        },
      } as AstroGlobal).t("meta.testing-fallback")
    ).toBe("This is only in en, but not in pl");
  });
});
