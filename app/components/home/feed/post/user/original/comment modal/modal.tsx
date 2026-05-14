import CommentModalBody from "@/app/components/generic/comment modal/body";
import CommentModalHeader from "@/app/components/generic/comment modal/header";
import CommentModal from "@/app/components/generic/comment modal/modal";
import Comments from "./comments";
import Post from "./post";

export default function CommentModalForThisPost() {
  return (
    <CommentModal>
      <CommentModalHeader />
      <CommentModalBody>
        <Post />
        <Comments />
      </CommentModalBody>
    </CommentModal>
  );
}
