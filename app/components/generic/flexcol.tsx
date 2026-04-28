export default function FlexCol({
  children,
  spaceY,
}: {
  children: React.ReactNode;
  spaceY?: string;
}) {
  return <div className={` flex flex-col ${spaceY}`}>{children}</div>;
}
