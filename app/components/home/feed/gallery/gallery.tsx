import AlbumWithGridFive from "./gallery-grid-five/album with five grids";
import AlbumWithGridFour from "./gallery-grid-four/album with four grids";
import AlbumWithGridMore from "./gallery-grid-more/gallery-grid-more";
import AlbumWithGridOne from "./gallery-grid-one/album with one grid";
import AlbumWithGridThree from "./gallery-grid-three/album with three grids";
import AlbumWithGridTwo from "./gallery-grid-two/album with two grids";
import GalleryContextProvider from "./context/gallery provider";
import { Media, PostType } from "./types/media";

export default function Gallery({
  medias,
  postType,
}: {
  postType: PostType;
  medias: Media[];
}) {
  return (
    <GalleryContextProvider postType={postType} medias={medias}>
      {medias && medias.length === 1 && <AlbumWithGridOne />}
      {medias && medias.length === 2 && <AlbumWithGridTwo />}
      {medias && medias.length === 3 && <AlbumWithGridThree />}
      {medias && medias.length === 4 && <AlbumWithGridFour />}
      {medias && medias.length === 5 && <AlbumWithGridFive />}
      {medias && medias.length > 5 && <AlbumWithGridMore />}
    </GalleryContextProvider>
  );
}
