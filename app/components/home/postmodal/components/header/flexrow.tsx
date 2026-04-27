export default function FlexRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex sticky top-0 left-0 right-0 items-center justify-between p-3 border-b border-b-gray-100">
      {children}
    </div>
  );
}
