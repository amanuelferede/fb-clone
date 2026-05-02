"use client";

import { Media, PostType } from "../types/media";
import { galleryContext } from "./gallery context";

export default function GalleryContextProvider({
  children,
  postType,
  medias,
}: {
  children: React.ReactNode;
  postType: PostType;
  medias: Media[];
}) {
  return (
    <galleryContext.Provider value={{ postType, medias }}>
      {children}
    </galleryContext.Provider>
  );
}
