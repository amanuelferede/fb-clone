export default function Card({
  padding,
  children,
  elevation,
  corner,
  cornerTop,
  cornerBottom,
  cornerLeft,
  cornerRight,
  cornerTopRight,
  cornerBottomLeft,
  cornerBottomRight,
  cornerTopLeft,
}: {
  padding?: number;
  children: React.ReactNode;
  elevation: "sm" | "md" | "lg" | "xl" | "2xl";
  corner?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  cornerTop?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  cornerBottom?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  cornerLeft?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  cornerRight?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  cornerTopRight?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  cornerTopLeft?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  cornerBottomLeft?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  cornerBottomRight?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
}) {
  const elevations = new Map<string, string>([
    ["sm", "text-sm"],
    ["md", "text-md"],
    ["lg", "text-lg"],
    ["xl", "text-xl"],
    ["2xl", "text-2xl"],
  ]);
  const corners = new Map<string, string>([
    ["xs", "rounded-xs"],
    ["sm", "rounded-sm"],
    ["md", "rounded-md"],
    ["lg", "rounded-lg"],
    ["xl", "rounded-xl"],
    ["2xl", "rounded-2xl"],
    ["3xl", "rounded-3xl"],
    ["4xl", "rounded-4xl"],
    ["full", "rounded-full"],
    ["default", ""],
  ]);

  const corners_t = new Map<string, string>([
    ["xs", "rounded-t-xs"],
    ["sm", "rounded-t-sm"],
    ["md", "rounded-t-md"],
    ["lg", "rounded-t-lg"],
    ["xl", "rounded-t-xl"],
    ["2xl", "rounded-t-2xl"],
    ["3xl", "rounded-t-3xl"],
    ["4xl", "rounded-t-4xl"],
    ["full", "rounded-t-full"],
    ["default", ""],
  ]);
  const corners_b = new Map<string, string>([
    ["xs", "rounded-b-xs"],
    ["sm", "rounded-b-sm"],
    ["md", "rounded-b-md"],
    ["lg", "rounded-b-lg"],
    ["xl", "rounded-b-xl"],
    ["2xl", "rounded-b-2xl"],
    ["3xl", "rounded-b-3xl"],
    ["4xl", "rounded-b-4xl"],
    ["full", "rounded-b-full"],
    ["default", ""],
  ]);
  const corners_l = new Map<string, string>([
    ["xs", "rounded-l-xs"],
    ["sm", "rounded-l-sm"],
    ["md", "rounded-l-md"],
    ["lg", "rounded-l-lg"],
    ["xl", "rounded-l-xl"],
    ["2xl", "rounded-l-2xl"],
    ["3xl", "rounded-l-3xl"],
    ["4xl", "rounded-l-4xl"],
    ["full", "rounded-l-full"],
    ["default", ""],
  ]);

  const corners_r = new Map<string, string>([
    ["xs", "rounded-r-xs"],
    ["sm", "rounded-r-sm"],
    ["md", "rounded-r-md"],
    ["lg", "rounded-r-lg"],
    ["xl", "rounded-r-xl"],
    ["2xl", "rounded-r-2xl"],
    ["3xl", "rounded-r-3xl"],
    ["4xl", "rounded-r-4xl"],
    ["full", "rounded-r-full"],
    ["default", ""],
  ]);

  const corners_tr = new Map<string, string>([
    ["xs", "rounded-tr-xs"],
    ["sm", "rounded-tr-sm"],
    ["md", "rounded-tr-md"],
    ["lg", "rounded-tr-lg"],
    ["xl", "rounded-tr-xl"],
    ["2xl", "rounded-tr-2xl"],
    ["3xl", "rounded-tr-3xl"],
    ["4xl", "rounded-tr-4xl"],
    ["full", "rounded-tr-full"],
    ["default", ""],
  ]);

  const corners_tl = new Map<string, string>([
    ["xs", "rounded-tl-xs"],
    ["sm", "rounded-tl-sm"],
    ["md", "rounded-tl-md"],
    ["lg", "rounded-tl-lg"],
    ["xl", "rounded-tl-xl"],
    ["2xl", "rounded-tl-2xl"],
    ["3xl", "rounded-tl-3xl"],
    ["4xl", "rounded-tl-4xl"],
    ["full", "rounded-tl-full"],
    ["default", ""],
  ]);

  const corners_br = new Map<string, string>([
    ["xs", "rounded-br-xs"],
    ["sm", "rounded-br-sm"],
    ["md", "rounded-br-md"],
    ["lg", "rounded-br-lg"],
    ["xl", "rounded-br-xl"],
    ["2xl", "rounded-br-2xl"],
    ["3xl", "rounded-br-3xl"],
    ["4xl", "rounded-br-4xl"],
    ["full", "rounded-br-full"],
    ["default", ""],
  ]);

  const corners_bl = new Map<string, string>([
    ["xs", "rounded-bl-xs"],
    ["sm", "rounded-bl-sm"],
    ["md", "rounded-bl-md"],
    ["lg", "rounded-bl-lg"],
    ["xl", "rounded-bl-xl"],
    ["2xl", "rounded-bl-2xl"],
    ["3xl", "rounded-bl-3xl"],
    ["4xl", "rounded-bl-4xl"],
    ["full", "rounded-bl-full"],
    ["default", ""],
  ]);
  return (
    <div
      className={`bg-white
        
        ${corner ? corners.get(corner) : corners.get("default")}
        ${cornerTop ? corners_t.get(cornerTop) : corners_t.get("default")}
        ${cornerBottom ? corners_b.get(cornerBottom) : corners_b.get("default")}
        ${cornerLeft ? corners_l.get(cornerLeft) : corners_l.get("default")}
        ${cornerRight ? corners_r.get(cornerRight) : corners_r.get("default")}
        ${cornerTopRight ? corners_tr.get(cornerTopRight) : corners_tr.get("default")}
        ${cornerTopLeft ? corners_tl.get(cornerTopLeft) : corners_tl.get("default")}
        ${cornerBottomLeft ? corners_bl.get(cornerBottomLeft) : corners_bl.get("default")}
        ${cornerBottomRight ? corners_br.get(cornerBottomRight) : corners_br.get("default")}
        ${elevations.get(elevation)}
        `}
      style={{ padding: `calc(var(--spacing) * ${padding})` }}
    >
      {children}
    </div>
  );
}
