export default function GridRow({ children }: { children: React.ReactNode }) {
  return <div className="h-full grid grid-rows-2 gap-1">{children}</div>;
}
