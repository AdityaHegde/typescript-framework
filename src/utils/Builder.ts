export type NonFunctionPropertyNames<T> =
  { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];
export type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;
type BuilderType<T> = {
  [K in keyof NonFunctionProperties<T>]:
    (value: NonFunctionProperties<T>[K]) => BuilderType<T>
} & {
  build: () => T,
};

export function Builder<T>(instance: T): BuilderType<T> {
  const builder: any = {
    build: () => {
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
