import { getGridColSpan } from "@/app/csss-mapping/grid/col-span";
import { GridColSpanValueType } from "@/app/csss-mapping/types/grid/col-span-t";

export default function GridColSpan({
  children,
  span,
}: {
  span: GridColSpanValueType;
  children: React.ReactNode;
}) {
  const _colSpan = getGridColSpan(span) ? getGridColSpan(span) : "";
  return <div className={`${_colSpan}`}>{children}</div>;
}
