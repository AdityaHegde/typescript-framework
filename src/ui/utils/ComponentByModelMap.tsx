import React, {FunctionComponent, ReactElement} from "react";
import { BaseType } from "../../models/BaseType";
import {ModelStore} from "../store";
import {ModelStoreRepository} from "../store";
import {useRecords} from "../store";

type ComponentByModelType<Props> = (
  props: Props, modelStore: ModelStore<BaseType>,
  records: Array<BaseType>, recordsMap: Map<string, BaseType>,
) => ReactElement;

export class ComponentByModelMap<Props> extends Map<string, FunctionComponent<Props>> {
  componentByModel: ComponentByModelType<Props>;

  constructor(componentByModel: ComponentByModelType<Props>) {
    super();

    this.componentByModel = componentByModel;
  }

  public getOrCreate(modelName: string): FunctionComponent<Props> {
    if (this.has(modelName)) {
      return this.get(modelName);
    } else {
      const comp = this.createComponent(modelName);
      this.set(modelName, comp);
      return comp;
    }
  }

  private createComponent(modelName: string) {
    return (props: Props) => {
      const modelStore = ModelStoreRepository.instance.getOrCreate(modelName);
      const {records, recordsMap} = useRecords(modelStore);
      return <>
        {this.componentByModel(props, modelStore, records, recordsMap)}
      </>;
    };
  }
}
