"use client";

import { useContext } from "react";
import { galleryContext } from "../context/gallery context";
import Box from "@/app/components/generic/box";
import GridCol from "@/app/components/generic/gridcol";
import GridColSpan from "@/app/components/generic/gridcolspan";
import GridRow from "@/app/components/generic/gridrow";
export default function Album1() {
  const { medias, postType } = useContext(galleryContext);

  return (
    <Box width="w-full" height="h-full">
      <GridCol gridCols="grid-cols-12" gap="gap-1">
        <GridColSpan colSpan="col-span-7">
          <Box
            width="w-full"
            height="h-screen"
            backgroundImageUrl={medias[0].url}
            roundedTopLeft={postType === "share" ? "rounded-tl-2xl" : ""}
          />
        </GridColSpan>
        <GridColSpan colSpan="col-span-5">
          <GridRow gridRows="grid-rows-4">
            {medias.slice(1).map((media, index) => (
              <Box
                backgroundImageUrl={media.url}
                key={media.id}
                width="w-full"
                height="h-[25vh]"
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
