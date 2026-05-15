import PostCard from "@/app/components/generic/post card/post card";
import Header from "./header";
import Content from "./content";
import Footer from "./footer/footer";

export default function ToGroupSharePost() {
  /**
   * const [isPending, formAction, ]
   */
  return (
    <PostCard>
      <Header />
      <Content />
      <Footer />
    </PostCard>
  );
}
