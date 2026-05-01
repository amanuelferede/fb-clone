import { BgValueType } from "../types/background/bg";

const bgProps = new Map<string, string>([
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
]);

export const getBg = (key: BgValueType | undefined) => {
  return key ? bgProps.get(key) : undefined;
};
