import SharePostContainer from "../shared post container";
import Header from "../group/header";
import PostContent from "../content";

export default function SharedPagePost() {
  return (
    <SharePostContainer>
      <Header />
      <PostContent />
    </SharePostContainer>
  );
}
