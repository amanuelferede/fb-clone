export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="w-12 h-12 relative rounded-lg">{children}</div>;
}
