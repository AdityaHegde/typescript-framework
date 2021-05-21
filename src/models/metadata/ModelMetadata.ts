import { FieldType } from "./Fields";
import { FilterType } from "./Filters";
import { BaseType } from "../BaseType";
import { ParentKeyType } from "./ParentKey";
import pluralize from "pluralize";
import {RelationType} from "./Relation";
import {getClassName} from "../../utils/getClassName";

/**
 *
 */
export type ModelArgsType = {
  singular?: string;
  plural?: string;
  apiBase?: string;
  polymorphic?: string;
}

/**
 *
 */
export type ModelFieldType = FieldType & {
  readonly?: boolean;
  displayField?: boolean;
  restricted?: boolean;
  modelField?: string;
  filter?: boolean;
  localFilter?: boolean;
}

/**
 * Metadata class that holds all generic info about the model
 */
export class ModelMetadata {
  public modelName: string;
  public singular: string;
  public plural: string;
  public apiBase: string;
  public apiPath: string;
  public polymorphic: string;

  public fieldTypes = new Array<ModelFieldType>();
  public fieldTypeMap = new Map<string, ModelFieldType>();
  public displayFields = new Array<string>();
  public relations = Array<RelationType>();
  public filters = new Array<FilterType>();
  public readonly = new Array<string>();
  public restricted = Array<string>();
  public parentKeys = Array<ParentKeyType>();

  /**
   * @internal
   */
  constructor(copyFrom: ModelMetadata) {
    if (copyFrom) {
      copyFrom.fieldTypes.map(fieldType => this.addFieldType(fieldType));
      copyFrom.displayFields.map(displayField => this.addDisplayField(displayField));
      copyFrom.relations.map(relationType => this.addRelationType(relationType));
      copyFrom.filters.map(filter => this.addFilterField(filter));
      copyFrom.readonly.map(hidden => this.addReadonlyField(hidden));
      copyFrom.restricted.map(restricted => this.addRestrictedField(restricted));
      this.parentKeys = [ ...copyFrom.parentKeys ];
    }
  }

  /**
   * @internal
   */
  public setArgs({
    singular, plural, apiBase, polymorphic,
  }: ModelArgsType) {
    this.singular = singular ? singular : this.modelName.replace(/^(.)/, (str, match) => {
      return match.toLowerCase();
    });
    this.plural = plural ? plural : pluralize(this.singular);
    this.apiBase = apiBase || "";
    this.apiPath = `${this.apiBase ? this.apiBase + "/": ""}${this.plural}`;
    this.polymorphic = polymorphic;
  }

  /**
   * @internal
   */
  public addFieldType(fieldType: FieldType) {
    if (this.fieldTypeMap.has(fieldType.field)) {
      return;
    }
    this.fieldTypes.push(fieldType);
    this.fieldTypeMap.set(fieldType.field, fieldType);
  }

  /**
   * @internal
   */
  public addDisplayField(fieldName: string) {
    const field = this.fieldTypeMap.get(fieldName);
    if (!field) {
      throw new Error("Display Name field added without field defined");
    }
    field.displayField = true;
    this.displayFields.push(fieldName);
  }

  /**
   * @internal
   */
  public addRelationType(relationType: RelationType) {
    const field = this.fieldTypeMap.get(relationType.fk);
    if (!field) {
      throw new Error("Relation added without foreign key field defined");
    }
    field.modelField = relationType.field;
    this.relations.push(relationType);
  }

  /**
   * @internal
   */
  public addFilterField(filterType: FilterType) {
    const field = this.fieldTypeMap.get(filterType.field);
    if (!field) {
      throw new Error("Filter field added without field defined");
    }
    field.filter = true;
    field.localFilter = !!filterType.local;
    this.filters.push(filterType);
  }

  /**
   * @internal
   */
  public addReadonlyField(fieldName: string) {
    const field = this.fieldTypeMap.get(fieldName);
    if (!field) {
      throw new Error("Hidden field added without field defined");
    }
    field.readonly = true;
    this.readonly.push(fieldName);
  }

  /**
   * @internal
   */
  public addRestrictedField(fieldName: string) {
    const field = this.fieldTypeMap.get(fieldName);
    if (!field) {
      throw new Error("Restricted field added without field defined");
    }
    field.restricted = true;
    this.restricted.push(fieldName);
  }

  /**
   */
  public isEditable(field: ModelFieldType) {
    return !field.readonly;
  }

  /**
   */
  public isDisplayed(field: ModelFieldType) {
    return !field.displayField && !field.restricted;
  }

  /**
   * Add this to the top of every class to initialize metadata.
   */
  public static Model(modelArgs: ModelArgsType = {}) {
    return (constructor: typeof BaseType) => {
      if (!constructor.metadata) {
        constructor.metadata = new ModelMetadata(constructor.metadata);
      }

      constructor.metadata.modelName = getClassName(constructor);
      constructor.metadata.setArgs(modelArgs);
    };
  }
}
