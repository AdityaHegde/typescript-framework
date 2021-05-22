import { EventEmitter } from "events";
import {AwaitTimeoutError} from "./AwaitTimeoutError";

export async function awaitEvent(
  target: EventEmitter, event: string, timeout = -1, errorEvent?: string,
) {
  return new Promise((resolve, reject) => {
    const listener = (...args) => {
      resolve(args);
    };

    target.once(event, listener);

    if (timeout > 0) {
      setTimeout(() => {
        reject(new AwaitTimeoutError());
      }, timeout);
    }

    if (errorEvent) {
      target.once(errorEvent, (error) => {
        target.off(event, listener);
        reject(error);
      });
    }
  });
}
