import { HeightValueType } from "../types/height/height-t";
import { PositiveValueType } from "../types/values/postive-values-t";

const heightNumbers = new Map<number, string>([
  [0, "h-0"],
  [0.5, "h-0.5"],
  [1, "h-1"],
  [1.5, "h-1.5"],
  [2, "h-2"],
  [2, "h-2.5"],
  [3, "h-3"],
  [3.5, "h-3.5"],
  [4, "h-4"],
  [5, "h-5"],
  [6, "h-6"],
  [7, "h-7"],
  [8, "h-8"],
  [9, "h-9"],
  [10, "h-10"],
  [11, "h-11"],
  [12, "h-12"],
  [14, "h-14"],
  [16, "h-16"],
  [20, "h-20"],
  [24, "h-24"],
  [28, "h-28"],
  [32, "h-32"],
  [36, "h-36"],
  [40, "h-40"],
  [44, "h-44"],
  [48, "h-48"],
  [52, "h-52"],
  [56, "h-56"],
  [60, "h-60"],
  [64, "h-64"],
  [72, "h-72"],
  [80, "h-80"],
  [96, "h-96"],
]);
const heightStrings = new Map<string, string>([
  ["lh", "h-lh"],
  ["lvh", "h-lvh"],
  ["lvw", "h-lvw"],
  ["full", "h-full"],
  ["fit", "h-fit"],
  ["max", "h-max"],
  ["1/2", "h-1/2"],
  ["1/3", "h-1/3"],
  ["1/4", "h-1/4"],
  ["1/5", "h-1/5"],
  ["1/6", "h-1/6"],
  ["1/12", "h-1/12"],

  ["2/3", "h-2/3"],
  ["2/4", "h-2/4"],
  ["2/5", "h-2/5"],
  ["2/6", "h-2/6"],
  ["2/12", "h-2/12"],

  ["3/4", "h-3/4"],
  ["3/5", "h-3/5"],
  ["3/6", "h-3/6"],
  ["3/12", "h-3/12"],

  ["4/5", "h-4/5"],
  ["4/6", "h-4/6"],
  ["4/12", "h-4/12"],

  ["5/6", "h-5/6"],
  ["5/12", "h-5/12"],

  ["6/12", "h-6/12"],
  ["7/12", "h-7/12"],
  ["8/12", "h-8/12"],
  ["9/12", "h-9/12"],
  ["10/12", "h-10/12"],
  ["11/12", "h-11/12"],
]);

export const getHeight = (
  key: HeightValueType | PositiveValueType | undefined
) => {
  if (typeof key === "string") {
    return heightStrings.get(key);
  }

  if (typeof key === "number") {
    if (heightNumbers.get(key)) {
      return heightNumbers.get(key);
    }
  }
};
