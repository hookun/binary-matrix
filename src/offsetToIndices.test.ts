import ava from 'ava';
import {offsetToIndices} from './offsetToIndices';
import {Size, Indices} from './type';

const test = (
    size: Size,
    offset: number,
    expected?: Indices,
): void => {
    ava(`${size.join(',')} ${offset} -> ${typeof expected === 'undefined' ? 'Error' : expected.join(',')}`, (t) => {
        if (typeof expected === 'undefined') {
            t.throws(() => offsetToIndices(size, offset));
        } else {
            t.deepEqual(offsetToIndices(size, offset), expected);
        }
    });
};

test([4], 2, [2]);
test([5, 8], 5, [0, 1]);
test([4, 5, 6], 20, [0, 0, 1]);
test([4, 5, 6], 120);
