"use client";
import GridCol from "./gridcol";
import GridRow from "./gridrow";
import RowSpan7 from "./rowspan7";
import RowSpan5 from "./rowspan5";
import Item1 from "./item1";
import { useContext } from "react";
import { galleryContext } from "../../../context/gallery context";
import Item2 from "./item2";

export default function Album2() {
  const { medias, postType } = useContext(galleryContext);

  return (
    <GridRow>
      <RowSpan7>
        <Item1 url={medias[0].url} postType={postType} />
      </RowSpan7>
      <RowSpan5>
        <GridCol>
          {medias.slice(1).map((media) => (
            <Item2 url={media.url} key={media.id} />
          ))}
        </GridCol>
      </RowSpan5>
    </GridRow>
  );
}
