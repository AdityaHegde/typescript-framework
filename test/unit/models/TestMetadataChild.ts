import {BaseType, Field, ModelMetadata, ParentKey} from "../../../src/models";

@ModelMetadata.Model()
export class TestMetadataChild extends BaseType {
  @Field({ type: "switch" })
  public cf1 = false;

  @ParentKey({ref: "TestMetadataBase"})
  @Field({ type: "text" })
  public cfpk = "";
}
