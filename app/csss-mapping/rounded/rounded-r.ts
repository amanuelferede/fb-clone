import { RoundedValueType } from "../types/rounded/rounded-t";

const roundedRightProps = new Map<string, string>([
  ["xs", "rounded-r-xs"],
  ["sm", "rounded-r-sm"],
  ["md", "rounded-r-md"],
  ["lg", "rounded-r-lg"],
  ["xl", "rounded-r-xl"],
  ["2xl", "rounded-r-2xl"],
  ["3xl", "rounded-r-3xl"],
  ["4xl", "rounded-r-4xl"],
  ["full", "rounded-r-full"],
  ["none", "rounded-r-none"],
]);

export const getRoundedR = (key: RoundedValueType | undefined) => {
  return key ? roundedRightProps.get(key) : undefined;
};
