export default function Container({ children }: { children: React.ReactNode }) {
  return <div className={`max-h-73 overflow-y-auto relative`}>{children}</div>;
}
