import Footer from "../../common/footer";
import OriginalPagePost from "./post";

export default function OriginalPagePostCard() {
  return (
    <div className="mt-3  bg-white md:rounded-xl shadow-sm">
      <OriginalPagePost />
      <Footer />
    </div>
  );
}
