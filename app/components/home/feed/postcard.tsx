export default function PostCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white shadow-sm rounded-xl mt-3 px-3 pb-2">
      {children}
    </div>
  );
}
