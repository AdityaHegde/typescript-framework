export class AwaitTimeoutError extends Error {
  constructor() {
    super("Await timed out");
  }
}
