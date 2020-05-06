[@hookun/binary-matrix](../README.md) › [BinaryMatrix](binarymatrix.md)

# Class: BinaryMatrix

## Hierarchy

* **BinaryMatrix**

## Index

### Constructors

* [constructor](binarymatrix.md#constructor)

### Properties

* [_bitLength](binarymatrix.md#private-optional-_bitlength)
* [buffer](binarymatrix.md#readonly-buffer)
* [size](binarymatrix.md#readonly-size)

### Accessors

* [bitLength](binarymatrix.md#bitlength)

### Methods

* [get](binarymatrix.md#get)
* [list](binarymatrix.md#list)
* [listBit](binarymatrix.md#listbit)
* [paste](binarymatrix.md#paste)
* [set](binarymatrix.md#set)
* [setExternalBit](binarymatrix.md#private-setexternalbit)
* [setInternalBit](binarymatrix.md#private-setinternalbit)
* [toString](binarymatrix.md#tostring)
* [fromDimension](binarymatrix.md#static-fromdimension)
* [fromSize](binarymatrix.md#static-fromsize)
* [fromString](binarymatrix.md#static-fromstring)

## Constructors

###  constructor

\+ **new BinaryMatrix**(`size`: [Size](../README.md#size), `buffer`: ArrayBuffer): *[BinaryMatrix](binarymatrix.md)*

*Defined in [BinaryMatrix.ts:45](https://github.com/hookun/binary-matrix/blob/07d078e/src/BinaryMatrix.ts#L45)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`size` | [Size](../README.md#size) | - |
`buffer` | ArrayBuffer | createBufferFromBitLength(sizeToBitLength(size)) |

**Returns:** *[BinaryMatrix](binarymatrix.md)*

## Properties

### `Private` `Optional` _bitLength

• **_bitLength**? : *undefined | number*

*Defined in [BinaryMatrix.ts:20](https://github.com/hookun/binary-matrix/blob/07d078e/src/BinaryMatrix.ts#L20)*

___

### `Readonly` buffer

• **buffer**: *ArrayBuffer*

*Defined in [BinaryMatrix.ts:18](https://github.com/hookun/binary-matrix/blob/07d078e/src/BinaryMatrix.ts#L18)*

___

### `Readonly` size

• **size**: *[Size](../README.md#size)*

*Defined in [BinaryMatrix.ts:16](https://github.com/hookun/binary-matrix/blob/07d078e/src/BinaryMatrix.ts#L16)*

## Accessors

###  bitLength

• **get bitLength**(): *number*

*Defined in [BinaryMatrix.ts:55](https://github.com/hookun/binary-matrix/blob/07d078e/src/BinaryMatrix.ts#L55)*

**Returns:** *number*

## Methods

###  get

▸ **get**(`indices`: [Indices](../README.md#indices)): *boolean*

*Defined in [BinaryMatrix.ts:63](https://github.com/hookun/binary-matrix/blob/07d078e/src/BinaryMatrix.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | [Indices](../README.md#indices) |

**Returns:** *boolean*

___

###  list

▸ **list**(`state`: boolean): *Generator‹[Indices](../README.md#indices)›*

*Defined in [BinaryMatrix.ts:112](https://github.com/hookun/binary-matrix/blob/07d078e/src/BinaryMatrix.ts#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | boolean |

**Returns:** *Generator‹[Indices](../README.md#indices)›*

___

###  listBit

▸ **listBit**(): *Generator‹[boolean, [Indices](../README.md#indices)]›*

*Defined in [BinaryMatrix.ts:119](https://github.com/hookun/binary-matrix/blob/07d078e/src/BinaryMatrix.ts#L119)*

**Returns:** *Generator‹[boolean, [Indices](../README.md#indices)]›*

___

###  paste

▸ **paste**(`patch`: [BinaryMatrix](binarymatrix.md), `pos`: [Indices](../README.md#indices)): *[BinaryMatrix](binarymatrix.md)*

*Defined in [BinaryMatrix.ts:95](https://github.com/hookun/binary-matrix/blob/07d078e/src/BinaryMatrix.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`patch` | [BinaryMatrix](binarymatrix.md) |
`pos` | [Indices](../README.md#indices) |

**Returns:** *[BinaryMatrix](binarymatrix.md)*

___

###  set

▸ **set**(`indices`: [Indices](../README.md#indices), `state`: boolean): *[BinaryMatrix](binarymatrix.md)*

*Defined in [BinaryMatrix.ts:67](https://github.com/hookun/binary-matrix/blob/07d078e/src/BinaryMatrix.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | [Indices](../README.md#indices) |
`state` | boolean |

**Returns:** *[BinaryMatrix](binarymatrix.md)*

___

### `Private` setExternalBit

▸ **setExternalBit**(`__namedParameters`: object, `indices`: [Indices](../README.md#indices), `state`: boolean): *[BinaryMatrix](binarymatrix.md)*

*Defined in [BinaryMatrix.ts:87](https://github.com/hookun/binary-matrix/blob/07d078e/src/BinaryMatrix.ts#L87)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`pos` | ReadonlyArray‹number› |
`size` | ReadonlyArray‹number› |

▪ **indices**: *[Indices](../README.md#indices)*

▪ **state**: *boolean*

**Returns:** *[BinaryMatrix](binarymatrix.md)*

___

### `Private` setInternalBit

▸ **setInternalBit**(`indices`: [Indices](../README.md#indices), `state`: boolean): *[BinaryMatrix](binarymatrix.md)*

*Defined in [BinaryMatrix.ts:78](https://github.com/hookun/binary-matrix/blob/07d078e/src/BinaryMatrix.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | [Indices](../README.md#indices) |
`state` | boolean |

**Returns:** *[BinaryMatrix](binarymatrix.md)*

___

###  toString

▸ **toString**(): *string*

*Defined in [BinaryMatrix.ts:130](https://github.com/hookun/binary-matrix/blob/07d078e/src/BinaryMatrix.ts#L130)*

**Returns:** *string*

___

### `Static` fromDimension

▸ **fromDimension**(`dimension`: number): *[BinaryMatrix](binarymatrix.md)*

*Defined in [BinaryMatrix.ts:22](https://github.com/hookun/binary-matrix/blob/07d078e/src/BinaryMatrix.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`dimension` | number |

**Returns:** *[BinaryMatrix](binarymatrix.md)*

___

### `Static` fromSize

▸ **fromSize**(`size`: [Size](../README.md#size)): *[BinaryMatrix](binarymatrix.md)*

*Defined in [BinaryMatrix.ts:26](https://github.com/hookun/binary-matrix/blob/07d078e/src/BinaryMatrix.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | [Size](../README.md#size) |

**Returns:** *[BinaryMatrix](binarymatrix.md)*

___

### `Static` fromString

▸ **fromString**(`rows`: Array‹string›): *[BinaryMatrix](binarymatrix.md)*

*Defined in [BinaryMatrix.ts:30](https://github.com/hookun/binary-matrix/blob/07d078e/src/BinaryMatrix.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`rows` | Array‹string› |

**Returns:** *[BinaryMatrix](binarymatrix.md)*
