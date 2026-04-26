export default function FlexRow({ children }: { children: React.ReactNode }) {
  return <div className={`flex px-3 pt-3 pb-1.5 space-x-3`}>{children}</div>;
}
