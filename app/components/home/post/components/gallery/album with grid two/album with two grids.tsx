import Box from "@/app/components/generic/box";
import Album2 from "./album2";
import Album1 from "./album1";

export default function AlbumWithGridTwo() {
  return (
    <Box height="md:h-screen h-40" overFlowY="overflow-y-hidden">
      <Album1 />
    </Box>
  );
}
