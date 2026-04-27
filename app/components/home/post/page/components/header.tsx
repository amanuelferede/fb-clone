import FlexRow from "../../components/flexrow";
import FlexCol from "../../components/flexcol";
import PostDate from "../../components/postdate";
import Text from "@/app/components/generic/textg";
import Link from "next/link";
import ProfilePic from "../../components/profilepic";
export default function Header() {
  return (
    <FlexRow>
      <ProfilePic />
      <FlexCol>
        <Link href={`/ziamanuel`}>
          <Text className="text-[0.99rem] font-semibold">
            Ethiopian Broadcasting Coorporation
          </Text>
        </Link>
        <PostDate />
      </FlexCol>
    </FlexRow>
  );
}
