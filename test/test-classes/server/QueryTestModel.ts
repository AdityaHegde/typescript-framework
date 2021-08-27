import {RemoteFilter} from "../../../src/models/metadata/Filters";
import {
  ModelSelectField,
  MultiSelectField,
  NumberField,
  SelectField,
  TextField
} from "../../../src/models/metadata/Fields";
import {ServerModelMetadata} from "../../../src/models/server-metadata/ServerModelMetadata";
import {BaseType} from "../../../src/models/BaseType";
import {ModelMetadata} from "../../../src/models/metadata/ModelMetadata";

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
  public modelSelectId: string;

  @TextField()
  public nonQueryableStr: string;
}
