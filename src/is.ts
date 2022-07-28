//	====================================================================================
//	MAIN
//	====================================================================================

type AnyFunction = (...args: any[]) => Promise<any> | any;

type Type = "string" | "boolean" | "number" | "object" | "function";

type Typeof<T extends any> = T extends "string"
  ? string
  : T extends "boolean"
  ? boolean
  : T extends "number"
  ? number
  : T extends "object"
  ? object
  : T extends "function"
  ? AnyFunction
  : unknown;

function isDefined<T>(value: T): value is Exclude<T, undefined> {
  return typeof value !== "undefined";
}

function isUndefined(value: unknown): value is undefined {
  return typeof value === "undefined";
}

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

function isObject(value: unknown): value is object {
  return typeof value === "object";
}

function isFunction(value: unknown): value is AnyFunction {
  return typeof value === "function";
}

function isArray(value: unknown): value is any[] {
  return Array.isArray(value);
}

function isTypeof<T extends Type>(value: unknown, type: T): value is Typeof<T> {
  switch (type) {
    case "string":
      return isString(value);

    case "boolean":
      return isBoolean(value);

    case "number":
      return isNumber(value);

    case "object":
      return isObject(value);

    case "function":
      return isFunction(value);

    default:
      return false;
  }
}

function isObjectKeyTypeof<KTo extends Record<string, Type>>(
  value: unknown,
  keytypeof: KTo
): value is {
  [key in keyof KTo]: Typeof<KTo[key]>;
} {
  return isObject(value) && Object.entries(keytypeof).every(([key, type]) => value.hasOwnProperty(key) && isTypeof(value[key], type));
}

function createIsObjectKeyTypeof<KTo extends Record<string, Type>>(keytypeof: KTo) {
  return function (value: unknown): value is {
    [key in keyof KTo]: Typeof<KTo[key]>;
  } {
    return isObjectKeyTypeof(value, keytypeof);
  };
}

function isStringArray(value: unknown): value is string[] {
  return isArray(value) && value.every(isString);
}

function isBooleanArray(value: unknown): value is boolean[] {
  return isArray(value) && value.every(isBoolean);
}

function isNumberArray(value: unknown): value is number[] {
  return isArray(value) && value.every(isNumber);
}

function isObjectArray(value: unknown): value is object[] {
  return isArray(value) && value.every(isObject);
}

function isFunctionArray(value: unknown): value is AnyFunction[] {
  return isArray(value) && value.every(isFunction);
}

//	====================================================================================
//	EXPORTS
//	====================================================================================

export type { Type, Typeof };
export {
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
};
