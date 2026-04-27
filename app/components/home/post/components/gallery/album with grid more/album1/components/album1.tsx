"use client";
import GridCol from "./gridcol";
import GridRow from "./gridrow";
import Colspan7 from "./colspan7";
import Colspan5 from "./colspan5";
import Item2 from "./item2";
import Container from "../../../components/container";
import Item1 from "./item1";
import { useContext } from "react";
import { galleryContext } from "../../../context/gallery context";
export default function Album1() {
  const { medias, postType } = useContext(galleryContext);

  return (
    <Container>
      <GridCol>
        <Colspan7>
          <Item1 url={medias[0].url} postType={postType} />
        </Colspan7>
        <Colspan5>
          <GridRow>
            {medias.slice(1).map((media, index) => (
              <Item2
                remaining={medias.length - 5}
                index={index}
                url={media.url}
                key={media.id}
              />
            ))}
          </GridRow>
        </Colspan5>
      </GridCol>
    </Container>
  );
}
