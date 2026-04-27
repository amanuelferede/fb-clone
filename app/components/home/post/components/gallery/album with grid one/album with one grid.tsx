"use client";
import { useContext } from "react";
import Container from "../components/container";
import { galleryContext } from "../context/gallery context";
import Item1 from "./components/item1";
export default function AlbumWithGridOne() {
  const { medias, postType } = useContext(galleryContext);

  return (
    <Container>
      <Item1 url={medias[0].url}></Item1>
    </Container>
  );
}
