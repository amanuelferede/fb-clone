import { PositiveValueType } from "../types/values/postive-values-t";
import { WidthValueType } from "../types/width/width-t";

const widthsNumbers = new Map<number, string>([
  [0, "p-0"],
  [0.5, "p-0.5"],
  [1, "p-1"],
  [1.5, "p-1.5"],
  [2, "p-2"],
  [2, "p-2.5"],
  [3, "p-3"],
  [3.5, "p-3.5"],
  [4, "p-4"],
  [5, "p-5"],
  [6, "p-6"],
  [7, "p-7"],
  [8, "p-8"],
  [9, "p-9"],
  [10, "p-10"],
  [11, "p-11"],
  [12, "p-12"],
  [14, "p-14"],
  [16, "p-16"],
  [20, "p-20"],
  [24, "p-24"],
  [28, "p-28"],
  [32, "p-32"],
  [36, "p-36"],
  [40, "p-40"],
  [44, "p-44"],
  [48, "p-48"],
  [52, "p-52"],
  [56, "p-56"],
  [60, "p-60"],
  [64, "p-64"],
  [72, "p-72"],
  [80, "p-80"],
  [96, "p-96"],
]);
const widthsStrings = new Map<string, string>([
  ["3xs", "w-3xs"],
  ["2xs", "w-2xs"],
  ["xs", "w-xs"],
  ["sm", "w-sm"],
  ["md", "w-md"],
  ["full", "w-full"],
  ["fit", "w-fit"],
  ["max", "w-max"],
  ["1/2", "w-1/2"],
  ["1/3", "w-1/3"],
  ["1/4", "w-1/4"],
  ["1/5", "w-1/5"],
  ["1/6", "w-1/6"],
  ["1/12", "w-1/12"],

  ["2/3", "w-2/3"],
  ["2/4", "w-2/4"],
  ["2/5", "w-2/5"],
  ["2/6", "w-2/6"],
  ["2/12", "w-2/12"],

  ["3/4", "w-3/4"],
  ["3/5", "w-3/5"],
  ["3/6", "w-3/6"],
  ["3/12", "w-3/12"],

  ["4/5", "w-4/5"],
  ["4/6", "w-4/6"],
  ["4/12", "w-4/12"],

  ["5/6", "w-5/6"],
  ["5/12", "w-5/12"],

  ["6/12", "w-6/12"],
  ["7/12", "w-7/12"],
  ["8/12", "w-8/12"],
  ["9/12", "w-9/12"],
  ["10/12", "w-10/12"],
  ["11/12", "w-11/12"],
]);

export const getMinWidth = (
  key: WidthValueType | PositiveValueType | undefined
) => {
  if (typeof key === "string") {
    return widthsStrings.get(key);
  }

  if (typeof key === "number") {
    return widthsNumbers.get(key);
  }
};
