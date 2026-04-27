export default function Item2({
  children,
  url,
}: {
  url: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className="w-full h-[50vh] bg-amber-500"
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
