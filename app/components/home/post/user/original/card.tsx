import Footer from "../../common/footer";
import OriginalUserPost from "./post";

export default function OriginalUserPostCard() {
  return (
    <div className="mt-3  bg-white md:rounded-xl shadow-sm">
      <OriginalUserPost />
      <Footer />
    </div>
  );
}
