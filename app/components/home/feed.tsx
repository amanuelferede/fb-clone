"use client";

import { useAppSelector } from "@/app/store/hooks";

import PostModal from "./postmodal/postmodal";
import UserPost from "./post/user";
import PagePost from "./post/page";
import GroupPost from "./post/group";

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
