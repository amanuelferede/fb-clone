export default function GridRow({
  children,
  gridRows,
  height,
  width,
  gap,
}: {
  gridRows: string;
  gap?: string;
  height?: string;
  width?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${width} ${height} grid ${gap} ${gridRows}`}>
      {children}
    </div>
  );
}
