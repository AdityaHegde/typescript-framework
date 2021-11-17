[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / Config

# Class: Config<C\>

[index](../modules/index.md).Config

## Type parameters

| Name |
| :------ |
| `C` |

## Hierarchy

- **`Config`**

  ↳ [`ServerConfig`](server.ServerConfig.md)

  ↳ [`AuthenticationConfig`](server.AuthenticationConfig.md)

  ↳ [`RoutesConfig`](server.RoutesConfig.md)

## Table of contents

### Constructors

- [constructor](index.Config.md#constructor)

### Properties

- [configTypes](index.Config.md#configtypes)

### Methods

- [ConfigField](index.Config.md#configfield)
- [SubConfig](index.Config.md#subconfig)
- [createConfigTypes](index.Config.md#createconfigtypes)

## Constructors

### constructor

• **new Config**<`C`\>(`configJson`)

#### Type parameters

| Name |
| :------ |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `configJson` | { [K in string \| number \| symbol]?: any } |

#### Defined in

[src/utils/Config.ts:13](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/utils/Config.ts#L13)

## Properties

### configTypes

▪ `Static` `Private` **configTypes**: [`ConfigFieldType`](../modules/index.md#configfieldtype)[]

#### Defined in

[src/utils/Config.ts:11](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/utils/Config.ts#L11)

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

#### Defined in

[src/utils/Config.ts:33](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/utils/Config.ts#L33)

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

#### Defined in

[src/utils/Config.ts:44](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/utils/Config.ts#L44)

___

### createConfigTypes

▸ `Static` `Private` **createConfigTypes**(`target`): typeof [`Config`](index.Config.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

typeof [`Config`](index.Config.md)

#### Defined in

[src/utils/Config.ts:56](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/utils/Config.ts#L56)
