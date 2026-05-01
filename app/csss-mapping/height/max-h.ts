import { HeightValueType } from "../types/height/height-t";
import { PositiveValueType } from "../types/values/postive-values-t";

const heightNumbers = new Map<number, string>([
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
const heightStrings = new Map<string, string>([
  ["lh", "max-max-lh"],
  ["lvh", "max-max-lvh"],
  ["lvw", "max-max-lvw"],
  ["full", "max-max-full"],
  ["fit", "max-fit"],
  ["max", "max-max"],
  ["1/2", "max-1/2"],
  ["1/3", "max-1/3"],
  ["1/4", "max-1/4"],
  ["1/5", "max-1/5"],
  ["1/6", "max-1/6"],
  ["1/12", "max-1/12"],

  ["2/3", "max-2/3"],
  ["2/4", "max-2/4"],
  ["2/5", "max-2/5"],
  ["2/6", "max-2/6"],
  ["2/12", "max-2/12"],

  ["3/4", "max-3/4"],
  ["3/5", "max-3/5"],
  ["3/6", "max-3/6"],
  ["3/12", "max-3/12"],

  ["4/5", "max-4/5"],
  ["4/6", "max-4/6"],
  ["4/12", "max-4/12"],

  ["5/6", "max-5/6"],
  ["5/12", "max-5/12"],

  ["6/12", "max-6/12"],
  ["7/12", "max-7/12"],
  ["8/12", "max-8/12"],
  ["9/12", "max-9/12"],
  ["10/12", "max-10/12"],
  ["11/12", "max-11/12"],
]);

export const getMaxHeight = (
  key: HeightValueType | PositiveValueType | undefined
) => {
  if (typeof key === "string") {
    return heightStrings.get(key);
  }

  if (typeof key === "number") {
    return heightNumbers.get(key);
  }
};
