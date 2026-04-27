import GridCol from "./gridcol";

import Container from "../../../components/container";
import Item1 from "./item1";
import { useContext } from "react";
import { galleryContext } from "../../../context/gallery context";
export default function Album1() {
  const { medias, postType } = useContext(galleryContext);
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
