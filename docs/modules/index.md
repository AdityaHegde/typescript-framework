[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / index

# Module: index

## Table of contents

### Classes

- [AwaitTimeoutError](../classes/index.AwaitTimeoutError.md)
- [Config](../classes/index.Config.md)

### Type aliases

- [ConfigFieldType](index.md#configfieldtype)
- [NonFunctionProperties](index.md#nonfunctionproperties)
- [NonFunctionPropertyNames](index.md#nonfunctionpropertynames)

### Functions

- [Builder](index.md#builder)
- [asyncWait](index.md#asyncwait)
- [awaitEvent](index.md#awaitevent)
- [dedupeFieldTypes](index.md#dedupefieldtypes)
- [getClassName](index.md#getclassname)
- [promisify](index.md#promisify)
- [waitUntil](index.md#waituntil)

## Type aliases

### ConfigFieldType

Ƭ **ConfigFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `defaultValue?` | `any` |
| `field` | `string` |
| `key?` | `string` |
| `subConfigClass?` | typeof [`Config`](../classes/index.Config.md) |

#### Defined in

[src/utils/Config.ts:3](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/utils/Config.ts#L3)

___

### NonFunctionProperties

Ƭ **NonFunctionProperties**<`T`\>: `Pick`<`T`, [`NonFunctionPropertyNames`](index.md#nonfunctionpropertynames)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/utils/Builder.ts:3](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/utils/Builder.ts#L3)

___

### NonFunctionPropertyNames

Ƭ **NonFunctionPropertyNames**<`T`\>: { [K in keyof T]: T[K] extends Function ? never : K }[keyof `T`]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/utils/Builder.ts:1](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/utils/Builder.ts#L1)

## Functions

### Builder

▸ **Builder**<`T`\>(`instance`): `BuilderType`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | `T` |

#### Returns

`BuilderType`<`T`\>

#### Defined in

[src/utils/Builder.ts:11](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/utils/Builder.ts#L11)

___

### asyncWait

▸ **asyncWait**(`time`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[src/utils/asyncWait.ts:1](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/utils/asyncWait.ts#L1)

___

### awaitEvent

▸ **awaitEvent**(`target`, `event`, `timeout?`, `errorEvent?`): `Promise`<`unknown`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `target` | `EventEmitter` | `undefined` |
| `event` | `string` | `undefined` |
| `timeout` | `number` | `-1` |
| `errorEvent?` | `string` | `undefined` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[src/utils/awaitEvent.ts:4](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/utils/awaitEvent.ts#L4)

___

### dedupeFieldTypes

▸ **dedupeFieldTypes**<`T`\>(`fieldTypes`, `fieldTypesMap`, `fieldType`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldTypes` | `T`[] |
| `fieldTypesMap` | `Map`<`string`, `T`\> |
| `fieldType` | `T` |

#### Returns

`void`

#### Defined in

[src/utils/dedupeFieldTypes.ts:1](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/utils/dedupeFieldTypes.ts#L1)

___

### getClassName

▸ **getClassName**(`clazz`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clazz` | `any` |

#### Returns

`any`

#### Defined in

[src/utils/getClassName.ts:4](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/utils/getClassName.ts#L4)

___

### promisify

▸ **promisify**(`context`, `func`, ...`args`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `any` |
| `func` | `Function` |
| `...args` | `any`[] |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[src/utils/promisify.ts:1](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/utils/promisify.ts#L1)

___

### waitUntil

▸ **waitUntil**(`checkFunc`, `timeout?`, `interval?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `checkFunc` | () => `boolean` | `undefined` |
| `timeout` | `number` | `30000` |
| `interval` | `number` | `250` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/utils/waitUntil.ts:3](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/utils/waitUntil.ts#L3)
