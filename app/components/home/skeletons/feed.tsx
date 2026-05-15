import PostCard from "../../generic/post card/post card";

export default function FeedSkeleton() {
  return (
    <PostCard>
      <div className="flex space-x-3 px-2.5 pt-2.5 ">
        <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
        <div className="flex flex-col space-y-2.5">
          <div className="w-96 h-5 rounded-xl bg-gray-200 animate-pulse"></div>
          <div className="w-32 h-5 rounded-xl bg-gray-200 animate-pulse"></div>
        </div>
      </div>
      <div className="w-full h-[60vh] p-3 mt-2">
        <div className="h-[30%]  flex flex-col space-y-2 py-2">
          <div className="w-3/4 h-5 rounded-xl bg-gray-200"></div>
          <div className="w-3/12 h-5 rounded-xl bg-gray-200"></div>
        </div>
        <div className="w-full h-[60%] bg-gray-200 animate-pulse my-4"></div>
        <div className="h-[10%]">
          <div className="flex items-center space-x-10 h-full justify-between">
            <div className="h-5 rounded-xl bg-gray-200 animate-pulse grow"></div>
            <div className="h-5 rounded-xl bg-gray-200  animate-pulse grow"></div>
            <div className="h-5 rounded-xl bg-gray-200  animate-pulse grow"></div>
          </div>
        </div>
      </div>
    </PostCard>
  );
}
