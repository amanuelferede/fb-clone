"use client";
import { useAppDispatch } from "@/app/store/hooks";
import { openCommentModalForThisPost } from "@/app/store/slices/post/page/share";
import Image from "next/image";
export default function Comment() {
  const dispatch = useAppDispatch();

  const showCommentModal = () => {
    dispatch(openCommentModalForThisPost(true));
  };
  return (
    <div
      className="flex  space-x-1 grow px-1.5 py-1.5 items-center justify-center cursor-pointer rounded-sm hover:bg-zinc-50"
      onClick={showCommentModal}
    >
      <Image
        alt="comment"
        src={`/post footer/comment.png`}
        width={20}
        height={20}
        className="object-cover"
      />
      <p className="font-semibold text-zinc-500">Comment</p>
    </div>
  );
}
