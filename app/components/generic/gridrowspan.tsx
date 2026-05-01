import { getGridRowSpan } from "@/app/csss-mapping/grid/row-span";
import { GridRowSpanValueType } from "@/app/csss-mapping/types/grid/rows-span-t";

export default function GridRowSpan({
  children,
  span,
}: {
  span: GridRowSpanValueType;
  children: React.ReactNode;
}) {
  const _rowSpan = getGridRowSpan(span) ? getGridRowSpan(span) : "";
  return <div className={`${_rowSpan}`}>{children}</div>;
}
