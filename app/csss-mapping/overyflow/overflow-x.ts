import { OverFlowValueType } from "../types/overflow/overflow-t";

const overFlowXProps = new Map<string, string>([
  ["auto", "overflow-x-auto"],
  ["clip", "overflow-x-clip"],
  ["hidden", "overflow-x-hidden"],
  ["scroll", "overflow-x-scroll"],
  ["visible", "overflow-x-visible"],
]);

export const getOverFlowX = (key: OverFlowValueType | undefined) => {
  return key ? overFlowXProps.get(key) : undefined;
};
