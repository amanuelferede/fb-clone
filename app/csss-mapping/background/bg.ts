import { BgValueType } from "../types/background/bg";

const bgProps = new Map<string, string>([
  ["white", "bg-white"],

  ["blue-50", "bg-blue-500"],
  ["blue-100", "bg-blue-100"],
  ["blue-200", "bg-blue-200"],
  ["blue-300", "bg-blue-300"],
  ["blue-400", "bg-blue-400"],
  ["blue-500", "bg-blue-500"],
  ["blue-600", "bg-blue-600"],
  ["blue-700", "bg-blue-700"],
  ["blue-800", "bg-blue-800"],
  ["blue-900", "bg-blue-900"],
  ["blue-950", "bg-blue-950"],

  ["gray-50", "bg-gray-500"],
  ["gray-100", "bg-gray-100"],
  ["gray-200", "bg-gray-200"],
  ["gray-300", "bg-gray-300"],
  ["gray-400", "bg-gray-400"],
  ["gray-500", "bg-gray-500"],
  ["gray-600", "bg-gray-600"],
  ["gray-700", "bg-gray-700"],
  ["gray-800", "bg-gray-800"],
  ["gray-900", "bg-gray-900"],
  ["gray-950", "bg-gray-950"],
]);

export const getBg = (key: BgValueType | undefined) => {
  return key ? bgProps.get(key) : undefined;
};
