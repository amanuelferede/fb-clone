import SharePostContainer from "@/app/components/generic/shared post container/shared post container";
import Header from "../post/page/original/header";
import Content from "../post/page/original/content";

export default function SharedPagePost() {
  return (
    <SharePostContainer>
      <Header />
      <Content />
    </SharePostContainer>
  );
}
