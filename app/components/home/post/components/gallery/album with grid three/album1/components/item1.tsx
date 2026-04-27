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
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
}
