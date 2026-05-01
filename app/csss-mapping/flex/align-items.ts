import { AlignItemsValueType } from "../types/flex/align-items-t";

const alignItemsProps = new Map<string, string>([
  ["center", "items-center"],
  ["end", "items-end"],
  ["start", "items-start"],
]);

export const getAlignItemsValue = (key: AlignItemsValueType | undefined) => {
  return key ? alignItemsProps.get(key) : undefined;
};
