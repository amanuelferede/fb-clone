import PostCard from "@/app/components/generic/post/card";
import Header from "./header";
import Footer from "../../common/footer";
import Body from "./body";

export default function OriginalGroupPost() {
  return (
    <PostCard>
      <Header />
      <Body />
      <Footer />
    </PostCard>
  );
}
