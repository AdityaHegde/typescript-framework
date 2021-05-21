import {createMetadata} from "./createMetadata";
import {BaseType} from "../BaseType";

export type RelationType = {
  field?: string;
  multi?: boolean;
  fk: string;
  reverseField: string;
}

export function Relation<Type>(relationType: RelationType) {
  return function<T extends BaseType & Record<K, Type>, K extends string>(target: T, propertyKey: K) {
    const constructor = createMetadata(target);
    constructor.metadata.addRelationType({
      field: relationType.field || propertyKey,
      ...relationType,
    });
  };
}

export function HasOne<M>(relationType: { field?: string, fk: string, reverseField: string }) {
  return Relation<M>(relationType);
}

export function HasMany<M>(relationType: { field?: string, fk: string, reverseField: string }) {
  return Relation<Array<M>>({
    multi: true,
    ...relationType,
  });
}
