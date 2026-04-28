export default function Text({
  children,
  fontWeight,
  as,
  color,
  fontSize,
}: {
  as?: "p" | "span";
  color?: string;
  fontWeight?: string;
  fontSize?: string;
  children: React.ReactNode;
}) {
  if (as) {
    if (as === "p") {
      return <p className={`${fontSize} ${fontWeight} ${color}`}>{children}</p>;
    }
    return (
      <span className={`${fontSize} ${fontWeight} ${color}`}>{children}</span>
    );
  }
  return <p className={` ${fontSize} ${fontWeight} ${color}`}>{children}</p>;
}
