import React  from "react";
import { FormItemType, FormItemWrapper } from "./BasicFormItems";
import Select from "antd/lib/select";
import { getDisplayText } from "../utils/getDisplayText";
import {ComponentByModelMap} from "../utils/ComponentByModelMap";
import {BaseType} from "../../models/BaseType";
import {ModelSelectFieldType} from "../../models/metadata/Fields";

type ModelSelectOwnProps = FormItemType & {
  mode?: "multiple";
}
const SelectOfModelsMap = new ComponentByModelMap<ModelSelectOwnProps>(
  (props, modelStore, records, recordsMap) => {
    const options = [];
    records.forEach((record: BaseType) => {
      options.push(
        <Select.Option value={record.id} key={record.id}>
          {getDisplayText(record)}
        </Select.Option>
      );
    });

    return <FormItemWrapper {...props}>
      <Select showSearch mode={props.mode}>
        {options}
      </Select>
    </FormItemWrapper>;
  },
);

export const ModelSelectFormItem = (opts: FormItemType) => {
  const modelSelectField = opts.fieldType as ModelSelectFieldType;
  const Comp = SelectOfModelsMap.getOrCreate(modelSelectField.ref);
  if (!Comp) {
    throw new Error(`No component for ModelSelectListItem for ${JSON.stringify(opts.fieldType)}`);
  }
  return <Comp {...opts} mode={modelSelectField.multi ? "multiple": null} />;
}
