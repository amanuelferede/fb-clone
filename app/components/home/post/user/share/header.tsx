import FlexRow from "../../components/flexrow";
import FlexCol from "../../components/flexcol";
import ProfilePic from "./components/profilepic";
import UserName from "./components/username";
import PostDate from "./components/postdate";
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
