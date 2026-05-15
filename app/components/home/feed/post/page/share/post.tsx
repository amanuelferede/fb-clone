"use client";
import PostCard from "@/app/components/generic/post card/post card";
import Header from "./header";
import Content from "./content";
import Footer from "./footer/footer";
import { useAppSelector } from "@/app/store/hooks";
import CommentModalForThisPost from "./comment modal/modal";
import ReactionModalForThisPost from "./reaction modal/post";

export default function PageSharePost() {
  const isCommentModalOpen = useAppSelector(
    (state) => state.pageSharePost.post.commentModalState.isOpen
  );
  const isReactionModalOpen = useAppSelector(
    (state) => state.pageSharePost.post.reactionModalState.isOpen
  );
  /**
   * const [isPending, formAction, ]
   */
  return (
    <>
      <PostCard>
        <Header />
        <Content />
        <Footer />
      </PostCard>
      {isCommentModalOpen && <CommentModalForThisPost />}
      {isReactionModalOpen && <ReactionModalForThisPost />}
    </>
  );
}
