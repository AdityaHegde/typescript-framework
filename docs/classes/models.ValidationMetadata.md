[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / [models](../modules/models.md) / ValidationMetadata

# Class: ValidationMetadata

[models](../modules/models.md).ValidationMetadata

## Table of contents

### Constructors

- [constructor](models.ValidationMetadata.md#constructor)

### Properties

- [fieldTypeMap](models.ValidationMetadata.md#fieldtypemap)
- [fieldTypes](models.ValidationMetadata.md#fieldtypes)

### Methods

- [addValidation](models.ValidationMetadata.md#addvalidation)

## Constructors

### constructor

• **new ValidationMetadata**(`copyFrom`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `copyFrom` | [`ValidationMetadata`](models.ValidationMetadata.md) |

#### Defined in

[src/models/validation-metadata/ValidationMetadata.ts:8](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/models/validation-metadata/ValidationMetadata.ts#L8)

## Properties

### fieldTypeMap

• **fieldTypeMap**: `Map`<`string`, [`ValidationFieldType`](../modules/models.md#validationfieldtype)\>

#### Defined in

[src/models/validation-metadata/ValidationMetadata.ts:6](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/models/validation-metadata/ValidationMetadata.ts#L6)

___

### fieldTypes

• **fieldTypes**: [`ValidationFieldType`](../modules/models.md#validationfieldtype)[]

#### Defined in

[src/models/validation-metadata/ValidationMetadata.ts:5](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/models/validation-metadata/ValidationMetadata.ts#L5)

## Methods

### addValidation

▸ **addValidation**(`validationFieldType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `validationFieldType` | [`ValidationFieldType`](../modules/models.md#validationfieldtype) |

#### Returns

`void`

#### Defined in

[src/models/validation-metadata/ValidationMetadata.ts:14](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/models/validation-metadata/ValidationMetadata.ts#L14)
