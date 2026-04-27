export default function GridRow({ children }: { children: React.ReactNode }) {
  return <div className="h-full grid grid-rows-12 gap-1">{children}</div>;
}
