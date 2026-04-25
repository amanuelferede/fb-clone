import { BiSmile } from "react-icons/bi";

export default function ColorCard({
  postContent,
  uploadedMediaLength,
}: {
  postContent: string;
  uploadedMediaLength: number;
}) {
  return (
    <div className="flex justify-between my-2 py-2">
      {postContent.length < 150 && uploadedMediaLength === 0 && (
        <>
          <div
            className={`w-9 h-9 rounded-lg bg-linear-to-tl bg-lime-500`}
          ></div>
          <BiSmile className="w-8 h-8 stroke-zinc-200 stroke-1" />
        </>
      )}
      {postContent.length > 150 && uploadedMediaLength === 0 && (
        <>
          <div>{""}</div>
          <BiSmile className="w-8 h-8 stroke-zinc-200 stroke-1 " />
        </>
      )}
    </div>
  );
}
