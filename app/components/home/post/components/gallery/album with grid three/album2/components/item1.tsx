import { PostType } from "../../../types/media";

export default function Item1({
  children,
  url,
  postType,
}: {
  url: string;
  children?: React.ReactNode;
  postType: PostType;
}) {
  return (
    <div
      className={`w-full h-full ${postType === "share" ? "rounded-tl-2xl rounded-tr-2xl" : ""}`}
      style={{
        backgroundImage: "url(" + `${url}` + ")",
        backgroundPositionY: "25%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
}
