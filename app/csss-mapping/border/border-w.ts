import { BorderWidthValueType } from "../types/border/border width-t";

const borderWidthProps = new Map<number, string>([
  [0, "border-0"],
  [1, "border"],
  [2, "border-2"],
  [4, "border-4"],
  [8, "border-8"],
]);

export const getBorderWidth = (key: BorderWidthValueType | undefined) => {
  return key ? borderWidthProps.get(key) : undefined;
};
