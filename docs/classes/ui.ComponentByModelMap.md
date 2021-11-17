[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / [ui](../modules/ui.md) / ComponentByModelMap

# Class: ComponentByModelMap<Props\>

[ui](../modules/ui.md).ComponentByModelMap

## Type parameters

| Name |
| :------ |
| `Props` |

## Hierarchy

- `Map`<`string`, `FunctionComponent`<`Props`\>\>

  ↳ **`ComponentByModelMap`**

## Table of contents

### Constructors

- [constructor](ui.ComponentByModelMap.md#constructor)

### Properties

- [[toStringTag]](ui.ComponentByModelMap.md#[tostringtag])
- [componentByModel](ui.ComponentByModelMap.md#componentbymodel)
- [size](ui.ComponentByModelMap.md#size)
- [[species]](ui.ComponentByModelMap.md#[species])

### Methods

- [[iterator]](ui.ComponentByModelMap.md#[iterator])
- [clear](ui.ComponentByModelMap.md#clear)
- [createComponent](ui.ComponentByModelMap.md#createcomponent)
- [delete](ui.ComponentByModelMap.md#delete)
- [entries](ui.ComponentByModelMap.md#entries)
- [forEach](ui.ComponentByModelMap.md#foreach)
- [get](ui.ComponentByModelMap.md#get)
- [getOrCreate](ui.ComponentByModelMap.md#getorcreate)
- [has](ui.ComponentByModelMap.md#has)
- [keys](ui.ComponentByModelMap.md#keys)
- [set](ui.ComponentByModelMap.md#set)
- [values](ui.ComponentByModelMap.md#values)

## Constructors

### constructor

• **new ComponentByModelMap**<`Props`\>(`componentByModel`)

#### Type parameters

| Name |
| :------ |
| `Props` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `componentByModel` | `ComponentByModelType`<`Props`\> |

#### Overrides

Map&lt;string, FunctionComponent&lt;Props\&gt;\&gt;.constructor

#### Defined in

[src/ui/utils/ComponentByModelMap.tsx:15](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/utils/ComponentByModelMap.tsx#L15)

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Map.\_\_@toStringTag@167

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:135

___

### componentByModel

• **componentByModel**: `ComponentByModelType`<`Props`\>

#### Defined in

[src/ui/utils/ComponentByModelMap.tsx:13](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/utils/ComponentByModelMap.tsx#L13)

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

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`string`, `FunctionComponent`<`Props`\>]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`<[`string`, `FunctionComponent`<`Props`\>]\>

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

### createComponent

▸ `Private` **createComponent**(`modelName`): (`props`: `Props`) => `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelName` | `string` |

#### Returns

`fn`

▸ (`props`): `Element`

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Props` |

##### Returns

`Element`

#### Defined in

[src/ui/utils/ComponentByModelMap.tsx:31](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/utils/ComponentByModelMap.tsx#L31)

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

▸ **entries**(): `IterableIterator`<[`string`, `FunctionComponent`<`Props`\>]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`<[`string`, `FunctionComponent`<`Props`\>]\>

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
| `callbackfn` | (`value`: `FunctionComponent`<`Props`\>, `key`: `string`, `map`: `Map`<`string`, `FunctionComponent`<`Props`\>\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

Map.forEach

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:24

___

### get

▸ **get**(`key`): `FunctionComponent`<`Props`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`FunctionComponent`<`Props`\>

#### Inherited from

Map.get

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:25

___

### getOrCreate

▸ **getOrCreate**(`modelName`): `FunctionComponent`<`Props`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelName` | `string` |

#### Returns

`FunctionComponent`<`Props`\>

#### Defined in

[src/ui/utils/ComponentByModelMap.tsx:21](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/utils/ComponentByModelMap.tsx#L21)

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

▸ **set**(`key`, `value`): [`ComponentByModelMap`](ui.ComponentByModelMap.md)<`Props`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `FunctionComponent`<`Props`\> |

#### Returns

[`ComponentByModelMap`](ui.ComponentByModelMap.md)<`Props`\>

#### Inherited from

Map.set

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:27

___

### values

▸ **values**(): `IterableIterator`<`FunctionComponent`<`Props`\>\>

Returns an iterable of values in the map

#### Returns

`IterableIterator`<`FunctionComponent`<`Props`\>\>

#### Inherited from

Map.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:136
