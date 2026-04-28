import Footer from "../../common/footer";
import Image from "next/image";
import Gallery from "../../components/gallery/gallery";
import { medias } from "@/app/seed/faker/medias";
import Box from "@/app/components/generic/box";
import FlexRow from "@/app/components/generic/flexrow";
import FlexCol from "@/app/components/generic/flexcol";
import Text from "@/app/components/generic/text";
import Link from "next/link";
export default function OriginalGroupPost() {
  return (
    <Box
      width="w-full"
      shadow="shadow-sm"
      rounded="rounded-xl"
      marginTop="mt-3"
      backgroundColor="bg-white"
    >
      <Box paddingX="px-3" paddingTop="pt-3" paddingBottom="2">
        <FlexRow spaceX="space-x-3">
          <Box
            width="w-12"
            height="h-12"
            position="relative"
            rounded="rounded-lg"
          >
            <Link href={`/ziamanuel`}>
              <Image
                src={`/users/19.jpg`}
                alt="Amanuel Fered"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-full brightness-80 rounded-lg object-cover"
              />
            </Link>

            <Link href={`/ziamanuel`}>
              <Image
                src={`/users/14.jpg`}
                alt="Amanuel Fered"
                width={0}
                height={0}
                sizes="100vh"
                className="absolute -right-1 -bottom-1 w-7 h-7 rounded-full object-cover border border-white"
              />
            </Link>
          </Box>
          <FlexCol>
            <Text fontSize="text-[1rem]" fontWeight="font-semibold">
              Amanuel Ferede
            </Text>
            <Text color="text-zinc-500" fontWeight="font-semibold">
              December 16 at 9:40 PM
            </Text>
          </FlexCol>
        </FlexRow>
      </Box>
      <Box width="w-full" padding="p-2">
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
