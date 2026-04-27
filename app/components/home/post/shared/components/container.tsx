export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full p-3">
      <div className="border border-gray-300 rounded-xl pb-1.5">{children}</div>
    </div>
  );
}
