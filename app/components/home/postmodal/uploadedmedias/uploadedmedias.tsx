"use client";
import { removeUploadedMedias } from "@/app/store/slices/addpost";
import { BiSmile } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { FaPencilAlt } from "react-icons/fa";
import Medias from "../../post/common/medias";
import { UploadedMedia } from "./types";
import { useAppDispatch } from "@/app/store/hooks";

export default function UploadedMedias({
  uploadedMedias,
}: {
  uploadedMedias: UploadedMedia[];
}) {
  const dispatch = useAppDispatch();

  return (
    <div>
      <BiSmile className="w-8 h-8 text-zinc-400 absolute right-2 top-2" />
      <div className="h-120 relative">
        <Medias medias={uploadedMedias} />
        <div className=" absolute top-0 bottom-0 left-0 right-0 bg-black/20"></div>
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
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
  );
}
