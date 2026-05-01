import { ShadowvalueType } from "../types/shadows/shadow-t";

const shadows = new Map<string, string>([
  ["xs", "shadow-xs"],
  ["sm", "shadow-sm"],
  ["md", "shadow-md"],
  ["lg", "shadow-lg"],
  ["xl", "shadow-xl"],
  ["2xl", "shadow-2xl"],
  ["2xs", "shadow-2xl"],
  ["none", "shadow-none"],
]);

export const getShadow = (key: ShadowvalueType | undefined) => {
  return key ? shadows.get(key) : undefined;
};
