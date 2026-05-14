import GroupPost from "./feed/post/group";
import PagePost from "./feed/post/page";
import UserPost from "./feed/post/user";

export default function FeedClient() {
  return (
    <>
      <UserPost />
      <PagePost />
      <GroupPost />
    </>
  );
}
