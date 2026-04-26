import PostCard from "@/app/components/generic/post/card";
import Footer from "../../common/footer";
import Body from "./body";
import Header from "./header";

export default function PageSharePost() {
  return (
    <PostCard>
      <Header />
      <Body />
      <Footer />
    </PostCard>
  );
}
