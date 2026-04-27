import GridCol from "./gridcol";
import GridRow from "./gridrow";
import RowSpan7 from "./rowspan7";
import RowSpan5 from "./rowspan5";
import { Media } from "../../../types/media";
import Item2 from "./item2";
import Item1 from "./item1";
export default function Album2({ medias }: { medias: Media[] }) {
  return (
    <GridRow>
      <RowSpan7>
        <Item1 url={medias[0].url} />
      </RowSpan7>
      <RowSpan5>
        <GridCol>
          {medias.map((media) => (
            <Item2 url={media.url} key={media.id} />
          ))}
        </GridCol>
      </RowSpan5>
    </GridRow>
  );
}
