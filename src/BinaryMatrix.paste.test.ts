import ava from 'ava';
import {BinaryMatrix} from './BinaryMatrix';
import {Indices} from './type';

const test = (
    dest: BinaryMatrix,
    source: BinaryMatrix,
    pos: Indices,
    expected: BinaryMatrix,
): void => {
    ava(`${dest}\n${source}\n${pos.join(',')}`, (t) => {
        t.is(dest.paste(source, pos).toString(), expected.toString());
    });
};

test(
    BinaryMatrix.fromString([
        '000',
        '000',
        '000',
    ]),
    BinaryMatrix.fromString([
        '01',
        '10',
    ]),
    [1, 1],
    BinaryMatrix.fromString([
        '000',
        '001',
        '010',
    ]),
);

test(
    BinaryMatrix.fromString([
        '011',
        '011',
        '000',
    ]),
    BinaryMatrix.fromString([
        '01',
        '10',
    ]),
    [1, 0],
    BinaryMatrix.fromString([
        '001',
        '010',
        '000',
    ]),
);

test(
    BinaryMatrix.fromString([
        '011',
        '011',
        '000',
    ]),
    BinaryMatrix.fromString([
        '01',
        '10',
    ]),
    [0, 1],
    BinaryMatrix.fromString([
        '011',
        '011',
        '100',
    ]),
);
