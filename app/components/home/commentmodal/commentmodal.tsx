"use client";

import Comments from "./comments";
import { useState } from "react";
import CommentsSkeleton from "../skeletons/comments";
import { openCommentModal } from "@/app/store/slices/post";
import { useAppDispatch } from "@/app/store/hooks";
import Footer from "./like comment share";
import OriginalUserPost from "./post/original user post";
import ModalContainer from "./modal container";
import Header from "./header";
import BodyContainer from "./body container";
import LikeCommentShare from "./like comment share";

export default function CommentModal() {
  const dispatch = useAppDispatch();

  const [isLoading] = useState<boolean>(true);
  const closeModal = () => {
    dispatch(openCommentModal(false));
  };
  return (
    <ModalContainer>
      <Header closeModal={closeModal} />
      <BodyContainer>
        <OriginalUserPost />
        <LikeCommentShare />
        {isLoading && <CommentsSkeleton />}

        {!isLoading && <Comments />}
      </BodyContainer>
      <Footer />
    </ModalContainer>
  );
}
