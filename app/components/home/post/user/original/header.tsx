import ProfilePic from "./components/profilepic";
import PostDate from "./components/postdate";
import UserName from "./components/username";
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
