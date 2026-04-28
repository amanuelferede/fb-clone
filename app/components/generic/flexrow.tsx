export default function FlexRow({
  children,
  spaceX,
  alignItems,
  height,
  width,
  JustifyContent,
}: {
  children: React.ReactNode;
  spaceX: string;
  height?: string;
  width?: string;
  alignItems?: "center" | "start" | "end";
  JustifyContent?: "center" | "start" | "end" | "around" | "between";
}) {
  const _alignItemsVarients = new Map<string, string>([
    ["center", "items-center"],
    ["end", "items-end"],
    ["start", "items-start"],
  ]);

  const _justifyContentVarients = new Map<string, string>([
    ["center", "justify-center"],
    ["end", "justify-end"],
    ["start", "justify-start"],
    ["around", "justify-around"],
    ["between", "justify-between"],
  ]);

  const _justifyContent = JustifyContent
    ? _justifyContentVarients.get(JustifyContent)
    : "";
  const _alignItems = alignItems ? _alignItemsVarients.get(alignItems) : "";
  return (
    <div
      className={`${width} ${height} flex ${spaceX} ${_alignItems} ${_justifyContent}`}
    >
      {children}
    </div>
  );
}
