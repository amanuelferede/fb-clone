import { PostType } from "../../../types/media";

export default function Item2({
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
      className={`w-full h-[33.33vh] ${index === 0 && postType === "share" ? "rounded-tr-2xl" : ""}`}
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
