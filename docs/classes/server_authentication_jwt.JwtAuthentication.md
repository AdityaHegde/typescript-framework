[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / [server/authentication/jwt](../modules/server_authentication_jwt.md) / JwtAuthentication

# Class: JwtAuthentication

[server/authentication/jwt](../modules/server_authentication_jwt.md).JwtAuthentication

## Hierarchy

- [`Authentication`](server.Authentication.md)

  ↳ **`JwtAuthentication`**

## Table of contents

### Constructors

- [constructor](server_authentication_jwt.JwtAuthentication.md#constructor)

### Properties

- [config](server_authentication_jwt.JwtAuthentication.md#config)
- [logger](server_authentication_jwt.JwtAuthentication.md#logger)
- [userAuthentication](server_authentication_jwt.JwtAuthentication.md#userauthentication)
- [userInviteClass](server_authentication_jwt.JwtAuthentication.md#userinviteclass)
- [userModelClass](server_authentication_jwt.JwtAuthentication.md#usermodelclass)

### Methods

- [claimAdmin](server_authentication_jwt.JwtAuthentication.md#claimadmin)
- [init](server_authentication_jwt.JwtAuthentication.md#init)
- [initAuth](server_authentication_jwt.JwtAuthentication.md#initauth)
- [login](server_authentication_jwt.JwtAuthentication.md#login)
- [logout](server_authentication_jwt.JwtAuthentication.md#logout)
- [parseUser](server_authentication_jwt.JwtAuthentication.md#parseuser)
- [restrict](server_authentication_jwt.JwtAuthentication.md#restrict)
- [saveJwtToken](server_authentication_jwt.JwtAuthentication.md#savejwttoken)
- [signup](server_authentication_jwt.JwtAuthentication.md#signup)
- [unauthorisedResponse](server_authentication_jwt.JwtAuthentication.md#unauthorisedresponse)

## Constructors

### constructor

• **new JwtAuthentication**(`config`, `userModelClass`, `userInviteClass`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`AuthenticationConfig`](server.AuthenticationConfig.md) |
| `userModelClass` | typeof [`UserModel`](models.UserModel.md) |
| `userInviteClass` | typeof [`UserInvite`](models.UserInvite.md) |

#### Inherited from

[Authentication](server.Authentication.md).[constructor](server.Authentication.md#constructor)

#### Defined in

[src/server/authentication/Authentication.ts:16](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/authentication/Authentication.ts#L16)

## Properties

### config

• `Protected` **config**: [`AuthenticationConfig`](server.AuthenticationConfig.md)

#### Inherited from

[Authentication](server.Authentication.md).[config](server.Authentication.md#config)

#### Defined in

[src/server/authentication/Authentication.ts:11](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/authentication/Authentication.ts#L11)

___

### logger

• `Protected` `Readonly` **logger**: `Logger`

#### Inherited from

[Authentication](server.Authentication.md).[logger](server.Authentication.md#logger)

#### Defined in

[src/server/logging/LoggerBase.ts:11](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/logging/LoggerBase.ts#L11)

___

### userAuthentication

• `Protected` **userAuthentication**: [`UserAuthentication`](server.UserAuthentication.md)

#### Inherited from

[Authentication](server.Authentication.md).[userAuthentication](server.Authentication.md#userauthentication)

#### Defined in

[src/server/authentication/Authentication.ts:14](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/authentication/Authentication.ts#L14)

___

### userInviteClass

• `Protected` **userInviteClass**: typeof [`UserInvite`](models.UserInvite.md)

#### Inherited from

[Authentication](server.Authentication.md).[userInviteClass](server.Authentication.md#userinviteclass)

#### Defined in

[src/server/authentication/Authentication.ts:13](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/authentication/Authentication.ts#L13)

___

### userModelClass

• `Protected` **userModelClass**: typeof [`UserModel`](models.UserModel.md)

#### Inherited from

[Authentication](server.Authentication.md).[userModelClass](server.Authentication.md#usermodelclass)

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

#### Inherited from

[Authentication](server.Authentication.md).[claimAdmin](server.Authentication.md#claimadmin)

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

#### Inherited from

[Authentication](server.Authentication.md).[init](server.Authentication.md#init)

#### Defined in

[src/server/authentication/Authentication.ts:25](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/authentication/Authentication.ts#L25)

___

### initAuth

▸ **initAuth**(`app`, `dataStore`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `any` |
| `dataStore` | [`DataStore`](server.DataStore.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

[Authentication](server.Authentication.md).[initAuth](server.Authentication.md#initauth)

#### Defined in

[src/server/authentication/jwt/JwtAuthentication.ts:11](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/authentication/jwt/JwtAuthentication.ts#L11)

___

### login

▸ `Protected` **login**(`req`, `res`, `next`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `any` |
| `res` | `any` |
| `next` | `any` |

#### Returns

`Promise`<`void`\>

#### Overrides

[Authentication](server.Authentication.md).[login](server.Authentication.md#login)

#### Defined in

[src/server/authentication/jwt/JwtAuthentication.ts:19](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/authentication/jwt/JwtAuthentication.ts#L19)

___

### logout

▸ `Protected` **logout**(`req`, `res`, `next`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `any` |
| `res` | `any` |
| `next` | `any` |

#### Returns

`void`

#### Overrides

[Authentication](server.Authentication.md).[logout](server.Authentication.md#logout)

#### Defined in

[src/server/authentication/jwt/JwtAuthentication.ts:23](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/authentication/jwt/JwtAuthentication.ts#L23)

___

### parseUser

▸ `Protected` **parseUser**(`req`, `res`, `next`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `any` |
| `res` | `any` |
| `next` | `any` |

#### Returns

`void`

#### Overrides

[Authentication](server.Authentication.md).[parseUser](server.Authentication.md#parseuser)

#### Defined in

[src/server/authentication/jwt/JwtAuthentication.ts:43](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/authentication/jwt/JwtAuthentication.ts#L43)

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

#### Inherited from

[Authentication](server.Authentication.md).[restrict](server.Authentication.md#restrict)

#### Defined in

[src/server/authentication/Authentication.ts:84](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/authentication/Authentication.ts#L84)

___

### saveJwtToken

▸ `Private` **saveJwtToken**(`req`, `res`, `next`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `any` |
| `res` | `any` |
| `next` | `any` |

#### Returns

`void`

#### Defined in

[src/server/authentication/jwt/JwtAuthentication.ts:28](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/authentication/jwt/JwtAuthentication.ts#L28)

___

### signup

▸ `Protected` **signup**(`req`, `res`, `next`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `any` |
| `res` | `any` |
| `next` | `any` |

#### Returns

`void`

#### Overrides

[Authentication](server.Authentication.md).[signup](server.Authentication.md#signup)

#### Defined in

[src/server/authentication/jwt/JwtAuthentication.ts:15](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/authentication/jwt/JwtAuthentication.ts#L15)

___

### unauthorisedResponse

▸ `Protected` **unauthorisedResponse**(`res`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `res` | `any` |

#### Returns

`void`

#### Inherited from

[Authentication](server.Authentication.md).[unauthorisedResponse](server.Authentication.md#unauthorisedresponse)

#### Defined in

[src/server/authentication/Authentication.ts:107](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/server/authentication/Authentication.ts#L107)
