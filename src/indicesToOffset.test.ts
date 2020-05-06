import ava from 'ava';
import {indicesToOffset} from './indicesToOffset';
import {Size, Indices} from './type';

const test = (
    size: Size,
    indices: Indices,
    expected?: number,
): void => {
    const errorIsExpected = typeof expected !== 'number';
    ava(`${size.join(',')} ${indices.join(',')} -> ${errorIsExpected ? 'Error': expected}`, (t) => {
        if (errorIsExpected) {
            t.throws(() => indicesToOffset(size, indices));
        } else {
            t.deepEqual(indicesToOffset(size, indices), expected);
        }
    });
};

test([4], [1], 1);
test([4], [1, 0]);
test([8, 5], [2, 1], 1 * 2 + 8 * 1);
test([4, 5, 6], [0, 0, 0], 0);
test([4, 5, 6], [3, 2, 1], 1 * 3 + 4 * 2 + (4 * 5) * 1);
