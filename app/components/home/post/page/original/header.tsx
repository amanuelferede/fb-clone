import FlexCol from "@/app/components/generic/post/flex-col";
import FlexRow from "@/app/components/generic/post/flex-row";
import PostDate from "./header/date";
import ProfilePic from "./header/profilepic";
import PageName from "../common/pagename";
export default function Header() {
  return (
    <FlexRow>
      <ProfilePic />
      <FlexCol>
        <PageName />
        <PostDate />
      </FlexCol>
    </FlexRow>
  );
}
