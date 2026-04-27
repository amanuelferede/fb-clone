import GridCol from "./gridcol";

import Item1 from "./item1";
import { Media } from "../../../types/media";
export default function Album2({ medias }: { medias: Media[] }) {
  return (
    <GridCol>
      {medias.map((media) => (
        <Item1 url={medias[0].url} key={media.id} />
      ))}
    </GridCol>
  );
}
