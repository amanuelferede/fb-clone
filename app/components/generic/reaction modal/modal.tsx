export default function ReactionModal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed z-50 top-0 left-0 right-0 bottom-0 bg-gray-300/70">
      <div className="max-w-125  bg-white mx-auto mt-24 shadow-lg rounded-xl">
        {children}
      </div>
    </div>
  );
}
