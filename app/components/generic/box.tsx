export default function Box({
  children,
  height,
  width,
  maxWidth,
  maxHeight,
  padding,
  paddingX,
  paddingY,
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
        `}
    >
      {children}
    </div>
  );
}
