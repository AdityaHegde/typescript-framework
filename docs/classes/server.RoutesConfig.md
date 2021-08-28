[@adityhegde/typescript-framework](../README.md) / [Modules](../modules.md) / [server](../modules/server.md) / RoutesConfig

# Class: RoutesConfig

[server](../modules/server.md).RoutesConfig

## Hierarchy

- [`Config`](index.Config.md)<[`RoutesConfig`](server.RoutesConfig.md)\>

  ↳ **`RoutesConfig`**

## Table of contents

### Constructors

- [constructor](server.RoutesConfig.md#constructor)

### Properties

- [recordsResultLimit](server.RoutesConfig.md#recordsresultlimit)

### Methods

- [ConfigField](server.RoutesConfig.md#configfield)
- [SubConfig](server.RoutesConfig.md#subconfig)

## Constructors

### constructor

• **new RoutesConfig**(`configJson`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configJson` | `Object` |
| `configJson.recordsResultLimit?` | `any` |

#### Inherited from

[Config](index.Config.md).[constructor](index.Config.md#constructor)

#### Defined in

[src/utils/Config.ts:13](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/utils/Config.ts#L13)

## Properties

### recordsResultLimit

• `Readonly` **recordsResultLimit**: `number`

#### Defined in

[src/server/routes/RoutesConfig.ts:5](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/routes/RoutesConfig.ts#L5)

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

[src/utils/Config.ts:33](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/utils/Config.ts#L33)

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

[src/utils/Config.ts:44](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/utils/Config.ts#L44)
