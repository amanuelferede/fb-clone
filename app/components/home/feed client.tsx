"use client";

import { useAppSelector } from "@/app/store/hooks";
import PostModal from "./postmodal/postmodal";
import GroupPost from "./feed/group";
import PagePost from "./feed/page";
import UserPost from "./feed/user";

export default function FeedClient() {
  const isAddPostModalOpened = useAppSelector((state) => state.addPost.isOpen);

  return (
    <>
      <UserPost />
      <PagePost />
      <GroupPost />
      {isAddPostModalOpened && <PostModal />}
    </>
  );
}
