import Footer from "../../common/footer";
import Body from "./body";
import PostCard from "../../components/postcard";
import Header from "../components/header";

export default function OriginalPagePost() {
  return (
    <PostCard>
      <Header />
      <Body />
      <Footer />
    </PostCard>
  );
}
