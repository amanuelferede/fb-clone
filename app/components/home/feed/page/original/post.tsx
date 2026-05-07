import Footer from "../../common/footer";
import PostContent from "../../post content";
import PostCard from "../../postcard";
import Header from "../header";

export default function OriginalPagePost() {
  /**
   * const [isPending, formAction, ]
   */
  return (
    <PostCard>
      <Header />
      <PostContent />
      <Footer />
    </PostCard>
  );
}
