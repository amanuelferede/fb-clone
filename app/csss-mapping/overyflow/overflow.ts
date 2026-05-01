import { OverFlowValueType } from "../types/overflow/overflow-t";

const overFlowProps = new Map<string, string>([
  ["auto", "overflow-auto"],
  ["clip", "overflow-clip"],
  ["hidden", "overflow-hidden"],
  ["scroll", "overflow-scroll"],
  ["visible", "overflow-visible"],
]);

export const getOverFlow = (key: OverFlowValueType | undefined) => {
  return key ? overFlowProps.get(key) : undefined;
};
