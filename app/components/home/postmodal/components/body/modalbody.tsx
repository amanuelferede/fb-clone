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
import FlexRow1 from "./components/flexrow container1";
import FlexRow2 from "./components/flexrow container2";
import FlexCol from "./components/flexcol";
import Container from "./components/container";
export default function Body() {
  const dispatch = useAppDispatch();

  const uploadedMedias = useAppSelector((state) => state.addPost.uploadedFiles);
  const postContent = useAppSelector((state) => state.addPost.postContent);

  const onChangePostContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setPostConent(e.target.value));
  };
  return (
    <>
      <FlexRow1>
        <CurrentUserProfilePic />
        <FlexCol>
          <CurrentUserName />
          <FlexRow2>
            <Image
              src={`/add post/group.png`}
              alt="User"
              width={0}
              height={0}
              sizes="100vh"
              className="w-4 h-4"
            />
            <p className="text-sm">Freinds</p>
          </FlexRow2>
        </FlexCol>
      </FlexRow1>
      <Container>
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
    </>
  );
}
