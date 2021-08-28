[@adityhegde/typescript-framework](../README.md) / [Modules](../modules.md) / [models](../modules/models.md) / ModelMetadata

# Class: ModelMetadata

[models](../modules/models.md).ModelMetadata

Metadata class that holds all generic info about the model

## Table of contents

### Constructors

- [constructor](models.ModelMetadata.md#constructor)

### Properties

- [apiBase](models.ModelMetadata.md#apibase)
- [apiPath](models.ModelMetadata.md#apipath)
- [displayFields](models.ModelMetadata.md#displayfields)
- [fieldTypeMap](models.ModelMetadata.md#fieldtypemap)
- [fieldTypes](models.ModelMetadata.md#fieldtypes)
- [filters](models.ModelMetadata.md#filters)
- [modelName](models.ModelMetadata.md#modelname)
- [parentKeys](models.ModelMetadata.md#parentkeys)
- [plural](models.ModelMetadata.md#plural)
- [polymorphic](models.ModelMetadata.md#polymorphic)
- [readonly](models.ModelMetadata.md#readonly)
- [relations](models.ModelMetadata.md#relations)
- [restricted](models.ModelMetadata.md#restricted)
- [singular](models.ModelMetadata.md#singular)

### Methods

- [addDisplayField](models.ModelMetadata.md#adddisplayfield)
- [addFieldType](models.ModelMetadata.md#addfieldtype)
- [addFilterField](models.ModelMetadata.md#addfilterfield)
- [addReadonlyField](models.ModelMetadata.md#addreadonlyfield)
- [addRelationType](models.ModelMetadata.md#addrelationtype)
- [addRestrictedField](models.ModelMetadata.md#addrestrictedfield)
- [isDisplayed](models.ModelMetadata.md#isdisplayed)
- [isEditable](models.ModelMetadata.md#iseditable)
- [setArgs](models.ModelMetadata.md#setargs)
- [Model](models.ModelMetadata.md#model)

## Constructors

### constructor

• **new ModelMetadata**(`copyFrom`)

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `copyFrom` | [`ModelMetadata`](models.ModelMetadata.md) |

#### Defined in

[src/models/metadata/ModelMetadata.ts:54](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/metadata/ModelMetadata.ts#L54)

## Properties

### apiBase

• **apiBase**: `string`

#### Defined in

[src/models/metadata/ModelMetadata.ts:38](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/metadata/ModelMetadata.ts#L38)

___

### apiPath

• **apiPath**: `string`

#### Defined in

[src/models/metadata/ModelMetadata.ts:39](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/metadata/ModelMetadata.ts#L39)

___

### displayFields

• **displayFields**: `string`[]

#### Defined in

[src/models/metadata/ModelMetadata.ts:44](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/metadata/ModelMetadata.ts#L44)

___

### fieldTypeMap

• **fieldTypeMap**: `Map`<`string`, [`ModelFieldType`](../modules/models.md#modelfieldtype)\>

#### Defined in

[src/models/metadata/ModelMetadata.ts:43](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/metadata/ModelMetadata.ts#L43)

___

### fieldTypes

• **fieldTypes**: [`ModelFieldType`](../modules/models.md#modelfieldtype)[]

#### Defined in

[src/models/metadata/ModelMetadata.ts:42](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/metadata/ModelMetadata.ts#L42)

___

### filters

• **filters**: [`FilterType`](../modules/models.md#filtertype)[]

#### Defined in

[src/models/metadata/ModelMetadata.ts:46](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/metadata/ModelMetadata.ts#L46)

___

### modelName

• **modelName**: `string`

#### Defined in

[src/models/metadata/ModelMetadata.ts:35](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/metadata/ModelMetadata.ts#L35)

___

### parentKeys

• **parentKeys**: [`ParentKeyType`](../modules/models.md#parentkeytype)[]

#### Defined in

[src/models/metadata/ModelMetadata.ts:49](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/metadata/ModelMetadata.ts#L49)

___

### plural

• **plural**: `string`

#### Defined in

[src/models/metadata/ModelMetadata.ts:37](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/metadata/ModelMetadata.ts#L37)

___

### polymorphic

• **polymorphic**: `string`

#### Defined in

[src/models/metadata/ModelMetadata.ts:40](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/metadata/ModelMetadata.ts#L40)

___

### readonly

• **readonly**: `string`[]

#### Defined in

[src/models/metadata/ModelMetadata.ts:47](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/metadata/ModelMetadata.ts#L47)

___

### relations

• **relations**: [`RelationType`](../modules/models.md#relationtype)[]

#### Defined in

[src/models/metadata/ModelMetadata.ts:45](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/metadata/ModelMetadata.ts#L45)

___

### restricted

• **restricted**: `string`[]

#### Defined in

[src/models/metadata/ModelMetadata.ts:48](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/metadata/ModelMetadata.ts#L48)

___

### singular

• **singular**: `string`

#### Defined in

[src/models/metadata/ModelMetadata.ts:36](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/metadata/ModelMetadata.ts#L36)

## Methods

### addDisplayField

▸ **addDisplayField**(`fieldName`): `void`

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |

#### Returns

`void`

#### Defined in

[src/models/metadata/ModelMetadata.ts:95](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/metadata/ModelMetadata.ts#L95)

___

### addFieldType

▸ **addFieldType**(`fieldType`): `void`

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldType` | [`FieldType`](../modules/models.md#fieldtype) |

#### Returns

`void`

#### Defined in

[src/models/metadata/ModelMetadata.ts:84](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/metadata/ModelMetadata.ts#L84)

___

### addFilterField

▸ **addFilterField**(`filterType`): `void`

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `filterType` | [`FilterType`](../modules/models.md#filtertype) |

#### Returns

`void`

#### Defined in

[src/models/metadata/ModelMetadata.ts:119](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/metadata/ModelMetadata.ts#L119)

___

### addReadonlyField

▸ **addReadonlyField**(`fieldName`): `void`

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |

#### Returns

`void`

#### Defined in

[src/models/metadata/ModelMetadata.ts:132](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/metadata/ModelMetadata.ts#L132)

___

### addRelationType

▸ **addRelationType**(`relationType`): `void`

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `relationType` | [`RelationType`](../modules/models.md#relationtype) |

#### Returns

`void`

#### Defined in

[src/models/metadata/ModelMetadata.ts:107](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/metadata/ModelMetadata.ts#L107)

___

### addRestrictedField

▸ **addRestrictedField**(`fieldName`): `void`

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |

#### Returns

`void`

#### Defined in

[src/models/metadata/ModelMetadata.ts:144](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/metadata/ModelMetadata.ts#L144)

___

### isDisplayed

▸ **isDisplayed**(`field`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | [`ModelFieldType`](../modules/models.md#modelfieldtype) |

#### Returns

`boolean`

#### Defined in

[src/models/metadata/ModelMetadata.ts:161](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/metadata/ModelMetadata.ts#L161)

___

### isEditable

▸ **isEditable**(`field`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | [`ModelFieldType`](../modules/models.md#modelfieldtype) |

#### Returns

`boolean`

#### Defined in

[src/models/metadata/ModelMetadata.ts:155](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/metadata/ModelMetadata.ts#L155)

___

### setArgs

▸ **setArgs**(`__namedParameters`): `void`

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`ModelArgsType`](../modules/models.md#modelargstype) |

#### Returns

`void`

#### Defined in

[src/models/metadata/ModelMetadata.ts:69](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/metadata/ModelMetadata.ts#L69)

___

### Model

▸ `Static` **Model**(`modelArgs?`): (`constructor`: typeof [`BaseType`](models.BaseType.md)) => `void`

Add this to the top of every class to initialize metadata.

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelArgs` | [`ModelArgsType`](../modules/models.md#modelargstype) |

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

[src/models/metadata/ModelMetadata.ts:168](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/models/metadata/ModelMetadata.ts#L168)
