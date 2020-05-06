import {Size, Indices, Expansion} from './type';

export const checkExpansion = (
    sizeList: Size,
    indices: Indices,
): Expansion | null => {
    let changed = false;
    const newSize: Array<number> = [];
    const pos: Array<number> = [];
    for (let dimension = sizeList.length; dimension--;) {
        let size = sizeList[dimension];
        const index = indices[dimension];
        if (size === 0) {
            changed = true;
            size = 1;
        }
        if (index < 0) {
            changed = true;
            newSize[dimension] = size - index;
            pos[dimension] = -index;
        } else if (index < size) {
            newSize[dimension] = size;
            pos[dimension] = 0;
        } else {
            changed = true;
            newSize[dimension] = index + 1;
            pos[dimension] = 0;
        }
    }
    if (changed) {
        return {size: newSize, pos};
    }
    return null;
};
