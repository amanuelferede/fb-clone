import ProfilePic from "./components/header/profilepic";
import PostDate from "./components/header/postdate";
import UserName from "./components/header/username";
import FlexCol from "../../components/flexcol";
import FlexRow from "../../components/flexrow";

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
