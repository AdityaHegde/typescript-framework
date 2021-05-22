export function promisify(context, func: Function, ...args) {
  return new Promise((resolve, reject) => {
    func.call(context, ...args, (err, resp) => {
      if (err) {
        reject(err);
      } else {
        resolve(resp);
      }
    });
  });
}