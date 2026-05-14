import GroupPost from "./feed/group";
import PagePost from "./feed/page";
import UserPost from "./feed/user";

export default function FeedClient() {
  return (
    <>
      <UserPost />
      <PagePost />
      <GroupPost />
    </>
  );
}
