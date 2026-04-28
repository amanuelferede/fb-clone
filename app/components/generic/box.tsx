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
  rounded,
  roundedBottom,
  roundedTop,
  roundedRight,
  roundedLeft,
  roundedBottomLeft,
  roundedBottomRight,
  roundedTopLeft,
  roundedTopRight,
  backgroundImageUrl,
  backgroundColor,
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
  height?: string;
  width?: string;
  maxHeight?: string;
  maxWidth?: string;
  padding?: string;
  paddingX?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;

  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;

  paddingY?: string;
  margin?: string;
  marginX?: string;
  marginY?: string;
  shadow?: string;
  rounded?: string;
  roundedTop?: string;
  roundedBottom?: string;
  roundedLeft?: string;
  roundedRight?: string;
  roundedTopLeft?: string;
  roundedTopRight?: string;
  roundedBottomLeft?: string;
  roundedBottomRight?: string;
  backgroundImageUrl?: string;
  overFlowY?: string;
  backgroundColor?: string;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  children?: React.ReactNode;
  zIndex?: string;
  borderWidth?: string;
  borderColor?: string;
}) {
  return (
    <div
      style={{
        backgroundImage: "url(" + `${backgroundImageUrl}` + ")",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className={`
        ${height} 
        ${width} 
        ${maxWidth}
        ${maxHeight}
        ${padding} 
        ${paddingX} 
        ${paddingY}
        ${marginBottom}
        ${marginTop}
        ${marginLeft}
        ${marginRight}
        ${paddingBottom}
        ${paddingTop}
        ${paddingLeft}
        ${paddingRight}
        ${margin} 
        ${marginX} 
        ${marginY} 
        ${shadow} 
        ${rounded} 
        ${roundedBottom} 
        ${roundedTop} 
        ${roundedLeft} 
        ${roundedRight}
        ${roundedBottomLeft}
        ${roundedBottomRight}
        ${roundedTopLeft}
        ${roundedTopRight}
        ${overFlowY}
        ${backgroundColor}
        ${position}
        ${top}
        ${left}
        ${right}
        ${bottom}
        ${zIndex}
        ${borderWidth}
        ${borderColor}
        `}
    >
      {children}
    </div>
  );
}
