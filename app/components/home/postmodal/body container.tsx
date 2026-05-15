export default function PostModalBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-h-73 p-2.5 overflow-y-auto relative">{children}</div>
  );
}
