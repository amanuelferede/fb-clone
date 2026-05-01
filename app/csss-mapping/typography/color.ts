import { TextColorValueType } from "../types/typography/color-t";

const textColorProps = new Map<string, string>([
  ["gray-50", "text-gray-50"],
  ["gray-100", "text-gray-100"],
  ["gray-200", "text-gray-200"],
  ["gray-300", "text-gray-300"],
  ["gray-400", "text-gray-400"],
  ["gray-500", "text-gray-500"],
  ["gray-600", "text-gray-600"],
  ["gray-700", "text-gray-700"],
  ["gray-800", "text-gray-800"],
  ["gray-900", "text-gray-950"],

  ["blue-50", "text-blue-50"],
  ["blue-100", "text-blue-100"],
  ["blue-200", "text-blue-200"],
  ["blue-300", "text-blue-300"],
  ["blue-400", "text-blue-400"],
  ["blue-500", "text-blue-500"],
  ["blue-600", "text-blue-600"],
  ["blue-700", "text-blue-700"],
  ["blue-800", "text-blue-800"],
  ["blue-900", "text-blue-950"],
]);

export const getColorValue = (key: TextColorValueType | undefined) => {
  return key ? textColorProps.get(key) : undefined;
};
