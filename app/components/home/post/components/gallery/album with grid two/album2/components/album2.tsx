"use client";
import { useContext } from "react";
import GridRow from "./gridrow";
import Item1 from "./item1";
import { galleryContext } from "../../../context/gallery context";

export default function Album2() {
  const { medias } = useContext(galleryContext);
  return (
    <GridRow>
      {medias.map((media) => (
        <Item1 url={media.url} key={media.id} />
      ))}
    </GridRow>
  );
}
