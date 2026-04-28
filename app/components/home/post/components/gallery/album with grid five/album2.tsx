"use client";

import { useContext } from "react";
import { galleryContext } from "../context/gallery context";
import GridRow from "@/app/components/generic/gridrow";
import GridRowSpan from "@/app/components/generic/gridrowspan";
import Box from "@/app/components/generic/box";
import GridCol from "@/app/components/generic/gridcol";

export default function Album2() {
  const { medias, postType } = useContext(galleryContext);

  return (
    <GridRow gridRows="grid-rows-12" gap="gap-1" height="h-full">
      <GridRowSpan rowSpan="row-span-7">
        <Box
          width="w-full"
          height="h-full"
          backgroundImageUrl={medias[0].url}
          roundedTopLeft={postType === "share" ? "rounded-tl-2xl" : ""}
          roundedTopRight={postType === "share" ? "rounded-tr-2xl" : ""}
        />
      </GridRowSpan>
      <GridRowSpan rowSpan="row-span-5">
        <GridCol gridCols="grid-cols-4" height="h-full" gap="gap-1">
          {medias.slice(1).map((media) => (
            <Box
              backgroundImageUrl={media.url}
              key={media.id}
              height="h-full"
              width="w-full"
            />
          ))}
        </GridCol>
      </GridRowSpan>
    </GridRow>
  );
}
