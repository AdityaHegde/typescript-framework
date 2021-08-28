[@adityhegde/typescript-framework](../README.md) / [Modules](../modules.md) / [ui](../modules/ui.md) / SelectEnumItems

# Class: SelectEnumItems<Opt\>

[ui](../modules/ui.md).SelectEnumItems

## Type parameters

| Name |
| :------ |
| `Opt` |

## Hierarchy

- `Map`<`any`, `Opt`[]\>

  ↳ **`SelectEnumItems`**

## Table of contents

### Constructors

- [constructor](ui.SelectEnumItems.md#constructor)

### Properties

- [[toStringTag]](ui.SelectEnumItems.md#[tostringtag])
- [itemGetter](ui.SelectEnumItems.md#itemgetter)
- [size](ui.SelectEnumItems.md#size)
- [[species]](ui.SelectEnumItems.md#[species])

### Methods

- [[iterator]](ui.SelectEnumItems.md#[iterator])
- [clear](ui.SelectEnumItems.md#clear)
- [delete](ui.SelectEnumItems.md#delete)
- [entries](ui.SelectEnumItems.md#entries)
- [forEach](ui.SelectEnumItems.md#foreach)
- [get](ui.SelectEnumItems.md#get)
- [getOpts](ui.SelectEnumItems.md#getopts)
- [getOrCreate](ui.SelectEnumItems.md#getorcreate)
- [has](ui.SelectEnumItems.md#has)
- [keys](ui.SelectEnumItems.md#keys)
- [set](ui.SelectEnumItems.md#set)
- [values](ui.SelectEnumItems.md#values)

## Constructors

### constructor

• **new SelectEnumItems**<`Opt`\>(`itemGetter`)

#### Type parameters

| Name |
| :------ |
| `Opt` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `itemGetter` | (`key`: `string`, `value`: `any`) => `Opt` |

#### Overrides

Map&lt;any, Array&lt;Opt\&gt;\&gt;.constructor

#### Defined in

[src/ui/utils/SelectEnumItems.ts:4](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/ui/utils/SelectEnumItems.ts#L4)

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Map.\_\_@toStringTag@151

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:135

___

### itemGetter

• `Private` `Readonly` **itemGetter**: (`key`: `string`, `value`: `any`) => `Opt`

#### Type declaration

▸ (`key`, `value`): `Opt`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

##### Returns

`Opt`

#### Defined in

[src/ui/utils/SelectEnumItems.ts:2](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/ui/utils/SelectEnumItems.ts#L2)

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

▸ **[iterator]**(): `IterableIterator`<[`any`, `Opt`[]]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`<[`any`, `Opt`[]]\>

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

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`boolean`

#### Inherited from

Map.delete

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:23

___

### entries

▸ **entries**(): `IterableIterator`<[`any`, `Opt`[]]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`<[`any`, `Opt`[]]\>

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
| `callbackfn` | (`value`: `Opt`[], `key`: `any`, `map`: `Map`<`any`, `Opt`[]\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

Map.forEach

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:24

___

### get

▸ **get**(`key`): `Opt`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`Opt`[]

#### Inherited from

Map.get

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:25

___

### getOpts

▸ `Private` **getOpts**(`optsEnum`): `Opt`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `optsEnum` | `any` |

#### Returns

`Opt`[]

#### Defined in

[src/ui/utils/SelectEnumItems.ts:19](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/ui/utils/SelectEnumItems.ts#L19)

___

### getOrCreate

▸ **getOrCreate**(`optsEnum`): `Opt`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `optsEnum` | `any` |

#### Returns

`Opt`[]

#### Defined in

[src/ui/utils/SelectEnumItems.ts:9](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/ui/utils/SelectEnumItems.ts#L9)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`boolean`

#### Inherited from

Map.has

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:26

___

### keys

▸ **keys**(): `IterableIterator`<`any`\>

Returns an iterable of keys in the map

#### Returns

`IterableIterator`<`any`\>

#### Inherited from

Map.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:131

___

### set

▸ **set**(`key`, `value`): [`SelectEnumItems`](ui.SelectEnumItems.md)<`Opt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `value` | `Opt`[] |

#### Returns

[`SelectEnumItems`](ui.SelectEnumItems.md)<`Opt`\>

#### Inherited from

Map.set

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:27

___

### values

▸ **values**(): `IterableIterator`<`Opt`[]\>

Returns an iterable of values in the map

#### Returns

`IterableIterator`<`Opt`[]\>

#### Inherited from

Map.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:136
