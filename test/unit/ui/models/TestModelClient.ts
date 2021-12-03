import { BaseType } from "../../../../src/models/BaseType";
import {ModelClient} from "../../../../src/ui/store";

export class TestModelClient extends ModelClient {
  public createRecord<Model extends BaseType>(modelClass: typeof BaseType, createdRecord: Model): Promise<Model> {
    return Promise.resolve(undefined);
  }

  public deleteRecord<Model extends BaseType>(modelClass: typeof BaseType, deletedMRecord: Model): Promise<void> {
    return Promise.resolve(undefined);
  }

  public fetch<Model extends BaseType>(modelClass: typeof BaseType, params: any): Promise<Array<Model>> {
    return Promise.resolve((modelClass as any).getData());
  }

  public fetchSingle<Model extends BaseType>(modelClass: typeof BaseType, params: any): Promise<Model> {
    return Promise.resolve(undefined);
  }

  public updateRecord<Model extends BaseType>(modelClass: typeof BaseType, updatedRecord: Model): Promise<Model> {
    return Promise.resolve(undefined);
  }

  public deserialize<Model extends BaseType>(modelClass: typeof BaseType, rawResponse: any): Model {
    return undefined;
  }

  public serialize<Model extends BaseType>(modelClass: typeof BaseType, record: Model): any {
  }
}
