//	====================================================================================
//	MAIN
//	====================================================================================

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

function isFunction(value: unknown): value is (...args: any[]) => Promise<any> | any {
  return typeof value === "function";
}

function isArray(value: unknown): value is any[] {
  return Array.isArray(value);
}

type Type = "string" | "boolean" | "number" | "object" | "function";

type TypeOfType<T> = T extends "string"
  ? string
  : T extends "boolean"
  ? boolean
  : T extends "number"
  ? number
  : T extends "object"
  ? object
  : T extends "function"
  ? (...args: any[]) => Promise<any> | any
  : unknown;

function isTypeOf<T extends Type>(value: unknown, type: T): value is TypeOfType<T> {
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

type KeyType = {
  key: string;
  type: Type;
};

function isObjectKeyTypeOf<KT extends Readonly<KeyType>>(
  value: unknown,
  keyType: KT
): value is {
  [key in KT["key"]]: TypeOfType<KT["type"]>;
} {
  return isObject(value) && value.hasOwnProperty(keyType.key) && isTypeOf(value[keyType.key], keyType.type);
}

function createIsObjectKeyTypeOf<KT extends KeyType>(keyType: KT) {
  return function (value: unknown): value is {
    [key in KT["key"]]: TypeOfType<KT["type"]>;
  } {
    return isObjectKeyTypeOf(value, keyType);
  };
}

function isObjectKeyTypesOf<KTs extends readonly Readonly<KeyType>[]>(value: unknown, keyTypes: KTs): boolean {
  return isObject(value) && keyTypes.every(({ key, type }) => value.hasOwnProperty(key) && isTypeOf(value[key], type));
}

function createIsObjectKeyTypesOf<KTs extends readonly Readonly<KeyType>[]>(keyTypes: KTs) {
  return function (value: unknown): value is {
    [key in KTs[number]["key"]]: TypeOfType<KTs[number]["type"]>;
  } {
    return isObjectKeyTypesOf(value, keyTypes);
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

function isFunctionArray(value: unknown): value is ((...args: any[]) => Promise<any> | any)[] {
  return isArray(value) && value.every(isFunction);
}

//	====================================================================================
//	EXPORTS
//	====================================================================================

export type { Type, TypeOfType, KeyType };
export {
  isDefined,
  isUndefined,
  isString,
  isBoolean,
  isNumber,
  isObject,
  isFunction,
  isArray,
  isTypeOf,
  isObjectKeyTypeOf,
  createIsObjectKeyTypeOf,
  isObjectKeyTypesOf,
  createIsObjectKeyTypesOf,
  isStringArray,
  isBooleanArray,
  isNumberArray,
  isObjectArray,
  isFunctionArray,
};
