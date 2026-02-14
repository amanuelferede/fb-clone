import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <div className="flex space-x-3 p-3">
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
      <div className="flex flex-col">
        <Link href={`/ziamanuel`}>
          <p className="text-[0.99rem] font-semibold">Amanuel Fered</p>
        </Link>
        <p className=" text-zinc-500 text-[0.96rem] font-semibold">
          December 16 at 9:40 PM
        </p>
      </div>
    </div>
  );
}
