import { FontWeightValueType } from "../types/typography/font weight-t";

const fontWeightProps = new Map<number, string>([
  [700, "font-bold"],
  [800, "font-extrabold"],
  [200, "font-extralight"],
  [300, "font-light"],
  [500, "bold-medium"],
  [400, "font-normal"],
  [600, "font-semibold"],
]);

export const getFontWeightValue = (key: FontWeightValueType | undefined) => {
  return key ? fontWeightProps.get(key) : undefined;
};
