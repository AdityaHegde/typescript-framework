[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / [server](../modules/server.md) / Server

# Class: Server

[server](../modules/server.md).Server

## Hierarchy

- [`LoggerBase`](server.LoggerBase.md)

  ↳ **`Server`**

## Table of contents

### Constructors

- [constructor](server.Server.md#constructor)

### Properties

- [app](server.Server.md#app)
- [authentication](server.Server.md#authentication)
- [config](server.Server.md#config)
- [dataStore](server.Server.md#datastore)
- [logger](server.Server.md#logger)
- [routeFactory](server.Server.md#routefactory)
- [server](server.Server.md#server)

### Methods

- [addMiddlewares](server.Server.md#addmiddlewares)
- [start](server.Server.md#start)
- [stop](server.Server.md#stop)

## Constructors

### constructor

• **new Server**(`config`, `dataStore`, `authentication`, `routeFactory`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ServerConfig`](server.ServerConfig.md) |
| `dataStore` | [`DataStore`](server.DataStore.md) |
| `authentication` | [`Authentication`](server.Authentication.md) |
| `routeFactory` | [`RouteFactory`](server.RouteFactory.md) |

#### Overrides

[LoggerBase](server.LoggerBase.md).[constructor](server.LoggerBase.md#constructor)

#### Defined in

[src/server/Server.ts:21](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/Server.ts#L21)

## Properties

### app

• `Protected` **app**: `any`

#### Defined in

[src/server/Server.ts:19](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/Server.ts#L19)

___

### authentication

• `Protected` `Readonly` **authentication**: [`Authentication`](server.Authentication.md)

#### Defined in

[src/server/Server.ts:15](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/Server.ts#L15)

___

### config

• `Readonly` **config**: [`ServerConfig`](server.ServerConfig.md)

#### Defined in

[src/server/Server.ts:13](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/Server.ts#L13)

___

### dataStore

• `Protected` `Readonly` **dataStore**: [`DataStore`](server.DataStore.md)

#### Defined in

[src/server/Server.ts:14](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/Server.ts#L14)

___

### logger

• `Protected` `Readonly` **logger**: `Logger`

#### Inherited from

[LoggerBase](server.LoggerBase.md).[logger](server.LoggerBase.md#logger)

#### Defined in

[src/server/logging/LoggerBase.ts:11](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/logging/LoggerBase.ts#L11)

___

### routeFactory

• `Protected` `Readonly` **routeFactory**: [`RouteFactory`](server.RouteFactory.md)

#### Defined in

[src/server/Server.ts:16](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/Server.ts#L16)

___

### server

• `Protected` **server**: `Server`

#### Defined in

[src/server/Server.ts:18](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/Server.ts#L18)

## Methods

### addMiddlewares

▸ `Private` **addMiddlewares**(): `void`

#### Returns

`void`

#### Defined in

[src/server/Server.ts:70](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/Server.ts#L70)

___

### start

▸ **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/server/Server.ts:30](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/Server.ts#L30)

___

### stop

▸ **stop**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/server/Server.ts:56](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/Server.ts#L56)
