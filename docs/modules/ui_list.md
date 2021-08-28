[@adityhegde/typescript-framework](../README.md) / [Modules](../modules.md) / ui/list

# Module: ui/list

## Table of contents

### Type aliases

- [ListItemType](ui_list.md#listitemtype)

### Functions

- [ListItemWrapper](ui_list.md#listitemwrapper)
- [ModelList](ui_list.md#modellist)
- [ModelListItem](ui_list.md#modellistitem)
- [ModelListItemEntries](ui_list.md#modellistitementries)
- [ModelSelectListItem](ui_list.md#modelselectlistitem)
- [SwitchListItem](ui_list.md#switchlistitem)
- [TextListItem](ui_list.md#textlistitem)

## Type aliases

### ListItemType

Ƭ **ListItemType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fieldType` | [`FieldType`](models.md#fieldtype) |
| `value` | `any` |

#### Defined in

[src/ui/list/BasicListItems.tsx:5](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/ui/list/BasicListItems.tsx#L5)

## Functions

### ListItemWrapper

▸ `Const` **ListItemWrapper**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `PropsWithChildren`<[`ListItemType`](ui_list.md#listitemtype)\> |

#### Returns

`Element`

#### Defined in

[src/ui/list/BasicListItems.tsx:10](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/ui/list/BasicListItems.tsx#L10)

___

### ModelList

▸ **ModelList**<`Model`\>(`props`): `Element`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Model` | extends [`BaseType`](../classes/models.BaseType.md)<`Model`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `ModelListProps`<`Model`\> |

#### Returns

`Element`

#### Defined in

[src/ui/list/ModelList.tsx:15](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/ui/list/ModelList.tsx#L15)

___

### ModelListItem

▸ **ModelListItem**<`Model`\>(`__namedParameters`): `Element`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Model` | extends [`BaseType`](../classes/models.BaseType.md)<`Model`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `ModelListItemProps`<`Model`\> |

#### Returns

`Element`

#### Defined in

[src/ui/list/ModelListItem.tsx:17](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/ui/list/ModelListItem.tsx#L17)

___

### ModelListItemEntries

▸ `Const` **ModelListItemEntries**<`Model`\>(`props`): `Element`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Model` | extends [`BaseType`](../classes/models.BaseType.md)<`Model`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `ModelListItemEntriesProps`<`Model`\> |

#### Returns

`Element`

#### Defined in

[src/ui/list/ModelListItemEntries.tsx:34](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/ui/list/ModelListItemEntries.tsx#L34)

___

### ModelSelectListItem

▸ `Const` **ModelSelectListItem**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ListItemType`](ui_list.md#listitemtype) |

#### Returns

`Element`

#### Defined in

[src/ui/list/ModelSelectListItem.tsx:18](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/ui/list/ModelSelectListItem.tsx#L18)

___

### SwitchListItem

▸ `Const` **SwitchListItem**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ListItemType`](ui_list.md#listitemtype) |

#### Returns

`Element`

#### Defined in

[src/ui/list/BasicListItems.tsx:22](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/ui/list/BasicListItems.tsx#L22)

___

### TextListItem

▸ `Const` **TextListItem**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ListItemType`](ui_list.md#listitemtype) |

#### Returns

`Element`

#### Defined in

[src/ui/list/BasicListItems.tsx:16](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/ui/list/BasicListItems.tsx#L16)
