import GridCol from "./gridcol";

import Container from "../../../components/container";
import { Media } from "../../../types/media";
import Item1 from "./item1";
export default function Album1({ medias }: { medias: Media[] }) {
  return (
    <Container>
      <GridCol>
        {medias.map((media) => (
          <Item1 url={media.url} key={media.id} />
        ))}
      </GridCol>
    </Container>
  );
}
