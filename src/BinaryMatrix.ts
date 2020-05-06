import {toString, listBit} from '@hookun/bitbybit';
import {
    createBufferFromBitLength,
    setBit,
    getBit,
    listBitHasState,
} from '@hookun/bitbybit';
import {indicesToOffset} from './indicesToOffset';
import {offsetToIndices} from './offsetToIndices';
import {Size, Indices, Expansion} from './type';
import {sizeToBitLength} from './sizeToBitLength';
import {checkExpansion} from './checkExpansion';

export class BinaryMatrix {

    public readonly size: Size;

    public readonly buffer: ArrayBuffer;

    private _bitLength?: number;

    public static fromDimension(dimension: number): BinaryMatrix {
        return new BinaryMatrix((new Array(dimension)).fill(0));
    }

    public static fromSize(size: Size): BinaryMatrix {
        return new BinaryMatrix(size);
    }

    public static fromString(rows: Array<string>): BinaryMatrix {
        const rowCount = rows.length;
        const columnCount = rows[0].length;
        const size: Size = [columnCount, rowCount];
        const buffer = createBufferFromBitLength(sizeToBitLength(size));
        for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
            const row = rows[rowIndex];
            const bitOffset = columnCount * rowIndex;
            for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
                if (row[columnIndex] !== '0') {
                    setBit(buffer, bitOffset + columnIndex, true);
                }
            }
        }
        return new BinaryMatrix(size, buffer);
    }

    public constructor(
        size: Size,
        buffer = createBufferFromBitLength(sizeToBitLength(size)),
    ) {
        this.size = size.slice();
        this.buffer = buffer;
    }

    public get bitLength(): number {
        let bitLength = this._bitLength;
        if (!bitLength) {
            bitLength = this._bitLength = sizeToBitLength(this.size);
        }
        return bitLength;
    }

    public get(indices: Indices): boolean {
        return getBit(this.buffer, indicesToOffset(this.size, indices));
    }

    public set(
        indices: Indices,
        state: boolean,
    ): BinaryMatrix {
        const expansion = checkExpansion(this.size, indices);
        if (expansion) {
            return this.setExternalBit(expansion, indices, state);
        }
        return this.setInternalBit(indices, state);
    }

    private setInternalBit(
        indices: Indices,
        state: boolean,
    ): BinaryMatrix {
        const buffer = this.buffer.slice(0);
        setBit(buffer, indicesToOffset(this.size, indices), state);
        return new BinaryMatrix(this.size, buffer);
    }

    private setExternalBit(
        {size, pos}: Expansion,
        indices: Indices,
        state: boolean,
    ): BinaryMatrix {
        return new BinaryMatrix(size).paste(this, pos).set(indices, state);
    }

    public paste(
        patch: BinaryMatrix,
        pos: Indices,
    ): BinaryMatrix {
        const {size} = this;
        const buffer = this.buffer.slice(0);
        for (const [bit, indices] of patch.listBit()) {
            const sourceIndices = indices.map((index, dimension) => index + pos[dimension]);
            const bitOffset = indicesToOffset(size, sourceIndices);
            const currentBit = getBit(buffer, bitOffset);
            if (currentBit !== bit) {
                setBit(buffer, bitOffset, bit);
            }
        }
        return new BinaryMatrix(size, buffer);
    }

    public *list(state: boolean): Generator<Indices> {
        const {size} = this;
        for (const bitOffset of listBitHasState(this.buffer, state, this.bitLength)) {
            yield offsetToIndices(size, bitOffset);
        }
    }

    public *listBit(): Generator<[boolean, Indices]> {
        const {size, bitLength} = this;
        let bitOffset = 0;
        for (const bit of listBit(this.buffer)) {
            yield [bit, offsetToIndices(size, bitOffset++)];
            if (bitLength <= bitOffset) {
                break;
            }
        }
    }

    public toString(): string {
        return toString(this.buffer, this.size[0], this.size[1]);
    }

}
