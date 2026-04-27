"use client"

import { createContext } from "react";
import { Media, PostType } from "../types/media";

type MediaContextType = {
    postType: PostType,
    medias: Media[]
}

export const galleryContext = createContext<MediaContextType>({medias: [], postType: 'original'});
