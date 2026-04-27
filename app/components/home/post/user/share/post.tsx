import Footer from "../../common/footer";
import PostCard from "../../components/postcard";
import Body from "./components/body";
import Header from "./components/header";
import FlexCol from "./components/header/flexcol";
import PostDate from "./components/header/postdate";
import ProfilePic from "./components/header/profilepic";
import UserName from "./components/header/username";
import PostContent from "./components/postcontent";
import SharedPagePost from "../../shared/pagepost";

export default function UserSharePost() {
  return (
    <PostCard>
      <Header>
        <ProfilePic />
        <FlexCol>
          <UserName />
          <PostDate />
        </FlexCol>
      </Header>
      <Body>
        <PostContent
          content={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolor ullam, adipisci facere velit consectetur repellat fugit, saepe rem deleniti in accusamus, nam accusantium possimus debitis. Repudiandae dolorem maiores et?`}
        />
      </Body>
      <SharedPagePost />
      <Footer />
    </PostCard>
  );
}
