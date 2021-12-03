import { createMetadata } from "./createMetadata";
import {BaseType} from "../BaseType";

/**
 */
export type FieldInputType = (
  "text" | "number" | "switch" |
  "select" | "array" | "modelSelect" | "date"
);

/**
 */
export type SimpleFieldType = {
  type: ("text" | "number" | "switch");
  field?: string;
  label?: string;
};

/**
 */
export type SelectFieldType = {
  type: "select";
  field?: string;
  label?: string;
  multi?: boolean;
  opts: any;
  subType?: ("text" | "number");
};

/**
 */
export type ArrayFieldType = {
  type: "array";
  field?: string;
  label?: string;
  subType: ("text" | "number");
};

/**
 */
export type ModelSelectFieldType = {
  type: "modelSelect";
  field?: string;
  label?: string;
  multi?: boolean;
  ref: string;
};

/**
 */
export type DateFieldType = {
  type: "date";
  field?: string;
  label?: string;
  createdAt?: boolean;
  updatedAt?: boolean;
}

/**
 */
export type FieldType = (
  SimpleFieldType | SelectFieldType | ArrayFieldType | ModelSelectFieldType | DateFieldType
);

/**
 * Define a metadata on a field
 */
export function Field<Type>(fieldOptions: FieldType) {
  return function<T extends BaseType & Record<K, Type>, K extends string>(target: T, propertyKey: K) {
    const constructor = createMetadata(target);
    const field = fieldOptions.field || propertyKey
    constructor.metadata.addFieldType({
      field,
      label: fieldOptions.label || field,
      ...fieldOptions,
    });
  };
}

/**
 */
export function TextField(fieldOptions: { field?: string, label?: string } = {}) {
  return Field<string>({
    type: "text",
    ...fieldOptions,
  });
}

/**
 */
export function NumberField(fieldOptions: { field?: string, label?: string } = {}) {
  return Field<number>({
    type: "number",
    ...fieldOptions,
  });
}

/**
 */
export function SwitchField(fieldOptions: { field?: string, label?: string } = {}) {
  return Field<boolean>({
    type: "switch",
    ...fieldOptions,
  });
}

/**
 */
export function SelectField<S>(fieldOptions: { field?: string, label?: string, opts: any, subType?: ("text" | "number") }) {
  return Field<S>({
    type: "select",
    ...fieldOptions,
  });
}

/**
 */
export function MultiSelectField<S>(fieldOptions: { field?: string, label?: string, opts: any, subType?: ("text" | "number") }) {
  return Field<Array<S>>({
    type: "select",
    multi: true,
    ...fieldOptions,
  });
}

/**
 */
export function ArrayField(fieldOptions: { field?: string, label?: string, subType: ("text" | "number") }) {
  return Field<Array<string | number>>({
    type: "array",
    ...fieldOptions,
  });
}

/**
 */
export function ModelSelectField(fieldOptions: { field?: string, label?: string, ref: string }) {
  return Field<any>({
    type: "modelSelect",
    ...fieldOptions,
  });
}

/**
 */
export function ModelMultiSelectField(fieldOptions: { field?: string, label?: string, ref: string }) {
  return Field<Array<any>>({
    type: "modelSelect",
    multi: true,
    ...fieldOptions,
  });
}

/**
 */
export function CreateAtDate(fieldOptions: {field?: string, label?: string}) {
  return Field<Date>({
    type: "date",
    createdAt: true,
    ...fieldOptions,
  });
}

/**
 */
export function UpdatedAtDate(fieldOptions: {field?: string, label?: string}) {
  return Field<Date>({
    type: "date",
    updatedAt: true,
    ...fieldOptions,
  });
}
