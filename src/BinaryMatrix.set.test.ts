import ava from 'ava';
import {BinaryMatrix} from './BinaryMatrix';

ava('Extend size', (t) => {
    let mat = BinaryMatrix.fromDimension(2);
    t.is(mat.bitLength, 0);
    mat = mat.set([0, 0], true);
    t.is(mat.bitLength, 1);
    mat = mat.set([0, 1], true);
    t.is(mat.bitLength, 2);
    mat = mat.set([1, 0], true);
    t.is(mat.bitLength, 4);
    mat = mat.set([2, 2], true);
    t.is(mat.bitLength, 9);
});
