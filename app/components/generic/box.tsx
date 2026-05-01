import { getBg } from "@/app/csss-mapping/background/bg";
import { getBorderColor } from "@/app/csss-mapping/border/border-color";
import { getBorderWidth } from "@/app/csss-mapping/border/border-w";
import { getHeight } from "@/app/csss-mapping/height/height";
import { getMaxHeight } from "@/app/csss-mapping/height/max-h";
import { getMargin } from "@/app/csss-mapping/margin/margin";
import { getMarginB } from "@/app/csss-mapping/margin/margin-b";
import { getMarginL } from "@/app/csss-mapping/margin/margin-l";
import { getMarginR } from "@/app/csss-mapping/margin/margin-r";
import { getMarginT } from "@/app/csss-mapping/margin/margin-t";
import { getMarginX } from "@/app/csss-mapping/margin/margin-x";
import { getMarginY } from "@/app/csss-mapping/margin/margin-y";
import { getOverFlowY } from "@/app/csss-mapping/overyflow/overflow-y";
import { getPadding } from "@/app/csss-mapping/padding/padding";
import { getPaddingB } from "@/app/csss-mapping/padding/padding-b";
import { getPaddingL } from "@/app/csss-mapping/padding/padding-l";
import { getPaddingR } from "@/app/csss-mapping/padding/padding-r";
import { getPaddingT } from "@/app/csss-mapping/padding/padding-t";
import { getPaddingX } from "@/app/csss-mapping/padding/padding-x";
import { getPaddingY } from "@/app/csss-mapping/padding/padding-y";
import { getBottom } from "@/app/csss-mapping/position/bottom";
import { getLeft } from "@/app/csss-mapping/position/left";
import { getPostion } from "@/app/csss-mapping/position/postion";
import { getRight } from "@/app/csss-mapping/position/right";
import { getTop } from "@/app/csss-mapping/position/top";
import { getZIndex } from "@/app/csss-mapping/position/z index";
import { getRounded } from "@/app/csss-mapping/rounded/rounded";
import { getRoundedB } from "@/app/csss-mapping/rounded/rounded-b";
import { getRoundedBL } from "@/app/csss-mapping/rounded/rounded-bl";
import { getRoundedBR } from "@/app/csss-mapping/rounded/rounded-br";
import { getRoundedL } from "@/app/csss-mapping/rounded/rounded-l";
import { getRoundedR } from "@/app/csss-mapping/rounded/rounded-r";
import { getRoundedT } from "@/app/csss-mapping/rounded/rounded-t";
import { getRoundedTL } from "@/app/csss-mapping/rounded/rounded-tl";
import { getRoundedTR } from "@/app/csss-mapping/rounded/rounded-tr";
import { getShadow } from "@/app/csss-mapping/shadow/shadow";
import { BgValueType } from "@/app/csss-mapping/types/background/bg";
import { BorderColorValueType } from "@/app/csss-mapping/types/border/border color-t";
import { BorderWidthValueType } from "@/app/csss-mapping/types/border/border width-t";
import { HeightValueType } from "@/app/csss-mapping/types/height/height-t";
import { OverFlowValueType } from "@/app/csss-mapping/types/overflow/overflow-t";
import { PositionValueType } from "@/app/csss-mapping/types/position/position-t";
import { RoundedValueType } from "@/app/csss-mapping/types/rounded/rounded-t";
import { ShadowvalueType } from "@/app/csss-mapping/types/shadows/shadow-t";
import { IntegerValueType } from "@/app/csss-mapping/types/values/integer-values-t";
import { PositiveValueType } from "@/app/csss-mapping/types/values/postive-values-t";
import { WidthValueType } from "@/app/csss-mapping/types/width/width-t";
import { getMaxWidth } from "@/app/csss-mapping/width/max-w";
import { getWidth } from "@/app/csss-mapping/width/width";

