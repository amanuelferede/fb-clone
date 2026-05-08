import Footer from "../../common/footer";
import PostCard from "../../postcard";
import ShareContent from "../../share content";
import Header from "../header";

export default function PageSharePost({
  refFrom,
}: {
  refFrom?: "post" | "commentModal";
}) {
  return (
    <PostCard>
      <Header />
      <ShareContent />
      {refFrom && refFrom === "post" && <Footer />}
    </PostCard>
  );
}
