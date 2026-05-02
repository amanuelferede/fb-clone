import SharePostContainer from "../shared post container";
import Header from "../user/header";
import PostContent from "../content";
export default function SharedUserPost() {
  return (
    <SharePostContainer>
      <Header />
      <PostContent />
    </SharePostContainer>
  );
}
