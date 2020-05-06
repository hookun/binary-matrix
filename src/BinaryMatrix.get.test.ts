import ava from 'ava';
import {BinaryMatrix} from './BinaryMatrix';
import {Indices} from './type';

const test = (
    mat: BinaryMatrix,
    indices: Indices,
    expected: boolean,
): void => {
    ava(`${mat} ${indices.join(',')} -> ${expected}`, (t) => {
        t.deepEqual(mat.get(indices), expected);
    });
};

const mat = BinaryMatrix.fromString([
    '010',
    '100',
    '001',
]);

test(mat, [0, 0], false);
test(mat, [1, 0], true);
test(mat, [0, 1], true);
test(mat, [1, 1], false);
