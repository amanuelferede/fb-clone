import { GridColSpanValueType } from "../types/grid/col-span-t";

const gridColSpans = new Map<number, string>([
  [1, "col-span-1"],
  [2, "col-span-2"],
  [3, "col-span-3"],
  [4, "col-span-4"],
  [5, "col-span-5"],
  [6, "col-span-6"],
  [7, "col-span-7"],
  [8, "col-span-8"],
  [9, "col-span-8"],
  [10, "col-span-10"],
  [11, "col-span-11"],
  [12, "col-span-12"],
]);

export const getGridColSpan = (key: GridColSpanValueType | undefined) => {
  return key ? gridColSpans.get(key) : undefined;
};
