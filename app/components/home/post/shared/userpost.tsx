import Image from "next/image";
import Box from "@/app/components/generic/box";
import FlexRow from "@/app/components/generic/flexrow";
import FlexCol from "@/app/components/generic/flexcol";
import Text from "@/app/components/generic/text";
import Link from "next/link";
import Gallery from "../components/gallery/gallery";
import { medias } from "@/app/seed/faker/medias";
export default function SharedUserPost() {
  return (
    <Box padding="p-4">
      <Box
        borderWidth="border"
        borderColor="border-gray-300"
        rounded="rounded-xl"
        padding="p-2"
      >
        <Box>
          <FlexRow spaceX="space-x-3">
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
      </Box>
    </Box>
  );
}
