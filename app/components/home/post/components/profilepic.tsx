import Link from "next/link";
import Image from "next/image";
export default function ProfilePic() {
  return (
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
  );
}
