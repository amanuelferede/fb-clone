"use client";

import { useContext } from "react";
import { galleryContext } from "../context/gallery context";
export default function Album2() {
  const { medias, postType } = useContext(galleryContext);

  return (
    <>
      <div className="grid grid-cols-2 gap-1 h-full">
        {medias.map((media, index) => (
          <div
            className={`h-[50vh] ${index === 0 && postType === "share" ? "rounded-tl-2xl" : ""} ${index === 1 && postType === "share" ? "rounded-tr-2xl" : ""}`}
            key={media.id}
            style={{
              backgroundImage: "url(" + `${media.url}` + ")",
              backgroundPosition: "top center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        ))}
      </div>
    </>
  );
}
