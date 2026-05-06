import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <div className="flex space-x-3 px-2.5 pt-2.5">
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
        <p className="text-[1rem] font-semibold">December 16 at 9:40 PM</p>
        <p className="text-[1rem] text-zinc-500 font-semibold">
          Ethiopian Broadcasting Corporation.
        </p>
      </div>
    </div>
  );
}
