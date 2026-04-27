import GridCol from "./gridcol";
import GridRow from "./gridrow";
import Colspan7 from "./colspan7";
import Colspan5 from "./colspan5";
import Item2 from "./item2";
import Container from "../../../components/container";
import Item1 from "./item1";
import { Media } from "../../../types/media";
export default function Album1({ medias }: { medias: Media[] }) {
  return (
    <Container>
      <GridCol>
        <Colspan7>
          <Item1 url={`${medias[0].url}`} />
        </Colspan7>
        <Colspan5>
          <GridRow>
            {medias.slice(1).map((media) => (
              <Item2 url={media.url} key={media.id} />
            ))}
          </GridRow>
        </Colspan5>
      </GridCol>
    </Container>
  );
}
