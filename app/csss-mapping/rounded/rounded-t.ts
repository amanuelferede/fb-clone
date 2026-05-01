import { RoundedValueType } from "../types/rounded/rounded-t";

const roundedTopProps = new Map<string, string>([
  ["xs", "rounded-t-xs"],
  ["sm", "rounded-t-sm"],
  ["md", "rounded-t-md"],
  ["lg", "rounded-t-lg"],
  ["xl", "rounded-t-xl"],
  ["2xl", "rounded-t-2xl"],
  ["3xl", "rounded-t-3xl"],
  ["4xl", "rounded-t-4xl"],
  ["full", "rounded-t-full"],
  ["none", "rounded-t-none"],
]);

export const getRoundedT = (key: RoundedValueType | undefined) => {
  return key ? roundedTopProps.get(key) : undefined;
};
