[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / ui/form

# Module: ui/form

## Table of contents

### Type aliases

- [FormItemType](ui_form.md#formitemtype)

### Functions

- [ArrayFormItem](ui_form.md#arrayformitem)
- [FormItemWrapper](ui_form.md#formitemwrapper)
- [ModelForm](ui_form.md#modelform)
- [ModelFormItems](ui_form.md#modelformitems)
- [ModelSelectFormItem](ui_form.md#modelselectformitem)
- [NumberFormItem](ui_form.md#numberformitem)
- [SelectFormItem](ui_form.md#selectformitem)
- [SwitchFormItem](ui_form.md#switchformitem)
- [TextFormItem](ui_form.md#textformitem)
- [getFieldName](ui_form.md#getfieldname)
- [getFormItem](ui_form.md#getformitem)
- [useFormRef](ui_form.md#useformref)

## Type aliases

### FormItemType

Ƭ **FormItemType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `additionalProps?` | `any` |
| `fieldType` | [`FieldType`](models.md#fieldtype) |
| `inputComponentMap` | `InputComponentMapType` |
| `key` | `string` |
| `parentFields?` | `string`[] |
| `validationFieldType?` | [`ValidationFieldType`](models.md#validationfieldtype) |

#### Defined in

[src/ui/form/BasicFormItems.tsx:10](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/ui/form/BasicFormItems.tsx#L10)

## Functions

### ArrayFormItem

▸ `Const` **ArrayFormItem**(`opts`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FormItemType`](ui_form.md#formitemtype) |

#### Returns

`Element`

#### Defined in

[src/ui/form/ArrayFormItem.tsx:44](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/ui/form/ArrayFormItem.tsx#L44)

___

### FormItemWrapper

▸ `Const` **FormItemWrapper**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `PropsWithChildren`<[`FormItemType`](ui_form.md#formitemtype)\> |

#### Returns

`Element`

#### Defined in

[src/ui/form/BasicFormItems.tsx:19](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/ui/form/BasicFormItems.tsx#L19)

___

### ModelForm

▸ **ModelForm**<`Model`\>(`props`): `Element`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Model` | extends [`BaseType`](../classes/models.BaseType.md)<`Model`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `ModelFormProps`<`Model`\> |

#### Returns

`Element`

#### Defined in

[src/ui/form/ModelForm.tsx:14](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/ui/form/ModelForm.tsx#L14)

___

### ModelFormItems

▸ `Const` **ModelFormItems**<`Model`\>(`__namedParameters`): `Element`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Model` | extends [`BaseType`](../classes/models.BaseType.md)<`Model`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `ModelFormItemsProps`<`Model`\> |

#### Returns

`Element`

#### Defined in

[src/ui/form/ModelFormItems.tsx:11](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/ui/form/ModelFormItems.tsx#L11)

___

### ModelSelectFormItem

▸ `Const` **ModelSelectFormItem**(`opts`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FormItemType`](ui_form.md#formitemtype) |

#### Returns

`Element`

#### Defined in

[src/ui/form/ModelSelectFormItem.tsx:31](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/ui/form/ModelSelectFormItem.tsx#L31)

___

### NumberFormItem

▸ `Const` **NumberFormItem**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FormItemType`](ui_form.md#formitemtype) |

#### Returns

`Element`

#### Defined in

[src/ui/form/BasicFormItems.tsx:36](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/ui/form/BasicFormItems.tsx#L36)

___

### SelectFormItem

▸ **SelectFormItem**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FormItemType`](ui_form.md#formitemtype) |

#### Returns

`Element`

#### Defined in

[src/ui/form/SelectFormItem.tsx:19](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/ui/form/SelectFormItem.tsx#L19)

___

### SwitchFormItem

▸ `Const` **SwitchFormItem**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FormItemType`](ui_form.md#formitemtype) |

#### Returns

`Element`

#### Defined in

[src/ui/form/BasicFormItems.tsx:40](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/ui/form/BasicFormItems.tsx#L40)

___

### TextFormItem

▸ `Const` **TextFormItem**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FormItemType`](ui_form.md#formitemtype) |

#### Returns

`Element`

#### Defined in

[src/ui/form/BasicFormItems.tsx:32](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/ui/form/BasicFormItems.tsx#L32)

___

### getFieldName

▸ `Const` **getFieldName**(`props`): `string` \| `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FormItemType`](ui_form.md#formitemtype) |

#### Returns

`string` \| `string`[]

#### Defined in

[src/ui/form/BasicFormItems.tsx:44](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/ui/form/BasicFormItems.tsx#L44)

___

### getFormItem

▸ **getFormItem**(`fieldType`, `validationFieldType`, `inputComponentMap`, `parentFields?`, `addnProps?`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldType` | [`FieldType`](models.md#fieldtype) |
| `validationFieldType` | [`ValidationFieldType`](models.md#validationfieldtype) |
| `inputComponentMap` | `InputComponentMapType` |
| `parentFields?` | `string`[] |
| `addnProps` | `any` |

#### Returns

`Element`

#### Defined in

[src/ui/form/getFormItem.tsx:6](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/ui/form/getFormItem.tsx#L6)

___

### useFormRef

▸ **useFormRef**(`record`): `MutableRefObject`<`FormInstance`<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | [`BaseType`](../classes/models.BaseType.md) |

#### Returns

`MutableRefObject`<`FormInstance`<`any`\>\>

#### Defined in

[src/ui/form/useFormRef.ts:5](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/ui/form/useFormRef.ts#L5)
