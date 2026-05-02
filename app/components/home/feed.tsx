"use client";

import { useAppSelector } from "@/app/store/hooks";

import PostModal from "./postmodal/postmodal";
import UserPost from "./feed/user";
import PagePost from "./feed/page";
import GroupPost from "./feed/group";

export default function Feed() {
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
