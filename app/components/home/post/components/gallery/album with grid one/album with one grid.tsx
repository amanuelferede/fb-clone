import Container from "../components/container";
import Item1 from "./album1/components/item1";
import Image from "next/image";
export default function AlbumWithGridOne({
  medias,
}: {
  medias: {
    type: string;
    id: number;
    url: string;
  }[];
}) {
  return (
    <Container>
      <Item1>
        <Image
          src={`/users/4.jpg`}
          alt="Amanuel Fered"
          width={0}
          height={0}
          sizes="100vh"
          className="w-full h-full object-cover"
        />
      </Item1>
    </Container>
  );
}
