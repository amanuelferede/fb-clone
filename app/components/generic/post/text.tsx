export default function Text({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`px-2.5 ${className}`}>{children}</div>;
}
