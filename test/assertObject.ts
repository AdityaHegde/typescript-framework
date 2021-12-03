import expect from "expect";

function sortArrays(object: Record<any, any>) {
  if (null === object || undefined === object) {
    return object;
  }

  if (object.sort) {
    return object.sort();
  }

  if (typeof object === "object") {
    for (const k in object) {
      if (Object.prototype.hasOwnProperty.call(object, k)) {
        object[k] = sortArrays(object[k]);
      }
    }
  }

  return object;
}

export function assertObject(actual: Record<any, any>, expected: Record<any, any>) {
  actual = sortArrays(actual);
  expected = sortArrays(expected);
  expect(actual).toMatchObject(expected);
}
