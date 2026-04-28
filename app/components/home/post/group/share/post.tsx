import Footer from "../../common/footer";
import Image from "next/image";
import Box from "@/app/components/generic/box";
import FlexRow from "@/app/components/generic/flexrow";
import FlexCol from "@/app/components/generic/flexcol";
import Text from "@/app/components/generic/text";
import Link from "next/link";
import SharedPagePost from "../../shared/grouppost";

export default function ToGroupSharePost() {
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
      <Box width="w-full" paddingX="px-3">
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
          consequatur, necessitatibus repudiandae nihil sequi eveniet numquam
          suscipit dicta ea impedit veniam officia, soluta similique repellat
          vero voluptatem delectus? Minus, iusto.
        </Text>
      </Box>
      <SharedPagePost />
      <Footer />
    </Box>
  );
}
