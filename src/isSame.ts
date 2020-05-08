import {BinaryMatrix} from './BinaryMatrix';
import {Size} from './type';
import {sizeToBitLength} from './sizeToBitLength';

export const isSameSize = (a: Size, b: Size): boolean => {
    if (a.length === b.length) {
        for (let dimension = a.length; dimension--;) {
            if (a[dimension] !== b[dimension]) {
                return false;
            }
        }
        return true;
    }
    return false;
};

export const isSameBuffer = (
    a: ArrayBuffer,
    b: ArrayBuffer,
    bitLength: number,
): boolean => {
    const {byteLength} = a;
    if (byteLength === b.byteLength) {
        const arrayA = new Uint8Array(a);
        const arrayB = new Uint8Array(b);
        let byteIndex = byteLength - 1;
        {
            const mask = 2 ** (byteLength * 8 - bitLength);
            if (Math.floor(arrayA[byteIndex] / mask) !== Math.floor(arrayB[byteIndex] / mask)) {
                return false;
            }
        }
        byteIndex--;
        while (0 <= byteIndex) {
            if (arrayA[byteIndex] !== arrayB[byteIndex]) {
                return false;
            }
            byteIndex--;
        }
        return true;
    }
    return false;
};

export const isSame = (
    a: BinaryMatrix,
    b: BinaryMatrix,
): boolean => isSameSize(a.size, b.size) && isSameBuffer(
    a.buffer,
    b.buffer,
    sizeToBitLength(a.size),
);
