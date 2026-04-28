"use client";

import { useContext } from "react";
import { galleryContext } from "../context/gallery context";
import Box from "@/app/components/generic/box";
import GridCol from "@/app/components/generic/gridcol";
import GridColSpan from "@/app/components/generic/gridcolspan";
import GridRow from "@/app/components/generic/gridrow";
import FlexRow from "@/app/components/generic/flexrow";
import Text from "@/app/components/generic/text";
export default function Album1() {
  const { medias, postType } = useContext(galleryContext);

  return (
    <Box height="h-full" width="w-full">
      <GridCol gridCols="grid-cols-12" gap="gap-1" height="h-full">
        <GridColSpan colSpan="col-span-7">
          <Box
            width="w-full"
            height="h-full"
            backgroundImageUrl={medias[0].url}
            roundedTopLeft={postType === "share" ? "rounded-tl-2xl" : ""}
          />
        </GridColSpan>
        <GridColSpan colSpan="col-span-5">
          <GridRow gridRows="grid-rows-4" gap="gap-1" height="h-full">
            {medias.slice(1, 5).map((media, index) => (
              <Box
                position="relative"
                backgroundImageUrl={media.url}
                key={media.id}
                roundedTopLeft={
                  index === 0 && postType === "share" ? "rounded-tr-2xl" : ""
                }
              >
                {index === 3 && (
                  <Box
                    backgroundColor="bg-black/60"
                    position="absolute"
                    top="top-0"
                    left="left-0"
                    bottom="bottom-0"
                    right="right-0"
                    zIndex="z-10"
                  >
                    <FlexRow
                      height="h-full"
                      width="w-full"
                      spaceX="space-x-0"
                      alignItems="center"
                      JustifyContent="center"
                    >
                      <Text as="span" fontSize="text-5xl" color="text-white">
                        {medias.length - 5}+
                      </Text>
                    </FlexRow>
                  </Box>
                )}
              </Box>
            ))}
          </GridRow>
        </GridColSpan>
      </GridCol>
    </Box>
  );
}
