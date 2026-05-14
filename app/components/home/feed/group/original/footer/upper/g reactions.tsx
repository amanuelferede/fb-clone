"use cilent";
import Image from "next/image";
export default function GReactions() {
  const showReactionModal = () => {
    //
  };
  return (
    <div className="flex items-center space-x cursor-pointer">
      <div className="flex items-center -space-x-1.5">
        <Image
          onClick={showReactionModal}
          alt="like"
          src={`/reactions/like.png`}
          width={22}
          height={22}
        />
        <Image alt="love" src={`/reactions/love.png`} width={22} height={22} />
        <Image alt="like" src={`/reactions/care.png`} width={22} height={22} />
      </div>

      <p className=" text-zinc-500 text-[0.99rem]">Betty Alex and others</p>
    </div>
  );
}
