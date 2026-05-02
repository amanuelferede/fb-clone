"use client";

import { useContext } from "react";
import { galleryContext } from "../context/gallery context";

export default function Album2() {
  const { medias, postType } = useContext(galleryContext);

  return (
    <div className="grid grid-rows-12 h-full gap-1">
      <div className="row-span-7">
        <div
          className={`h-full ${postType === "share" ? "rounded-tl-2xl rounded-tr-2xl" : ""}`}
          style={{
            backgroundImage: "url(" + `${medias[0].url}` + ")",
            backgroundPosition: "top center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>

      <div className="row-span-5 h-full">
        <div className="h-full grid grid-cols-2 gap-1">
          {medias.slice(1).map((media) => (
            <div
              className="h-full w-full"
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
      </div>
    </div>
  );
}
