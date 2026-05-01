import { RoundedValueType } from "../types/rounded/rounded-t";

const roundedLeftProps = new Map<string, string>([
  ["xs", "rounded-l-xs"],
  ["sm", "rounded-l-sm"],
  ["md", "rounded-l-md"],
  ["lg", "rounded-l-lg"],
  ["xl", "rounded-l-xl"],
  ["2xl", "rounded-l-2xl"],
  ["3xl", "rounded-l-3xl"],
  ["4xl", "rounded-l-4xl"],
  ["full", "rounded-l-full"],
  ["none", "rounded-l-none"],
]);

export const getRoundedL = (key: RoundedValueType | undefined) => {
  return key ? roundedLeftProps.get(key) : undefined;
};
