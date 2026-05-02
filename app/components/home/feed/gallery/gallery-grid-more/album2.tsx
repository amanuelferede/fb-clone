"use client";

import { useContext } from "react";
import { galleryContext } from "../context/gallery context";

export default function Album2() {
  const { medias, postType } = useContext(galleryContext);

  return (
    <>
      <div className="grid grid-rows-12 gap-1 h-full">
        <div className="row-span-7">
          <div
            className={`h-full w-full ${postType === "share" ? "rounded-tl-2xl rounded-tr-2xl" : ""}`}
            style={{
              backgroundImage: "url(" + `${medias[0].url}` + ")",
              backgroundPosition: "top center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="row-span-5">
          <div className="grid grid-cols-4 h-full gap-1">
            {medias.slice(1, 5).map((media, index) => (
              <div
                className="h-full relative"
                key={media.id}
                style={{
                  backgroundImage: "url(" + `${media.url}` + ")",
                  backgroundPosition: "top center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {index === 3 && (
                  <div
                    className={`flex items-center justify-center absolute z-10 w-full h-full bg-black/50`}
                  >
                    <p className="text-4xl text-white font-semibold">
                      {medias.length - 5} +
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
