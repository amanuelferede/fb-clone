import { PositiveValueType } from "../types/values/postive-values-t";

const paddingXProps = new Map<number, string>([
  [0, "px-0"],
  [0.5, "px-0.5"],
  [1, "px-1"],
  [1.5, "px-1.5"],
  [2, "px-2"],
  [2.5, "px-2.5"],
  [3, "px-3"],
  [3.5, "px-3.5"],
  [4, "px-4"],
  [5, "px-5"],
  [6, "px-6"],
  [7, "px-7"],
  [8, "px-8"],
  [9, "px-9"],
  [10, "px-10"],
  [11, "px-11"],
  [12, "px-12"],
  [14, "px-14"],
  [16, "px-16"],
  [20, "px-20"],
  [24, "px-24"],
  [28, "px-28"],
  [32, "px-32"],
  [36, "px-36"],
  [40, "px-40"],
  [44, "px-44"],
  [48, "px-48"],
  [52, "px-52"],
  [56, "px-56"],
  [60, "px-60"],
  [64, "px-64"],
  [72, "px-72"],
  [80, "px-80"],
  [96, "px-96"],
]);

export const getPaddingX = (key: PositiveValueType | undefined) => {
  return key ? paddingXProps.get(key) : undefined;
};
