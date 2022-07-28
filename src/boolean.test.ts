import { describe, expect, it } from "vitest";

import { getRandomBoolean } from "./boolean";

describe("Get random boolean", () => {
  it("Return type is boolean", async () => {
    expect(getRandomBoolean()).toBeTypeOf("boolean");
  });

  it("To be true", async () => {
    expect(getRandomBoolean(-1)).toBe(true);
  });

  it("To be false", async () => {
    expect(getRandomBoolean(2)).toBe(false);
  });
});
