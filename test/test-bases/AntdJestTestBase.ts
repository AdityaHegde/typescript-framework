import {configure} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {SinonStub} from "sinon";
import {JestTestBase} from "../../src/test-utils/jest";
import {TestModelClient} from "../test-classes/ui/TestModelClient";
import {Models} from "../test-classes/ui/Models";
import {addModelsToList} from "../../src/models/ModelList";
import {ModelStoreRepository} from "../../src/ui/store";

configure({ adapter: new Adapter() });

export class AntdJestTestBase extends JestTestBase {
  protected fetchStub: SinonStub;

  @JestTestBase.BeforeSuite()
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
