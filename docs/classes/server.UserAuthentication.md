[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / [server](../modules/server.md) / UserAuthentication

# Class: UserAuthentication

[server](../modules/server.md).UserAuthentication

## Hierarchy

- [`LoggerBase`](server.LoggerBase.md)

  ↳ **`UserAuthentication`**

## Table of contents

### Constructors

- [constructor](server.UserAuthentication.md#constructor)

### Properties

- [adminChecker](server.UserAuthentication.md#adminchecker)
- [logger](server.UserAuthentication.md#logger)
- [userApiRoute](server.UserAuthentication.md#userapiroute)
- [userDataModel](server.UserAuthentication.md#userdatamodel)
- [userInviteClass](server.UserAuthentication.md#userinviteclass)
- [userModelClass](server.UserAuthentication.md#usermodelclass)

### Methods

- [claimAdmin](server.UserAuthentication.md#claimadmin)
- [getUser](server.UserAuthentication.md#getuser)
- [getUserJson](server.UserAuthentication.md#getuserjson)
- [login](server.UserAuthentication.md#login)
- [queryUser](server.UserAuthentication.md#queryuser)
- [signup](server.UserAuthentication.md#signup)
- [updateUserRole](server.UserAuthentication.md#updateuserrole)

## Constructors

### constructor

• **new UserAuthentication**(`userDataModel`, `userModelClass`, `userInviteClass`, `userApiRoute`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `userDataModel` | [`DataStoreModel`](server.DataStoreModel.md) |
| `userModelClass` | typeof [`UserModel`](models.UserModel.md) |
| `userInviteClass` | typeof [`UserInvite`](models.UserInvite.md) |
| `userApiRoute` | [`Route`](server.Route.md) |

#### Overrides

[LoggerBase](server.LoggerBase.md).[constructor](server.LoggerBase.md#constructor)

#### Defined in

[src/server/authentication/UserAuthentication.ts:20](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/authentication/UserAuthentication.ts#L20)

## Properties

### adminChecker

• `Private` **adminChecker**: `any`

#### Defined in

[src/server/authentication/UserAuthentication.ts:18](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/authentication/UserAuthentication.ts#L18)

___

### logger

• `Protected` `Readonly` **logger**: `Logger`

#### Inherited from

[LoggerBase](server.LoggerBase.md).[logger](server.LoggerBase.md#logger)

#### Defined in

[src/server/logging/LoggerBase.ts:11](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/logging/LoggerBase.ts#L11)

___

### userApiRoute

• `Private` **userApiRoute**: [`Route`](server.Route.md)

#### Defined in

[src/server/authentication/UserAuthentication.ts:16](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/authentication/UserAuthentication.ts#L16)

___

### userDataModel

• `Private` **userDataModel**: [`DataStoreModel`](server.DataStoreModel.md)

#### Defined in

[src/server/authentication/UserAuthentication.ts:13](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/authentication/UserAuthentication.ts#L13)

___

### userInviteClass

• `Private` **userInviteClass**: typeof [`UserInvite`](models.UserInvite.md)

#### Defined in

[src/server/authentication/UserAuthentication.ts:15](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/authentication/UserAuthentication.ts#L15)

___

### userModelClass

• `Private` **userModelClass**: typeof [`UserModel`](models.UserModel.md)

#### Defined in

[src/server/authentication/UserAuthentication.ts:14](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/authentication/UserAuthentication.ts#L14)

## Methods

### claimAdmin

▸ **claimAdmin**(`user`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `any` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/server/authentication/UserAuthentication.ts:60](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/authentication/UserAuthentication.ts#L60)

___

### getUser

▸ **getUser**(`userId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/server/authentication/UserAuthentication.ts:100](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/authentication/UserAuthentication.ts#L100)

___

### getUserJson

▸ **getUserJson**(`req`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `any` |

#### Returns

`string`

#### Defined in

[src/server/authentication/UserAuthentication.ts:104](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/authentication/UserAuthentication.ts#L104)

___

### login

▸ **login**(`userJson`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userJson` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/server/authentication/UserAuthentication.ts:49](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/authentication/UserAuthentication.ts#L49)

___

### queryUser

▸ `Private` **queryUser**(`userJson`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userJson` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/server/authentication/UserAuthentication.ts:110](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/authentication/UserAuthentication.ts#L110)

___

### signup

▸ **signup**(`userJson`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userJson` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/server/authentication/UserAuthentication.ts:29](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/authentication/UserAuthentication.ts#L29)

___

### updateUserRole

▸ **updateUserRole**(`forUser`, `newRole`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `forUser` | `any` |
| `newRole` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/server/authentication/UserAuthentication.ts:80](https://github.com/AdityaHegde/typescript-framework/blob/7ced1c3/src/server/authentication/UserAuthentication.ts#L80)
