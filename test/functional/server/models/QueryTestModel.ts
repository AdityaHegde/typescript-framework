import {
  BaseType, ModelMetadata,
  ModelSelectField,
  MultiSelectField, NumberField,
  RemoteFilter,
  SelectField,
  ServerModelMetadata, TextField
} from "../../../../src/models";
import {PublicModel} from "./bootstrap/PublicModel";

enum QueryTestSelect {
  Val0,
  Val1,
  Val2,
  Val3,
  Val4,
}

@ServerModelMetadata.Model()
@ModelMetadata.Model()
export class QueryTestModel extends BaseType {
  @RemoteFilter()
  @TextField()
  public label: string;

  @RemoteFilter()
  @NumberField()
  public numField: number;

  @RemoteFilter()
  @SelectField({opts: QueryTestSelect})
  public selectField: QueryTestSelect;

  @RemoteFilter()
  @MultiSelectField({opts: QueryTestSelect})
  public multiSelectField: Array<QueryTestSelect>;

  @RemoteFilter()
  @ModelSelectField({ref: "PublicModel"})
  public modelSelect: PublicModel;

  @TextField()
  public nonQueryableStr: string;
}
