"use client";
import { removeUploadedMedias } from "@/app/store/slices/addpost";
import { CgClose } from "react-icons/cg";
import { FaPencilAlt } from "react-icons/fa";
import { UploadedMedia } from "./types";
import { useAppDispatch } from "@/app/store/hooks";
import Gallery from "../../feed/gallery/gallery";

export default function UploadedMedias({
  uploadedMedias,
}: {
  uploadedMedias: UploadedMedia[];
}) {
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="h-full relative overflow-y-hidden">
        <Gallery postType="uploaded" medias={uploadedMedias} />
        <div className="p-3 absolute top-0 bottom-0 left-0 right-0 bg-black/20">
          <div className=" flex items-center justify-between">
            <div className="flex space-x-2 rounded-lg items-center bg-gray-50 py-1.5 px-2">
              <FaPencilAlt className="w-4 h-4 " />
              <p className="text-black font-semibold ">Edit all</p>
            </div>
            <CgClose
              className="w-8 h-8 cursor-pointer text-zinc-500 rounded-full bg-gray-50 p-1"
              onClick={() => {
                dispatch(removeUploadedMedias());
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
