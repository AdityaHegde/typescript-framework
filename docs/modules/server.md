[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / server

# Module: server

## Table of contents

### Classes

- [Authentication](../classes/server.Authentication.md)
- [AuthenticationConfig](../classes/server.AuthenticationConfig.md)
- [DataStore](../classes/server.DataStore.md)
- [DataStoreModel](../classes/server.DataStoreModel.md)
- [DataStoreModelFactory](../classes/server.DataStoreModelFactory.md)
- [JsonApiRoute](../classes/server.JsonApiRoute.md)
- [JsonApiSanitizer](../classes/server.JsonApiSanitizer.md)
- [LoggerBase](../classes/server.LoggerBase.md)
- [Route](../classes/server.Route.md)
- [RouteFactory](../classes/server.RouteFactory.md)
- [RoutesConfig](../classes/server.RoutesConfig.md)
- [Server](../classes/server.Server.md)
- [ServerConfig](../classes/server.ServerConfig.md)
- [UserAuthentication](../classes/server.UserAuthentication.md)
- [ValidationError](../classes/server.ValidationError.md)

### Type aliases

- [JSONRecordType](server.md#jsonrecordtype)
- [JSONResponse](server.md#jsonresponse)
- [LinksType](server.md#linkstype)
- [QueryOptions](server.md#queryoptions)

### Functions

- [Log](server.md#log)
- [validateRecord](server.md#validaterecord)

## Type aliases

### JSONRecordType

Ƭ **JSONRecordType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | `any` |
| `id` | `string` |
| `links?` | [`LinksType`](server.md#linkstype) |
| `relations?` | `any` |
| `type` | `string` |

#### Defined in

[src/server/routes/JsonApiRoute.ts:19](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/routes/JsonApiRoute.ts#L19)

___

### JSONResponse

Ƭ **JSONResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data?` | [`JSONRecordType`](server.md#jsonrecordtype)[] \| [`JSONRecordType`](server.md#jsonrecordtype) |
| `errors?` | `any`[] |
| `links?` | [`LinksType`](server.md#linkstype) |

#### Defined in

[src/server/routes/JsonApiRoute.ts:26](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/routes/JsonApiRoute.ts#L26)

___

### LinksType

Ƭ **LinksType**: { [link in string]: string }

#### Defined in

[src/server/routes/JsonApiRoute.ts:16](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/routes/JsonApiRoute.ts#L16)

___

### QueryOptions

Ƭ **QueryOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fromId?` | `string` |
| `limit?` | `number` |
| `sort?` | { [field in string]: 1 \| -1 } |

#### Defined in

[src/server/datastore/DataStoreModel.ts:3](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/datastore/DataStoreModel.ts#L3)

## Functions

### Log

▸ **Log**(`constructor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | `any` |

#### Returns

`void`

#### Defined in

[src/server/logging/LoggerBase.ts:14](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/logging/LoggerBase.ts#L14)

___

### validateRecord

▸ **validateRecord**(`model`, `record`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | typeof [`BaseType`](../classes/models.BaseType.md) |
| `record` | [`BaseType`](../classes/models.BaseType.md) |

#### Returns

`void`

#### Defined in

[src/server/validation/validateRecord.ts:5](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/validation/validateRecord.ts#L5)
