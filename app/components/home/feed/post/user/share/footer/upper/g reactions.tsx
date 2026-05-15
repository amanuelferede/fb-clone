"use client";
import { useAppDispatch } from "@/app/store/hooks";
import { isOpen } from "@/app/store/slices/modal state";
import { openReactionModalForThisPost } from "@/app/store/slices/post/user/share";
import Image from "next/image";
export default function GReactions() {
  const dispatch = useAppDispatch();
  const showReactionModal = (currentReactionType: string) => {
    dispatch(isOpen(true));
    dispatch(
      openReactionModalForThisPost({
        currentReactionType: currentReactionType,
        isOpen: true,
      })
    );
  };
  return (
    <div className="flex items-center space-x cursor-pointer">
      <div className="flex items-center -space-x-1.5">
        <Image
          onClick={() => {
            showReactionModal("love");
          }}
          alt="like"
          src={`/reactions/like.png`}
          width={22}
          height={22}
        />
        <Image alt="love" src={`/reactions/love.png`} width={22} height={22} />
        <Image alt="like" src={`/reactions/care.png`} width={22} height={22} />
      </div>

      <p className=" text-zinc-500 text-[0.99rem]">Betty Alex and others</p>
    </div>
  );
}
