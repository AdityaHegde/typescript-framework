[@adityhegde/typescript-framework](../README.md) / [Modules](../modules.md) / [server](../modules/server.md) / JsonApiRoute

# Class: JsonApiRoute

[server](../modules/server.md).JsonApiRoute

## Hierarchy

- [`Route`](server.Route.md)

  ↳ **`JsonApiRoute`**

## Table of contents

### Constructors

- [constructor](server.JsonApiRoute.md#constructor)

### Properties

- [apiPath](server.JsonApiRoute.md#apipath)
- [authentication](server.JsonApiRoute.md#authentication)
- [basePath](server.JsonApiRoute.md#basepath)
- [config](server.JsonApiRoute.md#config)
- [dataStoreModel](server.JsonApiRoute.md#datastoremodel)
- [jsonApiSanitizer](server.JsonApiRoute.md#jsonapisanitizer)
- [logger](server.JsonApiRoute.md#logger)
- [model](server.JsonApiRoute.md#model)
- [routeFactory](server.JsonApiRoute.md#routefactory)

### Methods

- [convertRecordsToJSON](server.JsonApiRoute.md#convertrecordstojson)
- [convertToJSON](server.JsonApiRoute.md#converttojson)
- [createOrUpdateJson](server.JsonApiRoute.md#createorupdatejson)
- [datastoreQuery](server.JsonApiRoute.md#datastorequery)
- [datastoreQueryJSONResponse](server.JsonApiRoute.md#datastorequeryjsonresponse)
- [getApiPath](server.JsonApiRoute.md#getapipath)
- [getLimit](server.JsonApiRoute.md#getlimit)
- [getResponsePayload](server.JsonApiRoute.md#getresponsepayload)
- [handle](server.JsonApiRoute.md#handle)
- [init](server.JsonApiRoute.md#init)
- [registerReadRoutes](server.JsonApiRoute.md#registerreadroutes)
- [registerWriteRoutes](server.JsonApiRoute.md#registerwriteroutes)
- [resolveRelations](server.JsonApiRoute.md#resolverelations)
- [sanitizeQuery](server.JsonApiRoute.md#sanitizequery)
- [sanitizeRecord](server.JsonApiRoute.md#sanitizerecord)
- [validateOwner](server.JsonApiRoute.md#validateowner)

## Constructors

### constructor

• **new JsonApiRoute**(`model`, `routesConfig`, `routeFactory`, `dataStoreModel`, `authentication`, `basePath`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | typeof [`BaseType`](models.BaseType.md) |
| `routesConfig` | [`RoutesConfig`](server.RoutesConfig.md) |
| `routeFactory` | [`RouteFactory`](server.RouteFactory.md) |
| `dataStoreModel` | [`DataStoreModel`](server.DataStoreModel.md) |
| `authentication` | [`Authentication`](server.Authentication.md) |
| `basePath` | `string` |

#### Overrides

[Route](server.Route.md).[constructor](server.Route.md#constructor)

#### Defined in

[src/server/routes/JsonApiRoute.ts:39](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/routes/JsonApiRoute.ts#L39)

## Properties

### apiPath

• **apiPath**: `string`

#### Inherited from

[Route](server.Route.md).[apiPath](server.Route.md#apipath)

#### Defined in

[src/server/routes/Route.ts:17](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/routes/Route.ts#L17)

___

### authentication

• `Protected` **authentication**: [`Authentication`](server.Authentication.md)

#### Inherited from

[Route](server.Route.md).[authentication](server.Route.md#authentication)

#### Defined in

[src/server/routes/Route.ts:14](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/routes/Route.ts#L14)

___

### basePath

• `Protected` **basePath**: `string`

#### Inherited from

[Route](server.Route.md).[basePath](server.Route.md#basepath)

#### Defined in

[src/server/routes/Route.ts:15](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/routes/Route.ts#L15)

___

### config

• `Protected` **config**: [`RoutesConfig`](server.RoutesConfig.md)

#### Inherited from

[Route](server.Route.md).[config](server.Route.md#config)

#### Defined in

[src/server/routes/Route.ts:11](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/routes/Route.ts#L11)

___

### dataStoreModel

• `Protected` **dataStoreModel**: [`DataStoreModel`](server.DataStoreModel.md)

#### Inherited from

[Route](server.Route.md).[dataStoreModel](server.Route.md#datastoremodel)

#### Defined in

[src/server/routes/Route.ts:13](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/routes/Route.ts#L13)

___

### jsonApiSanitizer

• **jsonApiSanitizer**: [`JsonApiSanitizer`](server.JsonApiSanitizer.md)

#### Defined in

[src/server/routes/JsonApiRoute.ts:37](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/routes/JsonApiRoute.ts#L37)

___

### logger

• `Protected` `Readonly` **logger**: `Logger`

#### Inherited from

[Route](server.Route.md).[logger](server.Route.md#logger)

#### Defined in

[src/server/logging/LoggerBase.ts:11](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/logging/LoggerBase.ts#L11)

___

### model

• `Readonly` **model**: typeof [`BaseType`](models.BaseType.md)

#### Inherited from

[Route](server.Route.md).[model](server.Route.md#model)

#### Defined in

[src/server/routes/Route.ts:10](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/routes/Route.ts#L10)

___

### routeFactory

• `Protected` **routeFactory**: [`RouteFactory`](server.RouteFactory.md)

#### Inherited from

[Route](server.Route.md).[routeFactory](server.Route.md#routefactory)

#### Defined in

[src/server/routes/Route.ts:12](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/routes/Route.ts#L12)

## Methods

### convertRecordsToJSON

▸ **convertRecordsToJSON**(`records`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `records` | `any`[] |

#### Returns

`any`[]

#### Inherited from

[Route](server.Route.md).[convertRecordsToJSON](server.Route.md#convertrecordstojson)

#### Defined in

[src/server/routes/Route.ts:42](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/routes/Route.ts#L42)

___

### convertToJSON

▸ **convertToJSON**(`record`): [`JSONRecordType`](../modules/server.md#jsonrecordtype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | `any` |

#### Returns

[`JSONRecordType`](../modules/server.md#jsonrecordtype)

#### Overrides

[Route](server.Route.md).[convertToJSON](server.Route.md#converttojson)

#### Defined in

[src/server/routes/JsonApiRoute.ts:61](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/routes/JsonApiRoute.ts#L61)

___

### createOrUpdateJson

▸ `Private` **createOrUpdateJson**(`jsonRecord`, `req`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonRecord` | [`JSONRecordType`](../modules/server.md#jsonrecordtype) |
| `req` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/server/routes/JsonApiRoute.ts:162](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/routes/JsonApiRoute.ts#L162)

___

### datastoreQuery

▸ **datastoreQuery**(`record`, `search`, `params`, `sanitizedCallback`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | `any` |
| `search` | `any` |
| `params` | `any` |
| `sanitizedCallback` | (`sanitizedRecord`: `any`, `sanitizedQuery`: `any`) => `Promise`<`any`\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[Route](server.Route.md).[datastoreQuery](server.Route.md#datastorequery)

#### Defined in

[src/server/routes/Route.ts:46](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/routes/Route.ts#L46)

___

### datastoreQueryJSONResponse

▸ **datastoreQueryJSONResponse**(`record`, `search`, `params`, `sanitizedCallback`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | `any` |
| `search` | `any` |
| `params` | `any` |
| `sanitizedCallback` | (`sanitizedRecord`: `any`, `sanitizedQuery`: `any`) => `Promise`<`any`\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[Route](server.Route.md).[datastoreQueryJSONResponse](server.Route.md#datastorequeryjsonresponse)

#### Defined in

[src/server/routes/Route.ts:55](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/routes/Route.ts#L55)

___

### getApiPath

▸ `Private` **getApiPath**(): `string`

#### Returns

`string`

#### Defined in

[src/server/routes/JsonApiRoute.ts:151](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/routes/JsonApiRoute.ts#L151)

___

### getLimit

▸ `Private` **getLimit**(`req`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `any` |

#### Returns

`number`

#### Defined in

[src/server/routes/JsonApiRoute.ts:238](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/routes/JsonApiRoute.ts#L238)

___

### getResponsePayload

▸ `Private` **getResponsePayload**(`req`, `records`): [`JSONResponse`](../modules/server.md#jsonresponse)

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `any` |
| `records` | `any` |

#### Returns

[`JSONResponse`](../modules/server.md#jsonresponse)

#### Defined in

[src/server/routes/JsonApiRoute.ts:222](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/routes/JsonApiRoute.ts#L222)

___

### handle

▸ `Private` **handle**(`res`, `req`, `operation`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `res` | `any` |
| `req` | `any` |
| `operation` | () => `Promise`<`any`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/server/routes/JsonApiRoute.ts:135](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/routes/JsonApiRoute.ts#L135)

___

### init

▸ **init**(`router`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `router` | `any` |

#### Returns

`Promise`<`void`\>

#### Overrides

[Route](server.Route.md).[init](server.Route.md#init)

#### Defined in

[src/server/routes/JsonApiRoute.ts:46](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/routes/JsonApiRoute.ts#L46)

___

### registerReadRoutes

▸ `Private` **registerReadRoutes**(`baseRouter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseRouter` | `any` |

#### Returns

`void`

#### Defined in

[src/server/routes/JsonApiRoute.ts:69](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/routes/JsonApiRoute.ts#L69)

___

### registerWriteRoutes

▸ `Private` **registerWriteRoutes**(`baseRouter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseRouter` | `any` |

#### Returns

`void`

#### Defined in

[src/server/routes/JsonApiRoute.ts:93](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/routes/JsonApiRoute.ts#L93)

___

### resolveRelations

▸ `Private` **resolveRelations**(`jsonRecord`, `record`, `req`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonRecord` | [`JSONRecordType`](../modules/server.md#jsonrecordtype) |
| `record` | `any` |
| `req` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/server/routes/JsonApiRoute.ts:199](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/routes/JsonApiRoute.ts#L199)

___

### sanitizeQuery

▸ `Protected` **sanitizeQuery**(`search`, `params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `search` | `any` |
| `params` | `any` |

#### Returns

`any`

#### Overrides

[Route](server.Route.md).[sanitizeQuery](server.Route.md#sanitizequery)

#### Defined in

[src/server/routes/JsonApiRoute.ts:65](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/routes/JsonApiRoute.ts#L65)

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

#### Overrides

[Route](server.Route.md).[sanitizeRecord](server.Route.md#sanitizerecord)

#### Defined in

[src/server/routes/JsonApiRoute.ts:57](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/routes/JsonApiRoute.ts#L57)

___

### validateOwner

▸ `Private` **validateOwner**(`reqUser`, `recordId`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reqUser` | [`UserModel`](models.UserModel.md) |
| `recordId` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/server/routes/JsonApiRoute.ts:187](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/server/routes/JsonApiRoute.ts#L187)
