"use client";
import { useContext } from "react";

import { galleryContext } from "../context/gallery context";
import GridRow from "@/app/components/generic/gridrow";
import Box from "@/app/components/generic/box";

export default function Album2() {
  const { medias, postType } = useContext(galleryContext);
  return (
    <GridRow gridRows="grid-rows-2" gap="gap-1">
      {medias.map((media, index) => (
        <Box
          width="w-full"
          height="h-[50vh]"
          backgroundImageUrl={media.url}
          key={media.id}
          roundedTopLeft={
            index === 0 && postType === "share" ? "rounded-tl-2xl" : ""
          }
          roundedTopRight={
            index === 0 && postType === "share" ? "rounded-tr-2xl" : ""
          }
        />
      ))}
    </GridRow>
  );
}
