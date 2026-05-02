export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full pt-2 overflow-y-hidden md:min-h-screen h-40">
      {children}
    </div>
  );
}
