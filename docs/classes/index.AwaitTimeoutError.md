[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / AwaitTimeoutError

# Class: AwaitTimeoutError

[index](../modules/index.md).AwaitTimeoutError

## Hierarchy

- `Error`

  ↳ **`AwaitTimeoutError`**

## Table of contents

### Constructors

- [constructor](index.AwaitTimeoutError.md#constructor)

### Properties

- [message](index.AwaitTimeoutError.md#message)
- [name](index.AwaitTimeoutError.md#name)
- [stack](index.AwaitTimeoutError.md#stack)
- [prepareStackTrace](index.AwaitTimeoutError.md#preparestacktrace)
- [stackTraceLimit](index.AwaitTimeoutError.md#stacktracelimit)

### Methods

- [captureStackTrace](index.AwaitTimeoutError.md#capturestacktrace)

## Constructors

### constructor

• **new AwaitTimeoutError**()

#### Overrides

Error.constructor

#### Defined in

[src/utils/AwaitTimeoutError.ts:2](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/utils/AwaitTimeoutError.ts#L2)

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
