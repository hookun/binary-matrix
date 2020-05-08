import ava from 'ava';
import {BinaryMatrix} from './BinaryMatrix';
import {toString, createBufferFromString} from '@hookun/bitbybit';

const test = (
    mat: BinaryMatrix,
    expected: ArrayBuffer,
): void => {
    ava(`${mat} -> ${toString(expected, 0)}`, (t) => {
        t.is(toString(mat.encode(), 0), toString(expected, 0));
        t.true(mat.isSameAs(BinaryMatrix.decode(mat.encode())));
    });
};

{
    test(
        BinaryMatrix.fromString([
            '010',
            '100',
            '001',
        ]),
        createBufferFromString(
            '00000010',

            '11',
            '00',

            '11',
            '01',

            '11',
            '01',

            '01',

            '01',

            '01',

            '01',

            '11',
            '10',
            '00',

            '01',
        ),
    );
}
