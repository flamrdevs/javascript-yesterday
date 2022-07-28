import { describe, expect, it } from "vitest";

import { labs } from "./labs";

describe.skip("Labs suite", () => {
  it("Labs", async () => {
    expect(labs()).toBeTypeOf("string");
  });
});
