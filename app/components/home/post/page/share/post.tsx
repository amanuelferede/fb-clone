import Footer from "../../common/footer";
import PostCard from "../../components/postcard";
import Header from "../components/header";
import Body from "./body";

export default function PageSharePost() {
  return (
    <PostCard>
      <Header />
      <Body />
      <Footer />
    </PostCard>
  );
}
