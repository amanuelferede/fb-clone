export default function ModalFooter({
  isSticky,
  padding,
  children,
}: {
  isSticky: boolean;
  padding: number;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${isSticky ? "sticky bottom-0 left-0 right-0" : ""}`}
      style={{ padding: `calc(var(--spacing) * ${padding})` }}
    >
      {children}
    </div>
  );
}
