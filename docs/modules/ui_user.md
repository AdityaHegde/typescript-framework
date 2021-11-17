[@adityahegde/typescript-framework](../README.md) / [Modules](../modules.md) / ui/user

# Module: ui/user

## Table of contents

### Type aliases

- [EndpointOptions](ui_user.md#endpointoptions)
- [UserContextType](ui_user.md#usercontexttype)

### Variables

- [EndpointOptionsDefault](ui_user.md#endpointoptionsdefault)
- [UserContext](ui_user.md#usercontext)

### Functions

- [Login](ui_user.md#login)
- [RestrictAccess](ui_user.md#restrictaccess)
- [Signup](ui_user.md#signup)
- [UserDisplay](ui_user.md#userdisplay)
- [UserDisplayComponent](ui_user.md#userdisplaycomponent)
- [useUserContext](ui_user.md#useusercontext)

## Type aliases

### EndpointOptions

Ƭ **EndpointOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authBase?` | `string` |
| `login?` | `string` |
| `loginRedirect?` | `string` |
| `logout?` | `string` |
| `redirect?` | `string` |
| `signup?` | `string` |
| `user?` | `string` |

#### Defined in

[src/ui/user/UserContext.ts:15](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/user/UserContext.ts#L15)

___

### UserContextType

Ƭ **UserContextType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `user` | [`UserModel`](../classes/models.UserModel.md) |
| `userModel` | typeof [`UserModel`](../classes/models.UserModel.md) |
| `login` | (`userData`: `any`) => `Promise`<`void`\> |
| `logout` | () => `Promise`<`void`\> |
| `signup` | (`userData`: `any`) => `Promise`<`void`\> |

#### Defined in

[src/ui/user/UserContext.ts:7](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/user/UserContext.ts#L7)

## Variables

### EndpointOptionsDefault

• **EndpointOptionsDefault**: [`EndpointOptions`](ui_user.md#endpointoptions)

#### Defined in

[src/ui/user/UserContext.ts:24](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/user/UserContext.ts#L24)

___

### UserContext

• **UserContext**: `Context`<[`UserContextType`](ui_user.md#usercontexttype)\>

#### Defined in

[src/ui/user/UserContext.ts:96](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/user/UserContext.ts#L96)

## Functions

### Login

▸ **Login**(): `Element`

#### Returns

`Element`

#### Defined in

[src/ui/user/Login.tsx:7](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/user/Login.tsx#L7)

___

### RestrictAccess

▸ **RestrictAccess**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `PropsWithChildren`<`RestrictAccessProps`\> |

#### Returns

`Element`

#### Defined in

[src/ui/user/RestrictAccess.tsx:8](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/user/RestrictAccess.tsx#L8)

___

### Signup

▸ **Signup**(): `Element`

#### Returns

`Element`

#### Defined in

[src/ui/user/Signup.tsx:8](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/user/Signup.tsx#L8)

___

### UserDisplay

▸ **UserDisplay**(): `Element`

#### Returns

`Element`

#### Defined in

[src/ui/user/UserDisplay.tsx:15](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/user/UserDisplay.tsx#L15)

___

### UserDisplayComponent

▸ **UserDisplayComponent**(): `Element`

#### Returns

`Element`

#### Defined in

[src/ui/user/UserDisplay.tsx:6](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/user/UserDisplay.tsx#L6)

___

### useUserContext

▸ **useUserContext**(`userModel`, `modelClient`, `endpointArgOpts?`): [`UserContextType`](ui_user.md#usercontexttype)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `userModel` | typeof [`UserModel`](../classes/models.UserModel.md) | `undefined` |
| `modelClient` | [`ModelClient`](../classes/ui_store.ModelClient.md) | `undefined` |
| `endpointArgOpts` | [`EndpointOptions`](ui_user.md#endpointoptions) | `EndpointOptionsDefault` |

#### Returns

[`UserContextType`](ui_user.md#usercontexttype)

#### Defined in

[src/ui/user/UserContext.ts:34](https://github.com/AdityaHegde/typescript-framework/blob/3b13972/src/ui/user/UserContext.ts#L34)
