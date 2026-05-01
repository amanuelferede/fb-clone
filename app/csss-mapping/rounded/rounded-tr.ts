import { RoundedValueType } from "../types/rounded/rounded-t";

const roundedTopRightProps = new Map<string, string>([
  ["xs", "rounded-tr-xs"],
  ["sm", "rounded-tr-sm"],
  ["md", "rounded-tr-md"],
  ["lg", "rounded-tr-lg"],
  ["xl", "rounded-tr-xl"],
  ["2xl", "rounded-tr-2xl"],
  ["3xl", "rounded-tr-3xl"],
  ["4xl", "rounded-tr-4xl"],
  ["full", "rounded-tr-full"],
  ["none", "rounded-tr-none"],
]);

export const getRoundedTR = (key: RoundedValueType | undefined) => {
  return key ? roundedTopRightProps.get(key) : undefined;
};
