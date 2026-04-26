import PostCard from "@/app/components/generic/post/card";
import Footer from "../../common/footer";
import Header from "./header";
import Body from "./body";

export default function ToGroupSharePost() {
  return (
    <PostCard>
      <Header />
      <Body />
      <Footer />
    </PostCard>
  );
}
