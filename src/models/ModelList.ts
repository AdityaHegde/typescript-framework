import { BaseType } from "./BaseType";

/**
 * Full list of models
 */
export const ModelList: Array<typeof BaseType> = [];
/**
 * List of top level models
 */
export const MasterModelList: Array<typeof BaseType> = [];
export const ModelNameMap = new Map<string, typeof BaseType>();
export const PolymorphicModelLookup = new Map<string, Array<typeof BaseType>>();

function addModelToList(model: typeof BaseType) {
  if (!model.metadata.modelName) {
    return;
  }

  if (ModelNameMap.has(model.metadata.modelName)) {
    return;
  }

  ModelList.push(model);
  ModelNameMap.set(model.metadata.modelName, model);

  if (
    !model.metadata.polymorphic ||
    model.metadata.polymorphic === model.metadata.modelName
  ) {
    addModelToMasterList(model);
  }

  if (
    model.metadata.polymorphic &&
    model.metadata.polymorphic !== model.metadata.modelName
  ) {
    addModelToPolymorphicList(model);
  }
}

function addModelToMasterList(model: typeof BaseType) {
  MasterModelList.push(model);
}

function addModelToPolymorphicList(model: typeof BaseType) {
  if (!PolymorphicModelLookup.has(model.metadata.polymorphic)) {
    PolymorphicModelLookup.set(model.metadata.polymorphic, []);
  } else if (PolymorphicModelLookup.get(model.metadata.polymorphic).indexOf(model) !== -1) {
    // if the model was already added, dont add it again
    return;
  }

  PolymorphicModelLookup.get(model.metadata.polymorphic).push(model);
}

export function addModelsToList(models: Array<typeof BaseType>) {
  models.forEach((model) => {
    addModelToList(model);
  });
}
