import { RoundedValueType } from "../types/rounded/rounded-t";

const roundedBottomProps = new Map<string, string>([
  ["xs", "rounded-b-xs"],
  ["sm", "rounded-b-sm"],
  ["md", "rounded-b-md"],
  ["lg", "rounded-b-lg"],
  ["xl", "rounded-b-xl"],
  ["2xl", "rounded-b-2xl"],
  ["3xl", "rounded-b-3xl"],
  ["4xl", "rounded-b-4xl"],
  ["full", "rounded-b-full"],
  ["none", "rounded-b-none"],
]);

export const getRoundedB = (key: RoundedValueType | undefined) => {
  return key ? roundedBottomProps.get(key) : undefined;
};
