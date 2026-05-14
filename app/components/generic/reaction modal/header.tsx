"use client";
import Image from "next/image";
import { CgClose } from "react-icons/cg";
export default function ReactionModalHeader({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="flex sticky top-0 left-0 right-0 items-center justify-between p-3 border-b border-b-gray-100">
      <div className="flex space-x-3">
        <p>All</p>
        <div className="flex space-x-1">
          <Image
            src={`/reactions/like.png`}
            alt="User"
            width={0}
            height={0}
            sizes="100vh"
            className="w-6 h-6 rounded-full"
          />
          <p>22</p>
        </div>
        <div className="flex space-x-1">
          <Image
            src={`/reactions/love.png`}
            alt="User"
            width={0}
            height={0}
            sizes="100vh"
            className="w-6 h-6 rounded-full"
          />
          <p>45</p>
        </div>
        <div className="flex space-x-1">
          <Image
            src={`/reactions/care.png`}
            alt="User"
            width={0}
            height={0}
            sizes="100vh"
            className="w-6 h-6 rounded-full"
          />
          <p>32</p>
        </div>
      </div>
      <CgClose
        className="w-8 rounded-full h-8 p-1 text-zinc-600 cursor-pointer bg-gray-200 hover:bg-gray-300"
        onClick={onClose}
      />
    </div>
  );
}
