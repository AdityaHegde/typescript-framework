[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / [models](../modules/models.md) / UserModel

# Class: UserModel

[models](../modules/models.md).UserModel

## Hierarchy

- [`BaseType`](models.BaseType.md)

  ↳ **`UserModel`**

## Table of contents

### Constructors

- [constructor](models.UserModel.md#constructor)

### Properties

- [email](models.UserModel.md#email)
- [id](models.UserModel.md#id)
- [pwd](models.UserModel.md#pwd)
- [type](models.UserModel.md#type)
- [user](models.UserModel.md#user)
- [metadata](models.UserModel.md#metadata)
- [serverMetadata](models.UserModel.md#servermetadata)
- [validationMetadata](models.UserModel.md#validationmetadata)

### Methods

- [getUserRoleChecker](models.UserModel.md#getuserrolechecker)

## Constructors

### constructor

• **new UserModel**(`id`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Inherited from

[BaseType](models.BaseType.md).[constructor](models.BaseType.md#constructor)

#### Defined in

[src/models/BaseType.ts:14](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/BaseType.ts#L14)

## Properties

### email

• **email**: `string`

#### Defined in

[src/models/UserModel.ts:18](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/UserModel.ts#L18)

___

### id

• **id**: `string`

#### Inherited from

[BaseType](models.BaseType.md).[id](models.BaseType.md#id)

#### Defined in

[src/models/BaseType.ts:6](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/BaseType.ts#L6)

___

### pwd

• **pwd**: `string`

#### Defined in

[src/models/UserModel.ts:23](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/UserModel.ts#L23)

___

### type

• **type**: `string`

#### Inherited from

[BaseType](models.BaseType.md).[type](models.BaseType.md#type)

#### Defined in

[src/models/BaseType.ts:8](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/BaseType.ts#L8)

___

### user

• **user**: `string`

#### Defined in

[src/models/UserModel.ts:13](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/UserModel.ts#L13)

___

### metadata

▪ `Static` **metadata**: [`ModelMetadata`](models.ModelMetadata.md)

#### Inherited from

[BaseType](models.BaseType.md).[metadata](models.BaseType.md#metadata)

#### Defined in

[src/models/BaseType.ts:10](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/BaseType.ts#L10)

___

### serverMetadata

▪ `Static` **serverMetadata**: [`ServerModelMetadata`](models.ServerModelMetadata.md)

#### Inherited from

[BaseType](models.BaseType.md).[serverMetadata](models.BaseType.md#servermetadata)

#### Defined in

[src/models/BaseType.ts:11](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/BaseType.ts#L11)

___

### validationMetadata

▪ `Static` **validationMetadata**: [`ValidationMetadata`](models.ValidationMetadata.md)

#### Inherited from

[BaseType](models.BaseType.md).[validationMetadata](models.BaseType.md#validationmetadata)

#### Defined in

[src/models/BaseType.ts:12](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/BaseType.ts#L12)

## Methods

### getUserRoleChecker

▸ `Static` **getUserRoleChecker**(`role`): (`user`: [`UserModel`](models.UserModel.md)) => `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `role` | `any` |

#### Returns

`fn`

▸ (`user`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`UserModel`](models.UserModel.md) |

##### Returns

`boolean`

#### Defined in

[src/models/UserModel.ts:25](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/UserModel.ts#L25)
