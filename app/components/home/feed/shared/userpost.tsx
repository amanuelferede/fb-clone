import SharePostContainer from "@/app/components/generic/shared post container/shared post container";
import Content from "../post/user/original/content";
import Header from "../post/user/original/header";

export default function SharedUserPost() {
  return (
    <SharePostContainer>
      <Header />
      <Content />
    </SharePostContainer>
  );
}
