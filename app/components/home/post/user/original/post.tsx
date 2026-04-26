import Footer from "../../common/footer";
import Header from "./header";
import Body from "./body";
import PostCard from "@/app/components/generic/post/card";

export default function OriginalUserPost() {
  /**
   * const [isPending, formAction, ]
   */
  return (
    <PostCard>
      <Header />
      <Body />
      <Footer />
    </PostCard>
  );
}
