import { useContext } from "react";
import { galleryContext } from "../context/gallery context";
export default function Album1() {
  const { medias, postType } = useContext(galleryContext);
  return (
    <>
      <div className="grid grid-cols-2 gap-1">
        {medias.map((media, index) => (
          <div
            style={{
              backgroundImage: "url(" + `${media.url}` + ")",
              backgroundPosition: "top center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            key={media.id}
            className={` h-full ${index === 0 && postType === "share" ? "rounded-tl-2xl" : ""} ${index === 1 && postType === "share" ? "rounded-tr-2xl" : ""}`}
          ></div>
        ))}
      </div>
    </>
  );
}
