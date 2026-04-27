export default function MediasContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full md:h-screen h-[50vh] mt-2">{children}</div>;
}
