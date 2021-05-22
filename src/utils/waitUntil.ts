export function waitUntil(checkFunc: () => boolean, interval = 250, timeout = 30000) {
  return new Promise<void>((resolve, reject) => {
    const startTime = Date.now();
    const intervalId = setInterval(() => {
      if (checkFunc()) {
        clearInterval(intervalId);
        resolve();
      } else if (Date.now() - startTime > timeout) {
        clearInterval(intervalId);
        reject();
      }
    }, interval)
  });
}