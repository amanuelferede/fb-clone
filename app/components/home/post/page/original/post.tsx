import { medias } from "@/app/seed/faker/medias";
import Header from "./header";
import PostContent from "../../common/content";
import Medias from "../../common/medias";

export default function OriginalPagePost() {
  return (
    <div className="w-full">
      <Header />
      <PostContent />
      <div className="h-screen mt-2">
        <Medias type="original" medias={medias} />
      </div>
    </div>
  );
}
