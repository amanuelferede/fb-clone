import { GridColValueType } from "../types/grid/cols-t";

const gridCols = new Map<number, string>([
  [1, "grid-cols-1"],
  [2, "grid-cols-2"],
  [3, "grid-cols-3"],
  [4, "grid-cols-4"],
  [5, "grid-cols-5"],
  [6, "grid-cols-6"],
  [7, "grid-cols-7"],
  [8, "grid-cols-8"],
  [9, "grid-cols-8"],
  [10, "grid-cols-10"],
  [11, "grid-cols-11"],
  [12, "grid-cols-12"],
]);

export const getGridCol = (key: GridColValueType | undefined) => {
  return key ? gridCols.get(key) : undefined;
};
