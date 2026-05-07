export default function AlbumContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="md:h-[90vh] h-40 overflow-y-hidden">{children}</div>;
}
