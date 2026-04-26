import { medias } from "@/app/seed/faker/medias";

import Medias from "../../common/medias";
import Text from "@/app/components/generic/post/text";
import Container from "@/app/components/generic/container";

export default function Body() {
  return (
    <Container className="w-full">
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis modi
        earum odio cumque itaque. Laudantium assumenda dolorem, sed quam quos
        animi qui molestiae ab quisquam doloribus esse neque fugiat vitae!
      </Text>
      <div className="md:h-screen h-[50vh] mt-2">
        <Medias type="original" medias={medias} />
      </div>
    </Container>
  );
}
