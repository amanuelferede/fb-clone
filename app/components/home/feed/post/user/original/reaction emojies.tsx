import Image from "next/image";
export default function ReactionEmojies({
  hideReactionEmojies,
  keepShowingReactionEmojies,
}: {
  hideReactionEmojies: () => void;
  keepShowingReactionEmojies: () => void;
}) {
  return (
    <div
      className={`absolute left-2 bottom-11.5  bg-white z-20   flex space-x  shadow-sm rounded-3xl `}
      onMouseLeave={hideReactionEmojies}
      onMouseOver={keepShowingReactionEmojies}
    >
      <Image
        alt="like"
        src={`/reactions/like.png`}
        width={0}
        height={0}
        sizes="100vh"
        className="w-13 h-13 rounded-full cursor-pointer  block reaction-emoji-animation"
      />
      <Image
        alt="like"
        src={`/reactions/love.png`}
        width={0}
        height={0}
        sizes="100vh"
        className="w-13 h-13 rounded-full cursor-pointer  block reaction-emoji-animation"
      />
      <Image
        alt="like"
        src={`/reactions/care.png`}
        width={0}
        height={0}
        sizes="100vh"
        className="w-13 h-13 rounded-full cursor-pointer  block reaction-emoji-animation"
      />
      <Image
        alt="like"
        src={`/reactions/haha.png`}
        width={0}
        height={0}
        sizes="100vh"
        className="w-13 h-13 rounded-full cursor-pointer  block reaction-emoji-animation"
      />
      <Image
        alt="like"
        src={`/reactions/wow.png`}
        width={0}
        height={0}
        sizes="100vh"
        className="w-13 h-13 rounded-full cursor-pointer  block reaction-emoji-animation"
      />
      <Image
        alt="like"
        src={`/reactions/sad.png`}
        width={0}
        height={0}
        sizes="100vh"
        className="w-13 h-13 rounded-full cursor-pointer  block reaction-emoji-animation"
      />
      <Image
        alt="like"
        src={`/reactions/angry.png`}
        width={0}
        height={0}
        sizes="100vh"
        className="w-13 h-13 rounded-full cursor-pointer  block reaction-emoji-animation"
      />
    </div>
  );
}
