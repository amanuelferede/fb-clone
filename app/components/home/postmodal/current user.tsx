import Image from "next/image";
export default function CurrentUser() {
  return (
    <div className="flex space-x-2 p-2.5">
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
        <div className="flex space-x-1.5">
          <Image
            src={`/add post/group.png`}
            alt="User"
            width={0}
            height={0}
            sizes="100vh"
            className="w-4 h-4"
          />
          <p className="text-sm">Freinds</p>
        </div>
      </div>
    </div>
  );
}
