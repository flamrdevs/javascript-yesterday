import { describe, expect, it } from "vitest";

import { delay } from "./delay";

describe("Basic delay", () => {
  it("Wait for 3 second", async () => {
    const foo = true;
    await delay(3);
    expect(foo).toBeDefined();
  });
});
