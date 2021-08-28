[@adityhegde/typescript-framework](../README.md) / [Modules](../modules.md) / [ui/store](../modules/ui_store.md) / ModelStore

# Class: ModelStore<Model\>

[ui/store](../modules/ui_store.md).ModelStore

## Type parameters

| Name | Type |
| :------ | :------ |
| `Model` | extends [`BaseType`](models.BaseType.md) |

## Table of contents

### Constructors

- [constructor](ui_store.ModelStore.md#constructor)

### Properties

- [modelClass](ui_store.ModelStore.md#modelclass)
- [modelClient](ui_store.ModelStore.md#modelclient)
- [modelStoreData](ui_store.ModelStore.md#modelstoredata)

### Methods

- [createRecord](ui_store.ModelStore.md#createrecord)
- [deleteRecord](ui_store.ModelStore.md#deleterecord)
- [queryRecords](ui_store.ModelStore.md#queryrecords)
- [updateRecord](ui_store.ModelStore.md#updaterecord)

## Constructors

### constructor

• **new ModelStore**<`Model`\>(`modelClient`, `modelClass`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Model` | extends [`BaseType`](models.BaseType.md)<`Model`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelClient` | [`ModelClient`](ui_store.ModelClient.md) |
| `modelClass` | typeof [`BaseType`](models.BaseType.md) |

#### Defined in

[src/ui/store/ModelStore.ts:10](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/ui/store/ModelStore.ts#L10)

## Properties

### modelClass

• `Readonly` **modelClass**: typeof [`BaseType`](models.BaseType.md)

#### Defined in

[src/ui/store/ModelStore.ts:7](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/ui/store/ModelStore.ts#L7)

___

### modelClient

• `Private` `Readonly` **modelClient**: [`ModelClient`](ui_store.ModelClient.md)

#### Defined in

[src/ui/store/ModelStore.ts:6](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/ui/store/ModelStore.ts#L6)

___

### modelStoreData

• **modelStoreData**: [`ModelStoreData`](ui_store.ModelStoreData.md)<`Model`\>

#### Defined in

[src/ui/store/ModelStore.ts:8](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/ui/store/ModelStore.ts#L8)

## Methods

### createRecord

▸ **createRecord**(`createdRecord`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `createdRecord` | `Model` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/ui/store/ModelStore.ts:21](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/ui/store/ModelStore.ts#L21)

___

### deleteRecord

▸ **deleteRecord**(`deletedRecord`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `deletedRecord` | `Model` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/ui/store/ModelStore.ts:32](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/ui/store/ModelStore.ts#L32)

___

### queryRecords

▸ **queryRecords**(`params?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/ui/store/ModelStore.ts:16](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/ui/store/ModelStore.ts#L16)

___

### updateRecord

▸ **updateRecord**(`oldRecord`, `updatedRecord`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldRecord` | `Model` |
| `updatedRecord` | `Model` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/ui/store/ModelStore.ts:26](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/ui/store/ModelStore.ts#L26)
