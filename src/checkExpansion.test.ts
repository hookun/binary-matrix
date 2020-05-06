import ava from 'ava';
import {checkExpansion} from './checkExpansion';

const test = (
    [size, indices]: Parameters<typeof checkExpansion>,
    expected: ReturnType<typeof checkExpansion>,
): void => {
    ava(`${size.join(',')} ${indices.join(',')} -> ${JSON.stringify(expected)}`, (t) => {
        t.deepEqual(checkExpansion(size, indices), expected);
    });
};

test([[1], [0]], null);
test([[0], [1]], {size: [2], pos: [0]});
test([[0], [-1]], {size: [2], pos: [1]});
test([[2, 2], [1, 1]], null);
test([[2, 2], [-2, 4]], {size: [4, 5], pos: [2, 0]});
