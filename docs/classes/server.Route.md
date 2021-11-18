[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / [server](../modules/server.md) / Route

# Class: Route

[server](../modules/server.md).Route

## Hierarchy

- [`LoggerBase`](server.LoggerBase.md)

  ↳ **`Route`**

  ↳↳ [`JsonApiRoute`](server.JsonApiRoute.md)

## Table of contents

### Constructors

- [constructor](server.Route.md#constructor)

### Properties

- [apiPath](server.Route.md#apipath)
- [authentication](server.Route.md#authentication)
- [basePath](server.Route.md#basepath)
- [config](server.Route.md#config)
- [dataStoreModel](server.Route.md#datastoremodel)
- [logger](server.Route.md#logger)
- [model](server.Route.md#model)
- [routeFactory](server.Route.md#routefactory)

### Methods

- [convertRecordsToJSON](server.Route.md#convertrecordstojson)
- [convertToJSON](server.Route.md#converttojson)
- [datastoreQuery](server.Route.md#datastorequery)
- [datastoreQueryJSONResponse](server.Route.md#datastorequeryjsonresponse)
- [init](server.Route.md#init)
- [sanitizeQuery](server.Route.md#sanitizequery)
- [sanitizeRecord](server.Route.md#sanitizerecord)

## Constructors

### constructor

• **new Route**(`model`, `config`, `routeFactory`, `dataStoreModel`, `authentication`, `basePath`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | typeof [`BaseType`](models.BaseType.md) |
| `config` | [`RoutesConfig`](server.RoutesConfig.md) |
| `routeFactory` | [`RouteFactory`](server.RouteFactory.md) |
| `dataStoreModel` | [`DataStoreModel`](server.DataStoreModel.md) |
| `authentication` | [`Authentication`](server.Authentication.md) |
| `basePath` | `string` |

#### Overrides

[LoggerBase](server.LoggerBase.md).[constructor](server.LoggerBase.md#constructor)

#### Defined in

[src/server/routes/Route.ts:19](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/routes/Route.ts#L19)

## Properties

### apiPath

• **apiPath**: `string`

#### Defined in

[src/server/routes/Route.ts:17](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/routes/Route.ts#L17)

___

### authentication

• `Protected` **authentication**: [`Authentication`](server.Authentication.md)

#### Defined in

[src/server/routes/Route.ts:14](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/routes/Route.ts#L14)

___

### basePath

• `Protected` **basePath**: `string`

#### Defined in

[src/server/routes/Route.ts:15](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/routes/Route.ts#L15)

___

### config

• `Protected` **config**: [`RoutesConfig`](server.RoutesConfig.md)

#### Defined in

[src/server/routes/Route.ts:11](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/routes/Route.ts#L11)

___

### dataStoreModel

• `Protected` **dataStoreModel**: [`DataStoreModel`](server.DataStoreModel.md)

#### Defined in

[src/server/routes/Route.ts:13](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/routes/Route.ts#L13)

___

### logger

• `Protected` `Readonly` **logger**: `Logger`

#### Inherited from

[LoggerBase](server.LoggerBase.md).[logger](server.LoggerBase.md#logger)

#### Defined in

[src/server/logging/LoggerBase.ts:11](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/logging/LoggerBase.ts#L11)

___

### model

• `Readonly` **model**: typeof [`BaseType`](models.BaseType.md)

#### Defined in

[src/server/routes/Route.ts:10](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/routes/Route.ts#L10)

___

### routeFactory

• `Protected` **routeFactory**: [`RouteFactory`](server.RouteFactory.md)

#### Defined in

[src/server/routes/Route.ts:12](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/routes/Route.ts#L12)

## Methods

### convertRecordsToJSON

▸ **convertRecordsToJSON**(`records`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `records` | `any`[] |

#### Returns

`any`[]

#### Defined in

[src/server/routes/Route.ts:42](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/routes/Route.ts#L42)

___

### convertToJSON

▸ **convertToJSON**(`record`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | `any` |

#### Returns

`any`

#### Defined in

[src/server/routes/Route.ts:38](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/routes/Route.ts#L38)

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

#### Defined in

[src/server/routes/Route.ts:46](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/routes/Route.ts#L46)

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

#### Defined in

[src/server/routes/Route.ts:55](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/routes/Route.ts#L55)

___

### init

▸ **init**(`router`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `router` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/server/routes/Route.ts:30](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/routes/Route.ts#L30)

___

### sanitizeQuery

▸ `Protected` **sanitizeQuery**(`search`, `params`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `search` | `any` |
| `params` | `any` |

#### Returns

`void`

#### Defined in

[src/server/routes/Route.ts:64](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/routes/Route.ts#L64)

___

### sanitizeRecord

▸ **sanitizeRecord**(`record`, `params`, `req?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | `any` |
| `params` | `any` |
| `req?` | `any` |

#### Returns

`any`

#### Defined in

[src/server/routes/Route.ts:34](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/routes/Route.ts#L34)
