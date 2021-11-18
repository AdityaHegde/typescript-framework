[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / [ui/store](../modules/ui_store.md) / ModelClient

# Class: ModelClient

[ui/store](../modules/ui_store.md).ModelClient

## Hierarchy

- **`ModelClient`**

  ↳ [`JsonApiClient`](ui_store.JsonApiClient.md)

## Table of contents

### Constructors

- [constructor](ui_store.ModelClient.md#constructor)

### Methods

- [createRecord](ui_store.ModelClient.md#createrecord)
- [deleteRecord](ui_store.ModelClient.md#deleterecord)
- [deserialize](ui_store.ModelClient.md#deserialize)
- [fetch](ui_store.ModelClient.md#fetch)
- [fetchSingle](ui_store.ModelClient.md#fetchsingle)
- [serialize](ui_store.ModelClient.md#serialize)
- [updateRecord](ui_store.ModelClient.md#updaterecord)

## Constructors

### constructor

• **new ModelClient**()

## Methods

### createRecord

▸ `Abstract` **createRecord**<`Model`\>(`modelClass`, `createdRecord`): `Promise`<`Model`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Model` | extends [`BaseType`](models.BaseType.md)<`Model`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelClass` | typeof [`BaseType`](models.BaseType.md) |
| `createdRecord` | `Model` |

#### Returns

`Promise`<`Model`\>

#### Defined in

[src/ui/store/ModelClient.ts:6](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/ui/store/ModelClient.ts#L6)

___

### deleteRecord

▸ `Abstract` **deleteRecord**<`Model`\>(`modelClass`, `deletedRecord`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Model` | extends [`BaseType`](models.BaseType.md)<`Model`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelClass` | typeof [`BaseType`](models.BaseType.md) |
| `deletedRecord` | `Model` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/ui/store/ModelClient.ts:8](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/ui/store/ModelClient.ts#L8)

___

### deserialize

▸ `Abstract` **deserialize**<`Model`\>(`modelClass`, `rawResponse`): `Model`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Model` | extends [`BaseType`](models.BaseType.md)<`Model`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelClass` | typeof [`BaseType`](models.BaseType.md) |
| `rawResponse` | `any` |

#### Returns

`Model`

#### Defined in

[src/ui/store/ModelClient.ts:11](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/ui/store/ModelClient.ts#L11)

___

### fetch

▸ `Abstract` **fetch**<`Model`\>(`modelClass`, `params`): `Promise`<`Model`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Model` | extends [`BaseType`](models.BaseType.md)<`Model`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelClass` | typeof [`BaseType`](models.BaseType.md) |
| `params` | `any` |

#### Returns

`Promise`<`Model`[]\>

#### Defined in

[src/ui/store/ModelClient.ts:4](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/ui/store/ModelClient.ts#L4)

___

### fetchSingle

▸ `Abstract` **fetchSingle**<`Model`\>(`modelClass`, `id`): `Promise`<`Model`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Model` | extends [`BaseType`](models.BaseType.md)<`Model`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelClass` | typeof [`BaseType`](models.BaseType.md) |
| `id` | `string` |

#### Returns

`Promise`<`Model`\>

#### Defined in

[src/ui/store/ModelClient.ts:5](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/ui/store/ModelClient.ts#L5)

___

### serialize

▸ `Abstract` **serialize**<`Model`\>(`modelClass`, `record`): `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Model` | extends [`BaseType`](models.BaseType.md)<`Model`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelClass` | typeof [`BaseType`](models.BaseType.md) |
| `record` | `Model` |

#### Returns

`any`

#### Defined in

[src/ui/store/ModelClient.ts:10](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/ui/store/ModelClient.ts#L10)

___

### updateRecord

▸ `Abstract` **updateRecord**<`Model`\>(`modelClass`, `updatedRecord`): `Promise`<`Model`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Model` | extends [`BaseType`](models.BaseType.md)<`Model`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelClass` | typeof [`BaseType`](models.BaseType.md) |
| `updatedRecord` | `Model` |

#### Returns

`Promise`<`Model`\>

#### Defined in

[src/ui/store/ModelClient.ts:7](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/ui/store/ModelClient.ts#L7)
