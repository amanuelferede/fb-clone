export default function FlexColumn({
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
        className={`flex flex-col`}
        style={{
          rowGap: `calc(var(--spacing) * ${spacing})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
