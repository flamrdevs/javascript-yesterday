import { describe, expect, it } from "vitest";

import { delay } from "./promise";

describe("Delay", () => {
  it("Wait for 3 second", async () => {
    let foo: string | undefined;
    await delay(3);
    foo = "defined";
    expect(foo).toBeDefined();
  });
});
