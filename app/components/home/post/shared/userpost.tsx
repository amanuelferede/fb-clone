import { medias } from "@/app/seed/faker/medias";
import PostContent from "../common/content";
import Medias from "../common/medias";
import Header from "../user/original/header";

export default function SharedUserPost() {
  return (
    <div className="w-full p-3">
      <div className="border border-gray-300 rounded-xl pb-1.5">
        <div className="md:h-screen h-[50vh] mt-2">
          <Medias type="share" medias={medias} />
        </div>
        <Header />
        <PostContent />
      </div>
    </div>
  );
}
