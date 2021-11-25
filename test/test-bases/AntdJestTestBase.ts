import {SinonStub} from "sinon";
import {TestModelClient} from "../test-classes/ui/TestModelClient";
import {Models} from "../test-classes/ui/Models";
import {ModelStoreRepository} from "../../src/ui/store";
import {addModelsToList} from "../../src/models";
import {TestBase} from "@adityahegde/typescript-test-utils";
import {JestTestLibrary} from "@adityahegde/typescript-test-utils/dist/jest/JestTestLibrary";

@TestBase.TestLibrary(JestTestLibrary)
export class AntdJestTestBase extends TestBase {
  protected fetchStub: SinonStub;

  @TestBase.BeforeSuite()
  public async setup() {
    await this.setupModels();

    (global as any).matchMedia = global.matchMedia ? global.matchMedia : () => {
      return {
        matches: false,
        addListener: this.sandbox.stub(),
        removeListener: this.sandbox.stub(),
      };
    };

    (global as any).fetch = this.fetchStub = this.sandbox.stub();
  }

  private async setupModels() {
    addModelsToList(Models);
    ModelStoreRepository.instance = ModelStoreRepository.instance ||
      new ModelStoreRepository(new TestModelClient());

    await Promise.all(Models.map(model => ModelStoreRepository.instance.getOrCreate(model.metadata.modelName).queryRecords()));
  }
}
