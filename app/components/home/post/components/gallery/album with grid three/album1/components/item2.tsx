import { PostType } from "../../../types/media";

export default function Item2({
  children,
  url,
  postType,
  index,
}: {
  url: string;
  children?: React.ReactNode;
  index: number;
  postType: PostType;
}) {
  return (
    <div
      className={`w-full h-[50vh] ${index === 0 && postType === "share" ? "rounded-tr-2xl" : ""}`}
      style={{
        backgroundImage: "url(" + `${url}` + ")",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
}
