import { getGap } from "@/app/csss-mapping/grid/gap";
import { getGridRow } from "@/app/csss-mapping/grid/rows";
import { getHeight } from "@/app/csss-mapping/height/height";
import { GridRowValueType } from "@/app/csss-mapping/types/grid/rows-t";
import { HeightValueType } from "@/app/csss-mapping/types/height/height-t";
import { PositiveValueType } from "@/app/csss-mapping/types/values/postive-values-t";
import { WidthValueType } from "@/app/csss-mapping/types/width/width-t";
import { getWidth } from "@/app/csss-mapping/width/width";

export default function GridRow({
  children,
  rows,
  height,
  width,
  gap,
}: {
  rows: GridRowValueType;
  gap?: PositiveValueType;
  height?: HeightValueType | PositiveValueType;
  width?: WidthValueType | PositiveValueType;
  children: React.ReactNode;
}) {
  const _width = getWidth(width) ? getWidth(width) : "";
  const _height = getHeight(height) ? getHeight(height) : "";
  const _rows = getGridRow(rows) ? getGridRow(rows) : "";
  const _gap = getGap(gap) ? getGap(gap) : "";
  return (
    <div className={`${_width} ${_height} grid ${_rows} ${_gap} `}>
      {children}
    </div>
  );
}
