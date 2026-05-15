"use client";

import ColorCard from "./colorcard";
import Footer from "./footer";
import TextBox from "./textbox";
import UploadedMedias from "./uploadedmedias/uploadedmedias";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { setPostConent } from "@/app/store/slices/addpost";
import { ChangeEvent } from "react";
import CurrentUser from "./current user";
import PostModalHeader from "../../generic/post modal/header";
import AddPostModal from "../../generic/post modal/modal";
import AddPostModalBody from "../../generic/post modal/body";
export default function CreatePostModal() {
  const dispatch = useAppDispatch();

  const uploadedMedias = useAppSelector((state) => state.addPost.uploadedFiles);
  const postContent = useAppSelector((state) => state.addPost.postContent);

  const onChangePostContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setPostConent(e.target.value));
  };
  return (
    <AddPostModal>
      <PostModalHeader />
      <CurrentUser />
      <AddPostModalBody>
        <TextBox
          onChangePostContent={onChangePostContent}
          postContent={postContent}
          uploadedMediasLength={uploadedMedias.length}
        />
        {uploadedMedias.length > 0 && (
          <UploadedMedias uploadedMedias={uploadedMedias} />
        )}
      </AddPostModalBody>

      <ColorCard
        postContent={postContent}
        uploadedMediaLength={uploadedMedias.at.length}
      />
      <Footer />
    </AddPostModal>
  );
}
