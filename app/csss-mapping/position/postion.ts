import { PositionValueType } from "../types/position/position-t";

const postionProps = new Map<string, string>([
  ["relative", "relative"],
  ["absolute", "absolute"],
  ["static", "static"],
  ["sticky", "sticky"],
]);

export const getPostion = (key: PositionValueType | undefined) => {
  return key ? postionProps.get(key) : undefined;
};
