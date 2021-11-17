[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / ui/table

# Module: ui/table

## Table of contents

### Variables

- [FIELD\_TO\_FILTER\_MAP](ui_table.md#field_to_filter_map)
- [FIELD\_TO\_RENDERER\_MAP](ui_table.md#field_to_renderer_map)

### Functions

- [ModelTable](ui_table.md#modeltable)

## Variables

### FIELD\_TO\_FILTER\_MAP

• **FIELD\_TO\_FILTER\_MAP**: { [input in FieldInputType]?: Function }

#### Defined in

[src/ui/table/TableColumnFilters.tsx:25](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/table/TableColumnFilters.tsx#L25)

___

### FIELD\_TO\_RENDERER\_MAP

• **FIELD\_TO\_RENDERER\_MAP**: { [input in FieldInputType]?: Function }

#### Defined in

[src/ui/table/TableCellRenderers.tsx:10](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/table/TableCellRenderers.tsx#L10)

## Functions

### ModelTable

▸ **ModelTable**<`Model`\>(`__namedParameters`): `Element`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Model` | extends [`BaseType`](../classes/models.BaseType.md)<`Model`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `ModelTableProps`<`Model`\> |

#### Returns

`Element`

#### Defined in

[src/ui/table/ModelTable.tsx:40](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/table/ModelTable.tsx#L40)
