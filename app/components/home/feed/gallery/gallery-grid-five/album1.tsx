"use client";

import { useContext } from "react";
import { galleryContext } from "../context/gallery context";
export default function Album1() {
  const { medias, postType } = useContext(galleryContext);

  return (
    <>
      <div className="grid grid-cols-2">
        <div className="h-full">
          <div className="grid grid-rows-2 h-full">
            {medias.slice(0, 2).map((media) => (
              <div
                key={media.id}
                className="w-full h-1/2"
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
        <div className="h-full">
          <div className="grid grid-rows-3 h-full">
            {medias.slice(2).map((media, index) => (
              <div
                key={media.id}
                className="relative w-full h-4/12"
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
