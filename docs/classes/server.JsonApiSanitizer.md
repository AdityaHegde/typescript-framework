[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / [server](../modules/server.md) / JsonApiSanitizer

# Class: JsonApiSanitizer

[server](../modules/server.md).JsonApiSanitizer

Extracted responsibility of sanitizing various aspects in json api from JsonApiRoute

## Table of contents

### Constructors

- [constructor](server.JsonApiSanitizer.md#constructor)

### Properties

- [model](server.JsonApiSanitizer.md#model)
- [routeFactory](server.JsonApiSanitizer.md#routefactory)

### Methods

- [convertToJSON](server.JsonApiSanitizer.md#converttojson)
- [getLinks](server.JsonApiSanitizer.md#getlinks)
- [sanitizeQuery](server.JsonApiSanitizer.md#sanitizequery)
- [sanitizeRecord](server.JsonApiSanitizer.md#sanitizerecord)

## Constructors

### constructor

• **new JsonApiSanitizer**(`model`, `routeFactory`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | typeof [`BaseType`](models.BaseType.md) |
| `routeFactory` | [`RouteFactory`](server.RouteFactory.md) |

#### Defined in

[src/server/routes/JsonApiSanitizer.ts:14](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/routes/JsonApiSanitizer.ts#L14)

## Properties

### model

• `Protected` **model**: typeof [`BaseType`](models.BaseType.md)

#### Defined in

[src/server/routes/JsonApiSanitizer.ts:11](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/routes/JsonApiSanitizer.ts#L11)

___

### routeFactory

• `Protected` **routeFactory**: [`RouteFactory`](server.RouteFactory.md)

#### Defined in

[src/server/routes/JsonApiSanitizer.ts:12](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/routes/JsonApiSanitizer.ts#L12)

## Methods

### convertToJSON

▸ **convertToJSON**(`record`): [`JSONRecordType`](../modules/server.md#jsonrecordtype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | `any` |

#### Returns

[`JSONRecordType`](../modules/server.md#jsonrecordtype)

#### Defined in

[src/server/routes/JsonApiSanitizer.ts:40](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/routes/JsonApiSanitizer.ts#L40)

___

### getLinks

▸ `Private` **getLinks**(`jsonRecord`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonRecord` | [`JSONRecordType`](../modules/server.md#jsonrecordtype) |

#### Returns

`void`

#### Defined in

[src/server/routes/JsonApiSanitizer.ts:82](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/routes/JsonApiSanitizer.ts#L82)

___

### sanitizeQuery

▸ **sanitizeQuery**(`search`, `params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `search` | `any` |
| `params` | `any` |

#### Returns

`any`

#### Defined in

[src/server/routes/JsonApiSanitizer.ts:61](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/routes/JsonApiSanitizer.ts#L61)

___

### sanitizeRecord

▸ **sanitizeRecord**(`record`, `params`, `req?`, `read?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `record` | `any` | `undefined` |
| `params` | `any` | `undefined` |
| `req?` | `any` | `undefined` |
| `read` | `boolean` | `false` |

#### Returns

`any`

#### Defined in

[src/server/routes/JsonApiSanitizer.ts:19](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/routes/JsonApiSanitizer.ts#L19)
