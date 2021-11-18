[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / [server](../modules/server.md) / DataStore

# Class: DataStore

[server](../modules/server.md).DataStore

## Hierarchy

- [`LoggerBase`](server.LoggerBase.md)

  ↳ **`DataStore`**

  ↳↳ [`MongooseStore`](server_datastore_mongoose.MongooseStore.md)

## Table of contents

### Constructors

- [constructor](server.DataStore.md#constructor)

### Properties

- [dataStoreModelFactory](server.DataStore.md#datastoremodelfactory)
- [logger](server.DataStore.md#logger)

### Methods

- [connect](server.DataStore.md#connect)
- [disconnect](server.DataStore.md#disconnect)
- [getSessionStore](server.DataStore.md#getsessionstore)

## Constructors

### constructor

• **new DataStore**(`dataStoreModelFactory`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataStoreModelFactory` | [`DataStoreModelFactory`](server.DataStoreModelFactory.md) |

#### Overrides

[LoggerBase](server.LoggerBase.md).[constructor](server.LoggerBase.md#constructor)

#### Defined in

[src/server/datastore/DataStore.ts:7](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/datastore/DataStore.ts#L7)

## Properties

### dataStoreModelFactory

• **dataStoreModelFactory**: [`DataStoreModelFactory`](server.DataStoreModelFactory.md)

#### Defined in

[src/server/datastore/DataStore.ts:5](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/datastore/DataStore.ts#L5)

___

### logger

• `Protected` `Readonly` **logger**: `Logger`

#### Inherited from

[LoggerBase](server.LoggerBase.md).[logger](server.LoggerBase.md#logger)

#### Defined in

[src/server/logging/LoggerBase.ts:11](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/logging/LoggerBase.ts#L11)

## Methods

### connect

▸ `Abstract` **connect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/server/datastore/DataStore.ts:12](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/datastore/DataStore.ts#L12)

___

### disconnect

▸ `Abstract` **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/server/datastore/DataStore.ts:13](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/datastore/DataStore.ts#L13)

___

### getSessionStore

▸ `Abstract` **getSessionStore**(): `any`

#### Returns

`any`

#### Defined in

[src/server/datastore/DataStore.ts:14](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/datastore/DataStore.ts#L14)
