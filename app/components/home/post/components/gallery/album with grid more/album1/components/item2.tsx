export default function Item2({
  children,
  url,
  index,
  remaining,
}: {
  url: string;
  children?: React.ReactNode;
  remaining: number;
  index: number;
}) {
  return (
    <div
      className="w-full h-[25vh] relative"
      style={{
        backgroundImage: "url(" + `${url}` + ")",
        backgroundPositionY: "20%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
      {index === 3 && (
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/50 flex items-center justify-center">
          <p className="text-4xl text-white font-semibold">{remaining}+</p>
        </div>
      )}
    </div>
  );
}
