import { medias } from "@/app/seed/faker/medias";
import Medias from "../../common/medias";
import Container from "@/app/components/generic/container";
import Text from "@/app/components/generic/post/text";

export default function Body() {
  return (
    <>
      <Text>
        The BBC witnessed dramatic scenes on a beach in of Northern France this
        morning when a boat was destroyed by police moments before it set off
        for the UK. All those onboard clambered to safety as the boat collapsed.
        French police have strict rules that bar them from going into the sea,
        but officers are allowed to intervene, if they believe lives are at
        immediate risk. #France #Migrants #UK #MigrantBoat#Refugees
        #NorthernFrance #News #BBCNews
      </Text>
      <Container className="md:h-screen h-[50vh] mt-2">
        <Medias type="original" medias={medias} />
      </Container>
    </>
  );
}
