[@adityhegde/typescript-framework](../README.md) / [Modules](../modules.md) / [server](../modules/server.md) / DataStoreModelFactory

# Class: DataStoreModelFactory

[server](../modules/server.md).DataStoreModelFactory

## Hierarchy

- `Map`<`string`, [`DataStoreModel`](server.DataStoreModel.md)\>

  ↳ **`DataStoreModelFactory`**

  ↳↳ [`MongooseStoreModelFactory`](server_datastore_mongoose.MongooseStoreModelFactory.md)

## Table of contents

### Constructors

- [constructor](server.DataStoreModelFactory.md#constructor)

### Properties

- [[toStringTag]](server.DataStoreModelFactory.md#[tostringtag])
- [dataStoreModels](server.DataStoreModelFactory.md#datastoremodels)
- [size](server.DataStoreModelFactory.md#size)
- [[species]](server.DataStoreModelFactory.md#[species])

### Methods

- [[iterator]](server.DataStoreModelFactory.md#[iterator])
- [clear](server.DataStoreModelFactory.md#clear)
- [createDataStoreModel](server.DataStoreModelFactory.md#createdatastoremodel)
- [delete](server.DataStoreModelFactory.md#delete)
- [entries](server.DataStoreModelFactory.md#entries)
- [forEach](server.DataStoreModelFactory.md#foreach)
- [get](server.DataStoreModelFactory.md#get)
- [getDataStoreModel](server.DataStoreModelFactory.md#getdatastoremodel)
- [has](server.DataStoreModelFactory.md#has)
- [init](server.DataStoreModelFactory.md#init)
- [keys](server.DataStoreModelFactory.md#keys)
- [set](server.DataStoreModelFactory.md#set)
- [values](server.DataStoreModelFactory.md#values)

## Constructors

### constructor

• **new DataStoreModelFactory**(`entries?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries?` | readonly readonly [`string`, [`DataStoreModel`](server.DataStoreModel.md)][] |

#### Inherited from

Map<string, DataStoreModel\>.constructor

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:33

• **new DataStoreModelFactory**(`iterable`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `Iterable`<readonly [`string`, [`DataStoreModel`](server.DataStoreModel.md)]\> |

#### Inherited from

Map<string, DataStoreModel\>.constructor

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:160

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Map.\_\_@toStringTag@151

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:135

___

### dataStoreModels

• `Protected` **dataStoreModels**: `Map`<`string`, [`DataStoreModel`](server.DataStoreModel.md)\>

#### Defined in

[src/server/datastore/DataStoreModelFactory.ts:6](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/datastore/DataStoreModelFactory.ts#L6)

___

### size

• `Readonly` **size**: `number`

#### Inherited from

Map.size

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:28

___

### [species]

▪ `Static` `Readonly` **[species]**: `MapConstructor`

#### Inherited from

Map.\_\_@species@6

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:317

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`string`, [`DataStoreModel`](server.DataStoreModel.md)]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`<[`string`, [`DataStoreModel`](server.DataStoreModel.md)]\>

#### Inherited from

Map.\_\_@iterator@23

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

Map.clear

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:22

___

### createDataStoreModel

▸ `Abstract` **createDataStoreModel**(`model`): `Promise`<[`DataStoreModel`](server.DataStoreModel.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | typeof [`BaseType`](models.BaseType.md) |

#### Returns

`Promise`<[`DataStoreModel`](server.DataStoreModel.md)\>

#### Defined in

[src/server/datastore/DataStoreModelFactory.ts:19](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/datastore/DataStoreModelFactory.ts#L19)

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

Map.delete

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:23

___

### entries

▸ **entries**(): `IterableIterator`<[`string`, [`DataStoreModel`](server.DataStoreModel.md)]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`<[`string`, [`DataStoreModel`](server.DataStoreModel.md)]\>

#### Inherited from

Map.entries

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

Map.forEach

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

Map.get

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:25

___

### getDataStoreModel

▸ **getDataStoreModel**(`modelName`): [`DataStoreModel`](server.DataStoreModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelName` | `string` |

#### Returns

[`DataStoreModel`](server.DataStoreModel.md)

#### Defined in

[src/server/datastore/DataStoreModelFactory.ts:15](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/datastore/DataStoreModelFactory.ts#L15)

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

Map.has

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:26

___

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/server/datastore/DataStoreModelFactory.ts:8](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/datastore/DataStoreModelFactory.ts#L8)

___

### keys

▸ **keys**(): `IterableIterator`<`string`\>

Returns an iterable of keys in the map

#### Returns

`IterableIterator`<`string`\>

#### Inherited from

Map.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:131

___

### set

▸ **set**(`key`, `value`): [`DataStoreModelFactory`](server.DataStoreModelFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`DataStoreModel`](server.DataStoreModel.md) |

#### Returns

[`DataStoreModelFactory`](server.DataStoreModelFactory.md)

#### Inherited from

Map.set

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:27

___

### values

▸ **values**(): `IterableIterator`<[`DataStoreModel`](server.DataStoreModel.md)\>

Returns an iterable of values in the map

#### Returns

`IterableIterator`<[`DataStoreModel`](server.DataStoreModel.md)\>

#### Inherited from

Map.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:136
