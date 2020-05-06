import {Size, Indices} from './type';

export const offsetToIndices = (
    size: Size,
    offset: number,
): Indices => {
    let remainder = offset;
    const indices = size.map((skip) => {
        const index = remainder % skip;
        remainder = Math.floor(remainder / skip);
        return index;
    });
    if (0 < remainder) {
        throw new RangeError(`Index is outside the bounds: ${offset}`);
    }
    return indices;
};
