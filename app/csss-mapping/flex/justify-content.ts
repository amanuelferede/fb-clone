import { JustifyContentValueType } from "../types/flex/justfiy-content-t";

const justifyContentProps = new Map<string, string>([
  ["center", "justify-center"],
  ["end", "justify-end"],
  ["start", "justify-start"],
  ["around", "justify-around"],
  ["between", "justify-between"],
]);

export const getJustifyContent = (key: JustifyContentValueType | undefined) => {
  return key ? justifyContentProps.get(key) : undefined;
};
