"use client";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { openCommentModal, openReactionModal } from "@/app/store/slices/post";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ReactAPost from "../post/reactpost/reactionbox";
import ReactionModal from "../reactionsmodal/reactionsmodal";

export default function Footer() {
  const dispatch = useAppDispatch();

  const isReactionModalOpen = useAppSelector(
    (state) => state.post.isReactionModalOpen
  );
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

  const showCommentModal = () => {
    dispatch(openCommentModal(true));
  };

  const showReactionModal = () => {
    dispatch(openReactionModal(true));
  };

  useEffect(() => {
    console.log(toShowReactionBox);
  }, [toShowReactionBox]);
  return (
    <>
      <div className="relative">
        {toShowReactionBox && (
          <ReactAPost
            hideReactionEmojies={hideReactionEmojies}
            keepShowingReactionEmojies={keepShowingReactionEmojies}
            toShowReactionBox={toShowReactionBox}
          />
        )}
        <div className="flex items-center justify-between  px-2 py-1.5">
          <div
            className="flex items-center space-x cursor-pointer"
            onClick={showReactionModal}
          >
            <div className="flex items-center -space-x-1.5">
              <Image
                alt="like"
                src={`/reactions/like.png`}
                width={22}
                height={22}
              />
              <Image
                alt="love"
                src={`/reactions/love.png`}
                width={22}
                height={22}
              />
              <Image
                alt="like"
                src={`/reactions/care.png`}
                width={22}
                height={22}
              />
            </div>

            <p className=" text-zinc-500 text-[0.99rem]">
              Betty Alex and others
            </p>
          </div>
          <div className="flex space-x-1">
            <p className="text-[0.93rem]">9</p>
            <Image
              alt="Facebook"
              src={"/post footer/comment.png"}
              width={0}
              height={0}
              sizes="100vh"
              className="w-4 h-4 "
            />
          </div>
        </div>

        <div className=" flex items-center justify-between px-2 pb-1.5 mt-2">
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
          <div className="flex  space-x-1 grow px-1.5 py-1.5 items-center justify-center cursor-pointer rounded-sm hover:bg-zinc-50">
            <Image
              alt="share"
              src={`/post footer/share.png`}
              className="object-cover"
              width={20}
              height={20}
            />
            <p className="font-semibold text-zinc-500">Share</p>
          </div>
        </div>
      </div>

      {isReactionModalOpen && <ReactionModal />}
    </>
  );
}
