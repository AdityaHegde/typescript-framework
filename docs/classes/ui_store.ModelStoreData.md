[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / [ui/store](../modules/ui_store.md) / ModelStoreData

# Class: ModelStoreData<Model\>

[ui/store](../modules/ui_store.md).ModelStoreData

Store records and a map to id to record.
Is in a separate object so that records and map can be updated in place.
React is notified of change by updating this object in the hooks,

## Type parameters

| Name | Type |
| :------ | :------ |
| `Model` | extends [`BaseType`](models.BaseType.md) |

## Table of contents

### Constructors

- [constructor](ui_store.ModelStoreData.md#constructor)

### Properties

- [records](ui_store.ModelStoreData.md#records)
- [recordsMap](ui_store.ModelStoreData.md#recordsmap)

### Methods

- [addRecord](ui_store.ModelStoreData.md#addrecord)
- [deleteRecord](ui_store.ModelStoreData.md#deleterecord)
- [replaceRecords](ui_store.ModelStoreData.md#replacerecords)

## Constructors

### constructor

• **new ModelStoreData**<`Model`\>(`records`, `recordsMap`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Model` | extends [`BaseType`](models.BaseType.md)<`Model`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `records` | `Model`[] |
| `recordsMap` | `Map`<`string`, `Model`\> |

#### Defined in

[src/ui/store/ModelStoreData.ts:12](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/store/ModelStoreData.ts#L12)

## Properties

### records

• **records**: `Model`[]

#### Defined in

[src/ui/store/ModelStoreData.ts:9](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/store/ModelStoreData.ts#L9)

___

### recordsMap

• **recordsMap**: `Map`<`string`, `Model`\>

#### Defined in

[src/ui/store/ModelStoreData.ts:10](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/store/ModelStoreData.ts#L10)

## Methods

### addRecord

▸ **addRecord**(`newRecord`): [`ModelStoreData`](ui_store.ModelStoreData.md)<`Model`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newRecord` | `Model` |

#### Returns

[`ModelStoreData`](ui_store.ModelStoreData.md)<`Model`\>

#### Defined in

[src/ui/store/ModelStoreData.ts:23](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/store/ModelStoreData.ts#L23)

___

### deleteRecord

▸ **deleteRecord**(`oldRecord`): [`ModelStoreData`](ui_store.ModelStoreData.md)<`Model`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldRecord` | `Model` |

#### Returns

[`ModelStoreData`](ui_store.ModelStoreData.md)<`Model`\>

#### Defined in

[src/ui/store/ModelStoreData.ts:29](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/store/ModelStoreData.ts#L29)

___

### replaceRecords

▸ **replaceRecords**(`newRecords`): [`ModelStoreData`](ui_store.ModelStoreData.md)<`Model`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newRecords` | `Model`[] |

#### Returns

[`ModelStoreData`](ui_store.ModelStoreData.md)<`Model`\>

#### Defined in

[src/ui/store/ModelStoreData.ts:17](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/store/ModelStoreData.ts#L17)
