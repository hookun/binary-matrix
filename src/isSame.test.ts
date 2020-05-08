import ava from 'ava';
import {BinaryMatrix} from './BinaryMatrix';
import {isSame, isSameBuffer} from './isSame';

const test = (
    a: BinaryMatrix,
    b: BinaryMatrix,
    expected: boolean,
): void => {
    ava(`${a} ${b} -> ${expected}`, (t) => {
        t.is(isSame(a, b), expected);
    });
};

test(
    BinaryMatrix.fromString(['100', '010']),
    BinaryMatrix.fromString(['100', '010']),
    true,
);

test(
    BinaryMatrix.fromString(['100', '010']),
    BinaryMatrix.fromString(['100', '011']),
    false,
);

test(
    BinaryMatrix.fromString(['100', '010', '001']),
    BinaryMatrix.fromString(['100', '010']),
    false,
);

const testBuffer = (
    a: Array<string>,
    b: Array<string>,
    bitLength: number,
    expected: boolean,
): void => {
    ava(`${a.join('')} ${b.join()} ${bitLength} -> ${expected}`, (t) => {
        const bufferA = new Uint8Array(a.map((byte) => parseInt(byte, 2))).buffer;
        const bufferB = new Uint8Array(b.map((byte) => parseInt(byte, 2))).buffer;
        t.is(isSameBuffer(bufferA, bufferB, bitLength), expected);
    });
};

testBuffer(
    ['10110011'],
    ['10110010'],
    7,
    true,
);

testBuffer(
    ['10110011'],
    ['10110010'],
    8,
    false,
);
