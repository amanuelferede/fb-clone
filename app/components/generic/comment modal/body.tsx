export default function CommentModalBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-h-93 overflow-y-auto custom-scrollbar m-0">
      {children}
    </div>
  );
}
