import Comment from "./lower/comment";
import Like from "./lower/like";
import Share from "./lower/share";

export default function Lower() {
  return (
    <div className=" flex items-center justify-between px-2 pb-1.5 mt-2">
      <Like />
      <Comment />
      <Share />
    </div>
  );
}
