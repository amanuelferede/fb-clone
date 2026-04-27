import { medias } from "@/app/seed/faker/medias";
import Header from "../group/original/components/header";
import ProfilePic from "../group/original/components/header/profilepic";
import FlexCol from "../group/original/components/header/flexcol";
import UserName from "../group/original/components/header/username";
import PostDate from "../group/original/components/header/postdate";
import Body from "../group/original/components/body";
import PostContent from "../group/original/components/postcontent";
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
