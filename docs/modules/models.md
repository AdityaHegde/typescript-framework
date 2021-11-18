[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / models

# Module: models

## Table of contents

### Classes

- [BaseType](../classes/models.BaseType.md)
- [ModelMetadata](../classes/models.ModelMetadata.md)
- [ServerModelMetadata](../classes/models.ServerModelMetadata.md)
- [UserInvite](../classes/models.UserInvite.md)
- [UserModel](../classes/models.UserModel.md)
- [ValidationMetadata](../classes/models.ValidationMetadata.md)

### Type aliases

- [ArrayFieldType](models.md#arrayfieldtype)
- [DateFieldType](models.md#datefieldtype)
- [FieldInputType](models.md#fieldinputtype)
- [FieldType](models.md#fieldtype)
- [FilterType](models.md#filtertype)
- [ModelArgsType](models.md#modelargstype)
- [ModelFieldType](models.md#modelfieldtype)
- [ModelSelectFieldType](models.md#modelselectfieldtype)
- [ParentKeyType](models.md#parentkeytype)
- [RelationType](models.md#relationtype)
- [RoleFieldType](models.md#rolefieldtype)
- [SelectFieldType](models.md#selectfieldtype)
- [ServerFieldType](models.md#serverfieldtype)
- [SimpleFieldType](models.md#simplefieldtype)
- [ValidationFieldType](models.md#validationfieldtype)

### Variables

- [MasterModelList](models.md#mastermodellist)
- [ModelList](models.md#modellist)
- [ModelNameMap](models.md#modelnamemap)
- [PolymorphicModelLookup](models.md#polymorphicmodellookup)

### Functions

- [AdminRole](models.md#adminrole)
- [ArrayField](models.md#arrayfield)
- [CreateAtDate](models.md#createatdate)
- [DefaultRole](models.md#defaultrole)
- [DisplayField](models.md#displayfield)
- [EmailValidation](models.md#emailvalidation)
- [Field](models.md#field)
- [Filter](models.md#filter)
- [HasMany](models.md#hasmany)
- [HasOne](models.md#hasone)
- [IndexField](models.md#indexfield)
- [InviteeRole](models.md#inviteerole)
- [LocalFilter](models.md#localfilter)
- [ModelMultiSelectField](models.md#modelmultiselectfield)
- [ModelSelectField](models.md#modelselectfield)
- [MultiSelectField](models.md#multiselectfield)
- [NumberField](models.md#numberfield)
- [ParentKey](models.md#parentkey)
- [RangeValidation](models.md#rangevalidation)
- [Readonly](models.md#readonly)
- [RegexValidation](models.md#regexvalidation)
- [Relation](models.md#relation)
- [RemoteFilter](models.md#remotefilter)
- [Required](models.md#required)
- [Restricted](models.md#restricted)
- [RoleField](models.md#rolefield)
- [SelectField](models.md#selectfield)
- [ServerField](models.md#serverfield)
- [SwitchField](models.md#switchfield)
- [TextField](models.md#textfield)
- [UniqueField](models.md#uniquefield)
- [UniqueFieldGroup](models.md#uniquefieldgroup)
- [UpdatedAtDate](models.md#updatedatdate)
- [UserField](models.md#userfield)
- [Validation](models.md#validation)
- [addModelsToList](models.md#addmodelstolist)
- [createMetadata](models.md#createmetadata)
- [createServerMetadata](models.md#createservermetadata)
- [createValidationMetadata](models.md#createvalidationmetadata)

## Type aliases

### ArrayFieldType

Ƭ **ArrayFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `field?` | `string` |
| `label?` | `string` |
| `subType` | ``"text"`` \| ``"number"`` |
| `type` | ``"array"`` |

#### Defined in

[src/models/metadata/Fields.ts:32](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/Fields.ts#L32)

___

### DateFieldType

Ƭ **DateFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createdAt?` | `boolean` |
| `field?` | `string` |
| `label?` | `string` |
| `type` | ``"date"`` |
| `updatedAt?` | `boolean` |

#### Defined in

[src/models/metadata/Fields.ts:51](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/Fields.ts#L51)

___

### FieldInputType

Ƭ **FieldInputType**: ``"text"`` \| ``"number"`` \| ``"switch"`` \| ``"select"`` \| ``"array"`` \| ``"modelSelect"`` \| ``"date"``

#### Defined in

[src/models/metadata/Fields.ts:6](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/Fields.ts#L6)

___

### FieldType

Ƭ **FieldType**: [`SimpleFieldType`](models.md#simplefieldtype) \| [`SelectFieldType`](models.md#selectfieldtype) \| [`ArrayFieldType`](models.md#arrayfieldtype) \| [`ModelSelectFieldType`](models.md#modelselectfieldtype) \| [`DateFieldType`](models.md#datefieldtype)

#### Defined in

[src/models/metadata/Fields.ts:61](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/Fields.ts#L61)

___

### FilterType

Ƭ **FilterType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `field?` | `string` |
| `local?` | `boolean` |

#### Defined in

[src/models/metadata/Filters.ts:3](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/Filters.ts#L3)

___

### ModelArgsType

Ƭ **ModelArgsType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `apiBase?` | `string` |
| `plural?` | `string` |
| `polymorphic?` | `string` |
| `singular?` | `string` |

#### Defined in

[src/models/metadata/ModelMetadata.ts:12](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/ModelMetadata.ts#L12)

___

### ModelFieldType

Ƭ **ModelFieldType**: [`FieldType`](models.md#fieldtype) & { `displayField?`: `boolean` ; `filter?`: `boolean` ; `localFilter?`: `boolean` ; `modelField?`: `string` ; `readonly?`: `boolean` ; `restricted?`: `boolean`  }

#### Defined in

[src/models/metadata/ModelMetadata.ts:22](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/ModelMetadata.ts#L22)

___

### ModelSelectFieldType

Ƭ **ModelSelectFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `field?` | `string` |
| `label?` | `string` |
| `multi?` | `boolean` |
| `ref` | `string` |
| `type` | ``"modelSelect"`` |

#### Defined in

[src/models/metadata/Fields.ts:41](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/Fields.ts#L41)

___

### ParentKeyType

Ƭ **ParentKeyType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `field?` | `string` |
| `ref` | `string` |

#### Defined in

[src/models/metadata/ParentKey.ts:3](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/ParentKey.ts#L3)

___

### RelationType

Ƭ **RelationType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `field?` | `string` |
| `fk` | `string` |
| `multi?` | `boolean` |
| `reverseField` | `string` |

#### Defined in

[src/models/metadata/Relation.ts:4](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/Relation.ts#L4)

___

### RoleFieldType

Ƭ **RoleFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `admin?` | `any` |
| `default?` | `any` |
| `field?` | `string` |
| `invitee?` | `any` |
| `isSet?` | `boolean` |

#### Defined in

[src/models/server-metadata/RoleField.ts:4](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/server-metadata/RoleField.ts#L4)

___

### SelectFieldType

Ƭ **SelectFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `field?` | `string` |
| `label?` | `string` |
| `multi?` | `boolean` |
| `opts` | `any` |
| `subType?` | ``"text"`` \| ``"number"`` |
| `type` | ``"select"`` |

#### Defined in

[src/models/metadata/Fields.ts:21](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/Fields.ts#L21)

___

### ServerFieldType

Ƭ **ServerFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `field?` | `string` |
| `index?` | `boolean` |
| `unique?` | `boolean` |
| `uniqueGroup?` | `string` |

#### Defined in

[src/models/server-metadata/ServerField.ts:4](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/server-metadata/ServerField.ts#L4)

___

### SimpleFieldType

Ƭ **SimpleFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `field?` | `string` |
| `label?` | `string` |
| `type` | ``"text"`` \| ``"number"`` \| ``"switch"`` |

#### Defined in

[src/models/metadata/Fields.ts:13](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/Fields.ts#L13)

___

### ValidationFieldType

Ƭ **ValidationFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `email?` | `boolean` |
| `field?` | `string` |
| `maxValue?` | `number` |
| `message?` | `string` |
| `minValue?` | `number` |
| `regex?` | `RegExp` \| `string` |
| `required?` | `boolean` |

#### Defined in

[src/models/validation-metadata/Validation.ts:4](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/validation-metadata/Validation.ts#L4)

## Variables

### MasterModelList

• **MasterModelList**: typeof [`BaseType`](../classes/models.BaseType.md)[] = `[]`

List of top level models

#### Defined in

[src/models/ModelList.ts:10](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/ModelList.ts#L10)

___

### ModelList

• **ModelList**: typeof [`BaseType`](../classes/models.BaseType.md)[] = `[]`

Full list of models

#### Defined in

[src/models/ModelList.ts:6](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/ModelList.ts#L6)

___

### ModelNameMap

• **ModelNameMap**: `Map`<`string`, typeof [`BaseType`](../classes/models.BaseType.md)\>

#### Defined in

[src/models/ModelList.ts:11](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/ModelList.ts#L11)

___

### PolymorphicModelLookup

• **PolymorphicModelLookup**: `Map`<`string`, typeof [`BaseType`](../classes/models.BaseType.md)[]\>

#### Defined in

[src/models/ModelList.ts:12](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/ModelList.ts#L12)

## Functions

### AdminRole

▸ **AdminRole**(`__namedParameters`): <T, K\>(`target`: `T`, `propertyKey`: `K`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.field?` | `string` |
| `__namedParameters.role` | `any` |

#### Returns

`fn`

▸ <`T`, `K`\>(`target`, `propertyKey`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](../classes/models.BaseType.md)<`T`\> & `Record`<`K`, `unknown`\> |
| `K` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `propertyKey` | `K` |

##### Returns

`void`

#### Defined in

[src/models/server-metadata/RoleField.ts:29](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/server-metadata/RoleField.ts#L29)

___

### ArrayField

▸ **ArrayField**(`fieldOptions`): <T, K\>(`target`: `T`, `propertyKey`: `K`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldOptions` | `Object` |
| `fieldOptions.field?` | `string` |
| `fieldOptions.label?` | `string` |
| `fieldOptions.subType` | ``"number"`` \| ``"text"`` |

#### Returns

`fn`

▸ <`T`, `K`\>(`target`, `propertyKey`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](../classes/models.BaseType.md)<`T`\> & `Record`<`K`, (`string` \| `number`)[]\> |
| `K` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `propertyKey` | `K` |

##### Returns

`void`

#### Defined in

[src/models/metadata/Fields.ts:128](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/Fields.ts#L128)

___

### CreateAtDate

▸ **CreateAtDate**(`fieldOptions`): <T, K\>(`target`: `T`, `propertyKey`: `K`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldOptions` | `Object` |
| `fieldOptions.field?` | `string` |
| `fieldOptions.label?` | `string` |

#### Returns

`fn`

▸ <`T`, `K`\>(`target`, `propertyKey`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](../classes/models.BaseType.md)<`T`\> & `Record`<`K`, `Date`\> |
| `K` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `propertyKey` | `K` |

##### Returns

`void`

#### Defined in

[src/models/metadata/Fields.ts:156](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/Fields.ts#L156)

___

### DefaultRole

▸ **DefaultRole**(`__namedParameters`): <T, K\>(`target`: `T`, `propertyKey`: `K`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.field?` | `string` |
| `__namedParameters.role` | `any` |

#### Returns

`fn`

▸ <`T`, `K`\>(`target`, `propertyKey`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](../classes/models.BaseType.md)<`T`\> & `Record`<`K`, `unknown`\> |
| `K` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `propertyKey` | `K` |

##### Returns

`void`

#### Defined in

[src/models/server-metadata/RoleField.ts:22](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/server-metadata/RoleField.ts#L22)

___

### DisplayField

▸ **DisplayField**(): (`target`: `any`, `propertyKey`: `string`) => `void`

#### Returns

`fn`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

[src/models/metadata/DisplayField.ts:3](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/DisplayField.ts#L3)

___

### EmailValidation

▸ **EmailValidation**(`options?`): <T, K\>(`target`: `T`, `propertyKey`: `K`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.field?` | `string` |
| `options.message?` | `string` |

#### Returns

`fn`

▸ <`T`, `K`\>(`target`, `propertyKey`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](../classes/models.BaseType.md)<`T`\> & `Record`<`K`, `string`\> |
| `K` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `propertyKey` | `K` |

##### Returns

`void`

#### Defined in

[src/models/validation-metadata/Validation.ts:43](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/validation-metadata/Validation.ts#L43)

___

### Field

▸ **Field**<`Type`\>(`fieldOptions`): <T, K\>(`target`: `T`, `propertyKey`: `K`) => `void`

Define a metadata on a field

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldOptions` | [`FieldType`](models.md#fieldtype) |

#### Returns

`fn`

▸ <`T`, `K`\>(`target`, `propertyKey`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](../classes/models.BaseType.md)<`T`\> & `Record`<`K`, `Type`\> |
| `K` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `propertyKey` | `K` |

##### Returns

`void`

#### Defined in

[src/models/metadata/Fields.ts:68](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/Fields.ts#L68)

___

### Filter

▸ **Filter**(`filterOptions?`): (`target`: `any`, `propertyKey`: `string`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filterOptions` | [`FilterType`](models.md#filtertype) |

#### Returns

`fn`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

[src/models/metadata/Filters.ts:8](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/Filters.ts#L8)

___

### HasMany

▸ **HasMany**<`M`\>(`relationType`): <T, K\>(`target`: `T`, `propertyKey`: `K`) => `void`

#### Type parameters

| Name |
| :------ |
| `M` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `relationType` | `Object` |
| `relationType.field?` | `string` |
| `relationType.fk` | `string` |
| `relationType.reverseField` | `string` |

#### Returns

`fn`

▸ <`T`, `K`\>(`target`, `propertyKey`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](../classes/models.BaseType.md)<`T`\> & `Record`<`K`, `M`[]\> |
| `K` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `propertyKey` | `K` |

##### Returns

`void`

#### Defined in

[src/models/metadata/Relation.ts:25](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/Relation.ts#L25)

___

### HasOne

▸ **HasOne**<`M`\>(`relationType`): <T, K\>(`target`: `T`, `propertyKey`: `K`) => `void`

#### Type parameters

| Name |
| :------ |
| `M` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `relationType` | `Object` |
| `relationType.field?` | `string` |
| `relationType.fk` | `string` |
| `relationType.reverseField` | `string` |

#### Returns

`fn`

▸ <`T`, `K`\>(`target`, `propertyKey`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](../classes/models.BaseType.md)<`T`\> & `Record`<`K`, `M`\> |
| `K` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `propertyKey` | `K` |

##### Returns

`void`

#### Defined in

[src/models/metadata/Relation.ts:21](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/Relation.ts#L21)

___

### IndexField

▸ **IndexField**<`Type`\>(`opts?`): <T, K\>(`target`: `T`, `propertyKey`: `K`) => `void`

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.field?` | `string` |

#### Returns

`fn`

▸ <`T`, `K`\>(`target`, `propertyKey`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](../classes/models.BaseType.md)<`T`\> & `Record`<`K`, `Type`\> |
| `K` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `propertyKey` | `K` |

##### Returns

`void`

#### Defined in

[src/models/server-metadata/ServerField.ts:35](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/server-metadata/ServerField.ts#L35)

___

### InviteeRole

▸ **InviteeRole**(`__namedParameters`): <T, K\>(`target`: `T`, `propertyKey`: `K`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.field?` | `string` |
| `__namedParameters.role` | `any` |

#### Returns

`fn`

▸ <`T`, `K`\>(`target`, `propertyKey`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](../classes/models.BaseType.md)<`T`\> & `Record`<`K`, `unknown`\> |
| `K` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `propertyKey` | `K` |

##### Returns

`void`

#### Defined in

[src/models/server-metadata/RoleField.ts:36](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/server-metadata/RoleField.ts#L36)

___

### LocalFilter

▸ **LocalFilter**(`opts?`): (`target`: `any`, `propertyKey`: `string`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.field?` | `string` |

#### Returns

`fn`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

[src/models/metadata/Filters.ts:19](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/Filters.ts#L19)

___

### ModelMultiSelectField

▸ **ModelMultiSelectField**(`fieldOptions`): <T, K\>(`target`: `T`, `propertyKey`: `K`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldOptions` | `Object` |
| `fieldOptions.field?` | `string` |
| `fieldOptions.label?` | `string` |
| `fieldOptions.ref` | `string` |

#### Returns

`fn`

▸ <`T`, `K`\>(`target`, `propertyKey`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](../classes/models.BaseType.md)<`T`\> & `Record`<`K`, `string`[]\> |
| `K` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `propertyKey` | `K` |

##### Returns

`void`

#### Defined in

[src/models/metadata/Fields.ts:146](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/Fields.ts#L146)

___

### ModelSelectField

▸ **ModelSelectField**(`fieldOptions`): <T, K\>(`target`: `T`, `propertyKey`: `K`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldOptions` | `Object` |
| `fieldOptions.field?` | `string` |
| `fieldOptions.label?` | `string` |
| `fieldOptions.ref` | `string` |

#### Returns

`fn`

▸ <`T`, `K`\>(`target`, `propertyKey`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](../classes/models.BaseType.md)<`T`\> & `Record`<`K`, `string`\> |
| `K` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `propertyKey` | `K` |

##### Returns

`void`

#### Defined in

[src/models/metadata/Fields.ts:137](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/Fields.ts#L137)

___

### MultiSelectField

▸ **MultiSelectField**<`S`\>(`fieldOptions`): <T, K\>(`target`: `T`, `propertyKey`: `K`) => `void`

#### Type parameters

| Name |
| :------ |
| `S` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldOptions` | `Object` |
| `fieldOptions.field?` | `string` |
| `fieldOptions.label?` | `string` |
| `fieldOptions.opts` | `any` |
| `fieldOptions.subType?` | ``"number"`` \| ``"text"`` |

#### Returns

`fn`

▸ <`T`, `K`\>(`target`, `propertyKey`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](../classes/models.BaseType.md)<`T`\> & `Record`<`K`, `S`[]\> |
| `K` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `propertyKey` | `K` |

##### Returns

`void`

#### Defined in

[src/models/metadata/Fields.ts:118](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/Fields.ts#L118)

___

### NumberField

▸ **NumberField**(`fieldOptions?`): <T, K\>(`target`: `T`, `propertyKey`: `K`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldOptions` | `Object` |
| `fieldOptions.field?` | `string` |
| `fieldOptions.label?` | `string` |

#### Returns

`fn`

▸ <`T`, `K`\>(`target`, `propertyKey`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](../classes/models.BaseType.md)<`T`\> & `Record`<`K`, `number`\> |
| `K` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `propertyKey` | `K` |

##### Returns

`void`

#### Defined in

[src/models/metadata/Fields.ts:91](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/Fields.ts#L91)

___

### ParentKey

▸ **ParentKey**(`parentKeyOptions`): (`target`: `any`, `propertyKey`: `string`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentKeyOptions` | [`ParentKeyType`](models.md#parentkeytype) |

#### Returns

`fn`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

[src/models/metadata/ParentKey.ts:8](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/ParentKey.ts#L8)

___

### RangeValidation

▸ **RangeValidation**(`options`): <T, K\>(`target`: `T`, `propertyKey`: `K`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.field?` | `string` |
| `options.maxValue` | `number` |
| `options.message?` | `string` |
| `options.minValue` | `number` |

#### Returns

`fn`

▸ <`T`, `K`\>(`target`, `propertyKey`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](../classes/models.BaseType.md)<`T`\> & `Record`<`K`, `number`\> |
| `K` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `propertyKey` | `K` |

##### Returns

`void`

#### Defined in

[src/models/validation-metadata/Validation.ts:37](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/validation-metadata/Validation.ts#L37)

___

### Readonly

▸ **Readonly**(): (`target`: `any`, `propertyKey`: `string`) => `void`

#### Returns

`fn`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

[src/models/metadata/Readonly.ts:3](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/Readonly.ts#L3)

___

### RegexValidation

▸ **RegexValidation**(`options`): <T, K\>(`target`: `T`, `propertyKey`: `K`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.field?` | `string` |
| `options.message?` | `string` |
| `options.regex` | `string` \| `RegExp` |

#### Returns

`fn`

▸ <`T`, `K`\>(`target`, `propertyKey`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](../classes/models.BaseType.md)<`T`\> & `Record`<`K`, `string`\> |
| `K` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `propertyKey` | `K` |

##### Returns

`void`

#### Defined in

[src/models/validation-metadata/Validation.ts:31](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/validation-metadata/Validation.ts#L31)

___

### Relation

▸ **Relation**<`Type`\>(`relationType`): <T, K\>(`target`: `T`, `propertyKey`: `K`) => `void`

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `relationType` | [`RelationType`](models.md#relationtype) |

#### Returns

`fn`

▸ <`T`, `K`\>(`target`, `propertyKey`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](../classes/models.BaseType.md)<`T`\> & `Record`<`K`, `Type`\> |
| `K` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `propertyKey` | `K` |

##### Returns

`void`

#### Defined in

[src/models/metadata/Relation.ts:11](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/Relation.ts#L11)

___

### RemoteFilter

▸ **RemoteFilter**(`opts?`): (`target`: `any`, `propertyKey`: `string`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.field?` | `string` |

#### Returns

`fn`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

[src/models/metadata/Filters.ts:26](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/Filters.ts#L26)

___

### Required

▸ **Required**<`Type`\>(`options?`): <T, K\>(`target`: `T`, `propertyKey`: `K`) => `void`

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.field?` | `string` |
| `options.message?` | `string` |

#### Returns

`fn`

▸ <`T`, `K`\>(`target`, `propertyKey`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](../classes/models.BaseType.md)<`T`\> & `Record`<`K`, `Type`\> |
| `K` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `propertyKey` | `K` |

##### Returns

`void`

#### Defined in

[src/models/validation-metadata/Validation.ts:24](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/validation-metadata/Validation.ts#L24)

___

### Restricted

▸ **Restricted**(): (`target`: `any`, `propertyKey`: `string`) => `void`

#### Returns

`fn`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

[src/models/metadata/Restricted.ts:3](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/Restricted.ts#L3)

___

### RoleField

▸ **RoleField**<`Type`\>(`roleFieldType`): <T, K\>(`target`: `T`, `propertyKey`: `K`) => `void`

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `roleFieldType` | [`RoleFieldType`](models.md#rolefieldtype) |

#### Returns

`fn`

▸ <`T`, `K`\>(`target`, `propertyKey`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](../classes/models.BaseType.md)<`T`\> & `Record`<`K`, `Type`\> |
| `K` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `propertyKey` | `K` |

##### Returns

`void`

#### Defined in

[src/models/server-metadata/RoleField.ts:12](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/server-metadata/RoleField.ts#L12)

___

### SelectField

▸ **SelectField**<`S`\>(`fieldOptions`): <T, K\>(`target`: `T`, `propertyKey`: `K`) => `void`

#### Type parameters

| Name |
| :------ |
| `S` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldOptions` | `Object` |
| `fieldOptions.field?` | `string` |
| `fieldOptions.label?` | `string` |
| `fieldOptions.opts` | `any` |
| `fieldOptions.subType?` | ``"number"`` \| ``"text"`` |

#### Returns

`fn`

▸ <`T`, `K`\>(`target`, `propertyKey`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](../classes/models.BaseType.md)<`T`\> & `Record`<`K`, `S`\> |
| `K` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `propertyKey` | `K` |

##### Returns

`void`

#### Defined in

[src/models/metadata/Fields.ts:109](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/Fields.ts#L109)

___

### ServerField

▸ **ServerField**<`Type`\>(`fieldType`): <T, K\>(`target`: `T`, `propertyKey`: `K`) => `void`

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldType` | [`ServerFieldType`](models.md#serverfieldtype) |

#### Returns

`fn`

▸ <`T`, `K`\>(`target`, `propertyKey`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](../classes/models.BaseType.md)<`T`\> & `Record`<`K`, `Type`\> |
| `K` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `propertyKey` | `K` |

##### Returns

`void`

#### Defined in

[src/models/server-metadata/ServerField.ts:11](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/server-metadata/ServerField.ts#L11)

___

### SwitchField

▸ **SwitchField**(`fieldOptions?`): <T, K\>(`target`: `T`, `propertyKey`: `K`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldOptions` | `Object` |
| `fieldOptions.field?` | `string` |
| `fieldOptions.label?` | `string` |

#### Returns

`fn`

▸ <`T`, `K`\>(`target`, `propertyKey`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](../classes/models.BaseType.md)<`T`\> & `Record`<`K`, `boolean`\> |
| `K` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `propertyKey` | `K` |

##### Returns

`void`

#### Defined in

[src/models/metadata/Fields.ts:100](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/Fields.ts#L100)

___

### TextField

▸ **TextField**(`fieldOptions?`): <T, K\>(`target`: `T`, `propertyKey`: `K`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldOptions` | `Object` |
| `fieldOptions.field?` | `string` |
| `fieldOptions.label?` | `string` |

#### Returns

`fn`

▸ <`T`, `K`\>(`target`, `propertyKey`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](../classes/models.BaseType.md)<`T`\> & `Record`<`K`, `string`\> |
| `K` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `propertyKey` | `K` |

##### Returns

`void`

#### Defined in

[src/models/metadata/Fields.ts:82](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/Fields.ts#L82)

___

### UniqueField

▸ **UniqueField**<`Type`\>(`opts?`): <T, K\>(`target`: `T`, `propertyKey`: `K`) => `void`

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.field?` | `string` |

#### Returns

`fn`

▸ <`T`, `K`\>(`target`, `propertyKey`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](../classes/models.BaseType.md)<`T`\> & `Record`<`K`, `Type`\> |
| `K` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `propertyKey` | `K` |

##### Returns

`void`

#### Defined in

[src/models/server-metadata/ServerField.ts:21](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/server-metadata/ServerField.ts#L21)

___

### UniqueFieldGroup

▸ **UniqueFieldGroup**<`Type`\>(`opts`): <T, K\>(`target`: `T`, `propertyKey`: `K`) => `void`

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.field?` | `string` |
| `opts.uniqueGroup` | `string` |

#### Returns

`fn`

▸ <`T`, `K`\>(`target`, `propertyKey`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](../classes/models.BaseType.md)<`T`\> & `Record`<`K`, `Type`\> |
| `K` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `propertyKey` | `K` |

##### Returns

`void`

#### Defined in

[src/models/server-metadata/ServerField.ts:28](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/server-metadata/ServerField.ts#L28)

___

### UpdatedAtDate

▸ **UpdatedAtDate**(`fieldOptions`): <T, K\>(`target`: `T`, `propertyKey`: `K`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldOptions` | `Object` |
| `fieldOptions.field?` | `string` |
| `fieldOptions.label?` | `string` |

#### Returns

`fn`

▸ <`T`, `K`\>(`target`, `propertyKey`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](../classes/models.BaseType.md)<`T`\> & `Record`<`K`, `Date`\> |
| `K` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `propertyKey` | `K` |

##### Returns

`void`

#### Defined in

[src/models/metadata/Fields.ts:166](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/Fields.ts#L166)

___

### UserField

▸ **UserField**(): (`target`: `any`, `propertyKey`: `string`) => `void`

#### Returns

`fn`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

[src/models/server-metadata/UserField.ts:3](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/server-metadata/UserField.ts#L3)

___

### Validation

▸ **Validation**<`Type`\>(`fieldType`): <T, K\>(`target`: `T`, `propertyKey`: `K`) => `void`

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldType` | [`ValidationFieldType`](models.md#validationfieldtype) |

#### Returns

`fn`

▸ <`T`, `K`\>(`target`, `propertyKey`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](../classes/models.BaseType.md)<`T`\> & `Record`<`K`, `Type`\> |
| `K` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `propertyKey` | `K` |

##### Returns

`void`

#### Defined in

[src/models/validation-metadata/Validation.ts:14](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/validation-metadata/Validation.ts#L14)

___

### addModelsToList

▸ **addModelsToList**(`models`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `models` | typeof [`BaseType`](../classes/models.BaseType.md)[] |

#### Returns

`void`

#### Defined in

[src/models/ModelList.ts:56](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/ModelList.ts#L56)

___

### createMetadata

▸ **createMetadata**(`target`): typeof [`BaseType`](../classes/models.BaseType.md)

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

typeof [`BaseType`](../classes/models.BaseType.md)

#### Defined in

[src/models/metadata/createMetadata.ts:8](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/metadata/createMetadata.ts#L8)

___

### createServerMetadata

▸ **createServerMetadata**(`target`): typeof [`BaseType`](../classes/models.BaseType.md)

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

typeof [`BaseType`](../classes/models.BaseType.md)

#### Defined in

[src/models/server-metadata/createServerMetadata.ts:8](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/server-metadata/createServerMetadata.ts#L8)

___

### createValidationMetadata

▸ **createValidationMetadata**(`target`): typeof [`BaseType`](../classes/models.BaseType.md)

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

typeof [`BaseType`](../classes/models.BaseType.md)

#### Defined in

[src/models/validation-metadata/createValidationMetadata.ts:8](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/models/validation-metadata/createValidationMetadata.ts#L8)
