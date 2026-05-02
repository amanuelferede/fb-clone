"use client";

import { useContext } from "react";
import { galleryContext } from "../context/gallery context";

export default function Album1() {
  const { medias, postType } = useContext(galleryContext);

  return (
    <>
      <div className="grid grid-cols-12 h-full gap-1">
        <div className="col-span-7">
          <div
            className={`h-full ${postType === "share" ? "rounded-tl-2xl" : ""}`}
            style={{
              backgroundImage: "url(" + `${medias[0].url}` + ")",
              backgroundPosition: "top center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="col-span-5">
          <div className="grid grid-rows-2 gap-1">
            {medias.slice(1).map((media, index) => (
              <div
                style={{
                  backgroundImage: "url(" + `${media.url}` + ")",
                  backgroundPosition: "top center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                key={media.id}
                className={`relative h-[25vh] ${index === 1 && postType === "share" ? "rounded-tr-2xl" : ""}`}
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
