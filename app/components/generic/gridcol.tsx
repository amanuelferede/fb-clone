export default function GridCol({
  children,
  gridCols,
  width,
  height,
  gap,
}: {
  gridCols: string;
  gap?: string;
  height?: string;
  width?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${width} ${height} grid ${gridCols} ${gap}`}>
      {children}
    </div>
  );
}
