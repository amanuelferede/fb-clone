"use client";
import CommentModalBody from "@/app/components/generic/comment modal/body";
import CommentModalHeader from "@/app/components/generic/comment modal/header";
import CommentModal from "@/app/components/generic/comment modal/modal";
import Comments from "./comments";
import Post from "./post";
import { useAppDispatch } from "@/app/store/hooks";
import { isOpen } from "@/app/store/slices/modal state";
import { openCommentModalForThisPost } from "@/app/store/slices/post/page/origianl";
import CommentModalFooter from "@/app/components/generic/comment modal/footer";

export default function CommentModalForThisPost() {
  const dispatch = useAppDispatch();
  const closeModal = () => {
    dispatch(isOpen(false));
    dispatch(openCommentModalForThisPost(false));
  };
  return (
    <CommentModal>
      <CommentModalHeader onClose={closeModal} />
      <CommentModalBody>
        <Post />
        <Comments />
      </CommentModalBody>
      <CommentModalFooter />
    </CommentModal>
  );
}
