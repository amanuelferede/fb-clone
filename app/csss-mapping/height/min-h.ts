import { HeightValueType } from "../types/height/height-t";
import { PositiveValueType } from "../types/values/postive-values-t";

const heightNumbers = new Map<number, string>([
  [0, "min-h-0"],
  [0.5, "min-h-0.5"],
  [1, "min-h-1"],
  [1.5, "min-h-1.5"],
  [2, "min-h-2"],
  [2, "min-h-2.5"],
  [3, "min-h-3"],
  [3.5, "min-h-3.5"],
  [4, "min-h-4"],
  [5, "min-h-5"],
  [6, "min-h-6"],
  [7, "min-h-7"],
  [8, "min-h-8"],
  [9, "min-h-9"],
  [10, "min-h-10"],
  [11, "min-h-11"],
  [12, "min-h-12"],
  [14, "min-h-14"],
  [16, "min-h-16"],
  [20, "min-h-20"],
  [24, "min-h-24"],
  [28, "min-h-28"],
  [32, "min-h-32"],
  [36, "min-h-36"],
  [40, "min-h-40"],
  [44, "min-h-44"],
  [48, "min-h-48"],
  [52, "min-h-52"],
  [56, "min-h-56"],
  [60, "min-h-60"],
  [64, "min-h-64"],
  [72, "min-h-72"],
  [80, "min-h-80"],
  [96, "min-h-96"],
]);
const heightStrings = new Map<string, string>([
  ["lh", "min-h-lh"],
  ["lvh", "min-h-lvh"],
  ["lvw", "min-h-lvw"],
  ["full", "min-h-full"],
  ["fit", "h-fit"],
  ["max", "h-max"],
  ["1/2", "min-h-1/2"],
  ["1/3", "min-h-1/3"],
  ["1/4", "min-h-1/4"],
  ["1/5", "min-h-1/5"],
  ["1/6", "min-h-1/6"],
  ["1/12", "min-h-1/12"],

  ["2/3", "min-h-2/3"],
  ["2/4", "min-h-2/4"],
  ["2/5", "min-h-2/5"],
  ["2/6", "min-h-2/6"],
  ["2/12", "min-h-2/12"],

  ["3/4", "min-h-3/4"],
  ["3/5", "min-h-3/5"],
  ["3/6", "min-h-3/6"],
  ["3/12", "min-h-3/12"],

  ["4/5", "min-h-4/5"],
  ["4/6", "min-h-4/6"],
  ["4/12", "min-h-4/12"],

  ["5/6", "min-h-5/6"],
  ["5/12", "min-h-5/12"],

  ["6/12", "min-h-6/12"],
  ["7/12", "min-h-7/12"],
  ["8/12", "min-h-8/12"],
  ["9/12", "min-h-9/12"],
  ["10/12", "min-h-10/12"],
  ["11/12", "min-h-11/12"],
]);

export const getMInHeight = (
  key: HeightValueType | PositiveValueType | undefined
) => {
  if (typeof key === "string") {
    return heightStrings.get(key);
  }

  if (typeof key === "number") {
    return heightNumbers.get(key);
  }
};
