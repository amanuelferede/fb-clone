import Link from "next/link";
import Text from "@/app/components/generic/textg";
export default function PostOwner({ owner }: { owner: string }) {
  return (
    <Link href={`/ziamanuel`}>
      <Text className="text-[0.99rem] font-semibold">{owner}</Text>
    </Link>
  );
}
