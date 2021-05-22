export class SelectEnumItems<Opt> extends Map<any, Array<Opt>> {
  private readonly itemGetter: (key: string, value: any) => Opt;

  constructor(itemGetter: (key: string, value: any) => Opt) {
    super();
    this.itemGetter = itemGetter;
  }

  public getOrCreate(optsEnum: any): Array<Opt> {
    if (this.has(optsEnum)) {
      return this.get(optsEnum);
    } else {
      const opts = this.getOpts(optsEnum);
      this.set(optsEnum, opts);
      return opts;
    }
  }

  private getOpts(optsEnum): Array<Opt> {
    const opts = new Array<Opt>();

    for (const opt in optsEnum) {
      if (Object.prototype.hasOwnProperty.call(optsEnum, opt)) {
        if (isNaN(Number(opt))) {
          opts.push(this.itemGetter(opt, optsEnum[opt]));
        }
      }
    }

    return opts;
  }
}
