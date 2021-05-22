import { Schema } from "mongoose";
import {
  ArrayFieldType,
  DateFieldType,
  FieldInputType, FieldType,
  ModelSelectFieldType,
  SelectFieldType
} from "../../../models/metadata/Fields";
import {ModelMetadata} from "../../../models/metadata/ModelMetadata";

const TYPE_MAP: {
  [type in FieldInputType]: (field: FieldType) => any
} = {
  "text": () => String,
  "number": () => Number,
  "switch": () => Boolean,
  "modelSelect": (field: ModelSelectFieldType) => {
    const fieldSchema = { type: Schema.Types.ObjectId, ref: field.ref };
    return field.multi ? [fieldSchema] : fieldSchema;
  },
  "select": (field: SelectFieldType) => {
    const subSchema = field.subType ? TYPE_MAP[field.subType](field) : String;
    return field.multi ? [subSchema] : subSchema;
  },
  "array": (field: ArrayFieldType) => {
    return [TYPE_MAP[field.subType](field)];
  },
  "date": () => Date,
}

export function SchemaFactory(modelMetadata: ModelMetadata): Schema {
  const schemaObject: any = {};
  const additionalOpts: any = {};

  modelMetadata.fieldTypes.forEach((fieldType) => {
    const type: any = TYPE_MAP[fieldType.type](fieldType);

    // if (field.displayField) {
    //   type.unique = true;
    // }
    if (fieldType.type === "date") {
      if ((fieldType as DateFieldType).createdAt) {
        additionalOpts.timestamps = additionalOpts.timestamps || {};
        additionalOpts.timestamps.createdAt = fieldType.field;
      }
      if ((fieldType as DateFieldType).updatedAt) {
        additionalOpts.timestamps = additionalOpts.timestamps || {};
        additionalOpts.timestamps.updatedAt = fieldType.field;
      }
    }

    schemaObject[fieldType.field] = type;
  });

  return new Schema(schemaObject, additionalOpts);
}
