import { getAlignItemsValue } from "@/app/csss-mapping/flex/align-items";
import { getJustifyContent } from "@/app/csss-mapping/flex/justify-content";
import { getHeight } from "@/app/csss-mapping/height/height";
import { getSpacingX } from "@/app/csss-mapping/spacing/space-x";
import { AlignItemsValueType } from "@/app/csss-mapping/types/flex/align-items-t";
import { JustifyContentValueType } from "@/app/csss-mapping/types/flex/justfiy-content-t";
import { HeightValueType } from "@/app/csss-mapping/types/height/height-t";
import { IntegerValueType } from "@/app/csss-mapping/types/values/integer-values-t";
import { PositiveValueType } from "@/app/csss-mapping/types/values/postive-values-t";
import { WidthValueType } from "@/app/csss-mapping/types/width/width-t";
import { getWidth } from "@/app/csss-mapping/width/width";

export default function FlexRow({
  children,
  spaceX,
  alignItems,
  height,
  width,
  JustifyContent,
}: {
  children: React.ReactNode;
  spaceX: IntegerValueType;
  height?: HeightValueType | PositiveValueType;
  width?: WidthValueType | PositiveValueType;
  alignItems?: AlignItemsValueType;
  JustifyContent?: JustifyContentValueType;
}) {
  const _spaceX = getSpacingX(spaceX) ? getSpacingX(spaceX) : "";
  const _width = getWidth(width) ? getWidth(width) : "";
  const _height = getHeight(height) ? getHeight(height) : "";
  const _alignItems = getAlignItemsValue(alignItems)
    ? getAlignItemsValue(alignItems)
    : "";
  const _justifyContent = getJustifyContent(JustifyContent)
    ? getJustifyContent(JustifyContent)
    : "";
  return (
    <div
      className={`${_width} ${_height} flex ${_spaceX} ${_alignItems} ${_justifyContent}`}
    >
      {children}
    </div>
  );
}
