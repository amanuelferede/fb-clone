"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import ReactionEmojies from "../../reaction emojies";
export default function Like() {
  const [toShowReactionBox, settoShowReactionBox] = useState<boolean>(false);

  const timoutId = useRef<NodeJS.Timeout | null>(null);
  const timoutI2 = useRef<NodeJS.Timeout | null>(null);
  const showReactionEmojies = () => {
    const _timeOutId = setTimeout(() => {
      settoShowReactionBox(true);
    }, 1000);
    timoutI2.current = _timeOutId;
  };
  const hideReactionEmojies = () => {
    clearTimeout(timoutI2.current!);

    const _timeOutId = setTimeout(() => {
      settoShowReactionBox(false);
    }, 1000);
    timoutId.current = _timeOutId;
  };
  const keepShowingReactionEmojies = () => {
    clearTimeout(timoutId.current!);
  };
  return (
    <div className="relative">
      {toShowReactionBox && (
        <ReactionEmojies
          hideReactionEmojies={hideReactionEmojies}
          keepShowingReactionEmojies={keepShowingReactionEmojies}
        />
      )}
      <div
        className="flex  space-x-1 grow px-1.5 py-1.5 items-center justify-center cursor-pointer rounded-sm hover:bg-zinc-50"
        onMouseEnter={showReactionEmojies}
        onMouseLeave={hideReactionEmojies}
      >
        <Image
          alt="like"
          src={`/post footer/like.png`}
          width={20}
          height={20}
        />
        <p className="font-semibold text-zinc-500">Like</p>
      </div>
    </div>
  );
}
