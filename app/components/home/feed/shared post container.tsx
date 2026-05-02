export default function SharePostContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full p-2">
      <div className="border border-gray-300 rounded-xl p-2">{children}</div>
    </div>
  );
}
