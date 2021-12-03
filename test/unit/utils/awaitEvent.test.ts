import EventEmitter from "events";
import {asyncWait, awaitEvent, AwaitTimeoutError} from "../../../src";
import {assert, match, SinonStub} from "sinon";
import {TestBase} from "@adityahegde/typescript-test-utils";
import {UnitTestBase} from "../UnitTestBase";

@TestBase.Suite
export class AwaitEventTest extends UnitTestBase {
  private emitter = new EventEmitter();
  private resolve: SinonStub;
  private reject: SinonStub;

  @TestBase.BeforeSuite()
  public setup() {
    this.resolve = this.sandbox.stub();
    this.reject = this.sandbox.stub();
  }

  @TestBase.Test()
  public async shouldWaitForEvent() {
    awaitEvent(this.emitter, "event").then(this.resolve, this.reject);

    await asyncWait(50);
    assert.notCalled(this.resolve);
    assert.notCalled(this.reject);

    this.emitter.emit("event", "arg0", 1, true, "arg3");
    await asyncWait(1);
    assert.calledOnceWithMatch(this.resolve, match(["arg0", 1, true, "arg3"]));
  }

  @TestBase.Test()
  public async shouldWaitAtMaxForEvent() {
    awaitEvent(this.emitter, "event", 100).then(this.resolve, this.reject);

    await asyncWait(50);
    assert.notCalled(this.resolve);
    assert.notCalled(this.reject);

    await asyncWait(51);
    assert.notCalled(this.resolve);
    assert.calledOnceWithMatch(this.reject, match.instanceOf(AwaitTimeoutError));
  }

  @TestBase.Test()
  public async shouldRejectForRejectionEvent() {
    awaitEvent(this.emitter, "event", -1, "failed").then(this.resolve, this.reject);

    await asyncWait(50);
    assert.notCalled(this.resolve);
    assert.notCalled(this.reject);

    this.emitter.emit("failed", new Error("failed"));

    await asyncWait(1);
    assert.notCalled(this.resolve);
    assert.calledOnceWithMatch(this.reject, match.instanceOf(Error));
  }
}
