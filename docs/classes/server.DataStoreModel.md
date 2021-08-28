[@adityhegde/typescript-framework](../README.md) / [Modules](../modules.md) / [server](../modules/server.md) / DataStoreModel

# Class: DataStoreModel

[server](../modules/server.md).DataStoreModel

## Hierarchy

- **`DataStoreModel`**

  ↳ [`MongooseStoreModel`](server_datastore_mongoose.MongooseStoreModel.md)

## Table of contents

### Constructors

- [constructor](server.DataStoreModel.md#constructor)

### Properties

- [model](server.DataStoreModel.md#model)

### Methods

- [create](server.DataStoreModel.md#create)
- [delete](server.DataStoreModel.md#delete)
- [deleteMany](server.DataStoreModel.md#deletemany)
- [findOrCreate](server.DataStoreModel.md#findorcreate)
- [getById](server.DataStoreModel.md#getbyid)
- [query](server.DataStoreModel.md#query)
- [querySingle](server.DataStoreModel.md#querysingle)
- [update](server.DataStoreModel.md#update)
- [updateMany](server.DataStoreModel.md#updatemany)
- [updateOrCreate](server.DataStoreModel.md#updateorcreate)

## Constructors

### constructor

• **new DataStoreModel**(`model`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | typeof [`BaseType`](models.BaseType.md) |

#### Defined in

[src/server/datastore/DataStoreModel.ts:14](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/datastore/DataStoreModel.ts#L14)

## Properties

### model

• `Readonly` **model**: typeof [`BaseType`](models.BaseType.md)

#### Defined in

[src/server/datastore/DataStoreModel.ts:12](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/datastore/DataStoreModel.ts#L12)

## Methods

### create

▸ `Abstract` **create**(`record`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/server/datastore/DataStoreModel.ts:21](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/datastore/DataStoreModel.ts#L21)

___

### delete

▸ `Abstract` **delete**(`id`, `record`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `record` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/server/datastore/DataStoreModel.ts:25](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/datastore/DataStoreModel.ts#L25)

___

### deleteMany

▸ `Abstract` **deleteMany**(`query`, `options?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `any` |
| `options?` | [`QueryOptions`](../modules/server.md#queryoptions) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/server/datastore/DataStoreModel.ts:26](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/datastore/DataStoreModel.ts#L26)

___

### findOrCreate

▸ **findOrCreate**(`query`, `record`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `any` |
| `record` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/server/datastore/DataStoreModel.ts:28](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/datastore/DataStoreModel.ts#L28)

___

### getById

▸ `Abstract` **getById**(`id`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/server/datastore/DataStoreModel.ts:20](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/datastore/DataStoreModel.ts#L20)

___

### query

▸ `Abstract` **query**(`search`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `search` | `any` |
| `options?` | [`QueryOptions`](../modules/server.md#queryoptions) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/server/datastore/DataStoreModel.ts:18](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/datastore/DataStoreModel.ts#L18)

___

### querySingle

▸ `Abstract` **querySingle**(`search`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `search` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/server/datastore/DataStoreModel.ts:19](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/datastore/DataStoreModel.ts#L19)

___

### update

▸ `Abstract` **update**(`id`, `record`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `record` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/server/datastore/DataStoreModel.ts:22](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/datastore/DataStoreModel.ts#L22)

___

### updateMany

▸ `Abstract` **updateMany**(`query`, `updates`, `options?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `any` |
| `updates` | `any` |
| `options?` | [`QueryOptions`](../modules/server.md#queryoptions) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/server/datastore/DataStoreModel.ts:24](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/datastore/DataStoreModel.ts#L24)

___

### updateOrCreate

▸ `Abstract` **updateOrCreate**(`query`, `record`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `any` |
| `record` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/server/datastore/DataStoreModel.ts:23](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/datastore/DataStoreModel.ts#L23)
