import {BaseType} from "../BaseType";
import {createValidationMetadata} from "./createValidationMetadata";

export type ValidationFieldType = {
  field?: string;
  message?: string;
  required?: boolean;
  regex?: RegExp | string;
  minValue?: number;
  maxValue?: number;
  email?: boolean;
}

export function Validation<Type>(fieldType: ValidationFieldType) {
  return function<T extends BaseType & Record<K, Type>, K extends string>(target: T, propertyKey: K) {
    const constructor = createValidationMetadata(target);
    constructor.validationMetadata.addValidation({
      field: fieldType.field || propertyKey,
      ...fieldType,
    });
  }
}

export function Required<Type>(options: {field?: string, message?: string} = {}) {
  return Validation<Type>({
    required: true,
    ...options,
  });
}

export function RegexValidation(options: {field?: string, message?: string, regex: RegExp | string}) {
  return Validation<string>({
    ...options,
  });
}

export function RangeValidation(options: {field?: string, message?: string, minValue: number, maxValue: number}) {
  return Validation<number>({
    ...options,
  });
}

export function EmailValidation(options: {field?: string, message?: string} = {}) {
  return Validation<string>({
    email: true,
    ...options,
  });
}
