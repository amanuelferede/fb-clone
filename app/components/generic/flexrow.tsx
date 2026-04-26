export default function RFlexRow({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={`flex ${className}`}>{children}</div>;
}
