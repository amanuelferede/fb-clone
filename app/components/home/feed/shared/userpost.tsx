import SharePostContainer from "@/app/components/generic/shared post container/shared post container";
import Header from "../post/group/original/header";
import Content from "../post/user/original/content";

export default function SharedUserPost() {
  return (
    <SharePostContainer>
      <Header />
      <Content />
    </SharePostContainer>
  );
}
