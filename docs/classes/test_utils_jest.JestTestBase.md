[@adityhegde/typescript-framework](../README.md) / [Modules](../modules.md) / [test-utils/jest](../modules/test_utils_jest.md) / JestTestBase

# Class: JestTestBase

[test-utils/jest](../modules/test_utils_jest.md).JestTestBase

## Hierarchy

- [`TestBase`](test_utils.TestBase.md)

  ↳ **`JestTestBase`**

## Table of contents

### Constructors

- [constructor](test_utils_jest.JestTestBase.md#constructor)

### Properties

- [sandbox](test_utils_jest.JestTestBase.md#sandbox)
- [suiteTitle](test_utils_jest.JestTestBase.md#suitetitle)
- [\_testHookData](test_utils_jest.JestTestBase.md#_testhookdata)

### Methods

- [declareAfter](test_utils_jest.JestTestBase.md#declareafter)
- [declareAfterEach](test_utils_jest.JestTestBase.md#declareaftereach)
- [declareBefore](test_utils_jest.JestTestBase.md#declarebefore)
- [declareBeforeEach](test_utils_jest.JestTestBase.md#declarebeforeeach)
- [declareSuite](test_utils_jest.JestTestBase.md#declaresuite)
- [declareTest](test_utils_jest.JestTestBase.md#declaretest)
- [test](test_utils_jest.JestTestBase.md#test)
- [AfterEachTest](test_utils_jest.JestTestBase.md#aftereachtest)
- [AfterSuite](test_utils_jest.JestTestBase.md#aftersuite)
- [BeforeEachTest](test_utils_jest.JestTestBase.md#beforeeachtest)
- [BeforeSuite](test_utils_jest.JestTestBase.md#beforesuite)
- [StaticSuite](test_utils_jest.JestTestBase.md#staticsuite)
- [Suite](test_utils_jest.JestTestBase.md#suite)
- [Test](test_utils_jest.JestTestBase.md#test)

## Constructors

### constructor

• **new JestTestBase**(`suiteTitle`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `suiteTitle` | `string` |

#### Inherited from

[TestBase](test_utils.TestBase.md).[constructor](test_utils.TestBase.md#constructor)

#### Defined in

[src/test-utils/TestBase.ts:42](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L42)

## Properties

### sandbox

• `Protected` **sandbox**: `any`

#### Inherited from

[TestBase](test_utils.TestBase.md).[sandbox](test_utils.TestBase.md#sandbox)

#### Defined in

[src/test-utils/TestBase.ts:37](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L37)

___

### suiteTitle

• `Protected` `Readonly` **suiteTitle**: `string`

#### Inherited from

[TestBase](test_utils.TestBase.md).[suiteTitle](test_utils.TestBase.md#suitetitle)

#### Defined in

[src/test-utils/TestBase.ts:40](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L40)

___

### \_testHookData

▪ `Static` `Protected` **\_testHookData**: `TestHookData`

#### Inherited from

[TestBase](test_utils.TestBase.md).[_testHookData](test_utils.TestBase.md#_testhookdata)

#### Defined in

[src/test-utils/TestBase.ts:35](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L35)

## Methods

### declareAfter

▸ `Protected` **declareAfter**(`afterCallback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `afterCallback` | () => `Promise`<`void`\> |

#### Returns

`void`

#### Overrides

[TestBase](test_utils.TestBase.md).[declareAfter](test_utils.TestBase.md#declareafter)

#### Defined in

[src/test-utils/jest/JestTestBase.ts:50](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/jest/JestTestBase.ts#L50)

___

### declareAfterEach

▸ `Protected` **declareAfterEach**(`afterEachCallback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `afterEachCallback` | () => `Promise`<`void`\> |

#### Returns

`void`

#### Overrides

[TestBase](test_utils.TestBase.md).[declareAfterEach](test_utils.TestBase.md#declareaftereach)

#### Defined in

[src/test-utils/jest/JestTestBase.ts:42](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/jest/JestTestBase.ts#L42)

___

### declareBefore

▸ `Protected` **declareBefore**(`beforeCallback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `beforeCallback` | () => `Promise`<`void`\> |

#### Returns

`void`

#### Overrides

[TestBase](test_utils.TestBase.md).[declareBefore](test_utils.TestBase.md#declarebefore)

#### Defined in

[src/test-utils/jest/JestTestBase.ts:18](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/jest/JestTestBase.ts#L18)

___

### declareBeforeEach

▸ `Protected` **declareBeforeEach**(`beforeEachCallback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `beforeEachCallback` | () => `Promise`<`void`\> |

#### Returns

`void`

#### Overrides

[TestBase](test_utils.TestBase.md).[declareBeforeEach](test_utils.TestBase.md#declarebeforeeach)

#### Defined in

[src/test-utils/jest/JestTestBase.ts:26](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/jest/JestTestBase.ts#L26)

___

### declareSuite

▸ `Protected` **declareSuite**(`suiteTitle`, `suiteCallback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `suiteTitle` | `string` |
| `suiteCallback` | () => `void` |

#### Returns

`void`

#### Overrides

[TestBase](test_utils.TestBase.md).[declareSuite](test_utils.TestBase.md#declaresuite)

#### Defined in

[src/test-utils/jest/JestTestBase.ts:10](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/jest/JestTestBase.ts#L10)

___

### declareTest

▸ `Protected` **declareTest**(`testTitle`, `testCallback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `testTitle` | `string` |
| `testCallback` | () => `Promise`<`void`\> |

#### Returns

`void`

#### Overrides

[TestBase](test_utils.TestBase.md).[declareTest](test_utils.TestBase.md#declaretest)

#### Defined in

[src/test-utils/jest/JestTestBase.ts:34](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/jest/JestTestBase.ts#L34)

___

### test

▸ **test**(): `void`

#### Returns

`void`

#### Inherited from

[TestBase](test_utils.TestBase.md).[test](test_utils.TestBase.md#test)

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

#### Inherited from

[TestBase](test_utils.TestBase.md).[AfterEachTest](test_utils.TestBase.md#aftereachtest)

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

#### Inherited from

[TestBase](test_utils.TestBase.md).[AfterSuite](test_utils.TestBase.md#aftersuite)

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

#### Inherited from

[TestBase](test_utils.TestBase.md).[BeforeEachTest](test_utils.TestBase.md#beforeeachtest)

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

#### Inherited from

[TestBase](test_utils.TestBase.md).[BeforeSuite](test_utils.TestBase.md#beforesuite)

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

#### Inherited from

[TestBase](test_utils.TestBase.md).[StaticSuite](test_utils.TestBase.md#staticsuite)

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

#### Inherited from

[TestBase](test_utils.TestBase.md).[Suite](test_utils.TestBase.md#suite)

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

#### Inherited from

[TestBase](test_utils.TestBase.md).[Test](test_utils.TestBase.md#test)

#### Defined in

[src/test-utils/TestBase.ts:104](https://github.com/AdityaHegde/typescript-framework/blob/3d90755/src/test-utils/TestBase.ts#L104)
