import { describe, expect, it } from "vitest";

import { isStringArray, isBooleanArray, isNumberArray } from "./is";

import { array } from "./array";

describe("Create array", () => {
  it("String array with length 10", async () => {
    const values: unknown[] = array((index) => `${index}`, 10);
    expect(isStringArray(values)).toBe(true);
    expect(values.length).toBe(10);
  });

  it("Boolean array with length 11", async () => {
    const values: unknown[] = array((index) => index % 2 === 0, 11);
    expect(isBooleanArray(values)).toBe(true);
    expect(values.length).toBe(11);
  });

  it("Number array with length 12", async () => {
    const values: unknown[] = array((index) => index, 12);
    expect(isNumberArray(values)).toBe(true);
    expect(values.length).toBe(12);
  });
});
