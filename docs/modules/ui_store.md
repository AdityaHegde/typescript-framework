[@adityhegde/typescript-framework](../README.md) / [Modules](../modules.md) / ui/store

# Module: ui/store

## Table of contents

### Classes

- [JsonApiClient](../classes/ui_store.JsonApiClient.md)
- [ModelClient](../classes/ui_store.ModelClient.md)
- [ModelStore](../classes/ui_store.ModelStore.md)
- [ModelStoreData](../classes/ui_store.ModelStoreData.md)
- [ModelStoreRepository](../classes/ui_store.ModelStoreRepository.md)

### Functions

- [useRecordOperations](ui_store.md#userecordoperations)
- [useRecords](ui_store.md#userecords)

## Functions

### useRecordOperations

▸ **useRecordOperations**<`Model`\>(`modelStore`, `params`): `UseRecordOperationsReturn`<`Model`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Model` | extends [`BaseType`](../classes/models.BaseType.md)<`Model`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelStore` | [`ModelStore`](../classes/ui_store.ModelStore.md)<`Model`\> |
| `params` | `any` |

#### Returns

`UseRecordOperationsReturn`<`Model`\>

#### Defined in

[src/ui/store/useRecordOperations.ts:29](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/ui/store/useRecordOperations.ts#L29)

___

### useRecords

▸ **useRecords**<`Model`\>(`modelStore`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Model` | extends [`BaseType`](../classes/models.BaseType.md)<`Model`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelStore` | [`ModelStore`](../classes/ui_store.ModelStore.md)<`Model`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `records` | `Model`[] |
| `recordsMap` | `Map`<`string`, `Model`\> |

#### Defined in

[src/ui/store/useRecords.ts:5](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/ui/store/useRecords.ts#L5)
