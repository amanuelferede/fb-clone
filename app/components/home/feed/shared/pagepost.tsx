import SharePostContainer from "../shared post container";
import Header from "../page/header";
import PostContent from "../content";

export default function SharedPagePost() {
  return (
    <SharePostContainer>
      <Header />
      <PostContent />
    </SharePostContainer>
  );
}
