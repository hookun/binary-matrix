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
* [offsetToIndices](README.md#const-offsettoindices)
* [sizeToBitLength](README.md#const-sizetobitlength)

## Type aliases

###  Indices

Ƭ **Indices**: *ReadonlyArray‹number›*

*Defined in [type.ts:2](https://github.com/hookun/binary-matrix/blob/07d078e/src/type.ts#L2)*

___

###  Size

Ƭ **Size**: *ReadonlyArray‹number›*

*Defined in [type.ts:1](https://github.com/hookun/binary-matrix/blob/07d078e/src/type.ts#L1)*

## Functions

### `Const` checkExpansion

▸ **checkExpansion**(`sizeList`: [Size](README.md#size), `indices`: [Indices](README.md#indices)): *[Expansion](interfaces/expansion.md) | null*

*Defined in [checkExpansion.ts:3](https://github.com/hookun/binary-matrix/blob/07d078e/src/checkExpansion.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`sizeList` | [Size](README.md#size) |
`indices` | [Indices](README.md#indices) |

**Returns:** *[Expansion](interfaces/expansion.md) | null*

___

### `Const` indicesToOffset

▸ **indicesToOffset**(`size`: [Size](README.md#size), `indices`: [Indices](README.md#indices)): *number*

*Defined in [indicesToOffset.ts:3](https://github.com/hookun/binary-matrix/blob/07d078e/src/indicesToOffset.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | [Size](README.md#size) |
`indices` | [Indices](README.md#indices) |

**Returns:** *number*

___

### `Const` offsetToIndices

▸ **offsetToIndices**(`size`: [Size](README.md#size), `offset`: number): *[Indices](README.md#indices)*

*Defined in [offsetToIndices.ts:3](https://github.com/hookun/binary-matrix/blob/07d078e/src/offsetToIndices.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | [Size](README.md#size) |
`offset` | number |

**Returns:** *[Indices](README.md#indices)*

___

### `Const` sizeToBitLength

▸ **sizeToBitLength**(`size`: [Size](README.md#size)): *number*

*Defined in [sizeToBitLength.ts:3](https://github.com/hookun/binary-matrix/blob/07d078e/src/sizeToBitLength.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | [Size](README.md#size) |

**Returns:** *number*
