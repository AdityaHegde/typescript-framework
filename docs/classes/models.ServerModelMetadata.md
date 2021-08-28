[@adityhegde/typescript-framework](../README.md) / [Modules](../modules.md) / [models](../modules/models.md) / ServerModelMetadata

# Class: ServerModelMetadata

[models](../modules/models.md).ServerModelMetadata

## Table of contents

### Constructors

- [constructor](models.ServerModelMetadata.md#constructor)

### Properties

- [fieldTypes](models.ServerModelMetadata.md#fieldtypes)
- [fieldTypesMap](models.ServerModelMetadata.md#fieldtypesmap)
- [ownerOnly](models.ServerModelMetadata.md#owneronly)
- [readRole](models.ServerModelMetadata.md#readrole)
- [roleFieldType](models.ServerModelMetadata.md#rolefieldtype)
- [skipRoutes](models.ServerModelMetadata.md#skiproutes)
- [userField](models.ServerModelMetadata.md#userfield)
- [writeRole](models.ServerModelMetadata.md#writerole)

### Methods

- [addServerField](models.ServerModelMetadata.md#addserverfield)
- [addUserField](models.ServerModelMetadata.md#adduserfield)
- [setArgs](models.ServerModelMetadata.md#setargs)
- [setOwnerOnly](models.ServerModelMetadata.md#setowneronly)
- [setRoleFieldType](models.ServerModelMetadata.md#setrolefieldtype)
- [setRoles](models.ServerModelMetadata.md#setroles)
- [setSkipRoutes](models.ServerModelMetadata.md#setskiproutes)
- [Model](models.ServerModelMetadata.md#model)

## Constructors

### constructor

• **new ServerModelMetadata**(`copyFrom`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `copyFrom` | [`ServerModelMetadata`](models.ServerModelMetadata.md) |

#### Defined in

[src/models/server-metadata/ServerModelMetadata.ts:24](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/server-metadata/ServerModelMetadata.ts#L24)

## Properties

### fieldTypes

• **fieldTypes**: [`ServerFieldType`](../modules/models.md#serverfieldtype)[]

#### Defined in

[src/models/server-metadata/ServerModelMetadata.ts:20](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/server-metadata/ServerModelMetadata.ts#L20)

___

### fieldTypesMap

• **fieldTypesMap**: `Map`<`string`, [`ServerFieldType`](../modules/models.md#serverfieldtype)\>

#### Defined in

[src/models/server-metadata/ServerModelMetadata.ts:21](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/server-metadata/ServerModelMetadata.ts#L21)

___

### ownerOnly

• **ownerOnly**: `boolean`

#### Defined in

[src/models/server-metadata/ServerModelMetadata.ts:16](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/server-metadata/ServerModelMetadata.ts#L16)

___

### readRole

• **readRole**: `any`

#### Defined in

[src/models/server-metadata/ServerModelMetadata.ts:14](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/server-metadata/ServerModelMetadata.ts#L14)

___

### roleFieldType

• **roleFieldType**: [`RoleFieldType`](../modules/models.md#rolefieldtype)

#### Defined in

[src/models/server-metadata/ServerModelMetadata.ts:22](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/server-metadata/ServerModelMetadata.ts#L22)

___

### skipRoutes

• **skipRoutes**: `boolean`

#### Defined in

[src/models/server-metadata/ServerModelMetadata.ts:18](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/server-metadata/ServerModelMetadata.ts#L18)

___

### userField

• **userField**: `string`

#### Defined in

[src/models/server-metadata/ServerModelMetadata.ts:17](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/server-metadata/ServerModelMetadata.ts#L17)

___

### writeRole

• **writeRole**: `any`

#### Defined in

[src/models/server-metadata/ServerModelMetadata.ts:15](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/server-metadata/ServerModelMetadata.ts#L15)

## Methods

### addServerField

▸ **addServerField**(`serverField`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serverField` | [`ServerFieldType`](../modules/models.md#serverfieldtype) |

#### Returns

`void`

#### Defined in

[src/models/server-metadata/ServerModelMetadata.ts:58](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/server-metadata/ServerModelMetadata.ts#L58)

___

### addUserField

▸ **addUserField**(`field`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `string` |

#### Returns

`void`

#### Defined in

[src/models/server-metadata/ServerModelMetadata.ts:54](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/server-metadata/ServerModelMetadata.ts#L54)

___

### setArgs

▸ **setArgs**(`__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `ServerModelArgs` |

#### Returns

`void`

#### Defined in

[src/models/server-metadata/ServerModelMetadata.ts:34](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/server-metadata/ServerModelMetadata.ts#L34)

___

### setOwnerOnly

▸ **setOwnerOnly**(`ownerOnly`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ownerOnly` | `boolean` |

#### Returns

`void`

#### Defined in

[src/models/server-metadata/ServerModelMetadata.ts:46](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/server-metadata/ServerModelMetadata.ts#L46)

___

### setRoleFieldType

▸ **setRoleFieldType**(`roleFieldType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `roleFieldType` | [`RoleFieldType`](../modules/models.md#rolefieldtype) |

#### Returns

`void`

#### Defined in

[src/models/server-metadata/ServerModelMetadata.ts:62](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/server-metadata/ServerModelMetadata.ts#L62)

___

### setRoles

▸ **setRoles**(`readRole`, `writeRole`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `readRole` | `any` |
| `writeRole` | `any` |

#### Returns

`void`

#### Defined in

[src/models/server-metadata/ServerModelMetadata.ts:41](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/server-metadata/ServerModelMetadata.ts#L41)

___

### setSkipRoutes

▸ **setSkipRoutes**(`skipRoutes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `skipRoutes` | `boolean` |

#### Returns

`void`

#### Defined in

[src/models/server-metadata/ServerModelMetadata.ts:50](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/server-metadata/ServerModelMetadata.ts#L50)

___

### Model

▸ `Static` **Model**(`args?`): (`constructor`: typeof [`BaseType`](models.BaseType.md)) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `ServerModelArgs` |

#### Returns

`fn`

▸ (`constructor`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | typeof [`BaseType`](models.BaseType.md) |

##### Returns

`void`

#### Defined in

[src/models/server-metadata/ServerModelMetadata.ts:77](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/server-metadata/ServerModelMetadata.ts#L77)
