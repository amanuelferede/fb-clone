import Image from "next/image";
export default function CurrentUserProfilePic() {
  return (
    <Image
      src={`/users/11.jpg`}
      alt="User"
      width={0}
      height={0}
      sizes="100vh"
      className="w-10 h-10 rounded-full"
    />
  );
}
