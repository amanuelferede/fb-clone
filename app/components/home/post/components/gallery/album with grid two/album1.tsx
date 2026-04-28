import { useContext } from "react";
import { galleryContext } from "../context/gallery context";
import Box from "@/app/components/generic/box";
import GridCol from "@/app/components/generic/gridcol";
export default function Album1() {
  const { medias, postType } = useContext(galleryContext);
  return (
    <Box width="w-full" height="h-full">
      <GridCol gridCols="grid-cols-2" gap="gap-1">
        {medias.map((media, index) => (
          <Box
            width="w-full"
            height="h-screen"
            backgroundImageUrl={media.url}
            key={media.id}
            roundedTopLeft={
              index === 0 && postType === "share" ? "rounded-tl-2xl" : ""
            }
            roundedTopRight={
              index === 1 && postType === "share" ? "rounded-tr-2xl" : ""
            }
          />
        ))}
      </GridCol>
    </Box>
  );
}
