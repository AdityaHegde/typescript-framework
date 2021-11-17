[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / ui

# Module: ui

## Table of contents

### Classes

- [ComponentByModelMap](../classes/ui.ComponentByModelMap.md)
- [LightErrorBoundary](../classes/ui.LightErrorBoundary.md)
- [SelectEnumItems](../classes/ui.SelectEnumItems.md)

### Functions

- [DataPage](ui.md#datapage)
- [ModalWrapper](ui.md#modalwrapper)
- [fetchGet](ui.md#fetchget)
- [fetchPost](ui.md#fetchpost)
- [fetchWrapper](ui.md#fetchwrapper)
- [getDisplayText](ui.md#getdisplaytext)
- [getQueryString](ui.md#getquerystring)
- [useRoutePath](ui.md#useroutepath)

## Functions

### DataPage

▸ **DataPage**<`Model`\>(`__namedParameters`): `Element`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Model` | extends [`BaseType`](../classes/models.BaseType.md)<`Model`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.modelStore` | [`ModelStore`](../classes/ui_store.ModelStore.md)<`Model`\> |
| `__namedParameters.params?` | `any` |

#### Returns

`Element`

#### Defined in

[src/ui/DataPage.tsx:11](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/DataPage.tsx#L11)

___

### ModalWrapper

▸ **ModalWrapper**<`Model`\>(`__namedParameters`): `Element`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Model` | extends [`BaseType`](../classes/models.BaseType.md)<`Model`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `ModalWrapperProps`<`Model`\> |

#### Returns

`Element`

#### Defined in

[src/ui/ModalWrapper.tsx:17](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/ModalWrapper.tsx#L17)

___

### fetchGet

▸ **fetchGet**(`url`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/ui/utils/fetch.ts:1](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/utils/fetch.ts#L1)

___

### fetchPost

▸ **fetchPost**(`url`, `bodyJson`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `any` |
| `bodyJson` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/ui/utils/fetch.ts:5](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/utils/fetch.ts#L5)

___

### fetchWrapper

▸ **fetchWrapper**(`url`, `method`, `data?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `method` | `string` |
| `data?` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/ui/utils/fetch.ts:9](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/utils/fetch.ts#L9)

___

### getDisplayText

▸ **getDisplayText**(`model`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`BaseType`](../classes/models.BaseType.md) |

#### Returns

`string`

#### Defined in

[src/ui/utils/getDisplayText.ts:3](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/utils/getDisplayText.ts#L3)

___

### getQueryString

▸ **getQueryString**(`query`, `filter?`, `parentKey?`, `level?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `query` | `Dict`<`any`\> | `undefined` |
| `filter` | `QueryFilterType` | `undefined` |
| `parentKey` | `string` | `""` |
| `level` | `number` | `0` |

#### Returns

`string`

#### Defined in

[src/ui/utils/getQueryString.ts:3](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/utils/getQueryString.ts#L3)

___

### useRoutePath

▸ **useRoutePath**(`basePath?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `basePath` | `string` | `""` |

#### Returns

`string`

#### Defined in

[src/ui/useRoutePath.ts:11](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/useRoutePath.ts#L11)
