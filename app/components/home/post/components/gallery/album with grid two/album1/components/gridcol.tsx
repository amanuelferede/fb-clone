export default function GridCol({ children }: { children: React.ReactNode }) {
  return <div className="h-full grid grid-cols-2 gap-1">{children}</div>;
}
