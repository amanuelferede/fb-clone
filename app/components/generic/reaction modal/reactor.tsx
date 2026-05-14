import { users } from "@/app/seed/faker/user";
import Image from "next/image";
export default function Reactor({ index }: { index: number }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex space-x-3">
        <div className="relative w-8 h-8 rounded-full">
          <Image
            src={`${users[index].profilepic}`}
            alt="User"
            width={0}
            height={0}
            sizes="100vh"
            className="w-8 h-8 rounded-full"
          />
          <Image
            src={`/reactions/like.png`}
            alt="User"
            width={0}
            height={0}
            sizes="100vh"
            className="w-5 h-5 rounded-full absolute -bottom-1 -right-1"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-[0.95rem] font-normal">{users[index].fname}</p>
        </div>
      </div>
      <button className="bg-gray-200 px-2 py-1.5 rounded-md flex space-x-1 items-center justify-center">
        <Image
          src={`/add post/group.png`}
          alt="User"
          width={0}
          height={0}
          sizes="100vh"
          className="w-4 h-4 rounded-full"
        />
        <span className="text-[0.95rem]">Add Freind</span>
      </button>
    </div>
  );
}
