[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / [ui/store](../modules/ui_store.md) / ModelStoreRepository

# Class: ModelStoreRepository

[ui/store](../modules/ui_store.md).ModelStoreRepository

## Hierarchy

- `Map`<`string`, [`ModelStore`](ui_store.ModelStore.md)<`any`\>\>

  ↳ **`ModelStoreRepository`**

## Table of contents

### Constructors

- [constructor](ui_store.ModelStoreRepository.md#constructor)

### Properties

- [[toStringTag]](ui_store.ModelStoreRepository.md#[tostringtag])
- [modelClient](ui_store.ModelStoreRepository.md#modelclient)
- [size](ui_store.ModelStoreRepository.md#size)
- [[species]](ui_store.ModelStoreRepository.md#[species])
- [instance](ui_store.ModelStoreRepository.md#instance)

### Methods

- [[iterator]](ui_store.ModelStoreRepository.md#[iterator])
- [clear](ui_store.ModelStoreRepository.md#clear)
- [delete](ui_store.ModelStoreRepository.md#delete)
- [entries](ui_store.ModelStoreRepository.md#entries)
- [forEach](ui_store.ModelStoreRepository.md#foreach)
- [get](ui_store.ModelStoreRepository.md#get)
- [getOrCreate](ui_store.ModelStoreRepository.md#getorcreate)
- [has](ui_store.ModelStoreRepository.md#has)
- [keys](ui_store.ModelStoreRepository.md#keys)
- [set](ui_store.ModelStoreRepository.md#set)
- [values](ui_store.ModelStoreRepository.md#values)

## Constructors

### constructor

• **new ModelStoreRepository**(`modelClient`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelClient` | [`ModelClient`](ui_store.ModelClient.md) |

#### Overrides

Map&lt;string, ModelStore&lt;any\&gt;\&gt;.constructor

#### Defined in

[src/ui/store/ModelStoreRepository.ts:9](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/ui/store/ModelStoreRepository.ts#L9)

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Map.\_\_@toStringTag@167

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:135

___

### modelClient

• `Private` `Readonly` **modelClient**: [`ModelClient`](ui_store.ModelClient.md)

#### Defined in

[src/ui/store/ModelStoreRepository.ts:7](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/ui/store/ModelStoreRepository.ts#L7)

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

Map.\_\_@species@8

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:317

___

### instance

▪ `Static` **instance**: [`ModelStoreRepository`](ui_store.ModelStoreRepository.md)

#### Defined in

[src/ui/store/ModelStoreRepository.ts:25](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/ui/store/ModelStoreRepository.ts#L25)

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`string`, [`ModelStore`](ui_store.ModelStore.md)<`any`\>]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`<[`string`, [`ModelStore`](ui_store.ModelStore.md)<`any`\>]\>

#### Inherited from

Map.\_\_@iterator@28

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

▸ **entries**(): `IterableIterator`<[`string`, [`ModelStore`](ui_store.ModelStore.md)<`any`\>]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`<[`string`, [`ModelStore`](ui_store.ModelStore.md)<`any`\>]\>

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
| `callbackfn` | (`value`: [`ModelStore`](ui_store.ModelStore.md)<`any`\>, `key`: `string`, `map`: `Map`<`string`, [`ModelStore`](ui_store.ModelStore.md)<`any`\>\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

Map.forEach

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:24

___

### get

▸ **get**(`key`): [`ModelStore`](ui_store.ModelStore.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`ModelStore`](ui_store.ModelStore.md)<`any`\>

#### Inherited from

Map.get

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:25

___

### getOrCreate

▸ **getOrCreate**<`Model`\>(`modelName`): [`ModelStore`](ui_store.ModelStore.md)<`Model`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Model` | extends [`BaseType`](models.BaseType.md)<`Model`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelName` | `string` |

#### Returns

[`ModelStore`](ui_store.ModelStore.md)<`Model`\>

#### Defined in

[src/ui/store/ModelStoreRepository.ts:15](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/ui/store/ModelStoreRepository.ts#L15)

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

▸ **set**(`key`, `value`): [`ModelStoreRepository`](ui_store.ModelStoreRepository.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`ModelStore`](ui_store.ModelStore.md)<`any`\> |

#### Returns

[`ModelStoreRepository`](ui_store.ModelStoreRepository.md)

#### Inherited from

Map.set

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:27

___

### values

▸ **values**(): `IterableIterator`<[`ModelStore`](ui_store.ModelStore.md)<`any`\>\>

Returns an iterable of values in the map

#### Returns

`IterableIterator`<[`ModelStore`](ui_store.ModelStore.md)<`any`\>\>

#### Inherited from

Map.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:136
