import Image from "next/image";
export default function Footer() {
  return (
    <div className="pb-3 pt-4  px-4 flex items-center space-x-2">
      <Image
        alt="profile"
        src={"/users/11.jpg"}
        height={0}
        width={0}
        sizes="100vh"
        className="w-8 h-8 rounded-full"
      />
      <div className="flex grow flex-col px-3 py-2 rounded-xl bg-slate-100">
        <input
          className=" block w-full focus:outline-none"
          placeholder="Write a comment"
        />
        <div className="flex items-center justify-between">
          <div className="flex space-x-4 py-2">
            <Image
              alt="somehing"
              src={`/commentsmodal/old-man.png`}
              width={0}
              height={0}
              sizes="100vh"
              className="w-5 h-5 "
            />
            <Image
              alt="somehing"
              src={`/commentsmodal/happy-face.png`}
              width={0}
              height={0}
              sizes="100vh"
              className="w-5 h-5"
            />

            <Image
              alt="somehing"
              src={`/commentsmodal/camera.png`}
              width={0}
              height={0}
              sizes="100vh"
              className="w-5 h-5 "
            />
            <Image
              alt="somehing"
              src={`/commentsmodal/gif.png`}
              width={0}
              height={0}
              sizes="100vh"
              className="w-5 h-5 "
            />
            {/* <Image
                  alt="somehing"
                  src={`/commentsmodal/chat-bubble.png`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-5 h-5 "
                /> */}
          </div>
          <Image
            alt="somehing"
            src={`/commentsmodal/telegram.png`}
            width={0}
            height={0}
            sizes="100vh"
            className="w-5 h-5 "
          />
        </div>
      </div>
    </div>
  );
}
