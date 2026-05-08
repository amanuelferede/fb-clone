export default function ReactorsContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col space-y-4 p-3 max-h-105 overflow-y-auto">
      {children}
    </div>
  );
}
