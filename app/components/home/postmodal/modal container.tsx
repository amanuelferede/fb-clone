export default function PostModal({ children }: { children: React.ReactNode }) {
  return (
    <form className="fixed z-50 top-0 left-0 right-0 bottom-0 bg-gray-500/80">
      <div className="max-w-125 mx-auto mt-20 bg-white rounded-xl shadow-xl">
        {children}
      </div>
    </form>
  );
}
