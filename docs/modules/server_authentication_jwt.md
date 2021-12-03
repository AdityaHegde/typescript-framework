[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / server/authentication/jwt

# Module: server/authentication/jwt

## Table of contents

### Classes

- [JwtAuthentication](../classes/server_authentication_jwt.JwtAuthentication.md)

### Functions

- [getJwtAuthentication](server_authentication_jwt.md#getjwtauthentication)

## Functions

### getJwtAuthentication

▸ **getJwtAuthentication**(`authConfig`, `routesConfig`, `userModel`, `userInvite?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `authConfig` | [`AuthenticationConfig`](../classes/server.AuthenticationConfig.md) | `undefined` |
| `routesConfig` | [`RoutesConfig`](../classes/server.RoutesConfig.md) | `undefined` |
| `userModel` | typeof [`UserModel`](../classes/models.UserModel.md) | `undefined` |
| `userInvite` | typeof [`UserInvite`](../classes/models.UserInvite.md) | `UserInvite` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `authentication` | [`JwtAuthentication`](../classes/server_authentication_jwt.JwtAuthentication.md) |
| `routeFactory` | [`RouteFactory`](../classes/server.RouteFactory.md) |

#### Defined in

[src/server/authentication/jwt/getJwtAuthentication.ts:8](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/server/authentication/jwt/getJwtAuthentication.ts#L8)
