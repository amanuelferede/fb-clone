import Box from "@/app/components/generic/box";
import Album2 from "./album2";
import Album1 from "./album1";

export default function AlbumWithGridFive() {
  return (
    <Box height="md:h-screen h-40" overFlowY="overflow-y-hidden">
      <Album2 />
    </Box>
  );
}
