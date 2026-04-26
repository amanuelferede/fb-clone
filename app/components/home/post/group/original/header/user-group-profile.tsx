import Image from "next/image";
export default function UserGroupProfile() {
  return (
    <>
      <Image
        src={`/users/19.jpg`}
        alt="Amanuel Fered"
        width={0}
        height={0}
        sizes="100vh"
        className="w-full h-full brightness-80 rounded-lg object-cover"
      />
      <Image
        src={`/users/14.jpg`}
        alt="Amanuel Fered"
        width={0}
        height={0}
        sizes="100vh"
        className="absolute -right-1 -bottom-1 w-7 h-7 rounded-full object-cover border border-white"
      />
    </>
  );
}
