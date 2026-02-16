import PostContent from "../../common/content";
import SharedUserPost from "../../shared/userpost";
import Header from "./header";

export default function UserSharePost() {
  return (
    <div className="w-full">
      <Header />
      <PostContent />
      <SharedUserPost />
    </div>
  );
}
