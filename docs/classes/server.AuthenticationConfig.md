[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / [server](../modules/server.md) / AuthenticationConfig

# Class: AuthenticationConfig

[server](../modules/server.md).AuthenticationConfig

## Hierarchy

- [`Config`](index.Config.md)<[`AuthenticationConfig`](server.AuthenticationConfig.md)\>

  ↳ **`AuthenticationConfig`**

## Table of contents

### Constructors

- [constructor](server.AuthenticationConfig.md#constructor)

### Properties

- [inviteOnly](server.AuthenticationConfig.md#inviteonly)
- [sessionSecret](server.AuthenticationConfig.md#sessionsecret)

### Methods

- [ConfigField](server.AuthenticationConfig.md#configfield)
- [SubConfig](server.AuthenticationConfig.md#subconfig)

## Constructors

### constructor

• **new AuthenticationConfig**(`configJson`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configJson` | `Object` |
| `configJson.inviteOnly?` | `any` |
| `configJson.sessionSecret?` | `any` |

#### Inherited from

[Config](index.Config.md).[constructor](index.Config.md#constructor)

#### Defined in

[src/utils/Config.ts:13](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/utils/Config.ts#L13)

## Properties

### inviteOnly

• **inviteOnly**: `boolean`

#### Defined in

[src/server/authentication/AuthenticationConfig.ts:7](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/authentication/AuthenticationConfig.ts#L7)

___

### sessionSecret

• **sessionSecret**: `string`

#### Defined in

[src/server/authentication/AuthenticationConfig.ts:5](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/authentication/AuthenticationConfig.ts#L5)

## Methods

### ConfigField

▸ `Static` **ConfigField**(`defaultValue?`, `key?`): (`target`: [`Config`](index.Config.md)<`any`\>, `propertyKey`: `string`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultValue?` | `any` |
| `key?` | `string` |

#### Returns

`fn`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`Config`](index.Config.md)<`any`\> |
| `propertyKey` | `string` |

##### Returns

`void`

#### Inherited from

[Config](index.Config.md).[ConfigField](index.Config.md#configfield)

#### Defined in

[src/utils/Config.ts:33](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/utils/Config.ts#L33)

___

### SubConfig

▸ `Static` **SubConfig**(`subConfigClass`, `defaultValue?`, `key?`): (`target`: [`Config`](index.Config.md)<`any`\>, `propertyKey`: `string`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subConfigClass` | typeof [`Config`](index.Config.md) |
| `defaultValue?` | `any` |
| `key?` | `string` |

#### Returns

`fn`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`Config`](index.Config.md)<`any`\> |
| `propertyKey` | `string` |

##### Returns

`void`

#### Inherited from

[Config](index.Config.md).[SubConfig](index.Config.md#subconfig)

#### Defined in

[src/utils/Config.ts:44](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/utils/Config.ts#L44)
