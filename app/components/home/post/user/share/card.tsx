import Footer from "../../common/footer";
import UserSharePost from "./post";

export default function UserSharePostCard() {
  return (
    <div className="mt-3  bg-white md:rounded-xl shadow-sm">
      <UserSharePost />
      <Footer />
    </div>
  );
}
