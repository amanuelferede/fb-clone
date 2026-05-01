import { FontSizeValueType } from "../types/typography/font size-t";

const fontSizeProps = new Map<string, string>([
  ["xs", "text-xs"],
  ["lg", "text-lg"],
  ["xl", "text-xl"],
  ["2xl", "text-2xl"],
  ["3xl", "text-3xl"],
  ["4xl", "text-4xl"],
  ["5xl", "text-5xl"],
  ["6xl", "text-6xl"],
  ["7xl", "text-7xl"],
  ["8xl", "text-8xl"],
  ["9xl", "text-9xl"],
]);

export const getFontSize = (key: FontSizeValueType | number | undefined) => {
  return key && typeof key === "string" ? fontSizeProps.get(key) : undefined;
};
