import { medias } from "@/app/seed/faker/medias";
import Gallery from "../../../gallery/gallery";

export default function Content() {
  return (
    <>
      <p className="px-2.5 pb-1.5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
        excepturi tenetur beatae, culpa velit impedit, cum inventore aliquid
        natus ex numquam! Aut repellat fugiat libero labore unde sunt. Ab,
        nesciunt.
      </p>
      <Gallery medias={medias} postType="original" />
    </>
  );
}
