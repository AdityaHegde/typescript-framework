[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / [server](../modules/server.md) / RouteFactory

# Class: RouteFactory

[server](../modules/server.md).RouteFactory

## Table of contents

### Constructors

- [constructor](server.RouteFactory.md#constructor)

### Properties

- [authentication](server.RouteFactory.md#authentication)
- [routeClass](server.RouteFactory.md#routeclass)
- [routes](server.RouteFactory.md#routes)
- [routesConfig](server.RouteFactory.md#routesconfig)

### Methods

- [getRoute](server.RouteFactory.md#getroute)
- [init](server.RouteFactory.md#init)
- [initRouteInstances](server.RouteFactory.md#initrouteinstances)

## Constructors

### constructor

• **new RouteFactory**(`routeClass`, `routesConfig`, `authentication`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `routeClass` | typeof [`Route`](server.Route.md) |
| `routesConfig` | [`RoutesConfig`](server.RoutesConfig.md) |
| `authentication` | [`Authentication`](server.Authentication.md) |

#### Defined in

[src/server/routes/RouteFactory.ts:16](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/routes/RouteFactory.ts#L16)

## Properties

### authentication

• `Protected` **authentication**: [`Authentication`](server.Authentication.md)

#### Defined in

[src/server/routes/RouteFactory.ts:13](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/routes/RouteFactory.ts#L13)

___

### routeClass

• `Protected` **routeClass**: typeof [`Route`](server.Route.md)

#### Defined in

[src/server/routes/RouteFactory.ts:11](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/routes/RouteFactory.ts#L11)

___

### routes

• `Protected` **routes**: `Map`<`string`, [`Route`](server.Route.md)\>

#### Defined in

[src/server/routes/RouteFactory.ts:14](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/routes/RouteFactory.ts#L14)

___

### routesConfig

• `Protected` **routesConfig**: [`RoutesConfig`](server.RoutesConfig.md)

#### Defined in

[src/server/routes/RouteFactory.ts:12](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/routes/RouteFactory.ts#L12)

## Methods

### getRoute

▸ **getRoute**(`modelName`): [`Route`](server.Route.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelName` | `string` |

#### Returns

[`Route`](server.Route.md)

#### Defined in

[src/server/routes/RouteFactory.ts:47](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/routes/RouteFactory.ts#L47)

___

### init

▸ **init**(`app`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/server/routes/RouteFactory.ts:34](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/routes/RouteFactory.ts#L34)

___

### initRouteInstances

▸ **initRouteInstances**(`dataStoreModelFactory`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataStoreModelFactory` | [`DataStoreModelFactory`](server.DataStoreModelFactory.md) |

#### Returns

`void`

#### Defined in

[src/server/routes/RouteFactory.ts:22](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/routes/RouteFactory.ts#L22)
