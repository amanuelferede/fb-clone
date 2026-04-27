export default function Header({ children }: { children: React.ReactNode }) {
  return <div className="flex space-x-3 px-3 pt-3 pb-1.5">{children}</div>;
}
