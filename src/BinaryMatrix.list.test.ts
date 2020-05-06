import ava from 'ava';
import {BinaryMatrix} from './BinaryMatrix';
import {Indices} from './type';

const test = (
    mat: BinaryMatrix,
    state: boolean,
    expected: Array<Indices>,
): void => {
    ava(`${mat} ${state} -> ${expected.join(',')}`, (t) => {
        t.deepEqual([...mat.list(state)], expected);
    });
};

test(
    BinaryMatrix.fromString([
        '010',
        '100',
        '001',
    ]),
    true,
    [
        [1, 0],
        [0, 1],
        [2, 2],
    ],
);

test(
    BinaryMatrix.fromString([
        '010',
        '100',
        '001',
    ]),
    false,
    [
        [0, 0],
        [2, 0],
        [1, 1],
        [2, 1],
        [0, 2],
        [1, 2],
    ],
);
