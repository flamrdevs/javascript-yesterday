//	====================================================================================
//	MAIN
//	====================================================================================

function hasOwnProperty<O extends {}, P extends PropertyKey>(object: O, property: P): object is O & Record<P, unknown> {
  return object.hasOwnProperty(property);
}

function hasOwnProperties<O extends {}, P extends PropertyKey>(object: O, ...properties: P[]): object is O & Record<P, unknown> {
  return properties.every((property) => object.hasOwnProperty(property));
}

//	====================================================================================
//	EXPORTS
//	====================================================================================

export { hasOwnProperty, hasOwnProperties };
