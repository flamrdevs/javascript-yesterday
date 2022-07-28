import { describe, expect, it } from "vitest";
import { number, average } from "./number";

describe("Get random number", () => {
  it("Between 0 and 100 (run 100times)", async () => {
    for (let i = 0; i < 100; i++) {
      const random = number(0, 100);
      expect(random).toBeGreaterThanOrEqual(0);
      expect(random).toBeLessThanOrEqual(100);
    }
  });
});

describe("Get average from array", () => {
  it("Simple average", async () => {
    expect(average([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(5);
  });
});
