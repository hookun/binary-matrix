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

* [encode](binarymatrix.md#encode)
* [get](binarymatrix.md#get)
* [isSameAs](binarymatrix.md#issameas)
* [list](binarymatrix.md#list)
* [listBit](binarymatrix.md#listbit)
* [paste](binarymatrix.md#paste)
* [set](binarymatrix.md#set)
* [setExternalBit](binarymatrix.md#private-setexternalbit)
* [setInternalBit](binarymatrix.md#private-setinternalbit)
* [toString](binarymatrix.md#tostring)
* [decode](binarymatrix.md#static-decode)
* [fromDimension](binarymatrix.md#static-fromdimension)
* [fromSize](binarymatrix.md#static-fromsize)
* [fromString](binarymatrix.md#static-fromstring)

## Constructors

###  constructor

\+ **new BinaryMatrix**(`size`: [Size](../README.md#size), `buffer`: ArrayBuffer): *[BinaryMatrix](binarymatrix.md)*

*Defined in [BinaryMatrix.ts:68](https://github.com/hookun/binary-matrix/blob/138a2a4/src/BinaryMatrix.ts#L68)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`size` | [Size](../README.md#size) | - |
`buffer` | ArrayBuffer | createBufferFromBitLength(sizeToBitLength(size)) |

**Returns:** *[BinaryMatrix](binarymatrix.md)*

## Properties

### `Private` `Optional` _bitLength

• **_bitLength**? : *undefined | number*

*Defined in [BinaryMatrix.ts:23](https://github.com/hookun/binary-matrix/blob/138a2a4/src/BinaryMatrix.ts#L23)*

___

### `Readonly` buffer

• **buffer**: *ArrayBuffer*

*Defined in [BinaryMatrix.ts:21](https://github.com/hookun/binary-matrix/blob/138a2a4/src/BinaryMatrix.ts#L21)*

___

### `Readonly` size

• **size**: *[Size](../README.md#size)*

*Defined in [BinaryMatrix.ts:19](https://github.com/hookun/binary-matrix/blob/138a2a4/src/BinaryMatrix.ts#L19)*

## Accessors

###  bitLength

• **get bitLength**(): *number*

*Defined in [BinaryMatrix.ts:82](https://github.com/hookun/binary-matrix/blob/138a2a4/src/BinaryMatrix.ts#L82)*

**Returns:** *number*

## Methods

###  encode

▸ **encode**(): *ArrayBuffer*

*Defined in [BinaryMatrix.ts:161](https://github.com/hookun/binary-matrix/blob/138a2a4/src/BinaryMatrix.ts#L161)*

**Returns:** *ArrayBuffer*

___

###  get

▸ **get**(`indices`: [Indices](../README.md#indices)): *boolean*

*Defined in [BinaryMatrix.ts:90](https://github.com/hookun/binary-matrix/blob/138a2a4/src/BinaryMatrix.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | [Indices](../README.md#indices) |

**Returns:** *boolean*

___

###  isSameAs

▸ **isSameAs**(`anotherMatrix`: [BinaryMatrix](binarymatrix.md)): *boolean*

*Defined in [BinaryMatrix.ts:78](https://github.com/hookun/binary-matrix/blob/138a2a4/src/BinaryMatrix.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`anotherMatrix` | [BinaryMatrix](binarymatrix.md) |

**Returns:** *boolean*

___

###  list

▸ **list**(`state`: boolean): *Generator‹[Indices](../README.md#indices)›*

*Defined in [BinaryMatrix.ts:139](https://github.com/hookun/binary-matrix/blob/138a2a4/src/BinaryMatrix.ts#L139)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | boolean |

**Returns:** *Generator‹[Indices](../README.md#indices)›*

___

###  listBit

▸ **listBit**(): *Generator‹[boolean, [Indices](../README.md#indices)]›*

*Defined in [BinaryMatrix.ts:146](https://github.com/hookun/binary-matrix/blob/138a2a4/src/BinaryMatrix.ts#L146)*

**Returns:** *Generator‹[boolean, [Indices](../README.md#indices)]›*

___

###  paste

▸ **paste**(`patch`: [BinaryMatrix](binarymatrix.md), `pos`: [Indices](../README.md#indices)): *[BinaryMatrix](binarymatrix.md)*

*Defined in [BinaryMatrix.ts:122](https://github.com/hookun/binary-matrix/blob/138a2a4/src/BinaryMatrix.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`patch` | [BinaryMatrix](binarymatrix.md) |
`pos` | [Indices](../README.md#indices) |

**Returns:** *[BinaryMatrix](binarymatrix.md)*

___

###  set

▸ **set**(`indices`: [Indices](../README.md#indices), `state`: boolean): *[BinaryMatrix](binarymatrix.md)*

*Defined in [BinaryMatrix.ts:94](https://github.com/hookun/binary-matrix/blob/138a2a4/src/BinaryMatrix.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | [Indices](../README.md#indices) |
`state` | boolean |

**Returns:** *[BinaryMatrix](binarymatrix.md)*

___

### `Private` setExternalBit

▸ **setExternalBit**(`__namedParameters`: object, `indices`: [Indices](../README.md#indices), `state`: boolean): *[BinaryMatrix](binarymatrix.md)*

*Defined in [BinaryMatrix.ts:114](https://github.com/hookun/binary-matrix/blob/138a2a4/src/BinaryMatrix.ts#L114)*

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

*Defined in [BinaryMatrix.ts:105](https://github.com/hookun/binary-matrix/blob/138a2a4/src/BinaryMatrix.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | [Indices](../README.md#indices) |
`state` | boolean |

**Returns:** *[BinaryMatrix](binarymatrix.md)*

___

###  toString

▸ **toString**(): *string*

*Defined in [BinaryMatrix.ts:157](https://github.com/hookun/binary-matrix/blob/138a2a4/src/BinaryMatrix.ts#L157)*

**Returns:** *string*

___

### `Static` decode

▸ **decode**(`encoded`: ArrayBuffer): *[BinaryMatrix](binarymatrix.md)*

*Defined in [BinaryMatrix.ts:50](https://github.com/hookun/binary-matrix/blob/138a2a4/src/BinaryMatrix.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`encoded` | ArrayBuffer |

**Returns:** *[BinaryMatrix](binarymatrix.md)*

___

### `Static` fromDimension

▸ **fromDimension**(`dimension`: number): *[BinaryMatrix](binarymatrix.md)*

*Defined in [BinaryMatrix.ts:25](https://github.com/hookun/binary-matrix/blob/138a2a4/src/BinaryMatrix.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`dimension` | number |

**Returns:** *[BinaryMatrix](binarymatrix.md)*

___

### `Static` fromSize

▸ **fromSize**(`size`: [Size](../README.md#size)): *[BinaryMatrix](binarymatrix.md)*

*Defined in [BinaryMatrix.ts:29](https://github.com/hookun/binary-matrix/blob/138a2a4/src/BinaryMatrix.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | [Size](../README.md#size) |

**Returns:** *[BinaryMatrix](binarymatrix.md)*

___

### `Static` fromString

▸ **fromString**(`rows`: Array‹string›): *[BinaryMatrix](binarymatrix.md)*

*Defined in [BinaryMatrix.ts:33](https://github.com/hookun/binary-matrix/blob/138a2a4/src/BinaryMatrix.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`rows` | Array‹string› |

**Returns:** *[BinaryMatrix](binarymatrix.md)*
