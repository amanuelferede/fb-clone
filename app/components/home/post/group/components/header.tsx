import FlexCol from "../../components/flexcol";
import FlexRow from "../../components/flexrow";
import PostDate from "../../components/postdate";
import GroupName from "../common/groupname";
import UserName from "../common/username";
import Container from "@/app/components/generic/container";
import UserGroupProfile from "../original/header/user-group-profile";
export default function Header() {
  return (
    <FlexRow>
      <Container className="w-12 h-12 relative rounded-lg">
        <UserGroupProfile />
      </Container>
      <FlexCol>
        <GroupName />
        <Container className="flex space-x-2">
          <UserName />
          <PostDate />
        </Container>
      </FlexCol>
    </FlexRow>
  );
}
