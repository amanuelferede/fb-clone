import { BorderColorValueType } from "../types/border/border color-t";

const borderColorProps = new Map<string, string>([
  ["gray-50", "border-gray-50"],
  ["gray-100", "border-gray-100"],
  ["gray-200", "border-gray-200"],
  ["gray-300", "border-gray-300"],
  ["gray-400", "border-gray-400"],
  ["gray-500", "border-gray-500"],
  ["gray-600", "border-gray-600"],
  ["gray-700", "border-gray-700"],
  ["gray-800", "border-gray-800"],
  ["gray-900", "border-gray-900"],
  ["gray-950", "border-gray-950"],

  ["blue-50", "border-blue-50"],
  ["blue-100", "border-blue-100"],
  ["blue-200", "border-blue-200"],
  ["blue-300", "border-blue-300"],
  ["blue-400", "border-blue-400"],
  ["blue-500", "border-blue-500"],
  ["blue-600", "border-blue-600"],
  ["blue-700", "border-blue-700"],
  ["blue-800", "border-blue-800"],
  ["blue-900", "border-blue-900"],
  ["blue-950", "border-blue-950"],
]);

export const getBorderColor = (key: BorderColorValueType | undefined) => {
  return key ? borderColorProps.get(key) : undefined;
};
