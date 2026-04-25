export default function ModalBody({
  padding,
  children,
  maxHeight,
}: {
  padding: number;
  maxHeight: number | undefined;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${maxHeight ? "overflow-y-auto" : ""}`}
      style={{
        maxHeight: maxHeight ? maxHeight : "initial",
        padding: `calc(var(--spacing) * ${padding})`,
      }}
    >
      {children}
    </div>
  );
}
