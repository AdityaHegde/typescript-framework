import EventEmitter from "events";
import {assert, match, SinonStub} from "sinon";
import { MochaTestBase } from "../../../src/test-utils/mocha";
import {AwaitTimeoutError} from "../../../src/utils/AwaitTimeoutError";
import {asyncWait} from "../../../src/utils/asyncWait";
import {awaitEvent} from "../../../src/utils/awaitEvent";

@MochaTestBase.Suite
export class AwaitEventSpec extends MochaTestBase {
  private emitter = new EventEmitter();
  private resolve: SinonStub;
  private reject: SinonStub;

  @MochaTestBase.BeforeSuite()
  public setup() {
    this.resolve = this.sandbox.stub();
    this.reject = this.sandbox.stub();
  }

  @MochaTestBase.Test()
  public async shouldWaitForEvent() {
    awaitEvent(this.emitter, "event").then(this.resolve, this.reject);

    await asyncWait(50);
    assert.notCalled(this.resolve);
    assert.notCalled(this.reject);

    this.emitter.emit("event", "arg0", 1, true, "arg3");
    await asyncWait(1);
    assert.calledOnceWithMatch(this.resolve, match(["arg0", 1, true, "arg3"]));
  }

  @MochaTestBase.Test()
  public async shouldWaitAtMaxForEvent() {
    awaitEvent(this.emitter, "event", 100).then(this.resolve, this.reject);

    await asyncWait(50);
    assert.notCalled(this.resolve);
    assert.notCalled(this.reject);

    await asyncWait(51);
    assert.notCalled(this.resolve);
    assert.calledOnceWithMatch(this.reject, match.instanceOf(AwaitTimeoutError));
  }

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
