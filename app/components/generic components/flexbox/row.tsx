export default function FlexRow({
  padding,
  children,
  spacing,
}: {
  padding?: number;
  children: React.ReactNode;
  spacing?: number;
}) {
  return (
    <div
      className={``}
      style={{ padding: `calc(var(--spacing) * ${padding})` }}
    >
      <div
        className={`flex`}
        style={{
          columnGap: `calc(var(--spacing) * ${spacing})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
