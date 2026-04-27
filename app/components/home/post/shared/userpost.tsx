import { medias } from "@/app/seed/faker/medias";
import Gallery from "../components/gallery/gallery";
import ProfilePic from "../user/original/components/header/profilepic";
import FlexCol from "../user/original/components/header/flexcol";
import UserName from "../user/original/components/header/username";
import PostDate from "../user/original/components/header/postdate";
import Body from "../user/original/components/body";
import Header from "../user/original/components/header";
import PostContent from "../user/original/components/postcontent";
import Container from "./components/container";

export default function SharedUserPost() {
  return (
    <Container>
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
      <Gallery medias={medias} postType="share" />
    </Container>
  );
}
