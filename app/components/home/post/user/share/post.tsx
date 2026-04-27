import Footer from "../../common/footer";
import Header from "./header";
import Body from "./body";
import PostCard from "../../components/postcard";

export default function UserSharePost() {
  return (
    <PostCard>
      <Header />
      <Body />
      <Footer />
    </PostCard>
  );
}
