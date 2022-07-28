const STRINGS: string[] = ["string", `string`, String("string"), String(true), String(0), Number(1).toString()];
const BOOLEANS: boolean[] = [true, false, Boolean(0), Boolean(1), Boolean("true"), Boolean("false"), Boolean("")];
const NUMBERS: number[] = [0, 1, Number(0), Number("")];
const OBJECTS: object[] = [new Set(), new Map(), [], new Array(), {}, new Object()];
const FUNCTIONS: ((...args: any[]) => any)[] = [() => {}, function () {}];

const ARRAYINARRAY: any[][] = [new Array(), [0, "", false, {}, [], () => {}], Array.from(new Set([0, "", false])), Array.from(new Map())];

type Type = "string" | "boolean" | "number" | "object" | "function";
const TYPES: Type[] = ["string", "boolean", "number", "object", "function"];

function getTypesExcept(type: Type) {
  return TYPES.filter((variant) => variant !== type);
}

function getValuesWithType(...types: Type[]): unknown[] {
  let result: any[] = [];
  const _types = new Set(types);
  if (_types.has("string")) result.push(...STRINGS);
  if (_types.has("boolean")) result.push(...BOOLEANS);
  if (_types.has("number")) result.push(...NUMBERS);
  if (_types.has("object")) result.push(...OBJECTS);
  if (_types.has("function")) result.push(...FUNCTIONS);
  return result;
}

function getValuesOnly(type: Type) {
  return getValuesWithType(type);
}

function getValuesExcept(type: Type) {
  return getValuesWithType(...getTypesExcept(type));
}

function getValuesAny() {
  return getValuesWithType(...TYPES);
}

function getValuesArray() {
  return ARRAYINARRAY;
}

function getValuesNotArray() {
  return getValuesWithType(...getTypesExcept("object"));
}

export { getValuesOnly, getValuesExcept, getValuesAny, getValuesArray, getValuesNotArray };
