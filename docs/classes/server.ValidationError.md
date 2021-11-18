[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / [server](../modules/server.md) / ValidationError

# Class: ValidationError

[server](../modules/server.md).ValidationError

## Hierarchy

- `Error`

  ↳ **`ValidationError`**

## Table of contents

### Constructors

- [constructor](server.ValidationError.md#constructor)

### Properties

- [message](server.ValidationError.md#message)
- [name](server.ValidationError.md#name)
- [reasons](server.ValidationError.md#reasons)
- [stack](server.ValidationError.md#stack)
- [prepareStackTrace](server.ValidationError.md#preparestacktrace)
- [stackTraceLimit](server.ValidationError.md#stacktracelimit)

### Methods

- [addReason](server.ValidationError.md#addreason)
- [hasReasons](server.ValidationError.md#hasreasons)
- [toJSON](server.ValidationError.md#tojson)
- [captureStackTrace](server.ValidationError.md#capturestacktrace)

## Constructors

### constructor

• **new ValidationError**()

#### Overrides

Error.constructor

#### Defined in

[src/server/validation/ValidationError.ts:9](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/validation/ValidationError.ts#L9)

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### reasons

• `Private` **reasons**: `ValidationErrorReason`[]

#### Defined in

[src/server/validation/ValidationError.ts:7](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/validation/ValidationError.ts#L7)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### addReason

▸ **addReason**(`message`, `field`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `field` | `string` |

#### Returns

`void`

#### Defined in

[src/server/validation/ValidationError.ts:13](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/validation/ValidationError.ts#L13)

___

### hasReasons

▸ **hasReasons**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/server/validation/ValidationError.ts:17](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/validation/ValidationError.ts#L17)

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `reasons` | `ValidationErrorReason`[] |
| `title` | `string` |

#### Defined in

[src/server/validation/ValidationError.ts:21](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/validation/ValidationError.ts#L21)

___

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
