import { getGridCol } from "@/app/csss-mapping/grid/cols";
import { getGap } from "@/app/csss-mapping/grid/gap";
import { getHeight } from "@/app/csss-mapping/height/height";
import { GridColValueType } from "@/app/csss-mapping/types/grid/cols-t";
import { HeightValueType } from "@/app/csss-mapping/types/height/height-t";
import { PositiveValueType } from "@/app/csss-mapping/types/values/postive-values-t";
import { WidthValueType } from "@/app/csss-mapping/types/width/width-t";
import { getWidth } from "@/app/csss-mapping/width/width";

export default function GridCol({
  children,
  cols,
  width,
  height,
  gap,
}: {
  cols: GridColValueType;
  gap?: PositiveValueType;
  height?: HeightValueType | PositiveValueType;
  width?: WidthValueType | PositiveValueType;
  children: React.ReactNode;
}) {
  const _width = getWidth(width) ? getWidth(width) : "";
  const _height = getHeight(height) ? getHeight(height) : "";
  const _cols = getGridCol(cols) ? getGridCol(cols) : "";
  const _gap = getGap(gap) ? getGap(gap) : "";
  return (
    <div className={`gap- ${_width} ${_height} grid ${_cols} ${_gap}`}>
      {children}
    </div>
  );
}
