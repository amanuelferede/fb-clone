import { medias } from "@/app/seed/faker/medias";
import Header from "./header";
import PostContent from "../../common/content";
import Medias from "../../common/medias";

export default function OriginalUserPost() {
  return (
    <div className="w-full">
      <Header />
      <PostContent />
      <div className="md:h-screen h-[50vh] mt-2">
        <Medias type="original" medias={medias} />
      </div>
    </div>
  );
}
