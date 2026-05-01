import Footer from "../../common/footer";
import Image from "next/image";
import Gallery from "../../components/gallery/gallery";
import { medias } from "@/app/seed/faker/medias";
import Box from "@/app/components/generic/box";
import FlexRow from "@/app/components/generic/flexrow";
import FlexCol from "@/app/components/generic/flexcol";
import Text from "@/app/components/generic/text";
import Link from "next/link";

export default function OriginalUserPost() {
  /**
   * const [isPending, formAction, ]
   */
  return (
    <Box
      width="full"
      shadow="sm"
      borderRadius="xl"
      marginTop={3}
      background="white"
    >
      <Box paddingX={3} paddingTop={3} paddingBottom={2}>
        <FlexRow spaceX={3}>
          <Link href={`/ziamanuel`}>
            <Image
              src={`/users/4.jpg`}
              alt="Amanuel Fered"
              width={0}
              height={0}
              sizes="100vh"
              className="w-10 h-10 rounded-full object-cover"
            />
          </Link>
          <FlexCol>
            <Text fontSize={1} fontWeight="semibold">
              Amanuel Ferede
            </Text>
            <Text color="zinc-500" fontWeight="semibold">
              December 16 at 9:40 PM
            </Text>
          </FlexCol>
        </FlexRow>
      </Box>
      <Box width="full" padding={2}>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
          consequatur, necessitatibus repudiandae nihil sequi eveniet numquam
          suscipit dicta ea impedit veniam officia, soluta similique repellat
          vero voluptatem delectus? Minus, iusto.
        </Text>
      </Box>
      <Gallery medias={medias} postType="original" />
      <Footer />
    </Box>
  );
}
