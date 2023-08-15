import { describe, expect, it } from "vitest";
import { formatInsert } from "./formatInsert";

describe("formatInsert", () => {
  it("returns string as is if no placeholders", () => {
    expect(formatInsert("hello world")).toBe("hello world");
  });

  it("inserts into placeholders", () => {
    expect(
      formatInsert("i love $1. But $2 is also $3", "Paris", "India", "cool")
    ).toBe("i love Paris. But India is also cool");
  });

  it("ignores values if there's less of it than placeholders", () => {
    expect(formatInsert("hello $1", "world", "and", "universe")).toBe(
      "hello world"
    );
  });

  it("ignores values if there's less of it than placeholders", () => {
    expect(formatInsert("hello $1", "world", "and", "universe")).toBe(
      "hello world"
    );
  });

  it("keeps the placeholder if there is no value for it", () => {
    expect(formatInsert("hello $1. How are $2?", "world")).toBe(
      "hello world. How are $2?"
    );
  });
});
