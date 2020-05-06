import {Size, Indices} from './type';

export const indicesToOffset = (
    size: Size,
    indices: Indices,
): number => {
    const dimensionCount = size.length;
    if (indices.length !== dimensionCount) {
        throw new Error(`InvalidDimension: ${indices.length} (Expected: ${dimensionCount})`);
    }
    let skip = 1;
    let offset = 0;
    for (let dimension = 0; dimension < dimensionCount; dimension++) {
        offset += skip * indices[dimension];
        skip *= size[dimension];
    }
    return offset;
};
