"use client";
import { useContext } from "react";
import { galleryContext } from "../context/gallery context";

export default function Album() {
  const { medias, postType } = useContext(galleryContext);

  return (
    <div
      className={`w-full h-full ${postType === "share" ? "rounded-tl-2xl rounded-tr-2xl" : ""}`}
      style={{
        backgroundImage: "url(" + `${medias[0].url}` + ")",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}
