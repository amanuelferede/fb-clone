import Box from "@/app/components/generic/box";
import Album2 from "./album2";
import Album1 from "./album1";
import Album3 from "./album3";

export default function AlbumWithGridFour() {
  return (
    <Box height="md:h-screen h-40" overFlowY="overflow-y-hidden">
      <Album3 />
    </Box>
  );
}
