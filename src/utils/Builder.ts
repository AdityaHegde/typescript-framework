export type NonFunctionPropertyNames<T> =
  { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];
export type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;
type BuilderType<T> = {
  [K in keyof NonFunctionProperties<T>]:
    (value: NonFunctionProperties<T>[K]) => BuilderType<T>
} & {
  build: (overrides?: Record<string, any>) => T,
};

export function Builder<T>(instance: T): BuilderType<T> {
  const builder: any = {
    build: (overrides?: Record<string, any>) => {
      if (overrides) {
        for (const o in overrides) {
          if (Object.prototype.hasOwnProperty.call(overrides, o)) {
            instance[o] = overrides[o];
          }
        }
      }
      return instance;
    },
  };

  Object.getOwnPropertyNames(instance).forEach((prop) => {
    builder[prop] = (value: any) => {
      instance[prop] = value;
      return builder;
    };
  });

  return builder;
}
