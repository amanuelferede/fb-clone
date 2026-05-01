import { RoundedValueType } from "../types/rounded/rounded-t";

const roundedProps = new Map<string, string>([
  ["xs", "rounded-xs"],
  ["sm", "rounded-sm"],
  ["md", "rounded-md"],
  ["lg", "rounded-lg"],
  ["xl", "rounded-xl"],
  ["2xl", "rounded-2xl"],
  ["3xl", "rounded-3xl"],
  ["4xl", "rounded-4xl"],
  ["full", "rounded-full"],
  ["none", "rounded-none"],
]);

export const getRounded = (key: RoundedValueType | undefined) => {
  return key ? roundedProps.get(key) : undefined;
};
