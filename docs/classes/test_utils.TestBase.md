[@adityhegde/typescript-framework](../README.md) / [Modules](../modules.md) / [test-utils](../modules/test_utils.md) / TestBase

# Class: TestBase

[test-utils](../modules/test_utils.md).TestBase

## Hierarchy

- **`TestBase`**

  ↳ [`JestTestBase`](test_utils_jest.JestTestBase.md)

  ↳ [`MochaTestBase`](test_utils_mocha.MochaTestBase.md)

## Table of contents

### Constructors

- [constructor](test_utils.TestBase.md#constructor)

### Properties

- [sandbox](test_utils.TestBase.md#sandbox)
- [suiteTitle](test_utils.TestBase.md#suitetitle)
- [testsStarted](test_utils.TestBase.md#testsstarted)
- [\_testHookData](test_utils.TestBase.md#_testhookdata)

### Methods

- [\_afterEachWrapper](test_utils.TestBase.md#_aftereachwrapper)
- [\_afterWrapper](test_utils.TestBase.md#_afterwrapper)
- [\_beforeEachWrapper](test_utils.TestBase.md#_beforeeachwrapper)
- [\_beforeWrapper](test_utils.TestBase.md#_beforewrapper)
- [\_test](test_utils.TestBase.md#_test)
- [declareAfter](test_utils.TestBase.md#declareafter)
- [declareAfterEach](test_utils.TestBase.md#declareaftereach)
- [declareBefore](test_utils.TestBase.md#declarebefore)
- [declareBeforeEach](test_utils.TestBase.md#declarebeforeeach)
- [declareSuite](test_utils.TestBase.md#declaresuite)
- [declareTest](test_utils.TestBase.md#declaretest)
- [registerDataProvider](test_utils.TestBase.md#registerdataprovider)
- [registerTest](test_utils.TestBase.md#registertest)
- [test](test_utils.TestBase.md#test)
- [AfterEachTest](test_utils.TestBase.md#aftereachtest)
- [AfterSuite](test_utils.TestBase.md#aftersuite)
- [BeforeEachTest](test_utils.TestBase.md#beforeeachtest)
- [BeforeSuite](test_utils.TestBase.md#beforesuite)
- [StaticSuite](test_utils.TestBase.md#staticsuite)
- [Suite](test_utils.TestBase.md#suite)
- [Test](test_utils.TestBase.md#test)
- [createTestHookData](test_utils.TestBase.md#createtesthookdata)

## Constructors

### constructor

• **new TestBase**(`suiteTitle`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `suiteTitle` | `string` |

#### Defined in

[src/test-utils/TestBase.ts:42](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L42)

## Properties

### sandbox

• `Protected` **sandbox**: `any`

#### Defined in

[src/test-utils/TestBase.ts:37](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L37)

___

### suiteTitle

• `Protected` `Readonly` **suiteTitle**: `string`

#### Defined in

[src/test-utils/TestBase.ts:40](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L40)

___

### testsStarted

• `Private` **testsStarted**: `boolean` = `false`

#### Defined in

[src/test-utils/TestBase.ts:39](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L39)

___

### \_testHookData

▪ `Static` `Protected` **\_testHookData**: `TestHookData`

#### Defined in

[src/test-utils/TestBase.ts:35](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L35)

## Methods

### \_afterEachWrapper

▸ `Private` **_afterEachWrapper**(): `Promise`<`void`\>

**`internal`**

#### Returns

`Promise`<`void`\>

#### Defined in

[src/test-utils/TestBase.ts:232](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L232)

___

### \_afterWrapper

▸ `Private` **_afterWrapper**(): `Promise`<`void`\>

**`internal`**

#### Returns

`Promise`<`void`\>

#### Defined in

[src/test-utils/TestBase.ts:242](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L242)

___

### \_beforeEachWrapper

▸ `Private` **_beforeEachWrapper**(): `Promise`<`void`\>

**`internal`**

#### Returns

`Promise`<`void`\>

#### Defined in

[src/test-utils/TestBase.ts:189](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L189)

___

### \_beforeWrapper

▸ `Private` **_beforeWrapper**(): `Promise`<`void`\>

**`internal`**

#### Returns

`Promise`<`void`\>

#### Defined in

[src/test-utils/TestBase.ts:177](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L177)

___

### \_test

▸ `Private` **_test**(): `void`

**`internal`**

#### Returns

`void`

#### Defined in

[src/test-utils/TestBase.ts:149](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L149)

___

### declareAfter

▸ `Protected` `Abstract` **declareAfter**(`afterCallback`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `afterCallback` | () => `Promise`<`void`\> |

#### Returns

`any`

#### Defined in

[src/test-utils/TestBase.ts:144](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L144)

___

### declareAfterEach

▸ `Protected` `Abstract` **declareAfterEach**(`afterEachCallback`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `afterEachCallback` | () => `Promise`<`void`\> |

#### Returns

`any`

#### Defined in

[src/test-utils/TestBase.ts:140](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L140)

___

### declareBefore

▸ `Protected` `Abstract` **declareBefore**(`beforeCallback`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `beforeCallback` | () => `Promise`<`void`\> |

#### Returns

`any`

#### Defined in

[src/test-utils/TestBase.ts:128](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L128)

___

### declareBeforeEach

▸ `Protected` `Abstract` **declareBeforeEach**(`beforeEachCallback`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `beforeEachCallback` | () => `Promise`<`void`\> |

#### Returns

`any`

#### Defined in

[src/test-utils/TestBase.ts:132](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L132)

___

### declareSuite

▸ `Protected` `Abstract` **declareSuite**(`suiteTitle`, `suiteCallback`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `suiteTitle` | `string` |
| `suiteCallback` | () => `void` |

#### Returns

`any`

#### Defined in

[src/test-utils/TestBase.ts:124](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L124)

___

### declareTest

▸ `Protected` `Abstract` **declareTest**(`testTitle`, `testCallback`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `testTitle` | `string` |
| `testCallback` | () => `Promise`<`void`\> |

#### Returns

`any`

#### Defined in

[src/test-utils/TestBase.ts:136](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L136)

___

### registerDataProvider

▸ `Private` **registerDataProvider**(`data`, `testParams`): `void`

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`DataProviderData`](../modules/test_utils.md#dataproviderdata)<`any`\> |
| `testParams` | `TestParams` |

#### Returns

`void`

#### Defined in

[src/test-utils/TestBase.ts:214](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L214)

___

### registerTest

▸ `Private` **registerTest**(`testParams`): `void`

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `testParams` | `TestParams` |

#### Returns

`void`

#### Defined in

[src/test-utils/TestBase.ts:201](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L201)

___

### test

▸ **test**(): `void`

#### Returns

`void`

#### Defined in

[src/test-utils/TestBase.ts:114](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L114)

___

### AfterEachTest

▸ `Static` **AfterEachTest**(): (`target`: [`TestBase`](test_utils.TestBase.md), `propertyKey`: `string`) => `void`

#### Returns

`fn`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`TestBase`](test_utils.TestBase.md) |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

[src/test-utils/TestBase.ts:95](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L95)

___

### AfterSuite

▸ `Static` **AfterSuite**(): (`target`: [`TestBase`](test_utils.TestBase.md), `propertyKey`: `string`) => `void`

#### Returns

`fn`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`TestBase`](test_utils.TestBase.md) |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

[src/test-utils/TestBase.ts:86](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L86)

___

### BeforeEachTest

▸ `Static` **BeforeEachTest**(): (`target`: [`TestBase`](test_utils.TestBase.md), `propertyKey`: `string`) => `void`

#### Returns

`fn`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`TestBase`](test_utils.TestBase.md) |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

[src/test-utils/TestBase.ts:77](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L77)

___

### BeforeSuite

▸ `Static` **BeforeSuite**(): (`target`: [`TestBase`](test_utils.TestBase.md), `propertyKey`: `string`) => `void`

#### Returns

`fn`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`TestBase`](test_utils.TestBase.md) |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

[src/test-utils/TestBase.ts:68](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L68)

___

### StaticSuite

▸ `Static` **StaticSuite**(`constructor`): `void`

Have to be explicitly instantiated and tests have to be started.
Useful when the test class is parameterised and multiple instances can exist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | `any` |

#### Returns

`void`

#### Defined in

[src/test-utils/TestBase.ts:60](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L60)

___

### Suite

▸ `Static` **Suite**(`constructor`): `void`

Automatically adds the tests for the class. Useful when the test class is standalone.

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | `any` |

#### Returns

`void`

#### Defined in

[src/test-utils/TestBase.ts:49](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L49)

___

### Test

▸ `Static` **Test**(`dataProvider?`): (`target`: [`TestBase`](test_utils.TestBase.md), `propertyKey`: `string`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataProvider?` | `string` |

#### Returns

`fn`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`TestBase`](test_utils.TestBase.md) |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

[src/test-utils/TestBase.ts:104](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L104)

___

### createTestHookData

▸ `Static` `Private` **createTestHookData**(`target`): typeof [`TestBase`](test_utils.TestBase.md)

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

typeof [`TestBase`](test_utils.TestBase.md)

#### Defined in

[src/test-utils/TestBase.ts:254](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L254)
