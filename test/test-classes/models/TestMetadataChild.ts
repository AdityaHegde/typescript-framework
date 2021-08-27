import {Field} from "../../../src/models/metadata/Fields";
import {BaseType} from "../../../src/models/BaseType";
import {ModelMetadata} from "../../../src/models/metadata/ModelMetadata";
import {ParentKey} from "../../../src/models/metadata/ParentKey";

@ModelMetadata.Model()
export class TestMetadataChild extends BaseType {
  @Field({ type: "switch" })
  public cf1 = false;

  @ParentKey({ref: "TestMetadataBase"})
  @Field({ type: "text" })
  public cfpk = "";
}
