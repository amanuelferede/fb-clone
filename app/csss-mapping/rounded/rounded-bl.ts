import { RoundedValueType } from "../types/rounded/rounded-t";

const roundedBottomLeftProps = new Map<string, string>([
  ["xs", "rounded-bl-xs"],
  ["sm", "rounded-bl-sm"],
  ["md", "rounded-bl-md"],
  ["lg", "rounded-bl-lg"],
  ["xl", "rounded-bl-xl"],
  ["2xl", "rounded-bl-2xl"],
  ["3xl", "rounded-bl-3xl"],
  ["4xl", "rounded-bl-4xl"],
  ["full", "rounded-bl-full"],
  ["none", "rounded-bl-none"],
]);

export const getRoundedBL = (key: RoundedValueType | undefined) => {
  return key ? roundedBottomLeftProps.get(key) : undefined;
};
