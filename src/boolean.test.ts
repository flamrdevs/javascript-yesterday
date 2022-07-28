import { describe, expect, it } from "vitest";

import { boolean } from "./boolean";

describe("Get random boolean", () => {
  it("Return type is boolean", async () => {
    expect(boolean()).toBeTypeOf("boolean");
  });

  it("To be true", async () => {
    expect(boolean(-1)).toBe(true);
  });

  it("To be false", async () => {
    expect(boolean(2)).toBe(false);
  });
});
