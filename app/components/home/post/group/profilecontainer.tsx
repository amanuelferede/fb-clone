export default function ProfileContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-12 h-12 relative rounded-lg">{children}</div>;
}
