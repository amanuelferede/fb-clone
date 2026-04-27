import AlbumWithGridFive from "./album with grid five/album with five grids";
import AlbumWithGridFour from "./album with grid four/album with four grids";
import AlbumWithGridMore from "./album with grid more/album with grid more";
import AlbumWithGridOne from "./album with grid one/album with one grid";
import AlbumWithGridThree from "./album with grid three/album with three grids";
import AlbumWithGridTwo from "./album with grid two/album with two grids";
import { Media } from "./types/media";

export default function Gallery({
  medias,
  type,
}: {
  type?: "original" | "share";
  medias: Media[];
}) {
  if (medias && medias.length === 1) {
    return <AlbumWithGridOne medias={medias} />;
  }
  if (medias && medias.length === 2) {
    return <AlbumWithGridTwo medias={medias} />;
  }
  if (medias && medias.length === 3) {
    return <AlbumWithGridThree medias={medias} />;
  }
  if (medias && medias.length === 4) {
    return <AlbumWithGridFour medias={medias} />;
  }
  if (medias && medias.length === 5) {
    return <AlbumWithGridFive medias={medias} />;
  }
  if (medias && medias.length > 5) {
    return <AlbumWithGridMore medias={medias} />;
  }
}
