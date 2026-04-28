import Box from "@/app/components/generic/box";
import Album1 from "./album1";
import Album2 from "./album2";

export default function AlbumWithGridThree() {
  return (
    <Box height="md:h-screen h-40" overFlowY="overflow-y-hidden">
      <Album2 />
    </Box>
  );
}
