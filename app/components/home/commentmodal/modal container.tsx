export default function ModalContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed z-50 top-0 left-0 right-0 bottom-0 bg-gray-300/80">
      <div className="max-w-179 mx-auto mt-10 bg-white rounded-xl shadow-xl">
        {children}
      </div>
    </div>
  );
}
