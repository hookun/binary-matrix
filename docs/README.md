[@hookun/binary-matrix](README.md)

# @hookun/binary-matrix

## Index

### Classes

* [BinaryMatrix](classes/binarymatrix.md)

### Interfaces

* [Expansion](interfaces/expansion.md)

### Type aliases

* [Indices](README.md#indices)
* [Size](README.md#size)

### Functions

* [checkExpansion](README.md#const-checkexpansion)
* [indicesToOffset](README.md#const-indicestooffset)
* [isSame](README.md#const-issame)
* [isSameBuffer](README.md#const-issamebuffer)
* [isSameSize](README.md#const-issamesize)
* [offsetToIndices](README.md#const-offsettoindices)
* [sizeToBitLength](README.md#const-sizetobitlength)

## Type aliases

###  Indices

Ƭ **Indices**: *ReadonlyArray‹number›*

*Defined in [type.ts:2](https://github.com/hookun/binary-matrix/blob/8dc88a8/src/type.ts#L2)*

___

###  Size

Ƭ **Size**: *ReadonlyArray‹number›*

*Defined in [type.ts:1](https://github.com/hookun/binary-matrix/blob/8dc88a8/src/type.ts#L1)*

## Functions

### `Const` checkExpansion

▸ **checkExpansion**(`sizeList`: [Size](README.md#size), `indices`: [Indices](README.md#indices)): *[Expansion](interfaces/expansion.md) | null*

*Defined in [checkExpansion.ts:3](https://github.com/hookun/binary-matrix/blob/8dc88a8/src/checkExpansion.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`sizeList` | [Size](README.md#size) |
`indices` | [Indices](README.md#indices) |

**Returns:** *[Expansion](interfaces/expansion.md) | null*

___

### `Const` indicesToOffset

▸ **indicesToOffset**(`size`: [Size](README.md#size), `indices`: [Indices](README.md#indices)): *number*

*Defined in [indicesToOffset.ts:3](https://github.com/hookun/binary-matrix/blob/8dc88a8/src/indicesToOffset.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | [Size](README.md#size) |
`indices` | [Indices](README.md#indices) |

**Returns:** *number*

___

### `Const` isSame

▸ **isSame**(`a`: [BinaryMatrix](classes/binarymatrix.md), `b`: [BinaryMatrix](classes/binarymatrix.md)): *boolean*

*Defined in [isSame.ts:45](https://github.com/hookun/binary-matrix/blob/8dc88a8/src/isSame.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [BinaryMatrix](classes/binarymatrix.md) |
`b` | [BinaryMatrix](classes/binarymatrix.md) |

**Returns:** *boolean*

___

### `Const` isSameBuffer

▸ **isSameBuffer**(`a`: ArrayBuffer, `b`: ArrayBuffer, `bitLength`: number): *boolean*

*Defined in [isSame.ts:17](https://github.com/hookun/binary-matrix/blob/8dc88a8/src/isSame.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | ArrayBuffer |
`b` | ArrayBuffer |
`bitLength` | number |

**Returns:** *boolean*

___

### `Const` isSameSize

▸ **isSameSize**(`a`: [Size](README.md#size), `b`: [Size](README.md#size)): *boolean*

*Defined in [isSame.ts:5](https://github.com/hookun/binary-matrix/blob/8dc88a8/src/isSame.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Size](README.md#size) |
`b` | [Size](README.md#size) |

**Returns:** *boolean*

___

### `Const` offsetToIndices

▸ **offsetToIndices**(`size`: [Size](README.md#size), `offset`: number): *[Indices](README.md#indices)*

*Defined in [offsetToIndices.ts:3](https://github.com/hookun/binary-matrix/blob/8dc88a8/src/offsetToIndices.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | [Size](README.md#size) |
`offset` | number |

**Returns:** *[Indices](README.md#indices)*

___

### `Const` sizeToBitLength

▸ **sizeToBitLength**(`size`: [Size](README.md#size)): *number*

*Defined in [sizeToBitLength.ts:3](https://github.com/hookun/binary-matrix/blob/8dc88a8/src/sizeToBitLength.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | [Size](README.md#size) |

**Returns:** *number*
