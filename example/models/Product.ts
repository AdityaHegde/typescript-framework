import {UserRole} from "./UserRole";
import {
  BaseType,
  DisplayField, ModelMetadata,
  ModelSelectField, NumberField,
  Readonly,
  RemoteFilter,
  Required, Restricted,
  ServerModelMetadata, TextField, UserField
} from "../../src/models";

@ServerModelMetadata.Model({
  writeRole: UserRole.Seller,
  ownerOnly: true,
})
@ModelMetadata.Model()
export class Product extends BaseType {
  @RemoteFilter()
  @Required()
  @DisplayField()
  @TextField({label: "Product Name"})
  public name: string;

  @RemoteFilter()
  @Required()
  @ModelSelectField({ref: "ProductCategory", label: "Product Category"})
  public categoryId: string;

  @UserField()
  @Readonly()
  @Restricted()
  @ModelSelectField({ref: "User", label: "Lister"})
  public listerId: string;

  @RemoteFilter()
  @Required()
  @NumberField({label: "Price"})
  public price: number;

  @TextField({label: "Description"})
  public desc: string;
}
