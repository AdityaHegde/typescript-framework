[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / [server](../modules/server.md) / Authentication

# Class: Authentication

[server](../modules/server.md).Authentication

## Hierarchy

- [`LoggerBase`](server.LoggerBase.md)

  ↳ **`Authentication`**

  ↳↳ [`JwtAuthentication`](server_authentication_jwt.JwtAuthentication.md)

  ↳↳ [`SessionAuthentication`](server_authentication_session.SessionAuthentication.md)

## Table of contents

### Constructors

- [constructor](server.Authentication.md#constructor)

### Properties

- [config](server.Authentication.md#config)
- [logger](server.Authentication.md#logger)
- [userAuthentication](server.Authentication.md#userauthentication)
- [userInviteClass](server.Authentication.md#userinviteclass)
- [userModelClass](server.Authentication.md#usermodelclass)

### Methods

- [claimAdmin](server.Authentication.md#claimadmin)
- [init](server.Authentication.md#init)
- [initAuth](server.Authentication.md#initauth)
- [login](server.Authentication.md#login)
- [logout](server.Authentication.md#logout)
- [parseUser](server.Authentication.md#parseuser)
- [restrict](server.Authentication.md#restrict)
- [signup](server.Authentication.md#signup)
- [unauthorisedResponse](server.Authentication.md#unauthorisedresponse)

## Constructors

### constructor

• **new Authentication**(`config`, `userModelClass`, `userInviteClass`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`AuthenticationConfig`](server.AuthenticationConfig.md) |
| `userModelClass` | typeof [`UserModel`](models.UserModel.md) |
| `userInviteClass` | typeof [`UserInvite`](models.UserInvite.md) |

#### Overrides

[LoggerBase](server.LoggerBase.md).[constructor](server.LoggerBase.md#constructor)

#### Defined in

[src/server/authentication/Authentication.ts:16](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/authentication/Authentication.ts#L16)

## Properties

### config

• `Protected` **config**: [`AuthenticationConfig`](server.AuthenticationConfig.md)

#### Defined in

[src/server/authentication/Authentication.ts:11](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/authentication/Authentication.ts#L11)

___

### logger

• `Protected` `Readonly` **logger**: `Logger`

#### Inherited from

[LoggerBase](server.LoggerBase.md).[logger](server.LoggerBase.md#logger)

#### Defined in

[src/server/logging/LoggerBase.ts:11](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/logging/LoggerBase.ts#L11)

___

### userAuthentication

• `Protected` **userAuthentication**: [`UserAuthentication`](server.UserAuthentication.md)

#### Defined in

[src/server/authentication/Authentication.ts:14](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/authentication/Authentication.ts#L14)

___

### userInviteClass

• `Protected` **userInviteClass**: typeof [`UserInvite`](models.UserInvite.md)

#### Defined in

[src/server/authentication/Authentication.ts:13](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/authentication/Authentication.ts#L13)

___

### userModelClass

• `Protected` **userModelClass**: typeof [`UserModel`](models.UserModel.md)

#### Defined in

[src/server/authentication/Authentication.ts:12](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/authentication/Authentication.ts#L12)

## Methods

### claimAdmin

▸ **claimAdmin**(`userJson`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userJson` | `any` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/server/authentication/Authentication.ts:97](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/authentication/Authentication.ts#L97)

___

### init

▸ **init**(`app`, `dataStore`, `routeFactory`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `any` |
| `dataStore` | [`DataStore`](server.DataStore.md) |
| `routeFactory` | [`RouteFactory`](server.RouteFactory.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/server/authentication/Authentication.ts:25](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/authentication/Authentication.ts#L25)

___

### initAuth

▸ `Abstract` **initAuth**(`app`, `dataStore`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `any` |
| `dataStore` | [`DataStore`](server.DataStore.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/server/authentication/Authentication.ts:23](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/authentication/Authentication.ts#L23)

___

### login

▸ `Protected` `Abstract` **login**(`req`, `res`, `next`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `any` |
| `res` | `any` |
| `next` | `any` |

#### Returns

`any`

#### Defined in

[src/server/authentication/Authentication.ts:103](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/authentication/Authentication.ts#L103)

___

### logout

▸ `Protected` `Abstract` **logout**(`req`, `res`, `next`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `any` |
| `res` | `any` |
| `next` | `any` |

#### Returns

`any`

#### Defined in

[src/server/authentication/Authentication.ts:104](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/authentication/Authentication.ts#L104)

___

### parseUser

▸ `Protected` `Abstract` **parseUser**(`req`, `res`, `next`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `any` |
| `res` | `any` |
| `next` | `any` |

#### Returns

`any`

#### Defined in

[src/server/authentication/Authentication.ts:105](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/authentication/Authentication.ts#L105)

___

### restrict

▸ **restrict**(`role?`): (`req`: `any`, `res`: `any`, `next`: `any`) => `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `role?` | `any` |

#### Returns

`fn`

▸ (`req`, `res`, `next`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `any` |
| `res` | `any` |
| `next` | `any` |

##### Returns

`any`

#### Defined in

[src/server/authentication/Authentication.ts:84](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/authentication/Authentication.ts#L84)

___

### signup

▸ `Protected` `Abstract` **signup**(`req`, `res`, `next`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `any` |
| `res` | `any` |
| `next` | `any` |

#### Returns

`any`

#### Defined in

[src/server/authentication/Authentication.ts:102](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/authentication/Authentication.ts#L102)

___

### unauthorisedResponse

▸ `Protected` **unauthorisedResponse**(`res`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `res` | `any` |

#### Returns

`void`

#### Defined in

[src/server/authentication/Authentication.ts:107](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/authentication/Authentication.ts#L107)
