import CommentsCount from "./upper/comments count";
import GReactions from "./upper/g reactions";

export default function Upper() {
  return (
    <div className="flex items-center justify-between  px-2 py-1.5">
      <GReactions />
      <CommentsCount />
    </div>
  );
}
