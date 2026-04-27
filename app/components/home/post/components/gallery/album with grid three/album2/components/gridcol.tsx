export default function GridCol({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-[50vh] grid grid-cols-2 gap-1">{children}</div>
  );
}
