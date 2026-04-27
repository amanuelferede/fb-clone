import Image from "next/image";
import CurrentUserProfilePic from "./currentuserprofilepic";
import CurrentUserName from "./currentusername";
import ColorCard from "../../colorcard";
import Footer from "../../footer";
import TextBox from "../../textbox";
import UploadedMedias from "../../uploadedmedias/uploadedmedias";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { setPostConent } from "@/app/store/slices/addpost";
import { ChangeEvent } from "react";
import Container from "@/app/components/generic/container";
export default function Body() {
  const dispatch = useAppDispatch();

  const uploadedMedias = useAppSelector((state) => state.addPost.uploadedFiles);
  const postContent = useAppSelector((state) => state.addPost.postContent);

  const onChangePostContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setPostConent(e.target.value));
  };
  return (
    <Container>
      <Container className="flex space-x-2 mb-2">
        <CurrentUserProfilePic />
        <Container className="flex flex-col">
          <CurrentUserName />
          <Container className="flex space-x-0.5 bg-gray-200 p-1 items-center justify-center rounded-md">
            <Image
              src={`/add post/group.png`}
              alt="User"
              width={0}
              height={0}
              sizes="100vh"
              className="w-4 h-4"
            />
            <p className="text-sm">Freinds</p>
          </Container>
        </Container>
      </Container>
      <Container className={`max-h-73 overflow-y-auto relative`}>
        <TextBox
          onChangePostContent={onChangePostContent}
          postContent={postContent}
          uploadedMediasLength={uploadedMedias.length}
        />
        {uploadedMedias.length > 0 && (
          <UploadedMedias uploadedMedias={uploadedMedias} />
        )}
      </Container>
      <ColorCard
        postContent={postContent}
        uploadedMediaLength={uploadedMedias.at.length}
      />
      <Footer />
    </Container>
  );
}
