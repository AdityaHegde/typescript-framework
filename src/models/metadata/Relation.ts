import {createMetadata} from "./createMetadata";
import {BaseType} from "../BaseType";
import pluralize from "pluralize";

export type RelationType = {
  field?: string;
  multi?: boolean;
  fk?: string;
  reverseField?: string;
}

export function Relation<Type>(relationType: RelationType) {
  return function<T extends BaseType & Record<K, Type>, K extends string>(target: T, propertyKey: K) {
    const constructor = createMetadata(target);
    const field = relationType.field || propertyKey;
    const fk = relationType.fk ?? (relationType.multi ? `${pluralize.singular(field)}Ids` : `${field}Id`);
    constructor.metadata.addRelationType({
      field,
      ...relationType,
      fk,
    });
  };
}

export function HasOne<M>(relationType: { field?: string, fk?: string, reverseField?: string } = {}) {
  return Relation<M>(relationType);
}

export function HasMany<M>(relationType: { field?: string, fk?: string, reverseField?: string } = {}) {
  return Relation<Array<M>>({
    multi: true,
    ...relationType,
  });
}
