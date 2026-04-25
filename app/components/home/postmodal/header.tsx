import Image from "next/image";
export default function Header() {
  return (
    <div className="flex space-x-2 mb-2">
      <Image
        src={`/users/11.jpg`}
        alt="User"
        width={0}
        height={0}
        sizes="100vh"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col">
        <p className="font-semibold text-sm">Amanuel Ferede</p>
        <button className="flex space-x-0.5 bg-gray-200 p-1 items-center justify-center rounded-md">
          <Image
            src={`/add post/group.png`}
            alt="User"
            width={0}
            height={0}
            sizes="100vh"
            className="w-4 h-4"
          />
          <p className="text-sm">Freinds</p>
        </button>
      </div>
    </div>
  );
}
