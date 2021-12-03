[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / server/datastore/mongoose

# Module: server/datastore/mongoose

## Table of contents

### Classes

- [MongooseStore](../classes/server_datastore_mongoose.MongooseStore.md)
- [MongooseStoreModel](../classes/server_datastore_mongoose.MongooseStoreModel.md)
- [MongooseStoreModelFactory](../classes/server_datastore_mongoose.MongooseStoreModelFactory.md)

### Type aliases

- [MongooseConfig](server_datastore_mongoose.md#mongooseconfig)

### Functions

- [getMongooseStore](server_datastore_mongoose.md#getmongoosestore)

## Type aliases

### MongooseConfig

Ƭ **MongooseConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `connectionUrl` | `string` |
| `dbName` | `string` |

#### Defined in

[src/server/datastore/mongoose/MongooseStore.ts:7](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/server/datastore/mongoose/MongooseStore.ts#L7)

## Functions

### getMongooseStore

▸ **getMongooseStore**(`config`): [`MongooseStore`](../classes/server_datastore_mongoose.MongooseStore.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`MongooseConfig`](server_datastore_mongoose.md#mongooseconfig) |

#### Returns

[`MongooseStore`](../classes/server_datastore_mongoose.MongooseStore.md)

#### Defined in

[src/server/datastore/mongoose/getMongooseStore.ts:4](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/server/datastore/mongoose/getMongooseStore.ts#L4)
