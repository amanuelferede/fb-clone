"use client";
import GridCol from "./gridcol";

import Item1 from "./item1";
import { useContext } from "react";
import { galleryContext } from "../../../context/gallery context";
export default function Album2() {
  const { medias, postType } = useContext(galleryContext);

  return (
    <GridCol>
      {medias.map((media, index) => (
        <Item1
          url={medias[0].url}
          key={media.id}
          index={index}
          postType={postType}
        />
      ))}
    </GridCol>
  );
}
