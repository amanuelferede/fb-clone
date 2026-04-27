import Container from "../components/container";
import Album1 from "./album1/components/album1";
import Album2 from "./album2/components/album2";

export default function AlbumWithGridTwo({
  medias,
}: {
  medias: {
    type: string;
    id: number;
    url: string;
  }[];
}) {
  return (
    <Container>
      <Album2 medias={medias} />
    </Container>
  );
}