export default function Box({
  children,
  height,
  width,
  maxWidth,
  maxHeight,
  padding,
  paddingX,
  paddingY,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,

  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  margin,
  marginX,
  marginY,
  shadow,
  borderRadius,
  borderRadiusBottom,
  borderRadiusTop,
  borderRadiusRight,
  borderRadiusLeft,
  borderRadiusBottomLeft,
  borderRadiusBottomRight,
  borderRadiusTopLeft,
  borderRadiusTopRight,
  backgroundImageUrl,
  background,
  overFlowY,
  position,
  bottom,
  borderWidth,
  borderColor,
  left,
  right,
  top,
  zIndex,
}: {
  height?: HeightValueType | PositiveValueType;
  width?: WidthValueType | PositiveValueType;
  maxHeight?: HeightValueType | PositiveValueType;
  maxWidth?: WidthValueType | PositiveValueType;
  padding?: PositiveValueType;
  paddingX?: PositiveValueType;
  paddingTop?: PositiveValueType;
  paddingBottom?: PositiveValueType;
  paddingLeft?: PositiveValueType;
  paddingRight?: PositiveValueType;
  paddingY?: PositiveValueType;

  marginTop?: IntegerValueType;
  marginBottom?: IntegerValueType;
  marginLeft?: IntegerValueType;
  marginRight?: IntegerValueType;

  margin?: IntegerValueType;
  marginX?: IntegerValueType;
  marginY?: IntegerValueType;
  shadow?: ShadowvalueType;

  borderRadius?: RoundedValueType;
  borderRadiusTop?: RoundedValueType;
  borderRadiusBottom?: RoundedValueType;
  borderRadiusLeft?: RoundedValueType;
  borderRadiusRight?: RoundedValueType;
  borderRadiusTopLeft?: RoundedValueType;
  borderRadiusTopRight?: RoundedValueType;
  borderRadiusBottomLeft?: RoundedValueType;
  borderRadiusBottomRight?: RoundedValueType;
  backgroundImageUrl?: RoundedValueType;
  overFlowY?: OverFlowValueType;
  background?: BgValueType;
  position?: PositionValueType;
  top?: IntegerValueType;
  left?: IntegerValueType;
  right?: IntegerValueType;
  bottom?: IntegerValueType;
  children?: React.ReactNode;
  zIndex?: IntegerValueType;
  borderWidth?: BorderWidthValueType;
  borderColor?: BorderColorValueType;
}) {
  const _width = getWidth(width) ? getWidth(width) : "";
  const _height = getHeight(height) ? getHeight(height) : "";
  const _maxWidth = getMaxWidth(maxWidth) ? getMaxWidth(maxWidth) : "";
  const _maxHeight = getMaxHeight(maxHeight) ? getMaxHeight(maxHeight) : "";
  const _padding = getPadding(padding) ? getPadding(padding) : "";
  const _paddingB = getPaddingB(paddingBottom)
    ? getPaddingB(paddingBottom)
    : "";

  const _paddingT = getPaddingT(paddingTop) ? getPaddingT(paddingTop) : "";
  const _paddingL = getPaddingL(paddingLeft) ? getPaddingL(paddingLeft) : "";
  const _paddingRight = getPaddingR(paddingRight)
    ? getPaddingR(paddingRight)
    : "";

  const _paddingX = getPaddingX(paddingX) ? getPaddingX(paddingX) : "";
  const _paddingY = getPaddingY(paddingY) ? getPaddingY(paddingY) : "";

  const _margin = getMargin(margin) ? getMargin(margin) : "";
  const _marginL = getMarginL(marginLeft) ? getMarginL(marginLeft) : "";
  const _marginR = getMarginR(marginRight) ? getMarginR(marginRight) : "";

  const _marginB = getMarginB(marginBottom) ? getMarginB(marginBottom) : "";
  const _marginT = getMarginT(marginTop) ? getMarginT(marginTop) : "";

  const _marginX = getMarginX(marginX) ? getMarginX(marginX) : "";
  const _marginY = getMarginY(marginY) ? getMarginY(marginY) : "";

  const _rounded = getRounded(borderRadius) ? getRounded(borderRadius) : "";
  const _roundedT = getRoundedT(borderRadiusTop)
    ? getRoundedT(borderRadiusTop)
    : "";
  const _roundedB = getRoundedB(borderRadiusBottom)
    ? getRoundedB(borderRadiusBottom)
    : "";
  const _roundedL = getRoundedL(borderRadiusLeft)
    ? getRoundedL(borderRadiusLeft)
    : "";
  const _roundedR = getRoundedR(borderRadiusRight)
    ? getRoundedR(borderRadiusRight)
    : "";

  const _roundedTL = getRoundedTL(borderRadiusTopLeft)
    ? getRoundedTL(borderRadiusTopLeft)
    : "";
  const _roundedTR = getRoundedTR(borderRadiusTopRight)
    ? getRoundedTR(borderRadiusTopRight)
    : "";

  const _roundedBL = getRoundedBL(borderRadiusBottomLeft)
    ? getRoundedBL(borderRadiusBottomLeft)
    : "";
  const _roundedBr = getRoundedBR(borderRadiusBottomRight)
    ? getRoundedBR(borderRadiusBottomRight)
    : "";

  const _shadow = getShadow(shadow) ? getShadow(shadow) : "";
  const _bgColor = getBg(background) ? getBg(background) : "";
  const _overFlowY = getOverFlowY(overFlowY) ? getOverFlowY(overFlowY) : "";
  const _position = getPostion(position) ? getPostion(position) : "";

  const _top = getTop(top) ? getTop(top) : "";
  const _bottom = getBottom(top) ? getBottom(bottom) : "";
  const _left = getLeft(top) ? getLeft(left) : "";
  const _right = getRight(top) ? getRight(right) : "";

  const _borderW = getBorderWidth(borderWidth)
    ? getBorderWidth(borderWidth)
    : "";
  const _borderC = getBorderColor(borderColor)
    ? getBorderColor(borderColor)
    : "";

  const _zIndex = getZIndex(zIndex) ? getZIndex(zIndex) : "";
  return (
    <div
      style={{
        backgroundImage: "url(" + `${backgroundImageUrl}` + ")",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className={`
        ${_width}
        ${_height}
        ${_maxWidth}
        ${_maxHeight}

        ${_padding}
        ${_paddingX}
        ${_paddingY}
        ${_paddingB}
        ${_paddingT}
        ${_paddingL}
        ${_paddingRight}

        ${_margin}
        ${_marginX}
        ${_marginY}
        ${_marginB}
        ${_marginT}
        ${_marginL}
        ${_marginR}

        ${_rounded}
        ${_roundedT}
        ${_roundedB}
        ${_roundedL}
        ${_roundedR}
        ${_roundedTL}
        ${_roundedTR}
        ${_roundedBL}
        ${_roundedBr}

        ${_position}
        ${_top}
        ${_left}
        ${_bottom}
        ${_right}
        ${_zIndex}

        ${_overFlowY}
        ${_borderW}
        ${_borderC}

        ${_bgColor}
        ${_shadow}
        `}
    >
      {children}
    </div>
  );
}
