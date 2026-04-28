export default function GridRowSpan({
  children,
  rowSpan,
}: {
  rowSpan: string;
  children: React.ReactNode;
}) {
  return <div className={`${rowSpan}`}>{children}</div>;
}
