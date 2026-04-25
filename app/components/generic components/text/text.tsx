export default function Text({
  padding,
  fontSize,
  children,

  fontWeight,
}: {
  padding?: number;
  children: React.ReactNode;
  fontWeight?: "600" | "700" | "800";

  fontSize?:
    | "sm"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
}) {
  const fontSizes = new Map<string, string>([
    ["xs", "text-xs"],
    ["sm", "text-sm"],
    ["lg", "text-lg"],
    ["xl", "text-xl"],
    ["2xl", "text-2xl"],
    ["3xl", "text-3xl"],
    ["4xl", "text-4xl"],
    ["5xl", "text-5xl"],
    ["6xl", "text-6xl"],
    ["7xl", "text-7xl"],
    ["8xl", "text-8xl"],
    ["9xl", "text-9xl"],
  ]);
  return (
    <div style={{ padding: `calc(var(--spacing) * ${padding})` }}>
      <p
        style={{ fontWeight: fontWeight }}
        className={`${fontSizes.get(fontSize ? fontSize : "")}`}
      >
        {children}
      </p>
    </div>
  );
}
