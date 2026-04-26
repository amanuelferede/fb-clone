import FlexCol from "@/app/components/generic/post/flex-col";
import FlexRow from "@/app/components/generic/post/flex-row";

import ProfilePic from "./header/profilepic";
import PostDate from "./header/date";
import UserName from "../common/username";
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
