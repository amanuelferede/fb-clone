"use client";

import Box from "@/app/components/generic/box";
import { useContext } from "react";
import { galleryContext } from "../context/gallery context";
import GridCol from "@/app/components/generic/gridcol";
import GridColSpan from "@/app/components/generic/gridcolspan";
import GridRow from "@/app/components/generic/gridrow";
export default function Album1() {
  const { medias, postType } = useContext(galleryContext);
  return (
    <Box height="h-full" width="w-full">
      <GridCol gridCols="grid-cols-12" height="h-full" gap="gap-1">
        <GridColSpan colSpan="col-span-7">
          <Box
            width="w-full"
            height="h-screen"
            backgroundImageUrl={medias[0].url}
            roundedTopLeft={postType === "share" ? "rounded-tl-2xl" : ""}
          />
        </GridColSpan>
        <GridColSpan colSpan="col-span-5">
          <GridRow gridRows="grid-rows-3" height="h-full" gap="gap-1">
            {medias.slice(1).map((media, index) => (
              <Box
                height="h-[33.33vh]"
                width="w-full"
                backgroundImageUrl={media.url}
                key={media.id}
                roundedTopRight={
                  index === 0 && postType === "share" ? "rounded-tr-2xl" : ""
                }
              />
            ))}
          </GridRow>
        </GridColSpan>
      </GridCol>
    </Box>
  );
}
