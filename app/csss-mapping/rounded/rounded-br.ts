import { RoundedValueType } from "../types/rounded/rounded-t";

const roundedBottomRightProps = new Map<string, string>([
  ["xs", "rounded-br-xs"],
  ["sm", "rounded-br-sm"],
  ["md", "rounded-br-md"],
  ["lg", "rounded-br-lg"],
  ["xl", "rounded-br-xl"],
  ["2xl", "rounded-br-2xl"],
  ["3xl", "rounded-br-3xl"],
  ["4xl", "rounded-br-4xl"],
  ["full", "rounded-br-full"],
  ["none", "rounded-br-none"],
]);

export const getRoundedBR = (key: RoundedValueType | undefined) => {
  return key ? roundedBottomRightProps.get(key) : undefined;
};
