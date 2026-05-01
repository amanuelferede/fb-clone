import { OverFlowValueType } from "../types/overflow/overflow-t";

const overFlowYProps = new Map<string, string>([
  ["auto", "overflow-auto"],
  ["clip", "overflow-clip"],
  ["hidden", "overflow-hidden"],
  ["scroll", "overflow-scroll"],
  ["visible", "overflow-visible"],
]);

export const getOverFlowY = (key: OverFlowValueType | undefined) => {
  return key ? overFlowYProps.get(key) : undefined;
};
