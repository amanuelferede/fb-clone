import Container from "../components/container";
import { Media } from "../types/media";
import Album1 from "./album1/components/album1";
import Album2 from "./album2/components/album2";

export default function AlbumWithGridThree({ medias }: { medias: Media[] }) {
  return (
    <Container>
      <Album1 medias={medias} />
    </Container>
  );
}
