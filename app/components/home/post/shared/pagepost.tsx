import { medias } from "@/app/seed/faker/medias";
import Header from "../page/original/components/header";
import ProfilePic from "../page/original/components/header/profilepic";
import FlexCol from "../page/original/components/header/flexcol";
import UserName from "../page/original/components/header/username";
import Body from "../page/original/components/body";
import PostDate from "../page/original/components/header/postdate";
import PostContent from "../page/original/components/postcontent";
import Gallery from "../components/gallery/gallery";
import Container from "./components/container";

export default function SharedPagePost() {
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
