import { BaseType } from "../../models/BaseType";

export function getDisplayText(model: BaseType) {
  if (!model) {
    return "";
  }
  return (model.constructor as typeof BaseType).metadata.displayFields
    .map(displayField => model[displayField] || "").join("_") || model.id;
}
