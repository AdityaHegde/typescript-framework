[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / [server/datastore/mongoose](../modules/server_datastore_mongoose.md) / MongooseStoreModelFactory

# Class: MongooseStoreModelFactory

[server/datastore/mongoose](../modules/server_datastore_mongoose.md).MongooseStoreModelFactory

## Hierarchy

- [`DataStoreModelFactory`](server.DataStoreModelFactory.md)

  ↳ **`MongooseStoreModelFactory`**

## Table of contents

### Constructors

- [constructor](server_datastore_mongoose.MongooseStoreModelFactory.md#constructor)

### Properties

- [[toStringTag]](server_datastore_mongoose.MongooseStoreModelFactory.md#[tostringtag])
- [dataStoreModels](server_datastore_mongoose.MongooseStoreModelFactory.md#datastoremodels)
- [mongooseModels](server_datastore_mongoose.MongooseStoreModelFactory.md#mongoosemodels)
- [size](server_datastore_mongoose.MongooseStoreModelFactory.md#size)
- [[species]](server_datastore_mongoose.MongooseStoreModelFactory.md#[species])

### Methods

- [[iterator]](server_datastore_mongoose.MongooseStoreModelFactory.md#[iterator])
- [clear](server_datastore_mongoose.MongooseStoreModelFactory.md#clear)
- [createDataStoreModel](server_datastore_mongoose.MongooseStoreModelFactory.md#createdatastoremodel)
- [delete](server_datastore_mongoose.MongooseStoreModelFactory.md#delete)
- [entries](server_datastore_mongoose.MongooseStoreModelFactory.md#entries)
- [forEach](server_datastore_mongoose.MongooseStoreModelFactory.md#foreach)
- [get](server_datastore_mongoose.MongooseStoreModelFactory.md#get)
- [getCompiledModel](server_datastore_mongoose.MongooseStoreModelFactory.md#getcompiledmodel)
- [getDataStoreModel](server_datastore_mongoose.MongooseStoreModelFactory.md#getdatastoremodel)
- [has](server_datastore_mongoose.MongooseStoreModelFactory.md#has)
- [init](server_datastore_mongoose.MongooseStoreModelFactory.md#init)
- [keys](server_datastore_mongoose.MongooseStoreModelFactory.md#keys)
- [set](server_datastore_mongoose.MongooseStoreModelFactory.md#set)
- [values](server_datastore_mongoose.MongooseStoreModelFactory.md#values)

## Constructors

### constructor

• **new MongooseStoreModelFactory**(`entries?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries?` | readonly readonly [`string`, [`DataStoreModel`](server.DataStoreModel.md)][] |

#### Inherited from

[DataStoreModelFactory](server.DataStoreModelFactory.md).[constructor](server.DataStoreModelFactory.md#constructor)

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:33

• **new MongooseStoreModelFactory**(`iterable`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `Iterable`<readonly [`string`, [`DataStoreModel`](server.DataStoreModel.md)]\> |

#### Inherited from

[DataStoreModelFactory](server.DataStoreModelFactory.md).[constructor](server.DataStoreModelFactory.md#constructor)

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:160

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

[DataStoreModelFactory](server.DataStoreModelFactory.md).[[toStringTag]](server.DataStoreModelFactory.md#[tostringtag])

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:135

___

### dataStoreModels

• `Protected` **dataStoreModels**: `Map`<`string`, [`DataStoreModel`](server.DataStoreModel.md)\>

#### Inherited from

[DataStoreModelFactory](server.DataStoreModelFactory.md).[dataStoreModels](server.DataStoreModelFactory.md#datastoremodels)

#### Defined in

[src/server/datastore/DataStoreModelFactory.ts:6](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/server/datastore/DataStoreModelFactory.ts#L6)

___

### mongooseModels

• `Private` **mongooseModels**: `Map`<`string`, `Model`<`Document`<`any`, `any`, `any`\>, `Object`, `Object`, `Object`\>\>

#### Defined in

[src/server/datastore/mongoose/MongooseStoreModelFactory.ts:12](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/server/datastore/mongoose/MongooseStoreModelFactory.ts#L12)

___

### size

• `Readonly` **size**: `number`

#### Inherited from

[DataStoreModelFactory](server.DataStoreModelFactory.md).[size](server.DataStoreModelFactory.md#size)

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:28

___

### [species]

▪ `Static` `Readonly` **[species]**: `MapConstructor`

#### Inherited from

[DataStoreModelFactory](server.DataStoreModelFactory.md).[[species]](server.DataStoreModelFactory.md#[species])

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:317

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`string`, [`DataStoreModel`](server.DataStoreModel.md)]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`<[`string`, [`DataStoreModel`](server.DataStoreModel.md)]\>

#### Inherited from

[DataStoreModelFactory](server.DataStoreModelFactory.md).[[iterator]](server.DataStoreModelFactory.md#[iterator])

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[DataStoreModelFactory](server.DataStoreModelFactory.md).[clear](server.DataStoreModelFactory.md#clear)

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:22

___

### createDataStoreModel

▸ **createDataStoreModel**(`model`): `Promise`<[`DataStoreModel`](server.DataStoreModel.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | typeof [`BaseType`](models.BaseType.md) |

#### Returns

`Promise`<[`DataStoreModel`](server.DataStoreModel.md)\>

#### Overrides

[DataStoreModelFactory](server.DataStoreModelFactory.md).[createDataStoreModel](server.DataStoreModelFactory.md#createdatastoremodel)

#### Defined in

[src/server/datastore/mongoose/MongooseStoreModelFactory.ts:14](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/server/datastore/mongoose/MongooseStoreModelFactory.ts#L14)

___

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Inherited from

[DataStoreModelFactory](server.DataStoreModelFactory.md).[delete](server.DataStoreModelFactory.md#delete)

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:23

___

### entries

▸ **entries**(): `IterableIterator`<[`string`, [`DataStoreModel`](server.DataStoreModel.md)]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`<[`string`, [`DataStoreModel`](server.DataStoreModel.md)]\>

#### Inherited from

[DataStoreModelFactory](server.DataStoreModelFactory.md).[entries](server.DataStoreModelFactory.md#entries)

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:126

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: [`DataStoreModel`](server.DataStoreModel.md), `key`: `string`, `map`: `Map`<`string`, [`DataStoreModel`](server.DataStoreModel.md)\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

[DataStoreModelFactory](server.DataStoreModelFactory.md).[forEach](server.DataStoreModelFactory.md#foreach)

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:24

___

### get

▸ **get**(`key`): [`DataStoreModel`](server.DataStoreModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`DataStoreModel`](server.DataStoreModel.md)

#### Inherited from

[DataStoreModelFactory](server.DataStoreModelFactory.md).[get](server.DataStoreModelFactory.md#get)

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:25

___

### getCompiledModel

▸ `Private` **getCompiledModel**(`model`): `Model`<`Document`<`any`, `any`, `any`\>, `Object`, `Object`, `Object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | typeof [`BaseType`](models.BaseType.md) |

#### Returns

`Model`<`Document`<`any`, `any`, `any`\>, `Object`, `Object`, `Object`\>

#### Defined in

[src/server/datastore/mongoose/MongooseStoreModelFactory.ts:32](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/server/datastore/mongoose/MongooseStoreModelFactory.ts#L32)

___

### getDataStoreModel

▸ **getDataStoreModel**(`modelName`): [`DataStoreModel`](server.DataStoreModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelName` | `string` |

#### Returns

[`DataStoreModel`](server.DataStoreModel.md)

#### Inherited from

[DataStoreModelFactory](server.DataStoreModelFactory.md).[getDataStoreModel](server.DataStoreModelFactory.md#getdatastoremodel)

#### Defined in

[src/server/datastore/DataStoreModelFactory.ts:15](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/server/datastore/DataStoreModelFactory.ts#L15)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Inherited from

[DataStoreModelFactory](server.DataStoreModelFactory.md).[has](server.DataStoreModelFactory.md#has)

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:26

___

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[DataStoreModelFactory](server.DataStoreModelFactory.md).[init](server.DataStoreModelFactory.md#init)

#### Defined in

[src/server/datastore/DataStoreModelFactory.ts:8](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/server/datastore/DataStoreModelFactory.ts#L8)

___

### keys

▸ **keys**(): `IterableIterator`<`string`\>

Returns an iterable of keys in the map

#### Returns

`IterableIterator`<`string`\>

#### Inherited from

[DataStoreModelFactory](server.DataStoreModelFactory.md).[keys](server.DataStoreModelFactory.md#keys)

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:131

___

### set

▸ **set**(`key`, `value`): [`MongooseStoreModelFactory`](server_datastore_mongoose.MongooseStoreModelFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`DataStoreModel`](server.DataStoreModel.md) |

#### Returns

[`MongooseStoreModelFactory`](server_datastore_mongoose.MongooseStoreModelFactory.md)

#### Inherited from

[DataStoreModelFactory](server.DataStoreModelFactory.md).[set](server.DataStoreModelFactory.md#set)

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:27

___

### values

▸ **values**(): `IterableIterator`<[`DataStoreModel`](server.DataStoreModel.md)\>

Returns an iterable of values in the map

#### Returns

`IterableIterator`<[`DataStoreModel`](server.DataStoreModel.md)\>

#### Inherited from

[DataStoreModelFactory](server.DataStoreModelFactory.md).[values](server.DataStoreModelFactory.md#values)

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:136
