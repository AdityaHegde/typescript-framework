import {UserRole} from "./UserRole";
import {
  BaseType,
  DisplayField, ModelMetadata,
  ModelSelectField,
  Readonly,
  Required,
  SelectField,
  ServerModelMetadata, TextField, UserField
} from "../../../../../src/models";

export enum ProductRating {
  VeryBad,
  Bad,
  Good,
  VeryGood,
  Excellent,
}

@ServerModelMetadata.Model({
  writeRole: UserRole.User,
  ownerOnly: true,
})
@ModelMetadata.Model()
export class ProductReview extends BaseType {
  @Required()
  @DisplayField()
  @ModelSelectField({ref: "Product", label: "Product"})
  public productId: string;

  @UserField()
  @Readonly()
  @ModelSelectField({ref: "User", label: "Lister"})
  public userId: string;

  @Required()
  @SelectField({opts: ProductRating, label: "Rating"})
  public rating: ProductRating;

  @TextField({label: "Comment"})
  public comment: string;
}
