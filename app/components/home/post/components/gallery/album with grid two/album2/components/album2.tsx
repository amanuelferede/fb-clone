import { Media } from "../../../types/media";
import GridRow from "./gridrow";
import Item1 from "./item1";

export default function Album2({ medias }: { medias: Media[] }) {
  return (
    <GridRow>
      {medias.map((media) => (
        <Item1 url={media.url} key={media.id} />
      ))}
    </GridRow>
  );
}
