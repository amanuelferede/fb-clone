import { TextColorValueType } from "@/app/csss-mapping/types/typography/color-t";
import { FontSizeValueType } from "@/app/csss-mapping/types/typography/font size-t";
import { FontWeightValueType } from "@/app/csss-mapping/types/typography/font weight-t";
import { getTextColor } from "@/app/csss-mapping/typography/color";
import { getFontSize } from "@/app/csss-mapping/typography/font size";
import { getFontWeight } from "@/app/csss-mapping/typography/font weight";

export default function Text({
  children,
  fontWeight,
  as,
  color,
  fontSize,
}: {
  as?: "p" | "span";
  color?: TextColorValueType;
  fontWeight?: FontWeightValueType;
  fontSize?: FontSizeValueType | number;
  children: React.ReactNode;
}) {
  const _fontSize = getFontSize(fontSize) ? getFontSize(fontSize) : "";
  const _fontWeight = getFontWeight(fontWeight)
    ? getFontWeight(fontWeight)
    : "";
  const _color = getTextColor(color) ? getTextColor(color) : "";
  if (as) {
    if (as === "p") {
      return (
        <p className={` ${_fontSize} ${_fontWeight} ${_color}`}>{children}</p>
      );
    }
    return (
      <span className={`text-[1rem] ${_fontSize} ${_fontWeight} ${_color}`}>
        {children}
      </span>
    );
  }
  return <p className={` ${_fontSize} ${_fontWeight} ${_color}`}>{children}</p>;
}
