"use client";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { openAddPostModal, setPostConent } from "@/app/store/slices/addpost";
import { ChangeEvent } from "react";
import { CgClose } from "react-icons/cg";

import Header from "./header";
import TextBox from "./textbox";
import Footer from "./footer";
import UploadedMedias from "./uploadedmedias/uploadedmedias";
import ColorCard from "./colorcard";

export default function PostModal() {
  const dispatch = useAppDispatch();
  const uploadedMedias = useAppSelector((state) => state.addPost.uploadedFiles);
  const postContent = useAppSelector((state) => state.addPost.postContent);

  const onChangePostContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setPostConent(e.target.value));
  };

  return (
    <div className="fixed z-50 top-0 left-0 right-0 bottom-0 bg-gray-300/85">
      <div className="max-w-120 mx-auto mt-16 bg-white rounded-xl shadow-xl">
        <div className="flex sticky top-0 left-0 right-0 items-center justify-between p-3 border-b border-b-gray-100">
          <p></p>
          <p className="text-lg font-semibold text-center">Create a post</p>
          <CgClose
            className="w-8 rounded-full h-8 p-1 text-zinc-600 cursor-pointer bg-gray-200 hover:bg-gray-300"
            onClick={() => {
              dispatch(openAddPostModal(false));
            }}
          />
        </div>

        <div className="p-4">
          {/** */}
          <Header />

          <div className={`max-h-73 overflow-y-auto relative`}>
            <TextBox
              onChangePostContent={onChangePostContent}
              postContent={postContent}
              uploadedMediasLength={uploadedMedias.length}
            />
            {uploadedMedias.length > 0 && (
              <UploadedMedias uploadedMedias={uploadedMedias} />
            )}
          </div>
          <ColorCard
            postContent={postContent}
            uploadedMediaLength={uploadedMedias.at.length}
          />

          {/** footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
