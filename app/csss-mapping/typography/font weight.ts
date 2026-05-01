import { FontWeightValueType } from "../types/typography/font weight-t";

const fontWeightProps = new Map<string, string>([
  ["bold", "font-bold"],
  ["extrabold", "font-extrabold"],
  ["extralight", "font-extralight"],
  ["light", "font-light"],
  ["medium", "bold-medium"],
  ["normal", "font-normal"],
  ["semibold", "font-semibold"],
]);

export const getFontWeight = (key: FontWeightValueType | undefined) => {
  return key ? fontWeightProps.get(key) : undefined;
};
