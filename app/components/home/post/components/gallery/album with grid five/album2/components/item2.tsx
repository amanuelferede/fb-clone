export default function Item2({
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
        backgroundPositionY: "20%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
}
