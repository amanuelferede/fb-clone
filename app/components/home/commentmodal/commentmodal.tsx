"use client";

import Comments from "./comments";
import { useState } from "react";
import CommentsSkeleton from "../skeletons/comments";
import { openCommentModal } from "@/app/store/slices/post";
import { useAppDispatch } from "@/app/store/hooks";
import ModalContainer from "./modal container";
import Header from "./header";
import BodyContainer from "./body container";
import Footer from "../feed/common/footer";
import ModalFooter from "./footer";
import OriginalUserPost from "../feed/user/original/post";

export default function CommentModal() {
  const [isLoading] = useState<boolean>(false);

  return (
    <ModalContainer>
      <Header />
      <BodyContainer>
        <OriginalUserPost refFrom="commentModal" />
        <Footer />

        {/* {isLoading && <CommentsSkeleton />} */}

        {!isLoading && <Comments />}
      </BodyContainer>
      <ModalFooter />
    </ModalContainer>
  );
}
