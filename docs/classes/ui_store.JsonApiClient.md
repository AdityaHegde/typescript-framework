[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / [ui/store](../modules/ui_store.md) / JsonApiClient

# Class: JsonApiClient

[ui/store](../modules/ui_store.md).JsonApiClient

## Hierarchy

- [`ModelClient`](ui_store.ModelClient.md)

  ↳ **`JsonApiClient`**

## Table of contents

### Constructors

- [constructor](ui_store.JsonApiClient.md#constructor)

### Properties

- [baseApiPath](ui_store.JsonApiClient.md#baseapipath)

### Methods

- [buildApiPath](ui_store.JsonApiClient.md#buildapipath)
- [buildModelApiPath](ui_store.JsonApiClient.md#buildmodelapipath)
- [buildQueryParams](ui_store.JsonApiClient.md#buildqueryparams)
- [createRecord](ui_store.JsonApiClient.md#createrecord)
- [deleteRecord](ui_store.JsonApiClient.md#deleterecord)
- [deserialize](ui_store.JsonApiClient.md#deserialize)
- [fetch](ui_store.JsonApiClient.md#fetch)
- [fetchSingle](ui_store.JsonApiClient.md#fetchsingle)
- [serialize](ui_store.JsonApiClient.md#serialize)
- [updateRecord](ui_store.JsonApiClient.md#updaterecord)

## Constructors

### constructor

• **new JsonApiClient**(`baseApiPath`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseApiPath` | `string` |

#### Overrides

[ModelClient](ui_store.ModelClient.md).[constructor](ui_store.ModelClient.md#constructor)

#### Defined in

[src/ui/store/JsonApiClient.ts:10](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/store/JsonApiClient.ts#L10)

## Properties

### baseApiPath

• `Private` `Readonly` **baseApiPath**: `string`

#### Defined in

[src/ui/store/JsonApiClient.ts:8](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/store/JsonApiClient.ts#L8)

## Methods

### buildApiPath

▸ `Private` **buildApiPath**<`Model`\>(`modelClass`, `record`): `string`

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

`string`

#### Defined in

[src/ui/store/JsonApiClient.ts:51](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/store/JsonApiClient.ts#L51)

___

### buildModelApiPath

▸ `Private` **buildModelApiPath**<`Model`\>(`modelClass`, `record`): `string`

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

`string`

#### Defined in

[src/ui/store/JsonApiClient.ts:60](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/store/JsonApiClient.ts#L60)

___

### buildQueryParams

▸ `Private` **buildQueryParams**(`modelClass`, `params`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelClass` | typeof [`BaseType`](models.BaseType.md) |
| `params` | `any` |

#### Returns

`string`

#### Defined in

[src/ui/store/JsonApiClient.ts:64](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/store/JsonApiClient.ts#L64)

___

### createRecord

▸ **createRecord**<`Model`\>(`modelClass`, `createdRecord`): `Promise`<`Model`\>

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

#### Overrides

[ModelClient](ui_store.ModelClient.md).[createRecord](ui_store.ModelClient.md#createrecord)

#### Defined in

[src/ui/store/JsonApiClient.ts:29](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/store/JsonApiClient.ts#L29)

___

### deleteRecord

▸ **deleteRecord**<`Model`\>(`modelClass`, `deletedRecord`): `Promise`<`void`\>

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

#### Overrides

[ModelClient](ui_store.ModelClient.md).[deleteRecord](ui_store.ModelClient.md#deleterecord)

#### Defined in

[src/ui/store/JsonApiClient.ts:47](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/store/JsonApiClient.ts#L47)

___

### deserialize

▸ **deserialize**<`Model`\>(`modelClass`, `rawResponse`): `Model`

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

#### Overrides

[ModelClient](ui_store.ModelClient.md).[deserialize](ui_store.ModelClient.md#deserialize)

#### Defined in

[src/ui/store/JsonApiClient.ts:81](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/store/JsonApiClient.ts#L81)

___

### fetch

▸ **fetch**<`Model`\>(`modelClass`, `params`): `Promise`<`Model`[]\>

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

#### Overrides

[ModelClient](ui_store.ModelClient.md).[fetch](ui_store.ModelClient.md#fetch)

#### Defined in

[src/ui/store/JsonApiClient.ts:15](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/store/JsonApiClient.ts#L15)

___

### fetchSingle

▸ **fetchSingle**<`Model`\>(`modelClass`, `id`): `Promise`<`Model`\>

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

#### Overrides

[ModelClient](ui_store.ModelClient.md).[fetchSingle](ui_store.ModelClient.md#fetchsingle)

#### Defined in

[src/ui/store/JsonApiClient.ts:22](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/store/JsonApiClient.ts#L22)

___

### serialize

▸ **serialize**<`Model`\>(`modelClass`, `record`): `any`

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

#### Overrides

[ModelClient](ui_store.ModelClient.md).[serialize](ui_store.ModelClient.md#serialize)

#### Defined in

[src/ui/store/JsonApiClient.ts:71](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/store/JsonApiClient.ts#L71)

___

### updateRecord

▸ **updateRecord**<`Model`\>(`modelClass`, `updatedRecord`): `Promise`<`Model`\>

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

#### Overrides

[ModelClient](ui_store.ModelClient.md).[updateRecord](ui_store.ModelClient.md#updaterecord)

#### Defined in

[src/ui/store/JsonApiClient.ts:38](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/store/JsonApiClient.ts#L38)
