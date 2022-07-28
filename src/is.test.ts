import { describe, expect, it } from "vitest";

import { getValuesOnly, getValuesExcept, getValuesArray, getValuesNotArray } from "./is.test.utilities";

import {
  isDefined,
  isUndefined,
  isString,
  isBoolean,
  isNumber,
  isObject,
  isFunction,
  isArray,
  isTypeof,
  isObjectKeyTypeof,
  createIsObjectKeyTypeof,
  isStringArray,
  isBooleanArray,
  isNumberArray,
  isObjectArray,
  isFunctionArray,
} from "./is";

describe("Definition", () => {
  it("Work correctly", async () => {
    let object: Record<string, unknown> = {
      foo: "string",
    };

    expect(isDefined(object.foo)).toBe(true);
    expect(isDefined(object.bar)).toBe(false);

    expect(isUndefined(object.foo)).toBe(false);
    expect(isUndefined(object.bar)).toBe(true);
  });
});

describe("Type of value", () => {
  describe("Type string", () => {
    const ONLY_STRING_VALUES = getValuesOnly("string");
    const EXCEPT_STRING_VALUES = getValuesExcept("string");

    it("Typeof each value is string", async () => {
      for (const value of ONLY_STRING_VALUES) {
        expect(isString(value)).toBe(true);
        expect(isTypeof(value, "string")).toBe(true);
      }
      expect(isStringArray(ONLY_STRING_VALUES)).toBe(true);
    });

    it("Typeof each value isn't string", async () => {
      for (const value of EXCEPT_STRING_VALUES) {
        expect(isString(value)).toBe(false);
        expect(isTypeof(value, "string")).toBe(false);
      }
      expect(isStringArray(EXCEPT_STRING_VALUES)).toBe(false);
    });
  });

  describe("Type boolean", () => {
    const ONLY_BOOLEAN_VALUES = getValuesOnly("boolean");
    const EXCEPT_BOOLEAN_VALUES = getValuesExcept("boolean");

    it("Typeof each value is boolean", async () => {
      for (const value of ONLY_BOOLEAN_VALUES) {
        expect(isBoolean(value)).toBe(true);
        expect(isTypeof(value, "boolean")).toBe(true);
      }
      expect(isBooleanArray(ONLY_BOOLEAN_VALUES)).toBe(true);
    });

    it("Typeof each value isn't boolean", async () => {
      for (const value of EXCEPT_BOOLEAN_VALUES) {
        expect(isBoolean(value)).toBe(false);
        expect(isTypeof(value, "boolean")).toBe(false);
      }
      expect(isBooleanArray(EXCEPT_BOOLEAN_VALUES)).toBe(false);
    });
  });

  describe("Type number", () => {
    const ONLY_NUMBER_VALUES = getValuesOnly("number");
    const EXCEPT_NUMBER_VALUES = getValuesExcept("number");

    it("Typeof each value is number", async () => {
      for (const value of ONLY_NUMBER_VALUES) {
        expect(isNumber(value)).toBe(true);
        expect(isTypeof(value, "number")).toBe(true);
      }
      expect(isNumberArray(ONLY_NUMBER_VALUES)).toBe(true);
    });

    it("Typeof each value isn't number", async () => {
      for (const value of EXCEPT_NUMBER_VALUES) {
        expect(isNumber(value)).toBe(false);
        expect(isTypeof(value, "number")).toBe(false);
      }
      expect(isNumberArray(EXCEPT_NUMBER_VALUES)).toBe(false);
    });
  });

  describe("Type object", () => {
    const ONLY_OBJECT_VALUES = getValuesOnly("object");
    const EXCEPT_OBJECT_VALUES = getValuesExcept("object");

    it("Typeof each value is object", async () => {
      for (const value of ONLY_OBJECT_VALUES) {
        expect(isObject(value)).toBe(true);
        expect(isTypeof(value, "object")).toBe(true);
      }
      expect(isObjectArray(ONLY_OBJECT_VALUES)).toBe(true);
    });

    it("Typeof each value isn't object", async () => {
      for (const value of EXCEPT_OBJECT_VALUES) {
        expect(isObject(value)).toBe(false);
        expect(isTypeof(value, "object")).toBe(false);
      }
      expect(isObjectArray(EXCEPT_OBJECT_VALUES)).toBe(false);
    });
  });

  describe("Type function", () => {
    const ONLY_FUNCTION_VALUES = getValuesOnly("function");
    const EXCEPT_FUNCTION_VALUES = getValuesExcept("function");

    it("Typeof each value is function", async () => {
      for (const value of ONLY_FUNCTION_VALUES) {
        expect(isFunction(value)).toBe(true);
        expect(isTypeof(value, "function")).toBe(true);
      }
      expect(isFunctionArray(ONLY_FUNCTION_VALUES)).toBe(true);
    });

    it("Typeof each value isn't function", async () => {
      for (const value of EXCEPT_FUNCTION_VALUES) {
        expect(isFunction(value)).toBe(false);
        expect(isTypeof(value, "function")).toBe(false);
      }
      expect(isFunctionArray(EXCEPT_FUNCTION_VALUES)).toBe(false);
    });
  });

  describe("Type array", () => {
    const ARRAY_VALUES = getValuesArray();
    const NOT_ARRAY_VALUES = getValuesNotArray();

    it("Typeof each value is array", async () => {
      for (const value of ARRAY_VALUES) expect(isArray(value)).toBe(true);
    });

    it("Typeof each value isn't array", async () => {
      for (const value of NOT_ARRAY_VALUES) expect(isArray(value)).toBe(false);
    });
  });
});

describe("Object has key with type", () => {
  const object: unknown = {
    foo: "string",
    bar: true,
    baz: 0,
  };

  const keytypes = {
    foo: "string",
    bar: "boolean",
    baz: "number",
  } as const;

  it("Correct isObjectKeyTypeof typing", async () => {
    expect(isObjectKeyTypeof(undefined, keytypes)).toBeTypeOf("boolean");
  });

  it("Manual create isValidObject", async () => {
    const isValidObject = (value: unknown): value is { foo: string; bar: boolean } => {
      return isObjectKeyTypeof(value, keytypes);
    };

    if (isValidObject(object)) {
      expect(object.foo).toBeTypeOf("string");
      expect(object.bar).toBeTypeOf("boolean");
    } else {
      expect((object as any).foo).toBeUndefined();
    }
  });

  it("Correct createIsObjectKeyTypeof typing", async () => {
    const fn = createIsObjectKeyTypeof(keytypes);
    expect(fn).toBeTypeOf("function");
    expect(fn(undefined)).toBeTypeOf("boolean");
  });

  it("Auto create isValidObject", async () => {
    const isValidObject = createIsObjectKeyTypeof(keytypes);

    if (isValidObject(object)) {
      expect(object.foo).toBeTypeOf("string");
      expect(object.bar).toBeTypeOf("boolean");
    } else {
      expect((object as any).foo).toBeUndefined();
    }
  });
});
