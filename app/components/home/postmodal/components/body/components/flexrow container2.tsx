export default function FlexRow2({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex space-x-0.5 bg-gray-200 p-1 items-center justify-center rounded-md">
      {children}
    </div>
  );
}
