[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / [server/datastore/mongoose](../modules/server_datastore_mongoose.md) / MongooseStoreModel

# Class: MongooseStoreModel

[server/datastore/mongoose](../modules/server_datastore_mongoose.md).MongooseStoreModel

## Hierarchy

- [`DataStoreModel`](server.DataStoreModel.md)

  ↳ **`MongooseStoreModel`**

## Table of contents

### Constructors

- [constructor](server_datastore_mongoose.MongooseStoreModel.md#constructor)

### Properties

- [model](server_datastore_mongoose.MongooseStoreModel.md#model)
- [mongooseModel](server_datastore_mongoose.MongooseStoreModel.md#mongoosemodel)

### Methods

- [conditionallyApplyFilters](server_datastore_mongoose.MongooseStoreModel.md#conditionallyapplyfilters)
- [create](server_datastore_mongoose.MongooseStoreModel.md#create)
- [delete](server_datastore_mongoose.MongooseStoreModel.md#delete)
- [deleteMany](server_datastore_mongoose.MongooseStoreModel.md#deletemany)
- [findOrCreate](server_datastore_mongoose.MongooseStoreModel.md#findorcreate)
- [getById](server_datastore_mongoose.MongooseStoreModel.md#getbyid)
- [normalizeRecord](server_datastore_mongoose.MongooseStoreModel.md#normalizerecord)
- [normalizeRecords](server_datastore_mongoose.MongooseStoreModel.md#normalizerecords)
- [query](server_datastore_mongoose.MongooseStoreModel.md#query)
- [querySingle](server_datastore_mongoose.MongooseStoreModel.md#querysingle)
- [translateSearch](server_datastore_mongoose.MongooseStoreModel.md#translatesearch)
- [update](server_datastore_mongoose.MongooseStoreModel.md#update)
- [updateMany](server_datastore_mongoose.MongooseStoreModel.md#updatemany)
- [updateOrCreate](server_datastore_mongoose.MongooseStoreModel.md#updateorcreate)

## Constructors

### constructor

• **new MongooseStoreModel**(`model`, `mongooseModel`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | typeof [`BaseType`](models.BaseType.md) |
| `mongooseModel` | `Model`<`Document`<`any`, `any`, `any`\>, `Object`, `Object`, `Object`\> |

#### Overrides

[DataStoreModel](server.DataStoreModel.md).[constructor](server.DataStoreModel.md#constructor)

#### Defined in

[src/server/datastore/mongoose/MongooseStoreModel.ts:8](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/datastore/mongoose/MongooseStoreModel.ts#L8)

## Properties

### model

• `Readonly` **model**: typeof [`BaseType`](models.BaseType.md)

#### Inherited from

[DataStoreModel](server.DataStoreModel.md).[model](server.DataStoreModel.md#model)

#### Defined in

[src/server/datastore/DataStoreModel.ts:12](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/datastore/DataStoreModel.ts#L12)

___

### mongooseModel

• **mongooseModel**: `Model`<`Document`<`any`, `any`, `any`\>, `Object`, `Object`, `Object`\>

#### Defined in

[src/server/datastore/mongoose/MongooseStoreModel.ts:6](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/datastore/mongoose/MongooseStoreModel.ts#L6)

## Methods

### conditionallyApplyFilters

▸ `Private` **conditionallyApplyFilters**(`query`, `options?`): `Query`<`any`, `any`, `Object`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `Query`<`any`, `any`, `Object`, `any`\> |
| `options` | [`QueryOptions`](../modules/server.md#queryoptions) |

#### Returns

`Query`<`any`, `any`, `Object`, `any`\>

#### Defined in

[src/server/datastore/mongoose/MongooseStoreModel.ts:93](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/datastore/mongoose/MongooseStoreModel.ts#L93)

___

### create

▸ **create**(`record`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | `any` |

#### Returns

`Promise`<`any`\>

#### Overrides

[DataStoreModel](server.DataStoreModel.md).[create](server.DataStoreModel.md#create)

#### Defined in

[src/server/datastore/mongoose/MongooseStoreModel.ts:25](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/datastore/mongoose/MongooseStoreModel.ts#L25)

___

### delete

▸ **delete**(`id`, `record`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `record` | `any` |

#### Returns

`Promise`<`any`\>

#### Overrides

[DataStoreModel](server.DataStoreModel.md).[delete](server.DataStoreModel.md#delete)

#### Defined in

[src/server/datastore/mongoose/MongooseStoreModel.ts:42](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/datastore/mongoose/MongooseStoreModel.ts#L42)

___

### deleteMany

▸ **deleteMany**(`query`, `options?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `any` |
| `options?` | [`QueryOptions`](../modules/server.md#queryoptions) |

#### Returns

`Promise`<`any`\>

#### Overrides

[DataStoreModel](server.DataStoreModel.md).[deleteMany](server.DataStoreModel.md#deletemany)

#### Defined in

[src/server/datastore/mongoose/MongooseStoreModel.ts:50](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/datastore/mongoose/MongooseStoreModel.ts#L50)

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

#### Inherited from

[DataStoreModel](server.DataStoreModel.md).[findOrCreate](server.DataStoreModel.md#findorcreate)

#### Defined in

[src/server/datastore/DataStoreModel.ts:28](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/datastore/DataStoreModel.ts#L28)

___

### getById

▸ **getById**(`id`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`any`\>

#### Overrides

[DataStoreModel](server.DataStoreModel.md).[getById](server.DataStoreModel.md#getbyid)

#### Defined in

[src/server/datastore/mongoose/MongooseStoreModel.ts:21](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/datastore/mongoose/MongooseStoreModel.ts#L21)

___

### normalizeRecord

▸ `Private` **normalizeRecord**(`record`): `Document`<`any`, `any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | `Document`<`any`, `any`, `any`\> |

#### Returns

`Document`<`any`, `any`, `any`\>

#### Defined in

[src/server/datastore/mongoose/MongooseStoreModel.ts:111](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/datastore/mongoose/MongooseStoreModel.ts#L111)

___

### normalizeRecords

▸ `Private` **normalizeRecords**(`records`): `Document`<`any`, `any`, `any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `records` | `Document`<`any`, `any`, `any`\>[] |

#### Returns

`Document`<`any`, `any`, `any`\>[]

#### Defined in

[src/server/datastore/mongoose/MongooseStoreModel.ts:107](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/datastore/mongoose/MongooseStoreModel.ts#L107)

___

### query

▸ **query**(`search`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `search` | `any` |
| `options?` | [`QueryOptions`](../modules/server.md#queryoptions) |

#### Returns

`Promise`<`any`[]\>

#### Overrides

[DataStoreModel](server.DataStoreModel.md).[query](server.DataStoreModel.md#query)

#### Defined in

[src/server/datastore/mongoose/MongooseStoreModel.ts:13](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/datastore/mongoose/MongooseStoreModel.ts#L13)

___

### querySingle

▸ **querySingle**(`search`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `search` | `any` |

#### Returns

`Promise`<`any`\>

#### Overrides

[DataStoreModel](server.DataStoreModel.md).[querySingle](server.DataStoreModel.md#querysingle)

#### Defined in

[src/server/datastore/mongoose/MongooseStoreModel.ts:17](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/datastore/mongoose/MongooseStoreModel.ts#L17)

___

### translateSearch

▸ `Private` **translateSearch**(`search`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `search` | `any` |

#### Returns

`Object`

#### Defined in

[src/server/datastore/mongoose/MongooseStoreModel.ts:55](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/datastore/mongoose/MongooseStoreModel.ts#L55)

___

### update

▸ **update**(`id`, `record`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `record` | `any` |

#### Returns

`Promise`<`any`\>

#### Overrides

[DataStoreModel](server.DataStoreModel.md).[update](server.DataStoreModel.md#update)

#### Defined in

[src/server/datastore/mongoose/MongooseStoreModel.ts:29](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/datastore/mongoose/MongooseStoreModel.ts#L29)

___

### updateMany

▸ **updateMany**(`query`, `updates`, `options?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `any` |
| `updates` | `any` |
| `options?` | [`QueryOptions`](../modules/server.md#queryoptions) |

#### Returns

`Promise`<`any`\>

#### Overrides

[DataStoreModel](server.DataStoreModel.md).[updateMany](server.DataStoreModel.md#updatemany)

#### Defined in

[src/server/datastore/mongoose/MongooseStoreModel.ts:37](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/datastore/mongoose/MongooseStoreModel.ts#L37)

___

### updateOrCreate

▸ **updateOrCreate**(`query`, `record`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `any` |
| `record` | `any` |

#### Returns

`Promise`<`any`\>

#### Overrides

[DataStoreModel](server.DataStoreModel.md).[updateOrCreate](server.DataStoreModel.md#updateorcreate)

#### Defined in

[src/server/datastore/mongoose/MongooseStoreModel.ts:33](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/datastore/mongoose/MongooseStoreModel.ts#L33)
