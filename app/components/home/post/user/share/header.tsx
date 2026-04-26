import ProfilePic from "./header/profilepic";
import FlexCol from "@/app/components/generic/post/flex-col";
import UserName from "../common/username";
import PostDate from "./header/date";
import FlexRow from "@/app/components/generic/post/flex-row";
export default function Header() {
  return (
    <FlexRow>
      <ProfilePic />
      <FlexCol>
        <UserName />
        <PostDate />
      </FlexCol>
    </FlexRow>
  );
}
