"use client";

import { useAppSelector } from "@/app/store/hooks";
import PostModal from "./postmodal/postmodal";
import GroupPost from "./feed/group";
import PagePost from "./feed/page";
import UserPost from "./feed/user";
import CommentModal from "./commentmodal/commentmodal";
import ReactionModal from "./reactionsmodal/reactionsmodal";

export default function FeedClient() {
  const isAddPostModalOpened = useAppSelector((state) => state.addPost.isOpen);
  const isCommentModalOpen = useAppSelector(
    (state) => state.post.isCommentModalOpen
  );
  const isReactionModalOpen = useAppSelector(
    (state) => state.post.isReactionModalOpen
  );

  return (
    <>
      <UserPost />
      <PagePost />
      <GroupPost />
      {isAddPostModalOpened && <PostModal />}
      {isCommentModalOpen && <CommentModal />}
      {isReactionModalOpen && <ReactionModal />}
    </>
  );
}
