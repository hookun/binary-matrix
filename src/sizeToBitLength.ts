import {Size} from './type';

export const sizeToBitLength = (size: Size): number => size.reduce((a, b) => a * b, 1);
