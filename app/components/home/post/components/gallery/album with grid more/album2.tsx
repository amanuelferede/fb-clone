"use client";

import { useContext } from "react";
import { galleryContext } from "../context/gallery context";
import GridRow from "@/app/components/generic/gridrow";
import GridRowSpan from "@/app/components/generic/gridrowspan";
import Box from "@/app/components/generic/box";
import GridCol from "@/app/components/generic/gridcol";
import FlexRow from "@/app/components/generic/flexrow";
import Text from "@/app/components/generic/text";
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
          {medias.slice(1, 5).map((media, index) => (
            <Box
              position="relative"
              backgroundImageUrl={media.url}
              key={media.id}
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
        </GridCol>
      </GridRowSpan>
    </GridRow>
  );
}
