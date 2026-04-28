export default function GridColSpan({
  children,
  colSpan,
}: {
  colSpan: string;
  children: React.ReactNode;
}) {
  return <div className={`${colSpan}`}>{children}</div>;
}
