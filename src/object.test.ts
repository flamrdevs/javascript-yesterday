import { describe, expect, it } from "vitest";

import { isObject } from "./is";

import { hasOwnProperty, hasOwnProperties } from "./object";

describe("Has own property", () => {
  const object: unknown = { foo: true };

  it("Object has property", async () => {
    expect(isObject(object) && hasOwnProperty(object, "foo")).toBeTruthy();
  });

  it("Object hasn't property", async () => {
    expect(isObject(object) && hasOwnProperty(object, "bar")).toBeFalsy();
  });
});

describe("Has own properties", () => {
  const object: unknown = { foo: true, bar: false };

  it("Object has properties", async () => {
    expect(isObject(object) && hasOwnProperties(object, "foo", "bar")).toBeTruthy();
  });

  it("Object hasn't properties", async () => {
    expect(isObject(object) && hasOwnProperties(object, "bar", "baz")).toBeFalsy();
  });
});
