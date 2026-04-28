"use client";
import { useContext } from "react";
import { galleryContext } from "../context/gallery context";
import Box from "@/app/components/generic/box";
export default function AlbumWithGridOne() {
  const { medias, postType } = useContext(galleryContext);

  return (
    <Box width="w-full" height="h-full">
      <Box
        width="w-full"
        height="h-full"
        backgroundImageUrl={medias[0].url}
        roundedTopLeft={postType === "share" ? "rounded-tl-2xl" : ""}
        roundedTopRight={postType === "share" ? "rounded-tr-2xl" : ""}
      />
    </Box>
  );
}
