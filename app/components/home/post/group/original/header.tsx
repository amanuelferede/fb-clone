import FlexCol from "@/app/components/generic/post/flex-col";
import FlexRow from "@/app/components/generic/post/flex-row";
import GroupName from "../common/groupname";
import PostDate from "./header/date";
import UserName from "../common/username";
import Container from "@/app/components/generic/container";
import UserGroupProfile from "./header/user-group-profile";
import RFlexRow from "@/app/components/generic/flexrow";
export default function Header() {
  return (
    <FlexRow>
      <Container className="w-12 h-12 relative rounded-lg bg-amber-200">
        <UserGroupProfile />
      </Container>
      <FlexCol>
        <GroupName />
        <RFlexRow className="space-x-2">
          <UserName />
          <PostDate />
        </RFlexRow>
      </FlexCol>
    </FlexRow>
  );
}
