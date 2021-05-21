export function dedupeFieldTypes<T extends {field?: string}>(fieldTypes: Array<T>, fieldTypesMap: Map<string, T>, fieldType: T) {
  if (fieldTypesMap.has(fieldType.field)) {
    const existingFieldType = fieldTypesMap.get(fieldType.field);
    for (const param in fieldType) {
      if (Object.prototype.hasOwnProperty.call(fieldType, param)) {
        existingFieldType[param] = fieldType[param];
      }
    }
  } else {
    fieldTypes.push(fieldType);
    fieldTypesMap.set(fieldType.field, fieldType);
  }
}