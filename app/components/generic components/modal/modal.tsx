import { MaxWidth } from "./types";

export default function Modal({
  children,
  maxWidth,
}: Readonly<{
  children: React.ReactNode;
  maxWidth: MaxWidth | number;
}>) {
  const maxWidths = new Map<MaxWidth | number, string>([
    ["lg", "max-w-lg"],
    ["xl", "max-w-xl"],
    ["2xl", "max-w-2xl"],
    ["3xl", "max-w-3xl"],
    ["4xl", "max-w-4xl"],
    ["5xl", "max-w-5xl"],
    ["6xl", "max-w-6xl"],
    ["7xl", "max-w-7xl"],
  ]);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50">
      <div
        className={`  ${maxWidths.get(maxWidth)}  mx-auto h-30 bg-white`}
        style={
          typeof maxWidth === "number"
            ? { maxWidth: `calc(var(--spacing) * ${maxWidth} )` }
            : {}
        }
      >
        {children}
      </div>
    </div>
  );
}
