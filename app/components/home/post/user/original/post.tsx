import Footer from "../../common/footer";

import PostCard from "../../components/postcard";
import Header from "./components/header";
import ProfilePic from "./components/header/profilepic";
import PostDate from "./components/header/postdate";
import Body from "./components/body";
import PostContent from "./components/postcontent";
import FlexCol from "./components/header/flexcol";
import UserName from "./components/header/username";
import Gallery from "../../components/gallery/gallery";
import { medias } from "@/app/seed/faker/medias";

export default function OriginalUserPost() {
  /**
   * const [isPending, formAction, ]
   */
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
      <Gallery medias={medias} postType="original" />
      <Footer />
    </PostCard>
  );
}
