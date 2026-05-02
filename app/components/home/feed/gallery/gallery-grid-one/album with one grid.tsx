"use client";
import { useContext } from "react";
import { galleryContext } from "../context/gallery context";
import Album from "./album";
import AlbumContainer from "../album container";
export default function AlbumWithGridOne() {
  const { medias, postType } = useContext(galleryContext);

  return (
    <AlbumContainer>
      <Album />
    </AlbumContainer>
  );
}
