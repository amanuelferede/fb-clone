"use client";

import ColorCard from "./colorcard";
import Footer from "./footer";
import TextBox from "./textbox";
import UploadedMedias from "./uploadedmedias/uploadedmedias";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { setPostConent } from "@/app/store/slices/addpost";
import { ChangeEvent } from "react";
import Header from "./header";
import ModalContainer from "./modal container";
import CurrentUser from "./current user";
import BodyContainer from "./body container";
export default function PostModal() {
  const dispatch = useAppDispatch();

  const uploadedMedias = useAppSelector((state) => state.addPost.uploadedFiles);
  const postContent = useAppSelector((state) => state.addPost.postContent);

  const onChangePostContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setPostConent(e.target.value));
  };
  return (
    <ModalContainer>
      <Header />
      <CurrentUser />
      <BodyContainer>
        <TextBox
          onChangePostContent={onChangePostContent}
          postContent={postContent}
          uploadedMediasLength={uploadedMedias.length}
        />
        {uploadedMedias.length > 0 && (
          <UploadedMedias uploadedMedias={uploadedMedias} />
        )}
      </BodyContainer>

      <ColorCard
        postContent={postContent}
        uploadedMediaLength={uploadedMedias.at.length}
      />
      <Footer />
    </ModalContainer>
  );
}
