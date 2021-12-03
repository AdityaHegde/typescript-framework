[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / server/authentication/session

# Module: server/authentication/session

## Table of contents

### Classes

- [SessionAuthentication](../classes/server_authentication_session.SessionAuthentication.md)

### Functions

- [getSessionAuthentication](server_authentication_session.md#getsessionauthentication)

## Functions

### getSessionAuthentication

▸ **getSessionAuthentication**(`authConfig`, `routesConfig`, `userModel`, `userInvite?`): `Object`

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
| `authentication` | [`SessionAuthentication`](../classes/server_authentication_session.SessionAuthentication.md) |
| `routeFactory` | [`RouteFactory`](../classes/server.RouteFactory.md) |

#### Defined in

[src/server/authentication/session/getSessionAuthentication.ts:8](https://github.com/AdityaHegde/typescript-framework/blob/8035b74/src/server/authentication/session/getSessionAuthentication.ts#L8)
