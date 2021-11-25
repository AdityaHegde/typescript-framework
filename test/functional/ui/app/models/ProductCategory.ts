import {UserRole} from "./UserRole";
import {BaseType, DisplayField, ModelMetadata, Required, ServerModelMetadata, TextField} from "../../../../../src/models";

@ServerModelMetadata.Model({
  writeRole: UserRole.Mod,
})
@ModelMetadata.Model()
export class ProductCategory extends BaseType {
  @Required()
  @DisplayField()
  @TextField({label: "Product Category"})
  public name: string;
}
