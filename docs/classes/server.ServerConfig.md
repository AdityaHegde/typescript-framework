[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / [server](../modules/server.md) / ServerConfig

# Class: ServerConfig

[server](../modules/server.md).ServerConfig

## Hierarchy

- [`Config`](index.Config.md)<[`ServerConfig`](server.ServerConfig.md)\>

  ↳ **`ServerConfig`**

## Table of contents

### Constructors

- [constructor](server.ServerConfig.md#constructor)

### Properties

- [authentication](server.ServerConfig.md#authentication)
- [host](server.ServerConfig.md#host)
- [port](server.ServerConfig.md#port)
- [publicAssets](server.ServerConfig.md#publicassets)
- [routes](server.ServerConfig.md#routes)

### Methods

- [ConfigField](server.ServerConfig.md#configfield)
- [SubConfig](server.ServerConfig.md#subconfig)

## Constructors

### constructor

• **new ServerConfig**(`configJson`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configJson` | `Object` |
| `configJson.authentication?` | `any` |
| `configJson.host?` | `any` |
| `configJson.port?` | `any` |
| `configJson.publicAssets?` | `any` |
| `configJson.routes?` | `any` |

#### Inherited from

[Config](index.Config.md).[constructor](index.Config.md#constructor)

#### Defined in

[src/utils/Config.ts:13](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/utils/Config.ts#L13)

## Properties

### authentication

• `Readonly` **authentication**: [`AuthenticationConfig`](server.AuthenticationConfig.md)

#### Defined in

[src/server/ServerConfig.ts:13](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/server/ServerConfig.ts#L13)

___

### host

• `Readonly` **host**: `string`

#### Defined in

[src/server/ServerConfig.ts:9](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/server/ServerConfig.ts#L9)

___

### port

• `Readonly` **port**: `number`

#### Defined in

[src/server/ServerConfig.ts:7](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/server/ServerConfig.ts#L7)

___

### publicAssets

• `Readonly` **publicAssets**: `string`

#### Defined in

[src/server/ServerConfig.ts:11](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/server/ServerConfig.ts#L11)

___

### routes

• `Readonly` **routes**: [`RoutesConfig`](server.RoutesConfig.md)

#### Defined in

[src/server/ServerConfig.ts:15](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/server/ServerConfig.ts#L15)

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

[src/utils/Config.ts:33](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/utils/Config.ts#L33)

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

[src/utils/Config.ts:44](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/utils/Config.ts#L44)
