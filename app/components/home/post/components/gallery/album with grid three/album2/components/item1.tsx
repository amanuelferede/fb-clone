export default function Item1({
  children,
  url,
}: {
  url: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className="w-full h-full"
      style={{
        backgroundImage: "url(" + `${url}` + ")",
        backgroundPositionY: "25%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
}
