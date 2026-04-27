import { PostType } from "../../../types/media";

export default function Item1({
  children,
  url,
  index,
  postType,
}: {
  url: string;
  children?: React.ReactNode;
  index: number;
  postType: PostType;
}) {
  return (
    <div
      className={`w-full h-[50vh] ${index === 0 && postType === "share" ? "rounded-tl-2xl" : ""} ${index === 1 && postType === "share" ? "rounded-tr-2xl" : ""}`}
      style={{
        backgroundImage: "url(" + `${url}` + ")",
        backgroundPositionY: "20%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
}
