"use client";

import { useContext } from "react";
import { galleryContext } from "../context/gallery context";
export default function Album1() {
  const { medias, postType } = useContext(galleryContext);
  return (
    <>
      <div>
        <div className="grid grid-cols-12 gap-1 ">
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
                  className={`h-[50vh] ${index === 0 && postType === "share" ? "rounded-tr-2xl" : ""}`}
                  key={media.id}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
