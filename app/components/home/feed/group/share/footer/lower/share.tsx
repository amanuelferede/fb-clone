import Image from "next/image";
export default function Share() {
  return (
    <div className="flex  space-x-1 grow px-1.5 py-1.5 items-center justify-center cursor-pointer rounded-sm hover:bg-zinc-50">
      <Image
        alt="share"
        src={`/post footer/share.png`}
        className="object-cover"
        width={20}
        height={20}
      />
      <p className="font-semibold text-zinc-500">Share</p>
    </div>
  );
}
